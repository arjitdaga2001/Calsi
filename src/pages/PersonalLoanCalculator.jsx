import { RelatedCalculators } from '../components/RelatedCalculators';
import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateEMI, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { PersonalLoanContent } from '../content/PersonalLoanContent';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';

export function PersonalLoanCalculator() {
  useDocumentMetadata(
    'Personal Loan EMI Calculator India | calsi.in',
    'Calculate personal loan EMI in seconds. Use our free personal loan EMI calculator for instant results on any loan amount, rate & tenure at calsi.in.'
  );

  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(12.0);
  const [loanTenure, setLoanTenure] = useState(3);

  const results = useMemo(() => calculateEMI(loanAmount, interestRate, loanTenure), [loanAmount, interestRate, loanTenure]);

  const chartData = [
    { name: 'Principal Amount', value: results.principalAmount, color: 'var(--chart-color-2)' },
    { name: 'Total Interest',   value: results.totalInterest,   color: 'var(--chart-color-1)' },
  ];

  const lenders = [
    { name: 'SBI Personal Loan', rate: 11.15 }, { name: 'HDFC Bank', rate: 10.90 },
    { name: 'ICICI Bank', rate: 10.85 }, { name: 'Bajaj Finserv', rate: 13.00 },
    { name: 'MoneyView', rate: 14.00 },
  ];

  return (
    <div>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">Personal Loan Calculator</h1>
            <p className="calc-subtitle">Calculate your monthly EMI for a Personal Loan</p>
          </div>
          <InputSlider label="Loan Amount" value={loanAmount} min={10000} max={4000000} step={10000} onChange={setLoanAmount} prefix="₹" formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)} />
          <InputSlider label="Rate of Interest (p.a)" value={interestRate} min={8} max={36} step={0.1} onChange={setInterestRate} suffix="%" />
          <InputSlider label="Loan Tenure" value={loanTenure} min={1} max={7} step={1} onChange={setLoanTenure} suffix="Yr" />
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
        </div>
      </div>

      <AffiliateWidget />
      <AdSlot />

      
      <RelatedCalculators calculators={[
        { name: 'EMI Calculator', path: '/calculators/emi-calculator', desc: 'Calculate your monthly loan EMI' },
        { name: 'SIP Calculator', path: '/calculators/sip-calculator', desc: 'Calculate your mutual fund returns' },
        { name: 'Income Tax', path: '/calculators/income-tax-calculator', desc: 'Plan your taxes smartly' }
      ]} />

      <PersonalLoanContent />
    </div>
  );
}
