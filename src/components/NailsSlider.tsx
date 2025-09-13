"use client";

import { useState, useEffect, useCallback } from 'react';

const NailsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Placeholder nail images - these will be replaced with actual images
  const nailImages = [
    {
      src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&h=800&fit=crop&crop=center',
      alt: 'Elegant French manicure with gold accents and detailed nail art design'
    },
    {
      src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&h=800&fit=crop&crop=center',
      alt: 'Glamorous long nails with intricate golden patterns and rhinestone embellishments'
    },
    {
      src: 'https://images.unsplash.com/photo-1604654894309-0e6d5c2b5c78?w=1200&h=800&fit=crop&crop=center',
      alt: 'Professional acrylic nails with ombre gradient and artistic nail design'
    },
    {
      src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200&h=800&fit=crop&crop=center',
      alt: 'Luxury press-on nails with matte black finish and gold leaf details'
    },
    {
      src: 'https://images.unsplash.com/photo-1604654894358-7c9e325e5f25?w=1200&h=800&fit=crop&crop=center',
      alt: 'Bridal nail art with white base and delicate gold floral patterns'
    },
    {
      src: 'https://images.unsplash.com/photo-1606103836293-2fa655d14e7e?w=1200&h=800&fit=crop&crop=center',
      alt: 'Trendy stiletto nails with holographic finish and geometric designs'
    },
    {
      src: 'https://images.unsplash.com/photo-1604654894637-1c8f5a5d8d4c?w=1200&h=800&fit=crop&crop=center',
      alt: 'Classic red nails with glossy finish and perfect cuticle care'
    },
    {
      src: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=800&fit=crop&crop=center',
      alt: 'Modern nude nails with minimalist gold stripe accent and clean finish'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % nailImages.length);
  }, [nailImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + nailImages.length) % nailImages.length);
  }, [nailImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000); // Resume autoplay after 3 seconds
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Touch/swipe functionality for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 3000);
    }
    if (isRightSwipe) {
      prevSlide();
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 3000);
    }
  };

  return (
    <div className="relative w-full h-[45vh] md:h-[60vh] overflow-hidden rounded-2xl shadow-2xl shadow-gold/20 group">
      {/* Main slider container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {nailImages.map((image, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
              onError={(e) => {
                // Fallback for broken images
                const target = e.currentTarget as HTMLImageElement;
                target.src = `https://via.placeholder.com/1200x800/C6A664/000000?text=Nail+Design+${index + 1}`;
              }}
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            
            {/* Image caption overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm md:text-base font-medium bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg">
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => {
          prevSlide();
          setIsAutoPlaying(false);
          setTimeout(() => setIsAutoPlaying(true), 3000);
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gold/80 hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
        aria-label="Previous image"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>

      <button
        onClick={() => {
          nextSlide();
          setIsAutoPlaying(false);
          setTimeout(() => setIsAutoPlaying(true), 3000);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gold/80 hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
        aria-label="Next image"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {nailImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-gold shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Autoplay indicator */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`p-2 rounded-full transition-all duration-300 ${
            isAutoPlaying 
              ? 'bg-gold/80 text-black' 
              : 'bg-black/50 text-white hover:bg-white/20'
          }`}
          aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isAutoPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 002 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default NailsSlider;