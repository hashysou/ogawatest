import React from 'react';
import Button from './Button';

const StickyCTA: React.FC = () => {
  return (
    <div className="sticky-cta lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 shadow-[0_-2px_5px_rgba(0,0,0,0.1)] z-40" data-fixed-sp>
      <div className="flex items-center justify-around space-x-2">
        <a href="#entry" className="flex-1 text-center font-bold py-3 px-4 rounded-full transition-colors duration-300 bg-primary text-white hover:bg-opacity-80" data-gtm="cta-sticky">
          無料見積もり
        </a>
        <a href="tel:078-xxxx-xxxx" className="flex-1 text-center font-bold py-3 px-4 rounded-full transition-colors duration-300 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white" data-gtm="cta-phone">
          電話
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;
