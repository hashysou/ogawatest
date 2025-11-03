import React from 'react';
import { useParams, Link } from 'react-router-dom';
import type { CaseStudy } from '../types';
import Button from '../components/Button';
import { ChevronRightIcon } from '../components/Icons';

interface CaseDetailPageProps {
    cases: CaseStudy[];
}

const CaseDetailPage: React.FC<CaseDetailPageProps> = ({ cases }) => {
    const { slug } = useParams<{ slug: string }>();
    const caseItem = cases.find(c => c.slug === slug);

    if (!caseItem) {
        return <div className="container mx-auto text-center py-24">施工事例が見つかりません。</div>;
    }

    return (
        <div>
            <nav className="breadcrumb text-sm text-gray-500 bg-gray-100 py-3">
                <div className="container mx-auto flex items-center">
                    <Link to="/" className="hover:text-primary">Home</Link>
                    <ChevronRightIcon className="w-4 h-4 mx-1" />
                    <Link to="/cases" className="hover:text-primary">施工事例</Link>
                    <ChevronRightIcon className="w-4 h-4 mx-1" />
                    <span className="truncate">{caseItem.title}</span>
                </div>
            </nav>

            <header className="case-hero bg-gray-700 text-white py-12 lg:py-16 text-center">
                <div className="container mx-auto">
                    <p className="text-lg text-gray-300">{caseItem.category}</p>
                    <h1 className="text-3xl lg:text-5xl font-bold mt-2 mb-8">{caseItem.title}</h1>
                    <Button href="/#entry" gtmId="cta-case-hero">無料見積もりはこちら</Button>
                </div>
            </header>
            
            <div className="container mx-auto py-12 lg:py-16">
                 <section className="case-spec mb-12">
                     <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
                        <div className="bg-white p-4"><dt className="font-semibold text-sm text-gray-500">カテゴリ</dt><dd className="text-lg font-bold">{caseItem.category}</dd></div>
                        <div className="bg-white p-4"><dt className="font-semibold text-sm text-gray-500">所在地</dt><dd className="text-lg font-bold">{caseItem.city}</dd></div>
                        <div className="bg-white p-4"><dt className="font-semibold text-sm text-gray-500">工期</dt><dd className="text-lg font-bold">{caseItem.duration}</dd></div>
                        <div className="bg-white p-4"><dt className="font-semibold text-sm text-gray-500">価格帯</dt><dd className="text-lg font-bold">{caseItem.price_range}</dd></div>
                     </dl>
                 </section>
                 
                 <section className="case-beforeafter mb-12">
                     <h2 className="text-2xl font-bold text-center mb-8">Before & After</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <figure className="before">
                             <img src={caseItem.before_after[0].before} alt="Before" className="w-full rounded-lg shadow-md" />
                             <figcaption className="text-center font-semibold mt-2 text-gray-600">Before</figcaption>
                         </figure>
                         <figure className="after">
                            <img src={caseItem.before_after[0].after} alt="After" className="w-full rounded-lg shadow-md" />
                            <figcaption className="text-center font-semibold mt-2 text-gray-600">After</figcaption>
                         </figure>
                     </div>
                 </section>

                 <section className="case-note bg-blue-50 p-8 rounded-lg mb-12">
                     <h2 className="text-2xl font-bold text-primary mb-4">担当者メモ</h2>
                     <p className="text-gray-700 leading-relaxed">{caseItem.note}</p>
                 </section>
                 
                 {caseItem.customer_voice && (
                     <section className="case-voice bg-yellow-50 p-8 rounded-lg mb-12">
                        <h2 className="text-2xl font-bold text-yellow-700 mb-4">お客様の声</h2>
                        <p className="text-gray-700 leading-relaxed">{caseItem.customer_voice}</p>
                     </section>
                 )}

                 {caseItem.gallery.length > 0 && (
                     <section className="case-gallery mb-12">
                        <h2 className="text-2xl font-bold text-center mb-8">ギャラリー</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                           {caseItem.gallery.map((image, index) => (
                               <a href={image} key={index} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg shadow-md">
                                   <img src={image} alt={`ギャラリー写真 ${index+1}`} className="w-full h-full object-cover" />
                               </a>
                           ))}
                        </div>
                     </section>
                 )}
                 
                 <section className="cta-bottom text-center py-12 bg-gray-100 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">リフォームのご相談はお気軽に</h2>
                    <Button href="/#entry" gtmId="cta-case-bottom" className="text-lg">
                        このような工事を相談する
                    </Button>
                 </section>
            </div>
        </div>
    );
};

export default CaseDetailPage;
