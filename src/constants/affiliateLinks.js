/**
 * Centralized Affiliate & Referral Tracking Links Configuration
 * 
 * To monetize Calsi.in, register on affiliate networks (like Admitad, Cuelinks, or EarnKaro),
 * generate your tracking links, and replace the placeholder URLs below with your unique URLs.
 */

export const AFFILIATE_LINKS = {
  // 1. Investing & Demat Accounts (SIP, Lumpsum, SWP, Mutual Funds, XIRR calculators)
  investing: 'https://groww.in', // Replace with Axis MF, Upstox, or AngelOne affiliate link

  // 2. Credit Cards (Credit Card EMI calculator)
  creditCard: 'https://www.bankbazaar.com/credit-card.html', 
  sbiCard: 'https://www.bankbazaar.com/credit-card.html', // Replace with your SBI CC affiliate link from Admitad
  uniCard: 'https://stablemoney.in', // Replace with your UNI Card affiliate link from Admitad
  bajajCard: 'https://www.bajajfinserv.in/emi-network-emi-card', // Replace with your Bajaj Finserv affiliate link from Admitad

  // 3. Loans (Home Loan, Personal Loan, Car Loan calculators)
  personalLoan: 'https://www.paisabazaar.com', // Replace with Navi, KreditBee, or Paisabazaar loan link
  homeLoan: 'https://www.bankbazaar.com', // Replace with BankBazaar or direct Home Loan lender link
  carLoan: 'https://www.bankbazaar.com',
  bikeLoan: 'https://www.bankbazaar.com',
  ackoCar: 'https://www.acko.com/car-insurance', // Replace with Acko Car Insurance affiliate link
  ackoBike: 'https://www.acko.com/two-wheeler-insurance', // Replace with Acko Bike affiliate link

  // International Fallback
  internationalFallback: 'https://wise.com', // For users outside India, default to a global financial product like Wise


  // 4. Fixed Deposits & Savings (FD, RD, Savings calculators)
  fixedDeposit: 'https://stablemoney.in', // Replace with Stable Money or Kotak 811 savings link
  recurringDeposit: 'https://stablemoney.in',
  savings: 'https://stablemoney.in',

  // 5. Insurance (Term Insurance, Health Insurance calculators)
  termInsurance: 'https://joinditto.in/term-insurance/', // Replace with MaxLife or Ditto Insurance link
  healthInsurance: 'https://joinditto.in/health-insurance/', // Replace with PolicyBazaar or Ditto Health link

  // 6. Tax & Compliance (Income Tax, GST, LTCG calculators)
  tax: 'https://www.cleartax.in', // Replace with ClearTax affiliate link
  gst: 'https://www.cleartax.in',
  ltcg: 'https://www.cleartax.in',

  // 7. National Pension System & Retirement (NPS, Retirement planning)
  nps: 'https://www.npscra.nsdl.co.in', // Replace with HDFC Pension or SBI Pension link
  retirement: 'https://groww.in'
};
