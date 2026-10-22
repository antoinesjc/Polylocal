// Contact page text, English and Traditional Chinese (Taiwan).
// The Chinese site speaks to Taiwanese companies looking at Europe.
// `fields` relabels the native Odoo form, by the name of each Odoo field.
export default {
  en: {
    hero: {
      eyebrow: 'Contact',
      title: ['Tell us where you', 'want to grow.'],
      lead: 'Taiwan, Central and Eastern Europe or the EU: share a few lines about your company and your goals. We read every message ourselves and reply in the language you write in.',
      steps: [
        ['You send the form', 'Two minutes, no obligation.'],
        ['We reply personally', 'With first thoughts and a few questions.'],
        ['A free 30-minute call', 'If it makes sense for both of us.'],
      ],
    },
    form: {
      title: 'Start the conversation',
      required: 'Fields marked * are required.',
      privacy: 'We only use your details to reply to you.',
      missing: 'The contact form will appear here. Add Odoo’s Form block to this page, below this one.',
      send: 'Send message',
      fields: {
        contact_name: ['Your name', 'Full name'],
        partner_name: ['Company', 'Company name'],
        email_from: ['Work email', 'name@company.com'],
        phone: ['Phone (optional)', '+886 / +48 / +32 …'],
        name: ['What is it about?', 'For example: entering the Polish market, LinkedIn for our sales team'],
        description: ['Your message', 'Your product, the markets you are looking at, and where you are today.'],
      },
    },
    side: {
      email: 'Prefer email?',
      linkedin: 'Follow us on LinkedIn',
      langs: 'Write to us in',
      langList: ['English', 'Français', '中文', 'Polski', 'Español', 'Deutsch'],
      where: 'Where we work',
      hubs: [
        ['Taipei', 'Taiwan, with reach into Mainland China and Singapore'],
        ['Warsaw', 'Poland and Central and Eastern Europe'],
        ['Brussels', 'The EU institutions and all 27 member states'],
      ],
      include: 'Helpful to include',
      includeList: ['What you sell, and to whom', 'The countries you are looking at', 'What you have tried so far'],
    },
    services: {
      kicker: 'Not sure yet?',
      cards: [
        ['sky', '/digital-marketing', 'Digital marketing', 'Be found and trusted where your buyers search.'],
        ['clay', '/b2b-lead-generation', 'B2B lead generation', 'Qualified conversations with buyers and partners.'],
      ],
    },
  },
  'zh-TW': {
    hero: {
      eyebrow: '聯絡我們',
      title: ['告訴我們，', '你想在歐洲哪裡成長。'],
      lead: '波蘭、中東歐或整個歐盟市場：簡單介紹你的公司與目標。每一則訊息都由我們親自閱讀，你可以用中文寫給我們，我們也會用中文回覆。',
      steps: [
        ['填寫表單', '只要兩分鐘，沒有任何義務。'],
        ['我們親自回覆', '附上初步想法與幾個問題。'],
        ['30 分鐘免費諮詢', '如果雙方都覺得合適。'],
      ],
    },
    form: {
      title: '開始對話',
      required: '標示 * 為必填欄位。',
      privacy: '你的資料只會用於回覆你。',
      missing: '聯絡表單會顯示在這裡。請在這個區塊下方加入 Odoo 的表單區塊。',
      send: '送出訊息',
      fields: {
        contact_name: ['姓名', '你的姓名'],
        partner_name: ['公司名稱', '公司名稱'],
        email_from: ['公司 Email', 'name@company.com.tw'],
        phone: ['電話（選填）', '+886 …'],
        name: ['想聊什麼？', '例如：進軍波蘭市場、為業務團隊經營 LinkedIn'],
        description: ['訊息內容', '簡單介紹你的產品、想進入的歐洲國家，以及目前的進度。'],
      },
    },
    side: {
      email: '想直接寫信？',
      linkedin: '在 LinkedIn 追蹤我們',
      langs: '可使用的語言',
      langList: ['中文', '英文', '法文', '波蘭文', '西班牙文', '德文'],
      where: '我們的據點',
      hubs: [
        ['華沙', '波蘭與中東歐'],
        ['布魯塞爾', '歐盟機構與全部 27 個會員國'],
        ['台北', '台灣，並延伸至中國大陸與新加坡'],
      ],
      include: '可以先告訴我們',
      includeList: ['你的產品與目標客戶', '你在考慮的歐洲國家', '目前已經做過哪些嘗試'],
    },
    services: {
      kicker: '還在考慮？',
      cards: [
        ['sky', '/digital-marketing', '數位行銷', '讓歐洲買主找得到你、信任你。'],
        ['clay', '/b2b-lead-generation', 'B2B 潛在客戶開發', '與歐洲買主及合作夥伴展開有品質的對話。'],
      ],
    },
  },
};
