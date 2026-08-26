# Mobile UI/UX Audit — calsi.in

**Project:** `E:\calculator app` (React 19 + Vite 8, deployed on Vercel)
**Date:** 26 August 2026
**Widths audited:** 320px, 360px, 390px, 414px, 768px
**Files changed:** 16

---

## Scope

Every route rendered by `src/App.jsx` was audited: the 30 calculator pages, home, guides/articles, credit-card reviews, legal, about/contact, and the programmatic `/emi/:loanSlug` and `/sip/:sipSlug` pages.

No live browser was available in the audit environment, so findings are derived from reading the CSS and JSX rather than from screenshots. That distinction matters for a handful of items and is flagged per finding in the "What could not be verified" section.

---

## Summary of what was wrong

The site was built desktop-first and the mobile layer was thin. Three root causes account for most of the damage:

1. **Undefined CSS custom properties.** Nine tokens were referenced across several files but never declared, so entire blocks of styling silently evaluated to nothing.
2. **Hover-dependent interactions.** The home page's category accordion coupled its expanded state to `:hover`, which never fires on touch — making the primary navigation surface effectively unusable on a phone.
3. **Near-total absence of media queries in the component layer.** Desktop pixel values (fixed widths, 200px grid minimums, 22px numerals) carried straight onto 320px screens and overflowed.

On top of that, mobile-specific ergonomics were missing entirely: no iOS zoom guard, no safe-area handling, no scroll lock behind the drawer, no touch-target floor.

Nothing was restructured. Every fix is additive CSS or a narrowly scoped JSX change, so desktop rendering is unaffected except where a hover rule was intentionally gated behind a pointer query.

---

## Findings and fixes

### 1. Undefined design tokens — severity high, silent

Nine custom properties were used across guides, about, sidebar active states, xirr and swp but never declared in `:root`: `--text-color`, `--brand-color`, `--bg-surface`, `--bg-body`, `--bg-secondary`, `--background-color`, `--primary-glow-md`, `--shadow-md`, `--border-radius-md`.

Any declaration referencing them was dropped by the browser, which is why sidebar active states and several card surfaces looked unstyled. Fixed in `src/index.css` by mapping each to its real theme equivalent under a "Compatibility tokens" comment block. This was the single highest-leverage fix — it repaired styling on pages not otherwise touched.

### 2. iOS Safari auto-zoom on every text input

Every input on the site is under 16px (`.input-wrapper input` is 14px), which makes iOS zoom the whole viewport on focus and leaves the user scrolled sideways. Fixed globally in `index.css` with `input, select, textarea { font-size: 16px !important }` inside `@media (max-width: 768px)` only, so desktop keeps its compact sizing.

### 3. Horizontal overflow from long unbroken strings

Rupee figures like `₹5,81,69,540`, page titles and URLs pushed the document wider than the viewport, producing whole-page horizontal scroll. Fixed with `overflow-wrap: break-word; word-break: break-word` on headings, `p`, `li`, `td`, `th` and `summary` at ≤768px, alongside the existing `overflow-x: hidden` on `html`/`body`/`#root`.

### 4. Touch targets below the 44px minimum

Nav items, FAQ summaries, calculator cards and most buttons were 30–38px tall. Added a `@media (hover: none) and (pointer: coarse)` block setting `min-height: 44px` on `button`, `a.calc-card`, `a.nav-item`, `a.nav-home` and `.faq-item summary`, plus per-component bumps listed under finding 19.

### 5. Tap-highlight flash and missing focus rings

The default blue-grey tap flash fired on every link and button. Suppressed with `-webkit-tap-highlight-color: transparent`. Because that also removes the only visible affordance for keyboard users, an explicit `:focus-visible` outline (2px `--accent-blue`, 2px offset) was added across links, buttons, inputs, selects, textareas and summaries. This is an accessibility improvement, not just cosmetic.

### 6. No reduced-motion path

The site animates on scroll and hover with no `prefers-reduced-motion` escape. Added a block collapsing animation and transition durations to 0.01ms and disabling smooth scroll.

### 7. Floating hamburger with no context — severity high

On calculator pages the only mobile chrome was a floating menu button: no brand, no way back home, no route to the guides. Replaced with a real fixed app bar in `App.jsx` and `App.css`.

`.mobile-topbar` sits at 56px, exposed as `--mobile-topbar-height` so content padding stays in sync. It contains a 44×44 menu toggle, a `CALSI.IN` home link that ellipsizes rather than wraps, and a pill-shaped Guides shortcut. It uses a translucent background with `backdrop-filter: blur(12px)` and respects `env(safe-area-inset-left/right)`. Explicitly hidden in embed mode via `.is-embed .mobile-topbar { display: none !important }` so iframe consumers are unaffected.

