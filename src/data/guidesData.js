import { lazy } from 'react';

// Lazy load the actual content components to keep the main bundle small
const OldVsNewTaxRegime = lazy(() => import('../content/guides/OldVsNewTaxRegime').then(m => ({ default: m.OldVsNewTaxRegime })));
const HowToStartSIP = lazy(() => import('../content/guides/HowToStartSIP').then(m => ({ default: m.HowToStartSIP })));

export const guidesData = [
  {
    id: 'old-vs-new-tax-regime-2026',
    slug: 'old-vs-new-tax-regime-2026',
    title: 'Old vs New Tax Regime 2025-26: Which is Better for You?',
    excerpt: 'A comprehensive breakdown of the income tax slabs for FY 2025-26. Discover whether you should stick to the old regime with deductions or switch to the new simplified regime.',
    date: '2026-06-22',
    category: 'Tax Planning',
    readTime: '6 min read',
    component: OldVsNewTaxRegime,
    seoTitle: 'Old vs New Tax Regime 2026: Calculator & Comparison',
    seoDescription: 'Confused between the old and new tax regime for FY 2025-26? Use our guide and calculator to find out exactly how much tax you can save.',
  },
  {
    id: 'how-to-start-sip-investment',
    slug: 'how-to-start-sip-investment',
    title: 'How to Start a SIP: The Ultimate Guide for Beginners',
    excerpt: 'Everything you need to know about Systematic Investment Plans (SIPs). Learn how compounding works, which mutual funds to pick, and how to start with just ₹500.',
    date: '2026-06-20',
    category: 'Investing',
    readTime: '5 min read',
    component: HowToStartSIP,
    seoTitle: 'How to Start a SIP Investment in India (2026 Guide)',
    seoDescription: 'Learn how to start a SIP in mutual funds. Complete beginner guide covering compounding, fund selection, and step-by-step investment process.',
  }
];
