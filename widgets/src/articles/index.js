// All articles the widget can show, by the id used in the embed:
// <polylocal-article article="mandarin-zest"></polylocal-article>
// To add an article: create content/<id>.js like the others and list it here.
import mandarinZest from './content/mandarin-zest.js';
import formosaNetwork from './content/formosa-network.js';
import firstEvent from './content/first-event.js';
import europeMarket from './content/europe-market.js';
import taiwanExpo2026 from './content/taiwan-expo-2026.js';

export const ARTICLES = Object.fromEntries(
  [mandarinZest, formosaNetwork, firstEvent, europeMarket, taiwanExpo2026].map((a) => [a.id, a]),
);

// Text around the articles (breadcrumbs, labels), in both languages.
export const LABELS = {
  en: {
    insights: ['Insights', '/insight'],
    categories: { cases: ['Case studies', '/blog/case-studies-11'], updates: ['Polylocal updates', '/blog/polylocal-updates-4'] },
    breadcrumb: 'Breadcrumb',
    toc: 'In this case study',
    client: 'Client',
    results: 'The results',
    more: { cases: 'More case studies', updates: 'More from Polylocal' },
    read: 'Read',
    missing: 'This article could not be found. Check the article name in the embed code.',
  },
  'zh-TW': {
    insights: ['洞察', '/insight'],
    categories: { cases: ['案例研究', '/blog/case-studies-11'], updates: ['Polylocal 最新消息', '/blog/polylocal-updates-4'] },
    breadcrumb: '導覽路徑',
    toc: '本篇內容',
    client: '客戶',
    results: '成果',
    more: { cases: '更多案例', updates: '更多 Polylocal 消息' },
    read: '閱讀',
    missing: '找不到這篇文章，請檢查嵌入碼中的文章名稱。',
  },
};
