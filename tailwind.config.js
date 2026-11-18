/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Authentic Brand Palette derived from official MetalForge Logo
        brand: {
          forge: {
            DEFAULT: '#C10A0E', // Official Forge Red
            hover: '#A5080C',
            dark: '#820609',
            light: '#DC2626',
            subtle: '#FEF2F2',
            border: '#FEE2E2',
          },
          carbon: {
            DEFAULT: '#0C0C0C', // Official Carbon Black
            dark: '#050505',
            charcoal: '#171717',
            slate: '#262626',
            muted: '#525252',
          },
          surface: {
            DEFAULT: '#F9FAFB',
            subtle: '#F3F4F6',
            border: '#E5E7EB',
          },
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        condensed: [
          '"Barlow Condensed"',
          'Oswald',
          '"Arial Narrow"',
          '"Franklin Gothic Medium"',
          'Impact',
          'sans-serif',
        ],
      },
      boxShadow: {
        industrial: '0 2px 8px -1px rgba(12, 12, 12, 0.08), 0 1px 3px -1px rgba(12, 12, 12, 0.04)',
        'industrial-lg': '0 10px 25px -3px rgba(12, 12, 12, 0.12), 0 4px 6px -2px rgba(12, 12, 12, 0.05)',
      },
    },
  },
  plugins: [],
};
