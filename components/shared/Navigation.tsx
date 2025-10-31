'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon, ChevronDown, AlertTriangle, Zap, Award, Target, Cpu } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { DEMO_URLS } from '@/config/brand';

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  const handleMouseEnter = (dropdown: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed nav height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
    }
  };

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
            <svg width="140" height="56" viewBox="0 0 200 80" className="h-14 w-auto">
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
            {/* The Problem Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('problem')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer ${isDark ? 'text-gray-300 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
              >
                The Problem
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'problem' ? 'rotate-180' : ''}`} />
              </button>

              {openDropdown === 'problem' && (
                <div
                  className={`absolute top-full left-0 mt-2 w-64 rounded-xl border shadow-2xl py-2 ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-brand-border'}`}
                  onMouseEnter={() => handleMouseEnter('problem')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="/#challenge"
                    className={`w-full text-left px-4 py-3 text-sm transition-all flex items-start gap-3 group ${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-brand-gray hover:bg-gray-50'}`}
                  >
                    <div className={`mt-0.5 p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 group-hover:bg-white/10' : 'bg-black/5 group-hover:bg-black/10'}`}>
                      <AlertTriangle className={`w-4 h-4 ${isDark ? 'text-white' : 'text-black'}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold mb-0.5 group-hover:text-brand-orange transition-colors ${isDark ? 'text-gray-200' : 'text-brand-charcoal'}`}>The Challenge</div>
                      <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Why CS is bleeding revenue</div>
                    </div>
                  </Link>
                  <Link
                    href="/#urgency"
                    className={`w-full text-left px-4 py-3 text-sm transition-all flex items-start gap-3 group ${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-brand-gray hover:bg-gray-50'}`}
                  >
                    <div className={`mt-0.5 p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 group-hover:bg-white/10' : 'bg-black/5 group-hover:bg-black/10'}`}>
                      <Zap className={`w-4 h-4 ${isDark ? 'text-white' : 'text-black'}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold mb-0.5 group-hover:text-brand-orange transition-colors ${isDark ? 'text-gray-200' : 'text-brand-charcoal'}`}>Why Fix Now</div>
                      <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>The cost of waiting</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* The Solution Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('solution')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer ${isDark ? 'text-gray-300 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
              >
                The Solution
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'solution' ? 'rotate-180' : ''}`} />
              </button>

              {openDropdown === 'solution' && (
                <div
                  className={`absolute top-full left-0 mt-2 w-64 rounded-xl border shadow-2xl py-2 ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-brand-border'}`}
                  onMouseEnter={() => handleMouseEnter('solution')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="/#why-us"
                    className={`w-full text-left px-4 py-3 text-sm transition-all flex items-start gap-3 group ${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-brand-gray hover:bg-gray-50'}`}
                  >
                    <div className={`mt-0.5 p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 group-hover:bg-white/10' : 'bg-black/5 group-hover:bg-black/10'}`}>
                      <Award className={`w-4 h-4 ${isDark ? 'text-white' : 'text-black'}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold mb-0.5 group-hover:text-brand-orange transition-colors ${isDark ? 'text-gray-200' : 'text-brand-charcoal'}`}>Why Us</div>
                      <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>What makes us different</div>
                    </div>
                  </Link>
                  <Link
                    href="/#competitive"
                    className={`w-full text-left px-4 py-3 text-sm transition-all flex items-start gap-3 group ${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-brand-gray hover:bg-gray-50'}`}
                  >
                    <div className={`mt-0.5 p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 group-hover:bg-white/10' : 'bg-black/5 group-hover:bg-black/10'}`}>
                      <Target className={`w-4 h-4 ${isDark ? 'text-white' : 'text-black'}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold mb-0.5 group-hover:text-brand-orange transition-colors ${isDark ? 'text-gray-200' : 'text-brand-charcoal'}`}>How We're Different</div>
                      <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>vs SaaS, consultants, DIY</div>
                    </div>
                  </Link>
                  <Link
                    href="/#approach"
                    className={`w-full text-left px-4 py-3 text-sm transition-all flex items-start gap-3 group ${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-brand-gray hover:bg-gray-50'}`}
                  >
                    <div className={`mt-0.5 p-2 rounded-lg transition-colors ${isDark ? 'bg-white/5 group-hover:bg-white/10' : 'bg-black/5 group-hover:bg-black/10'}`}>
                      <Cpu className={`w-4 h-4 ${isDark ? 'text-white' : 'text-black'}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold mb-0.5 group-hover:text-brand-orange transition-colors ${isDark ? 'text-gray-200' : 'text-brand-charcoal'}`}>Our Engine</div>
                      <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>The platform you'll own</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link
              href="/#pricing"
              className={`text-sm font-medium transition-colors cursor-pointer ${isDark ? 'text-gray-300 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
            >
              Pricing
            </Link>
            <Link
              href="/#faq"
              className={`text-sm font-medium transition-colors cursor-pointer ${isDark ? 'text-gray-300 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
            >
              FAQ
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

            <Button size="md" variant="primary" href="/contact" shine>
              Book a Call
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
            <div className="flex flex-col gap-2">
              {/* The Problem Section */}
              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'problem-mobile' ? null : 'problem-mobile')}
                  className={`w-full flex items-center justify-between py-2 text-sm font-medium transition-colors ${isDark ? 'text-gray-300 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
                >
                  The Problem
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'problem-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'problem-mobile' && (
                  <div className="pl-4 space-y-1 mt-2">
                    <Link
                      href="/#challenge"
                      className={`flex items-center gap-2 w-full text-left py-2 text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
                    >
                      <div className={`p-1.5 rounded-lg ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                        <AlertTriangle className={`w-3.5 h-3.5 ${isDark ? 'text-white' : 'text-black'}`} />
                      </div>
                      <span>The Challenge</span>
                    </Link>
                    <Link
                      href="/#urgency"
                      className={`flex items-center gap-2 w-full text-left py-2 text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
                    >
                      <div className={`p-1.5 rounded-lg ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                        <Zap className={`w-3.5 h-3.5 ${isDark ? 'text-white' : 'text-black'}`} />
                      </div>
                      <span>Why Fix Now</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* The Solution Section */}
              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === 'solution-mobile' ? null : 'solution-mobile')}
                  className={`w-full flex items-center justify-between py-2 text-sm font-medium transition-colors ${isDark ? 'text-gray-300 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
                >
                  The Solution
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'solution-mobile' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'solution-mobile' && (
                  <div className="pl-4 space-y-1 mt-2">
                    <Link
                      href="/#why-us"
                      className={`flex items-center gap-2 w-full text-left py-2 text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
                    >
                      <div className={`p-1.5 rounded-lg ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                        <Award className={`w-3.5 h-3.5 ${isDark ? 'text-white' : 'text-black'}`} />
                      </div>
                      <span>Why Us</span>
                    </Link>
                    <Link
                      href="/#competitive"
                      className={`flex items-center gap-2 w-full text-left py-2 text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
                    >
                      <div className={`p-1.5 rounded-lg ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                        <Target className={`w-3.5 h-3.5 ${isDark ? 'text-white' : 'text-black'}`} />
                      </div>
                      <span>How We're Different</span>
                    </Link>
                    <Link
                      href="/#approach"
                      className={`flex items-center gap-2 w-full text-left py-2 text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
                    >
                      <div className={`p-1.5 rounded-lg ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                        <Cpu className={`w-3.5 h-3.5 ${isDark ? 'text-white' : 'text-black'}`} />
                      </div>
                      <span>Our Engine</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <Link
                href="/#pricing"
                className={`text-sm font-medium transition-colors py-2 text-left cursor-pointer ${isDark ? 'text-gray-300 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
              >
                Pricing
              </Link>
              <Link
                href="/#faq"
                className={`text-sm font-medium transition-colors py-2 text-left cursor-pointer ${isDark ? 'text-gray-300 hover:text-brand-orange' : 'text-brand-gray hover:text-brand-orange'}`}
              >
                FAQ
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
                href="/contact"
                className="w-full mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
