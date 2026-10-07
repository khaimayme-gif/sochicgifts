// Loads one country's live menu from the So Chic Gifts admin.
//
// Thailand and Japan are separate catalogs in the admin. A page calls `loadMenu('thailand')`
// (or 'japan') and gets back the categories that country sells, each with its `items`.
//
// - Category details (photo, tagline, note) come from data.js. An admin category is matched
//   to its data.js entry by name or code: "Cake", "Cake Collection", "cake" or "CK" all map to
//   the Cake Collection. An admin category with no data.js entry still shows, by its own name.
// - Builders (data.js entries with a `link`) aren't admin items and show in every country.
// - If the admin can't be reached, the last menu this browser loaded is used. If there is
//   none, `failed` is true and only the builders are returned.
(function () {
  const ADMIN_URL = 'https://scg-admin-dashboard.vercel.app';
  const CACHE_KEY = 'scg-menu-cache-v3';
  const TIMEOUT_MS = 3500;

  window.COUNTRIES = {
    thailand: { key: 'thailand', label: 'Thailand', flag: '🇹🇭', symbol: '฿', currency: 'THB',
                note: 'Nationwide delivery across Thailand, managed by our Thailand based team.' },
    japan:    { key: 'japan', label: 'Japan', flag: '🇯🇵', symbol: '¥', currency: 'JPY',
                note: 'Delivery throughout Japan, handled by our Japan based admin.' },
  };

  const norm = (s) => String(s || '').toLowerCase().replace(/\bcollection\b/g, '').replace(/[^a-z0-9]+/g, ' ').trim();

  function toCategories(menu) {
    const result = CATEGORIES.filter((c) => c.link).map((c) => ({ ...c, items: [] }));
    (menu && Array.isArray(menu.categories) ? menu.categories : []).forEach((adminCat) => {
      if (!adminCat.items || !adminCat.items.length) return;
      const key = norm(adminCat.category);
      const meta = CATEGORIES.find((c) => [c.id, c.code, c.name].some((v) => norm(v) === key))
        || { id: key.replace(/ /g, '-'), code: '', icon: '🎁', name: adminCat.category, tagline: '', note: '' };
      result.push({
        ...meta,
        items: adminCat.items.map((it) => ({
          name: it.name,
          detail: it.description || '',
          price: it.price === null || it.price === '' ? null : Number(it.price),
          group: it.group || undefined,
          photo: it.photo_url || undefined,
          code: it.item_id || undefined,
        })),
      });
    });
    // Keep data.js order, with any categories it doesn't know about at the end.
    const order = (c) => { const i = CATEGORIES.findIndex((m) => m.id === c.id); return i < 0 ? CATEGORIES.length : i; };
    return result.sort((a, b) => order(a) - order(b));
  }

  function readCache() {
    try { return JSON.parse(localStorage.getItem(CACHE_KEY)) || {}; } catch { return {}; }
  }

  window.loadMenu = async function (country) {
    const cache = readCache();
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(`${ADMIN_URL}/api/public/menu?country=${country}`, { signal: controller.signal });
      if (!res.ok) throw new Error('menu ' + res.status);
      const menu = await res.json();
      // Only trust an answer that says which country it is for.
      if (menu.country !== country) throw new Error('wrong country');
      try { localStorage.setItem(CACHE_KEY, JSON.stringify({ ...cache, [country]: menu })); } catch { /* private mode */ }
      return { categories: toCategories(menu), failed: false };
    } catch {
      const cached = cache[country];
      return { categories: toCategories(cached), failed: !cached };
    } finally {
      clearTimeout(timer);
    }
  };
})();
