import React from 'react';
import { Shield, Zap, Layers, Clock, Maximize, Building2 } from 'lucide-react';

const benefits = [
  {
    number: '01',
    title: 'Superior Corrosion Protection',
    description:
      'Zinc coating creates a protective barrier that helps prevent moisture and environmental elements from reaching the underlying steel.',
    icon: Shield,
  },
  {
    number: '02',
    title: 'Sacrificial Protection',
    description:
      'Zinc corrodes preferentially, helping protect exposed steel areas when minor coating damage occurs.',
    icon: Zap,
  },
  {
    number: '03',
    title: 'Long-Term Durability',
    description:
      'Metallurgically bonded zinc-iron alloy layers provide strong adhesion and resistance to mechanical damage.',
    icon: Layers,
  },
  {
    number: '04',
    title: 'Reduced Maintenance',
    description:
      'Properly specified galvanizing can reduce frequent corrosion-related maintenance and recoating requirements.',
    icon: Clock,
  },
  {
    number: '05',
    title: 'Comprehensive Coverage',
    description:
      'Hot-dip galvanizing can coat accessible edges, corners, recesses, and internal surfaces when components are properly designed.',
    icon: Maximize,
  },
  {
    number: '06',
    title: 'Industrial Versatility',
    description:
      'Galvanized steel is widely used in construction, infrastructure, power generation, transportation, and industrial applications.',
    icon: Building2,
  },
];

export default function WhyGalvanizingSection() {
  return (
    <section
      id="why-galvanizing"
      className="relative w-full bg-[#FAF0F0] text-[#0C0C0C] py-12 sm:py-16 lg:py-20 overflow-hidden select-none border-t border-red-100"
      aria-labelledby="why-galvanizing-heading"
    >
      {/* Subtle ambient light red radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-red-200/20 blur-[140px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10 flex flex-col gap-10 sm:gap-14 lg:gap-16">
        
        {/* ============================================================== */}
        {/* 1. TOP HERO SECTION: Text on Left + Factory Photo on Right    */}
        {/* ============================================================== */}
        <div>
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 shadow-xl shadow-red-950/5 border border-red-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading & Introduction */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* Eyebrow */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-6 h-[2px] bg-[#C10A0E]" />
                  <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.24em] uppercase text-[#C10A0E]">
                    STEEL CORROSION PROTECTION
                  </span>
                </div>

                {/* Main Heading */}
                <h2
                  id="why-galvanizing-heading"
                  className="text-[32px] sm:text-[42px] lg:text-[46px] xl:text-[52px] font-condensed font-extrabold uppercase leading-[1.02] tracking-tight text-[#0C0C0C] mb-3"
                >
                  WHY GALVANIZING IS IMPORTANT
                </h2>

                {/* Supporting Headline */}
                <p className="text-[15px] sm:text-[17px] font-bold text-[#C10A0E] tracking-tight leading-snug mb-4">
                  Protecting Steel. Preventing Corrosion. Extending Service Life.
                </p>

                {/* Introduction Paragraph */}
                <p className="text-[13.5px] sm:text-[14.5px] text-[#444444] leading-relaxed max-w-2xl font-normal">
                  Galvanizing is an effective method of protecting iron and steel from corrosion through a zinc coating. It helps improve durability, reduce maintenance requirements, and extend the service life of steel components across various industrial applications.
                </p>

                {/* Technical Highlights Bar */}
                <div className="flex flex-wrap items-center gap-3 mt-6 pt-5 border-t border-red-100/70">
                  <div className="px-3.5 py-1.5 rounded-full bg-[#FAF0F0] border border-red-200/80 flex items-center gap-2 text-[12px] font-semibold text-[#0C0C0C]">
                    <span className="w-2 h-2 rounded-full bg-[#C10A0E]" />
                    <span>Hot-Dip Immersion (~450°C)</span>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-[#FAF0F0] border border-red-200/80 flex items-center gap-2 text-[12px] font-semibold text-[#0C0C0C]">
                    <span className="w-2 h-2 rounded-full bg-[#C10A0E]" />
                    <span>Dual Barrier & Sacrificial Action</span>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-full bg-[#FAF0F0] border border-red-200/80 flex items-center gap-2 text-[12px] font-semibold text-[#0C0C0C]">
                    <span className="w-2 h-2 rounded-full bg-[#C10A0E]" />
                    <span>Metallurgical Zinc-Iron Bond</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Large Photorealistic Industrial Image */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF0F0] bg-neutral-900 group">
                  <img
                    src="/images/why-galvanizing/galvanizing-hero.webp"
                    alt="Hot-dip galvanizing bath with overhead crane lifting treated structural steel components"
                    className="w-full h-[280px] sm:h-[340px] lg:h-[390px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white">
                    <span className="text-[10px] font-bold text-[#C10A0E] uppercase tracking-wider block mb-0.5">
                      Hot-Dip Galvanizing Facility
                    </span>
                    <span className="text-[11.5px] sm:text-[12px] text-white/85 font-medium leading-tight block">
                      Steel components submerged in molten zinc bath for uniform alloy bonding.
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. SIX MAIN BENEFITS: Beautiful 3-Column Card Grid             */}
        {/* ============================================================== */}
        <div>
          {/* Subheading */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-5 h-[1.5px] bg-[#C10A0E]" />
              <span className="text-[11px] font-bold tracking-[0.24em] uppercase text-[#C10A0E]">
                CORE ADVANTAGES
              </span>
              <span className="w-5 h-[1.5px] bg-[#C10A0E]" />
            </div>

            <h3 className="text-[26px] sm:text-[32px] lg:text-[36px] font-condensed font-extrabold uppercase text-[#0C0C0C] tracking-tight leading-tight">
              Six Key Benefits of Galvanized Steel
            </h3>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {benefits.map((b) => {
              const IconComponent = b.icon;

              return (
                <div
                  key={b.number}
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-red-100 shadow-lg shadow-red-950/5 hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Top Row: Number Badge & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-10 h-10 rounded-xl bg-[#C10A0E] text-white font-extrabold text-[14px] flex items-center justify-center shadow-md shadow-red-600/25">
                        {b.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-[#C10A0E] group-hover:bg-[#C10A0E] group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Benefit Title */}
                    <h4 className="text-[17px] sm:text-[18px] font-bold text-[#0C0C0C] tracking-tight mb-2.5 group-hover:text-[#C10A0E] transition-colors duration-200">
                      {b.title}
                    </h4>

                    {/* Description */}
                    <p className="text-[12.5px] sm:text-[13px] text-[#555555] leading-relaxed">
                      {b.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="pt-4 mt-4 border-t border-red-50 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      Engineering Advantage
                    </span>
                    <span className="w-2 h-2 rounded-full bg-red-200 group-hover:bg-[#C10A0E] transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
