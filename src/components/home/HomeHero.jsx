import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { heroSlides } from '@/data/heroSlides';

export default function HomeHero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const slideDuration = 5500; // 5.5 seconds per slide
  const progressIntervalMs = 50;

  // Active slide data
  const currentSlide = useMemo(() => heroSlides[currentSlideIndex], [currentSlideIndex]);

  // Check prefers-reduced-motion for accessibility
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      const listener = (e) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  // Slide navigation handlers
  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    setProgress(0);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setProgress(0);
  }, []);

  const handleSelectSlide = useCallback((index) => {
    setCurrentSlideIndex(index);
    setProgress(0);
  }, []);

  // Continuous Autoplay timer that NEVER pauses on mouse hover / enter / leave
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (progressIntervalMs / slideDuration) * 100;
        if (next >= 100) {
          setCurrentSlideIndex((curr) => (curr + 1) % heroSlides.length);
          return 0;
        }
        return next;
      });
    }, progressIntervalMs);

    return () => clearInterval(timer);
  }, [slideDuration]);

  // CTA button interaction handler
  const handleCtaClick = (e, label) => {
    e.preventDefault();
    const targetElement = document.getElementById(label.toLowerCase().replace(/\s+/g, '-'));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative w-full bg-[#0E1013] select-none flex flex-col hero-screen-fit border-b border-white/10"
      aria-label="MF Industrial Solutions Hero Showcase"
    >
      {/* ============================================================== */}
      {/* 1. MAIN HERO AREA: Split Screen with Angle / Diagonal Divider */}
      {/* ============================================================== */}
      <div className="relative w-full flex-1 min-h-0 flex flex-col lg:flex-row overflow-hidden">
        
        {/* LEFT CONTENT PANEL (43–46% on desktop in authentic Brand Red #C10A0E) */}
        <div
          className="relative z-20 w-full lg:w-[48%] xl:w-[45%] 2xl:w-[43%] bg-[#C10A0E] flex flex-col justify-between p-5 sm:p-7 md:p-8 lg:p-6 lg:py-5 xl:p-8 xl:py-7 2xl:p-10 2xl:py-8 lg:pr-12 xl:pr-16 hero-diagonal-left overflow-hidden"
        >
          {/* Subtle industrial texture grid */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
            aria-hidden="true"
          />

          {/* Left Panel Content */}
          <div className="relative z-10 flex-1 min-h-0 flex flex-col justify-center max-w-xl py-1 lg:py-0">
            
            {/* Eyebrow Label with Industrial Dash */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5 lg:mb-2 xl:mb-3">
              <span className="w-6 sm:w-8 h-[2px] bg-white/80 rounded-full shrink-0" />
              <span className="text-[11px] sm:text-[12px] xl:text-[13px] font-bold tracking-[0.2em] uppercase text-white/95">
                {currentSlide.eyebrow}
              </span>
            </div>

            {/* Extra-Bold Condensed Headline: ALL-WHITE TYPOGRAPHY ACROSS ALL SLIDES */}
            <h1 className="text-white font-condensed font-extrabold uppercase leading-[0.93] tracking-[-0.015em] mb-2.5 sm:mb-3.5 lg:mb-2.5 xl:mb-4 text-[36px] sm:text-[46px] md:text-[52px] lg:text-[38px] xl:text-[46px] 2xl:text-[54px]">
              <span className="block text-white">
                {currentSlide.headlineLine1}
              </span>
              <span className="block text-white">
                {currentSlide.headlineLine2}
              </span>
            </h1>

            {/* Slide Description */}
            <p className="text-white/95 text-[13.5px] sm:text-[14.5px] xl:text-[15.5px] leading-relaxed mb-3.5 sm:mb-4 lg:mb-3.5 xl:mb-5 font-normal max-w-lg">
              {currentSlide.description}
            </p>

            {/* Two Action Buttons (Primary White & Secondary Outlined) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-3.5">
              {/* Primary CTA: Pure White Button with Black (#111111) Text */}
              <a
                href={currentSlide.primaryCta.href}
                onClick={(e) => handleCtaClick(e, currentSlide.primaryCta.label)}
                className="group inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white hover:bg-[#F2F2F2] text-[#111111] font-condensed font-bold text-[14px] sm:text-[15px] tracking-wider uppercase shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200"
              >
                <span>{currentSlide.primaryCta.label}</span>
              </a>

              {/* Secondary CTA: Clean Outlined Button with Arrow */}
              <a
                href={currentSlide.secondaryCta.href}
                onClick={(e) => handleCtaClick(e, currentSlide.secondaryCta.label)}
                className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg border-2 border-white/90 hover:bg-white hover:text-[#C10A0E] text-white font-condensed font-bold text-[14px] sm:text-[15px] tracking-wider uppercase hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200"
              >
                <span>{currentSlide.secondaryCta.label}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Slide Controls: Previous/Next Arrows & Numbered Indicators with Progress Bars */}
          <div className="relative z-10 pt-2.5 sm:pt-3.5 lg:pt-2.5 xl:pt-3.5 flex items-center gap-3.5 sm:gap-5 border-t border-white/15 shrink-0">
            {/* Previous Arrow Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Hero Slide"
              className="w-8 h-8 sm:w-9 sm:h-9 xl:w-10 xl:h-10 rounded-lg border border-white/30 bg-black/25 hover:bg-black/45 text-white flex items-center justify-center transition-colors active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Clickable Slide Indicators (01, 02, 03) */}
            <div className="flex items-center gap-4 sm:gap-6">
              {heroSlides.map((slide, idx) => {
                const isActive = idx === currentSlideIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => handleSelectSlide(idx)}
                    aria-label={`Go to slide ${slide.slideNumber}: ${slide.category.title}`}
                    className="group flex flex-col items-center focus:outline-none cursor-pointer"
                  >
                    <span
                      className={`font-condensed font-bold text-[15px] sm:text-[16px] xl:text-[18px] transition-colors ${
                        isActive ? 'text-white' : 'text-white/50 group-hover:text-white/80'
                      }`}
                    >
                      {slide.slideNumber}
                    </span>
                    {/* Progress Bar Under Each Slide Number */}
                    <div className="w-8 sm:w-10 xl:w-12 h-[2.5px] bg-white/20 rounded-full mt-1 overflow-hidden">
                      <div
                        className={`h-full ${
                          prefersReducedMotion ? 'transition-none' : 'transition-all duration-75'
                        } ${
                          isActive
                            ? 'bg-white rounded-full'
                            : 'w-0 bg-transparent'
                        }`}
                        style={{
                          width: isActive ? `${progress}%` : '0%',
                        }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Next Arrow Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Hero Slide"
              className="w-8 h-8 sm:w-9 sm:h-9 xl:w-10 xl:h-10 rounded-lg border border-white/30 bg-black/25 hover:bg-black/45 text-white flex items-center justify-center transition-colors active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE PANEL (57–60% width on desktop, with diagonal seam) */}
        <div className="relative flex-1 min-h-[300px] sm:min-h-[380px] lg:min-h-0 bg-neutral-900 overflow-hidden lg:-ml-14">
          
          {/* Subtle Decorative Angled Seam Border on Desktop */}
          <div
            className="hidden lg:block absolute top-0 bottom-0 left-[54px] w-[3px] bg-white/30 z-30 pointer-events-none"
            style={{
              transform: 'skewX(-4.2deg)',
              transformOrigin: 'top left',
            }}
            aria-hidden="true"
          />

          {/* Slide Images with Smooth Crossfade */}
          {heroSlides.map((slide, idx) => {
            const isActive = idx === currentSlideIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 ${
                  prefersReducedMotion ? 'transition-none' : 'transition-opacity duration-700 ease-in-out'
                } ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="w-full h-full object-cover object-center"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
                {/* Subtle vignette/contrast overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. BOTTOM CATEGORY NAVIGATION STRIP                            */}
      {/* ============================================================== */}
      <div className="relative z-30 w-full shrink-0 bg-[#0E1013] border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-2.5 sm:py-3 lg:py-2.5 xl:py-3">
          <div className="flex flex-col lg:flex-row items-stretch gap-2.5 sm:gap-3 lg:gap-4">
            
            {/* Left Category Badge (Red Panel with Angled Right Edge, All-White Text) */}
            <div
              className="relative shrink-0 bg-[#C10A0E] text-white p-3 sm:p-3.5 xl:p-4 sm:px-5 lg:min-w-[240px] xl:min-w-[280px] 2xl:min-w-[300px] rounded-lg lg:rounded-none flex flex-col justify-center shadow-lg category-badge-diagonal"
            >
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-white block mb-0.5">
                {currentSlide.category.number}
              </span>
              <span className="font-condensed font-extrabold text-[18px] sm:text-[20px] xl:text-[22px] uppercase tracking-wide block leading-none mb-0.5 text-white">
                {currentSlide.category.title}
              </span>
              <span className="text-[11px] sm:text-[12px] text-white line-clamp-1">
                {currentSlide.category.description}
              </span>
            </div>

            {/* Right Three Category Cards (Pure White Cards with Black/Dark-Grey Text on Dark Strip) */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5 xl:gap-3">
              {currentSlide.category.cards.map((card, idx) => (
                <div
                  key={`${currentSlide.id}-card-${idx}`}
                  onClick={(e) => handleCtaClick(e, card.title)}
                  className="group relative cursor-pointer bg-white hover:bg-white rounded-lg p-2.5 sm:p-3 xl:p-3.5 px-3.5 sm:px-4 flex items-center justify-between transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-neutral-100"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleCtaClick(e, card.title);
                    }
                  }}
                >
                  <div className="pr-2.5 sm:pr-3">
                    <h3 className="text-[#111111] font-bold text-[13.5px] sm:text-[14px] xl:text-[15px] tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-[#555555] text-[11px] sm:text-[11.5px] xl:text-[12px] mt-0.5 leading-tight line-clamp-1">
                      {card.description}
                    </p>
                  </div>
                  {/* Red Arrow Icon inside Very Light Grey (#F1F2F4) Circle Container */}
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#F1F2F4] group-hover:bg-[#EAEBED] flex items-center justify-center transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#C10A0E] group-hover:translate-x-0.5 transform transition-transform" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
