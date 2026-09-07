import React, { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/venueData';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    'All',
    'Weddings',
    'Banquet & Stage',
    'Dining & Hospitality',
    'Lighting & Ambience',
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="gallery"
      className="relative bg-[#0B0B0B] py-24 sm:py-32 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-wide-luxury text-[#D6B56C] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VISUAL PORTFOLIO</span>
          </div>
          
          <h2
            id="gallery-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF8F3] tracking-tight leading-tight mb-4"
          >
            The Setting & Celebrations
          </h2>

          <div className="w-12 h-[1px] bg-[#D6B56C] mx-auto mb-6" />

          <p className="text-sm sm:text-base text-[#FAF8F3]/70 font-light max-w-xl mx-auto">
            An editorial perspective into the atmosphere, lighting, stages, and hospitality that bring gatherings to life at Taj Watika.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                id={`gallery-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs uppercase tracking-luxury transition-all duration-200 border ${
                  selectedCategory === cat
                    ? 'bg-[#D6B56C] text-[#0B0B0B] border-[#D6B56C] font-semibold shadow-md'
                    : 'bg-transparent text-[#FAF8F3]/70 border-white/10 hover:border-[#D6B56C]/50 hover:text-[#FAF8F3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {filteredItems.map((item, index) => {
            // Apply varied aspect ratios for an editorial magazine feel
            let spanClass = 'col-span-1 row-span-1';
            if (item.aspect === 'tall') {
              spanClass = 'col-span-1 row-span-2';
            } else if (item.aspect === 'wide') {
              spanClass = 'col-span-1 sm:col-span-2 row-span-1';
            }

            return (
              <div
                key={item.id}
                id={`gallery-item-${item.id}`}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden bg-[#121212] border border-white/10 cursor-pointer ${spanClass} transition-all duration-300 hover:border-[#D6B56C]/60 hover:shadow-2xl hover:shadow-black/60`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                {/* Hover Details Card */}
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wide-luxury text-[#D6B56C] font-medium">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-lg text-[#FAF8F3] mt-0.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#FAF8F3]/70 font-light mt-1 line-clamp-1">
                        {item.caption}
                      </p>
                    </div>

                    <div className="p-2 rounded-full bg-black/60 border border-[#D6B56C]/40 text-[#D6B56C]">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Always visible subtle category tag for mobile */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] uppercase tracking-luxury text-[#FAF8F3]/80 group-hover:hidden">
                  {item.category}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on actual venue photographs */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#FAF8F3]/40 tracking-wider">
            Curated presentation representative of venue styling & arrangements • TAJ WATIKA, Sasaram Rd, Kochas
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredItems}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
