// Homepage text in English and Traditional Chinese (Taiwan).
// Edit wording here, then run `npm run build`.
// Links are written as English site paths; the widget adds /zh_TW on the Chinese site.

export const HOME = {
  en: {
    hero: {
      eyebrow: 'Europe ⇄ Taiwan · Digital marketing & B2B lead generation',
      title: ['Think global.', 'Act local.'],
      lead: 'We make European companies visible in Taiwan, and Asian companies visible across Europe. Then we turn that visibility into qualified pipeline.',
      primary: 'Contact us',
      secondary: 'Explore services',
    },
    problem: {
      kicker: '01 · The problem',
      title: 'If your market can’t find you, it can’t buy from you.',
      body: 'The right product and the right strategy are never enough on their own. Without a credible local presence, even the best expansion plan stalls at the border.',
      items: [
        ['Your content speaks to the wrong market', 'Your website and messaging were written for home, not for the buyers you’re trying to reach.'],
        ['You’re on the wrong channels', 'The platforms that reach decision-makers in Taiwan are not the ones that reach them in Warsaw or Brussels.'],
        ['Translation isn’t localisation', 'Content built for one business culture doesn’t carry over, literally or strategically.'],
        ['Local competitors show up first', 'When buyers search, they find someone else. You don’t appear at all.'],
      ],
    },
    directions: {
      kicker: '02 · One corridor, two directions',
      title: 'Built for the corridor you’re crossing. Not adapted after the fact.',
      body: 'A cross-cultural team fluent in the languages, platforms and business cultures on both ends, so your presence earns trust before the first meeting.',
      cards: [
        {
          tone: 'sky',
          label: 'Europe → Taiwan & Asia',
          alt: '歐洲 → 台灣',
          title: 'Anchored in Taiwan, visible across the region.',
          items: [
            'Messaging adapted for Taiwanese business culture, not just translated',
            'Search visibility on the platforms your buyers actually use',
            'Credibility with local decision-makers, in Mandarin',
            'Reach extended into Mainland China and Singapore',
          ],
        },
        {
          tone: 'clay',
          label: 'Asia → Europe',
          alt: '亞洲 → 歐洲',
          title: 'Seen and trusted by European buyers.',
          items: [
            'Positioning for how European buyers actually evaluate a partner',
            'A strong base in Poland and Central & Eastern Europe',
            'Hands-on experience inside the EU institutions in Brussels',
            'Language and etiquette handled, so your brand reads as credible, not foreign',
          ],
        },
      ],
    },
    services: {
      kicker: '03 · What we do',
      title: 'First we make you visible. Then we make you pipeline.',
      more: 'Learn more',
      cards: [
        {
          href: '/digital-marketing',
          tag: 'Visibility',
          title: 'Digital Marketing',
          body: 'Content, search and positioning that make you visible and credible in the market you’re entering.',
          chips: ['Localised content', 'Corridor SEO', 'LinkedIn strategy', 'Newsletters', 'Presence audit'],
        },
        {
          href: '/b2b-lead-generation',
          tag: 'Pipeline',
          title: 'B2B Lead Generation',
          body: 'Qualified buyers and partners, reached in their own language, and brought to the table for your sales team.',
          chips: ['Prospecting', 'Outreach in Mandarin', 'Meeting setting', 'Nurturing', 'Account care'],
        },
      ],
    },
    method: {
      kicker: '04 · How an engagement runs',
      title: 'We don’t just advise. We build and run it with you.',
      steps: [
        ['Audit', 'Your presence in the target market, benchmarked against local competitors.'],
        ['Position', 'Messaging and channels chosen for how this market evaluates a partner.'],
        ['Build & run', 'Content, SEO and LinkedIn executed by people who live in the market.'],
        ['Convert', 'Visibility turned into conversations with qualified buyers and partners.'],
      ],
    },
    ground: {
      kicker: '05 · A global team, on the ground',
      title: 'Not an outsourced agency. A team that lives in both markets.',
      body: 'Rooted in Taiwan, active in Warsaw, experienced inside the EU institutions in Brussels. We combine business development, cross-cultural communication and digital execution, so you move faster and with less risk.',
      link: 'How we work',
      tiles: [
        { big: '中文', zh: true, title: 'Native-level Mandarin', text: 'Content and outreach written for Taiwanese readers, not translated for them.' },
        { big: 'WAW', title: 'Present in Warsaw', text: 'From the Taiwan Expo in Warsaw to the Formosa Meetups we co-organise.' },
        { big: 'EU', title: 'Inside the EU bubble', text: 'Experience working with and within the EU institutions in Brussels.' },
        { big: 'EN · FR · ES · 中', title: 'Multilingual by default', text: 'We work in the languages your buyers and partners use.' },
      ],
    },
    insights: {
      title: 'Insights from the corridor',
      all: 'All articles',
      read: 'Read articles',
      cards: [
        { href: '/blog/taiwan-market-trends-15', tag: 'Taiwan market trends', text: 'What is changing in Taiwan’s market, and what it means for European companies.' },
        { href: '/blog/b2b-14', tag: 'B2B', text: 'Practical notes on reaching buyers and partners across the corridor.' },
        { href: '/blog/case-studies-11', tag: 'Case studies', text: 'How companies have become visible and credible in a new market.' },
      ],
    },
    cta: {
      kicker: 'Start here',
      title: 'Tell us where you want to grow.',
      body: 'Start with a free 30-minute consultation. We’ll look at your market, your current presence and the fastest route to being found.',
      primary: 'Book my free consultation',
      secondary: 'See our services',
    },
  },

  'zh-TW': {
    hero: {
      eyebrow: '歐洲 ⇄ 台灣 · 數位行銷與 B2B 潛在客戶開發',
      title: ['放眼全球，', '深耕在地。'],
      lead: '我們讓歐洲企業在台灣被看見，也讓亞洲企業在歐洲被看見，並將這份能見度轉化為實際的商機。',
      primary: '聯絡我們',
      secondary: '了解服務內容',
    },
    problem: {
      kicker: '01 · 問題所在',
      title: '市場找不到你，就不會向你購買。',
      body: '好的產品與策略本身並不足夠。若缺乏可信的在地形象，再完善的拓展計畫也會止步於國界。',
      items: [
        ['你的內容對錯了市場', '網站與訊息是為母國市場而寫，而不是為你想觸及的買家。'],
        ['你經營錯了管道', '能觸及台灣決策者的平台，和在華沙或布魯塞爾有效的平台並不相同。'],
        ['翻譯不等於在地化', '為某一商業文化打造的內容，無論在字面上或策略上，都無法直接套用到另一個市場。'],
        ['在地競爭者搶先出現', '買家搜尋時看到的是別人，而你完全不在結果之中。'],
      ],
    },
    directions: {
      kicker: '02 · 一條走廊，雙向連結',
      title: '為你要跨越的市場量身打造，而非事後拼湊調整。',
      body: '我們的跨文化團隊熟悉兩端的語言、平台與商業文化，讓你在第一次會面之前就已建立信任。',
      cards: [
        {
          tone: 'sky',
          label: '歐洲 → 台灣與亞洲',
          alt: 'Europe → Taiwan',
          title: '以台灣為據點，在整個區域被看見。',
          items: [
            '依台灣商業文化調整訊息，而不只是翻譯',
            '在買家實際使用的平台上提升搜尋能見度',
            '以中文建立在地決策者的信任',
            '將觸角延伸至中國大陸與新加坡',
          ],
        },
        {
          tone: 'clay',
          label: '亞洲 → 歐洲',
          alt: 'Asia → Europe',
          title: '讓歐洲買家看見你、信任你。',
          items: [
            '依歐洲買家評估合作夥伴的方式進行定位',
            '在波蘭與中東歐擁有穩固基礎',
            '具備在布魯塞爾歐盟機構內工作的實務經驗',
            '處理好語言與商務禮儀，讓品牌顯得可信而不陌生',
          ],
        },
      ],
    },
    services: {
      kicker: '03 · 我們的服務',
      title: '先讓你被看見，再為你帶來商機。',
      more: '了解更多',
      cards: [
        {
          href: '/digital-marketing',
          tag: '能見度',
          title: '數位行銷',
          body: '透過內容、搜尋與品牌定位，讓你在新市場中被看見、被信任。',
          chips: ['在地化內容', '跨區域 SEO', 'LinkedIn 策略', '電子報', '數位形象健檢'],
        },
        {
          href: '/b2b-lead-generation',
          tag: '商機',
          title: 'B2B 潛在客戶開發',
          body: '以對方的語言接觸合格的買家與合作夥伴，並為你的業務團隊促成洽談。',
          chips: ['潛在客戶研究', '中文開發聯繫', '安排商務會議', '客戶培育', '客戶關係維護'],
        },
      ],
    },
    method: {
      kicker: '04 · 合作流程',
      title: '我們不只提供建議，更與你一起執行。',
      steps: [
        ['健檢', '檢視你在目標市場的數位形象，並與在地競爭者比較。'],
        ['定位', '依該市場評估合作夥伴的方式，選定訊息與管道。'],
        ['建置與執行', '由生活在當地的團隊執行內容、SEO 與 LinkedIn 經營。'],
        ['轉化', '將能見度轉化為與合格買家及合作夥伴的實際洽談。'],
      ],
    },
    ground: {
      kicker: '05 · 全球視野，在地團隊',
      title: '不是外包代理商，而是身處兩地市場的團隊。',
      body: '我們扎根台灣、活躍於華沙，並具備在布魯塞爾歐盟機構的實務經驗。結合業務開發、跨文化溝通與數位執行，讓你更快前進、降低風險。',
      link: '我們的工作方式',
      tiles: [
        { big: '中文', zh: true, title: '母語等級的中文', text: '內容與開發聯繫專為台灣讀者撰寫，而不是翻譯而來。' },
        { big: 'WAW', title: '立足華沙', text: '從波蘭台灣形象展，到我們共同舉辦的 Formosa Meetup。' },
        { big: 'EU', title: '熟悉歐盟體系', text: '具備與歐盟機構合作、並在其中工作的經驗。' },
        { big: 'EN · FR · ES · 中', title: '多語言是基本配備', text: '我們使用你的買家與合作夥伴所使用的語言工作。' },
      ],
    },
    insights: {
      title: '來自歐亞走廊的觀點',
      all: '所有文章',
      read: '閱讀文章',
      cards: [
        { href: '/blog/taiwan-market-trends-15', tag: '台灣市場趨勢', text: '台灣市場正在發生的變化，以及對歐洲企業的意義。' },
        { href: '/blog/b2b-14', tag: 'B2B', text: '跨越歐亞走廊、接觸買家與合作夥伴的實用觀察。' },
        { href: '/blog/case-studies-11', tag: '案例分享', text: '企業如何在新市場中建立能見度與信任。' },
      ],
    },
    cta: {
      kicker: '從這裡開始',
      title: '告訴我們你想拓展的市場。',
      body: '從 30 分鐘的免費諮詢開始。我們會一起檢視你的目標市場、目前的數位形象，以及最快被找到的方法。',
      primary: '預約免費諮詢',
      secondary: '查看服務內容',
    },
  },
};
