import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

// Route SEO metadata for static prerendered HTML generation
const routes = [
  {
    path: '/',
    title: 'MF Industrial Solutions | Precision Steel Fabrication & Industrial Engineering',
    description:
      'MF Industrial Solutions delivers custom steel fabrication, MS puddle flanges, steel gratings, cable trays, solar mounting hardware, and partner hot-dip galvanizing for industrial contractors across India.',
    canonical: 'https://mfindustrialsolutions.com/',
  },
  {
    path: '/about',
    title: 'About Us | Engineering & Workshop Capabilities | MF Industrial Solutions',
    description:
      'Learn about MF Industrial Solutions, our drawing-to-delivery fabrication methodology, strict dimensional tolerance control, and commitment to structural quality.',
    canonical: 'https://mfindustrialsolutions.com/about',
  },
  {
    path: '/products',
    title: 'Industrial Steel Products Catalog | MF Industrial Solutions',
    description:
      'Explore our manufactured steel products: MS puddle flanges, hand-made gratings, cable trays, solar mounting hardware, gusseted brackets, and earthing patti.',
    canonical: 'https://mfindustrialsolutions.com/products',
  },
  {
    path: '/quality',
    title: 'Quality Commitment | MF Industrial Solutions',
    description:
      'Explore the quality-focused approach of MF Industrial Solutions, with attention to industrial product requirements, specifications, material considerations, and customer expectations.',
    canonical: 'https://mfindustrialsolutions.com/quality',
  },
  {
    path: '/why-galvanizing',
    title: 'Why Galvanizing? | Corrosion Protection & Zinc Metallurgy | MF Industrial Solutions',
    description:
      'Comprehensive engineering guide to hot-dip galvanizing: metallurgical zinc bonding, 5-stage process, ISO 1461 standards, comparative lifespan analysis, and industrial steel applications.',
    canonical: 'https://mfindustrialsolutions.com/why-galvanizing',
  },
  {
    path: '/contact',
    title: 'Contact Us | Engineering Inquiries & RFQs | MF Industrial Solutions',
    description:
      'Connect with the engineering team at MF Industrial Solutions. Submit CAD fabrication drawings (PDF/DWG/DXF) or discuss custom structural steel requirements.',
    canonical: 'https://mfindustrialsolutions.com/contact',
  },
  {
    path: '/get-a-quote',
    title: 'Request a Quote (RFQ) | Commercial Fabrication Pricing | MF Industrial Solutions',
    description:
      'Submit your technical drawings or structural bill of materials (BOM) for an immediate, structured engineering evaluation and commercial quotation.',
    canonical: 'https://mfindustrialsolutions.com/get-a-quote',
  },
  {
    path: '/products/angle',
    title: 'Galvanized Steel Angle | MF Industrial Solutions',
    description: 'Industrial hot-dip galvanized steel angle profiles. Engineered for structural framework, equipment skids, and infrastructure support.',
    canonical: 'https://mfindustrialsolutions.com/products/angle',
  },
  {
    path: '/products/pipe',
    title: 'Galvanized Steel Pipes & Hollow Sections | MF Industrial Solutions',
    description: 'High-strength hot-dip galvanized rectangular and circular steel pipes. Ideal for structural framing and industrial conveyance.',
    canonical: 'https://mfindustrialsolutions.com/products/pipe',
  },
  {
    path: '/products/hub-plate',
    title: 'Industrial Circular Steel Hub Plates | MF Industrial Solutions',
    description: 'Custom profiled and CNC-drilled galvanized circular steel hub plates. Designed for heavy machinery, rotating equipment, and structural mounting.',
    canonical: 'https://mfindustrialsolutions.com/products/hub-plate',
  },
  {
    path: '/products/grating',
    title: 'Galvanized Steel Gratings & Walkway Panels | MF Industrial Solutions',
    description: 'Heavy-duty welded galvanized steel bar gratings. Engineered for platform catwalks, trench covers, and maintenance flooring.',
    canonical: 'https://mfindustrialsolutions.com/products/grating',
  },
  {
    path: '/products/stud-bolt',
    title: 'Galvanized Stud Bolts & Fasteners | MF Industrial Solutions',
    description: 'High-tensile hot-dip galvanized stud bolts for industrial pipe flanges, pressure vessels, and structural connections.',
    canonical: 'https://mfindustrialsolutions.com/products/stud-bolt',
  },
  {
    path: '/products/tee',
    title: 'Galvanized Steel Pipe Tees | MF Industrial Solutions',
    description: 'Industrial hot-dip galvanized pipe fitting tees for equal and reducing 90-degree branch connections.',
    canonical: 'https://mfindustrialsolutions.com/products/tee',
  },
  {
    path: '/products/bracket',
    title: 'Galvanized Steel Mounting Brackets | MF Industrial Solutions',
    description: 'Custom fabricated galvanized structural steel mounting brackets for solar racking, pipe supports, and industrial equipment framework.',
    canonical: 'https://mfindustrialsolutions.com/products/bracket',
  },
  {
    path: '/products/elbow',
    title: 'Galvanized Pipe Elbows (90° & 45°) | MF Industrial Solutions',
    description: 'Precision-formed hot-dip galvanized 90-degree and 45-degree pipe elbows. Engineered for fluid networks and industrial utility piping.',
    canonical: 'https://mfindustrialsolutions.com/products/elbow',
  },
  {
    path: '/products/flanges',
    title: 'Galvanized Steel Pipe Flanges | MF Industrial Solutions',
    description: 'Precision-machined hot-dip galvanized pipe flanges (Weld Neck, Slip-On, Blind, Puddle). Built for high-pressure industrial piping.',
    canonical: 'https://mfindustrialsolutions.com/products/flanges',
  },
  {
    path: '/products/nut-bolt',
    title: 'Galvanized Structural Nuts & Bolts | MF Industrial Solutions',
    description: 'Heavy-duty hot-dip galvanized hexagonal nuts and bolts. Engineered for structural steel erection and machinery fastening.',
    canonical: 'https://mfindustrialsolutions.com/products/nut-bolt',
  },
  {
    path: '/products/reducer',
    title: 'Galvanized Pipe Reducers (Concentric & Eccentric) | MF Industrial Solutions',
    description: 'Industrial hot-dip galvanized concentric and eccentric pipe reducers. Engineered for smooth diameter transitions in industrial piping.',
    canonical: 'https://mfindustrialsolutions.com/products/reducer',
  },
  {
    path: '/products/steel-frame',
    title: 'Custom Fabricated Galvanized Steel Frames | MF Industrial Solutions',
    description: 'Custom welded and hot-dip galvanized structural steel frames, machinery skids, and equipment platforms. Engineered to client drawings.',
    canonical: 'https://mfindustrialsolutions.com/products/steel-frame',
  },
];

