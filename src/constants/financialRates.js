// Centralized financial rates configuration for CALSI.IN
// Modifying these rates updates both the calculator logic and the affiliate comparison tables instantly.

export const TAX_CONFIG = {
  FY: '2025-26',
  AY: '2026-27',
  NEW_REGIME_REBATE_LIMIT: 1200000, // Section 87A rebate limit
  STANDARD_DEDUCTION: 75000,
};

export const GOVT_RATES = {
  PPF: 7.1,  // Public Provident Fund (yearly compounded)
  SSY: 8.2,  // Sukanya Samriddhi Yojana (yearly compounded)
  EPF: 8.15, // Employee Provident Fund (monthly compounded)
  NPS_EST_RETURNS: 10.0, // National Pension System estimated returns
};

export const BANK_RATES = {
  FD: [
    { bank: 'State Bank of India (SBI)', rate: 7.0, tenure: '2-3 Yrs' },
    { bank: 'HDFC Bank', rate: 7.25, tenure: '2-3 Yrs' },
    { bank: 'ICICI Bank', rate: 7.25, tenure: '2-3 Yrs' },
    { bank: 'Axis Bank', rate: 7.2, tenure: '2-3 Yrs' },
    { bank: 'Kotak Mahindra Bank', rate: 7.15, tenure: '2-3 Yrs' },
    { bank: 'Stable Money Partner Bank 🚀', rate: 9.1, tenure: '1-3 Yrs', isAffiliate: true }
  ],
  RD: [
    { bank: 'State Bank of India (SBI)', rate: 6.8, tenure: '12-24 Mo' },
    { bank: 'HDFC Bank', rate: 7.15, tenure: '12-24 Mo' },
    { bank: 'ICICI Bank', rate: 7.1, tenure: '12-24 Mo' },
    { bank: 'Axis Bank', rate: 7.1, tenure: '12-24 Mo' },
    { bank: 'Kotak Mahindra Bank', rate: 7.1, tenure: '12-24 Mo' },
    { bank: 'Stable Money Partner Bank 🚀', rate: 8.8, tenure: '12-24 Mo', isAffiliate: true }
  ],
  homeLoan: [
    { bank: 'State Bank of India (SBI)', rate: 8.50, type: 'Floating' },
    { bank: 'HDFC Bank', rate: 8.75, type: 'Floating' },
    { bank: 'ICICI Bank', rate: 8.75, type: 'Floating' },
    { bank: 'Axis Bank', rate: 8.75, type: 'Floating' },
    { bank: 'LIC Housing Finance', rate: 8.65, type: 'Floating' },
    { bank: 'BankBazaar Partner Bank 🚀', rate: 8.35, type: 'Floating', isAffiliate: true }
  ],
  personalLoan: [
    { bank: 'Axis Bank', rate: 10.49 },
    { bank: 'HDFC Bank', rate: 10.50 },
    { bank: 'ICICI Bank', rate: 10.75 },
    { bank: 'SBI', rate: 11.00 },
    { bank: 'Paisabazaar Partner Bank 🚀', rate: 10.25, isAffiliate: true }
  ],
  carLoan: [
    { bank: 'State Bank of India (SBI)', rate: 8.75 },
    { bank: 'ICICI Bank', rate: 8.90 },
    { bank: 'HDFC Bank', rate: 8.95 },
    { bank: 'Axis Bank', rate: 9.10 }
  ],
  bikeLoan: [
    { bank: 'State Bank of India (SBI)', rate: 12.50 },
    { bank: 'ICICI Bank', rate: 12.80 },
    { bank: 'HDFC Bank', rate: 13.00 },
    { bank: 'Axis Bank', rate: 13.25 }
  ]
};

export const MUTUAL_FUNDS = [
  { name: 'Quant Small Cap Fund (Direct-G)', category: 'Small Cap', returns3Y: 34.2, ratio: 'High' },
  { name: 'Parag Parikh Flexi Cap Fund (Direct-G)', category: 'Flexi Cap', returns3Y: 22.4, ratio: 'Moderate' },
  { name: 'SBI Bluechip Fund (Direct-G)', category: 'Large Cap', returns3Y: 17.8, ratio: 'Low' },
  { name: 'Nippon India Growth Fund (Direct-G)', category: 'Mid Cap', returns3Y: 26.5, ratio: 'High' },
  { name: 'ICICI Prudential Arbitrage (Direct-G)', category: 'Arbitrage', returns3Y: 7.9, ratio: 'Low' }
];

export const TERM_INSURANCE = [
  { company: 'HDFC Life Click 2 Protect', premium: '₹12,500/Yr', claimRatio: '99.5%' },
  { company: 'ICICI Pru iProtect Smart', premium: '₹13,100/Yr', claimRatio: '98.6%' },
  { company: 'LIC Tech Term Plan', premium: '₹14,800/Yr', claimRatio: '99.0%' },
  { company: 'Max Life Smart Secure Plus ⚡', premium: '₹11,200/Yr', claimRatio: '99.6% (Affiliate)', isAffiliate: true }
];

