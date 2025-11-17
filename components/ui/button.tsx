'use client';

import Link from 'next/link';
import { ReactNode, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  target?: string;
  shine?: boolean;
  magnetic?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  size = 'md',
  variant = 'primary',
  className = '',
  target,
  shine = false,
  magnetic = true
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.1);
    y.set((e.clientY - centerY) * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm font-medium',
    md: 'px-6 py-3 text-base font-semibold',
    lg: 'px-8 py-4 text-lg font-semibold',
    xl: 'px-10 py-5 text-xl font-bold'
  };

  const variantClasses = {
    primary: 'bg-brand-orange hover:bg-brand-orange-dark text-white shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 focus-visible:ring-offset-white',
    secondary: 'bg-brand-charcoal hover:bg-opacity-90 text-white shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
    outline: 'border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 focus-visible:ring-offset-white',
    ghost: 'text-brand-gray hover:text-brand-orange hover:bg-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 focus-visible:ring-offset-white'
  };

  const baseClasses = 'relative inline-flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out overflow-hidden group';
  const shineClass = shine ? 'btn-shine' : '';
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${shineClass} ${className}`;

  if (href) {
    return (
      <motion.div
        style={magnetic ? { x: springX, y: springY } : {}}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Link
          ref={ref as any}
          href={href}
          className={classes}
          target={target}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {variant === 'primary' && (
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          )}
          <span className="relative z-10">{children}</span>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      ref={ref as any}
      onClick={onClick}
      className={classes}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={magnetic ? { x: springX, y: springY } : {}}
      whileTap={{ scale: 0.98 }}
    >
      {variant === 'primary' && (
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
