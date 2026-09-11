# SEO Growth, Backlink Strategy, Safety Audit & Vercel Telemetry Checklist for Calsi.in

---

## 1. Safety & Protection Protocol (SEO, AEO, LLMO & Organic Traffic Protection)

Before making any changes to `calsi.in`, we enforce a **Zero-Negative-Impact Protocol**. Every modification is additive and strictly non-breaking.

### A. Traditional SEO Protection (Google, Bing, Yahoo)
* **Zero URL Slug Changes:** All existing calculator routes (`/calculators/sip-calculator`, `/calculators/emi-calculator`, `/calculators/gst-calculator`, etc.) and programmatic routes remain 100% identical. No canonical shifts or broken links.
* **Sitemap & Robots Preservation:** `generate_sitemap.cjs` will continue generating all 200+ programmatic and static routes. `robots.txt` will keep `Allow: /` intact.
* **Metadata Non-Destruction:** Title tags and meta descriptions will be enhanced with high-CTR intent keywords while retaining core brand terms (`calsi.in`, `SIP Calculator`, `AY 2026-27`).

### B. AEO (Answer Engine Optimization) & Snippet Protection
* **Structured Schema Additions (Additive Only):** We add `FAQPage` and `SoftwareApplication` JSON-LD schema alongside existing microdata without altering any existing content structures.
* **Heading & Snippet Preservation:** Existing `<h1>`, `<h2>`, `<h3>` heading hierarchies and direct summary paragraphs are preserved so Google Featured Snippets and People Also Ask (PAA) boxes remain anchored.

### C. LLMO (Large Language Model & AI Search Optimization) Protection
* **Preserving AI Bot Access:** `robots.txt` strictly permits `GPTBot`, `ClaudeBot`, `PerplexityBot`, and `GoogleOther` / `Google-Extended`.
* **Preserving Context Files:** `public/llms.txt` and `<meta name="llm-context">` remain active to ensure ChatGPT, Perplexity, Claude, Gemini, and SearchGPT quote `calsi.in` with full authority on Indian financial formulas.

### D. Pre-Deployment Verification Checklist
1. **Pre-build Validation:** Run local build and `generate_sitemap.cjs` to confirm 0 compilation errors.
2. **Schema Audit:** Test generated HTML via Google Rich Results Test & Schema Markup Validator.
3. **Vercel Preview Deploy:** Review staging links on Vercel preview environments before promoting to production.

---

## 2. Complete List of Required Information & Screenshots from Vercel

To analyze system bottlenecks, crawler status, and Core Web Vitals, please capture and provide screenshots or data from the following **4 Vercel Dashboard sections**:

### Section 1: Vercel Speed Insights (Core Web Vitals)
* **Where to find:** Vercel Dashboard $\rightarrow$ Select Project (`calsi`) $\rightarrow$ **Speed Insights** tab.
* **Required Screenshots / Metrics:**
  1. **Mobile & Desktop Summary Cards:**
     * **LCP (Largest Contentful Paint)** — target: $< 2.5\text{s}$
     * **INP (Interaction to Next Paint)** — target: $< 200\text{ms}$
     * **CLS (Cumulative Layout Shift)** — target: $< 0.1$
     * **FCP (First Contentful Paint)** & **TTFB (Time to First Byte)**
  2. **Page-by-Page Performance Breakdown Table:**
     * Screenshot of top routes (`/`, `/calculators/sip-calculator`, `/calculators/emi-calculator`, `/calculators/gst-calculator`).

---

### Section 2: Vercel Web Analytics (Traffic & Performance)
* **Where to find:** Vercel Dashboard $\rightarrow$ Select Project $\rightarrow$ **Analytics** tab.
* **Required Screenshots / Metrics:**
  1. **Top Pages / Routes:** Screenshot showing top 10 most visited paths over 7 days / 28 days.
  2. **Referrers & Countries:** Breakdown of traffic sources (Organic, Direct, Referral).
  3. **Device & Browser Breakdown:** Ratio of Mobile vs. Desktop visitors.

---

### Section 3: Vercel Observability & Logs (Crawler & Error Telemetry)
* **Where to find:** Vercel Dashboard $\rightarrow$ Select Project $\rightarrow$ **Logs** tab (or **Observability** tab).
* **Required Screenshots / Filters:**
  1. **4xx and 5xx Error Log Filter:**
     * Filter by `Status Code: 400-599`. Screenshot any recurring 404s or 500 errors.
  2. **Search Crawler Bot Activity Filter:**
     * Search filter for `Googlebot` or `GPTBot` or `PerplexityBot`.
     * Check if bots are receiving `200 OK` responses or getting blocked/throttled.
  3. **Slow Server / Function Execution Duration Logs:**
     * Check if any edge function or static route has high latency ($> 500\text{ms}$).

---

### Section 4: Project Settings & Deployment Status
* **Where to find:** Vercel Dashboard $\rightarrow$ **Deployments** $\rightarrow$ Click Latest Production Deployment.
* **Required Data:**
  1. **Build Logs:** Screenshot or copy-paste of the build output summary (indicating static asset sizes and bundle chunk warnings).
  2. **Headers & Cache Verification:** Screenshot of response headers for `index.html` (checking `cache-control` and `Strict-Transport-Security`).

---

## 3. Action Plan to Increase Impressions & Move Rankings Up

### A. Title Tag & Meta Description Optimization (CTR Boost)
* **Keyword Intent Matching:** Update title tags across tool pages to target high-intent keywords + current year + user benefit.
  * *Example:* `SIP Calculator 2026 - Calculate Returns & SWP | Calsi.in`
  * *Example:* `GST Calculator India - Exclusive & Inclusive Tax Breakdown`
* **Rich Snippets & Schema Markup:** Add `SoftwareApplication` and `FAQPage` schema on every calculator page.

### B. Prerendering & Technical Crawlability
* Ensure static HTML prerendering so Googlebot instantly parses text without waiting for client JS execution.

### C. Internal Linking & Content Hubs
* Link related calculators together logically:
  * **Investment Hub:** SIP $\leftrightarrow$ Lumpsum $\leftrightarrow$ SWP $\leftrightarrow$ Mutual Fund Returns.
  * **Taxation Hub:** GST $\leftrightarrow$ Income Tax $\leftrightarrow$ HRA.

---

## 4. Backlink Acquisition Strategy

| Strategy | Action | Target Impact |
| :--- | :--- | :--- |
| **1. "Embed This Calculator" Widget** | Add copyable `<iframe>` code box on popular calculators so finance blogs embed your tool. | Passive Authority Backlinks |
| **2. Free Tool Directories** | Submit `calsi.in` to Product Hunt, AlternativeTo, SaaSHub, WebWiki, Crunchbase. | Instant DA Boost |
| **3. Financial & CA Blogger Outreach** | Offer free guest articles to personal finance blogs and CA portals. | High Relevance Links |
| **4. Community Q&A Outreach** | Answer financial queries on Reddit (`r/IndiaInvestments`) & Quora with tool references. | Targeted Referral Traffic |
