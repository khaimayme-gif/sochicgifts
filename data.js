const CATEGORIES = [
  {
    id:'cake', code:'CK', icon:'🎂', photo:'images/menu/cake.png', name:'Cake Collection', tagline:'The extra layer that makes it unforgettable.',
    note:'Custom flavors, colors, or written messages available — additional charges apply.'
  },
  {
    id:'bouquet', code:'BQ', icon:'💐', photo:'images/menu/bouquet.png', name:'Bouquet Collection', tagline:'Real flowers, or flowers that last forever.',
    note:'Pink, white, or mixed tones. Custom color palettes or added stems cost extra. Real flowers need 3 days\' notice.'
  },
  {
    id:'balloons', code:'BL', icon:'🎈', photo:'images/menu/balloons.png', name:'Balloons', tagline:'A little lift for any occasion.',
    note:''
  },
  {
    id:'coffee', code:'CF', icon:'☕', photo:'images/menu/coffeeandflowers.png', name:'Coffee + Flower Set', tagline:'Morning warmth, delivered with roses.',
    link:'coffee-and-flowers.html',
    note:''
  },
  {
    id:'giftbox', code:'GB', icon:'🎁', photo:'images/menu/giftbox.png', name:'Surprise Giftbox', tagline:'Because they deserve more than flowers.',
    link:'surprise-box.html',
    note:'Every box is fully customizable — swap items or build a themed box from scratch. Final price depends on contents.'
  },
  {
    id:'photobox', code:'PB', icon:'📸', photo:'images/menu/photobox.png', name:'Photo Giftbox', tagline:'Memories they can hold.',
    note:''
  },
  {
    id:'tshirt', code:'TS', icon:'👕', photo:'images/menu/tshirt.png', name:'Customized T-Shirts', tagline:'Wearable keepsakes.',
    note:''
  },
  {
    id:'snackbox', code:'SB', icon:'🍬', photo:'images/menu/snackbox.png', name:'Snack Box', tagline:'A Little Box of Happiness.',
    note:''
  },
  {
    id:'blindbox', code:'BX', icon:'🧸', photo:'images/menu/blindbox.png', name:'Pop Mart Blind Box', tagline:'A little mystery, a lot of joy.',
    note:'Want a specific blind box series? Series requests depend on availability and may change the price.'
  },
  {
    id:'chocolate', code:'CH', icon:'🍫', photo:'images/menu/chocolate.png', name:'Chocolate Collection', tagline:'Small gestures, gold wrapped.',
    note:'Square, heart, or classic box shape. Custom ribbon colors available on request.'
  },
  {
    id:'lovenote', code:'LN', icon:'💌', photo:'images/menu/lovenote.png', name:'QR Love Note', tagline:'Your words, delivered with every gift.',
    note:'A message the recipient unlocks by scanning the tag on their gift — photos or a voice note can be added.'
  }
];

// Category details only: photo, tagline and note for each kind of gift.
// The items and prices themselves come from the admin dashboard, one catalog per country
// (see menu-sync.js). An admin category is matched to an entry here by name or code,
// e.g. "Cake", "Cake Collection" or "CK" all use the Cake Collection entry.
// Entries with a `link` are builders (their own page) and show in every country's menu.

