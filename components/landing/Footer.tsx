'use client';

import { useState, useEffect } from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { useTheme } from 'next-themes';

const navigation = {
  product: [
    { name: 'Platform', href: '/platform' },
    { name: 'Live Demo', href: 'http://localhost:3008', target: '_blank' },
    { name: 'Pricing', href: '/pricing' }
  ],
  services: [
    { name: 'Build & Own', href: '/services/build-and-own' },
    { name: 'Managed Service', href: '/services/managed-service' },
    { name: 'CS Audit', href: '/audit' }
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
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
    href: 'mailto:hello@coreshift.com',
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
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-orange to-brand-orange-dark flex items-center justify-center text-white font-bold">
                C
              </div>
              <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-brand-charcoal'}`}>
                CoreShift
              </span>
            </div>
            <p className={`text-sm mb-6 max-w-xs ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
              Build & Own Your Post-Sales Infrastructure. Deploy a production-ready Customer Success platform in your cloud.
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
            © {new Date().getFullYear()} CoreShift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
