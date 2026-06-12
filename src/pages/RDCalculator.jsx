import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateRD, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

export function RDCalculator() {
  useDocumentMetadata(
    'RD Calculator – Recurring Deposit Calculator | Calsi',
    'Calculate your Recurring Deposit (RD) maturity amount and interest returns easily with our customizable term inputs.'
  );

  const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [timePeriod, setTimePeriod] = useState(24); // months

  const results = useMemo(() => {
    return calculateRD(monthlyDeposit, interestRate, timePeriod);
  }, [monthlyDeposit, interestRate, timePeriod]);

  const chartData = [
    { name: 'Invested amount', value: results.investedAmount, color: 'var(--chart-color-2)' },
    { name: 'Est. returns', value: results.estimatedReturns, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <h1 className="page-title">RD Calculator</h1>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <InputSlider
            label="Monthly deposit"
            value={monthlyDeposit}
            min={100}
            max={100000}
            step={100}
            onChange={setMonthlyDeposit}
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
            label="Time period"
            value={timePeriod}
            min={6}
            max={120}
            step={1}
            onChange={setTimePeriod}
            suffix="Mo"
          />
        </div>
        <div className="calc-results">
          <DonutChart data={chartData} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Invested amount</span>
              <span className="result-value">{formatCurrency(results.investedAmount)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Est. returns</span>
              <span className="result-value">{formatCurrency(results.estimatedReturns)}</span>
            </div>
            <div className="result-row" style={{ marginTop: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
              <span className="result-label">Total value</span>
              <span className="result-total">{formatCurrency(results.totalValue)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