// ---------------------------------------------------------------------------------------------
// The Thailand menu page (menu.html?country=thailand) is one scrolling page built straight from
// the admin's Thailand catalog, in the admin's order. Items, photos and prices come from the
// admin; the words around them (section titles, taglines, notes) and a few banner photos live
// here, keyed by the admin's item type name. A type that isn't listed still shows, under its
// own name. Taken from the So Chic Gifts menu book.
const MENU_SECTIONS = {
  'QR Love Note': {
    nav: 'Love Note', title: 'QR Love Note', tagline: 'A little website of your memories, opened with one scan.',
    link: { href: 'templates.html', label: 'Browse templates' },
  },
  'Cake': { nav: 'Cakes', title: 'Cakes', tagline: "Choose the perfect cake for your loved one's special day.",
    notes: ['Please order cakes at least 2 days in advance.'] },
  'Bouquet': { nav: 'Bouquets', title: 'Bouquets', tagline: 'Fresh roses, hand-wrapped for every kind of love.' },
  'Polaroid Photos': { nav: 'Polaroids', title: 'Polaroids', tagline: 'Your favourite memories, printed to hold and keep.' },
  'Frames': { nav: 'Frames', title: 'Frames', tagline: 'Your photos and story, framed to keep forever.' },
  'Customized T-Shirts': { nav: 'Shirts', title: 'Shirts', tagline: 'Wear your love. Custom shirts printed with your photos and words.' },
  'Coffee + Flowers': {
    nav: 'Coffee + Flowers', title: 'Coffee + Flowers', tagline: 'A little treat, a lot of love.',
    notes: ['Coffee from Starbucks, Café Amazon or Inthanin, hot or iced (subject to availability).',
            'Roses in pink, red or white.', 'Order 3 days in advance.',
            'Free add-ons: envelope, bow, message card and 1 polaroid.'],
    link: { href: 'coffee-and-flowers.html', label: 'Build your set' },
  },
  'Snack Box': { nav: 'Snack Box', title: 'Snack Box', tagline: 'A little treat, a lot of love.',
    notes: ['Order 3 days in advance. Snacks vary by availability.'] },
  'Gift Box': {
    nav: 'Gift Box', title: 'Gift Box', tagline: 'Six thoughtful gifts, curated and wrapped in one beautiful box.',
    notes: ['Free with every box: envelope, bow, message card and 1 polaroid.',
            'Order 3 days in advance. Items vary by availability.'],
    link: { href: 'surprise-box.html', label: 'Build your own box' },
  },
};

// Per group ("Type/Group"): an optional note and banner photo shown with its price list.
const MENU_GROUPS = {
  'QR Love Note/QR Love Note': { photo: 'images/menu/thailand/qr-love-note.jpg',
    note: 'A personal website made just for your loved one. They scan a QR code and open a page full of your memories together, beautifully designed from one of our templates: photos, videos, music, love letters, a countdown and surprises. Ready in 3 hours.' },
  'Cake/Birthday Cake': { photo: 'images/menu/thailand/birthday-cake.jpg',
    note: "A sweet classic for their special day. Choose a design and size, and we'll add their name and wishes. Flavors: chocolate, strawberry & vanilla." },
  'Cake/Bowcake': { photo: 'images/menu/thailand/bowcake.jpg', note: 'Signature cakes from Bowcake, a much-loved Thai cake shop.' },
  'Cake/Photo Cake': { photo: 'images/menu/thailand/photo-cake.jpg',
    note: 'Their favourite photo, printed on a cake made for them. Flavors: chocolate, strawberry & vanilla.' },
  'Cake/Cupcakes': { photo: 'images/menu/thailand/cupcakes.jpg', note: 'Little treats to make them smile. Perfect for sharing or a sweet little surprise.' },
  'Cake/Tier Cake': { photo: 'images/menu/thailand/tier-cake.jpg',
    note: 'A little extra elegance for a big celebration. Flavors: chocolate, strawberry & vanilla.' },
  'Bouquet/Artificial Flowers': { note: 'Everlasting blooms that never wilt, just like your love.' },
  'Bouquet/Toy Bouquet': { note: 'Soft, cuddly bouquets that stay with them forever.' },
  'Polaroid Photos/Polaroid Photos': { photo: 'images/menu/thailand/polaroid-photos.jpg' },
  'Customized T-Shirts/Customized Shirt': { photo: 'images/menu/thailand/customized-shirt.jpg' },
  'Customized T-Shirts/Designs': { note: 'Pick a design we love, or send us your own idea.' },
  'Snack Box/Themes': { note: 'Pick their colour.' },
  'Snack Box/Sizes': { note: 'Choose your size.' },
};
