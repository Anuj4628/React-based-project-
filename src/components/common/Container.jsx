import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Container({ children, className, ...props }) {
  return (
    <div
      className={cn('max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12', className)}
      {...props}
    >
      {children}
    </div>
  );
}
