// Pulls the live menu from the So Chic Gifts admin and swaps it into CATEGORIES (data.js).
//
// - Categories the admin has published items for use the admin's items for the Thailand (฿) tab,
//   and the admin's Japan catalog for the Japan (¥) tab.
// - Everything else (other categories, taglines, notes) stays as written in data.js,
//   and so does the whole site if the admin can't be reached.
// - Match is by category name in the admin: "Cake", "Cake Collection", "cake" or the code "CK"
//   all map to the Cake Collection. Same for Bouquet, Balloons, etc.
//
// Pages wait for `menuReady` before rendering.
(function () {
  const ADMIN_URL = 'https://scg-admin-dashboard.vercel.app';
  const CACHE_KEY = 'scg-menu-cache-v2';
  const TIMEOUT_MS = 3500;

  const norm = (s) => String(s || '').toLowerCase().replace(/\bcollection\b/g, '').replace(/[^a-z0-9]+/g, ' ').trim();

  // `target` is the list on each category to replace: 'th' (Thailand tab) or 'jp' (Japan tab).
  function apply(menu, target) {
    if (!menu || !Array.isArray(menu.categories)) return;
    menu.categories.forEach((adminCat) => {
      const key = norm(adminCat.category);
      const cat = CATEGORIES.find((c) => [c.id, c.code, c.name].some((v) => norm(v) === key));
      if (!cat || !adminCat.items.length) return;
      cat[target] = adminCat.items.map((it) => ({
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

  async function load(country) {
    const res = await fetch(`${ADMIN_URL}/api/public/menu?country=${country}`, { signal: controller.signal });
    if (!res.ok) throw new Error('menu ' + res.status);
    return res.json();
  }

  const controller = new AbortController();

  window.menuReady = (async function () {
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    const cached = readCache() || {};
    const fresh = {};
    // Each country is loaded on its own, so a failure in one still leaves the other in place.
    await Promise.all(
      [['thailand', 'th'], ['japan', 'jp']].map(async ([country, target]) => {
        try {
          const menu = await load(country);
          // An admin that predates the Japan catalog ignores ?country= and answers with Thailand's
          // items, so only trust the answer if it says which country it is for.
          if (menu.country !== country) throw new Error('no country support');
          fresh[country] = menu;
          apply(menu, target);
        } catch {
          apply(cached[country], target); // last good copy, else data.js is used as is
        }
      })
    );
    try { localStorage.setItem(CACHE_KEY, JSON.stringify({ ...cached, ...fresh })); } catch { /* private mode */ }
    clearTimeout(timer);
  })();
})();