### 8. Page content sat under the fixed bar

`.main-content` had no top offset for it. Now `padding: calc(var(--mobile-topbar-height) + 16px) 16px 32px` at ≤768px and `+ 12px / 14px / 24px` at ≤480px, with left/right padding raised through `max(16px, env(safe-area-inset-*))` for notched devices in landscape.

### 9. Background scrolled behind the open drawer

Opening the sidebar left the page underneath scrollable on touch, so closing the drawer dumped the user somewhere unexpected. Fixed in `App.jsx` with a `useEffect` that stores and restores `document.body.style.overflow` while `sidebarOpen` is true. The existing Escape-key and route-change close handlers were already correct and left alone.

### 10. Sidebar had zero media queries

It rendered at its full 270px desktop width on a 320px phone. Now `width: min(84vw, 300px)` at ≤768px, with `height: 100dvh` (falling back to `100vh`) so the drawer isn't cut off by mobile browser chrome, `-webkit-overflow-scrolling: touch`, `overscroll-behavior: contain` to stop scroll chaining into the page behind it, and `padding-bottom: env(safe-area-inset-bottom)` so the last link clears the home indicator. Nav items, group triggers, the home link and the search input all got taller padding and slightly larger type.

### 11. Loans nav group was clipped

`.nav-group.open .nav-group-items` had `max-height: 280px`, which truncated the eight-item Loans group mid-list — items were unreachable, not merely hidden. Raised to 600px.

### 12. Slider label and value fought for one row

`.input-wrapper` has a 140px minimum width, so on a 320–360px screen the label beside it was squeezed to two or three characters. At ≤768px `.input-slider-header` now stacks (`flex-direction: column; align-items: stretch`) and the value pill spans full width with `min-width: 0`, right-aligned. This affects every calculator on the site.

### 13. Slider thumbs too small to grab

20px is below a comfortable fingertip target. At ≤768px the track goes to 6px and both `::-webkit-slider-thumb` and `::-moz-range-thumb` to 26px.

### 14. Result totals overflowed the gradient card

`.result-total-value` at 22px broke out of its container for large figures. Now 19px at ≤768px and 17px at ≤380px, with `text-align: right`, `min-width: 0` and `overflow-wrap: anywhere`. `.result-label` drops to 12.5px at ≤380px.

### 15. Programmatic link grids clipped their text

`PopularLinks.jsx` sets `gridTemplateColumns: repeat(auto-fill, minmax(200px, 1fr))` inline, which at phone widths yields one column with clipped labels. Because the value is inline, class-level overrides need `!important`. Added `.popular-links-grid` and `.popular-link-tile` classes to the JSX plus a `@media (max-width: 768px)` rule forcing two columns at 12px type and 46px tiles, collapsing to one column at ≤380px. Both the home-loan and SIP grids are covered.

### 16. Affiliate widget forced a two-column comparison onto phones

Its grid is inline `1.2fr 1fr`, overflowing horizontally. Collapsed to one column at ≤900px, padding reduced at ≤768px, and the rate tables now scroll horizontally with `min-width: 460px` and `white-space: nowrap` on cells rather than squashing into unreadable columns.

### 17. Home page category cards required hover to open — severity high

`.expanded` styling was coupled to `:hover`, so on touch the accordion either never opened or opened without the visual state. This was the primary navigation surface of the home page.

Un-coupled `.expanded` from `:hover` and moved all hover rules for `.cat-accordion-card`, `-header`, `-icon`, `-title`, `-content` and `-tools-list` into `@media (hover: hover) and (pointer: fine)`. Also rewrote the ≤600px block so cards become compact horizontal rows (`aspect-ratio: auto`, 68px min-height header, 46px icon, 17px title) instead of tall squares, tightened `.calc-card` to 16px padding / 72px min-height, neutralised its hover transform on touch, and stacked `.home-footer-inner`.

### 18. Data tables overflowed with no affordance

The EPF year-by-year table and the credit-card rewards table both exceeded the viewport.

`epf.css` now uses a negative-margin bleed (`margin: 0 -14px; padding: 0 14px`) so the scroll region reaches the screen edges, `min-width: 600px` on the table, and a sticky first (year) column via `position: sticky; left: 0` — so the row reference stays visible while scrolling rates.

