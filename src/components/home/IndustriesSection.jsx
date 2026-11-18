import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { industriesData } from '@/data/industriesData';

export default function IndustriesSection() {
  // Duplicate for a robust, seamless, true infinite right-to-left loop
  const displayList = [...industriesData, ...industriesData];

  return (
    <section
      id="industries"
      className="relative w-full bg-[#BA0A0E] text-white py-12 sm:py-16 lg:py-20 overflow-hidden select-none"
      aria-label="Industries We Serve - MF Industrial Solutions"
    >
      {/* Subtle industrial grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* ================================================================ */}
      {/* SECTION HEADER                                                   */}
      {/* ================================================================ */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-12 z-10">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 mb-2">
          <span className="w-5 sm:w-7 h-[1.5px] bg-white/75" />
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.24em] uppercase text-white/85">
            INDUSTRIAL SECTORS
          </span>
          <span className="w-5 sm:w-7 h-[1.5px] bg-white/75" />
        </div>

        {/* Large Main Heading */}
        <h2 className="text-white font-condensed font-extrabold uppercase leading-[0.98] tracking-[-0.01em] text-[30px] sm:text-[38px] lg:text-[44px] xl:text-[48px] mb-2 sm:mb-3">
          INDUSTRIES WE SERVE
        </h2>

        {/* Supporting Headline */}
        <p className="text-white font-semibold text-[14px] sm:text-[16px] mb-2 tracking-wide">
          Supporting Industries. Protecting Steel. Building for the Future.
        </p>

        {/* Introduction */}
        <p className="text-white/90 text-[12.5px] sm:text-[13.5px] leading-relaxed max-w-2xl mx-auto font-normal">
          MF Industrial Solutions supports diverse industrial sectors with galvanizing and steel protection solutions designed to improve corrosion resistance, durability, and long-term performance across demanding applications.
        </p>
      </div>

      {/* ================================================================ */}
      {/* CONTINUOUS RIGHT-TO-LEFT INFINITE SLIDER                         */}
      {/* ================================================================ */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Infinite Slider Track */}
        <div className="animate-marquee-left flex gap-4 sm:gap-5 lg:gap-6 pl-4">
          
          {/* TRACK SET 1 */}
          <div className="flex gap-4 sm:gap-5 lg:gap-6 shrink-0">
            {displayList.map((item, idx) => (
              <IndustryCard key={`set1-${item.id}-${idx}`} item={item} />
            ))}
          </div>

          {/* TRACK SET 2 (Identical Clone for Seamless Infinite Loop) */}
          <div className="flex gap-4 sm:gap-5 lg:gap-6 shrink-0" aria-hidden="true">
            {displayList.map((item, idx) => (
              <IndustryCard key={`set2-${item.id}-${idx}`} item={item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/**
 * Single Industry Card matching the reference design layout
 */
function IndustryCard({ item }) {
  return (
    <div
      className="group relative w-[280px] sm:w-[310px] md:w-[330px] lg:w-[345px] h-[390px] sm:h-[420px] lg:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shrink-0 border border-white/20 hover:border-white/50 shadow-xl transition-all duration-300 select-none bg-neutral-900"
    >
      {/* Full-bleed background image */}
      <img
        src={item.image}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />

      {/* Top subtle dark gradient overlay for badge legibility */}
      <div
        className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/85 via-black/45 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Bottom deep dark gradient overlay for text contrast */}
      <div
        className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black/95 via-black/80 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Pill Badge matching reference (01 / SECTOR SPEC) */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10.5px] font-bold text-white tracking-wider flex items-center gap-1.5 shadow-md">
        <span className="text-[#C10A0E] font-extrabold">{item.sectorCode}</span>
        <span className="text-white/40 font-normal">/</span>
        <span className="text-white/90">SECTOR SPEC</span>
      </div>

      {/* Bottom Content Panel */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 flex flex-col justify-end">
        {/* Industry Title & Arrow Button */}
        <div className="flex items-center justify-between gap-3 mb-2">
          <h3 className="text-[17px] sm:text-[19px] font-bold text-white tracking-tight leading-snug group-hover:text-red-300 transition-colors duration-200">
            {item.name}
          </h3>
          <div
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm flex items-center justify-center text-white shrink-0 group-hover:bg-[#C10A0E] group-hover:border-[#C10A0E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
            aria-hidden="true"
          >
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Industry Galvanizing Description */}
        <p className="text-white/80 text-[11.5px] sm:text-[12px] leading-relaxed line-clamp-3 font-normal">
          {item.description}
        </p>
      </div>
    </div>
  );
}
