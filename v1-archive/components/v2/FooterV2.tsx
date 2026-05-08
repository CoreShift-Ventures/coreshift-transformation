'use client'

import Link from 'next/link'

const footerLinks = {
  platform: [
    { label: 'Agents in Action', href: '#agents' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'How It Works', href: '#how-it-works' },
  ],
  industries: [
    { label: 'Manufacturing', href: '#solutions' },
    { label: 'Automotive', href: '#solutions' },
    { label: 'Finance', href: '#solutions' },
    { label: 'VC & PE', href: '#solutions' },
    { label: 'B2B SaaS', href: '#solutions' },
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Case Studies', href: '#agents' },
  ],
}

export function FooterV2() {
  return (
    <footer className="py-16 px-8 bg-[#1a1a1a] text-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_repeat(4,1fr)] gap-8 md:gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <img
                src="/logos/New_Logo/coreshift-logo-assets/logo-mark-orange.svg"
                alt="CoreShift"
                width="36"
                height="36"
                className="flex-shrink-0"
              />
              <span className="font-space text-[22px] tracking-[-0.03em]">
                <span className="font-normal text-white">Core</span>
                <span className="font-bold text-white">shift</span>
              </span>
            </div>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-[260px]">
              Agents as a Service · Built for enterprise operations · Deployed on your infrastructure
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-space text-[10px] font-semibold uppercase tracking-[1.5px] mb-4 text-white/60">Platform</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[13px] text-white/40 no-underline hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-space text-[10px] font-semibold uppercase tracking-[1.5px] mb-4 text-white/60">Industries</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[13px] text-white/40 no-underline hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-space text-[10px] font-semibold uppercase tracking-[1.5px] mb-4 text-white/60">Company</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[13px] text-white/40 no-underline hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-space text-[10px] font-semibold uppercase tracking-[1.5px] mb-4 text-white/60">Resources</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[13px] text-white/40 no-underline hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10">
          <p className="text-[11px] text-white/30 text-center md:text-left">
            © 2026 CoreShift Ventures LLP. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a
              href="mailto:contact@cshift.io"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#4d65ff] hover:text-white transition-all"
              title="Email us"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/coreshift-ventures"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#4d65ff] hover:text-white transition-all"
              title="LinkedIn"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
