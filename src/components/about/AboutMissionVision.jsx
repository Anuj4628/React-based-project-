import React from 'react';
import { Target, Compass, Eye, TrendingUp, ShieldCheck } from 'lucide-react';

/**
 * Section 3: Our Mission & Our Vision ("OUR PURPOSE & DIRECTION")
 */
export default function AboutMissionVision() {
  return (
    <section
      aria-label="Our Mission and Vision - MF Industrial Solutions"
      className="relative w-full bg-[#FAF0F0] text-[#0C0C0C] py-16 sm:py-20 lg:py-24 border-b border-red-100 overflow-hidden select-none"
    >
      {/* Subtle ambient light red radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-red-200/30 blur-[140px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-red-200 shadow-sm mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#C10A0E]" />
            <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
              03 — PURPOSE &amp; DIRECTION
            </span>
          </div>

          <h2 className="text-[#0C0C0C] font-condensed font-extrabold uppercase leading-[1.0] tracking-tight text-[32px] sm:text-[42px] lg:text-[48px] mb-3">
            OUR PURPOSE &amp; DIRECTION
          </h2>

          <p className="text-[#4A5568] text-[15px] sm:text-[17px] font-medium max-w-2xl mx-auto leading-relaxed">
            The core principles guiding our commitment to quality, client relationships, and dependable industrial solutions.
          </p>
        </div>

        {/* 2 Equal-Height Balanced Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto">
          
          {/* CARD 1: OUR MISSION (Strong Brand Red Industrial Surface) */}
          <div className="relative rounded-3xl bg-[#BA0A0E] text-white p-8 sm:p-10 lg:p-12 shadow-xl shadow-red-950/20 border border-red-800/60 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
            {/* Subtle industrial pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none rounded-3xl"
              style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              {/* Mission Icon Badge */}
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-[#BA0A0E] transition-colors duration-300">
                <Compass className="w-7 h-7" />
              </div>

              {/* Card Label */}
              <span className="text-[12px] font-bold tracking-[0.22em] uppercase text-white/80 block mb-2">
                MISSION STATEMENT
              </span>

              {/* Heading */}
              <h3 className="text-[26px] sm:text-[32px] font-condensed font-extrabold uppercase tracking-tight text-white mb-4">
                Our Mission
              </h3>

              {/* Exact Content */}
              <p className="text-[16px] sm:text-[17px] leading-relaxed text-white/95 font-normal">
                "Our mission is to support industrial customers with dependable steel and galvanizing solutions by understanding their requirements, focusing on quality, and maintaining transparent and responsive business relationships."
              </p>
            </div>

            {/* Bottom Key Principle */}
            <div className="relative z-10 pt-6 mt-8 border-t border-white/15 flex items-center gap-2.5 text-[13px] font-semibold text-white/85">
              <ShieldCheck className="w-4 h-4 text-white shrink-0" />
              <span>Dedicated to dependable quality &amp; responsive service</span>
            </div>
          </div>

          {/* CARD 2: OUR VISION (Complementary White & Light-Red Surface) */}
          <div className="relative rounded-3xl bg-white text-[#0C0C0C] p-8 sm:p-10 lg:p-12 shadow-xl shadow-red-950/5 border border-red-100 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
            <div className="relative z-10">
              {/* Vision Icon Badge */}
              <div className="w-14 h-14 rounded-2xl bg-[#FAF0F0] border border-red-200 flex items-center justify-center text-[#C10A0E] mb-6 group-hover:bg-[#C10A0E] group-hover:text-white transition-colors duration-300">
                <TrendingUp className="w-7 h-7" />
              </div>

              {/* Card Label */}
              <span className="text-[12px] font-bold tracking-[0.22em] uppercase text-[#C10A0E] block mb-2">
                LONG-TERM OUTLOOK
              </span>

              {/* Heading */}
              <h3 className="text-[26px] sm:text-[32px] font-condensed font-extrabold uppercase tracking-tight text-[#0C0C0C] mb-4">
                Our Vision
              </h3>

              {/* Exact Content */}
              <p className="text-[16px] sm:text-[17px] leading-relaxed text-[#4A5568] font-normal">
                "Our vision is to build lasting trust in the industrial sector by continuously improving our approach to customer requirements, strengthening business relationships, and contributing to dependable industrial solutions."
              </p>
            </div>

            {/* Bottom Key Principle */}
            <div className="relative z-10 pt-6 mt-8 border-t border-slate-100 flex items-center gap-2.5 text-[13px] font-semibold text-slate-500">
              <Target className="w-4 h-4 text-[#C10A0E] shrink-0" />
              <span>Continuous improvement &amp; lasting client partnerships</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
