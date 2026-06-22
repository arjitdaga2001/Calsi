import { lazy } from 'react';

// Lazy load the actual content components to keep the main bundle small
const OldVsNewTaxRegime = lazy(() => import('../content/guides/OldVsNewTaxRegime').then(m => ({ default: m.OldVsNewTaxRegime })));
const HowToStartSIP = lazy(() => import('../content/guides/HowToStartSIP').then(m => ({ default: m.HowToStartSIP })));
const HomeLoanPrepayment = lazy(() => import('../content/guides/HomeLoanPrepayment').then(m => ({ default: m.HomeLoanPrepayment })));
const RetirementCorpus = lazy(() => import('../content/guides/RetirementCorpus').then(m => ({ default: m.RetirementCorpus })));
const XIRRvsCAGR = lazy(() => import('../content/guides/XIRRvsCAGR').then(m => ({ default: m.XIRRvsCAGR })));
const CreditCardDebt = lazy(() => import('../content/guides/CreditCardDebt').then(m => ({ default: m.CreditCardDebt })));
const NPSvsEPF = lazy(() => import('../content/guides/NPSvsEPF').then(m => ({ default: m.NPSvsEPF })));

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
  },
  {
    id: 'home-loan-prepayment-mathematics',
    slug: 'home-loan-prepayment-mathematics',
    title: 'The Mathematics of Home Loan Prepayment: When to Pay Off Early vs Invest',
    excerpt: 'An analytical approach to debt amortization. Discover when prepaying your home loan makes economic sense and when the opportunity cost of lost equity returns is too high.',
    date: '2026-06-22',
    category: 'Loans & Debt',
    readTime: '7 min read',
    component: HomeLoanPrepayment,
    seoTitle: 'Home Loan Prepayment Calculator & Strategy Guide',
    seoDescription: 'Mathematical breakdown of home loan prepayments. Should you pay off your home loan early or invest in mutual funds? Read the economic analysis.',
  },
  {
    id: 'retirement-corpus-planning',
    slug: 'retirement-corpus-planning',
    title: 'Debunking the "Number": A Quantitative Approach to Retirement Planning',
    excerpt: 'Why the 4% rule fails in high-inflation emerging markets, and how to rigorously calculate the exact terminal corpus required to sustain your lifestyle indefinitely.',
    date: '2026-06-21',
    category: 'Retirement',
    readTime: '6 min read',
    component: RetirementCorpus,
    seoTitle: 'How to Calculate Your Required Retirement Corpus (2026)',
    seoDescription: 'A quantitative guide to retirement planning. Learn how inflation impacts your purchasing power and how to calculate the exact retirement corpus you need.',
  },
  {
    id: 'xirr-vs-cagr-explained',
    slug: 'xirr-vs-cagr-explained',
    title: 'XIRR vs CAGR: Understanding the True Yield of Asymmetric Cash Flows',
    excerpt: 'Stop miscalculating your portfolio returns. Learn why Extended Internal Rate of Return (XIRR) is the only mathematically rigorous metric for evaluating SIPs and active investments.',
    date: '2026-06-19',
    category: 'Investing',
    readTime: '5 min read',
    component: XIRRvsCAGR,
    seoTitle: 'XIRR vs CAGR: Which Return Metric is Better for Mutual Funds?',
    seoDescription: 'Understand the difference between XIRR and CAGR. Learn why XIRR is the most accurate way to calculate returns on SIPs and irregular investments.',
  },
  {
    id: 'credit-card-debt-compounding',
    slug: 'credit-card-debt-compounding',
    title: 'The Compounding Trap: Deconstructing Credit Card Debt Strategies',
    excerpt: 'An economic teardown of revolving credit. Understand the daily compounding mechanics of credit card debt and the mathematical necessity of immediate restructuring.',
    date: '2026-06-18',
    category: 'Loans & Debt',
    readTime: '5 min read',
    component: CreditCardDebt,
    seoTitle: 'How to Escape Credit Card Debt: EMI & Restructuring Guide',
    seoDescription: 'Analyze the devastating effects of 40% APR credit card debt. Learn restructuring strategies and why converting outstanding balances to EMIs is critical.',
  },
  {
    id: 'nps-vs-epf-tax-arbitrage',
    slug: 'nps-vs-epf-tax-arbitrage',
    title: 'Tax Arbitrage in Retirement Vehicles: NPS vs EPF Analysis',
    excerpt: 'A comparative analysis of the sovereign-backed EPF against the market-linked NPS. Discover how to structurally combine both to maximize tax efficiency and long-term yield.',
    date: '2026-06-15',
    category: 'Tax Planning',
    readTime: '6 min read',
    component: NPSvsEPF,
    seoTitle: 'NPS vs EPF: Which is Better for Retirement & Tax Saving?',
    seoDescription: 'Comprehensive comparison of NPS and EPF. Evaluate the EEE vs EET tax structures, market-linked equity returns vs guaranteed debt yields, and plan your retirement allocation.',
  }
];
