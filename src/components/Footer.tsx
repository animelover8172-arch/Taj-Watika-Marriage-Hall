import React from 'react';
import { Phone, MessageSquare, MapPin, Instagram, Facebook, Globe } from 'lucide-react';
import { BUSINESS_INFO } from '../data/venueData';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="relative bg-[#070707] text-[#FAF8F3] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Left Column: Branding */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl tracking-luxury text-[#FAF8F3]">
              TAJ WATIKA
            </h3>
            <p className="text-sm tracking-wide-luxury text-[#D6B56C] font-light">
              {BUSINESS_INFO.hindiName}
            </p>
            <p className="text-xs sm:text-sm text-[#FAF8F3]/65 font-light leading-relaxed max-w-sm pt-2">
              An architectural destination for weddings, celebratory banquets, and timeless family gatherings in Hetampur, Kochas, Bihar.
            </p>

            {/* Social Icons (With editable links) */}
            <div className="pt-3 flex items-center space-x-3">
              <a
                href={BUSINESS_INFO.socials.facebook}
                id="footer-facebook-link"
                className="p-2.5 rounded-full border border-white/10 hover:border-[#D6B56C] text-[#FAF8F3]/70 hover:text-[#D6B56C] transition-colors"
                title="[Add Facebook URL]"
                aria-label="Facebook page placeholder"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.socials.instagram}
                id="footer-instagram-link"
                className="p-2.5 rounded-full border border-white/10 hover:border-[#D6B56C] text-[#FAF8F3]/70 hover:text-[#D6B56C] transition-colors"
                title="[Add Instagram URL]"
                aria-label="Instagram profile placeholder"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-link"
                className="p-2.5 rounded-full border border-white/10 hover:border-[#25D366] text-[#FAF8F3]/70 hover:text-[#25D366] transition-colors"
                title="WhatsApp Taj Watika"
                aria-label="WhatsApp contact"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-wide-luxury text-[#D6B56C] font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    id={`footer-link-${link.name.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-xs uppercase tracking-luxury text-[#FAF8F3]/70 hover:text-[#D6B56C] transition-colors block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-wide-luxury text-[#D6B56C] font-semibold mb-5">
              Contact & Location
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-[#FAF8F3]/75">
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#D6B56C] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-[#D6B56C] transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#D6B56C] shrink-0 mt-0.5" />
                <span>
                  TAJ WATIKA, Sasaram Rd, near NEW BLOCK,<br />
                  Kochas, Hetampur, Bihar 821112
                </span>
              </p>
              <p className="text-xs text-[#FAF8F3]/50 pl-6">
                Open 24 Hours • 4.0 ★ Google Rating
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Luxury Divider & Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#FAF8F3]/50">
          {/* Copyright */}
          <div>
            <p>© 2026 TAJ WATIKA MARRIAGE HALL. All Rights Reserved.</p>
          </div>

          {/* Mandatory Developer Credit */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-right border border-white/5 bg-black/40 px-4 py-2.5 rounded-sm">
            <span className="text-[#D6B56C] font-medium flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-[#D6B56C]" />
              Designed & Developed by {BUSINESS_INFO.developer.name}
            </span>
            <div className="flex items-center space-x-4 text-[11px]">
              <a
                href={BUSINESS_INFO.developer.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors flex items-center space-x-1"
              >
                <span>📱 WhatsApp: {BUSINESS_INFO.developer.whatsapp}</span>
              </a>
              <a
                href={BUSINESS_INFO.developer.callUrl}
                className="hover:text-[#D6B56C] transition-colors flex items-center space-x-1"
              >
                <span>📞 Call: {BUSINESS_INFO.developer.call}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