function prerender() {
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('Error: dist/index.html not found. Run "vite build" first.');
    process.exit(1);
  }

  const rawTemplate = fs.readFileSync(templatePath, 'utf-8');

  console.log('\n[Prerender] Generating static SEO HTML files for routes...');

  for (const route of routes) {
    let html = rawTemplate;

    // Replace title
    html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

    // Replace meta description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${route.description}" />`
    );

    // Replace canonical URL
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${route.canonical}" />`
    );

    // Replace Open Graph title, description, url
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${route.description}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${route.canonical}" />`
    );

    // Determine target directory and file
    let targetPath;
    if (route.path === '/') {
      targetPath = templatePath;
    } else {
      const routeDir = path.join(distDir, route.path.replace(/^\//, ''));
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      targetPath = path.join(routeDir, 'index.html');
    }

    fs.writeFileSync(targetPath, html, 'utf-8');
    console.log(` ✓ Prerendered ${route.path} -> ${path.relative(distDir, targetPath)}`);
  }

  // Create a 404.html fallback for SPA hosting on GitHub Pages / static servers
  const fallback404 = path.join(distDir, '404.html');
  fs.copyFileSync(templatePath, fallback404);
  console.log(' ✓ Created 404.html fallback for SPA hosts');

  // Create _redirects for Netlify / Cloudflare Pages
  const redirectsPath = path.join(distDir, '_redirects');
  fs.writeFileSync(redirectsPath, '/*    /index.html   200\n', 'utf-8');
  console.log(' ✓ Created _redirects for clean URL rewrites');

  console.log('[Prerender] All static HTML files generated successfully!\n');
}

prerender();
