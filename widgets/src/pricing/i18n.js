// Packages & pricing page text in English and Traditional Chinese (Taiwan).
// Edit wording here, then run `npm run build`.
// Links are written as English site paths; the widget adds /zh_TW on the Chinese site.
// Prices are written once in PRICES below and shared by both languages.

// Client logos. Drop a single-colour logo file into assets/logos/ and set `file`
// to show the image; while `file` is null the name is shown as a wordmark.
export const CLIENTS = [
  { name: 'Redai', file: 'logos/redai.png', h: 30 },
  { name: 'Acroparts Technology', file: 'logos/acroparts.png', h: 30 },
  { name: 'TEEMA', file: 'logos/teema.png', h: 32 },
  // { name: 'C-Tech', file: null, h: 28 }, // on hold until confirmed
];

// Monthly package prices. English site in euros; Chinese site in US dollars with
// an approximate NT$ amount (converted at about €1 = US$1.16 and US$1 = NT$32.2,
// Nov 2026, then rounded). Update `zh` and `twd` together if prices change.
export const PRICES = {
  test: { en: '€1,000', zh: 'US$1,150', twd: '約 NT$3.7 萬' },
  presence: { en: '€2,000', zh: 'US$2,300', twd: '約 NT$7.4 萬' },
  growth: { en: '€3,900', zh: 'US$4,500', twd: '約 NT$14.5 萬' },
  signature: { en: '€14,900', zh: 'US$17,300', twd: '約 NT$55.7 萬' },
};

