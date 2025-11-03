import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../constants';
import Button from './Button';
import { PhoneIcon, MenuIcon, XIcon } from './Icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-20">
        <Link to="/" className="text-2xl font-bold text-primary">
          株式会社おがわ
        </Link>

        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
             link.href.startsWith('#/') ? (
                <Link key={link.name} to={link.href.substring(1)} className="text-gray-600 hover:text-primary transition-colors">
                  {link.name}
                </Link>
             ) : (
                <a key={link.name} href={link.href} className="text-gray-600 hover:text-primary transition-colors">
                    {link.name}
                </a>
             )
          ))}
          <Button href="#entry" gtmId="cta-header">無料見積もり</Button>
        </nav>

        <div className="lg:hidden flex items-center">
          <a href="tel:078-0000-0000" className="text-primary mr-4">
            <PhoneIcon className="w-6 h-6" />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary z-50">
            {isOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto mt-20 pt-10">
          <nav className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
               link.href.startsWith('#/') ? (
                <Link key={link.name} to={link.href.substring(1)} className="text-xl text-gray-700 hover:text-primary transition-colors">
                  {link.name}
                </Link>
               ) : (
                <a key={link.name} href={link.href} className="text-xl text-gray-700 hover:text-primary transition-colors">
                    {link.name}
                </a>
               )
            ))}
            <Button href="#entry" gtmId="cta-header" className="w-full max-w-sm mx-auto mt-8">
              無料見積もり
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
