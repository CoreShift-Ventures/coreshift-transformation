'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { QuickMessageModalV2 } from './QuickMessageModalV2'

const navLinks = [
  { href: '#solutions', label: 'Solutions' },
  { href: '#agents', label: 'Agents in Action' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#faq', label: 'Security & FAQ' },
  { href: '#about', label: 'About' },
]

export function NavigationV2() {
  const [scrolled, setScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`flex items-center justify-between px-6 md:px-8 py-4 bg-white sticky top-0 z-[1000] border-b transition-all duration-300 ${
          scrolled ? 'border-[#eee] shadow-sm' : 'border-transparent'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="font-space text-xl tracking-[-0.03em] no-underline">
          <span className="text-[#1a1a1a] font-normal">Core</span>
          <span className="text-[#4d65ff]">·</span>
          <span className="text-[#1a1a1a] font-semibold">shift</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-7">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex gap-3 items-center">
          {/* Quick Message Icon */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-9 h-9 rounded-lg border border-[#e0e0e0] flex items-center justify-center text-[#666] hover:border-[#1a1a1a] hover:text-[#1a1a1a] hover:bg-[#f8f9fa] transition-all duration-300"
            title="Send a quick message"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </button>

          {/* Get in Touch CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-white rounded text-[10px] font-semibold uppercase tracking-[1.5px] no-underline hover:bg-[#4d65ff] transition-all duration-300"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-[#1a1a1a] hover:bg-[#f5f5f5] transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[999] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-[65px] left-0 right-0 bg-white border-b border-[#eee] shadow-lg animate-slideDown">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    handleNavClick()
                    const targetId = link.href.replace('#', '')
                    const element = document.getElementById(targetId)
                    if (element) {
                      setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }, 100)
                    }
                  }}
                  className="px-6 py-3 text-[14px] font-medium text-[#555] hover:text-[#1a1a1a] hover:bg-[#f8f9fa] transition-colors text-left bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              ))}

              {/* Divider */}
              <div className="mx-6 my-3 border-t border-[#eee]" />

              {/* Mobile CTAs */}
              <div className="px-6 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setIsModalOpen(true)
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 border border-[#e0e0e0] rounded-lg text-[12px] font-semibold text-[#555] hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Quick Message
                </button>

                <Link
                  href="/contact"
                  onClick={handleNavClick}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#1a1a1a] text-white rounded-lg text-[11px] font-semibold uppercase tracking-[1.5px] no-underline hover:bg-[#4d65ff] transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Message Modal */}
      <QuickMessageModalV2
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out forwards;
        }
      `}</style>
    </>
  )
}

function NavLink({ children, href = "#" }: { children: React.ReactNode; href?: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <button
      onClick={handleClick}
      className="text-[13px] font-medium text-[#555] no-underline hover:text-[#1a1a1a] transition-colors cursor-pointer bg-transparent border-none"
    >
      {children}
    </button>
  )
}
