
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import Logo from "../Assets/logo.png"

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass' : 'py-5 bg-transparent'
      }`}
    >
      <div className={`container mx-auto flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
        <a href="#" className="flex items-center">
          <span className="text-2xl font-poppins font-bold text-secondary">
          <img src={Logo} alt="Logo" className='h-16 w-auto' />
          </span>
        </a>

        <nav className="hidden md:block">
          <ul className={`flex items-center space-x-8 ${isRTL ? 'space-x-reverse' : ''}`}>
            <li>
              <a href="#about" className="text-gray-900 hover:text-primary transition-colors ">
                {t('About', 'حول')}
              </a>
            </li>
            <li className='pl-5'>
              <a href="#values" className="text-gray-900 hover:text-primary transition-colors">
                {t('Values', 'القيم')}
              </a>
            </li>
            <li>
              <a href="#team" className="text-gray-900 hover:text-primary transition-colors">
                {t('Team', 'الفريق')}
              </a>
            </li>
            <li>
              <a href="#contact" className="btn btn-primary">
                {t('Contact Us', 'اتصل بنا')}
              </a>
            </li>
            <li>
              <LanguageToggle />
            </li>
          </ul>
        </nav>

        <div className="flex items-center md:hidden">
          <LanguageToggle />
          <button
            className={`text-gray-900 ${isRTL ? 'mr-3' : 'ml-3'}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 md:hidden animate-fade-in">
          <nav>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#about" 
                  className="block py-2 text-gray-900 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('About', 'حول')}
                </a>
              </li>
              <li>
                <a 
                  href="#values" 
                  className="block py-2 text-gray-900 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('Values', 'القيم')}
                </a>
              </li>
              <li>
                <a 
                  href="#team" 
                  className="block py-2 text-gray-900 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('Team', 'الفريق')}
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="btn btn-primary w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('Contact Us', 'اتصل بنا')}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
