import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateFD, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata, useSchema } from '../hooks/useDocumentMetadata';

const FD_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Calsi FD Calculator",
      "url": "https://calsi.vercel.app/fd",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
      "description": "Free Fixed Deposit (FD) Calculator. Calculate maturity amount and total interest earned on your FD investments in India.",
      "creator": { "@type": "Organization", "name": "Calsi", "url": "https://calsi.vercel.app" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is FD interest calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fixed Deposit interest is generally calculated using the compound interest formula: A = P(1 + r/n)^(n*t). Where A is maturity amount, P is principal invested, r is annual interest rate (in decimal), n is number of times interest is compounded per year (usually 4 for quarterly), and t is the tenure in years."
          }
        },
        {
          "@type": "Question",
          "name": "What is the return on 1 lakh FD for 5 years?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At a 7% annual interest rate (compounded quarterly), an investment of ₹1 lakh for 5 years will grow to approximately ₹1,41,478. The interest earned over 5 years is ₹41,478."
          }
        },
        {
          "@type": "Question",
          "name": "Is FD interest taxable in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, interest earned on Fixed Deposits is fully taxable in India under 'Income from Other Sources'. Banks will deduct TDS at 10% if your interest income exceeds ₹40,000 in a year (₹50,000 for senior citizens). If you fall in a higher tax bracket, you must pay the remaining tax."
          }
        },
        {
          "@type": "Question",
          "name": "Do senior citizens get higher FD rates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, almost all Indian banks and post offices offer an additional 0.50% to 0.75% interest rate on Fixed Deposits for senior citizens (individuals aged 60 years and above)."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Tax-Saving FD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 5-year tax-saving Fixed Deposit allows you to claim a deduction of up to ₹1.5 lakh under Section 80C of the Income Tax Act. However, these FDs have a strict lock-in period of 5 years and cannot be withdrawn prematurely."
          }
        }
      ]
    }
  ]
};

export function FDCalculator() {
  useDocumentMetadata(
    'FD Calculator 2026 – Fixed Deposit Interest & Maturity | Calsi',
    'Free Fixed Deposit (FD) Calculator. Determine maturity amount and total interest earned on your FDs instantly. Includes quarterly compounding logic used by Indian banks.'
  );
  useSchema(FD_SCHEMA);

  const [totalInvestment, setTotalInvestment] = useState(100000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [timePeriod, setTimePeriod] = useState(5);

  const results = useMemo(() => {
    return calculateFD(totalInvestment, interestRate, timePeriod);
  }, [totalInvestment, interestRate, timePeriod]);

  const chartData = [
    { name: 'Invested amount', value: results.investedAmount, color: 'var(--chart-color-2)' },
    { name: 'Est. returns', value: results.estimatedReturns, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <h1 className="page-title">FD Calculator</h1>
      <p className="page-subtitle">Calculate Fixed Deposit Maturity Amount &amp; Interest Earned</p>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <InputSlider 
            label="Total investment" 
            value={totalInvestment} 
            min={1000} 
            max={10000000} 
            step={1000} 
            onChange={setTotalInvestment} 
            prefix="₹" 
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />
          <InputSlider 
            label="Rate of interest (p.a)" 
            value={interestRate} 
            min={1} 
            max={15} 
            step={0.1} 
            onChange={setInterestRate} 
            suffix="%" 
          />
          <InputSlider 
            label="Time period" 
            value={timePeriod} 
            min={1} 
            max={25} 
            step={1} 
            onChange={setTimePeriod} 
            suffix="Yr" 
          />
        </div>
        <div className="calc-results">
          <DonutChart data={chartData} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Invested amount</span>
              <span className="result-value">{formatCurrency(results.investedAmount)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Est. returns</span>
              <span className="result-value">{formatCurrency(results.estimatedReturns)}</span>
            </div>
            <div className="result-row" style={{ marginTop: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
              <span className="result-label">Total value</span>
              <span className="result-total">{formatCurrency(results.totalValue)}</span>
            </div>
          </div>
          <p className="calc-disclaimer">
            Results are indicative. Assumes quarterly compounding of interest, which is standard across most Indian banks. Actual maturity value may differ slightly based on exact deposit dates and TDS deductions.
          </p>
        </div>
      </div>

      {/* ── SEO: FAQ Section ── */}
      <section className="calc-faq">
        <h2>Frequently Asked Questions</h2>

        <details className="faq-item">
          <summary>How is FD interest calculated?</summary>
          <p>Most Indian banks calculate FD interest using quarterly compounding. The formula is: <strong>A = P(1 + r/4)^(4*t)</strong>, where P is the principal, r is the annual rate (in decimal), and t is the tenure in years.</p>
        </details>

        <details className="faq-item">
          <summary>What is the return on ₹1 lakh FD for 5 years?</summary>
          <p>At a <strong>7% annual interest rate</strong> (compounded quarterly), an investment of ₹1 lakh for 5 years will grow to approximately <strong>₹1,41,478</strong>. The interest earned is ₹41,478.</p>
        </details>

        <details className="faq-item">
          <summary>Is FD interest taxable in India?</summary>
          <p>Yes. Interest from FDs is fully taxable based on your income tax slab. Banks will deduct TDS at 10% if your interest income exceeds ₹40,000 in a year (₹50,000 for senior citizens). You can submit Form 15G/15H to avoid TDS if your total income is below the taxable limit.</p>
        </details>

        <details className="faq-item">
          <summary>Do senior citizens get higher FD rates?</summary>
          <p>Yes, Indian banks generally offer an additional <strong>0.50% to 0.75%</strong> interest rate on Fixed Deposits for senior citizens (individuals aged 60 and above).</p>
        </details>

        <details className="faq-item">
          <summary>What is a 5-Year Tax-Saving FD?</summary>
          <p>A Tax-Saving FD allows you to claim tax deductions up to <strong>₹1.5 lakh under Section 80C</strong>. However, these FDs have a strict lock-in period of 5 years, and you cannot withdraw the money prematurely or take a loan against it.</p>
        </details>
      </section>
    </div>
  );
}
