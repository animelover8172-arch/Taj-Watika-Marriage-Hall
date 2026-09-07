import React from 'react';
import { BUSINESS_INFO } from '../data/venueData';

export const BrandStatement: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-[#0B0B0B] py-24 sm:py-32 overflow-hidden border-b border-white/5"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Brand Tag */}
        <p className="text-xs uppercase tracking-wide-luxury text-[#D6B56C] mb-6 font-medium">
          {BUSINESS_INFO.hindiName}
        </p>

        {/* Large Editorial Heading */}
        <h2
          id="brand-statement-heading"
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#FAF8F3] leading-[1.2] tracking-tight mb-8"
        >
          A Place Made for Moments That Matter
        </h2>

        {/* Small Champagne-Gold Divider */}
        <div className="w-16 h-[1.5px] bg-[#D6B56C] mb-8" />

        {/* Short Elegant Paragraph */}
        <p
          id="brand-statement-copy"
          className="text-base sm:text-lg md:text-xl text-[#FAF8F3]/80 font-light leading-relaxed max-w-2xl text-balance"
        >
          TAJ WATIKA provides a memorable and gracious setting for weddings, family celebrations, and special occasions. Nestled in Hetampur, Kochas, our venue welcomes your guests with classic hospitality, expansive spaces, and an atmosphere crafted to honor life’s greatest milestones.
        </p>
      </div>
    </section>
  );
};
