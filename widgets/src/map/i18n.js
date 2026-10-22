// All visible text for the map, in English and Traditional Chinese (Taiwan).
// Edit wording here; run `npm run build` afterwards.

export const STRINGS = {
  en: {
    mapLabel: 'Map of the Europe and Asia corridor. Select a hub to highlight the region it covers.',
    hubsLabel: 'Choose a hub',
    viewLabel: 'Map view',
    viewCorridor: 'Full corridor',
    viewEurope: 'Zoom on Europe',
    hint: 'Select a hub to see the region it covers',
    distance: (km) => `Taipei · ≈ ${km.toLocaleString('en-US')} km`,
    show: (title) => `Show ${title}`,
    cta: 'How we work on the ground',
    hubs: {
      taipei: {
        tab: 'Taipei · Taiwan',
        pin: 'Taipei',
        alt: '台北',
        kicker: 'Asia anchor',
        title: 'Taipei, Taiwan',
        region: 'Taiwan · Mainland China · Singapore',
        text: 'Where our Asian work is rooted. Native-level Mandarin, local platforms and the networks Taiwanese decision-makers actually trust, with reach into Mainland China and Singapore.',
        points: [
          'Mandarin-native content and outreach in Taiwan',
          'Reach into the Mainland Chinese market',
          'Visibility and partners in Singapore',
        ],
      },
      warsaw: {
        tab: 'Warsaw · Poland',
        pin: 'Warsaw',
        alt: '華沙',
        kicker: 'Central & Eastern Europe',
        title: 'Warsaw, Poland',
        region: 'Poland · Central & Eastern Europe',
        text: 'Our gateway to Central and Eastern Europe. Poland is the largest economy in the region, and the market where we are active on the ground with Taiwanese and European businesses.',
        points: [
          'Taiwan Expo Warsaw and Formosa Meetup Warsaw',
          'Buyer and partner outreach across the region',
          'Company setup support for Taiwanese firms entering Poland',
        ],
      },
      brussels: {
        tab: 'Brussels · EU',
        pin: 'Brussels',
        alt: '歐盟',
        kicker: 'The European Union',
        title: 'Brussels & the EU',
        region: 'European Union · 27 member states',
        text: 'Where Europe makes its decisions. Our team has worked inside the EU bubble, so we know how the institutions, trade bodies and policy networks operate, and how to make an Asian company visible and credible to them.',
        points: [
          'Experience working inside the EU institutions',
          'Visibility with policymakers, trade bodies and EU-level media',
          'Reach across all 27 EU member states',
        ],
      },
      singapore: { pin: 'Singapore' },
    },
  },

  'zh-TW': {
    mapLabel: '歐洲與亞洲之間的走廊地圖。點選據點即可顯示其涵蓋的區域。',
    hubsLabel: '選擇據點',
    viewLabel: '地圖檢視',
    viewCorridor: '歐亞全覽',
    viewEurope: '聚焦歐洲',
    hint: '點選據點，查看涵蓋區域',
    distance: (km) => `台北 · 約 ${km.toLocaleString('zh-TW')} 公里`,
    show: (title) => `顯示：${title}`,
    cta: '了解我們的在地做法',
    hubs: {
      taipei: {
        tab: '台北 · 台灣',
        pin: '台北',
        alt: 'Taipei',
        kicker: '亞洲據點',
        title: '台灣台北',
        region: '台灣 · 中國大陸 · 新加坡',
        text: '我們亞洲業務的根基。以母語等級的中文、在地平台，以及台灣決策者真正信任的人脈為基礎，並延伸至中國大陸與新加坡市場。',
        points: [
          '以中文母語撰寫內容、進行開發聯繫',
          '拓展中國大陸市場',
          '在新加坡建立能見度與合作夥伴',
        ],
      },
      warsaw: {
        tab: '華沙 · 波蘭',
        pin: '華沙',
        alt: 'Warsaw',
        kicker: '中東歐',
        title: '波蘭華沙',
        region: '波蘭 · 中東歐',
        text: '我們通往中東歐的門戶。波蘭是該區域最大的經濟體，也是我們實際在地與台灣及歐洲企業合作的市場。',
        points: [
          '波蘭台灣形象展與 Formosa Meetup Warsaw',
          '開發中東歐的買家與合作夥伴',
          '協助台灣企業在波蘭設立公司',
        ],
      },
      brussels: {
        tab: '布魯塞爾 · 歐盟',
        pin: '布魯塞爾',
        alt: 'Brussels',
        kicker: '歐洲聯盟',
        title: '布魯塞爾與歐盟',
        region: '歐盟 · 27 個會員國',
        text: '歐洲做出決策的地方。我們的團隊曾在歐盟體系內工作，熟悉歐盟機構、產業公會與政策網絡的運作，知道如何讓亞洲企業在他們眼中具備能見度與可信度。',
        points: [
          '曾在歐盟機構內工作的實務經驗',
          '觸及政策制定者、產業公會與歐盟層級媒體',
          '覆蓋歐盟全部 27 個會員國',
        ],
      },
      singapore: { pin: '新加坡' },
    },
  },
};

export { detectLang } from '../shared/lang.js';
