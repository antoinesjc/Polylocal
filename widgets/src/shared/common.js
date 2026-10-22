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
    { file: 'logos/founduz.svg', alt: 'Founduz', h: 26 },
  ],
};

export const ICONS = {
  arrow: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  diag: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>',
  check: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>',
};
