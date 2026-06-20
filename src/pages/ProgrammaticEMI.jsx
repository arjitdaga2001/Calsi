import { useMemo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { calculateEMI, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata, useSchema } from '../hooks/useDocumentMetadata';
import { DonutChart } from '../components/DonutChart';
import { InputSlider } from '../components/InputSlider';

export function ProgrammaticEMI() {
  const { loanSlug } = useParams(); // e.g. "20-lakh-home-loan-20-years"

  // Parse amountStr and tenureStr from loanSlug
  let amountStr = '';
  let tenureStr = '';
  if (loanSlug) {
    const match = loanSlug.match(/^(.+)-home-loan-(.+)$/);
    if (match) {
      amountStr = match[1];
      tenureStr = match[2];
    }
  }

  // Parse amount from URL (e.g. "20-lakh" -> 2000000)
  const baseAmount = parseInt(amountStr) || 20;
  const isLakh = amountStr?.includes('lakh');
  const isCrore = amountStr?.includes('crore');
  const initialAmount = isCrore ? baseAmount * 10000000 : (isLakh ? baseAmount * 100000 : 2000000);

  // Parse tenure from URL
  const initialTenure = parseInt(tenureStr) || 20;

  const [loanAmount, setLoanAmount] = useState(initialAmount);
  const [interestRate, setInterestRate] = useState(8.5); // Default home loan rate
  const [tenureYears, setTenureYears] = useState(initialTenure);

  // Update state when initial route values change
  useEffect(() => {
    setLoanAmount(initialAmount);
    setTenureYears(initialTenure);
  }, [initialAmount, initialTenure]);

  const results = useMemo(() => {
    return calculateEMI(loanAmount, interestRate, tenureYears);
  }, [loanAmount, interestRate, tenureYears]);

  const chartData = [
    { name: 'Principal amount', value: results.principalAmount, color: 'var(--chart-color-2)' },
    { name: 'Total interest', value: results.totalInterest, color: 'var(--chart-color-1)' },
  ];

  const formattedBaseStr = isCrore ? `${baseAmount} Crore` : `${baseAmount} Lakh`;
  const title = `₹${formattedBaseStr} Home Loan EMI for ${initialTenure} Years | SBI, HDFC, ICICI`;
  const description = `Calculate EMI for ₹${formattedBaseStr} home loan for ${initialTenure} years. Compare interest rates, total interest payable, and repayment schedule for top banks in India.`;

  useDocumentMetadata(title, description);

  // Dynamic Schema for this specific amount
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is the EMI for ₹${formattedBaseStr} home loan for ${initialTenure} years?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `At a standard interest rate of 8.5%, the EMI for a ₹${formattedBaseStr} home loan for ${initialTenure} years is approximately ${formatCurrency(results.monthlyEMI)}. The total interest paid over the tenure will be ${formatCurrency(results.totalInterest)}.`
        }
      }
    ]
  };
  useSchema(schema);

  return (
    <div>
      <div className="breadcrumb" style={{ marginBottom: '20px', fontSize: '12px', color: 'var(--text-muted)' }}>
        <Link to="/">Home</Link> &gt; <Link to="/emi">EMI Calculator</Link> &gt; ₹{formattedBaseStr} Home Loan
      </div>

      <h1 className="page-title">₹{formattedBaseStr} Home Loan EMI for {initialTenure} Years</h1>
      <p className="page-subtitle">Compare EMI, Total Interest, and Repayment across top Indian banks.</p>

      <div className="calculator-layout">
        <div className="calc-inputs">
          <InputSlider 
            label="Loan amount" 
            value={loanAmount} 
            min={100000} 
            max={50000000} 
            step={100000} 
            onChange={setLoanAmount} 
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
              <span className="result-label">Total interest</span>
              <span className="result-value">{formatCurrency(results.totalInterest)}</span>
            </div>
            <div className="result-row" style={{ marginTop: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
              <span className="result-label">Total amount payable</span>
              <span className="result-total">{formatCurrency(results.totalAmount)}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="calc-faq">
        <h2>Bank Comparison: ₹{formattedBaseStr} Home Loan for {initialTenure} Years</h2>
        <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
          Below is a comparison of EMIs for a ₹{formattedBaseStr} loan across top Indian banks based on current prevailing interest rates.
        </p>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13.5px' }}>
            <thead>
              <tr style={{ background: 'var(--surface-2)', borderBottom: '2px solid var(--border-color)' }}>
                <th style={{ padding: '12px' }}>Bank Name</th>
                <th style={{ padding: '12px' }}>Interest Rate (p.a.)</th>
                <th style={{ padding: '12px' }}>Monthly EMI</th>
              </tr>
            </thead>
            <tbody>
              {/* Generate a dynamic comparison table based on the URL params */}
              {[
                { bank: 'SBI', rate: 8.40 },
                { bank: 'HDFC Bank', rate: 8.50 },
                { bank: 'ICICI Bank', rate: 8.75 },
                { bank: 'Axis Bank', rate: 8.75 },
                { bank: 'Bank of Baroda', rate: 8.40 },
              ].map((row, i) => {
                const bankEMI = calculateEMI(initialAmount, row.rate, initialTenure).monthlyEMI;
                return (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '12px', fontWeight: 600 }}>{row.bank}</td>
                    <td style={{ padding: '12px' }}>{row.rate.toFixed(2)}%</td>
                    <td style={{ padding: '12px', color: 'var(--chart-color-1)', fontWeight: 600 }}>{formatCurrency(bankEMI)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="calc-faq">
        <h2>Frequently Asked Questions</h2>
        <details className="faq-item">
          <summary>What is the EMI for ₹{formattedBaseStr} home loan for {initialTenure} years?</summary>
          <p>Assuming a standard interest rate of 8.5%, the EMI for a ₹{formattedBaseStr} home loan for {initialTenure} years comes to <strong>{formatCurrency(results.monthlyEMI)}</strong>. The total interest payable over the entire tenure will be {formatCurrency(results.totalInterest)}.</p>
        </details>
        <details className="faq-item">
          <summary>How can I reduce the EMI for my ₹{formattedBaseStr} loan?</summary>
          <p>You can reduce your EMI by opting for a longer repayment tenure (e.g., 25 or 30 years instead of {initialTenure} years). However, this will significantly increase the total interest you pay to the bank. A better approach is to negotiate a lower interest rate with your bank or make regular partial prepayments.</p>
        </details>
      </section>
    </div>
  );
}
