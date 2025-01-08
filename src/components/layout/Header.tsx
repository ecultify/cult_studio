import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MenuButton from './MenuButton';
import MenuOverlay from './MenuOverlay';
import MenuItems from './MenuItems';

const navItems = ['Home', 'About Us', 'Cyc Wall', 'Blog', 'Contact Us'];

// Pages with dark backgrounds that need light text
const darkBackgroundPages = ['/about', '/cyc-wall', '/blog'];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const hasDarkBackground = darkBackgroundPages.includes(location.pathname);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const getTextColor = () => {
    if (isMenuOpen) return 'text-white';
    if (isScrolled) return 'text-black';
    if (isHomePage || hasDarkBackground) return 'text-white';
    return 'text-black';
  };

  const getHeaderBackground = () => {
    if (isScrolled) return 'bg-white shadow-lg';
    return 'bg-transparent';
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${getHeaderBackground()}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className={`text-2xl font-bold transition-colors ${getTextColor()}`}
          >
            cult.studio
          </Link>

          <MenuButton 
            isOpen={isMenuOpen} 
            onClick={toggleMenu} 
            isScrolled={isScrolled}
            isHomePage={isHomePage}
            hasDarkBackground={hasDarkBackground}
          />
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <MenuOverlay isOpen={isMenuOpen} />
            <MenuItems 
              items={navItems} 
              onItemClick={() => {
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }} 
            />
          </>
        )}
      </AnimatePresence>
    </header>
  );
}