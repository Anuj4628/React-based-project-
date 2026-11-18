import React, { useState } from 'react';
import {
  MapPin,
  ExternalLink,
  Send,
  AlertCircle,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  X,
  MessageSquare,
  Building2,
  ChevronDown,
} from 'lucide-react';
import { companyInfo } from '@/data/company';

const serviceOptions = [
  'Steel Fabrication',
  'Plate Cutting & Drilling',
  'MS Puddle Flanges',
  'Steel Gratings',
  'Cable Trays',
  'Solar Mounting Hardware',
  'Galvanized Components',
  'Custom Fabrication',
  'General Enquiry',
];

const locationsData = [
  {
    id: 'primary',
    tag: 'REGISTERED OFFICE',
    companyName: 'MF Industrial Solutions Pvt. Ltd.',
    shortTitle: 'Registered Office (Bhiwandi / Thane)',
    completeAddress:
      '1st Floor, Flat No. 104, H. No. 65, Abdul Shakoor Apartment, Wing A, Bangalpura, Dandekarwadi, Bhiwandi, District Thane, Maharashtra – 421302, India.',
    addressLines: [
      '1st Floor, Flat No. 104, H. No. 65,',
      'Abdul Shakoor Apartment, Wing A,',
      'Bangalpura, Dandekarwadi, Bhiwandi,',
      'District Thane, Maharashtra – 421302, India.',
    ],
    hours: 'Monday – Saturday: 9:00 AM – 7:00 PM IST',
    googleMapsUrl: companyInfo.primaryAddress.googleMapsUrl,
    embedUrl:
      'https://maps.google.com/maps?q=Abdul+Shakoor+Apartment,+Bangalpura,+Dandekarwadi,+Bhiwandi,+Maharashtra+421302&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    id: 'pune',
    tag: 'PUNE FACILITY',
    companyName: 'MF Industrial Solutions – Pune',
    shortTitle: 'Pune Location (Chakan / Khed)',
    completeAddress:
      'Gat No. 283, Nanekarwadi, Chakan, Taluka Khed, District Pune, Maharashtra – 410501, India.',
    addressLines: [
      'Gat No. 283, Nanekarwadi, Chakan,',
      'Taluka Khed,',
      'District Pune, Maharashtra – 410501, India.',
    ],
    hours: 'Monday – Saturday: 9:00 AM – 7:00 PM IST',
    googleMapsUrl: companyInfo.puneAddress.googleMapsUrl,
    embedUrl:
      'https://maps.google.com/maps?q=Gat+No.+283,+Nanekarwadi,+Chakan,+Khed,+Pune,+Maharashtra+410501&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
];

/**
 * Page 3: Location Map + Enquiry Form
 * Left Column: Find Our Locations (Interactive dual location selector & High-Visibility Google Maps)
 * Right Column: Send Us an Enquiry (Validated form + WhatsApp / Gmail routing modal)
 */
export default function ContactLocationsAndForm() {
  const [activeLocationId, setActiveLocationId] = useState('primary');
  const activeLocation =
    locationsData.find((loc) => loc.id === activeLocationId) || locationsData[0];

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: 'Steel Fabrication',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Validation
  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Please enter your full name';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'companyName':
        if (!value.trim()) return 'Please enter your company / firm name';
        return '';
      case 'email':
        if (!value.trim()) return 'Please enter your email address';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email address';
        }
        return '';
      case 'phone':
        if (!value.trim()) return 'Please enter your phone / mobile number';
        if (!/^[0-9+\s\-()]{10,18}$/.test(value.trim().replace(/\s/g, ''))) {
          return 'Please enter a valid 10-digit mobile number';
        }
        return '';
      case 'subject':
        if (!value.trim()) return 'Please enter a subject for your enquiry';
        return '';
      case 'message':
        if (!value.trim()) return 'Please describe your requirements or specifications';
        if (value.trim().length < 10) return 'Message should contain at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);
    setTouched({
      fullName: true,
      companyName: true,
      email: true,
      phone: true,
      service: true,
      subject: true,
      message: true,
    });

    if (Object.keys(newErrors).length === 0) {
      setIsModalOpen(true);
    }
  };

  // WhatsApp Message Generator
  const getWhatsAppUrl = () => {
    const text =
      `*NEW INDUSTRIAL REQUIREMENT ENQUIRY*\n` +
      `------------------------------------\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Company:* ${formData.companyName}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Service Required:* ${formData.service}\n` +
      `*Subject:* ${formData.subject}\n` +
      `*Message:* ${formData.message}\n` +
      `------------------------------------\n` +
      `_Sent via MF Industrial Solutions website_`;

    return `https://wa.me/${companyInfo.contact.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  // Gmail Web URL Generator
  const getGmailUrl = () => {
    const subject = `[Enquiry - ${formData.service}] ${formData.subject} - ${formData.companyName}`;
    const body =
      `Dear MF Industrial Solutions Team,\n\n` +
      `I would like to submit an enquiry regarding your industrial services:\n\n` +
      `Full Name: ${formData.fullName}\n` +
      `Company Name: ${formData.companyName}\n` +
      `Email Address: ${formData.email}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Service: ${formData.service}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Requirements / Message:\n` +
      `${formData.message}\n\n` +
      `Please review and share your technical feedback and commercial quotation.\n\n` +
      `Regards,\n` +
      `${formData.fullName}\n` +
      `${formData.companyName}`;

    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      companyInfo.contact.email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Mailto Fallback Generator
  const getMailtoUrl = () => {
    const subject = `[Enquiry - ${formData.service}] ${formData.subject} - ${formData.companyName}`;
    const body =
      `Dear MF Industrial Solutions Team,\n\n` +
      `Full Name: ${formData.fullName}\n` +
      `Company Name: ${formData.companyName}\n` +
      `Email Address: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Service: ${formData.service}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n` +
      `${formData.message}\n`;

    return `mailto:${companyInfo.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="locations-map"
      aria-label="Locations and Enquiry Form - MF Industrial Solutions"
      className="relative w-full bg-[#FAF0F0] text-[#0C0C0C] py-16 sm:py-20 lg:py-24 border-b border-red-100 overflow-hidden select-none"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Balanced 2-Column Desktop Grid (50% / 50%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-12 items-stretch">
          
          {/* ============================================================== */}
          {/* LEFT SIDE: OUR LOCATIONS (Span 6)                              */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full bg-white rounded-3xl border-2 border-red-100 p-6 sm:p-8 lg:p-9 shadow-xl shadow-red-950/5">
            <div>
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F0] border border-red-200 shadow-sm mb-3.5">
                <span className="w-2 h-2 rounded-full bg-[#C10A0E]" />
                <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
                  03 — OUR LOCATIONS
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-condensed font-extrabold uppercase leading-[1.0] tracking-tight text-[28px] sm:text-[36px] lg:text-[40px] text-[#0C0C0C] mb-3">
                FIND OUR <span className="text-[#C10A0E]">LOCATIONS</span>
              </h2>

              <p className="text-[14.5px] text-[#4A5568] leading-relaxed mb-6 font-normal">
                Visit or inspect our facilities across Maharashtra. Select an office below to preview complete address details and interactive Google Maps directions.
              </p>

              {/* Location Selector Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {locationsData.map((loc) => {
                  const isActive = loc.id === activeLocationId;
                  return (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => setActiveLocationId(loc.id)}
                      className={`text-left p-4 rounded-2xl border-2 transition-all duration-200 flex flex-col justify-between ${
                        isActive
                          ? 'bg-[#BA0A0E] text-white border-[#BA0A0E] shadow-md shadow-red-950/20 scale-[1.01]'
                          : 'bg-[#FAF0F0]/60 text-[#0C0C0C] border-red-100 hover:border-red-300 hover:bg-[#FAF0F0]'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1.5">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                            isActive
                              ? 'bg-white/20 text-white'
                              : 'bg-white text-[#C10A0E] border border-red-200'
                          }`}
                        >
                          {loc.tag}
                        </span>
                        <MapPin
                          className={`w-4 h-4 ${
                            isActive ? 'text-white' : 'text-[#C10A0E]'
                          }`}
                        />
                      </div>
                      <span className="font-bold text-[14px] leading-snug">
                        {loc.shortTitle}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Displayed Complete Address Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF0F0]/80 border border-red-100 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-red-200/60">
                  <h3 className="font-bold text-[16px] sm:text-[17px] text-[#0C0C0C]">
                    {activeLocation.companyName}
                  </h3>
                  <a
                    href={activeLocation.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-red-200 text-[#C10A0E] text-[12px] font-bold hover:bg-[#C10A0E] hover:text-white transition-colors shrink-0 shadow-xs self-start sm:self-auto"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Complete Address - Word for word, unshortened */}
                <address className="not-italic text-[13.5px] sm:text-[14px] leading-relaxed text-slate-700 space-y-0.5 mb-3">
                  {activeLocation.addressLines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </address>

                <div className="flex items-center gap-2 text-[12px] font-medium text-slate-600 pt-2 border-t border-red-200/60">
                  <Clock className="w-3.5 h-3.5 text-[#C10A0E] shrink-0" />
                  <span>Working Hours: {activeLocation.hours}</span>
                </div>
              </div>
            </div>

            {/* Google Maps Container: Prominent Desktop Height (420–460px) */}
            <div className="relative w-full h-[340px] sm:h-[380px] lg:h-[440px] xl:h-[450px] rounded-2xl overflow-hidden border border-red-200 shadow-sm">
              {/* Neatly Positioned "Open in Maps" Button in the Top-Left Corner */}
              <a
                href={activeLocation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Open location in Google Maps"
                className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-[#C10A0E] text-[12px] font-bold shadow-md hover:bg-[#C10A0E] hover:text-white transition-all duration-200"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Maps</span>
              </a>

              {/* Clean, Interactive Google Maps Embed (No Dimming Overlay) */}
              <iframe
                title={`Google Map - ${activeLocation.companyName}`}
                src={activeLocation.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT SIDE: ENQUIRY FORM (Span 6)                              */}
          {/* ============================================================== */}
          <div
            id="enquiry-form"
            className="lg:col-span-6 flex flex-col justify-between h-full bg-white rounded-3xl border-2 border-red-100 p-6 sm:p-8 lg:p-9 shadow-xl shadow-red-950/5"
          >
            <div>
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F0] border border-red-200 shadow-sm mb-3.5">
                <span className="w-2 h-2 rounded-full bg-[#C10A0E]" />
                <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.2em] uppercase text-[#C10A0E]">
                  PROJECT INQUIRY DESK
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-condensed font-extrabold uppercase leading-[1.0] tracking-tight text-[28px] sm:text-[36px] lg:text-[40px] text-[#0C0C0C] mb-2">
                SEND US AN <span className="text-[#C10A0E]">ENQUIRY</span>
              </h2>

              <p className="text-[14.5px] text-[#4A5568] leading-relaxed mb-6 font-normal">
                Tell us a little about your requirements. Our team will get in touch with you to discuss the right solution.
              </p>

              {/* Form Element */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Row 1: Full Name & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-[12.5px] font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      Full Name <span className="text-[#C10A0E]">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Rajesh Sharma"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-[14px] bg-[#FAF0F0]/30 transition-all focus:outline-none focus:bg-white ${
                        touched.fullName && errors.fullName
                          ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                          : 'border-slate-200 focus:border-[#C10A0E] focus:ring-2 focus:ring-red-100'
                      }`}
                    />
                    {touched.fullName && errors.fullName && (
                      <p className="flex items-center gap-1 text-[11.5px] text-red-600 font-semibold mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-[12.5px] font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      Company Name <span className="text-[#C10A0E]">*</span>
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Apex Infra Pvt. Ltd."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-[14px] bg-[#FAF0F0]/30 transition-all focus:outline-none focus:bg-white ${
                        touched.companyName && errors.companyName
                          ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                          : 'border-slate-200 focus:border-[#C10A0E] focus:ring-2 focus:ring-red-100'
                      }`}
                    />
                    {touched.companyName && errors.companyName && (
                      <p className="flex items-center gap-1 text-[11.5px] text-red-600 font-semibold mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.companyName}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Email & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[12.5px] font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      Email Address <span className="text-[#C10A0E]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. rajesh@apexinfra.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-[14px] bg-[#FAF0F0]/30 transition-all focus:outline-none focus:bg-white ${
                        touched.email && errors.email
                          ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                          : 'border-slate-200 focus:border-[#C10A0E] focus:ring-2 focus:ring-red-100'
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="flex items-center gap-1 text-[11.5px] text-red-600 font-semibold mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[12.5px] font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      Phone Number <span className="text-[#C10A0E]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. +91 98200 XXXXX"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-[14px] bg-[#FAF0F0]/30 transition-all focus:outline-none focus:bg-white ${
                        touched.phone && errors.phone
                          ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                          : 'border-slate-200 focus:border-[#C10A0E] focus:ring-2 focus:ring-red-100'
                      }`}
                    />
                    {touched.phone && errors.phone && (
                      <p className="flex items-center gap-1 text-[11.5px] text-red-600 font-semibold mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3: Select Service & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-[12.5px] font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      Select Service <span className="text-[#C10A0E]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full appearance-none px-3.5 py-2.5 rounded-xl border border-slate-200 text-[14px] bg-[#FAF0F0]/30 transition-all focus:outline-none focus:bg-white focus:border-[#C10A0E] focus:ring-2 focus:ring-red-100"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-[12.5px] font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      Subject <span className="text-[#C10A0E]">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Quotation for MS Puddle Flanges"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-[14px] bg-[#FAF0F0]/30 transition-all focus:outline-none focus:bg-white ${
                        touched.subject && errors.subject
                          ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                          : 'border-slate-200 focus:border-[#C10A0E] focus:ring-2 focus:ring-red-100'
                      }`}
                    />
                    {touched.subject && errors.subject && (
                      <p className="flex items-center gap-1 text-[11.5px] text-red-600 font-semibold mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 4: Your Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[12.5px] font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Your Message <span className="text-[#C10A0E]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Provide details such as steel grade, dimensions, quantities, drawing references, or project timelines..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-[14px] bg-[#FAF0F0]/30 transition-all focus:outline-none focus:bg-white resize-y ${
                      touched.message && errors.message
                        ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                        : 'border-slate-200 focus:border-[#C10A0E] focus:ring-2 focus:ring-red-100'
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p className="flex items-center gap-1 text-[11.5px] text-red-600 font-semibold mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C10A0E] text-white font-bold text-[14px] uppercase tracking-wider shadow-lg shadow-red-950/20 hover:bg-[#A5080C] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C10A0E] mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT ENQUIRY</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* CONFIRMATION MODAL / POPUP: WhatsApp vs Gmail Routing          */}
      {/* ============================================================== */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-heading"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl border-2 border-red-100 shadow-2xl overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close dialog"
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF0F0] border border-red-200 flex items-center justify-center text-[#C10A0E] mx-auto mb-3 shadow-sm">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3
                id="modal-heading"
                className="font-condensed font-extrabold uppercase text-[24px] sm:text-[28px] text-[#0C0C0C] tracking-tight leading-snug"
              >
                CHOOSE HOW YOU'D LIKE <br />
                <span className="text-[#C10A0E]">TO CONTACT US</span>
              </h3>
              <p className="text-[13.5px] text-slate-600 mt-1">
                Your enquiry details are ready. Select your preferred channel to connect with our industrial team immediately:
              </p>
            </div>

            {/* Quick Summary Preview */}
            <div className="p-3.5 bg-[#FAF0F0]/70 rounded-2xl border border-red-100 text-[12.5px] text-slate-700 mb-6 space-y-1">
              <p>
                <strong className="text-[#0C0C0C]">From:</strong> {formData.fullName} ({formData.companyName})
              </p>
              <p>
                <strong className="text-[#0C0C0C]">Service:</strong> {formData.service}
              </p>
              <p className="truncate">
                <strong className="text-[#0C0C0C]">Subject:</strong> {formData.subject}
              </p>
            </div>

            {/* Two Action Buttons: WhatsApp & Gmail */}
            <div className="space-y-3.5">
              {/* OPTION 1: WHATSAPP */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsModalOpen(false)}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-md shadow-emerald-950/20 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-[15px]">
                      Continue with WhatsApp
                    </span>
                    <span className="block text-[12px] text-emerald-100">
                      Instant message to +91 70300 00160
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-white/80 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* OPTION 2: GMAIL / EMAIL */}
              <a
                href={getGmailUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsModalOpen(false)}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#C10A0E] text-white hover:bg-[#A5080C] shadow-md shadow-red-950/20 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-[15px]">
                      Continue with Gmail
                    </span>
                    <span className="block text-[12px] text-red-100">
                      Prefills enquiry in Gmail composer
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-white/80 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Fallback Note */}
            <div className="mt-5 pt-4 border-t border-slate-100 text-center">
              <p className="text-[12px] text-slate-500">
                Prefer your default mail app instead?{' '}
                <a
                  href={getMailtoUrl()}
                  onClick={() => setIsModalOpen(false)}
                  className="font-bold text-[#C10A0E] hover:underline"
                >
                  Send via Default Email Client
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
