// Pulls the live menu from the So Chic Gifts admin and swaps it into CATEGORIES (data.js).
//
// - Categories the admin has published items for use the admin's items for the Thailand (฿) tab.
// - Everything else (other categories, the Japan tab, taglines, notes) stays as written in data.js,
//   and so does the whole site if the admin can't be reached.
// - Match is by category name in the admin: "Cake", "Cake Collection", "cake" or the code "CK"
//   all map to the Cake Collection. Same for Bouquet, Balloons, etc.
//
// Pages wait for `menuReady` before rendering.
(function () {
  const ADMIN_URL = 'https://scg-admin-dashboard.vercel.app';
  const CACHE_KEY = 'scg-menu-cache-v1';
  const TIMEOUT_MS = 3500;

  const norm = (s) => String(s || '').toLowerCase().replace(/\bcollection\b/g, '').replace(/[^a-z0-9]+/g, ' ').trim();

  function apply(menu) {
    if (!menu || !Array.isArray(menu.categories)) return;
    menu.categories.forEach((adminCat) => {
      const key = norm(adminCat.category);
      const cat = CATEGORIES.find((c) => [c.id, c.code, c.name].some((v) => norm(v) === key));
      if (!cat || !adminCat.items.length) return;
      cat.th = adminCat.items.map((it) => ({
        name: it.name,
        detail: it.description || '',
        price: it.price,
        group: it.group || undefined,
        photo: it.photo_url || undefined,
        code: it.item_id || undefined,
      }));
    });
  }

  function readCache() {
    try { return JSON.parse(localStorage.getItem(CACHE_KEY)); } catch { return null; }
  }

  window.menuReady = (async function () {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(ADMIN_URL + '/api/public/menu', { signal: controller.signal });
      if (!res.ok) throw new Error('menu ' + res.status);
      const menu = await res.json();
      try { localStorage.setItem(CACHE_KEY, JSON.stringify(menu)); } catch { /* private mode */ }
      apply(menu);
    } catch {
      apply(readCache()); // last good copy, else nothing: data.js is used as is
    } finally {
      clearTimeout(timer);
    }
  })();
})();
