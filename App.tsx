import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import HomePage from './pages/HomePage';
import NewsListPage from './pages/NewsListPage';
import NewsDetailPage from './pages/NewsDetailPage';
import CaseListPage from './pages/CaseListPage';
import CaseDetailPage from './pages/CaseDetailPage';
import ThanksPage from './pages/ThanksPage';
import { newsData, caseData } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-white text-base-text font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsListPage />} />
            <Route path="/news/:slug" element={<NewsDetailPage articles={newsData} />} />
            <Route path="/cases" element={<CaseListPage />} />
            <Route path="/cases/:slug" element={<CaseDetailPage cases={caseData} />} />
            <Route path="/thanks" element={<ThanksPage />} />
          </Routes>
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </HashRouter>
  );
};

export default App;
