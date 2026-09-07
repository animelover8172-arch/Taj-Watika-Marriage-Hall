import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      id="gallery-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      {/* Close button */}
      <button
        type="button"
        id="lightbox-close-btn"
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-2.5 text-[#FAF8F3]/80 hover:text-[#D6B56C] bg-black/40 hover:bg-black/80 rounded-full transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        type="button"
        id="lightbox-prev-btn"
        onClick={onPrev}
        className="absolute left-4 sm:left-6 z-20 p-3 text-[#FAF8F3]/80 hover:text-[#D6B56C] bg-black/50 hover:bg-black/80 rounded-full transition-colors border border-white/10"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        type="button"
        id="lightbox-next-btn"
        onClick={onNext}
        className="absolute right-4 sm:right-6 z-20 p-3 text-[#FAF8F3]/80 hover:text-[#D6B56C] bg-black/50 hover:bg-black/80 rounded-full transition-colors border border-white/10"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Stage */}
      <div className="relative max-w-5xl max-h-[85vh] w-full mx-4 flex flex-col items-center justify-center">
        <div className="relative max-h-[72vh] overflow-hidden rounded-sm shadow-2xl border border-white/10 bg-[#0E0E0E]">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="max-h-[72vh] w-auto max-w-full object-contain mx-auto transition-transform duration-300"
          />
        </div>

        {/* Caption & Metadata */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <div className="flex items-center justify-center space-x-2 text-[11px] uppercase tracking-wide-luxury text-[#D6B56C] mb-1">
            <span>{currentItem.category}</span>
            <span>•</span>
            <span>{currentIndex + 1} of {items.length}</span>
          </div>
          <h4 className="font-serif text-lg sm:text-xl text-[#FAF8F3]">
            {currentItem.title}
          </h4>
          <p className="text-xs sm:text-sm text-[#FAF8F3]/70 mt-1 font-light">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
