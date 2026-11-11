// Event recap: networking evening with Founduz in Taipei. English and Traditional Chinese.
// `url`: set to the blog post's address once it exists in Odoo (ending with the post number).
export default {
  id: 'founduz-networking',
  kind: 'event',
  category: 'updates',
  url: '/blog/polylocal-updates-4',
  tone: 'clay',
  related: ['europe-market', 'taiwan-expo-2026'],
  en: {
    tags: ['Event recap', 'Networking'],
    title: ['A networking evening in Taipei,', 'with Founduz', ''],
    dek: 'A relaxed evening for founders, freelancers and small business owners, co-organised with Founduz: 16 hand-picked guests, Taiwanese and international, and conversations that went somewhere.',
    facts: [['Where', 'Taipei'], ['Guests', '16, selected one by one'], ['Co-organised with', 'Founduz']],
    body: [
      { type: 'lead', text: 'Most networking events are too big to remember anyone. This one was built the other way around: a small room, a curated guest list, and enough time to actually talk.' },
      { type: 'highlight', kicker: 'Who was in the room', title: '16 people, chosen to meet each other.', text: 'We selected every guest ourselves, mixing Taiwanese and international founders, freelancers and small business owners, so that each conversation could lead somewhere useful.', chips: ['Founders', 'Freelancers', 'Small business owners', 'Taiwanese and expats'] },
      { type: 'gallery', photos: ['founduz-networking-1.jpg', 'founduz-networking-3.jpg', 'founduz-networking-4.jpg', 'founduz-networking-6.jpg'], ratio: '3/4', alt: 'Guests talking at the networking evening in Taipei', caption: 'Small tables, name tags and time to talk: the networking evening co-organised by Polylocal and Founduz in Taipei.' },
      { type: 'prose', h: 'Why a small, curated group', p: [
        'With 16 guests, nobody gets lost in the crowd. Everyone had the chance to meet most of the room, and the mix was deliberate: Taiwanese entrepreneurs met international ones, freelancers met the small businesses that need them, and founders compared notes with people facing the same questions.',
        'The format stayed relaxed on purpose. No stage and no pitches, just good company, snacks and drinks, and conversations that carried on well into the evening.',
      ] },
      { type: 'gallery', grid: true, photos: ['founduz-networking-2.jpg', 'founduz-networking-5.jpg'], alt: 'Guests mingling at the bar and around the tables', caption: 'Taiwanese and international guests, mixed on purpose.' },
      { type: 'quote', text: 'The best introductions happen when the room is small enough to remember everyone in it.' },
      { type: 'prose', h: 'Working with Founduz', p: [
        'Founduz is one of our partners in Taipei, and this evening is the kind of thing we like to build together: bringing the right people into one room, across languages and cultures. It is also how we work with clients, connecting Taiwanese and international businesses one meaningful conversation at a time.',
      ] },
      { type: 'prose', h: 'What’s next', p: [
        'We will keep organising small, curated evenings with Founduz. Follow us on LinkedIn or subscribe to our newsletter to hear about the next one.',
      ] },
    ],
    cta: { title: 'Want to meet the right people in a new market?', text: 'We introduce Taiwanese and European companies to the partners and buyers they need.', secondary: ['B2B lead generation', '/b2b-lead-generation'] },
  },
  'zh-TW': {
    tags: ['活動回顧', '交流活動'],
    title: ['在台北的交流之夜，', '與 Founduz 共同舉辦', ''],
    dek: '一場為創業者、自由工作者與小企業主打造的輕鬆夜晚，由 Polylocal 與 Founduz 共同舉辦：16 位精選來賓，台灣與外籍人士交流，帶來真正有收穫的交流。',
    facts: [['地點', '台北'], ['來賓', '16 位，逐一挑選'], ['共同主辦', 'Founduz']],
    body: [
      { type: 'lead', text: '多數交流活動人太多，結束後誰也記不住。這場活動反其道而行：小小的空間、精心挑選的名單，以及足夠的時間好好聊天。' },
      { type: 'highlight', kicker: '現場有誰', title: '16 位來賓，為了彼此相遇而挑選。', text: '每位來賓都由我們親自挑選，混合台灣與外籍的創業者、自由工作者與小企業主，讓每一段對話都可能帶來實質的收穫。', chips: ['創業者', '自由工作者', '小企業主', '台灣人與外籍人士'] },
      { type: 'gallery', photos: ['founduz-networking-1.jpg', 'founduz-networking-3.jpg', 'founduz-networking-4.jpg', 'founduz-networking-6.jpg'], ratio: '3/4', alt: '台北交流之夜的來賓交談', caption: '小桌子、名牌，還有充裕的聊天時間：Polylocal 與 Founduz 在台北共同舉辦的交流之夜。' },
      { type: 'prose', h: '為什麼選擇小而精的聚會', p: [
        '只有 16 位來賓，沒有人會淹沒在人群中。每個人都有機會認識現場大部分的人，而來賓組合也經過刻意安排：台灣創業者認識外籍創業者，自由工作者遇見需要他們的小企業，創業者則與面臨相同問題的人交流心得。',
        '活動形式刻意保持輕鬆：沒有舞台、沒有簡報，只有好的同伴、點心與飲料，以及一路聊到深夜的對話。',
      ] },
      { type: 'gallery', grid: true, photos: ['founduz-networking-2.jpg', 'founduz-networking-5.jpg'], alt: '來賓在吧檯與桌邊交流', caption: '台灣與外籍來賓，刻意混合安排。' },
      { type: 'quote', text: '當空間小到能記住每一個人，最好的介紹才會發生。' },
      { type: 'prose', h: '與 Founduz 的合作', p: [
        'Founduz 是我們在台北的合作夥伴，這樣的夜晚正是我們喜歡一起打造的：跨越語言與文化，把對的人帶進同一個空間。這也是我們與客戶合作的方式，一次一段有意義的對話，連結台灣與國際企業。',
      ] },
      { type: 'prose', h: '下一步', p: [
        '我們會繼續與 Founduz 舉辦小而精的交流活動。歡迎在 LinkedIn 追蹤我們，或訂閱電子報，獲得下一場活動的消息。',
      ] },
    ],
    cta: { title: '想在新市場認識對的人嗎？', text: '我們協助台灣與歐洲企業，結識所需的合作夥伴與買主。', secondary: ['B2B 潛在客戶開發', '/b2b-lead-generation'] },
  },
};
