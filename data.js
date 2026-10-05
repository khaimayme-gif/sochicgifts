const CATEGORIES = [
  {
    id:'cake', code:'CK', icon:'🎂', photo:'images/menu/cake.png', name:'Cake Collection', tagline:'The extra layer that makes it unforgettable.',
    th:[
      {name:'Design 1', detail:'4 inches', group:'Birthday Cake', price:450, photo:'images/menu/cake-designs/design-1.jpg'},
      {name:'Design 2', detail:'6 inches', group:'Birthday Cake', price:450, photo:'images/menu/cake-designs/design-2.jpg'},
      {name:'Design 3', detail:'8 inches', group:'Birthday Cake', price:450, photo:'images/menu/cake-designs/design-3.jpg'},
      {name:'Design 4', detail:'', group:'Birthday Cake', price:450, photo:'images/menu/cake-designs/design-4.jpg'},
      {name:'Design 5', detail:'', group:'Birthday Cake', price:450, photo:'images/menu/cake-designs/design-5.jpg'},
      {name:'Design 6', detail:'', group:'Birthday Cake', price:450, photo:'images/menu/cake-designs/design-6.jpg'},
      {name:'Design 7', detail:'', group:'Birthday Cake', price:450, photo:'images/menu/cake-designs/design-7.jpg'},
      {name:'Design 8', detail:'', group:'Birthday Cake', price:450, photo:'images/menu/cake-designs/design-8.jpg'},
      {name:'Design 9', detail:'', group:'Birthday Cake', price:450, photo:'images/menu/cake-designs/design-9.jpg'},
      {name:'Design 10', detail:'', group:'Birthday Cake', price:450, photo:'images/menu/cake-designs/design-10.jpg'},
      {name:'Design 11', detail:'', group:'Birthday Cake', price:450, photo:'images/menu/cake-designs/design-11.jpg'},
      {name:'Design 12', detail:'', group:'Birthday Cake', price:450, photo:'images/menu/cake-designs/design-12.jpg'},
      {name:'Design 13', detail:'', group:'Birthday Cake', price:450, photo:'images/menu/cake-designs/design-13.jpg'},
      {name:'Design 11', detail:'', group:'Birthday Cake', price:450, photo:'images/menu/cake-designs/design-11.jpg'},
      {name:'Design 12', detail:'', group:'Birthday Cake', price:450, photo:'images/menu/cake-designs/design-12.jpg'},
      {name:'Design 13', detail:'', group:'Birthday Cake', price:450, photo:'images/menu/cake-designs/design-13.jpg'},
    ],
    jp:[
      {name:'Design 1', detail:'4 inches', price:450, photo:'images/menu/cake-designs/design-1.jpg'},
      {name:'Design 2', detail:'6 inches', price:450, photo:'images/menu/cake-designs/design-2.jpg'},
      {name:'Design 3', detail:'8 inches', price:450, photo:'images/menu/cake-designs/design-3.jpg'},
      {name:'Design 4', detail:'', price:450, photo:'images/menu/cake-designs/design-4.jpg'},
      {name:'Design 5', detail:'', price:450, photo:'images/menu/cake-designs/design-5.jpg'},
      {name:'Design 6', detail:'', price:450, photo:'images/menu/cake-designs/design-6.jpg'},
      {name:'Design 7', detail:'', price:450, photo:'images/menu/cake-designs/design-7.jpg'},
      {name:'Design 8', detail:'', price:450, photo:'images/menu/cake-designs/design-8.jpg'},
      {name:'Design 9', detail:'', price:450, photo:'images/menu/cake-designs/design-9.jpg'},
      {name:'Design 10', detail:'', price:450, photo:'images/menu/cake-designs/design-10.jpg'},
      {name:'Design 11', detail:'', price:450, photo:'images/menu/cake-designs/design-11.jpg'},
      {name:'Design 12', detail:'', price:450, photo:'images/menu/cake-designs/design-12.jpg'},
      {name:'Design 13', detail:'', price:450, photo:'images/menu/cake-designs/design-13.jpg'},
    ],
    note:'Custom flavors, colors, or written messages available — additional charges apply.'
  },
  {
    id:'bouquet', code:'BQ', icon:'💐', photo:'images/menu/bouquet.png', name:'Bouquet Collection', tagline:'Real flowers, or flowers that last forever.',
    th:[
      {name:'Rose Bouquet', detail:'S — 5 roses', price:590, group:'Real Flowers', photo:'images/menu/bouquet-designs/real-flowers/design-1.png'},
      {name:'Rose Bouquet', detail:'S — 5 roses', price:590, group:'Real Flowers', photo:'images/menu/bouquet-designs/real-flowers/design-2.png'},
      {name:'Rose Bouquet', detail:'S — 5 roses', price:590, group:'Real Flowers', photo:'images/menu/bouquet-designs/real-flowers/design-3.png'},
      {name:'Rose Bouquet', detail:'S — 5 roses', price:590, group:'Real Flowers', photo:'images/menu/bouquet-designs/real-flowers/design-4.png'},
      {name:'Rose Bouquet', detail:'S — 5 roses', price:590, group:'Real Flowers', photo:'images/menu/bouquet-designs/real-flowers/design-5.png'},
      {name:'Rose Bouquet', detail:'S — 5 roses', price:590, group:'Real Flowers', photo:'images/menu/bouquet-designs/real-flowers/design-6.png'},
      {name:'Rose Bouquet', detail:'S — 5 roses', price:590, group:'Real Flowers', photo:'images/menu/bouquet-designs/real-flowers/design-7.png'},
      {name:'Rose Bouquet', detail:'S — 5 roses', price:590, group:'Real Flowers', photo:'images/menu/bouquet-designs/real-flowers/design-7.png'},

      {name:'Artificial Bouquet', detail:'6 designs available', price:590, group:'Artificial Flowers', photo:'images/menu/bouquet-designs/artificial-flowers/design-1.png'},
      {name:'Artificial Bouquet', detail:'6 designs available', price:590, group:'Artificial Flowers', photo:'images/menu/bouquet-designs/artificial-flowers/design-2.png'},
      {name:'Artificial Bouquet', detail:'6 designs available', price:590, group:'Artificial Flowers', photo:'images/menu/bouquet-designs/artificial-flowers/design-3.png'},
      {name:'Artificial Bouquet', detail:'6 designs available', price:590, group:'Artificial Flowers', photo:'images/menu/bouquet-designs/artificial-flowers/design-4.png'},

      {name:'Toy Bouquet', detail:'6 designs available', price:590, group:'Toy Bouquet', photo:'images/menu/bouquet-designs/toy-bouquet/design-1.png'},
      {name:'Toy Bouquet', detail:'6 designs available', price:590, group:'Toy Bouquet', photo:'images/menu/bouquet-designs/toy-bouquet/design-2.png'},
      {name:'Toy Bouquet', detail:'6 designs available', price:590, group:'Toy Bouquet', photo:'images/menu/bouquet-designs/toy-bouquet/design-3.png'},
      {name:'Toy Bouquet', detail:'6 designs available', price:590, group:'Toy Bouquet', photo:'images/menu/bouquet-designs/toy-bouquet/design-4.png'},
      {name:'Toy Bouquet', detail:'6 designs available', price:590, group:'Toy Bouquet', photo:'images/menu/bouquet-designs/toy-bouquet/design-5.png'},
      {name:'Toy Bouquet', detail:'6 designs available', price:590, group:'Toy Bouquet', photo:'images/menu/bouquet-designs/toy-bouquet/design-6.png'},
      {name:'Toy Bouquet', detail:'6 designs available', price:590, group:'Toy Bouquet', photo:'images/menu/bouquet-designs/toy-bouquet/design-6.png'},
      {name:'Toy Bouquet', detail:'6 designs available', price:590, group:'Toy Bouquet', photo:'images/menu/bouquet-designs/toy-bouquet/design-6.png'},

      {name:'Crochet Bouquet', detail:'Handmade, made to order', price:590, group:'Crochet Bouquet', photo:'images/menu/bouquet-designs/crochet-flowers/design-1.png'},
      {name:'Crochet Bouquet', detail:'Handmade, made to order', price:590, group:'Crochet Bouquet', photo:'images/menu/bouquet-designs/crochet-flowers/design-2.png'},
      {name:'Crochet Bouquet', detail:'Handmade, made to order', price:590, group:'Crochet Bouquet', photo:'images/menu/bouquet-designs/crochet-flowers/design-3.png'},
      {name:'Crochet Bouquet', detail:'Handmade, made to order', price:590, group:'Crochet Bouquet', photo:'images/menu/bouquet-designs/crochet-flowers/design-4.png'},
    ],
    jp:[
      {name:'Rose Bouquet', detail:'S — 5 roses', price:590, group:'Real Flowers', photo:'images/menu/bouquet-designs/design-1.jpg'},

      {name:'Rose Bouquet', detail:'M — 15 roses', price:990, group:'Real Flowers', photo:'images/menu/bouquet-designs/design-2.jpg'},

      {name:'Rose Bouquet', detail:'L — 50 roses', price:2090, group:'Real Flowers', photo:'images/menu/bouquet-designs/design-3.jpg'},

      {name:'Artificial Bouquet', detail:'6 designs available', price:590, group:'Artificial Flowers', photo:'images/menu/bouquet-designs/design-4.jpg'},

      {name:'Toy Bouquet', detail:'6 designs available', price:590, group:'Toy Bouquet', photo:'images/menu/bouquet-designs/design-5.jpg'},

      {name:'Crochet Bouquet', detail:'Handmade, made to order', price:null, group:'Crochet Bouquet', photo:'images/menu/bouquet-designs/design-6.jpg'},
    ],
    note:'Pink, white, or mixed tones. Custom color palettes or added stems cost extra. Real flowers need 3 days\' notice.'
  },
  {
    id:'balloons', code:'BL', icon:'🎈', photo:'images/menu/balloons.png', name:'Balloons', tagline:'A little lift for any occasion.',
    th:[
      {name:'Number / Age Balloon Set', detail:'', group:'Balloons', photo:'images/menu/balloons/design-1.jpeg', price:150},
      {name:'Number / Age Balloon Set', detail:'', group:'Balloons', photo:'images/menu/balloons/design-2.jpeg', price:150},
      {name:'Number / Age Balloon Set', detail:'', group:'Balloons', photo:'images/menu/balloons/design-3.jpeg', price:150},
      {name:'Balloon Bouquet', detail:'foil + latex mix', group:'Balloons', photo:'images/menu/balloons/design-4.jpeg', price:150}
    ],
    jp:[
      {name:'Number / Age Balloon Set', detail:'', price:null},
      {name:'Balloon Bouquet', detail:'foil + latex mix', price:null}
    ],
    note:'Add your real sizes and prices in data.js. Custom colors or themes can carry an added charge.'
  },
  {
    id:'coffee', code:'CF', icon:'☕', photo:'images/menu/coffeeandflowers.png', name:'Coffee + Flower Set', tagline:'Morning warmth, delivered with roses.',
    link:'coffee-and-flowers.html',
    th:[
      {name:'Coffee + Petite Bouquet', detail:'', price:'400', group:'Coffee and Flowers', photo:'images/menu/coffeeandflowers.png'}
    ],
    jp:[
      {name:'Coffee + Petite Bouquet', detail:'', price:null}
    ],
    note:'Add your coffee and flower pairing details and pricing in data.js.'
  },
  {
    id:'giftbox', code:'GB', icon:'🎁', photo:'images/menu/giftbox.png', name:'Surprise Giftbox', tagline:'Because they deserve more than flowers.',
    th:[
      {name:'For Her', detail:'tumbler, candle, perfume, hand cream, scrunchie, Ferrero Rocher, QR letter', price:5990},
      {name:'For Him', detail:'tumbler, wallet, candle, perfume, Ferrero Rocher, QR letter', price:6990}
    ],
    jp:[
      {name:'For Her', detail:'tumbler, candle, perfume, hand cream, scrunchie, Ferrero Rocher, QR letter', price:null},
      {name:'For Him', detail:'tumbler, wallet, candle, perfume, Ferrero Rocher, QR letter', price:null}
    ],
    note:'Every box is fully customizable — swap items or build a themed box from scratch. Final price depends on contents.'
  },
  {
    id:'photobox', code:'PB', icon:'📸', photo:'images/menu/photobox.png', name:'Photo Giftbox', tagline:'Memories they can hold.',
    th:[
      {name:'Standard Photo Giftbox', group:'Photo Box', photo:'images/menu/photo-box/design-1.jpeg', detail:'', price:450},
      {name:'Standard Photo Giftbox', group:'Photo Box', photo:'images/menu/photo-box/design-2.jpeg', detail:'', price:450},
      {name:'Standard Photo Giftbox', group:'Photo Box', photo:'images/menu/photo-box/design-3.jpeg', detail:'', price:450},
      {name:'Standard Photo Giftbox', group:'Photo Box', photo:'images/menu/photo-box/design-4.jpeg', detail:'', price:450}
    ],
    jp:[{name:'Standard Photo Giftbox', group:'Photo Box', photo:'images/menu/photo-box/design-1.jpeg', detail:'', price:null}],
    note:'Add your photo print options and pricing in data.js. Custom photo counts or box designs cost more.'
  },
  {
    id:'tshirt', code:'TS', icon:'👕', photo:'images/menu/tshirt.png', name:'Customized T-Shirts', tagline:'Wearable keepsakes.',
    th:[{name:'Standard Print T-Shirt', detail:'', price:null}],
    jp:[{name:'Standard Print T-Shirt', detail:'', price:null}],
    note:'Add your sizing, fabric, and print pricing in data.js. Custom designs or extra print colors typically cost more.'
  },
  {
    id:'website', code:'SB', icon:'💻', photo:'images/menu/snackbox.png', name:'Snack Box', tagline:'A Little Box of Happiness.',
    th:[
      {name:'Basic', detail:'A curated box of snacks, chocolates and drinks based on your favorite color and flavor theme.', group:'Snack Box', photo:'images/menu/snack-box/design-1.jpeg', price:490, best:true},
      {name:'Basic', detail:'A curated box of snacks, chocolates and drinks based on your favorite color and flavor theme.', group:'Snack Box', photo:'images/menu/snack-box/design-2.jpeg', price:490},
      {name:'Basic', detail:'A curated box of snacks, chocolates and drinks based on your favorite color and flavor theme.', group:'Snack Box', photo:'images/menu/snack-box/design-3.jpeg', price:490},
      {name:'Premium', detail:'gallery, letter, music, multiple pages, custom domain, 1 month hosting', group:'Snack Box', photo:'images/menu/snack-box/design-5.jpeg', price:790}
    ],
    jp:[
      {name:'Basic', detail:'gallery, love letter, 1 page, 10 days hosting', price:null},
      {name:'Premium', detail:'gallery, letter, music, multiple pages, custom domain, 1 month hosting', price:null, best:true}
    ],
    note:'Need longer hosting or a fully custom layout? Custom builds are available for an additional charge.'
  },
  {
    id:'blindbox', code:'BX', icon:'🧸', photo:'images/menu/blindbox.png', name:'Pop Mart Blind Box', tagline:'A little mystery, a lot of joy.',
    th:[
      {name:'Blind Box + Cake + Love Note', detail:'', price:1290},
      {name:'Blind Box + Bouquet + Love Note', detail:'', price:1890, best:true}
    ],
    jp:[
      {name:'Blind Box + Cake + Love Note', detail:'', price:null},
      {name:'Blind Box + Bouquet + Love Note', detail:'', price:null, best:true}
    ],
    note:'Want a specific blind box series? Series requests depend on availability and may change the price.'
  },
  {
    id:'chocolate', code:'CH', icon:'🍫', photo:'images/menu/chocolate.png', name:'Chocolate Collection', tagline:'Small gestures, gold wrapped.',
    th:[
      {name:'Ferrero Rocher', detail:'6pcs', price:390},
      {name:'Ferrero Rocher', detail:'9pcs', price:490},
      {name:'Ferrero Rocher', detail:'12pcs', price:690}
    ],
    jp:[
      {name:'Ferrero Rocher', detail:'6pcs', price:null},
      {name:'Ferrero Rocher', detail:'9pcs', price:null},
      {name:'Ferrero Rocher', detail:'12pcs', price:null}
    ],
    note:'Square, heart, or classic box shape. Custom ribbon colors available on request.'
  },
  {
    id:'lovenote', code:'LN', icon:'💌', photo:'images/menu/lovenote.png', name:'QR Love Note', tagline:'Your words, delivered with every gift.',
    th:[
      {name:'Included free', detail:'on orders ฿1,000+', price:0},
      {name:'Standalone', detail:'added to smaller orders', price:null}
    ],
    jp:[
      {name:'Included free', detail:'on orders ¥5,000+', price:0},
      {name:'Standalone', detail:'added to smaller orders', price:null}
    ],
    note:'A message the recipient unlocks by scanning the tag on their gift — photos or a voice note can be added.'
  }
];

// Every category above now has a top-level "photo" field, right next to "icon".
// Individual options (inside th/jp arrays) also support their own "photo" field,
// which overrides the category photo for that specific card.
// Wrong path? Just edit the "photo:" string for that category — nothing else needs to change.
