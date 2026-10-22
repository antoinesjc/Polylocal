// Digital Marketing page text in English and Traditional Chinese (Taiwan).
// Edit wording here, then run `npm run build`.
// Links are written as English site paths; the widget adds /zh_TW on the Chinese site.

export const DM = {
  en: {
    hero: {
      eyebrow: 'Service 01 · Digital marketing',
      title: 'Visible and credible where your growth',
      accent: 'actually happens.',
      lead: 'Your digital marketing partner across the Europe and Taiwan corridor. We combine cross-cultural market intelligence with hands-on execution, so buyers find you, understand you and trust you.',
      primary: 'Contact us',
      secondary: 'See what’s included',
    },
    visual: {
      label: 'Illustration: a Traditional Chinese search where a European company ranks first',
      badge: '#1 · Your brand',
      caption: 'Illustrative',
      tagline: 'Found · Understood · Trusted',
    },
    problem: {
      kicker: 'The real bottleneck',
      title: 'Is expansion just about finding the right partners?',
      body: 'A strong network only converts if buyers, distributors and investors can find you, trust you and understand what you do. In their language, on their platforms.',
      items: [
        ['No visibility in the target market', 'Buyers search and simply don’t find you.'],
        ['Content built for home', 'Your website speaks to the market you came from.'],
        ['Unclear channels and languages', 'You don’t know what reaches decision-makers in Taiwan or Europe.'],
        ['Local competitors rank first', 'They own the first page. You’re not on it.'],
      ],
    },
    approach: {
      title: ['Think global.', 'Show up local.'],
      points: [
        ['Corridor-specific', 'Campaigns built for your route, never generic templates adapted later.'],
        ['Native, not translated', 'Written by people fluent in the language and the business culture.'],
        ['Trust before the meeting', 'Your presence does the work a trusted local partner would do.'],
      ],
    },
    services: {
      kicker: 'What’s included',
      title: 'Five building blocks. Combined around your market.',
      body: 'Take one, or let us assemble the right mix as part of your wider expansion strategy.',
      rows: [
        {
          title: 'Market-specific content & positioning',
          text: 'Website, sales and messaging content adapted for how local buyers evaluate a partner.',
          chips: ['Localised website', 'Sales decks', 'Messaging framework'],
        },
        {
          title: 'Corridor-specific SEO & search visibility',
          text: 'Region-specific SEO for Taiwan, the wider Chinese-speaking market and the EU, in the languages buyers actually search in.',
          chips: ['Traditional Chinese keyword research', 'Multilingual SEO', 'Technical setup'],
        },
        {
          title: 'LinkedIn & professional network strategy',
          text: 'B2B visibility for your company and your people, where decision-makers do their research.',
          chips: ['Company page', 'Executive profiles', 'Thought leadership'],
        },
        {
          title: 'Strategic content & newsletters',
          text: 'Ongoing briefings, insights and updates that keep you relevant between meetings.',
          chips: ['Bilingual newsletters', 'Market briefings', 'Editorial calendar'],
        },
      ],
      featured: {
        badge: 'Best place to start',
        title: 'Digital Presence Health Check',
        text: 'An audit of how you show up in your target market today, benchmarked against the local competitors your buyers already know. You leave with a clear, prioritised action plan.',
        items: ['Search visibility snapshot', 'Competitor benchmark', 'Content and messaging review', 'Prioritised action plan'],
        button: 'Request a health check',
      },
    },
    markets: {
      kicker: 'Where we make you visible',
      title: 'Three markets, three playbooks.',
      cards: [
        { tone: 'clay', name: 'Taiwan & Asia', alt: '台灣', langs: 'Traditional Chinese · English', items: ['Google search in Taiwan', 'LINE and Facebook presence', 'LinkedIn for B2B decision-makers', 'Local trade and business media'] },
        { tone: 'clay-dk', name: 'Poland & CEE', alt: 'PL', langs: 'Polish · English', items: ['Polish-language search visibility', 'LinkedIn for regional buyers', 'Trade fairs and business associations', 'Sector press across the region'] },
        { tone: 'sky', name: 'Brussels & the EU', alt: 'EU', langs: 'English · French · German', items: ['Visibility with EU institutions and policymakers', 'EU affairs and trade association networks', 'EU-level and sector media', 'Reach across all 27 member states'] },
      ],
    },
    faq: {
      title: 'Questions we hear often',
      items: [
        ['Isn’t this just translation?', 'No. We adapt positioning, proof points and channels to how buyers in that market make decisions. Translation is one small part of it.'],
        ['Which markets do you cover?', 'Taiwan as our Asian anchor, with reach into Mainland China and Singapore. In Europe, Poland and Central and Eastern Europe, plus Brussels and the EU institutions.'],
        ['How quickly will we see results?', 'Content and LinkedIn work show early traction; search visibility builds over months. We agree milestones up front so you always know where you stand.'],
        ['Can you work with our in-house team?', 'Yes. We often act as the local extension of an existing marketing or sales team.'],
      ],
    },
    cta: {
      kicker: 'Start here',
      title: 'Let’s build your visibility strategy.',
      body: 'A free 30-minute consultation on your digital presence across Europe and Asia.',
      secondary: 'B2B lead generation',
    },
  },

  // Chinese site: written for Taiwanese companies that want to grow in Europe,
  // not a translation of the English page.
  'zh-TW': {
    hero: {
      eyebrow: '服務 01 · 數位行銷',
      title: '讓歐洲買主，',
      accent: '找得到你、信任你。',
      lead: '專為想進軍歐洲的台灣企業打造的數位行銷夥伴。從英文與歐洲語言內容、搜尋能見度到 LinkedIn，讓歐洲的買主、代理商與合作夥伴在聯絡你之前，就已經認識並信任你。',
      primary: '聯絡我們',
      secondary: '查看服務內容',
    },
    visual: {
      label: '示意圖：歐洲買主以英文搜尋時，一家台灣企業排名第一',
      badge: '#1 · 你的品牌',
      caption: '示意畫面：歐洲買主的搜尋結果',
      tagline: '被找到 · 被理解 · 被信任',
    },
    problem: {
      kicker: '真正的瓶頸',
      title: '產品夠好，為什麼歐洲買主還是沒找上門？',
      body: '台灣製造在歐洲有好口碑，但買主做採購功課時，看的是他們找得到的資訊：用他們的語言、在他們常用的平台上。找不到你，他們就會選擇找得到的競爭者。',
      items: [
        ['在歐洲搜尋不到你', '歐洲買主上網找供應商時，你的公司沒有出現。'],
        ['網站只寫給台灣看', '中文官網或直譯的英文頁面，很難說服歐洲的採購與技術團隊。'],
        ['不確定歐洲該用哪些管道', '在台灣有效的 LINE 與 Facebook，在歐洲談生意幾乎用不上。決策者在 LinkedIn、產業媒體與展會上做功課。'],
        ['競爭者已經卡好位', '歐洲在地與其他亞洲供應商占據搜尋結果第一頁，而你不在上面。'],
      ],
    },
    approach: {
      title: ['從台灣出發，', '在歐洲被看見。'],
      points: [
        ['為台歐路線量身打造', '依你的產業與目標國家規劃，不套用通用模板。'],
        ['母語撰寫，不是直譯', '由熟悉歐洲語言與商業文化的團隊撰寫，用歐洲買主習慣的方式介紹你。'],
        ['見面之前就建立信任', '讓你的官網與 LinkedIn，在第一次會議前就替你說話。'],
      ],
    },
    services: {
      kicker: '服務內容',
      title: '五大服務模組，依你的歐洲市場組合運用。',
      body: '可以只選一項，也可以讓我們依你的歐洲拓展計畫，搭配出最合適的組合。',
      rows: [
        {
          title: '寫給歐洲買主看的內容與定位',
          text: '依歐洲買主評估供應商的方式，調整官網、型錄、簡報與品牌訊息，把你的優勢說得清楚、說得可信。',
          chips: ['英文與歐洲語言官網', '產品型錄與簡報', '品牌訊息架構'],
        },
        {
          title: '歐洲市場 SEO 與搜尋能見度',
          text: '針對波蘭、中東歐與其他歐盟國家進行 SEO，使用歐洲買主實際搜尋的語言與關鍵字。',
          chips: ['英文與波蘭文關鍵字研究', '多語言 SEO', '技術設定'],
        },
        {
          title: 'LinkedIn 與專業人脈經營',
          text: '歐洲的 B2B 決策者習慣在 LinkedIn 上做功課。我們經營公司專頁與主管個人檔案，讓他們看到專業可信的你。',
          chips: ['公司專頁', '主管個人檔案', '專業觀點內容'],
        },
        {
          title: '策略內容與電子報',
          text: '定期寄送英文電子報、產品與案例更新，在展會與會議之間持續和歐洲客戶保持聯繫。',
          chips: ['英文電子報', '產品與案例更新', '內容行事曆'],
        },
      ],
      featured: {
        badge: '最佳起點',
        title: '歐洲數位形象健檢',
        text: '檢視歐洲買主今天搜尋時看到的你，並與他們已經熟悉的歐洲及亞洲競爭者比較。最後你會拿到一份清楚、排好優先順序的行動計畫。',
        items: ['歐洲搜尋能見度概況', '競爭者比較', '官網與英文內容檢視', '依優先順序的行動計畫'],
        button: '申請歐洲數位形象健檢',
      },
    },
    markets: {
      kicker: '我們讓你在哪裡被看見',
      title: '歐洲兩大重點市場，加上台灣端的準備。',
      cards: [
        { tone: 'clay-dk', name: '波蘭與中東歐', alt: 'PL', langs: '波蘭文 · 英文', items: ['波蘭語搜尋能見度', '觸及區域買主的 LinkedIn', '當地展會與商會', '區域產業媒體'] },
        { tone: 'sky', name: '布魯塞爾與歐盟', alt: 'EU', langs: '英文 · 法文 · 德文', items: ['在歐盟機構與政策圈的能見度', '歐盟產業公會與商會網絡', '歐洲層級與產業媒體', '觸及全部 27 個會員國'] },
        { tone: 'clay', name: '台灣總部端', alt: '台灣', langs: '中文 · 英文', items: ['用中文與你的團隊溝通', '準備英文官網與型錄', '主管 LinkedIn 個人檔案', '歐洲展會的展前與展後數位跟進'] },
      ],
    },
    faq: {
      title: '常見問題',
      items: [
        ['這不就是翻譯嗎？', '不是。我們會依照歐洲買主的決策方式，調整定位、佐證與管道。把中文官網直接翻成英文，通常不足以說服歐洲買主。'],
        ['你們涵蓋哪些歐洲市場？', '重點是波蘭與中東歐（捷克、斯洛伐克、匈牙利、羅馬尼亞與波羅的海三國），以及布魯塞爾與整個歐盟。'],
        ['多久能看到成效？', '內容與 LinkedIn 經營通常較快看到初步反應，搜尋能見度則需要數個月累積。我們會事先約定里程碑，讓你隨時掌握進度。'],
        ['我們的團隊不在歐洲，可以合作嗎？', '可以。我們用中文與台灣團隊溝通，在歐洲則以英文、波蘭文、法文、德文等語言執行，成為你在歐洲的在地延伸。'],
      ],
    },
    cta: {
      kicker: '從這裡開始',
      title: '一起打造你在歐洲的能見度。',
      body: '針對你在歐洲的數位形象，提供 30 分鐘免費諮詢，可用中文進行。',
      secondary: 'B2B 潛在客戶開發',
    },
  },
};
