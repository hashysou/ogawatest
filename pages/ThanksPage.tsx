import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const ThanksPage: React.FC = () => {
    
    React.useEffect(() => {
        // Simulate GA4 event tracking
        console.log('GA4 Event: generate_lead');
    }, []);

    return (
        <div className="py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">お問い合わせありがとうございます</h1>
                <p className="text-lg text-gray-700 mb-8">
                    内容を確認の上、担当者より3営業日以内にご連絡させていただきます。<br/>
                    今しばらくお待ちくださいませ。
                </p>
                <Button href="/" variant="outline">トップページへ戻る</Button>
            </div>
        </div>
    );
};

export default ThanksPage;
