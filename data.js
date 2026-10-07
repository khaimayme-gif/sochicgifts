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
