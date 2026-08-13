const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const replacements = {
  'Home.jsx': {
    title: '【100% Free】 Financial Calculators India | SIP, EMI, Tax & More',
    desc: 'Use our 100% free online financial calculators for SIP, EMI, PPF, FD, Income Tax & more. Plan your investments securely with calsi.in — No Login Required.'
  },
  'SIPCalculator.jsx': {
    title: '【Free】 SIP Calculator (Updated 2026) | Calculate MF Returns Instantly',
    desc: 'Use our 100% free SIP Calculator to compute mutual fund returns, maturity amounts, and wealth gain instantly. No login required.'
  },
  'EMICalculator.jsx': {
    title: '【Free】 EMI Calculator 2026 | Calculate Home & Personal Loan Instantly',
    desc: 'Calculate Equated Monthly Installment (EMI) for Home, Car, and Personal loans instantly. View exact amortization schedules and total interest payable.'
  },
  'IncomeTaxCalculator.jsx': {
    title: '【Updated 2026】 Income Tax Calculator (Old vs New Regime) | Free',
    desc: 'Instantly calculate your income tax under Old vs New Tax Regime for AY 2026-27. 100% free tax planner with no login required.'
  },
  'HomeLoanCalculator.jsx': {
    title: '【Free】 Home Loan EMI Calculator 2026 | Exact Amortization Schedule',
    desc: 'Calculate your Home Loan EMI instantly. View the exact principal and interest breakdown with our 100% free amortisation chart.'
  },
  'PPFCalculator.jsx': {
    title: '【Free】 PPF Calculator 2026 | Calculate Maturity & Interest Instantly',
    desc: 'Calculate your Public Provident Fund (PPF) maturity value and tax-free interest instantly. 100% free, updated for 2026 rules.'
  },
  'FDCalculator.jsx': {
    title: '【Free】 FD Calculator 2026 | Calculate Fixed Deposit Returns Instantly',
    desc: 'Calculate Fixed Deposit (FD) maturity amount and interest earned instantly. Compare top bank rates using our 100% free calculator.'
  },
  'EPFCalculator.jsx': {
    title: '【Free】 EPF Calculator 2026 | Check PF Balance & Maturity Instantly',
    desc: 'Calculate your Employee Provident Fund (EPF) maturity corpus and interest instantly. 100% free tool for Indian salaried professionals.'
  },
  'MutualFundCalculator.jsx': {
    title: '【Free】 Mutual Fund Returns Calculator 2026 | Track Growth Instantly',
    desc: 'Calculate exact Mutual Fund returns using our 100% free tool. Track SIP and Lumpsum growth over time instantly.'
  },
  'RetirementCalculator.jsx': {
    title: '【Free】 Retirement Planning Calculator 2026 | Calculate Corpus Instantly',
    desc: 'Calculate how much corpus you need to retire comfortably in India. 100% free retirement planner with inflation adjustment.'
  }
};

fs.readdirSync(pagesDir).forEach(file => {
  if (replacements[file]) {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the first two arguments (Title, Description) of useDocumentMetadata
    content = content.replace(
      /useDocumentMetadata\(\s*(['"`])(?:(?!\1).)*\1\s*,\s*(['"`])(?:(?!\2).)*\2/s, 
      `useDocumentMetadata(\n    '${replacements[file].title.replace(/'/g, "\\'")}',\n    '${replacements[file].desc.replace(/'/g, "\\'")}'`
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});

console.log('SEO Titles Updated Successfully!');
