'use client';

import { useState, useEffect } from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { useTheme } from 'next-themes';

const navigation = {
  product: [
    { name: 'Platform', href: '/#approach' },
    { name: 'Investment', href: '/#pricing' }
  ],
  services: [
    { name: 'Assess', href: '/audit' },
    { name: 'Build', href: '/contact' },
    { name: 'Shift', href: '/contact' },
    { name: 'Evolve', href: '/contact' }
  ],
  company: [
    { name: 'Free Audit', href: '/audit' },
    { name: 'Contact', href: '/contact' }
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' }
  ]
};

const social = [
  {
    name: 'Twitter',
    href: '#',
    icon: Twitter
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: Linkedin
  },
  {
    name: 'GitHub',
    href: '#',
    icon: Github
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

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <footer className={`border-t ${isDark ? 'bg-black border-gray-800' : 'bg-white border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
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
              Stop the bleeding. Own your CS infrastructure. Fixed pricing, zero vendor lock in. Your infrastructure. Your deployment. Your control.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.name !== 'Email' ? '_blank' : undefined}
                  rel={item.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                    isDark
                      ? 'bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-brand-orange'
                      : 'bg-gray-100 hover:bg-gray-200 text-brand-gray hover:text-brand-orange'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="sr-only">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className={`text-sm font-semibold mb-4 ${isDark ? 'text-white' : 'text-brand-charcoal'}`}>
              Product
            </h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
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

        {/* Bottom Bar */}
        <div className={`pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <p className={`text-sm text-center ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            © {new Date().getFullYear()} <span className={isDark ? 'text-white' : 'text-brand-charcoal'}>Core</span><span className="text-[#ec5f2b]">Shift</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
