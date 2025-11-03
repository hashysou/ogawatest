import React from 'react';
import { useParams, Link } from 'react-router-dom';
import type { NewsArticle } from '../types';
import { NewsType } from '../types';
import { XSocialIcon, LineSocialIcon, ShareIcon, ChevronRightIcon } from '../components/Icons';

interface NewsDetailPageProps {
    articles: NewsArticle[];
}

const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ articles }) => {
    const { slug } = useParams<{ slug: string }>();
    const article = articles.find(a => a.slug === slug);

    if (!article) {
        return <div className="container mx-auto text-center py-24">記事が見つかりません。</div>;
    }
    
    const relatedArticles = articles.filter(a => a.type === article.type && a.slug !== article.slug).slice(0, 3);

    const typeTextMap = {
        [NewsType.News]: 'お知らせ',
        [NewsType.Blog]: 'ブログ',
        [NewsType.Event]: 'イベント',
    };
    const typeColorMap = {
        [NewsType.News]: 'bg-blue-500',
        [NewsType.Blog]: 'bg-green-500',
        [NewsType.Event]: 'bg-red-500',
    };

    return (
        <div className="py-12 lg:py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8">
                        <nav className="breadcrumb text-sm text-gray-500 mb-6 flex items-center">
                           <Link to="/" className="hover:text-primary">Home</Link>
                           <ChevronRightIcon className="w-4 h-4 mx-1" />
                           <Link to="/news" className="hover:text-primary">News</Link>
                           <ChevronRightIcon className="w-4 h-4 mx-1" />
                           <Link to={`/news?type=${article.type}`} className="hover:text-primary">{typeTextMap[article.type]}</Link>
                           <ChevronRightIcon className="w-4 h-4 mx-1" />
                           <span className="truncate">{article.title}</span>
                        </nav>
                        
                        <h1 className="text-3xl lg:text-4xl font-bold mb-4">{article.title}</h1>
                        
                        <p className="meta flex items-center text-gray-500 mb-8">
                          <span className={`tag --${article.type} ${typeColorMap[article.type]} text-white text-xs font-bold px-2 py-1 rounded`}>{typeTextMap[article.type]}</span> 
                          <time className="ml-4">{article.publish_date}</time>
                        </p>

                        <div className="post-body prose lg:prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.body }}></div>

                        <div className="mt-12 flex items-center space-x-4">
                            <ShareIcon className="w-6 h-6 text-gray-500"/>
                            <span className="font-semibold">シェアする</span>
                            <a href="#" className="text-gray-700 hover:text-black"><XSocialIcon className="w-6 h-6" /></a>
                            <a href="#" className="text-green-500 hover:text-green-600"><LineSocialIcon className="w-8 h-8"/></a>
                        </div>
                        
                        <section className="related mt-16">
                            <h2 className="text-2xl font-bold border-b-2 border-primary pb-2 mb-6">関連記事</h2>
                            <div className="space-y-4">
                               {relatedArticles.map(rel => (
                                   <Link key={rel.slug} to={`/news/${rel.slug}`} className="block hover:bg-gray-50 p-2 rounded">
                                     <p className="text-sm text-gray-500">{rel.publish_date}</p>
                                     <p className="font-semibold">{rel.title}</p>
                                   </Link>
                               ))}
                            </div>
                        </section>
                    </div>

                    <aside className="lg:col-span-4">
                        <div className="sticky top-24">
                           <div className="bg-gray-50 p-6 rounded-lg mb-8">
                                <h3 className="font-bold text-lg mb-4 border-l-4 border-primary pl-3">カテゴリ</h3>
                                <ul>
                                   <li><Link to="/news?type=news" className="block p-2 hover:bg-gray-200 rounded">お知らせ</Link></li>
                                   <li><Link to="/news?type=blog" className="block p-2 hover:bg-gray-200 rounded">ブログ</Link></li>
                                   <li><Link to="/news?type=event" className="block p-2 hover:bg-gray-200 rounded">イベント</Link></li>
                                </ul>
                           </div>
                           <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-lg mb-4 border-l-4 border-primary pl-3">最近の記事</h3>
                                <ul className="space-y-3">
                                   {articles.slice(0, 5).map(a => (
                                       <li key={a.slug}><Link to={`/news/${a.slug}`} className="hover:text-primary text-sm">{a.title}</Link></li>
                                   ))}
                                </ul>
                           </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailPage;
