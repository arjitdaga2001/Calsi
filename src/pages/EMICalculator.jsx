import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateEMI, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

export function EMICalculator() {
  useDocumentMetadata(
    'EMI Calculator – Home, Personal & Car Loan EMI | Calsi',
    'Calculate your monthly loan EMI, total interest payable, and amortization details for home, car, or personal loans.'
  );

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
        </div>
      </div>
    </div>
  );
}
