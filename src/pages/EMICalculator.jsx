import { useState, useMemo } from 'react';
import { RelatedCalculators } from '../components/RelatedCalculators';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateEMI, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { EMIContent } from '../content/EMIContent';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';
import { PopularHomeLoans } from '../components/PopularLinks';

export function EMICalculator() {
  useDocumentMetadata(
    'EMI Calculator 2026: Calculate Home & Personal Loan EMI in India',
    'Calculate Equated Monthly Installment (EMI) for Home, Car, and Personal loans for 2026. View your amortization schedule and total interest payable.'
  );

  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);

  const results = useMemo(() => {
    return calculateEMI(loanAmount, interestRate, loanTenure);
  }, [loanAmount, interestRate, loanTenure]);

  const chartData = [
    { name: 'Principal Amount', value: results.principalAmount, color: 'var(--chart-color-2)' },
    { name: 'Total Interest', value: results.totalInterest, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">EMI Calculator 2026</h1>
            <p className="calc-subtitle">Calculate your Equated Monthly Installment (EMI) for Home, Car & Personal Loans in India</p>
          </div>
          <InputSlider
            label="Loan Amount"
            value={loanAmount}
            min={100000}
            max={10000000}
            step={100000}
            onChange={setLoanAmount}
            prefix="₹"
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />
          <InputSlider
            label="Rate of Interest (p.a)"
            value={interestRate}
            min={1}
            max={20}
            step={0.1}
            onChange={setInterestRate}
            suffix="%"
          />
          <InputSlider
            label="Loan Tenure"
            value={loanTenure}
            min={1}
            max={30}
            step={1}
            onChange={setLoanTenure}
            suffix="Yr"
          />
        </div>
        <div className="calc-results">
          <DonutChart data={chartData} total={results.totalAmount} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Monthly EMI</span>
              <span className="result-value" style={{ color: 'var(--accent-blue)', fontSize: '17px' }}>
                {formatCurrency(results.monthlyEMI)}
              </span>
            </div>
            <div className="result-row">
              <span className="result-label">
                <span className="result-label-dot" style={{ background: 'var(--chart-color-2)' }} />
                Principal Amount
              </span>
              <span className="result-value">{formatCurrency(results.principalAmount)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">
                <span className="result-label-dot" style={{ background: 'var(--chart-color-1)' }} />
                Total Interest
              </span>
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

      <PopularHomeLoans />
      
      <RelatedCalculators calculators={[
        { name: 'EMI Calculator', path: '/calculators/emi-calculator', desc: 'Calculate your monthly loan EMI' },
        { name: 'SIP Calculator', path: '/calculators/sip-calculator', desc: 'Calculate your mutual fund returns' },
        { name: 'Income Tax', path: '/calculators/income-tax-calculator', desc: 'Plan your taxes smartly' }
      ]} />

      <EMIContent />
    </div>
  );
}
