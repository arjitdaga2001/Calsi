import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateFD, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { FDContent } from '../content/FDContent';
import { AdSlot } from '../components/AdSlot';

export function FDCalculator() {
  useDocumentMetadata(
    'FD Calculator 2026 – Fixed Deposit Interest & Maturity | Calsi',
    'Free Fixed Deposit (FD) Calculator. Determine maturity amount and total interest earned on your FDs instantly. Includes quarterly compounding logic used by Indian banks.'
  );

  const [totalInvestment, setTotalInvestment] = useState(100000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [timePeriod, setTimePeriod] = useState(5);

  const results = useMemo(() => {
    return calculateFD(totalInvestment, interestRate, timePeriod);
  }, [totalInvestment, interestRate, timePeriod]);

  const chartData = [
    { name: 'Invested amount', value: results.investedAmount, color: 'var(--chart-color-2)' },
    { name: 'Est. returns', value: results.estimatedReturns, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <h1 className="page-title">FD Calculator</h1>
      <p className="page-subtitle">Calculate Fixed Deposit Maturity Amount &amp; Interest Earned</p>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <InputSlider 
            label="Total investment" 
            value={totalInvestment} 
            min={1000} 
            max={10000000} 
            step={1000} 
            onChange={setTotalInvestment} 
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
            min={1} 
            max={25} 
            step={1} 
            onChange={setTimePeriod} 
            suffix="Yr" 
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
          <p className="calc-disclaimer">
            Results are indicative. Assumes quarterly compounding of interest, which is standard across most Indian banks. Actual maturity value may differ slightly based on exact deposit dates and TDS deductions.
          </p>
        </div>
      </div>

      <AdSlot />

      <FDContent />
    </div>
  );
}
