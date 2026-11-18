import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className,
  type = 'button',
  disabled = false,
  onClick,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-[12px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none';

  const variants = {
    primary:
      'bg-brand-forge text-white hover:bg-brand-forge-hover active:scale-[0.98] shadow-md shadow-red-950/15 hover:shadow-lg hover:shadow-red-600/25 hover:-translate-y-0.5 focus-visible:ring-brand-forge',
    secondary:
      'bg-brand-carbon text-white hover:bg-brand-carbon-charcoal active:scale-[0.98] shadow-md hover:-translate-y-0.5 focus-visible:ring-brand-carbon',
    outline:
      'border-2 border-brand-carbon text-brand-carbon bg-transparent hover:bg-brand-carbon hover:text-white active:scale-[0.98] focus-visible:ring-brand-carbon',
    ghost:
      'text-brand-carbon hover:bg-neutral-100 hover:text-brand-forge focus-visible:ring-brand-forge',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-[15px] px-5 py-2.5 gap-2',
    lg: 'text-[16px] px-7 py-3.5 gap-2.5 font-bold',
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
