import React from 'react';
import { Layers, Ruler, Sparkles, Compass, CheckCircle2 } from 'lucide-react';

const approachCards = [
  {
    number: '01',
    title: 'MATERIAL REQUIREMENTS',
    category: 'SPECIFICATION ALIGNMENT',
    icon: Layers,
    description:
      'Understanding the required material type and relevant specifications helps align products with their intended industrial applications.',
    highlights: [
      'Grade & specification identification',
      'Material traceability & documentation',
      'Suitability for fabrication and galvanizing',
    ],
  },
  {
    number: '02',
    title: 'DIMENSIONAL CONSIDERATIONS',
    category: 'MEASUREMENT ACCURACY',
    icon: Ruler,
    description:
      'Dimensions, thickness, diameter, and other relevant measurements are important considerations when evaluating industrial product requirements.',
    highlights: [
      'Accurate wall thickness & diameter checks',
      'Fabrication & hole alignment tolerances',
      'Verification against client engineering drawings',
    ],
  },
  {
    number: '03',
    title: 'SURFACE & FINISH',
    category: 'COATING INTEGRITY',
    icon: Sparkles,
    description:
      'Surface condition and finish are important product considerations, particularly where appearance, fabrication, or application requirements matter.',
    highlights: [
      'Uniform hot-dip galvanizing zinc coating',
      'Clean surface preparation & finish inspection',
      'Burr-free edges and smooth contact surfaces',
    ],
  },
  {
    number: '04',
    title: 'APPLICATION SUITABILITY',
    category: 'OPERATIONAL FIT',
    icon: Compass,
    description:
      'Understanding how a product will be used helps identify the relevant requirements and considerations for its intended application.',
    highlights: [
      'Evaluation of operating conditions & load factors',
      'Piping, structural, and structural fastening fit',
      'Long-term service life in harsh environments',
    ],
  },
];

/**
 * Section 3: Quality Control & Inspection Approach ("OUR QUALITY APPROACH")
 * Main Heading: Attention to Detail at Every Important Stage
 */
export default function QualityApproach() {
  return (
    <section
      aria-label="Quality Control & Inspection Approach - MF Industrial Solutions"
      className="relative w-full bg-[#FAF0F0] text-[#0C0C0C] py-16 sm:py-20 lg:py-24 border-b border-red-100 overflow-hidden select-none"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[550px] bg-red-200/30 blur-[150px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-red-200 shadow-sm mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#C10A0E]" />
            <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
              03 — OUR QUALITY APPROACH
            </span>
          </div>

          <h2 className="text-[#0C0C0C] font-condensed font-extrabold uppercase leading-[1.0] tracking-tight text-[32px] sm:text-[42px] lg:text-[48px] mb-4">
            ATTENTION TO DETAIL AT <br className="hidden sm:inline" />
            <span className="text-[#C10A0E]">EVERY IMPORTANT STAGE</span>
          </h2>

          <p className="text-[#4A5568] text-[15.5px] sm:text-[17px] leading-relaxed max-w-2xl mx-auto font-normal">
            Understanding product specifications and application requirements is an important part of supporting industrial customers. Our quality-focused approach emphasizes attention to the details that matter to each requirement.
          </p>
        </div>

        {/* 4 Professional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 xl:gap-8 items-stretch">
          {approachCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="group relative rounded-3xl bg-white border-2 border-red-100/90 p-6 sm:p-7 shadow-lg shadow-red-950/5 hover:shadow-xl hover:border-red-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top: Card Header & Number */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF0F0] border border-red-200 flex items-center justify-center text-[#C10A0E] group-hover:bg-[#C10A0E] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-condensed font-extrabold text-[28px] text-red-200 group-hover:text-[#C10A0E] transition-colors duration-300">
                      {card.number}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <span className="inline-block text-[10.5px] font-bold uppercase tracking-wider text-[#C10A0E] bg-[#FAF0F0] px-2.5 py-1 rounded-md mb-3 border border-red-100">
                    {card.category}
                  </span>

                  {/* Card Title */}
                  <h3 className="font-condensed font-extrabold uppercase text-[20px] sm:text-[22px] text-[#0C0C0C] tracking-tight leading-snug mb-3">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[14px] sm:text-[14.5px] text-[#4A5568] leading-relaxed font-normal mb-5">
                    {card.description}
                  </p>
                </div>

                {/* Bottom: Highlight Checklist */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {card.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-[12.5px] text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C10A0E] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
