import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateEMI, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { EMIContent } from '../content/EMIContent';

export function EMICalculator() {
  useDocumentMetadata(
    'EMI Calculator 2026 – Home Loan & Personal Loan | Calsi',
    'Calculate Equated Monthly Installment (EMI) for Home, Car, and Personal loans. View your amortization schedule and plan prepayments to become debt-free faster.'
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
      <h1 className="page-title">EMI Calculator</h1>
      <p className="page-subtitle">Calculate Your Equated Monthly Installment</p>

      <div className="calculator-layout">
        <div className="calc-inputs">
          <InputSlider
            label="Loan Amount"
            value={loanAmount}
            min={100000}
            max={50000000}
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
          <DonutChart data={chartData} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Monthly EMI</span>
              <span className="result-value" style={{ color: 'var(--chart-color-1)' }}>
                {formatCurrency(results.emi)}
              </span>
            </div>
            <div className="result-row" style={{ marginTop: '16px' }}>
              <span className="result-label">Principal Amount</span>
              <span className="result-value">{formatCurrency(results.principalAmount)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Total Interest</span>
              <span className="result-value">{formatCurrency(results.totalInterest)}</span>
            </div>
            <div className="result-row" style={{ marginTop: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
              <span className="result-label">Total Payment</span>
              <span className="result-total">{formatCurrency(results.totalPayment)}</span>
            </div>
          </div>
        </div>
      </div>

      <EMIContent />
    </div>
  );
}
