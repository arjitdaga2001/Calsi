const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const replacements = {
  'Home.jsx': {
    title: 'Free Financial Calculators India (2026) - SIP, EMI, Tax & Loans | CALSI',
    desc: 'Use our free online financial calculators for SIP, EMI, PPF, FD, Income Tax & more. Plan your investments securely with calsi.in — No Login Required.'
  },
  'SIPCalculator.jsx': {
    title: 'SIP Calculator 2026: Calculate Mutual Fund Returns Online (Free)',
    desc: 'Use our free SIP Calculator to compute mutual fund returns, maturity amounts, and wealth gain instantly. No login required.'
  },
  'LumpsumCalculator.jsx': {
    title: 'Lumpsum Calculator 2026: Calculate One-Time MF Returns | CALSI',
    desc: 'Calculate total returns on your one-time mutual fund lumpsum investment instantly. Free tool updated with 2026 compounding formulas.'
  },
  'EMICalculator.jsx': {
    title: 'EMI Calculator 2026: Calculate Home & Personal Loan EMI (Free)',
    desc: 'Calculate Equated Monthly Installment (EMI) for Home, Car, and Personal loans instantly. View exact amortization schedules and total interest payable.'
  },
  'IncomeTaxCalculator.jsx': {
    title: 'Income Tax Calculator FY 2025-26 (AY 2026-27): Old vs New Regime',
    desc: 'Instantly calculate your income tax under Old vs New Tax Regime for AY 2026-27. Free tax planner with no login required.'
  },
  'HomeLoanCalculator.jsx': {
    title: 'Home Loan EMI Calculator 2026: Monthly EMI & Interest Breakdown',
    desc: 'Calculate Home Loan EMI instantly across SBI, HDFC, ICICI. View full monthly amortisation schedule and principal vs interest split.'
  },
  'CarLoanCalculator.jsx': {
    title: 'Car Loan EMI Calculator 2026: Calculate Monthly Interest & EMI',
    desc: 'Calculate your auto loan monthly EMI and interest payout instantly. Free car loan calculator with down payment adjustment.'
  },
  'PersonalLoanCalculator.jsx': {
    title: 'Personal Loan EMI Calculator 2026: Free Instant EMI Schedule',
    desc: 'Compute your personal loan EMI and interest costs across major banks in India. Fast, accurate, and free to use.'
  },
  'BikeLoanCalculator.jsx': {
    title: 'Two-Wheeler & Bike Loan EMI Calculator 2026 | CALSI',
    desc: 'Calculate monthly EMIs for bike and scooter loans instantly. Plan your down payment and loan tenure with zero hassle.'
  },
  'CreditCardEMICalculator.jsx': {
    title: 'Credit Card EMI Calculator 2026: Calculate Interest & Processing Fee',
    desc: 'Calculate credit card EMI conversion charges, monthly interest rate & total payback amount. Compare credit card EMI vs Personal Loan.'
  },
  'PPFCalculator.jsx': {
    title: 'PPF Calculator 2026: Public Provident Fund Interest & Maturity',
    desc: 'Calculate your Public Provident Fund (PPF) maturity value and tax-free interest instantly. Updated for 2026 rules.'
  },
  'FDCalculator.jsx': {
    title: 'FD Calculator 2026: Calculate Fixed Deposit Returns & Interest',
    desc: 'Calculate Fixed Deposit (FD) maturity amount and interest earned instantly. Compare top bank rates using our free calculator.'
  },
  'RDCalculator.jsx': {
    title: 'RD Calculator 2026: Recurring Deposit Maturity & Interest',
    desc: 'Calculate monthly Recurring Deposit (RD) interest and final maturity payout instantly across top Indian banks.'
  },
  'EPFCalculator.jsx': {
    title: 'EPF Calculator 2026: Calculate Balance, Interest & Maturity Corpus',
    desc: 'Calculate Employee Provident Fund (EPF) maturity corpus with 8.25% interest rate. Compute employer & employee contribution breakdown.'
  },
  'SWPCalculator.jsx': {
    title: 'SWP Calculator 2026: Calculate Monthly Withdrawal Payout & Balance',
    desc: 'Calculate monthly regular pension from Mutual Funds using SWP. Track remaining capital balance and tax-efficient withdrawal schedule.'
  },
  'MutualFundCalculator.jsx': {
    title: 'Mutual Fund Returns Calculator 2026 (SIP & Lumpsum) | CALSI',
    desc: 'Calculate exact Mutual Fund returns using our free tool. Track SIP and Lumpsum growth over time instantly.'
  },
  'SSYCalculator.jsx': {
    title: 'Sukanya Samriddhi Yojana (SSY) Calculator 2026: Maturity & Interest',
    desc: 'Calculate SSY maturity amount and tax-free interest earned for your girl child under 8.2% interest rate. View year-wise schedule.'
  },
  'GSTCalculator.jsx': {
    title: 'GST Calculator 2026: Calculate Inclusive & Exclusive Tax',
    desc: 'Calculate Goods and Services Tax (GST) amounts (5%, 12%, 18%, 28%) instantly for net and gross prices in India.'
  },
  'XIRRCalculator.jsx': {
    title: 'XIRR Calculator 2026: Calculate Real Mutual Fund Return Rate',
    desc: 'Calculate Extended Internal Rate of Return (XIRR) for irregular cashflows and SIP investments with accuracy.'
  },
  'NPSCalculator.jsx': {
    title: 'NPS Calculator 2026: National Pension Scheme Corpus & Annuity',
    desc: 'Calculate your National Pension System (NPS) accumulated wealth, lump-sum withdrawal, and monthly annuity payout.'
  },
  'RetirementCalculator.jsx': {
    title: 'Retirement Calculator 2026: Calculate Target Corpus & Monthly SIP',
    desc: 'Calculate target retirement corpus adjusted for inflation in India. Find out exact monthly SIP needed to retire rich.'
  },
  'TermInsuranceCalculator.jsx': {
    title: 'Term Insurance Calculator 2026: Calculate Human Life Value Cover',
    desc: 'Calculate exact Term Insurance life cover needed using the Human Life Value (HLV) method. Compare pure term vs TROP & get instant 2026 rates.'
  },
  'HealthInsuranceCalculator.jsx': {
    title: 'Health Insurance Calculator 2026: Family Cover & Tax Saving',
    desc: 'Calculate required family health insurance cover based on medical inflation & hospital costs. Instant Section 80D tax saving breakdown.'
  },
  'ULIPCalculator.jsx': {
    title: 'ULIP Calculator 2026: Returns Breakdown & ULIP vs Mutual Fund',
    desc: 'Calculate ULIP maturity value after allocation & mortality charges. Compare ULIP returns vs direct SIP to make smart investment decisions.'
  },
  'LTCGCalculator.jsx': {
    title: 'LTCG Tax Calculator 2026: Long Term Capital Gains Tax',
    desc: 'Calculate Long Term Capital Gains (LTCG) tax on stocks, equity mutual funds, and real estate for FY 2025-26.'
  },
  'InflationCalculator.jsx': {
    title: 'Inflation Calculator 2026 India: Purchasing Power & Future Value',
    desc: 'Calculate how inflation erodes purchasing power over time. Estimate future cost of living and education expenses in India.'
  },
  'GuidesList.jsx': {
    title: 'Financial Guides & Articles 2026 | Expert Insights | CALSI',
    desc: 'Read in-depth financial guides on tax saving, SIP strategies, home loans, retirement planning, and wealth building in India.'
  },
  'CreditCardsList.jsx': {
    title: 'Best Credit Cards in India (2026) | Reviews & Comparison',
    desc: 'Compare top credit cards for travel, cashback, rewards, and lounge access in India. Honest reviews by calsi.in.'
  },
  'About.jsx': {
    title: 'About Us | India\'s Trusted Financial Tool Platform — calsi.in',
    desc: 'Learn about calsi.in — India\'s free, privacy-first, expert-verified financial calculator and planning platform.'
  },
  'Contact.jsx': {
    title: 'Contact Us | calsi.in',
    desc: 'Get in touch with the calsi.in team for feedback, calculator requests, or partnership inquiries.'
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

console.log('All Page & Calculator SEO Titles Updated Successfully!');
