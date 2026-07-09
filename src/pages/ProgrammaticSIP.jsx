import { useMemo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { calculateSIP, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata, useSchema } from '../hooks/useDocumentMetadata';
import { DonutChart } from '../components/DonutChart';
import { InputSlider } from '../components/InputSlider';

export function ProgrammaticSIP() {
  const { sipSlug } = useParams(); // e.g. "5000-sip-for-10-years"

  // Parse amountStr and tenureStr from sipSlug
  let amountStr = '';
  let tenureStr = '';
  if (sipSlug) {
    const match = sipSlug.match(/^(\d+)-sip-for-(\d+)-years$/);
    if (match) {
      amountStr = match[1];
      tenureStr = match[2];
    }
  }

  // Parse amount from URL
  const initialAmount = parseInt(amountStr) || 5000;
  // Parse tenure from URL
  const initialTenure = parseInt(tenureStr) || 10;

  const [monthlyInvestment, setMonthlyInvestment] = useState(initialAmount);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12); // Default SIP return rate 12%
  const [timePeriod, setTimePeriod] = useState(initialTenure);

  // Update state when initial route values change
  useEffect(() => {
    setMonthlyInvestment(initialAmount);
    setTimePeriod(initialTenure);
  }, [initialAmount, initialTenure]);

  const results = useMemo(() => {
    return calculateSIP(monthlyInvestment, expectedReturnRate, timePeriod);
  }, [monthlyInvestment, expectedReturnRate, timePeriod]);

  const chartData = [
    { name: 'Invested amount', value: results.investedAmount, color: 'var(--chart-color-2)' },
    { name: 'Est. returns', value: results.estimatedReturns, color: 'var(--chart-color-1)' },
  ];

  const formattedAmount = initialAmount.toLocaleString('en-IN');
  const title = `₹${formattedAmount} SIP for ${initialTenure} Years | Mutual Fund Returns 2026`;
  const description = `Calculate the maturity value of ₹${formattedAmount} monthly SIP for ${initialTenure} years. See the power of compounding with 12% expected returns in Indian Mutual Funds.`;

  useDocumentMetadata(title, description);

  // Dynamic Schema for this specific amount
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is the return on a ₹${formattedAmount} monthly SIP for ${initialTenure} years?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `At an expected return rate of 12% per annum, a monthly SIP of ₹${formattedAmount} for ${initialTenure} years will grow to approximately ${formatCurrency(results.totalValue)}. You will invest a total of ${formatCurrency(results.investedAmount)}, and earn an estimated wealth gain of ${formatCurrency(results.estimatedReturns)}.`
        }
      }
    ]
  };
  useSchema(schema);

  return (
    <div>
      <div className="breadcrumb" style={{ marginBottom: '20px', fontSize: '12px', color: 'var(--text-muted)' }}>
        <Link to="/">Home</Link> &gt; <Link to="/calculators/sip-calculator">SIP Calculator</Link> &gt; ₹{formattedAmount} SIP
      </div>

      <h1 className="page-title">₹{formattedAmount} SIP Returns for {initialTenure} Years</h1>
      <p className="page-subtitle">Analyze the wealth creation and maturity value of your mutual fund investment.</p>

      <div className="calculator-layout">
        <div className="calc-inputs">
          <InputSlider 
            label="Monthly investment" 
            value={monthlyInvestment} 
            min={500} 
            max={1000000} 
            step={500} 
            onChange={setMonthlyInvestment} 
            prefix="₹" 
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />
          <InputSlider 
            label="Expected annual return" 
            value={expectedReturnRate} 
            min={1} 
            max={30} 
            step={0.5} 
            onChange={setExpectedReturnRate} 
            suffix="%" 
          />
          <InputSlider 
            label="Time period" 
            value={timePeriod} 
            min={1} 
            max={40} 
            step={1} 
            onChange={setTimePeriod} 
            suffix="Yr" 
          />
        </div>
        <div className="calc-results">
          <DonutChart data={chartData} total={results.totalValue} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Invested Amount</span>
              <span className="result-value">{formatCurrency(results.investedAmount)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Est. Returns</span>
              <span className="result-value">{formatCurrency(results.estimatedReturns)}</span>
            </div>
            <div className="result-row" style={{ marginTop: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
              <span className="result-label" style={{ fontWeight: 700 }}>Total Value</span>
              <span className="result-total" style={{ color: 'var(--accent-blue)', fontSize: '17px', fontWeight: 700 }}>{formatCurrency(results.totalValue)}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="calc-faq">
        <h2>Wealth Compounding Analysis</h2>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
          By investing <strong>₹{formattedAmount} every month</strong> for <strong>{initialTenure} years</strong>, you are harnessing the power of compounding. 
          Historically, Indian equity mutual funds (like Nifty 50 Index funds) have delivered annualized returns between 12% to 15% over long periods. 
          <br /><br />
          If we assume a conservative <strong>12% CAGR</strong>, your total investment of <strong>{formatCurrency(results.investedAmount)}</strong> 
          will generate an estimated wealth gain (profit) of <strong>{formatCurrency(results.estimatedReturns)}</strong>. 
          This results in a final maturity corpus of <strong>{formatCurrency(results.totalValue)}</strong>.
        </p>
      </section>

      <section className="calc-faq">
        <h2>Frequently Asked Questions</h2>
        <details className="faq-item">
          <summary>What will be the value of ₹{formattedAmount} SIP in {initialTenure} years?</summary>
          <p>Assuming a 12% annual return, a ₹{formattedAmount} monthly SIP will grow to <strong>{formatCurrency(results.totalValue)}</strong> in {initialTenure} years.</p>
        </details>
        <details className="faq-item">
          <summary>Which mutual fund is best for a ₹{formattedAmount} SIP?</summary>
          <p>For a tenure of {initialTenure} years, equity mutual funds are ideal. A low-cost Nifty 50 Index Fund or a Flexi-Cap fund is generally recommended by financial advisors for long-term wealth creation. Always assess your risk appetite before investing.</p>
        </details>
      </section>
    </div>
  );
}
