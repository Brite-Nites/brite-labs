# BRI-1648: Complete Next.js Migration

**Issue**: [BRI-1648](https://linear.app/brite-nites/issue/BRI-1648/migrate-landing-page-to-nextjs)
**Status**: Migration scaffold complete — finishing remaining items from the issue plan.
**Branch strategy**: Stays on own branch until merge-ready.

## Decisions

- Case studies: Replace external CDN placeholders with local placeholder images
- Footer content: Skip for now — separate backlog issue created for real content
- Brand colors: Add `--brite-lavender` token rather than mapping to generic `primary`

## Current State

The Next.js 16 scaffold is up with TypeScript, Tailwind v4, App Router, and shadcn/ui.
Components are extracted. CSS is migrated. What remains:

- `brite-hero.tsx` uses `<img>` instead of `next/image`
- `case-studies2.tsx` uses `<img>` with external placeholder images
- Footer email form has no backend (and only has a "Name" field, no email)
- Hardcoded hex colors (`#e3d7ff`, `#f7f4ff`) instead of design tokens
- Three unused component files: `hero186.tsx`, `gallery26.tsx`, `navbar10.tsx`

---

## Tasks

### T1: Migrate hero image to `next/image`
**File**: `src/components/brite-hero.tsx`
**What**:
- Import `Image` from `next/image`
- Replace `<img src="/images/hero/hero-placeholder.avif" ...>` with `<Image>` using `fill` + `sizes` props
- Add `priority` since hero is above the fold
**Verify**: `npm run build` passes, hero renders with image

### T2: Migrate case studies images to `next/image`
**File**: `src/components/case-studies2.tsx`
**What**:
- Replace external CDN placeholder SVGs (`deifkwefumgah.cloudfront.net`) with local placeholder SVGs or AVIF images
- Replace `<img src="/images/logos/Labs Mark.svg">` with `<Image>` component
- All images use `next/image` with proper `width`/`height` or `fill` props
**Verify**: `npm run build` passes, case studies render correctly, no external image requests

### T3: Create newsletter signup Server Action
**Files**: `src/app/actions/newsletter.ts` (new), `src/components/footer31.tsx`
**What**:
- Create Server Action that validates email and returns success/error
- Update footer form: change "Name" input to email input
- Add form state handling with `useActionState` (pending, success, error)
- Action logs submission for now (connect to email service later)
**Verify**: Form submits, shows success/error state, build passes

### T4: Delete unused component files
**Files to delete**:
- `src/components/hero186.tsx`
- `src/components/gallery26.tsx`
- `src/components/navbar10.tsx`
**What**: Confirmed not imported anywhere. Safe to remove.
**Verify**: `npm run build` passes

### T5: Add `--brite-lavender` token and replace hardcoded colors
**Files**: `src/app/globals.css`, `brite-hero.tsx`, `brite-header.tsx`, `side-nav.tsx`, `brite-about.tsx`
**What**:
- Add `--brite-lavender: #e3d7ff` and `--brite-lavender-light: #f7f4ff` tokens to `.dark` in `globals.css`
- Add `--color-brite-lavender` and `--color-brite-lavender-light` to `@theme inline`
- Replace `text-[#e3d7ff]` → `text-brite-lavender` across all components
- Replace `text-[#f7f4ff]` → `text-brite-lavender-light` across all components
**Verify**: Visual appearance unchanged, no raw hex values in components, build passes

---

## Execution Order

```
T4 (cleanup) ─┐
T1 (hero img) ─┼─ independent, can parallelize
T2 (case img) ─┘
     │
T5 (tokens) ← after T1 since hero gets both changes
     │
T3 (email)  ← last, independent
```

T6 (footer content) is deferred to a separate backlog issue.

## Acceptance Criteria

- [ ] All images use `next/image` (no raw `<img>` tags in brite-* components)
- [ ] Email signup form works end-to-end with Server Action
- [ ] No unused component files
- [ ] No hardcoded hex colors in components (`--brite-lavender` token used)
- [ ] `npm run build` succeeds with zero errors
- [ ] Site renders correctly at all breakpoints
