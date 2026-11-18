import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from './constants';

/**
 * Route-by-route SEO Metadata Matrix
 */
export const defaultSEO = {
  title: `${SITE_NAME} | Precision Steel Fabrication & Industrial Engineering`,
  description:
    'MF Industrial Solutions specializes in custom steel fabrication, MS puddle flanges, steel gratings, cable trays, solar mounting hardware, and partner hot-dip galvanizing.',
  canonical: SITE_URL,
  ogImage: DEFAULT_OG_IMAGE,
  keywords:
    'Steel Fabrication, Custom Steel Fabrication, MS Puddle Flanges, Steel Gratings, Cable Trays, Solar Mounting Hardware, Earthing Patti, Hot-Dip Galvanizing India',
};

export const seoRoutes = {
  home: {
    title: `${SITE_NAME} | Precision Steel Fabrication & Manufacturing`,
    description:
      'Industrial steel fabrication and manufacturing delivering custom components, puddle flanges, hand-made gratings, cable trays, and partner hot-dip galvanizing strictly to drawing.',
    canonical: `${SITE_URL}/`,
  },
  about: {
    title: `About Us | Engineering & Workshop Capabilities | ${SITE_NAME}`,
    description:
      'Learn about MF Industrial Solutions, our drawing-to-delivery fabrication methodology, strict dimensional tolerance control, and commitment to structural quality.',
    canonical: `${SITE_URL}/about`,
  },
  products: {
    title: `Industrial Steel Products Catalog | ${SITE_NAME}`,
    description:
      'Explore our manufactured steel products: MS puddle flanges, hand-made gratings, cable trays, solar mounting hardware, gusseted brackets, and earthing patti.',
    canonical: `${SITE_URL}/products`,
  },
  quality: {
    title: `Quality Commitment | ${SITE_NAME}`,
    description:
      'Explore the quality-focused approach of MF Industrial Solutions, with attention to industrial product requirements, specifications, material considerations, and customer expectations.',
    canonical: `${SITE_URL}/quality`,
  },
  whyGalvanizing: {
    title: `Why Galvanizing? | Corrosion Protection & Zinc Metallurgy | ${SITE_NAME}`,
    description:
      'Comprehensive engineering guide to hot-dip galvanizing: metallurgical zinc bonding, 5-stage process, ISO 1461 standards, comparative lifespan analysis, and industrial steel applications.',
    canonical: `${SITE_URL}/why-galvanizing`,
  },
  contact: {
    title: `Contact Us | Engineering Inquiries & RFQs | ${SITE_NAME}`,
    description:
      'Connect with the engineering team at MF Industrial Solutions. Submit CAD fabrication drawings (PDF/DWG/DXF) or discuss custom structural steel requirements.',
    canonical: `${SITE_URL}/contact`,
  },
  getQuote: {
    title: `Request a Quote (RFQ) | Commercial Fabrication Pricing | ${SITE_NAME}`,
    description:
      'Submit your technical drawings or structural bill of materials (BOM) for an immediate, structured engineering evaluation and commercial quotation.',
    canonical: `${SITE_URL}/get-a-quote`,
  },
  notFound: {
    title: `404 - Page Not Found | ${SITE_NAME}`,
    description: 'The requested specification page could not be found.',
    canonical: `${SITE_URL}/404`,
    noIndex: true,
  },
};

/**
 * Organization JSON-LD Schema Generator
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo/logo.png`,
    description: defaultSEO.description,
    email: 'info@mfindustrialsolutions.com',
    telephone: '+91-XXXXXXXXXX',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
  };
}

/**
 * BreadcrumbList JSON-LD Schema Generator
 */
export function generateBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}
