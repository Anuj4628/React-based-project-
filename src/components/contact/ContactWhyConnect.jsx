import React from 'react';
import { Layers, Disc, ShieldCheck, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const whyConnectCards = [
  {
    number: '01',
    title: 'CUSTOM FABRICATION SOLUTIONS',
    category: 'TAILORED MANUFACTURING',
    icon: Layers,
    description:
      'Fabrication support for project-specific steel components and industrial requirements.',
    points: [
      'Built to engineering drawings & tolerances',
      'Structural steel frames, brackets & puddle flanges',
      'Flexible batch sizes for contractors & EPCs',
    ],
  },
  {
    number: '02',
    title: 'PRECISION CUTTING & DRILLING',
    category: 'PLATE PROCESSING',
    icon: Disc,
    description:
      'Accurate plate cutting and drilling solutions designed around your project specifications.',
    points: [
      'Precise hole diameter & pitch alignment',
      'Clean edge finish and burr-free deburring',
      'Consistent plate thickness verification',
    ],
  },
  {
    number: '03',
    title: 'GALVANIZING COORDINATION',
    category: 'CORROSION PROTECTION',
    icon: ShieldCheck,
    description:
      'Hot-dip galvanizing coordination through our approved partner network to support corrosion protection requirements.',
    points: [
      'Executed via approved IS/ISO certified partner plants',
      'Rigorous zinc coating thickness & adhesion checks',
      'Long-term rust defense for outdoor structures',
    ],
  },
  {
    number: '04',
    title: 'PROJECT-FOCUSED SUPPORT',
    category: 'CLIENT COLLABORATION',
    icon: Users,
    description:
      'Clear communication and coordinated assistance from initial enquiry through project discussions.',
    points: [
      'Direct technical discussions on drawings',
      'Proactive updates and status milestones',
      'Committed long-term industrial partnerships',
    ],
  },
];

/**
 * Page 4: Why Connect with MF Industrial Solutions?
 * Heading: Built Around Your Industrial Requirements
 * Concluding Strip: Have a Project in Mind? -> TALK TO OUR TEAM
 */
export default function ContactWhyConnect() {
  const scrollToForm = () => {
    const el = document.getElementById('enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      aria-label="Why Connect with MF Industrial Solutions"
      className="relative w-full bg-white text-[#0C0C0C] py-16 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden select-none"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F0] border border-red-200 shadow-sm mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#C10A0E]" />
            <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
              04 — WHY CONNECT WITH US
            </span>
          </div>

          <h2 className="text-[#0C0C0C] font-condensed font-extrabold uppercase leading-[1.0] tracking-tight text-[32px] sm:text-[42px] lg:text-[48px] mb-4">
            BUILT AROUND YOUR <br className="hidden sm:inline" />
            <span className="text-[#C10A0E]">INDUSTRIAL REQUIREMENTS</span>
          </h2>

          <p className="text-[#4A5568] text-[15.5px] sm:text-[17px] leading-relaxed max-w-2xl mx-auto font-normal">
            At MF Industrial Solutions, we understand that every project has different technical and manufacturing requirements. We focus on practical fabrication solutions, precision-driven processes and dependable coordination to support your project needs.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 xl:gap-8 items-stretch mb-12 sm:mb-16">
          {whyConnectCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="group relative rounded-3xl bg-[#FAF0F0]/50 hover:bg-[#FAF0F0] border-2 border-red-100 hover:border-red-300 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Card Header & Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-red-200 flex items-center justify-center text-[#C10A0E] group-hover:bg-[#C10A0E] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-condensed font-extrabold text-[28px] text-red-200 group-hover:text-[#C10A0E] transition-colors duration-300">
                      {card.number}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#C10A0E] bg-white px-2.5 py-1 rounded-md mb-3 border border-red-200 shadow-xs">
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
                <div className="pt-4 border-t border-red-200/60 space-y-2">
                  {card.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-[12.5px] text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C10A0E] shrink-0 mt-0.5" />
                      <span className="leading-snug">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Concluding Strip: Have a Project in Mind? */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#111625] to-[#182032] text-white p-7 sm:p-9 lg:p-10 border border-slate-800 shadow-xl overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="relative z-10 text-center sm:text-left max-w-2xl">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#C10A0E] bg-red-950/60 px-3 py-1 rounded-full border border-red-900/60 mb-2">
              START A PROJECT
            </span>
            <h3 className="font-condensed font-extrabold uppercase text-[24px] sm:text-[30px] lg:text-[34px] tracking-tight text-white mb-1.5">
              HAVE A PROJECT IN MIND?
            </h3>
            <p className="text-[14.5px] sm:text-[15.5px] text-slate-300">
              Let's discuss your requirements and find the right fabrication solution.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#C10A0E] text-white font-bold text-[14px] uppercase tracking-wider shadow-lg shadow-red-950/40 hover:bg-[#A5080C] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C10A0E]"
            >
              <span>TALK TO OUR TEAM</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
