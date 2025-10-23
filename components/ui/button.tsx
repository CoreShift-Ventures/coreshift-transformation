import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  target?: string;
  shine?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  size = 'md',
  variant = 'primary',
  className = '',
  target,
  shine = false
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm font-medium',
    md: 'px-6 py-3 text-base font-semibold',
    lg: 'px-8 py-4 text-lg font-semibold',
    xl: 'px-10 py-5 text-xl font-bold'
  };

  const variantClasses = {
    primary: 'bg-brand-orange hover:bg-brand-orange-dark text-white shadow-lg hover:shadow-orange active:scale-95',
    secondary: 'bg-brand-charcoal hover:bg-opacity-90 text-white shadow-lg hover:shadow-xl active:scale-95',
    outline: 'border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white hover:shadow-lg active:scale-95',
    ghost: 'text-brand-gray hover:text-brand-orange hover:bg-brand-cream active:scale-95'
  };

  const baseClasses = 'inline-flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out';
  const shineClass = shine ? 'btn-shine' : '';
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${shineClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} target={target}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
