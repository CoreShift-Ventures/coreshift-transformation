'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { DEMO_URLS } from '@/config/brand';

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? (isDark ? 'bg-black/95 backdrop-blur-lg shadow-lg border-b border-gray-800' : 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-brand-border')
          : (isDark ? 'bg-black/80 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm')
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <svg width="120" height="48" viewBox="0 0 200 80" className="h-12 w-auto">
              <g transform="translate(6, 40)">
                <g transform="translate(0, -4)">
                  <path
                    d="M 6 0 L 3 0 L 3 20 L 6 20"
                    stroke={isDark ? "#ffffff" : "#272624"}
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(0, -10)"
                  />
                </g>
                <circle cx="18" cy="-4" r="4" fill="#ec5f2b" />
                <g transform="translate(30, 4)">
                  <path
                    d="M 0 0 L 3 0 L 3 20 L 0 20"
                    stroke={isDark ? "#ffffff" : "#272624"}
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(0, -10)"
                  />
                </g>
                <text
                  x="50"
                  y="0"
                  fontFamily="Inter, Arial, sans-serif"
                  fontSize="30"
                  fontWeight={isDark ? "600" : "700"}
                  fill={isDark ? "#ffffff" : "#272624"}
                  textAnchor="start"
                  alignmentBaseline="middle"
                >
                  Core
                </text>
                <text
                  x="120"
                  y="0"
                  fontFamily="Inter, Arial, sans-serif"
                  fontSize="30"
                  fontWeight="400"
                  fill="#ec5f2b"
                  textAnchor="start"
                  alignmentBaseline="middle"
                >
                  Shift
                </text>
              </g>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#features"
              className={`text-sm font-medium transition-colors ${isDark ? 'text-gray-300 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
            >
              Features
            </Link>
            <Link
              href={DEMO_URLS.base}
              target="_blank"
              className={`text-sm font-medium transition-colors ${isDark ? 'text-gray-300 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
            >
              Live Demo
            </Link>
            <Link
              href="/#pricing"
              className={`text-sm font-medium transition-colors ${isDark ? 'text-gray-300 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
            >
              Pricing
            </Link>
            <Link
              href="/audit"
              className={`text-sm font-medium transition-colors ${isDark ? 'text-gray-300 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
            >
              Free Audit
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2.5 rounded-lg transition-all duration-200 hover:scale-105 ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-gray-300" />
              ) : (
                <Moon className="w-4 h-4 text-brand-gray" />
              )}
            </button>

            <Button size="md" variant="primary" href="/book" shine>
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-gray-800' : 'hover:bg-brand-cream'}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isDark ? 'text-gray-300' : 'text-brand-charcoal'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isDark ? 'text-gray-300' : 'text-brand-charcoal'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden py-4 border-t ${isDark ? 'border-gray-800' : 'border-brand-border'}`}>
            <div className="flex flex-col gap-4">
              <Link
                href="/#features"
                className={`text-sm font-medium transition-colors py-2 ${isDark ? 'text-gray-300 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href={DEMO_URLS.base}
                target="_blank"
                className={`text-sm font-medium transition-colors py-2 ${isDark ? 'text-gray-300 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Live Demo
              </Link>
              <Link
                href="/#pricing"
                className={`text-sm font-medium transition-colors py-2 ${isDark ? 'text-gray-300 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/audit"
                className={`text-sm font-medium transition-colors py-2 ${isDark ? 'text-gray-300 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Free Audit
              </Link>

              {/* Mobile Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`flex items-center gap-2 py-2 text-sm font-medium transition-colors ${isDark ? 'text-gray-300 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
              >
                {isDark ? (
                  <>
                    <Sun className="w-4 h-4" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>

              <Button
                size="md"
                variant="primary"
                href="/book"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
