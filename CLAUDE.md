# CoreShift Landing Page - Project Context

## Project Overview
**CoreShift (cshift.io)** - A B2B SaaS landing platform for AI-powered business transformation services.

## Tech Stack
- **Framework**: Next.js 15.5.7 + React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + PostCSS
- **Animations**: Framer Motion 12, Lenis (smooth scroll)
- **Backend**: Supabase (database), Resend (email)
- **Fonts**: Inter, JetBrains Mono, Space Grotesk

## Directory Structure
```
app/                    # Next.js App Router
├── actions/           # Server actions (contact.ts, quick-message.ts)
├── api/               # API routes
└── [pages]/           # about, advisory, audit, blueprint, calculator,
                       # command-center, contact, demo, pricing, showcase, etc.

components/            # 118+ React components
├── v2/               # Main V2 components (current production design)
├── landing/          # Landing page components
├── landing-v1..v4/   # Design iterations (A/B testing)
├── forms/            # DemoQualificationForm, InstantAccessForm
└── ui/               # Base UI components

lib/                   # Utilities (supabase.ts, email-templates.tsx)
config/                # brand.ts (colors, fonts, gradients, demo URLs)
public/                # Static assets (logos, screenshots, animations)
```

## Key Patterns
- **Server Actions**: Form handling via `'use server'` functions
- **Intent Routing**: URL params like `?intent=blueprint` pre-fill forms
- **Dual Email System**: User confirmation + admin notification via Resend
- **Theme Support**: Light/dark mode via next-themes

## Dev Commands
```bash
npm run dev          # Start dev server on port 3003
npm run build        # Production build
```

## Current Status
- **Rebuild in progress**: Site is being rebuilt with new design/structure
- **Branch strategy**: Main branch contains current production, new work may go to feature branches

## Products Showcased
- CS Engine, LeadIQ, FundView, ClaimFlow, WorkMate

## Brand
- Primary domain: cshift.io
- Colors: Orange-based palette with charcoal/cream neutrals
- See `config/brand.ts` for full brand system
