import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { newsData } from '../constants';
import type { NewsArticle } from '../types';
import { NewsType } from '../types';
import SectionTitle from '../components/SectionTitle';

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => {
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
        <article data-news-card data-type={article.type} className="bg-white shadow-lg rounded-lg overflow-hidden group">
            <Link to={`/news/${article.slug}`} data-gtm="news-card" className="block h-full flex flex-col">
                <img src={article.thumbnail} alt={article.title} className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity" />
                <div className="p-6 flex flex-col flex-grow">
                    <div className="meta flex items-center mb-3">
                        <span className={`tag --${article.type} ${typeColorMap[article.type]} text-white text-xs font-bold px-2 py-1 rounded`}>
                            {typeTextMap[article.type]}
                        </span>
                        <time className="ml-4 text-sm text-gray-500">{article.publish_date}</time>
                    </div>
                    <h3 className="font-bold text-xl mb-2 h-14 overflow-hidden">{article.title}</h3>
                    <p className="text-gray-600 text-sm h-20 overflow-hidden">{article.excerpt}</p>
                    
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

const NewsListPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeFilter = searchParams.get('type') || 'all';

    const filters = [
        { key: 'all', name: 'すべて' },
        { key: NewsType.News, name: 'お知らせ' },
        { key: NewsType.Blog, name: 'ブログ' },
        { key: NewsType.Event, name: 'イベント' },
    ];

    const filteredNews = useMemo(() => {
        if (activeFilter === 'all') {
            return newsData;
        }
        return newsData.filter(item => item.type === activeFilter);
    }, [activeFilter]);
    
    const handleFilterChange = (filterKey: string) => {
        setSearchParams(filterKey === 'all' ? {} : { type: filterKey });
    };

    return (
        <div className="py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto">
                <SectionTitle title="お知らせ" subtitle="NEWS & TOPICS" />
                
                <div className="flex justify-center space-x-2 sm:space-x-4 mb-12">
                    {filters.map(filter => (
                        <button
                            key={filter.key}
                            onClick={() => handleFilterChange(filter.key)}
                            className={`px-4 py-2 text-sm sm:text-base rounded-full font-semibold transition-colors ${
                                activeFilter === filter.key
                                    ? 'bg-primary text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {filter.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredNews.map(article => (
                        <NewsCard key={article.slug} article={article} />
                    ))}
                </div>
                
                {/* Pagination Placeholder */}
                <div className="mt-16 flex justify-center items-center space-x-2">
                    <span className="px-4 py-2 rounded-md bg-primary text-white">1</span>
                    <span className="px-4 py-2 rounded-md bg-white hover:bg-gray-100">2</span>
                    <span className="px-4 py-2 rounded-md bg-white hover:bg-gray-100">3</span>
                </div>
            </div>
        </div>
    );
};

export default NewsListPage;