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
    '【Free】 Home Loan EMI Calculator 2026 | Exact Amortization Schedule',
    'Calculate your Home Loan EMI instantly. View the exact principal and interest breakdown with our 100% free amortisation chart.'
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
