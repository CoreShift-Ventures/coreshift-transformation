# V3.1 Style Guide - Based on V2 (LOCKED)

## ⚠️ CRITICAL: Never Deviate from V2 Styling

All V3.1 components MUST use V2's exact styling. Only content changes, not styling.

---

## Typography

### Headings
```tsx
// Main page heading (h2)
className="text-2xl md:text-3xl font-bold mb-4"

// Large hero heading (h1)
className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl leading-tight font-bold tracking-tight mb-6 px-4"

// Card heading (h3)
className="text-lg font-bold"

// Section subheading
className="text-xl font-semibold mb-4"
```

### Body Text
```tsx
// Regular body text
className="text-sm"  // Default for most body text

// Larger body text (descriptions, paragraphs)
className="text-sm sm:text-base"

// Small text (labels, metadata)
className="text-xs"
```

### Special Text
```tsx
// Rotating hero text - LARGE ORANGE
className="text-xl md:text-2xl xl:text-3xl font-semibold text-[#ec5f2b] leading-[1.3] tracking-tight text-center"

// Sub-headline
className="text-sm sm:text-base max-w-3xl mx-auto mb-10 font-light leading-relaxed px-4"
```

---

## Colors

### Brand Colors (Use exact values)
```css
--brand-orange: #ec5f2b
--brand-orange-dark: #d94f1f
--brand-charcoal: #272624
--brand-gray: #5a5856
```

### Usage
```tsx
// Primary CTA button
className="bg-brand-orange hover:bg-brand-orange-dark"

// Headings (dark mode)
isDark ? 'text-gray-100' : 'text-brand-charcoal'

// Body text (dark mode)
isDark ? 'text-gray-400' : 'text-brand-gray'

// Card text
isDark ? 'text-gray-300' : 'text-gray-700'

// Accent/highlight
className="text-[#ec5f2b]"
```

---

## Spacing

### Section Padding
```tsx
// Standard section
className="py-16 px-6"

// Hero section (full height)
className="min-h-screen px-6"
```

### Container
```tsx
className="max-w-7xl mx-auto"
```

### Component Spacing
```tsx
// Section header margin bottom
className="mb-10"

// Between elements
className="mb-4"  // Standard gap
className="mb-6"  // Larger gap
className="mb-8"  // Even larger
```

---

## Cards

### Standard Card
```tsx
className={`rounded-2xl p-6 border transition-all hover:scale-[1.02] cursor-pointer ${
  isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
} shadow-lg`}
```

### Card Icon Container
```tsx
className="w-12 h-12 bg-gradient-to-br from-[#ec5f2b] to-[#d94f1f] rounded-xl shadow-lg flex items-center justify-center"
```

---

## Buttons

### Primary CTA
```tsx
className="px-8 py-4 bg-brand-orange text-white rounded-lg font-semibold text-base hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
```

### Secondary Button
```tsx
className={`px-8 py-4 rounded-lg font-semibold text-base transition-all hover:scale-105 shadow-md border whitespace-nowrap ${
  isDark
    ? 'bg-gray-900 hover:bg-gray-800 border-gray-700 text-gray-100'
    : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-900'
}`}
```

### Tab Button (Active)
```tsx
className="px-6 py-3 rounded-lg font-semibold text-sm bg-brand-orange text-white shadow-lg"
style={{ boxShadow: '0 10px 40px -10px rgba(236, 95, 43, 0.3)' }}
```

### Tab Button (Inactive)
```tsx
className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
  isDark
    ? 'bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-100'
    : 'bg-white hover:bg-gray-50 border border-gray-200 text-gray-900'
}`}
```

---

## Animations

### Framer Motion - Fade In on Scroll
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, delay: index * 0.1 }}
```

### Rotating Text Animation
```tsx
// Container
className="mb-10 px-4 min-h-[90px] md:min-h-[85px] flex items-center justify-center"

// AnimatePresence with blur
<AnimatePresence mode="wait">
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
```

### Hover Effects
```tsx
// Card hover
hover:scale-[1.02]

// Button hover
hover:scale-105

// Smooth transitions
transition-all duration-300
```

---

## Grid Layouts

### 2-Column Grid
```tsx
className="grid md:grid-cols-2 gap-4"
```

### 3-Column Grid
```tsx
className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
```

---

## Dark Mode Pattern

### Always use this pattern:
```tsx
const { theme } = useTheme()
const [mounted, setMounted] = useState(false)

useEffect(() => {
  setMounted(true)
}, [])

const isDark = mounted && theme === 'dark'
```

### Conditional Classes:
```tsx
className={`... ${isDark ? 'bg-black' : 'bg-white'}`}
```

---

## Component Structure Example

```tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export function YourComponent() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <section className={`py-16 px-6 relative ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
          >
            Your Heading
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-sm max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}
          >
            Your description text
          </motion.p>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Cards go here */}
        </div>
      </div>
    </section>
  );
}
```

---

## Icons

### From lucide-react
```tsx
import { Target, Rocket, TrendingUp } from 'lucide-react'

// Standard icon size in cards
<Icon className="w-6 h-6 text-white" />

// Small icons
<Icon className="w-4 h-4" />

// Large icons
<Icon className="w-12 h-12" />
```

---

## Shadows

### Card Shadow
```tsx
shadow-lg
```

### Button Shadow
```tsx
shadow-lg hover:shadow-xl
```

### Orange Glow Shadow (for active states)
```tsx
style={{ boxShadow: '0 10px 40px -10px rgba(236, 95, 43, 0.3)' }}
```

---

## Border Radius

### Cards
```tsx
rounded-2xl  // Main cards
rounded-xl   // Icon containers
rounded-lg   // Buttons, smaller elements
```

---

## Gradients

### Icon/Button Gradients
```tsx
bg-gradient-to-br from-[#ec5f2b] to-[#d94f1f]
```

### Background Gradients (avoid unless in V2)
Only use if present in V2 component being replicated.

---

## Focus States

### All Interactive Elements
```tsx
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-[#ec5f2b]
focus-visible:ring-offset-2
focus-visible:ring-offset-white  // or focus-visible:ring-offset-black for dark mode
```

---

## DO NOT

❌ Use purple/blue gradients (that's old - use orange only)
❌ Use large font sizes beyond xl:text-5xl
❌ Add extra animations not in V2
❌ Change spacing values
❌ Use different border radius values
❌ Change shadow values
❌ Add glassmorphism effects not in V2
❌ Use backdrop-blur except where V2 uses it (nav, modals)

---

## ALWAYS

✅ Copy exact className strings from V2 components
✅ Use brand-orange (#ec5f2b) as primary color
✅ Maintain V2's typography scale
✅ Use same animation patterns
✅ Support dark mode with same pattern
✅ Keep spacing consistent
✅ Match V2's hover effects exactly
✅ Use same Framer Motion configurations

---

## Testing Checklist

Before saying a component is "done":

- [ ] Matches V2 typography exactly
- [ ] Uses correct brand colors
- [ ] Dark mode works correctly
- [ ] Animations match V2 timing/easing
- [ ] Spacing matches V2
- [ ] Hover effects work the same
- [ ] Mobile responsive (same as V2)
- [ ] No purple/blue colors anywhere
- [ ] Focus states work correctly
- [ ] Shadows match V2

---

## Reference Components

Always reference these V2 components for styling:

1. `TransformationHeroV2.tsx` - Hero patterns
2. `CoreShiftDifference.tsx` - Card layouts
3. `TransformationPaths.tsx` - Tab patterns
4. `Navigation.tsx` - Navigation/header patterns

**GOLDEN RULE: When in doubt, copy from V2 exactly.**
