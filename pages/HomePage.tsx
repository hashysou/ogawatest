import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { newsData } from '../constants';
import { NewsType } from '../types';

// Hero Section Component
const Hero: React.FC = () => {
    const [searchParams] = useSearchParams();
    const isFromIG = searchParams.get('ref') === 'ig';

    const subText = isFromIG ? "Instagramをご覧の方へ｜写真を送るだけで仮見積もりOK" : "外壁 / 水まわり / 内装 / 店舗 —— 最短◯日で現地調査";
    const ctaText = isFromIG ? "写真を送るだけ見積もり" : "無料見積もりを依頼する";

    return (
        <section className="relative h-[60vh] lg:h-[80vh] flex items-center justify-center text-center text-white bg-gray-600">
            <img src="https://picsum.photos/seed/living-room/1920/1080" alt="施工後のリビング" className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="relative z-10 p-4 animate-fade-in">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight shadow-text">
                    “今すぐ相談したい”に寄り添う、<br />街のリフォームスタジオ
                </h1>
                <p data-hero-sub data-ig-text={isFromIG ? "Instagramをご覧の方へ｜写真を送るだけで仮見積もりOK" : ""} className="mt-4 text-lg md:text-xl max-w-2xl mx-auto shadow-text">
                    {subText}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button href="#entry" gtmId="cta-hero" className="w-full sm:w-auto" data-hero-cta data-ig-text={isFromIG ? "写真を送るだけ見積もり" : ""}>
                        {ctaText}
                    </Button>
                    <a data-show-ig style={{display: isFromIG ? 'inline-block' : 'none'}} className="btn btn-outline w-full sm:w-auto bg-white/20 border-white text-white hover:bg-white hover:text-primary" href="https://instagram.com/xxx" target="_blank">
                        DMで相談
                    </a>
                    <Button href="tel:078-xxxx-xxxx" variant="outline" className="w-full sm:w-auto bg-white/20 border-white text-white hover:bg-white hover:text-primary">
                        電話で相談 (078-xxxx-xxxx)
                    </Button>
                </div>
            </div>
        </section>
    );
};

// News Card Component
interface NewsCardProps {
  article: typeof newsData[0];
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
    const typeColorMap = {
        [NewsType.News]: 'bg-blue-500',
        [NewsType.Blog]: 'bg-green-500',
        [NewsType.Event]: 'bg-red-500',
    };
    const typeTextMap = {
        [NewsType.News]: 'お知らせ',
        [NewsType.Blog]: 'ブログ',
        [NewsType.Event]: 'イベント',
    };

