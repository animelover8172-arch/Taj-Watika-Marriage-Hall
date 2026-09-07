import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/venueData';

interface NavbarProps {
  onEnquireClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onEnquireClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        id="scroll-progress-indicator"
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-[#D6B56C]/60 via-[#E8D39E] to-[#D6B56C] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#D6B56C]/15 py-3.5 shadow-2xl shadow-black/50'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            id="nav-brand-logo"
            className="group flex flex-col focus:outline-none"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-luxury font-medium text-[#FAF8F3] group-hover:text-[#D6B56C] transition-colors">
              TAJ WATIKA
            </span>
            <span className="text-[10px] tracking-wide-luxury text-[#D6B56C] font-light -mt-0.5">
              {BUSINESS_INFO.hindiName} • KOCHAS
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-xs uppercase tracking-luxury text-[#FAF8F3]/80 hover:text-[#D6B56C] transition-colors font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D6B56C] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="nav-direct-call-btn"
              className="flex items-center space-x-1.5 text-xs text-[#FAF8F3]/85 hover:text-[#D6B56C] transition-colors px-3 py-2"
              title="Call Taj Watika"
            >
              <Phone className="w-3.5 h-3.5 text-[#D6B56C]" />
              <span className="tracking-wider">{BUSINESS_INFO.phone}</span>
            </a>

            <button
              type="button"
              id="nav-enquire-primary-btn"
              onClick={onEnquireClick}
              className="relative inline-flex items-center justify-center px-5 py-2 text-xs uppercase tracking-luxury font-semibold text-[#0B0B0B] bg-[#D6B56C] hover:bg-[#E8D39E] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#D6B56C]/20 active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              <span>Enquire Now</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#FAF8F3] hover:text-[#D6B56C] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`fixed inset-0 z-50 transition-opacity duration-300 sm:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        <div 
          className={`absolute top-0 right-0 w-[82%] max-w-sm h-full bg-[#0E0E0E] border-l border-[#D6B56C]/20 shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div>
                <p className="font-serif text-lg tracking-luxury text-[#FAF8F3]">TAJ WATIKA</p>
                <p className="text-[10px] tracking-wide-luxury text-[#D6B56C]">{BUSINESS_INFO.hindiName}</p>
              </div>
              <button
                type="button"
                id="mobile-drawer-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#FAF8F3]/70 hover:text-[#D6B56C]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-sm uppercase tracking-luxury text-[#FAF8F3]/90 hover:text-[#D6B56C] transition-colors py-2 border-b border-white/5 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="mobile-nav-call-link"
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 border border-[#D6B56C]/30 text-xs uppercase tracking-luxury text-[#FAF8F3] hover:border-[#D6B56C] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D6B56C]" />
              <span>Call +91 99347 81245</span>
            </a>

            <button
              type="button"
              id="mobile-nav-enquire-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onEnquireClick();
              }}
              className="w-full py-3 px-4 bg-[#D6B56C] text-[#0B0B0B] text-xs uppercase tracking-luxury font-semibold hover:bg-[#E8D39E] transition-colors shadow-lg"
            >
              Enquire Now
            </button>

            <p className="text-center text-[10px] text-[#FAF8F3]/50 pt-2 tracking-wider">
              Hetampur, Kochas, Bihar • Open 24 Hours
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
