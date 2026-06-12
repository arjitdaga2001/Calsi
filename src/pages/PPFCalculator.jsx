import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculatePPF, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

export function PPFCalculator() {
  useDocumentMetadata(
    'PPF Calculator – Public Provident Fund Calculator | Calsi',
    'Calculate the maturity amount, interest earned, and year-wise balances of your PPF account with our free PPF calculator.'
  );

  const [yearlyInvestment, setYearlyInvestment] = useState(150000);
  const [timePeriod, setTimePeriod] = useState(15);

  const results = useMemo(() => {
    return calculatePPF(yearlyInvestment, timePeriod);
  }, [yearlyInvestment, timePeriod]);

  const chartData = [
    { name: 'Invested amount', value: results.investedAmount, color: 'var(--chart-color-2)' },
    { name: 'Est. returns', value: results.estimatedReturns, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <h1 className="page-title">PPF Calculator</h1>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <InputSlider 
            label="Yearly investment" value={yearlyInvestment} min={500} max={150000} step={500} 
            onChange={setYearlyInvestment} prefix="₹" formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />
          <InputSlider 
            label="Time period" value={timePeriod} min={15} max={50} step={5} 
            onChange={setTimePeriod} suffix="Yr" 
          />
          <div style={{ marginTop: '16px', fontSize: '14px', color: 'var(--text-secondary)' }}>
            * PPF currently offers a fixed interest rate of 7.1% p.a.
          </div>
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
