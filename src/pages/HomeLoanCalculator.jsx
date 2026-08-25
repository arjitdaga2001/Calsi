import { useState, useMemo } from 'react';
import { RelatedCalculators } from '../components/RelatedCalculators';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateEMI, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { HomeLoanContent } from '../content/HomeLoanContent';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';
import { RelatedGuides } from '../components/RelatedGuides';
import { PopularHomeLoans } from '../components/PopularLinks';
export function HomeLoanCalculator() {
  useDocumentMetadata(
    'Home Loan EMI Calculator 2026: Monthly EMI & Interest Breakdown',
    'Calculate Home Loan EMI instantly across SBI, HDFC, ICICI. View full monthly amortisation schedule and principal vs interest split.'
  );

  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);

  const results = useMemo(() => calculateEMI(loanAmount, interestRate, loanTenure), [loanAmount, interestRate, loanTenure]);

  const chartData = [
    { name: 'Principal Amount', value: results.principalAmount, color: 'var(--chart-color-2)' },
    { name: 'Total Interest',   value: results.totalInterest,   color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">Home Loan EMI Calculator 2026</h1>
            <p className="calc-subtitle">Calculate your monthly EMI and total interest for Housing Loans in India (SBI, HDFC, ICICI)</p>
          </div>

          <div style={{ background: 'var(--surface-color, #1e293b)', border: '1px solid var(--accent-blue, #3b82f6)', borderRadius: '12px', padding: '16px 20px', marginBottom: '24px', boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--accent-blue, #3b82f6)', fontWeight: '600', fontSize: '14px' }}>
              <span>⚡ Quick Summary: Home Loan EMI Benchmark</span>
            </div>
            <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              For a <strong>₹{formatCurrency(loanAmount)}</strong> home loan at <strong>{interestRate}% p.a.</strong> over <strong>{loanTenure} years</strong>, your monthly EMI is <strong>{formatCurrency(results.monthlyEMI)}</strong>. Total interest payable is <strong>{formatCurrency(results.totalInterest)}</strong> (total payback: {formatCurrency(results.totalAmount)}).
            </p>
          </div>
          <InputSlider label="Home Loan Amount" value={loanAmount} min={100000} max={100000000} step={100000} onChange={setLoanAmount} prefix="₹" formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)} />
          <InputSlider label="Rate of Interest (p.a)" value={interestRate} min={1} max={20} step={0.05} onChange={setInterestRate} suffix="%" />
          <InputSlider label="Loan Tenure" value={loanTenure} min={1} max={30} step={1} onChange={setLoanTenure} suffix="Yr" />
        </div>
        <div className="calc-results">
          <DonutChart data={chartData} total={results.totalAmount} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Monthly EMI</span>
              <span className="result-value" style={{ color: 'var(--accent-blue)', fontSize: '17px' }}>{formatCurrency(results.monthlyEMI)}</span>
            </div>
            <div className="result-row">
              <span className="result-label"><span className="result-label-dot" style={{ background: 'var(--chart-color-2)' }} />Principal Amount</span>
              <span className="result-value">{formatCurrency(results.principalAmount)}</span>
            </div>
            <div className="result-row">
              <span className="result-label"><span className="result-label-dot" style={{ background: 'var(--chart-color-1)' }} />Total Interest</span>
              <span className="result-value">{formatCurrency(results.totalInterest)}</span>
            </div>
            <div className="result-row-total">
              <span className="result-total-label">Total Payment</span>
              <span className="result-total-value">{formatCurrency(results.totalAmount)}</span>
            </div>
          </div>
          <p className="calc-disclaimer">Interest rates are indicative. Actual rates may vary by lender, credit score, and property type.</p>
        </div>
      </div>

      <AffiliateWidget />
      <AdSlot />

      <RelatedGuides slugs={['home-loan-prepayment-mathematics', 'buy-vs-rent-house-india-2026', 'reit-vs-physical-real-estate']} title="Real Estate & Home Loan Guides" />
      
      <PopularHomeLoans />

      <RelatedCalculators calculators={[
        { name: 'EMI Calculator', path: '/calculators/emi-calculator', desc: 'Calculate your monthly loan EMI' },
        { name: 'SIP Calculator', path: '/calculators/sip-calculator', desc: 'Calculate your mutual fund returns' },
        { name: 'Income Tax', path: '/calculators/income-tax-calculator', desc: 'Plan your taxes smartly' }
      ]} />

      <HomeLoanContent />
    </div>
  );
}
