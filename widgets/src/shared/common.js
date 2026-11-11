// Text and building blocks used on several pages, in both languages.

export const COMMON = {
  en: {
    proof: {
      featured: 'Featured in',
      partners: 'Partners',
      partnersNote: 'Organisations we co-organise events and run projects with',
    },
    checks: ['No obligation, no sales pitch', 'In English, French, Mandarin, Polish, Spanish or German', 'Taiwan, Central & Eastern Europe and the EU'],
    contact: 'Contact us',
  },
  'zh-TW': {
    proof: {
      featured: '媒體報導',
      partners: '合作夥伴',
      partnersNote: '與我們共同舉辦活動、合作專案的組織',
    },
    checks: ['沒有任何義務，也不推銷', '可使用英文、法文、中文、波蘭文、西班牙文或德文', '涵蓋台灣、中東歐與歐盟'],
    contact: '聯絡我們',
  },
};

export const LOGOS = {
  featured: [{ file: 'logos/the-diplomat.png', alt: 'The Diplomat', h: 24 }],
  partners: [
    { file: 'logos/mission-grey.png', alt: 'Mission Grey', h: 30 },
    { file: 'logos/formosa-network.png', alt: 'Formosa Network', h: 54 },
    { file: 'logos/founduz.svg', alt: 'Founduz', h: 34 },
  ],
};

export const ICONS = {
  arrow: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  diag: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>',
  check: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>',
};

// City and Europe photos used across the pages (assets/photos/), with alt text per language.
export const PHOTOS = {
  warsawDusk: { file: 'photos/warsaw-dusk.jpg', en: 'Warsaw city centre at dusk, with the Palace of Culture and Science', 'zh-TW': '黃昏時的華沙市中心與文化科學宮' },
  warsawNight: { file: 'photos/warsaw-night.jpg', en: 'Warsaw skyline at night', 'zh-TW': '華沙夜景' },
  krakow: { file: 'photos/krakow.jpg', en: 'A street in Kraków’s old town leading to St Mary’s Basilica', 'zh-TW': '克拉科夫舊城區街道與聖母聖殿' },
  brussels: { file: 'photos/brussels-grand-place.jpg', en: 'Guild houses on the Grand Place in Brussels', 'zh-TW': '布魯塞爾大廣場的公會建築' },
  euCommission: { file: 'photos/eu-commission.jpg', en: 'EU flags in front of the European Commission in Brussels', 'zh-TW': '布魯塞爾歐盟執委會前的歐盟旗幟' },
  euFlags: { file: 'photos/eu-flags.jpg', en: 'Flags of EU member states', 'zh-TW': '歐盟會員國國旗' },
  taipeiEvent: { file: 'photos/first-event-1.jpg', en: 'A Polylocal talk for Taiwanese businesses in Taipei', 'zh-TW': 'Polylocal 在台北為台灣企業舉辦的講座' },
  globe: { file: 'photos/europe-globe.jpg', en: 'Europe on a vintage globe', 'zh-TW': '地球儀上的歐洲' },
};