export const HEALTH_INSURANCE = [
  { company: 'HDFC Ergo Optima Secure', premium: '₹14,200/Yr', rating: '4.8/5' },
  { company: 'Care Supreme Health Cover', premium: '₹11,800/Yr', rating: '4.6/5' },
  { company: 'Niva Bupa ReAssure 2.0', premium: '₹12,100/Yr', rating: '4.7/5' },
  { company: 'Aditya Birla Activ Health ⚡', premium: '₹10,950/Yr', rating: '4.9/5 (Affiliate)', isAffiliate: true }
];

export const ULIP_SCHEMES = [
  { fund: 'HDFC Life Click 2 Wealth', returnEst: '18.2%', charge: 'Zero Allocation Charge' },
  { fund: 'ICICI Pru Signature ULIP', returnEst: '17.9%', charge: 'Zero Premium Charge' },
  { fund: 'SBI Life eWealth Insurance', returnEst: '16.5%', charge: 'Low Expense Ratio' },
  { fund: 'Max Life Online Savings ⚡', returnEst: '19.5%', charge: '100% Premium Return (Affiliate)', isAffiliate: true }
];

export const CREDIT_CARDS = [
  { name: 'Amazon Pay ICICI Card', fee: '₹0 (Lifetime Free)', benefit: '5% Unlimited Cashback on Amazon' },
  { name: 'HDFC Regalia Gold Card', fee: '₹2,500/Yr', benefit: 'Complimentary Lounge Access & Travel Vouchers' },
  { name: 'Axis Bank Ace Card', fee: '₹499/Yr', benefit: '2% Flat Cashback on all offline spends' },
  { name: 'SBI Card Elite', fee: '₹4,999/Yr', benefit: 'Free Movie Tickets & Priority Pass' },
  { name: 'Cashback SBI Card ⚡', fee: '₹999/Yr', benefit: '5% Flat Cashback on all online spends (Affiliate Offer)', isAffiliate: true }
];

export const GST_GOODS = [
  { category: 'Essential Goods (Milk, Wheat)', gstRate: '0%', status: 'Tax Exempted' },
  { category: 'Household Items (Sugar, Tea, Oil)', gstRate: '5%', status: 'Low Slab' },
  { category: 'Processed Food, Computers', gstRate: '12%', status: 'Standard Slab 1' },
  { category: 'Electronics, Hair Oil, Soap', gstRate: '18%', status: 'Standard Slab 2' },
  { category: 'Luxury Cars, Tobacco, ACs', gstRate: '28%', status: 'Luxury / Sin Slab' }
];

export const NPS_SCHEMES = [
  { name: 'NPS Tier I Equity (Scheme E)', returnEst: '12.5% - 14.5%', risk: 'Market Linked / High' },
  { name: 'NPS Corporate Bonds (Scheme C)', returnEst: '8.5% - 9.5%', risk: 'Moderate' },
  { name: 'NPS Government Securities (Scheme G)', returnEst: '7.8% - 8.5%', risk: 'Very Low' },
  { name: 'NPS Alternative Assets (Scheme A)', returnEst: '7.0% - 9.0%', risk: 'High' }
];

export const INFLATION_HISTORICAL = [
  { year: '2025 (Estimated)', rate: '4.50%', status: 'Controlled' },
  { year: '2024', rate: '5.10%', status: 'Moderate' },
  { year: '2023', rate: '5.69%', status: 'Elevated' },
  { year: '2022', rate: '6.70%', status: 'High' },
  { year: '2021', rate: '5.13%', status: 'Moderate' }
];

export const LTCG_RATES = [
  { asset: 'Equity Shares (Listed) ⚡', rate: '12.5%', exemption: 'Exempt up to ₹1.25 Lakhs' },
  { asset: 'Equity Shares (Unlisted)', rate: '12.5%', exemption: 'No Exemption' },
  { asset: 'Real Estate / Property', rate: '12.5%', exemption: 'Reinvestment options u/s 54' },
  { asset: 'Gold & Physical Jewelry', rate: '12.5%', exemption: 'No Indexation' },
  { asset: 'Debt Mutual Funds', rate: 'Slab Rate', exemption: 'Taxed as Short Term' }
];

export const RETIREMENT_MILESTONES = [
  { age: 'Age 30', targetCorpus: '1x Annual Income', savingsRate: '15% of salary' },
  { age: 'Age 40', targetCorpus: '3x Annual Income', savingsRate: '20% of salary' },
  { age: 'Age 50', targetCorpus: '6x Annual Income', savingsRate: '25% of salary' },
  { age: 'Age 60', targetCorpus: '10x Annual Income', savingsRate: 'Retirement Ready' }
];
