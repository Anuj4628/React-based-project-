import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, FileText, ChevronDown } from 'lucide-react';
import { productsCatalogue } from '@/data/productsCatalogue';

const navItems = [
  { name: 'Home', id: 'home', path: '/' },
  { name: 'About Us', id: 'about', path: '/about' },
  { name: 'Products', id: 'products', path: '/products' },
  { name: 'Quality', id: 'quality', path: '/quality' },
  { name: 'Contact', id: 'contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [mobileProductExpanded, setMobileProductExpanded] = useState(false);
  const headerRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  const handleProductMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setProductDropdownOpen(true);
  };

  const handleProductMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProductDropdownOpen(false);
    }, 180);
  };

  // Determine active item based on current route path
  const getActiveItem = () => {
    const currentPath = location.pathname;
    if (currentPath === '/about') return 'About Us';
    if (currentPath.startsWith('/products')) return 'Products';
    if (currentPath === '/quality') return 'Quality';
    if (currentPath === '/contact') return 'Contact';
    if (currentPath === '/get-a-quote') return 'Get a Quote';
    return 'Home';
  };

  const activeItem = getActiveItem();

  // Measure and synchronize navbar height to CSS custom property
  useEffect(() => {
    const updateNavHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          '--navbar-height',
          `${headerRef.current.offsetHeight}px`
        );
      }
    };

    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, [isScrolled]);

  // Monitor scroll for elevation and subtle compact sticky transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F4F5F7]/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(12,12,12,0.07)] border-b border-[#D1D5DB] py-2.5 sm:py-3'
            : 'bg-[#F4F5F7] border-b border-[#E2E8F0] py-4 sm:py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between">
            {/* 1. Large Sharp Official Company Logo */}
            <Link
              to="/"
              className="group relative flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C10A0E] rounded-lg transition-transform"
              aria-label="MetalForge MF Industrial Solutions Home"
            >
              {/* Desktop Logo: 220–240px wide, maintaining exact aspect ratio, sharp & transparent */}
              <div
                className={`hidden sm:flex items-center transition-all duration-300 ${
                  isScrolled
                    ? 'w-[205px] h-[82px] xl:w-[220px] xl:h-[88px]'
                    : 'w-[220px] h-[88px] xl:w-[240px] xl:h-[96px]'
                }`}
              >
                <img
                  src="/images/logo/logo.png"
                  alt="MetalForge - MF Industrial Solutions Private Limited Logo"
                  className="w-full h-full object-contain object-left transition-transform duration-200 group-hover:scale-[1.01]"
                  loading="eager"
                />
              </div>

              {/* Mobile Logo: ~170px wide, crisp and cleanly readable */}
              <div className="flex sm:hidden items-center w-[170px] h-[68px]">
                <img
                  src="/images/logo/logo.png"
                  alt="MetalForge - MF Industrial Solutions Logo"
                  className="w-full h-full object-contain object-left"
                  loading="eager"
                />
              </div>
            </Link>

            {/* 2. Desktop Navigation Items (Single horizontal line: Home, About Us, Products, Quality, Contact) */}
            <nav
              className="hidden xl:flex items-center justify-center gap-8 2xl:gap-10"
              aria-label="Main Navigation"
            >
              {navItems.map((item) => {
                const isActive = activeItem === item.name;

                // Special handling for Product with hover dropdown
                if (item.id === 'products') {
                  return (
                    <div
                      key={item.id}
                      className="relative"
                      onMouseEnter={handleProductMouseEnter}
                      onMouseLeave={handleProductMouseLeave}
                    >
                      <Link
                        to={item.path}
                        className={`group inline-flex items-center gap-1.5 py-2 text-[18px] 2xl:text-[19px] font-semibold tracking-[-0.01em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C10A0E] rounded ${
                          isActive ? 'text-[#C10A0E]' : 'text-[#0C0C0C] hover:text-[#C10A0E]'
                        }`}
                      >
                        <span>Product</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            productDropdownOpen
                              ? 'rotate-180 text-[#C10A0E]'
                              : 'text-neutral-500 group-hover:text-[#C10A0E]'
                          }`}
                        />
                        {/* Brand-Red Underline Indicator */}
                        <span
                          className={`absolute -bottom-1 left-0 right-0 h-[3px] bg-[#C10A0E] rounded-full transition-transform duration-250 ease-out origin-center ${
                            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                          }`}
                        />
                      </Link>

                      {/* Desktop Product Dropdown Menu */}
                      {productDropdownOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                          <div className="w-56 bg-white rounded-2xl shadow-2xl border border-red-100 py-2.5 px-2 overflow-hidden">
                            <div className="flex flex-col gap-0.5">
                              {productsCatalogue.map((prod) => (
                                <Link
                                  key={prod.slug}
                                  to={`/products/${prod.slug}`}
                                  onClick={() => setProductDropdownOpen(false)}
                                  className="px-3.5 py-2 rounded-lg text-[14.5px] font-semibold text-[#0C0C0C] hover:text-[#C10A0E] hover:bg-[#FAF0F0] transition-colors flex items-center justify-between"
                                >
                                  <span>{prod.name}</span>
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#C10A0E] opacity-0 hover:opacity-100 transition-opacity" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`group relative py-2 text-[18px] 2xl:text-[19px] font-semibold tracking-[-0.01em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C10A0E] rounded ${
                      isActive ? 'text-[#C10A0E]' : 'text-[#0C0C0C] hover:text-[#C10A0E]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {/* Brand-Red Underline Indicator */}
                    <span
                      className={`absolute -bottom-1 left-0 right-0 h-[3px] bg-[#C10A0E] rounded-full transition-transform duration-250 ease-out origin-center ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* 3. Desktop Get a Quote Button (Item 6 - Prominent Brand Red CTA Button) */}
            <div className="hidden xl:flex items-center justify-end">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-[12px] bg-[#C10A0E] hover:bg-[#A5080C] text-white font-bold text-[16px] tracking-wide shadow-md shadow-red-950/15 hover:shadow-lg hover:shadow-red-700/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C10A0E] focus-visible:ring-offset-2"
              >
                <span>Get a Quote</span>
              </Link>
            </div>

            {/* 4. Mobile Menu Hamburger Icon (Visible on mobile & tablet screens < 1280px) */}
            <div className="flex xl:hidden items-center">
              {/* Note: Get a Quote is hidden in closed mobile navbar per instructions */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-xl text-[#0C0C0C] hover:text-[#C10A0E] hover:bg-neutral-200/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C10A0E]"
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 5. Mobile Navigation Drawer (Neat vertical layout with all 6 navigation items) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop Blur */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div
            className="fixed inset-y-0 right-0 w-full max-w-sm sm:max-w-md bg-[#F4F5F7] shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300 border-l border-[#E2E8F0]"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-[#E2E8F0] flex items-center justify-between sticky top-0 bg-[#F4F5F7]/95 backdrop-blur-sm z-10">
              <div className="flex items-center w-44 h-14">
                <img
                  src="/images/logo/logo.png"
                  alt="MetalForge - MF Industrial Solutions Logo"
                  className="w-full h-full object-contain object-left"
                />
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl text-[#0C0C0C] hover:text-[#C10A0E] hover:bg-[#FEF2F2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C10A0E]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Simple Vertical Nav Items List */}
            <div className="px-5 py-6 space-y-2 flex-1">
              {navItems.map((item) => {
                const isActive = activeItem === item.name;

                // Mobile expandable product item
                if (item.id === 'products') {
                  return (
                    <div key={item.id} className="space-y-1">
                      <div
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-colors ${
                          isActive
                            ? 'bg-white text-[#C10A0E] shadow-sm border border-[#E2E8F0]'
                            : 'text-[#0C0C0C] bg-white/70'
                        }`}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[18px] font-semibold flex-1"
                        >
                          <span>{item.name}</span>
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileProductExpanded(!mobileProductExpanded)}
                          className="p-1 rounded-lg hover:bg-neutral-200/60 text-[#0C0C0C]"
                          aria-label="Expand 12 products list"
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${
                              mobileProductExpanded ? 'rotate-180 text-[#C10A0E]' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {/* Mobile 12-Product Sub-List */}
                      {mobileProductExpanded && (
                        <div className="pl-3 pr-1 py-1 space-y-1 bg-white/60 rounded-xl border border-red-100 my-1 animate-in fade-in duration-150">
                          <Link
                            to="/products"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 text-[14px] font-bold text-[#C10A0E] hover:bg-red-50 rounded-lg"
                          >
                            All 12 Products (Catalogue) →
                          </Link>
                          {productsCatalogue.map((prod) => (
                            <Link
                              key={prod.slug}
                              to={`/products/${prod.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-3 py-2 text-[14px] font-semibold text-slate-700 hover:text-[#C10A0E] hover:bg-white rounded-lg transition-colors"
                            >
                              {prod.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-4 rounded-xl text-[18px] font-semibold transition-colors ${
                      isActive
                        ? 'bg-white text-[#C10A0E] shadow-sm border border-[#E2E8F0]'
                        : 'text-[#0C0C0C] hover:bg-white/70 hover:text-[#C10A0E]'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-2.5 h-2.5 rounded-full bg-[#C10A0E]" />}
                  </Link>
                );
              })}
            </div>

            {/* Drawer Bottom CTA: Get a Quote */}
            <div className="p-5 border-t border-[#E2E8F0] bg-white/70">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-[12px] bg-[#C10A0E] hover:bg-[#A5080C] text-white text-[16px] font-bold shadow-lg shadow-red-900/20 active:scale-[0.98] transition-all"
              >
                <FileText className="w-5 h-5" />
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
