import React from 'react';
import { exportCountriesData } from '@/data/exportCountriesData';

export default function CountriesExportSection() {
  return (
    <section
      id="export-countries"
      className="relative w-full bg-[#BA0A0E] text-white py-14 sm:py-18 lg:py-22 overflow-hidden select-none border-t border-red-800/40"
      aria-label="Countries We Export To - MF Industrial Solutions"
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

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10">
        
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-5 sm:w-7 h-[1.5px] bg-white/75" />
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.24em] uppercase text-white">
              OUR GLOBAL REACH
            </span>
            <span className="w-5 sm:w-7 h-[1.5px] bg-white/75" />
          </div>

          {/* Large Bold Main Heading */}
          <h2 className="text-white font-condensed font-extrabold uppercase leading-[0.98] tracking-[-0.01em] text-[32px] sm:text-[40px] lg:text-[46px] xl:text-[50px] mb-2 sm:mb-3">
            COUNTRIES WE EXPORT TO
          </h2>

          {/* Supporting Headline */}
          <p className="text-white font-semibold text-[15px] sm:text-[17px] mb-2.5 tracking-wide">
            Connecting Industries. Delivering Steel Solutions Worldwide.
          </p>

          {/* Introduction Paragraph */}
          <p className="text-white/90 text-[12.5px] sm:text-[13.5px] leading-relaxed max-w-2xl mx-auto font-normal">
            MF Industrial Solutions aims to support industrial requirements through reliable galvanizing and steel protection solutions. Our international reach reflects our commitment to serving diverse markets with quality-focused products and solutions.
          </p>
        </div>

        {/* ============================================================== */}
        {/* 25 COUNTRY CARDS GRID (5 Columns x 5 Rows)                     */}
        {/* ============================================================== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-4.5">
          {exportCountriesData.map((country) => (
            <div
              key={country.code}
              className="group bg-white rounded-2xl p-3.5 sm:p-4 lg:p-4.5 flex flex-col items-center justify-center gap-2.5 text-center shadow-lg shadow-red-950/20 hover:shadow-2xl hover:shadow-red-950/35 border border-white/20 hover:border-white transition-all duration-300 hover:-translate-y-1 min-h-[95px] sm:min-h-[110px]"
            >
              {/* Authentic Flag Thumbnail */}
              <div className="w-9 h-6 sm:w-10 sm:h-7 rounded-sm overflow-hidden shadow-sm border border-neutral-200/80 shrink-0 flex items-center justify-center bg-neutral-100">
                <img
                  src={country.flag}
                  alt={`${country.name} Flag`}
                  className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Country Name */}
              <span className="text-[#0D1522] text-[12.5px] sm:text-[13.5px] font-bold tracking-tight leading-snug group-hover:text-[#C10A0E] transition-colors duration-200">
                {country.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
