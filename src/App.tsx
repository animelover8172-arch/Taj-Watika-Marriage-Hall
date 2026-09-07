import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStatement } from './components/BrandStatement';
import { VenueStory } from './components/VenueStory';
import { Experiences } from './components/Experiences';
import { SignatureShowcase } from './components/SignatureShowcase';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { EnquiryForm } from './components/EnquiryForm';
import { VisitTajWatika } from './components/VisitTajWatika';
import { ContactStrip } from './components/ContactStrip';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Subtle, elegant entry reveal
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-[#FAF8F3] overflow-x-hidden selection:bg-[#D6B56C]/30 selection:text-[#FAF8F3]">
      
      {/* Subtle initial loader transition */}
      {loading && (
        <div className="fixed inset-0 z-50 bg-[#0B0B0B] flex flex-col items-center justify-center transition-opacity duration-700 pointer-events-none">
          <div className="text-center">
            <span className="font-serif text-2xl sm:text-3xl tracking-wide-luxury text-[#FAF8F3] block animate-pulse">
              TAJ WATIKA
            </span>
            <span className="text-[10px] tracking-wide-luxury text-[#D6B56C] mt-2 block">
              ताज वाटिका मैरिज हॉल • KOCHAS
            </span>
            <div className="w-16 h-[1px] bg-[#D6B56C]/60 mx-auto mt-4" />
          </div>
        </div>
      )}

      {/* Luxury Sticky Navbar */}
      <Navbar onEnquireClick={scrollToEnquiry} />

      {/* Main Content Sections */}
      <main id="main-content" className="relative">
        {/* 1. Hero Section */}
        <Hero
          onEnquireClick={scrollToEnquiry}
          onExploreClick={scrollToAbout}
        />

        {/* 2. Brand Statement Section */}
        <BrandStatement />

        {/* 3. Venue Story Section */}
        <VenueStory onPlanClick={scrollToEnquiry} />

        {/* 4. Experiences Section */}
        <Experiences onEnquireClick={scrollToEnquiry} />

        {/* 5. Signature Venue Showcase */}
        <SignatureShowcase onPlanClick={scrollToEnquiry} />

        {/* 6. Gallery Section with Asymmetrical Masonry & Lightbox */}
        <Gallery />

        {/* 7. Google Reviews Section */}
        <Reviews />

        {/* 8. Reservation & Enquiry Experience */}
        <EnquiryForm />

        {/* 9. Visit Taj Watika & Google Maps Location */}
        <VisitTajWatika />

        {/* 10. Contact Strip CTA */}
        <ContactStrip onEnquireClick={scrollToEnquiry} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}
