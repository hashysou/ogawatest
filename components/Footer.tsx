import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8 lg:pb-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4">株式会社おがわ</h3>
            <p className="text-sm text-gray-400">〒650-0000<br />神戸市中央区架空町1-2-3</p>
            <p className="text-sm text-gray-400 mt-2">TEL: 078-xxxx-xxxx</p>
            <p className="text-sm text-gray-400">営業時間: 9:00〜18:00 (水曜定休)</p>
          </div>
          <div className="md:col-span-2 flex justify-center md:justify-end">
             <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-sm">
                <Link to="#/cases" className="hover:text-secondary">施工事例</Link>
                <Link to="#/news" className="hover:text-secondary">お知らせ</Link>
                <a href="#about" className="hover:text-secondary">会社概要</a>
                <a href="#privacy" className="hover:text-secondary">プライバシーポリシー</a>
             </nav>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} 株式会社おがわ All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
