# CoreShift Logo Implementation Brief
## For Claude Code — cshift.io

---

## Asset Files (place in /public/logo/)

| File | Use |
|------|-----|
| `logo-mark-navy.svg` | Primary mark — nav, light backgrounds |
| `logo-mark-orange.svg` | Reverse — dark sections, CTAs |
| `logo-mark-white.svg` | White bg — cards, bordered contexts |
| `logo-mark-mono-white.svg` | Mono — dark photo overlays, footers |
| `favicon.svg` | Browser favicon (also generate .ico) |
| `wordmark-light.svg` | Full lockup — light nav |
| `wordmark-dark.svg` | Full lockup — dark nav/footer |

---

## Implementation Tasks

### 1. Favicon
```html
<!-- In <head> -->
<link rel="icon" type="image/svg+xml" href="/logo/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon-32.png">
```

### 2. Nav Logo (replace current "Core·shift" text)
```jsx
// Replace existing nav logo with:
<img 
  src="/logo/logo-mark-navy.svg" 
  alt="CoreShift" 
  width="36" 
  height="36"
  className="flex-shrink-0"
/>
<span className="font-space text-[22px] tracking-tight">
  <span className="font-normal text-[#0F172A]">Core</span>
  <span className="font-bold text-[#0F172A]">shift</span>
</span>
```

### 3. Dark Nav / Footer
```jsx
// Use orange variant on dark backgrounds:
<img src="/logo/logo-mark-orange.svg" alt="CoreShift" width="36" height="36"/>
<span className="font-space text-[22px] tracking-tight text-white">
  <span className="font-normal">Core</span>
  <span className="font-bold">shift</span>
</span>
```

### 4. OG Image / LinkedIn Cover
Use `logo-mark-navy.svg` at 80×80px on dark navy (#0F172A) background.

---

## Brand Colours (unchanged)
- Navy: `#0F172A`
- Orange: `#F97316`  
- White: `#FFFFFF`
- Blue (interactive): `#2D6FE8`
- Green (live): `#22C98A`

## Font
- Space Grotesk (already loaded on site)
- Core: weight 400
- shift: weight 700
- Letter spacing: -0.03em

---

## SVG Inline Code (for Claude Code — copy-paste ready)

### Primary Mark (nav size, inline SVG):
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="36" height="36">
  <rect width="120" height="120" rx="24" fill="#0F172A"/>
  <path d="M22 32 L52 60 L22 88 L36 88 L66 60 L36 32 Z" fill="#F97316"/>
  <rect x="72" y="36" width="14" height="48" rx="2" fill="#FFFFFF"/>
</svg>
```

### Favicon (32px inline):
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="7" fill="#0F172A"/>
  <path d="M5.5 8 L14 16 L5.5 24 L9.5 24 L18 16 L9.5 8 Z" fill="#F97316"/>
  <rect x="19.5" y="9" width="4" height="14" rx="1" fill="#FFFFFF"/>
</svg>
```
