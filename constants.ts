import type { NewsArticle, CaseStudy } from './types';
import { NewsType } from './types';

export const navLinks = [
  { name: '企業情報', href: '#about' },
  { name: 'サービス', href: '#services' },
  { name: 'ニュース', href: '#/news' },
  { name: '問い合わせ', href: '#entry' },
];

export const newsData: NewsArticle[] = [
  {
    slug: 'event-2024-summer',
    type: NewsType.Event,
    title: '夏のリフォーム相談会を開催します',
    publish_date: '2024.07.15',
    excerpt: '地域の皆様に感謝を込めて、夏のリフォーム相談会を開催いたします。お気軽にお越しください。',
    thumbnail: 'https://picsum.photos/seed/event1/400/300',
    body: '<h2>イベント詳細</h2><p>当日は専門のスタッフが常駐し、水まわりから外壁塗装まで、様々なお悩みにお答えします。</p><h3>特典</h3><ul><li>ご来場者全員に粗品プレゼント</li><li>お見積もり依頼で5%OFFクーポン</li></ul>'
  },
  {
    slug: 'blog-kitchen-選び方',
    type: NewsType.Blog,
    title: '失敗しないキッチンリフォームのポイント',
    publish_date: '2024.07.10',
    excerpt: '毎日使うキッチンだからこそ、こだわりたい。専門家が教えるキッチン選びの3つのポイントをご紹介します。',
    thumbnail: 'https://picsum.photos/seed/blog1/400/300',
    body: '<h2>ポイント1：レイアウト</h2><p>キッチンのレイアウトは作業効率に直結します。I型、L型、アイランド型など、ご自身の料理スタイルに合ったものを選びましょう。</p><h2>ポイント2：素材</h2><p>天板の素材は見た目だけでなく、手入れのしやすさも重要です。ステンレス、人工大理石など、それぞれのメリット・デメリットを理解しましょう。</p>'
  },
  {
    slug: 'news-new-service-start',
    type: NewsType.News,
    title: '新サービス「オンライン見積もり」を開始',
    publish_date: '2024.07.01',
    excerpt: 'お忙しい方でも手軽にご相談いただけるよう、写真を送るだけで概算見積もりが可能な新サービスを開始しました。',
    thumbnail: 'https://picsum.photos/seed/news1/400/300',
    body: '<h2>サービス概要</h2><p>LINE公式アカウントまたは、当サイトのお問い合わせフォームから、リフォーム希望箇所の写真を複数枚お送りください。3営業日以内に概算お見積もりをご返信いたします。</p>'
  },
    {
    slug: 'blog-bathroom-moisture',
    type: NewsType.Blog,
    title: '浴室の湿気対策！快適なバスタイムのために',
    publish_date: '2024.06.25',
    excerpt: '日本の気候では避けられない浴室の湿気。カビや結露を防ぐための効果的な対策をいくつかご紹介します。',
    thumbnail: 'https://picsum.photos/seed/blog2/400/300',
    body: '<h2>換気扇の正しい使い方</h2><p>入浴後だけでなく、24時間換気を活用することが重要です。フィルターの定期的な掃除も忘れずに行いましょう。</p>'
  },
];

export const caseData: CaseStudy[] = [
    {
        slug: 'case-1-living-reform',
        title: '明るく開放的なLDKリフォーム',
        category: '内装',
        city: '神戸市中央区',
        price_range: '100〜300万円',
        duration: '約1ヶ月',
        gallery: [
            'https://picsum.photos/seed/case1-after1/800/600',
            'https://picsum.photos/seed/case1-after2/800/600',
            'https://picsum.photos/seed/case1-after3/800/600',
        ],
        before_after: [
            { before: 'https://picsum.photos/seed/case1-before/800/600', after: 'https://picsum.photos/seed/case1-after1/800/600' }
        ],
        note: '壁付けだったキッチンを対面式に変更し、家族との会話が弾む空間になりました。床材や壁紙も一新し、部屋全体が明るい印象に。',
        customer_voice: '子供たちの様子を見ながら料理ができるようになり、とても満足しています。収納も増えてスッキリしました。'
    },
    {
        slug: 'case-2-bathroom-renewal',
        title: 'ホテルのような高級感のある浴室へ',
        category: '水まわり',
        city: '芦屋市',
        price_range: '50〜100万円',
        duration: '約1週間',
        gallery: [
            'https://picsum.photos/seed/case2-after1/800/600',
            'https://picsum.photos/seed/case2-after2/800/600',
        ],
        before_after: [
            { before: 'https://picsum.photos/seed/case2-before/800/600', after: 'https://picsum.photos/seed/case2-after1/800/600' }
        ],
        note: '在来工法からユニットバスへ変更。掃除がしやすくなっただけでなく、断熱性も向上し、冬でも快適なバスタイムを楽しめるようになりました。'
    },
    {
        slug: 'case-3-exterior-painting',
        title: '新築のような輝きを取り戻す外壁塗装',
        category: '外壁',
        city: '西宮市',
        price_range: '100〜300万円',
        duration: '約3週間',
        gallery: [
            'https://picsum.photos/seed/case3-after1/800/600',
        ],
        before_after: [
            { before: 'https://picsum.photos/seed/case3-before/800/600', after: 'https://picsum.photos/seed/case3-after1/800/600' }
        ],
        note: '高耐久のシリコン塗料を使用し、長期間美しい外観を保ちます。色褪せやひび割れもなくなり、お家の印象がガラッと変わりました。'
    },
    {
        slug: 'case-4-shop-interior',
        title: '居心地の良いカフェ店舗内装',
        category: '店舗',
        city: '神戸市東灘区',
        price_range: '300万円〜',
        duration: '約2ヶ月',
        gallery: [
            'https://picsum.photos/seed/case4-after1/800/600',
            'https://picsum.photos/seed/case4-after2/800/600',
            'https://picsum.photos/seed/case4-after3/800/600',
        ],
        before_after: [
            { before: 'https://picsum.photos/seed/case4-before/800/600', after: 'https://picsum.photos/seed/case4-after1/800/600' }
        ],
        note: '木の温もりを活かしたナチュラルなデザイン。お客様がリラックスして過ごせるような、落ち着いた空間づくりを心がけました。'
    }
];