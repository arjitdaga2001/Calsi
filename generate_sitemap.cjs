const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://calsi.in';

// 1. Static Routes
const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-conditions',
  '/articles',
  '/calculators/sip-calculator',
  '/calculators/lumpsum-calculator',
  '/calculators/emi-calculator',
  '/calculators/fd-calculator',
  '/calculators/rd-calculator',
  '/calculators/swp-calculator',
  '/calculators/mf-returns-calculator',
  '/calculators/ssy-calculator',
  '/calculators/ppf-calculator',
  '/calculators/epf-calculator',
  '/calculators/gst-calculator',
  '/calculators/xirr-calculator',
  '/calculators/home-loan-calculator',
  '/calculators/car-loan-calculator',
  '/calculators/personal-loan-calculator',
  '/calculators/bike-loan-calculator',
  '/calculators/credit-card-emi-calculator',
  '/calculators/nps-calculator',
  '/calculators/income-tax-calculator',
  '/calculators/retirement-calculator',
  '/calculators/term-insurance-calculator',
  '/calculators/health-insurance-calculator',
  '/calculators/ulip-calculator',
  '/calculators/ltcg-calculator',
  '/calculators/inflation-calculator'
];

// 2. Programmatic EMI Routes
const homeLoanAmounts = [10, 15, 20, 25, 30, 40, 50, 75]; // Lakhs
const homeLoanTenures = [10, 15, 20]; // Years
const emiRoutes = [];
homeLoanAmounts.forEach(amount => {
  homeLoanTenures.forEach(tenure => {
    emiRoutes.push(`/emi/${amount}-lakh-home-loan-${tenure}-years`);
  });
});

// 3. Programmatic SIP Routes
const sipAmounts = [1000, 2000, 5000, 10000, 15000, 20000, 25000, 50000];
const sipTenures = [5, 10, 15, 20, 25];
const sipRoutes = [];
sipAmounts.forEach(amount => {
  sipTenures.forEach(tenure => {
    sipRoutes.push(`/sip/${amount}-sip-for-${tenure}-years`);
  });
});

// 4. Extract Article Slugs
const guidesDataPath = path.join(__dirname, 'src', 'data', 'guidesData.js');
let articleRoutes = [];
if (fs.existsSync(guidesDataPath)) {
  const content = fs.readFileSync(guidesDataPath, 'utf8');
  // Regex to match slug: 'something'
  const matches = [...content.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
  articleRoutes = matches.map(match => `/articles/${match[1]}`);
}

// 5. Credit Cards
const creditCardsPath = path.join(__dirname, 'src', 'data', 'creditCardsData.js');
let creditCardRoutes = [];
if (fs.existsSync(creditCardsPath)) {
    const content = fs.readFileSync(creditCardsPath, 'utf8');
    const matches = [...content.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
    creditCardRoutes = matches.map(match => `/credit-cards/${match[1]}`);
}

// Combine all routes
const allRoutes = [
  ...staticRoutes,
  ...emiRoutes,
  ...sipRoutes,
  ...articleRoutes,
  ...creditCardRoutes
];

// Generate XML
const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : route.includes('/calculators/') ? '0.9' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, sitemap.trim());

console.log(`Successfully generated sitemap.xml with ${allRoutes.length} URLs!`);
