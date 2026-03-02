// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { useTheme } from 'next-themes';
import { QuickEmailModal } from '@/components/QuickEmailModal';

const navigation = [
  { name: 'Why CoreShift', href: '/#why' },
  { name: 'Agents', href: '/#agents' },
  { name: 'Process', href: '/#process' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Contact', href: 'mailto:contact@cshift.io' }
];

const social = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/srisridh/',
    icon: Linkedin
  },
  {
    name: 'Email',
    href: 'mailto:contact@cshift.io',
    icon: Mail
  }
];

export function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <footer className={`border-t ${isDark ? 'bg-black border-gray-800' : 'bg-white border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <svg width="120" height="40" viewBox="0 0 200 80" className="h-10 w-auto">
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
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-brand-charcoal'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {social.map((item) => {
              if (item.name === 'Email') {
                return (
                  <button
                    key={item.name}
                    onClick={() => setIsEmailModalOpen(true)}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
                      isDark
                        ? 'bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-brand-orange border border-gray-800'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-brand-orange border border-gray-200'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="sr-only">{item.name}</span>
                  </button>
                );
              }
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
                    isDark
                      ? 'bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-brand-orange border border-gray-800'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-brand-orange border border-gray-200'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="sr-only">{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            © {new Date().getFullYear()} CoreShift. All rights reserved.
          </p>
          <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            AI agents for enterprise operations
          </p>
        </div>
      </div>

      {/* Quick Email Modal */}
      <QuickEmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
    </footer>
  );
}
