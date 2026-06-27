import React from 'react';
import { Coins, Percent, Shield, FileCheck, PiggyBank, ArrowRight, Check, Sparkles, TrendingUp } from 'lucide-react';
import { TAX_CONFIG, GOVT_RATES, BANK_RATES, MUTUAL_FUNDS, TERM_INSURANCE, HEALTH_INSURANCE, ULIP_SCHEMES, CREDIT_CARDS, GST_GOODS, NPS_SCHEMES, INFLATION_HISTORICAL, LTCG_RATES, RETIREMENT_MILESTONES } from '../constants/financialRates';
import { AFFILIATE_LINKS } from '../constants/affiliateLinks';
import { useGeolocation } from '../hooks/useGeolocation';

export function AffiliateWidget({ category }) {
  const location = useGeolocation();
  
  // Dynamic monetization states
  const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const [abTestVariant, setAbTestVariant] = React.useState('A');

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    
    // Assign a random variant A or B on mount for A/B testing CTA conversions
    setAbTestVariant(Math.random() > 0.5 ? 'B' : 'A');
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-detect category from URL pathname if not explicitly passed
  const getCategoryFromPath = () => {
    const path = window.location.pathname.toLowerCase();
    
    if (path.includes('credit')) {
      return 'creditcard';
    }
    if (path.includes('gst')) {
      return 'gst';
    }
    if (path.includes('xirr')) {
      return 'xirr';
    }
    if (path.includes('nps')) {
      return 'nps';
    }
    if (path.includes('retirement')) {
      return 'retirement';
    }
    if (path.includes('ltcg')) {
      return 'ltcg';
    }
    if (path.includes('inflation')) {
      return 'inflation';
    }
    if (path.includes('sip') || path.includes('mutual') || path.includes('lumpsum') || path.includes('swp')) {
      return 'investing';
    }
    if (path.includes('fd') && !path.includes('debt')) {
      return 'fd';
    }
    if (path.includes('rd')) {
      return 'rd';
    }
    if (path.includes('loan') || path.includes('emi')) {
      return 'loans';
    }
    if (path.includes('term')) {
      return 'term-insurance';
    }
    if (path.includes('health')) {
      return 'health-insurance';
    }
    if (path.includes('ulip')) {
      return 'ulip';
    }
    if (path.includes('insurance')) {
      return 'term-insurance';
    }
    if (path.includes('tax')) {
      return 'tax';
    }
    if (path.includes('ssy') || path.includes('epf') || path.includes('ppf')) {
      return 'savings';
    }
    
    return 'investing';
  };

  const selectedCategory = category || getCategoryFromPath();

  // Render content based on category
  const renderWidgetContent = () => {
    switch (selectedCategory) {
      case 'nps':
        return {
          title: 'National Pension System (NPS) Scheme Return Classes',
          subtitle: 'Live-linked weighted averages of NPS Tier-I fund managers',
          icon: PiggyBank,
          color: '#ec4899',
          tableHeaders: ['NPS Asset Portfolio Scheme', 'Indicative Annualized returns', 'Risk Profile'],
          tableRows: NPS_SCHEMES.map(row => [
            row.name, 
            row.returnEst, 
            row.risk
          ]),
          ctaTitle: 'Open an NPS Pension Account Instantly',
          ctaPartner: 'HDFC Pension / SBI Pension',
          ctaDesc: 'Save up to ₹50,000 extra in taxes under Section 80CCD(1B) and build a secure retirement corpus. 100% online setup.',
          ctaLink: AFFILIATE_LINKS.nps,
          ctaButtonText: 'Invest in NPS Now',
          isLiveRates: true
        };

      case 'retirement':
        return {
          title: 'Retirement Milestone Goals by Age Group',
          subtitle: 'Benchmark recommendations to check if you are retirement ready',
          icon: Shield,
          color: '#00d09c',
          tableHeaders: ['Current Milestone Age', 'Recommended Target Corpus', 'Target Monthly Savings Rate'],
          tableRows: RETIREMENT_MILESTONES.map(row => [
            row.age, 
            row.targetCorpus, 
            row.savingsRate
          ]),
          ctaTitle: 'Build a Post-Retirement Pension Corpus',
          ctaPartner: 'Groww Retirement Mutual Funds',
          ctaDesc: 'Map out your goals. Protect your family with equity-backed wealth generators that compound and beat inflation.',
          ctaLink: AFFILIATE_LINKS.retirement,
          ctaButtonText: 'Start Retirement Plan',
          isLiveRates: false
        };

      case 'ltcg':
        return {
          title: 'Revised Capital Gains Tax (LTCG) Rates post-Budget 2024',
          subtitle: 'Direct tax rates applicable on capital gains from FY 2024-25 onwards',
          icon: FileCheck,
          color: '#8b5cf6',
          tableHeaders: ['Asset Class Category', 'LTCG Tax Rate', 'Exemption Exclusions'],
          tableRows: LTCG_RATES.map(row => [
            row.asset, 
            row.rate, 
            row.exemption
          ]),
          ctaTitle: 'Declare Gains & File Capital Gains ITR',
          ctaPartner: 'ClearTax Capital Gains',
          ctaDesc: 'Compute listed equity LTCG (under Sec 112A) automatically with ₹1.25L exemption. Secure tax filing in minutes.',
          ctaLink: AFFILIATE_LINKS.ltcg,
          ctaButtonText: 'File Capital Gains ITR',
          isLiveRates: false
        };

      case 'inflation':
        return {
          title: 'Historical Consumer Price Index (CPI) Inflation in India',
          subtitle: 'Track how inflation erodes purchasing power over time',
          icon: TrendingUp,
          color: '#3b82f6',
          tableHeaders: ['Financial Year / Period', 'CPI Inflation Rate (p.a.)', 'RBI Target Status'],
          tableRows: INFLATION_HISTORICAL.map(row => [
            row.year, 
            row.rate, 
            row.status
          ]),
          ctaTitle: 'Invest in Inflation-Beating Mutual Funds',
          ctaPartner: 'Groww Direct SIPs',
          ctaDesc: 'Keeping money in cash or savings accounts yields negative real returns. Grow your capital with inflation-beating equity funds.',
          ctaLink: AFFILIATE_LINKS.investing,
          ctaButtonText: 'Start SIP to Beat Inflation',
          isLiveRates: true
        };

      case 'creditcard':
        const filteredCards = CREDIT_CARDS;
        
        // A/B test CTA title and description for higher conversion
        const ccTitle = abTestVariant === 'A' 
          ? 'Apply for SBI Flipkart Credit Card & Earn Flat ₹2,240!' 
          : 'Limited Time: Get a Premium Rewards Credit Card';
        const ccDesc = abTestVariant === 'A'
          ? 'Get 5% Cashback on Flipkart & 7.5% on Myntra! Earn a massive ₹2,240 profit on activation.'
          : 'Earn extremely high rewards on every spend. Get instant digital approval and premium lounge access.';

        return {
          title: 'Best Credit Cards in India & Benefits (2026)',
          subtitle: 'Live curated top cashback and reward credit cards',
          icon: Percent,
          color: '#3b82f6',
          tableHeaders: ['Credit Card Name', 'Annual Fee', 'Primary Benefit / Feature'],
          tableRows: filteredCards.map(row => [
            row.isAffiliate ? { text: row.name, isLink: true, href: AFFILIATE_LINKS[row.affiliateKey] } : row.name, 
            row.fee, 
            row.slug ? { text: row.benefit, isReviewLink: true, href: `/credit-cards/${row.slug}` } : row.benefit
          ]),
          ctaTitle: ccTitle,
          ctaPartner: 'EarnKaro / SBI Cards',
          ctaDesc: ccDesc,
          ctaLink: AFFILIATE_LINKS.sbiFlipkart || AFFILIATE_LINKS.creditCard,
          ctaImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0o3l8qdtXaPuKGWYL1fHzWpqjqabYJVq_4hvQxnllXQ&s=10',
          ctaButtonText: isMobile ? 'Apply Now' : 'Apply for Credit Card',
          isLiveRates: true
        };

      case 'gst':
        return {
          title: 'Indian GST Rate Slab Structure (Goods & Services)',
          subtitle: 'Current GST percentage rates for common items',
          icon: FileCheck,
          color: '#8b5cf6',
          tableHeaders: ['Product / Service Category', 'GST Rate', 'Classification Slab'],
          tableRows: GST_GOODS.map(row => [
            row.category, 
            row.gstRate, 
            row.status
          ]),
          ctaTitle: 'Simplify Your GST Filing & Invoicing',
          ctaPartner: 'ClearTax GST',
          ctaDesc: 'File GSTR-1, 3B and create professional GST-compliant e-invoices instantly. Simple accounting for businesses.',
          ctaLink: AFFILIATE_LINKS.gst,
          ctaButtonText: 'Try ClearTax GST',
          isLiveRates: false
        };

      case 'xirr':
        return {
          title: 'Evaluate Extended Internal Rate of Return (XIRR)',
          subtitle: 'Compare XIRR benchmark returns against top direct schemes',
          icon: TrendingUp,
          color: '#00d09c',
          tableHeaders: ['Investment Instrument', 'Expected Return Class', 'Average Annualized CAGR'],
          tableRows: [
            ['Direct Mutual Funds (Equity)', 'Aggressive / High Growth', '18.0% - 24.0% p.a.'],
            ['Nifty 50 Index Fund', 'Moderate Growth', '12.0% - 15.0% p.a.'],
            ['Public Provident Fund (PPF)', 'Risk-Free / Fixed Return', '7.1% p.a.'],
            ['Fixed Deposits (FDs) / Stable Money', 'Risk-Free / Guaranteed', '7.5% - 9.1% p.a.']
          ],
          ctaTitle: 'Analyze & Track Your Portfolio XIRR',
          ctaPartner: 'Groww / IndMoney',
          ctaDesc: 'Link your mutual funds and stocks portfolio to track live XIRR, absolute gains, and customized asset allocation advice.',
          ctaLink: AFFILIATE_LINKS.investing,
          ctaButtonText: 'Track Portfolio Free',
          isLiveRates: true
        };

      case 'fd':
        return {
          title: 'Compare Live Fixed Deposit Rates (2026)',
          subtitle: 'Centralized rates automatically update from CALSI.IN configuration',
          icon: PiggyBank,
          color: '#ec4899',
          tableHeaders: ['Bank Name', 'Interest Rate (p.a.)', 'Tenure'],
          tableRows: BANK_RATES.FD.map(row => [
            row.bank, 
            `${row.rate.toFixed(2)}%${row.isAffiliate ? ' ⚡' : ''}`, 
            row.tenure
          ]),
          ctaTitle: 'Book High-Yield Fixed Deposits Online',
          ctaPartner: 'Stable Money',
          ctaDesc: 'Compare and book FDs yielding up to 9.10% p.a. through RBI-regulated banks in under 3 minutes.',
          ctaLink: AFFILIATE_LINKS.fixedDeposit,
          ctaButtonText: 'Book High-Yield FD',
          isLiveRates: true
        };
      
      case 'rd':
        return {
          title: 'Compare Live Recurring Deposit Rates (2026)',
          subtitle: 'Centralized RD yields automatically update from CALSI.IN configuration',
          icon: PiggyBank,
          color: '#ec4899',
          tableHeaders: ['Bank Name', 'Interest Rate (p.a.)', 'Tenure'],
          tableRows: BANK_RATES.RD.map(row => [
            row.bank, 
            `${row.rate.toFixed(2)}%${row.isAffiliate ? ' ⚡' : ''}`, 
            row.tenure
          ]),
          ctaTitle: 'Start High-Yield RD / FDs Online',
          ctaPartner: 'Stable Money',
          ctaDesc: 'Maximize your monthly savings with premium recurring deposit products offering up to 8.80% p.a.',
          ctaLink: AFFILIATE_LINKS.recurringDeposit,
          ctaButtonText: 'Book High-Yield RD',
          isLiveRates: true
        };

      case 'loans':
        const path = window.location.pathname.toLowerCase();
        let loanRates = BANK_RATES.personalLoan;
        let loanTypeLabel = 'Personal Loan';
        let isHome = false;
        let ctaPartner = 'Paisabazaar';
        let ctaLink = AFFILIATE_LINKS.personalLoan;
        let ctaTitle = `Check Your Pre-Approved Personal Loan Eligibility`;
        let ctaDesc = `Get instant loan approval with zero foreclosure charges. Compare from 30+ RBI approved lenders.`;
        let ctaButtonText = `Check Eligibility`;
        
        if (path.includes('home')) {
          loanRates = BANK_RATES.homeLoan;
          loanTypeLabel = 'Home Loan';
          isHome = true;
          ctaPartner = 'BankBazaar';
          ctaLink = AFFILIATE_LINKS.homeLoan;
          ctaTitle = `Check Your Pre-Approved Home Loan Eligibility`;
          ctaDesc = `Get instant loan approval with zero foreclosure charges. Compare from 30+ RBI approved lenders.`;
        } else if (path.includes('car')) {
          loanRates = BANK_RATES.carLoan;
          loanTypeLabel = 'Car Loan';
          
          // Geo-targeting: If user is in an Acko-approved city, swap the main CTA to Acko Car Insurance
          if (location.isTargetCity && !location.isInternational) {
            ctaPartner = 'Acko Car Insurance ⚡';
            ctaLink = AFFILIATE_LINKS.ackoCar;
            ctaTitle = 'Get Car Insurance from ₹2,094/yr';
            ctaDesc = 'Buying a car? You need insurance. Get zero depreciation cover with no claim bonus instantly online.';
            ctaButtonText = 'View Acko Quote';
          } else {
            ctaPartner = 'BankBazaar';
            ctaLink = AFFILIATE_LINKS.carLoan;
            ctaTitle = `Check Your Pre-Approved Car Loan Eligibility`;
            ctaDesc = `Get instant loan approval with zero foreclosure charges. Compare from 30+ RBI approved lenders.`;
          }
        } else if (path.includes('bike')) {
          loanRates = BANK_RATES.bikeLoan;
          loanTypeLabel = 'Two-Wheeler Loan';
          
          // Geo-targeting: If user is in an Acko-approved city, swap the main CTA to Acko Bike Insurance
          if (location.isTargetCity && !location.isInternational) {
            ctaPartner = 'Acko Bike Insurance ⚡';
            ctaLink = AFFILIATE_LINKS.ackoBike;
            ctaTitle = 'Get Bike Insurance from ₹555/yr';
            ctaDesc = 'Protect your new two-wheeler with comprehensive cover and instant claim settlements online.';
            ctaButtonText = 'View Acko Quote';
          } else {
            ctaPartner = 'BankBazaar';
            ctaLink = AFFILIATE_LINKS.bikeLoan;
            ctaTitle = `Check Your Pre-Approved Bike Loan Eligibility`;
            ctaDesc = `Get instant loan approval with zero foreclosure charges. Compare from 30+ RBI approved lenders.`;
          }
        }

        // Global override for international users
        if (location.isInternational) {
          ctaPartner = 'Global Travel Insurance';
          ctaLink = AFFILIATE_LINKS.internationalFallback;
          ctaTitle = 'Get Comprehensive Travel Insurance';
          ctaDesc = 'Traveling soon? Protect your trip with premium global travel insurance. Get instant coverage for medical emergencies and trip cancellations.';
          ctaButtonText = 'Get a Free Quote';
        }
        
        return {
          title: `Compare Live ${loanTypeLabel} Interest Rates`,
          subtitle: 'Check top bank lending rates compared dynamically',
          icon: Percent,
          color: '#3b82f6',
          tableHeaders: ['Lending Bank', 'Interest Rate (p.a.)', isHome ? 'Interest Type' : 'Processing Fee'],
          tableRows: loanRates.map(row => [
            row.bank, 
            `${row.rate.toFixed(2)}%${row.isAffiliate ? ' ⚡' : ''}`, 
            isHome ? (row.type || 'Floating') : 'Low / Zero Processing Fee'
          ]),
          ctaTitle: ctaTitle,
          ctaPartner,
          ctaDesc: ctaDesc,
          ctaLink,
          ctaButtonText: ctaButtonText,
          isLiveRates: true
        };

      case 'investing':
        const invTitle = isMobile 
          ? 'Download Top Rated Investment App'
          : 'Open a Demat Account Online';
        const invPartner = isMobile ? 'Upstox / Groww App' : 'Zerodha / Upstox Web';
        const invDesc = isMobile 
          ? 'Invest in direct mutual funds and stocks on the go. Zero brokerage on MFs and IPOs.'
          : 'Advanced web charting, analytics, and direct mutual fund investing. ₹0 equity delivery.';
        const invButtonText = abTestVariant === 'A' ? 'Open Free Account' : 'Start Investing Now';

        return {
          title: 'Top-Performing Mutual Funds for SIP (3-Yr Returns)',
          subtitle: 'Grow your wealth with mutual funds selected by CALSI.IN economists',
          icon: Coins,
          color: '#00d09c',
          tableHeaders: ['Mutual Fund Scheme', 'Category', '3-Year Annualized CAGR'],
          tableRows: MUTUAL_FUNDS.map(fund => [
            fund.name,
            fund.category,
            `${fund.returns3Y.toFixed(1)}%`
          ]),
          ctaTitle: invTitle,
          ctaPartner: invPartner,
          ctaDesc: invDesc,
          ctaLink: AFFILIATE_LINKS.investing,
          ctaButtonText: invButtonText,
          isLiveRates: true
        };

      case 'term-insurance':
        return {
          title: 'Compare Top Term Insurance Plans (2026)',
          subtitle: 'Secure your family with term plans featuring high CSR (Claim Settlement Ratio)',
          icon: Shield,
          color: '#22c55e',
          tableHeaders: ['Insurance Company Plan', 'Est. Premium (₹1Cr Cover)', 'Claim Settlement Ratio (CSR)'],
          tableRows: TERM_INSURANCE.map(row => [
            row.company, 
            row.premium, 
            row.claimRatio
          ]),
          ctaTitle: 'Get Spam-Free, Certified Term Insurance Advice',
          ctaPartner: 'Ditto Insurance',
          ctaDesc: 'Talk to certified advisors for a 100% spam-free, honest consultation. Compare and choose the best term cover.',
          ctaLink: AFFILIATE_LINKS.termInsurance,
          ctaButtonText: 'Book Free Term Advice',
          isLiveRates: false
        };

      case 'health-insurance':
        return {
          title: 'Compare Top Health Insurance Policies (2026)',
          subtitle: 'Protect against rising medical inflation with premium cashless coverage',
          icon: Shield,
          color: '#22c55e',
          tableHeaders: ['Health Insurance Plan', 'Est. Premium (₹10L Cover)', 'Plan Rating'],
          tableRows: HEALTH_INSURANCE.map(row => [
            row.company, 
            row.premium, 
            row.rating
          ]),
          ctaTitle: 'Compare & Buy Best Health Insurance Plans',
          ctaPartner: 'Ditto Insurance / Policybazaar',
          ctaDesc: 'Compare quotes across top insurers, explore cashless hospital networks, and book free expert advisory sessions.',
          ctaLink: AFFILIATE_LINKS.healthInsurance,
          ctaButtonText: 'Book Free Health Advice',
          isLiveRates: false
        };

      case 'ulip':
        return {
          title: 'Top-Performing ULIP Plans (indicative 5-Yr Returns)',
          subtitle: 'Dual benefits of investment growth and life cover under Section 80C',
          icon: Coins,
          color: '#00d09c',
          tableHeaders: ['ULIP Plan / Fund Name', '5-Yr Indicative CAGR', 'Policy Charge Structure'],
          tableRows: ULIP_SCHEMES.map(row => [
            row.fund, 
            row.returnEst, 
            row.charge
          ]),
          ctaTitle: 'Invest in High-Yield Zero-Commission ULIPs',
          ctaPartner: 'Groww / Policybazaar',
          ctaDesc: 'Invest in tax-free market-linked assets. Zero allocation charges and return of premium features available online.',
          ctaLink: AFFILIATE_LINKS.investing,
          ctaButtonText: 'Explore ULIP Plans',
          isLiveRates: true
        };

      case 'tax':
        return {
          title: `Income Tax & Slab Overview for AY ${TAX_CONFIG.AY}`,
          subtitle: `Current Tax Slabs and Standard Deductions for FY ${TAX_CONFIG.FY}`,
          icon: FileCheck,
          color: '#8b5cf6',
          tableHeaders: ['Deduction / Regime Rule', 'Value', 'Assessment Applicability'],
          tableRows: [
            ['Standard Deduction (Salaried)', `₹${TAX_CONFIG.STANDARD_DEDUCTION.toLocaleString('en-IN')}`, 'New Regime Rules'],
            ['Section 87A Rebate Threshold', `₹${TAX_CONFIG.NEW_REGIME_REBATE_LIMIT.toLocaleString('en-IN')}`, 'Zero Tax up to this net income'],
            ['LTCG Tax Rate (Listed Equity)', '12.5% (above ₹1.25L exemption)', 'Post Budget 2024'],
            ['STCG Tax Rate (Listed Equity)', '20.0%', 'Post Budget 2024'],
            ['Standard Deduction (Old Regime)', '₹50,000', 'Old Regime Rules']
          ],
          ctaTitle: `File Your Income Tax Return (AY ${TAX_CONFIG.AY})`,
          ctaPartner: 'ClearTax',
          ctaDesc: 'Auto-import Form 16 & capital gains records. File ITR securely online in less than 7 minutes.',
          ctaLink: AFFILIATE_LINKS.tax,
          ctaButtonText: 'File ITR Instantly',
          isLiveRates: false
        };

      case 'savings':
      default:
        return {
          title: 'Government-Backed Small Savings Schemes Interest Rates',
          subtitle: 'Current risk-free savings rates certified by Indian Ministry of Finance',
          icon: PiggyBank,
          color: '#ec4899',
          tableHeaders: ['Savings Instrument', 'Current Interest Rate', 'Compounding / Return Type'],
          tableRows: [
            ['Sukanya Samriddhi Yojana (SSY)', `${GOVT_RATES.SSY.toFixed(2)}%`, 'Compounded Annually'],
            ['Public Provident Fund (PPF)', `${GOVT_RATES.PPF.toFixed(2)}%`, 'Compounded Annually'],
            ['Employee Provident Fund (EPF)', `${GOVT_RATES.EPF.toFixed(2)}%`, 'Compounded Monthly'],
            ['National Pension System (NPS)', `~${GOVT_RATES.NPS_EST_RETURNS.toFixed(2)}%`, 'Estimated CAGR (Market Linked)']
          ],
          ctaTitle: 'Build Wealth with High-Yield Small Savings',
          ctaPartner: 'Stable Money',
          ctaDesc: 'Supplement your government retirement plans with safe Fixed Deposits yields up to 9.10% p.a.',
          ctaLink: AFFILIATE_LINKS.savings,
          ctaButtonText: 'Explore Saving Options',
          isLiveRates: false
        };
    }
  };

  const widget = renderWidgetContent();
  const IconComponent = widget.icon;

  return (
    <div 
      className="affiliate-widget-box"
      style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '24px auto',
        padding: '24px',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.25)',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '-40px',
          left: '-40px',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: widget.color,
          filter: 'blur(60px)',
          opacity: 0.12,
          pointerEvents: 'none'
        }}
      />

      {/* Header section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '16px' }}>
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '10px',
          background: `${widget.color}15`,
          border: `1px solid ${widget.color}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <IconComponent size={22} color={widget.color} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 750, color: 'var(--text-primary)', margin: 0 }}>
              {widget.title}
            </h3>
            {widget.isLiveRates && (
              <span style={{
                background: '#4cd96420',
                color: '#4cd964',
                fontSize: '10px',
                fontWeight: 700,
                padding: '2px 6px',
                borderRadius: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4cd964', display: 'inline-block' }} />
                LIVE DATA
              </span>
            )}
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>
            {widget.subtitle}
          </p>
        </div>
      </div>

      {/* Side-by-side or Top-down Comparison Layout */}
      <div className="widget-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px' }}>
        {/* Left Side: Live Data Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px', color: 'var(--text-secondary)' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', textAlign: 'left' }}>
                {widget.tableHeaders.map((header, index) => (
                  <th key={index} style={{ padding: '12px 8px', fontWeight: 650, color: 'var(--text-primary)' }}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {widget.tableRows.map((row, index) => {
                const rowName = typeof row[0] === 'object' && row[0] ? row[0].text : row[0].toString();
                const isHighlighted = rowName.includes('Partner') || rowName.includes('Stable Money') || rowName.includes('⚡');
                return (
                  <tr 
                    key={index} 
                    style={{ 
                      borderBottom: index === widget.tableRows.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.04)',
                      background: isHighlighted ? `${widget.color}08` : 'transparent',
                      fontWeight: isHighlighted ? 700 : 400
                    }}
                  >
                    {row.map((cell, cellIndex) => {
                      if (cell && typeof cell === 'object' && cell.isLink) {
                        return (
                          <td key={cellIndex} style={{ padding: '12px 8px' }}>
                            <a 
                              href={cell.href} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              style={{ 
                                color: '#4cd964', 
                                fontWeight: 700, 
                                textDecoration: 'underline',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px'
                              }}
                            >
                              {cell.text}
                            </a>
                          </td>
                        );
                      }
                      if (cell && typeof cell === 'object' && cell.isReviewLink) {
                        return (
                          <td key={cellIndex} style={{ padding: '12px 8px' }}>
                            <span style={{ display: 'block', marginBottom: '8px' }}>{cell.text}</span>
                            <a 
                              href={cell.href} 
                              style={{ 
                                color: 'var(--accent-blue)', 
                                fontSize: '11.5px', 
                                fontWeight: 600, 
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px'
                              }}
                            >
                              More Details <ArrowRight size={12} />
                            </a>
                          </td>
                        );
                      }
                      const cellStr = cell ? cell.toString() : '';
                      return (
                        <td key={cellIndex} style={{ padding: '12px 8px', color: cellStr.includes('⚡') ? '#4cd964' : 'inherit' }}>
                          {cell}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Right Side: Prominent Affiliate Card */}
        <div 
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '12px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '16px',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
              <Sparkles size={14} color="var(--accent-blue)" />
              <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--accent-blue)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                SPONSORED INTEGRATION
              </span>
            </div>
            
            <h4 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 10px 0', lineHeight: '1.3' }}>
              {widget.ctaTitle}
            </h4>
            
            <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', margin: '0 0 16px 0', lineHeight: '1.5' }}>
              {widget.ctaDesc}
            </p>

            {widget.ctaImage && (
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 0', minHeight: '200px', overflow: 'hidden' }}>
                <img 
                  src={widget.ctaImage} 
                  alt={widget.ctaTitle}
                  style={{ 
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain', 
                    borderRadius: '12px', 
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                  }}
                />
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <a 
              href={widget.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="widget-cta-button"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 18px',
                borderRadius: '8px',
                background: widget.color,
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '13.5px',
                textDecoration: 'none',
                boxShadow: `0 4px 12px ${widget.color}25`,
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1.5px)';
                e.currentTarget.style.boxShadow = `0 6px 16px ${widget.color}35`;
                e.currentTarget.style.filter = 'brightness(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 4px 12px ${widget.color}25`;
                e.currentTarget.style.filter = 'brightness(1)';
              }}
            >
              <span>{widget.ctaButtonText}</span>
              <ArrowRight size={14} />
            </a>
            <span style={{ fontSize: '10px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '4px' }}>
              Official verification partner: {widget.ctaPartner}
            </span>
          </div>
        </div>
      </div>

      {/* Responsive Styles Injection */}
      <style>{`
        @media (max-width: 850px) {
          .widget-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
