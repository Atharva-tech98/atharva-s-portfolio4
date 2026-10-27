'use client';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const variants = {
  primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/20',
  accent: 'bg-accent-500 hover:bg-accent-600 text-white shadow-lg shadow-accent-500/30 border border-accent-400/40',
  outline: 'border border-white/15 hover:bg-white/5 text-white',
  ghost: 'hover:bg-white/5 text-gray-300 hover:text-white',
};

const sizes = {
  sm: 'px-4 py-2 text-sm gap-2',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-3 font-semibold',
};

export const Button = forwardRef(function Button(
  { className, variant = 'primary', size = 'md', ...props }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      className={cn(
        'rounded-lg transition-all duration-300 ease-out',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
});
