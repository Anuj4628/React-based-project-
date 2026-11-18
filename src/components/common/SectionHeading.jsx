import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = false,
  className,
}) {
  return (
    <div className={cn('space-y-3', centered && 'text-center max-w-3xl mx-auto', className)}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-forge-subtle border border-brand-forge-border text-brand-forge text-xs font-bold tracking-wider uppercase">
          {badge}
        </div>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-carbon tracking-tight leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
