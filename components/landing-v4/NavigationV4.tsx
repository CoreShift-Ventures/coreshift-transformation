'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { QuickEmailModal } from '@/components/QuickEmailModal';

export function NavigationV4() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'What We Do', id: 'what-we-do', isScroll: true },
    { label: 'Showcase', href: '/showcase', isScroll: false },
    { label: 'Why CoreShift', id: 'why-coreshift', isScroll: true },
    { label: 'About', href: '/about', isScroll: false },
    { label: 'FAQ', id: 'faq', isScroll: true }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800 shadow-lg'
            : 'bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {mounted && (
            <Image
              src={isDark ? '/logos/CoreShift/coreshift-logo-dark.png' : '/logos/CoreShift/coreshift-logo-primary.png'}
              alt="CoreShift"
              width={180}
              height={54}
              className="h-14 w-auto"
              priority
            />
          )}
          {!mounted && (
            <Image
              src="/logos/CoreShift/coreshift-logo-primary.png"
              alt="CoreShift"
              width={180}
              height={54}
              className="h-14 w-auto"
              priority
            />
          )}
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {menuItems.map((item, i) => {
            if (item.isScroll) {
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id!)}
                  className={`text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 rounded-md px-3 py-1.5 whitespace-nowrap cursor-pointer ${
                    isDark ? 'text-gray-300 hover:text-white focus-visible:ring-offset-black' : 'text-gray-700 hover:text-brand-charcoal focus-visible:ring-offset-white'
                  }`}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.label}
                </motion.button>
              )
            } else {
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href!}
                    className={`text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 rounded-md px-3 py-1.5 whitespace-nowrap cursor-pointer inline-block hover:-translate-y-0.5 transition-transform ${
                      isDark ? 'text-gray-300 hover:text-white focus-visible:ring-offset-black' : 'text-gray-700 hover:text-brand-charcoal focus-visible:ring-offset-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            }
          })}

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 ${
              isDark ? 'hover:bg-gray-800 focus-visible:ring-offset-black' : 'hover:bg-gray-100 focus-visible:ring-offset-white'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-gray-300" />
            ) : (
              <Moon className="w-4 h-4 text-gray-700" />
            )}
          </button>

          {/* Quick Message Button */}
          <button
            onClick={() => setIsEmailModalOpen(true)}
            className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 ${
              isDark ? 'hover:bg-gray-800 focus-visible:ring-offset-black' : 'hover:bg-gray-100 focus-visible:ring-offset-white'
            }`}
            aria-label="Send quick message"
          >
            <Mail className={`w-4 h-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
          </button>

          <a
            href="/contact"
            className="px-5 py-2.5 bg-brand-orange text-white rounded-lg text-sm font-semibold hover:bg-brand-orange-dark transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 focus-visible:ring-offset-white whitespace-nowrap hover:scale-105 inline-block"
          >
            Book Strategy Session
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 rounded-md p-1 ${
            isDark ? 'text-white focus-visible:ring-offset-black' : 'text-brand-charcoal focus-visible:ring-offset-white'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden overflow-hidden ${isDark ? 'bg-black/95 backdrop-blur-xl border-t border-gray-800' : 'bg-white/95 backdrop-blur-xl border-t border-gray-200'}`}
          >
            <div className="px-6 py-4 space-y-3">
              {menuItems.map((item) => {
                if (item.isScroll) {
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id!)}
                      className={`block w-full text-left py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 rounded-md px-2 ${
                        isDark ? 'text-gray-300 hover:text-white focus-visible:ring-offset-black' : 'text-gray-700 hover:text-brand-charcoal focus-visible:ring-offset-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  )
                } else {
                  return (
                    <Link
                      key={item.label}
                      href={item.href!}
                      className={`block w-full text-left py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 rounded-md px-2 ${
                        isDark ? 'text-gray-300 hover:text-white focus-visible:ring-offset-black' : 'text-gray-700 hover:text-brand-charcoal focus-visible:ring-offset-white'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                }
              })}

              {/* Mobile Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`flex items-center gap-2 w-full text-left py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 rounded-md px-2 ${
                  isDark ? 'text-gray-300 hover:text-white focus-visible:ring-offset-black' : 'text-gray-700 hover:text-brand-charcoal focus-visible:ring-offset-white'
                }`}
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

              {/* Mobile Quick Message Button */}
              <button
                onClick={() => {
                  setIsEmailModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-2 w-full text-left py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 rounded-md px-2 ${
                  isDark ? 'text-gray-300 hover:text-white focus-visible:ring-offset-black' : 'text-gray-700 hover:text-brand-charcoal focus-visible:ring-offset-white'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Quick Message</span>
              </button>

              <a
                href="/contact"
                className="w-full px-6 py-2.5 bg-brand-orange text-white rounded-lg font-semibold hover:bg-brand-orange-dark transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 focus-visible:ring-offset-black mt-2 inline-block text-center"
              >
                Book Strategy Session
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Email Modal */}
      <QuickEmailModal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
    </motion.header>
  );
}
