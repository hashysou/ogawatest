import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { caseData } from '../constants';
import type { CaseStudy } from '../types';
import SectionTitle from '../components/SectionTitle';

const CaseCard: React.FC<{ caseItem: CaseStudy }> = ({ caseItem }) => {
    return (
        <article data-case-card data-category={caseItem.category} data-price={caseItem.price_range}>
            <Link to={`/cases/${caseItem.slug}`} data-gtm="case-card" className="block bg-white shadow-lg rounded-lg overflow-hidden group">
                <div className="overflow-hidden">
                    <img src={caseItem.gallery[0]} alt={caseItem.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                    <h3 className="font-bold text-lg h-14 overflow-hidden">{caseItem.title}</h3>
                    <ul className="spec text-sm text-gray-500 mt-3 flex flex-wrap gap-x-4">
                        <li>{caseItem.city}</li>
                        <li>{caseItem.price_range}</li>
                        <li>{caseItem.duration}</li>
                    </ul>
                </div>
            </Link>
        </article>
    );
};

const FilterButton: React.FC<{ label: string; onClick: () => void; isActive: boolean }> = ({ label, onClick, isActive }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-sm rounded-full font-semibold transition-colors ${
            isActive ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-200'
        }`}
    >
        {label}
    </button>
);


const CaseListPage: React.FC = () => {
    const [filters, setFilters] = useState({ category: 'all', price: 'all' });
    
    const categories = ['all', '外壁', '水まわり', '内装', '店舗'];
    const prices = ['all', '〜50万円', '50〜100万円', '100〜300万円', '300万円〜'];

    const filteredCases = useMemo(() => {
        return caseData.filter(item => {
            const categoryMatch = filters.category === 'all' || item.category === filters.category;
            const priceMatch = filters.price === 'all' || item.price_range === filters.price;
            return categoryMatch && priceMatch;
        });
    }, [filters]);
    
    const handleFilterChange = (type: 'category' | 'price', value: string) => {
        setFilters(prev => ({ ...prev, [type]: value }));
    };

    return (
        <div className="py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto">
                <SectionTitle title="施工事例" subtitle="CASE STUDIES" />
                
                <div className="bg-white p-6 rounded-lg shadow-md mb-12 space-y-4">
                    <div>
                        <h4 className="font-semibold mb-3">カテゴリ</h4>
                        <div className="flex flex-wrap gap-2">
                           {categories.map(cat => (
                               <FilterButton key={cat} label={cat === 'all' ? 'すべて' : cat} onClick={() => handleFilterChange('category', cat)} isActive={filters.category === cat} />
                           ))}
                        </div>
                    </div>
                     <div>
                        <h4 className="font-semibold mb-3">価格帯</h4>
                        <div className="flex flex-wrap gap-2">
                            {prices.map(price => (
                               <FilterButton key={price} label={price === 'all' ? 'すべて' : price} onClick={() => handleFilterChange('price', price)} isActive={filters.price === price} />
                           ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCases.map(caseItem => (
                        <CaseCard key={caseItem.slug} caseItem={caseItem} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CaseListPage;