For credit cards, `.ccr-rewards-table-scroll` was added with `overflow-x: auto` and `-webkit-overflow-scrolling: touch`, with the table wrapped in `CreditCardReview.jsx`. `.ccr-info-table` rows switch to `display: block` and stack at ≤640px, the hero image's transform is neutralised, and `.ccr-apply-btn` is full-width at 48px min-height.

### 19. Per-page mobile gaps

| File | Fix |
| --- | --- |
| `gst.css` | 52px toggles; one-column CGST/SGST split at ≤400px |
| `xirr.css` | Full-width mode toggle; rate value 40px→34px; full-width delete button; one-column mini cards at ≤400px |
| `swp.css` | 56px timing buttons with 32px right padding so the selected-state dot clears the label |
| `guides.css` | Reduced nested padding; 1.0625rem body copy for long-form reading; nowrap scrolling tables |
| `legal.css` | Body text 13.5px→14.5px; `word-break` on support emails and URLs that overflowed their cards |
| `about.css` | 27px hero heading; 46px contact link |
| `related.css`, `footer.css` | Single-column grids and 12px link gaps at ≤768px |
| `cookie-consent.css` | 46px accept button; ≤480px tightening |
| `EmbedButton.css` | Safe-area padding; FAB hidden below 768px; modal converted to a bottom sheet |

### 20. Breakpoint inconsistency — noted, not resolved

The codebase uses 380, 400, 480, 600, 640, 768, 900, 1100 and 1200px breakpoints across files, which makes behaviour between 600 and 768px unpredictable. New work was kept on 768/480/380 where possible, but the existing breakpoints were not renormalised — that is a larger refactor and would risk regressions that cannot be verified without a browser.

---

## Files changed

`src/index.css` · `src/App.css` · `src/App.jsx` · `src/components/sidebar.css` · `src/components/components.css` · `src/components/PopularLinks.jsx` · `src/components/related.css` · `src/components/footer.css` · `src/components/cookie-consent.css` · `src/components/EmbedButton.css` · `src/pages/home.css` · `src/pages/epf.css` · `src/pages/gst.css` · `src/pages/xirr.css` · `src/pages/swp.css` · `src/pages/guides.css` · `src/pages/legal.css` · `src/pages/about.css` · `src/pages/CreditCardReview.css` · `src/pages/CreditCardReview.jsx`

---

## What could not be verified

Three caveats, stated plainly.

**Visual verification never happened.** There is no Chromium binary in the audit environment and `npx puppeteer browsers install chrome` failed; this step was explicitly skipped. Every finding above is read off the CSS, not observed. Findings 1, 11 and 17 are structural and high-confidence. The pixel-level judgements — the 19px/17px total sizing, the two-column tile grid, the 68px card rows — are reasoned but unmeasured, and are the most likely to need a nudge on a real device.

**The build never ran.** `npm run build` fails in the Linux sandbox with `Cannot find module '../rolldown-binding.linux-x64-gnu.node'`. `node_modules` was installed on Windows and only carries `@rolldown/binding-win32-x64-msvc` (rolldown 1.0.3 under Vite 8.0.16). Installing the Linux binding was blocked by a 403 from the npm registry. This is purely an environment mismatch, not a problem with the project.

**Sandbox lint and git output is unreliable.** `git status` under-reported the edits (epf.css, about.css, swp.css and xirr.css did not appear) because the mount was serving stale, truncated copies of several files. The same cause produced three ESLint "unterminated JSX" parse errors that are false positives — the mount saw `App.jsx` at 172 lines where the real file is 199. Host-side reads confirmed all edits are present and the files are syntactically complete. Re-run lint locally rather than trusting that output.

---

## To finish on Windows

```
cd "E:\calculator app"
npm run build
npm run lint
del ".git\index.lock"
git add -A
git commit -m "fix(mobile): overhaul mobile UI/UX across calculators, home, guides and legal"
git push
```

The `index.lock` deletion could not be done from the sandbox — it is a 0-byte stale lock from 26 Aug 01:43 that blocks all git writes. Vercel's git integration will pick up the push and deploy.

**Two things to check before committing.** About 35 files already had uncommitted modifications beforehand — mostly guides content and several calculator pages, consistent with a `seo_title_updater.cjs` run — so `git add -A` will sweep those in alongside the CSS changes. To separate them, commit the styling files explicitly instead. And `.env` in the project root holds real Gmail credentials (`GMAIL_USER`, `GMAIL_APP_PASSWORD`); it was never opened, but confirm it is covered by `.gitignore` before pushing.
