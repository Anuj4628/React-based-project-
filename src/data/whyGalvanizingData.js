/**
 * Centralized Data for "Why Galvanizing" Page
 * Researched from AGA, ISO 1461, and ASTM Standards
 */

export const whyGalvanizingData = {
  hero: {
    eyebrow: 'STEEL CORROSION PROTECTION',
    title: 'WHY GALVANIZING?',
    headline: 'Long-Lasting Protection. Stronger Steel. Better Performance.',
    introduction:
      'Galvanizing is a proven steel protection process that applies a zinc coating to help prevent corrosion and extend the service life of steel products. It plays an important role in protecting industrial infrastructure, structural steel, and fabricated components against demanding environmental conditions.',
    image: '/images/why-galvanizing/galvanizing-hero.webp',
    imageAlt: 'Hot-dip galvanizing bath with crane lifting treated structural steel components',
  },

  whatIsGalvanizing: {
    eyebrow: 'CORROSION SCIENCE & METALLURGY',
    heading: 'What Is Galvanizing?',
    lead:
      'Galvanizing is the process of protecting iron and steel from corrosion by applying a layer of zinc to the surface. In hot-dip galvanizing, properly prepared steel is immersed in molten zinc, forming metallurgically bonded zinc-iron alloy layers with an outer zinc layer. This coating provides a protective barrier and sacrificial protection against corrosion.',
    bulletPoints: [
      {
        title: 'Metallurgical Bond',
        desc: 'Forms zinc-iron alloy layers chemically fused to the steel base, creating exceptional impact and scratch resistance.',
      },
      {
        title: 'Dual Protection Mechanism',
        desc: 'Provides both an impermeable physical barrier and cathodic sacrificial protection when mechanical surface damage occurs.',
      },
      {
        title: 'Self-Healing Zinc Patina',
        desc: 'Zinc reacts with atmospheric oxygen, moisture, and carbon dioxide to form an insoluble zinc carbonate protective layer.',
      },
    ],
    image: '/images/why-galvanizing/what-is-galvanizing.webp',
    imageAlt: 'Precision hot-dip galvanized steel components with crystalline spangle surface',
  },

  processStages: [
    {
      step: '01',
      name: 'Degreasing',
      tag: 'Chemical Cleaning',
      temp: '60°C – 80°C',
      description:
        'Removal of oil, grease, cutting lubricants, drawing compounds, and surface contaminants using a heated alkaline or acidic cleaning bath.',
    },
    {
      step: '02',
      name: 'Pickling',
      tag: 'Oxide Removal',
      temp: 'Ambient',
      description:
        'Removal of mill scale and rust from the steel substrate using a controlled dilute hydrochloric or sulfuric acid solution, producing chemically clean steel.',
    },
    {
      step: '03',
      name: 'Fluxing',
      tag: 'Surface Activation',
      temp: '65°C – 70°C',
      description:
        'Preparation of the cleaned steel in a zinc ammonium chloride solution to dissolve remaining surface oxides and prevent oxidation prior to immersion.',
    },
    {
      step: '04',
      name: 'Hot-Dip Galvanizing',
      tag: 'Zinc Kettle Immersion',
      temp: '~450°C (840°F)',
      description:
        'Full immersion of prepared steel into a bath of pure molten zinc maintained at ~450°C, triggering the metallurgical diffusion reaction that forms alloy layers.',
    },
    {
      step: '05',
      name: 'Cooling & Inspection',
      tag: 'Quality Verification',
      temp: 'Post-Treatment',
      description:
        'Controlled cooling (quench or ambient air) followed by thorough examination of coating appearance, continuity, and magnetic dry film thickness verification.',
    },
  ],

  benefits: [
    {
      id: 'corrosion-resistance',
      title: 'Corrosion Resistance',
      description:
        'Zinc coating provides a durable, impermeable physical barrier against atmospheric moisture, aggressive chemicals, and environmental exposure.',
      icon: 'Shield',
    },
    {
      id: 'sacrificial-protection',
      title: 'Sacrificial Protection',
      description:
        'Zinc is electrochemically more active than iron. In the presence of electrolytes, zinc preferentially corrodes to protect exposed steel if scratched or cut.',
      icon: 'Zap',
    },
    {
      id: 'durable-coating',
      title: 'Durable Coating',
      description:
        'Metallurgically bonded zinc-iron alloy layers possess hardness levels exceeding that of the underlying base steel, resisting transit and handling damage.',
      icon: 'Layers',
    },
    {
      id: 'low-maintenance',
      title: 'Low Maintenance',
      description:
        'A properly specified galvanized coating drastically reduces the frequency and high cost of ongoing maintenance, repainting, and structural downtime.',
      icon: 'CheckCircle',
    },
    {
      id: 'long-service-life',
      title: 'Long Service Life',
      description:
        'Galvanizing can extend service life for 50+ years in rural and suburban environments, and 20 to 25+ years in harsh industrial and marine locations.',
      icon: 'Clock',
    },
    {
      id: 'comprehensive-coverage',
      title: 'Comprehensive Coverage',
      description:
        'Because steel is fully immersed in liquid zinc, all internal cavities, hollow sections, corners, edges, and recessed areas receive uniform protection.',
      icon: 'Maximize',
    },
  ],

  comparisonTable: {
    headers: ['Characteristic', 'Hot-Dip Galvanizing', 'Standard Paint Coating', 'Zinc-Rich Paint', 'Electrogalvanizing'],
    rows: [
      {
        aspect: 'Bonding Mechanism',
        galv: 'Metallurgical alloy bond (fused to steel)',
        paint: 'Mechanical adhesion only',
        zincPaint: 'Mechanical / binder adhesion',
        electro: 'Electroplated superficial bond',
      },
      {
        aspect: 'Corrosion Mechanism',
        galv: 'Dual: Impermeable barrier + Cathodic sacrificial',
        paint: 'Barrier only (corrosion spreads under film)',
        zincPaint: 'Barrier + Limited sacrificial protection',
        electro: 'Barrier + Thin sacrificial protection',
      },
      {
        aspect: 'Typical Thickness',
        galv: '65 µm to 120+ µm (standard specs)',
        paint: '30 µm to 80 µm per coat',
        zincPaint: '50 µm to 75 µm dry film',
        electro: '5 µm to 25 µm (thin decorative)',
      },
      {
        aspect: 'Abrasion & Impact Resistance',
        galv: 'Extremely high (alloy layers harder than steel)',
        paint: 'Low (scratches easily during transit)',
        zincPaint: 'Moderate (sensitive to gouging)',
        electro: 'Low to moderate (easily worn off)',
      },
      {
        aspect: 'Internal & Edge Coverage',
        galv: 'Complete (liquid flows into tubes & corners)',
        paint: 'Pulls thin at sharp edges; no internal reach',
        zincPaint: 'Difficult at internal recesses',
        electro: 'Subject to Faraday cage shield effects',
      },
      {
        aspect: 'Typical Applications',
        galv: 'Structural steel, piping, infrastructure, frames',
        paint: 'Aesthetic architectural finishes, interiors',
        zincPaint: 'Field touch-ups and localized repairs',
        electro: 'Small indoor hardware, precision fasteners',
      },
    ],
  },

  technicalFactors: [
    {
      title: 'Steel Chemical Composition',
      desc: 'Silicon and phosphorus concentrations significantly influence zinc-iron reaction kinetics (Sandelin effect), determining coating thickness and spangle appearance.',
    },
    {
      title: 'Surface Preparation & Profile',
      desc: 'Thorough degreasing, acid pickling, and proper fluxing ensure steel surfaces are 100% free of scale, rust, and oils before zinc kettle immersion.',
    },
    {
      title: 'Coating Thickness Specification',
      desc: 'Governed by the steel section thickness according to ISO 1461 / ASTM A123, ensuring sufficient zinc mass per square meter for expected service life.',
    },
    {
      title: 'Atmospheric Environmental Exposure',
      desc: 'Corrosivity classifications from C1 (very low) to CX (extreme marine/industrial per ISO 9223) dictate annual zinc consumption rates.',
    },
    {
      title: 'Component Design & Venting',
      desc: 'Proper vent and drain hole placement enables molten zinc to flow freely into and out of hollow sections, ensuring safety and complete internal coverage.',
    },
    {
      title: 'Handling & Proper Storage',
      desc: 'Well-ventilated dry storage prevents condensation and wet storage stain (white rust), allowing the natural zinc carbonate patina to develop properly.',
    },
  ],

  standards: [
    {
      code: 'ISO 1461',
      title: 'Hot dip galvanized coatings on fabricated iron and steel articles',
      description: 'International benchmark specifying coating thickness, appearance, sampling, and test methods for fabricated steel.',
    },
    {
      code: 'ASTM A123 / A123M',
      title: 'Zinc (Hot-Dip Galvanized) Coatings on Iron and Steel Products',
      description: 'Standard specification for structural shapes, plates, bars, strip, and fabricated tubing assemblies.',
    },
    {
      code: 'ASTM A153 / A153M',
      title: 'Zinc Coating (Hot-Dip) on Iron and Steel Hardware',
      description: 'Standard specification covering hardware items such as castings, fasteners, stampings, and threaded rod fittings.',
    },
  ],

  faqs: [
    {
      question: 'What is hot-dip galvanizing?',
      answer:
        'Hot-dip galvanizing is an industrial process in which thoroughly cleaned iron or steel is immersed in a bath of molten zinc at approximately 450°C (840°F). The metallurgical reaction between zinc and iron creates durable, alloyed layers that permanently protect the steel from corrosion.',
    },
    {
      question: 'How does zinc protect steel from corrosion?',
      answer:
        'Zinc protects steel through two complementary mechanisms: first, as an impermeable barrier sealing the steel from moisture and oxygen; and second, through cathodic (sacrificial) protection, where zinc electrochemically corrodes before the underlying iron even if small surface scratches occur.',
    },
    {
      question: 'How long does galvanized steel last?',
      answer:
        'Service life depends on the environmental corrosivity category (ISO 9223). In typical rural or suburban atmospheric conditions, galvanized steel frequently provides maintenance-free durability of 50 to 75+ years. In heavy coastal or industrial settings, service lives typically range from 20 to 30+ years before first maintenance.',
    },
    {
      question: 'Is galvanizing suitable for outdoor applications?',
      answer:
        'Yes. Galvanizing is one of the premier protection systems for exterior steelwork, including bridges, transmission towers, highway guardrails, solar mounting frames, and marine infrastructure exposed to rain, snow, UV rays, and fluctuating temperatures.',
    },
    {
      question: 'What is the difference between hot-dip galvanizing and electrogalvanizing?',
      answer:
        'Hot-dip galvanizing immerses steel in molten zinc, producing thick (65–120+ microns) metallurgically fused alloy coatings ideal for heavy outdoor and industrial use. Electrogalvanizing applies zinc electrolytically, producing a thin (5–25 microns), smooth finish best suited for indoor appliances and small components.',
    },
    {
      question: 'Can galvanized steel be painted?',
      answer:
        'Yes. Combining hot-dip galvanizing with a paint topcoat is known as a "Duplex System". This provides customized aesthetic coloration and can multiply the overall corrosion protection lifespan by 1.5 to 2.5 times that of either system alone.',
    },
    {
      question: 'How is galvanized coating thickness measured?',
      answer:
        'Coating thickness is measured non-destructively using magnetic or eddy-current dry film thickness (DFT) gauges in accordance with ISO 2178 or ASTM E376, measuring multiple points across representative test areas to determine average thickness in micrometers (µm).',
    },
    {
      question: 'Which factors affect galvanized coating life?',
      answer:
        'Key factors include the initial coating thickness, atmospheric sulfur dioxide and chloride concentrations, annual time of wetness, ambient humidity, temperature cycles, and direct contact with acidic or strongly alkaline soil or water.',
    },
  ],
};
