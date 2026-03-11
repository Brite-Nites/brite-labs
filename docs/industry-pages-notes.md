# Industry Vertical Landing Pages - Project Notes

## Overview

This document captures all strategic decisions, content planning, and implementation notes for the Brite Labs industry vertical landing pages.

**Related Linear Issues:**
- BRN-331: Industry Vertical Landing Pages (parent)
- BRN-334: T1 Spec (section structure)
- BRN-335: T2 Spec (DEFERRED)
- BRN-337: Build T1 Prototype

---

## Strategic Decisions

### Template System

| Decision | Choice | Rationale |
|----------|--------|-----------|
| T1 Structure | Hybrid emotional hook | Light problem framing on T1, deeper exploration reserved for discovery deck |
| T2 Pages | DEFERRED | Service offers not fully defined yet; consolidated into T1 for now |
| Homepage Relationship | Multi-path access | Nav dropdown, homepage section, and direct links all point to verticals |
| Content Depth | Hybrid | More than just credibility, but not exhaustive—save depth for sales |
| Gallery Approach | Industry-filtered | Only show work relevant to that specific vertical |
| CTA Strategy | Primary repeated + fallback | "Book a Discovery Call" as primary, portfolio view as secondary |
| Process Section | Universal 4-step | Discovery → Design → Install → Support (same across all verticals) |
| Template Variations | 2-3 for variety | No formal A/B testing at launch, just visual variety |

### Design Direction

- **Light mode** for industry pages (vs dark mode on main site)
- **Background:** Cool ivory `oklch(0.97 0.005 240)` / `#f4f5f7`
- **NO pixel font** (PP NeueBit) on industry pages
- **Fonts:** MagdaClean (eyebrows/tags), Roobert (headings), Geist (body)
- **No rounded corners** - same design language as main site
- **Images:** AVIF format, resized for web

---

## T1 Section Structure (9 Sections)

1. **Hero** - Full-width image, headline, subhead, primary CTA
2. **Credibility Bar** - Client logos + key stats
3. **Problem Frame** - Light pain point acknowledgment (3 points)
4. **Services Overview** - What we offer cards (placeholder for future T2 links)
5. **Gallery** - Industry-filtered portfolio images
6. **Process** - Universal 4-step visualization
7. **Social Proof** - Case study format and/or testimonials
8. **CTA** - Final conversion section with primary + secondary CTAs

---

## Industry Verticals

### Target Verticals
1. **Universities** ← Prototype built
2. **Municipalities**
3. **HOAs / Residential Communities**
4. **Casinos / Hospitality**

### URL Structure
```
brightlabs.io/universities
brightlabs.io/municipalities
brightlabs.io/hoas
brightlabs.io/casinos
```

---

## Universities Page - Content Brief

### Hero
- **Eyebrow:** Holiday Lighting for Universities
- **Headline:** Inclusive Holiday Displays That Support Student Wellbeing
- **Subhead:** We create professionally designed displays that support student wellbeing, celebrate campus diversity, and build school spirit—without burdening your facilities team during the busiest time of year.

### Credibility
- **Clients:** GWU, UMD, Manhattan College, BYU (logos pending)
- **Stats:** 10+ Campus Projects, 100% On-Time Delivery

### Problem Frame
1. **DEI & Inclusion Concerns** - Navigating diverse religious/cultural expectations
2. **Student Wellbeing During Finals** - Holiday season + finals stress
3. **Facilities Team Bandwidth** - Already stretched thin

### Services (8 offers)
1. Unity Display Design
2. Student Wellbeing Lighting
3. School Spirit Integration
4. Common Area Transformation
5. Outdoor Campus Displays
6. Full-Service Installation
7. Flexible Scheduling
8. Safety & Compliance

### Gallery Images
Located in `/public/images/universities/`:
- `_DSC5660-HDR.avif`
- `_DSC5669-HDR.avif`
- `_DSC5681-HDR.avif`
- `_DSC5723-HDR.avif`
- `_DSC5825-HDR.avif`
- `_DSC5843-HDR.avif`
- `DSCF6460.avif`
- `DSCF6472.avif`
- `DSCF6507.avif`

### Process (Universal)
1. Discovery - Learn about campus, traditions, goals
2. Design - Custom design reflecting campus identity
3. Install - Professional installation, zero disruption
4. Support - Ongoing maintenance + removal

### Social Proof
- Case study format implemented
- **Testimonials:** PENDING - need to gather from Maxwell

### CTA
- **Headline:** Ready to Light Up Your Campus?
- **Primary:** Book a Discovery Call
- **Secondary:** View Our Portfolio

---

## Component Architecture

All industry components live in `src/components/industry/`:

```
industry/
├── index.ts                    # Barrel export
├── industry-hero.tsx           # Full-width hero with bg image
├── industry-credibility-bar.tsx # Logos + stats
├── industry-problem-frame.tsx  # Pain points grid
├── industry-services.tsx       # Services cards
├── industry-gallery.tsx        # Image gallery
├── industry-process.tsx        # 4-step process
├── industry-social-proof.tsx   # Case study + testimonials
└── industry-cta.tsx            # Final CTA (inverted colors)
```

### Component Props Pattern

All components follow a consistent pattern:
- Optional `eyebrow` prop with sensible default
- Required content arrays/objects passed as props
- Responsive design built-in (mobile-first)
- Uses existing design system tokens

---

## Light Mode Implementation

### CSS Variables (globals.css)

```css
@custom-variant light (&:is(.light *));

.light {
  --background: oklch(0.97 0.005 240);
  --foreground: oklch(0.12 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.12 0 0);
  --primary: oklch(0.12 0 0);
  --primary-foreground: oklch(0.97 0.005 240);
  --secondary: oklch(0.92 0.005 240);
  --muted: oklch(0.94 0.005 240);
  --muted-foreground: oklch(0.4 0 0);
  --border: oklch(0.88 0.005 240);
  /* ... etc */
}
```

### Route-Level Application

Light mode is applied via layout wrapper:

```tsx
// src/app/universities/layout.tsx
export default function UniversitiesLayout({ children }) {
  return (
    <div className="light bg-background text-foreground min-h-screen">
      {children}
    </div>
  );
}
```

---

## Pending Items

### Content Needed
- [ ] Client logos (GWU, UMD, Manhattan, BYU) as SVGs
- [ ] Testimonials from university clients
- [ ] Finalize case study stats/details

### Future Work
- [ ] Build municipalities page (use same components, different content)
- [ ] Build HOAs page
- [ ] Build casinos page
- [ ] Add navigation links from homepage
- [ ] Add industry dropdown to main nav
- [ ] Consider template variations for visual variety

### T2 Pages (Deferred)
Revisit when:
- Service offers are clearly defined
- Sales process needs deeper content
- Specific offers need their own landing pages

---

## Reference Materials

### Handbook Playbooks
Located in adjacent repo `brite-nites/handbook/`:
- `marketing/playbooks/municipalities.md`
- `marketing/playbooks/hoas.md`
- `marketing/playbooks/universities.md`
- `marketing/playbooks/casinos.md`

### Image Processing Script
`scripts/process-images.mjs` - Batch converts images to AVIF at web resolution

Usage:
```bash
node scripts/process-images.mjs
```

---

## Quick Start

To continue development:

```bash
# Start dev server
npm run dev

# View universities page
open http://localhost:3000/universities
```

To add another vertical:
1. Create content object following universities pattern
2. Create `src/app/[vertical]/layout.tsx` with light mode wrapper
3. Create `src/app/[vertical]/page.tsx` importing industry components
4. Process images to `/public/images/[vertical]/`