export const PRICING = {
  en: {
    hero: {
      eyebrow: 'Packages & pricing',
      title: 'Your team in Europe,',
      accent: 'without opening an office.',
      lead: 'Three monthly packages for Poland or French-speaking Europe, covering localisation, social media, email, lead generation and events. Clear prices, a short minimum term, and one team that speaks your language and your buyers’ language.',
      primary: 'Book a free consultation',
      secondary: 'Compare packages',
    },
    proof: { clients: 'Companies we work with', featured: 'Featured in' },
    test: {
      kicker: 'Start here',
      name: 'Market test',
      title: 'One month to find out if the market wants you.',
      text: 'Before committing to a package, test your product in Poland or French-speaking Europe. In four weeks you get real answers from real buyers, and a clear recommendation on what to do next.',
      once: 'one month, one-off',
      button: 'Book a market test',
      note: 'One market per test. No minimum term, nothing renews.',
      items: [
        ['Market snapshot', 'Your main competitors, typical prices, sales channels and distributors, and the certifications or rules to check.'],
        ['B2B outreach test', 'A target list of 50 decision-makers, contacted by LinkedIn, email and phone in the local language.'],
        ['Sales one-pager', 'Your offer on one page in Polish or French, yours to keep and reuse.'],
        ['Meetings and feedback', 'Interested buyers booked into your calendar, and what the others told us about price, product and timing.'],
        ['Results call', 'A one-hour call with the findings and a go or no-go recommendation, including which package fits if you continue.'],
      ],
    },
    packages: {
      kicker: 'Packages',
      title: 'Pick the level of presence you need.',
      marketsLabel: 'Each package runs in one market of your choice',
      markets: [['Poland', 'In Polish'], ['French-speaking Europe', 'France, Belgium and Luxembourg, in French']],
      perMonth: '/ month',
      popular: 'Most popular',
      button: 'Talk to us about this package',
      apply: 'Apply for Signature',
      list: [
        {
          id: 'presence', name: 'Presence', alt: '曝光',
          term: '3-month minimum',
          text: 'Be findable and credible in your buyers’ language. For companies testing the market.',
          items: ['Website key pages and sales materials in Polish or French', '2 social platforms, 12 designed posts a month', 'Local-language copy and replies to comments and messages', '1 newsletter a month', 'Monthly report'],
        },
        {
          id: 'growth', name: 'Growth', alt: '成長', popular: true,
          term: '3-month minimum',
          text: 'Visibility plus a sales pipeline. Meetings with local decision-makers in your calendar.',
          lead: 'Everything in Presence, plus:',
          items: ['3 platforms, 20 posts a month incl. short video', '2 newsletters a month', '200 targeted decision-makers a month', 'LinkedIn outreach, cold email and about 100 calls a month', 'Meetings booked into your calendar', 'Paid ads setup and management', 'Monthly pipeline review call'],
        },
        {
          id: 'signature', name: 'Signature', alt: '旗艦',
          term: '12 months, by application only',
          text: 'A full local sales and marketing office, run by us, for companies committed to the market.',
          lead: 'Everything in Growth, plus:',
          items: ['Dedicated sales team acting as your local office', 'Full content production, video shoots and creator campaigns', 'Full-funnel campaigns on social and search', 'Up to 6 event days a year and interpreting at all meetings', 'Weekly report and a quarterly strategy day in person', '4-hour response time'],
        },
      ],
    },
    compare: {
      kicker: 'Side by side',
      title: 'Everything in each package.',
      head: 'Included',
      price: 'Price',
      rows: [
        ['Minimum term', '3 months', '3 months', '12 months, by application only'],
        ['Localisation', 'Website key pages and sales materials in Polish or French (first month)', 'Everything in Presence', 'Everything in Growth, unlimited'],
        ['Social media', '2 platforms, 12 designed posts a month, local-language copy and replies', '3 platforms, 20 posts a month incl. short video', 'Full content production, video shoots, creator campaigns'],
        ['Email', '1 newsletter a month', '2 newsletters a month', 'Full email marketing and automations'],
        ['B2B lead generation', null, 'Target list of 200 decision-makers a month; LinkedIn outreach; cold email sequences; cold calling (about 100 calls a month); meetings booked into your calendar', 'Dedicated sales team acting as your local sales office'],
        ['Paid ads', 'Bookable extra', 'Setup and management (budget separate)', 'Full-funnel campaigns on social and search'],
        ['Events and interpreting', 'Bookable extra', 'Bookable extra', 'Included: up to 6 event days a year, interpreting at all meetings'],
        ['Reporting', 'Monthly report', 'Monthly report and pipeline review call', 'Weekly report, quarterly strategy day in person, 4-hour response time'],
      ],
      note: 'Prices exclude VAT. Advertising budgets and travel are billed separately.',
    },
    extras: {
      kicker: 'Bookable extras',
      title: 'Add what you need, when you need it.',
      body: 'Available on their own or on top of any package.',
      list: [
        ['Event or trade-fair representation', '€900 per day + travel', 'We staff your stand or attend on your behalf, in Polish, French or English.'],
        ['Trade fair package', 'from €2,500 per fair', 'Booth graphics, pre-fair outreach to visitors and follow-up after the fair.'],
        ['Consecutive interpreting', '€380 half day · €620 full day', 'For meetings, negotiations and site visits.'],
        ['Written translation', '€0.08 per word', 'Contracts, brochures, product sheets and websites.'],
        ['Paid ads for Presence clients', '€500 / month', 'Setup and management. Advertising budget separate.'],
        ['Market landing page', 'from €1,200', 'One page in Polish or French, built to convert local visitors.'],
      ],
    },
    work: {
      kicker: 'Our work',
      title: 'Built from scratch, measured in results.',
      caseTag: 'Case study',
      caseTitle: 'Redai: two Polish buyers in six months',
      caseText: 'Polish-ready website and catalogues, B2B lead generation, 20+ trade shows and a company delegation to Poland, for a Taiwanese precision tools maker.',
      caseStats: [['2', 'buyers in Poland'], ['6', 'months'], ['20+', 'trade shows and events']],
      caseLink: 'Read the case study',
      quotePlaceholder: 'Client testimonial goes here (Oscar, Redai)',
      quoteName: 'Oscar',
      quoteRole: 'Redai',
    },
    cta: {
      kicker: 'Start here',
      title: 'Not sure which package fits?',
      body: 'Tell us your product and your target customers in Poland or French-speaking Europe. In a free 30-minute consultation we’ll tell you which package makes sense, or whether you need one at all.',
      secondary: 'B2B lead generation',
    },
  },

  'zh-TW': {
    hero: {
      eyebrow: '服務方案與價格',
      title: '不用開設分公司，',
      accent: '也能在歐洲有自己的團隊。',
      lead: '針對波蘭或法語區歐洲的三種月費方案，涵蓋在地化、社群經營、電子報、潛在客戶開發與展會活動。價格透明、最短合約期短，由一支既懂你的語言、也懂當地買家語言的團隊執行。',
      primary: '預約免費諮詢',
      secondary: '比較方案',
    },
    proof: { clients: '合作客戶', featured: '媒體報導' },
    test: {
      kicker: '從這裡開始',
      name: '市場測試',
      title: '用一個月，確認市場是否需要你的產品。',
      text: '在簽下方案之前，先在波蘭或法語區歐洲測試你的產品。四週內直接從真實買家身上取得答案，並收到下一步該怎麼走的明確建議。',
      once: '一個月，單次服務',
      button: '預約市場測試',
      note: '每次測試一個市場。沒有最短合約，不會自動續約。',
      items: [
        ['市場概況', '主要競爭對手、一般售價、銷售通路與經銷商，以及需要確認的認證與法規。'],
        ['B2B 開發測試', '列出 50 位目標決策者，以當地語言透過 LinkedIn、電子郵件與電話聯繫。'],
        ['銷售一頁簡介', '以波蘭文或法文製作的一頁產品簡介，之後可持續使用。'],
        ['會議與買家回饋', '有興趣的買家直接排進你的行事曆，其他買家對價格、產品與時機的意見也會整理給你。'],
        ['成果檢討會議', '一小時會議，說明調查結果並建議是否進入市場；若繼續，也會建議最適合的方案。'],
      ],
    },
    packages: {
      kicker: '方案',
      title: '依照你需要的市場深度選擇。',
      marketsLabel: '每個方案可任選一個市場執行',
      markets: [['波蘭', '以波蘭文執行'], ['法語區歐洲', '法國、比利時、盧森堡，以法文執行']],
      perMonth: '/ 月',
      popular: '最多企業選擇',
      button: '洽詢此方案',
      apply: '申請旗艦方案',
      list: [
        {
          id: 'presence', name: 'Presence', alt: '曝光',
          term: '最短合約 3 個月',
          text: '讓當地客戶找得到你，也信任你。適合正在測試市場的企業。',
          items: ['官網重點頁面與銷售資料波蘭文化或法文化', '經營 2 個社群平台，每月 12 則設計貼文', '當地語言文案，並代為回覆留言與私訊', '每月 1 封電子報', '每月成果報告'],
        },
        {
          id: 'growth', name: 'Growth', alt: '成長', popular: true,
          term: '最短合約 3 個月',
          text: '提升能見度，同時建立業務管道。直接把與當地決策者的會議排進你的行事曆。',
          lead: '包含 Presence 所有內容，另加：',
          items: ['經營 3 個平台，每月 20 則貼文（含短影音）', '每月 2 封電子報', '每月鎖定 200 位決策者', 'LinkedIn 開發、陌生開發信與每月約 100 通電話', '直接安排會議進你的行事曆', '廣告投放設定與管理', '每月商機進度檢討會議'],
        },
        {
          id: 'signature', name: 'Signature', alt: '旗艦',
          term: '12 個月，需申請',
          text: '由我們營運的完整在地業務與行銷辦公室，適合決心深耕當地市場的企業。',
          lead: '包含 Growth 所有內容，另加：',
          items: ['專屬業務團隊，作為你在當地的業務辦公室', '完整內容製作、影片拍攝與網紅合作', '社群與搜尋的全漏斗廣告活動', '每年最多 6 天展會活動，所有會議皆提供口譯', '每週報告，每季一次實體策略會議', '4 小時內回覆'],
        },
      ],
    },
    compare: {
      kicker: '方案比較',
      title: '各方案完整內容一覽。',
      head: '內容',
      price: '價格',
      rows: [
        ['最短合約', '3 個月', '3 個月', '12 個月，需申請'],
        ['在地化', '官網重點頁面與銷售資料波蘭文化或法文化（第一個月）', '包含 Presence 所有內容', '包含 Growth 所有內容，數量不限'],
        ['社群經營', '2 個平台，每月 12 則設計貼文，當地語言文案與回覆', '3 個平台，每月 20 則貼文（含短影音）', '完整內容製作、影片拍攝、網紅合作'],
        ['電子報', '每月 1 封', '每月 2 封', '完整電子郵件行銷與自動化流程'],
        ['B2B 潛在客戶開發', null, '每月 200 位決策者目標名單；LinkedIn 開發；陌生開發信序列；電話開發（每月約 100 通）；直接安排會議進你的行事曆', '專屬業務團隊，作為你在當地的業務辦公室'],
        ['廣告投放', '可加購', '設定與管理（廣告預算另計）', '社群與搜尋的全漏斗廣告活動'],
        ['展會活動與口譯', '可加購', '可加購', '已包含：每年最多 6 天展會活動，所有會議皆提供口譯'],
        ['成果報告', '每月報告', '每月報告與商機進度檢討會議', '每週報告、每季實體策略會議、4 小時內回覆'],
      ],
      note: '價格以美元計價，新台幣金額依 2026 年 11 月匯率概算，僅供參考。價格未含稅，廣告預算與差旅費用另計。',
    },
    extras: {
      kicker: '加購服務',
      title: '需要什麼，隨時加購。',
      body: '可單獨購買，也可搭配任何方案。',
      list: [
        ['展會或商展代表', '每天 US$1,050（約 NT$3.4 萬），差旅另計', '由我們以波蘭文、法文或英文代為顧攤或出席。'],
        ['商展套裝服務', '每場 US$2,900 起（約 NT$9.3 萬）', '攤位視覺設計、展前邀約參觀者，以及展後追蹤。'],
        ['逐步口譯', '半天 US$440（約 NT$1.4 萬）· 全天 US$720（約 NT$2.3 萬）', '適用於商務會議、談判與工廠參訪。'],
        ['書面翻譯', '每字 US$0.09（約 NT$3）', '合約、型錄、產品規格書與網站。'],
        ['Presence 方案廣告投放', '每月 US$580（約 NT$1.9 萬）', '廣告設定與管理，廣告預算另計。'],
        ['市場專屬到達頁', 'US$1,400 起（約 NT$4.5 萬）', '一頁波蘭文或法文網頁，專為轉換當地訪客而設計。'],
      ],
    },
    work: {
      kicker: '實績',
      title: '從零開始打造，用成果說話。',
      caseTag: '案例分享',
      caseTitle: 'Redai：六個月內成功開發兩家波蘭買主',
      caseText: '為台灣精密工具製造商完成波蘭文官網與型錄、B2B 潛在客戶開發、20 多場商展，以及企業參訪波蘭。',
      caseStats: [['2', '家波蘭買主'], ['6', '個月'], ['20+', '場商展與活動']],
      caseLink: '閱讀完整案例',
      quotePlaceholder: '客戶推薦語（Oscar，Redai）',
      quoteName: 'Oscar',
      quoteRole: 'Redai',
    },
    cta: {
      kicker: '從這裡開始',
      title: '不確定哪個方案適合你？',
      body: '告訴我們你的產品，以及在波蘭或法語區歐洲的目標客戶。在 30 分鐘的免費諮詢中，我們會告訴你哪個方案最合適，或者你其實還不需要方案。',
      secondary: 'B2B 潛在客戶開發',
    },
  },
};

// Testimonial. Fill in `en` and `zh-TW` once Oscar has approved the wording;
// while it is null the page shows no quote (a placeholder appears only with the
// `preview` attribute, for drafts).
export const TESTIMONIAL = {
  en: 'Dorota served as my interpreter at Taiwan Expo Europe in Warsaw. She is a trustworthy, detail-oriented professional. Her exceptional interpersonal and language skills, combined with a deep understanding of both Taiwanese and Polish culture, made her an indispensable member of our exhibition team.',
  'zh-TW': 'Dorota 在華沙的歐洲台灣形象展擔任我的口譯。她值得信賴，做事細心專業。她出色的人際溝通與語言能力，加上對台灣與波蘭文化的深入了解，使她成為我們參展團隊中不可或缺的一員。',
  name: 'J.M. Jen',
  role: { en: 'Sales Manager, Acroparts Technology', 'zh-TW': '碩哲科技 業務經理' },
};
