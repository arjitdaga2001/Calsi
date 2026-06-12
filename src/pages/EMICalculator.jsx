import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateEMI, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata, useSchema } from '../hooks/useDocumentMetadata';

const EMI_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Calsi EMI Calculator",
      "url": "https://calsi.vercel.app/emi",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
      "description": "Free EMI Calculator. Calculate your monthly home, car, or personal loan EMI, total interest payable, and amortization details.",
      "creator": { "@type": "Organization", "name": "Calsi", "url": "https://calsi.vercel.app" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How to calculate home loan EMI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Home loan EMI is calculated using the formula: E = P × r × (1 + r)^n / [(1 + r)^n - 1]. Where E is EMI, P is Principal Loan Amount, r is rate of interest calculated on monthly basis, and n is loan tenure in months."
          }
        },
        {
          "@type": "Question",
          "name": "What is the EMI for 20 lakh home loan for 20 years?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For a ₹20 lakh home loan at an 8.5% interest rate for 20 years, the monthly EMI will be approximately ₹17,356. Total interest paid over 20 years will be ₹21.65 lakhs, making the total repayment ₹41.65 lakhs."
          }
        },
        {
          "@type": "Question",
          "name": "How can I reduce my home loan EMI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reduce your EMI by: 1) Increasing your loan tenure (though total interest paid will be higher). 2) Negotiating a lower interest rate or transferring your balance to another bank. 3) Making a larger down payment. 4) Making partial prepayments whenever you have surplus funds."
          }
        },
        {
          "@type": "Question",
          "name": "Does loan tenure affect my EMI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, loan tenure inversely affects EMI. A longer tenure reduces your monthly EMI burden but increases the total interest paid over the life of the loan. A shorter tenure increases the EMI but saves you money on interest."
          }
        },
        {
          "@type": "Question",
          "name": "Is personal loan EMI calculated differently from home loan EMI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, the mathematical formula for calculating EMI remains the same for home loans, personal loans, and car loans. However, personal loans typically have higher interest rates and shorter tenures (1-5 years) compared to home loans (up to 30 years)."
          }
        }
      ]
    }
  ]
};

export function EMICalculator() {
  useDocumentMetadata(
    'EMI Calculator 2026 – Home, Personal & Car Loan EMI | Calsi',
    'Free Loan EMI Calculator. Calculate your monthly EMI for home loans, personal loans, and car loans. Find out total interest payable and repayment schedule instantly.'
  );
  useSchema(EMI_SCHEMA);

  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(10);

  const results = useMemo(() => {
    return calculateEMI(loanAmount, interestRate, tenureYears);
  }, [loanAmount, interestRate, tenureYears]);

  const chartData = [
    { name: 'Principal amount', value: results.principalAmount, color: 'var(--chart-color-2)' },
    { name: 'Total interest', value: results.totalInterest, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <h1 className="page-title">EMI Calculator</h1>
      <p className="page-subtitle">Calculate Equated Monthly Installment for Home, Car & Personal Loans</p>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <InputSlider 
            label="Loan amount" 
            value={loanAmount} 
            min={10000} 
            max={10000000} 
            step={10000} 
            onChange={setLoanAmount} 
            prefix="₹" 
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />
          <InputSlider 
            label="Rate of interest (p.a)" 
            value={interestRate} 
            min={1} 
            max={30} 
            step={0.1} 
            onChange={setInterestRate} 
            suffix="%" 
          />
          <InputSlider 
            label="Loan tenure" 
            value={tenureYears} 
            min={1} 
            max={30} 
            step={1} 
            onChange={setTenureYears} 
            suffix="Yr" 
          />
        </div>
        <div className="calc-results">
          <DonutChart data={chartData} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Monthly EMI</span>
              <span className="result-total">{formatCurrency(results.monthlyEMI)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Principal amount</span>
              <span className="result-value">{formatCurrency(results.principalAmount)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Total interest</span>
              <span className="result-value">{formatCurrency(results.totalInterest)}</span>
            </div>
            <div className="result-row" style={{ marginTop: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
              <span className="result-label">Total amount</span>
              <span className="result-value">{formatCurrency(results.totalAmount)}</span>
            </div>
          </div>
          <p className="calc-disclaimer">
            Results are indicative. Actual bank EMIs may vary slightly due to processing fees or exact loan disbursement dates.
          </p>
        </div>
      </div>

      {/* ── SEO: FAQ Section ── */}
      <section className="calc-faq">
        <h2>Frequently Asked Questions</h2>

        <details className="faq-item">
          <summary>What is the EMI for 20 lakh home loan for 20 years?</summary>
          <p>For a ₹20 lakh home loan at an <strong>8.5% interest rate</strong> for 20 years, the monthly EMI will be approximately <strong>₹17,356</strong>. Total interest paid over 20 years will be ₹21.65 lakhs, making the total repayment ₹41.65 lakhs.</p>
        </details>

        <details className="faq-item">
          <summary>How is EMI calculated?</summary>
          <p>EMI (Equated Monthly Installment) is calculated using the standard formula: <strong>E = P × r × (1 + r)ⁿ / [(1 + r)ⁿ - 1]</strong>. Where P = Principal Loan Amount, r = rate of interest calculated on monthly basis, and n = loan tenure in months.</p>
        </details>

        <details className="faq-item">
          <summary>How can I reduce my home loan EMI?</summary>
          <p>You can reduce your EMI by: 1) Increasing your loan tenure (increases total interest paid). 2) Negotiating a lower interest rate with your bank. 3) Making a larger down payment initially. 4) Making partial prepayments when you have surplus funds.</p>
        </details>

        <details className="faq-item">
          <summary>Does loan tenure affect my EMI?</summary>
          <p>Yes, significantly. A longer tenure reduces your monthly EMI burden but increases the total interest you pay over the life of the loan. Conversely, a shorter tenure increases the monthly EMI but saves you a lot of money on total interest.</p>
        </details>

        <details className="faq-item">
          <summary>Is personal loan EMI calculated differently?</summary>
          <p>No, the mathematical formula remains the same for home, personal, and car loans. However, personal loans typically have much higher interest rates (10.5% - 24%) and shorter tenures (1-5 years) compared to home loans.</p>
        </details>
      </section>
    </div>
  );
}