    return (
        <article data-news-card data-type={article.type}>
            <Link to={`/news/${article.slug}`} data-gtm="news-card" className="block bg-white shadow-lg rounded-lg overflow-hidden group h-full flex flex-col">
                <img src={article.thumbnail} alt={article.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4 flex flex-col flex-grow">
                    <div className="meta flex items-center mb-2">
                        <span className={`tag --${article.type} ${typeColorMap[article.type]} text-white text-xs font-bold px-2 py-1 rounded`}>
                            {typeTextMap[article.type]}
                        </span>
                        <time className="ml-3 text-sm text-gray-500">{article.publish_date}</time>
                    </div>
                    <h3 className="font-bold text-lg h-14 overflow-hidden">{article.title}</h3>
                    <p className="text-sm text-gray-600 mt-2 h-10 overflow-hidden">{article.excerpt}</p>
                     {article.type === NewsType.Blog && (
                         <div className="mt-auto pt-2 text-right">
                            <span className="text-sm text-green-600 font-semibold">noteで読む →</span>
                        </div>
                    )}
                </div>
            </Link>
        </article>
    );
};


// News Section Component
const NewsSection: React.FC = () => {
    const latestNews = newsData.slice(0, 3);
    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto">
                <SectionTitle title="お知らせ・イベント・ブログ" subtitle="NEWS & TOPICS" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {latestNews.map((item, index) => (
                        <NewsCard key={index} article={item} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button href="/news" variant="outline">すべて見る</Button>
                </div>
            </div>
        </section>
    );
};


// Instagram Feed Component
const InstagramFeed: React.FC = () => {
    const posts = Array.from({ length: 6 });
    return (
        <section className="py-16 lg:py-24">
            <div className="container mx-auto">
                <SectionTitle title="Instagram" subtitle="@ogawa_koumuten" />
                <div id="ig-feed" style={{minHeight: '360px'}} className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                    {posts.map((_, index) => (
                        <a key={index} href="https://instagram.com/xxx" target="_blank" rel="noopener noreferrer" className="aspect-square block bg-gray-200 group overflow-hidden">
                           <img src={`https://picsum.photos/seed/ig${index}/500/500`} alt={`Instagram post ${index+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
                        </a>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Button href="https://instagram.com/xxx" isExternal={true}>Instagramで見る</Button>
                </div>
            </div>
        </section>
    )
}

// Process Flow Component
const ProcessFlow: React.FC = () => {
    const steps = [
        { title: 'ご相談', description: 'フォーム・お電話でお気軽に' },
        { title: '現地調査', description: '専門スタッフがお伺いします' },
        { title: 'お見積り', description: '詳細なプランと見積書を提出' },
        { title: '工事・アフター', description: '安心の施工と長期保証' },
    ];
    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto">
                <SectionTitle title="依頼の流れ" subtitle="FLOW" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="text-primary text-xl font-bold mb-2">STEP {index+1}</div>
                            <h3 className="text-lg font-bold">{step.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">{step.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button href="#entry">無料見積もり</Button>
                </div>
            </div>
        </section>
    )
}

// Contact Form Component
const ContactForm: React.FC = () => {
    const [agreed, setAgreed] = React.useState(false);
    
    return (
        <section id="entry" className="py-16 lg:py-24 bg-white scroll-mt-20">
            <div className="container mx-auto">
                <SectionTitle title="アクセス・お問い合わせ" subtitle="ACCESS & CONTACT" />
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-primary">株式会社おがわ</h3>
                            <address className="not-italic space-y-2 text-gray-700">
                                <p>〒650-0000<br />神戸市中央区架空町1-2-3</p>
                                <p>TEL: 078-xxxx-xxxx</p>
                                <p>営業時間: 9:00〜18:00 (水曜定休)</p>
                            </address>
                        </div>
                        <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                            <p className="text-gray-500">Google Map Placeholder</p>
                        </div>
                    </div>
                    
                    <div className="bg-gray-50 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold text-center mb-6">お問い合わせフォーム</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前 *</label>
                                <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">電話番号 *</label>
                                <input type="tel" id="phone" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス *</label>
                                <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                            </div>
                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">ご住所（市区）</label>
                                <input type="text" id="address" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">ご相談種別（複数選択可）</label>
                                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    {['外壁', '水まわり', '内装', '店舗', '新築', 'その他'].map(type => (
                                        <div key={type}>
                                            <input type="checkbox" id={`type-${type}`} value={type} className="mr-2"/>
                                            <label htmlFor={`type-${type}`}>{type}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="content" className="block text-sm font-medium text-gray-700">ご相談内容</label>
                                <textarea id="content" rows={5} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                            </div>
                             <div>
                                <label htmlFor="photo" className="block text-sm font-medium text-gray-700">写真添付（任意）</label>
                                <input type="file" id="photo" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"/>
                            </div>
                            <div className="text-center">
                                <div className="mb-4">
                                    <input type="checkbox" id="agreement" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mr-2" />
                                    <label htmlFor="agreement" className="text-sm">プライバシーポリシーに同意する</label>
                                </div>
                                 <Link to="/thanks">
                                    <button type="submit" disabled={!agreed} className="w-full max-w-xs py-3 px-4 border border-transparent rounded-full shadow-sm text-white bg-primary hover:bg-opacity-80 disabled:bg-gray-400 disabled:cursor-not-allowed">
                                        送信する
                                    </button>
                                 </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Main HomePage Component
const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <NewsSection />
            <InstagramFeed />
            <ProcessFlow />
            <ContactForm />
        </>
    );
};

export default HomePage;