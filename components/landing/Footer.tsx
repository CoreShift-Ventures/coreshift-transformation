// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { useTheme } from 'next-themes';
import { QuickEmailModal } from '@/components/QuickEmailModal';

const navigation = {
  services: [
    { name: 'Blueprint Sprint', href: '/#what-we-do' },
    { name: 'Systems & Automation', href: '/showcase' },
    { name: 'Fractional COO', href: '/#what-we-do' }
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Why CoreShift', href: '/#why-coreshift' },
    { name: 'FAQ', href: '/#faq' }
  ],
  connect: [
    { name: 'Book a Free Consult', href: '/contact' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/srisridh/', target: '_blank' }
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' }
  ]
};

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
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Brand Column */}
        <div className="mb-12">
          <div className="mb-4">
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
          </div>
          <p className={`text-sm mb-6 max-w-xs ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Strategy first transformation studio. We design and build modern operational systems powered by AI. Blueprint Sprint in 2 weeks, deployed in 8 weeks.
          </p>
          {/* Social Links */}
          <div className="flex gap-4">
            {social.map((item) => {
              if (item.name === 'Email') {
                return (
                  <button
                    key={item.name}
                    onClick={() => setIsEmailModalOpen(true)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                      isDark
                        ? 'bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-brand-orange'
                        : 'bg-gray-100 hover:bg-gray-200 text-brand-gray hover:text-brand-orange'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
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
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                    isDark
                      ? 'bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-brand-orange'
                      : 'bg-gray-100 hover:bg-gray-200 text-brand-gray hover:text-brand-orange'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="sr-only">{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigation Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

          {/* Services */}
          <div>
            <h3 className={`text-sm font-semibold mb-4 ${isDark ? 'text-white' : 'text-brand-charcoal'}`}>
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.target}
                    rel={item.target ? 'noopener noreferrer' : undefined}
                    className={`text-sm transition-colors ${
                      isDark
                        ? 'text-gray-400 hover:text-brand-orange'
                        : 'text-brand-gray hover:text-brand-orange'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className={`text-sm font-semibold mb-4 ${isDark ? 'text-white' : 'text-brand-charcoal'}`}>
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.target}
                    rel={item.target ? 'noopener noreferrer' : undefined}
                    className={`text-sm transition-colors ${
                      isDark
                        ? 'text-gray-400 hover:text-brand-orange'
                        : 'text-brand-gray hover:text-brand-orange'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className={`text-sm font-semibold mb-4 ${isDark ? 'text-white' : 'text-brand-charcoal'}`}>
              Connect
            </h3>
            <ul className="space-y-3">
              {navigation.connect.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.target}
                    rel={item.target ? 'noopener noreferrer' : undefined}
                    className={`text-sm transition-colors ${
                      isDark
                        ? 'text-gray-400 hover:text-brand-orange'
                        : 'text-brand-gray hover:text-brand-orange'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className={`text-sm font-semibold mb-4 ${isDark ? 'text-white' : 'text-brand-charcoal'}`}>
              Legal
            </h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`text-sm transition-colors ${
                      isDark
                        ? 'text-gray-400 hover:text-brand-orange'
                        : 'text-brand-gray hover:text-brand-orange'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Spacer before bottom bar */}
        <div className="mb-0"></div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <p className={`text-sm text-center ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            © {new Date().getFullYear()} <span className={isDark ? 'text-white' : 'text-brand-charcoal'}>Core</span><span className="text-brand-orange">Shift</span> Ventures LLP. All rights reserved.
          </p>
        </div>
      </div>

      {/* Quick Email Modal */}
      <QuickEmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
    </footer>
  );
}
