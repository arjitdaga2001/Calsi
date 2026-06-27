import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateEMI, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { CarLoanContent } from '../content/CarLoanContent';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';

export function CarLoanCalculator() {
  useDocumentMetadata(
    'Car Loan EMI Calculator India | calsi.in',
    'Calculate car loan EMI instantly with our free car loan EMI calculator. Enter loan amount, rate & tenure to get accurate EMI results at calsi.in.'
  );

  const [loanAmount, setLoanAmount] = useState(800000);
  const [interestRate, setInterestRate] = useState(9.0);
  const [loanTenure, setLoanTenure] = useState(5);

  const results = useMemo(() => calculateEMI(loanAmount, interestRate, loanTenure), [loanAmount, interestRate, loanTenure]);

  const chartData = [
    { name: 'Principal Amount', value: results.principalAmount, color: 'var(--chart-color-2)' },
    { name: 'Total Interest',   value: results.totalInterest,   color: 'var(--chart-color-1)' },
  ];

  const banks = [
    { bank: 'SBI', rate: 8.75 }, { bank: 'HDFC Bank', rate: 9.00 },
    { bank: 'ICICI Bank', rate: 9.10 }, { bank: 'Axis Bank', rate: 9.25 },
    { bank: 'Kotak Mahindra', rate: 8.90 },
  ];

  return (
    <div>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">Car Loan Calculator</h1>
            <p className="calc-subtitle">Calculate your monthly EMI for a Car or Vehicle Loan</p>
          </div>
          <InputSlider label="Car Loan Amount" value={loanAmount} min={50000} max={10000000} step={50000} onChange={setLoanAmount} prefix="₹" formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)} />
          <InputSlider label="Rate of Interest (p.a)" value={interestRate} min={1} max={25} step={0.05} onChange={setInterestRate} suffix="%" />
          <InputSlider label="Loan Tenure" value={loanTenure} min={1} max={8} step={1} onChange={setLoanTenure} suffix="Yr" />
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

      <CarLoanContent />
    </div>
  );
}
