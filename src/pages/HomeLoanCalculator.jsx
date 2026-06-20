import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateEMI, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { HomeLoanContent } from '../content/HomeLoanContent';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';

export function HomeLoanCalculator() {
  useDocumentMetadata(
    'Home Loan EMI Calculator 2025 – Calculate Housing Loan EMI | Calsi',
    'Calculate your Home Loan EMI instantly. Compare principal, total interest and repayment schedule for SBI, HDFC, ICICI & all major banks.'
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
            <h1 className="calc-title">Home Loan Calculator</h1>
            <p className="calc-subtitle">Calculate your monthly EMI for a Housing Loan</p>
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

      <HomeLoanContent />
    </div>
  );
}
