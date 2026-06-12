import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculatePPF, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata, useSchema } from '../hooks/useDocumentMetadata';

const PPF_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Calsi PPF Calculator",
      "url": "https://calsi.vercel.app/ppf",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
      "description": "Free PPF Calculator. Calculate your Public Provident Fund maturity amount, total interest earned, and year-wise balances.",
      "creator": { "@type": "Organization", "name": "Calsi", "url": "https://calsi.vercel.app" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the current PPF interest rate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The current interest rate for the Public Provident Fund (PPF) is 7.1% per annum (as of Q1 2026). The interest is compounded annually and paid on March 31st every year. The Ministry of Finance reviews and announces the rate every quarter."
          }
        },
        {
          "@type": "Question",
          "name": "What is the maximum amount I can invest in PPF?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The maximum amount you can invest in a PPF account is ₹1,50,000 per financial year. The minimum investment required to keep the account active is ₹500 per financial year."
          }
        },
        {
          "@type": "Question",
          "name": "What is the maturity period of PPF?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The standard maturity period for a PPF account is 15 years. After maturity, you can choose to withdraw the entire corpus, or extend the account in blocks of 5 years indefinitely, either with or without making fresh contributions."
          }
        },
        {
          "@type": "Question",
          "name": "Is PPF investment tax-free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, PPF falls under the EEE (Exempt-Exempt-Exempt) tax category. Your deposits (up to ₹1.5L) are tax-deductible under Section 80C. The interest earned every year is tax-free. Finally, the maturity amount withdrawn after 15 years is completely tax-free."
          }
        },
        {
          "@type": "Question",
          "name": "Can I withdraw money from PPF before 15 years?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Partial withdrawals from PPF are allowed starting from the 7th financial year. You can withdraw up to 50% of the balance at the end of the 4th preceding year or the immediately preceding year, whichever is lower. Premature closure is allowed after 5 years only for specific reasons like medical emergencies or higher education, with a 1% penalty on interest."
          }
        }
      ]
    }
  ]
};

export function PPFCalculator() {
  useDocumentMetadata(
    'PPF Calculator 2026 – Public Provident Fund Returns | Calsi',
    'Free PPF Calculator. Calculate maturity value, interest earned, and yearly balances for your Public Provident Fund (PPF) account at 7.1% p.a.'
  );
  useSchema(PPF_SCHEMA);

  const [yearlyInvestment, setYearlyInvestment] = useState(150000);
  const [timePeriod, setTimePeriod] = useState(15);

  const results = useMemo(() => {
    return calculatePPF(yearlyInvestment, timePeriod);
  }, [yearlyInvestment, timePeriod]);

  const chartData = [
    { name: 'Invested amount', value: results.investedAmount, color: 'var(--chart-color-2)' },
    { name: 'Est. returns', value: results.estimatedReturns, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <h1 className="page-title">PPF Calculator</h1>
      <p className="page-subtitle">Calculate Public Provident Fund Maturity Amount &amp; Interest</p>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <InputSlider 
            label="Yearly investment" 
            value={yearlyInvestment} 
            min={500} 
            max={150000} 
            step={500} 
            onChange={setYearlyInvestment} 
            prefix="₹" 
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />
          <InputSlider 
            label="Time period" 
            value={timePeriod} 
            min={15} 
            max={50} 
            step={5} 
            onChange={setTimePeriod} 
            suffix="Yr" 
          />
          <div style={{ marginTop: '16px', fontSize: '13.5px', color: 'var(--text-secondary)', background: 'var(--surface-2)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
            <strong>Note:</strong> PPF currently offers a fixed interest rate of <strong>7.1% p.a.</strong> (compounded annually).
          </div>
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
            Results are indicative. PPF interest is calculated on the minimum balance between the 5th and the end of the month. To maximize returns, invest before the 5th of the month.
          </p>
        </div>
      </div>

      {/* ── SEO: FAQ Section ── */}
      <section className="calc-faq">
        <h2>Frequently Asked Questions</h2>

        <details className="faq-item">
          <summary>What is the maximum amount I can invest in PPF?</summary>
          <p>The maximum amount you can invest in a PPF account is <strong>₹1,50,000 per financial year</strong>. You can invest this as a lumpsum or in up to 12 installments. The minimum required investment is ₹500 per year.</p>
        </details>

        <details className="faq-item">
          <summary>Is PPF completely tax-free?</summary>
          <p>Yes, PPF is one of the few investment options that fall under the <strong>EEE (Exempt-Exempt-Exempt) category</strong>. Your principal (up to ₹1.5L) is exempt under Section 80C. The interest earned is exempt from tax. Finally, the maturity amount is completely tax-free.</p>
        </details>

        <details className="faq-item">
          <summary>What is the maturity period for PPF?</summary>
          <p>The standard maturity period for a PPF account is <strong>15 years</strong>. After maturity, you have the option to withdraw the entire amount or extend the account in blocks of 5 years (with or without making new contributions).</p>
        </details>

        <details className="faq-item">
          <summary>How is PPF interest calculated?</summary>
          <p>PPF interest is currently <strong>7.1% p.a.</strong> It is calculated monthly on the lowest balance between the 5th day and the end of the month, but it is compounded and credited to your account only once a year, on March 31st. For maximum interest, always invest before the 5th of the month.</p>
        </details>

        <details className="faq-item">
          <summary>Can I withdraw from PPF before 15 years?</summary>
          <p>Partial withdrawals are allowed from the <strong>7th financial year</strong> onwards. You can withdraw up to 50% of the balance. Premature closure of the entire account is allowed only after 5 years for specific emergencies (like serious illness or higher education), with a 1% interest penalty.</p>
        </details>
      </section>
    </div>
  );
}
