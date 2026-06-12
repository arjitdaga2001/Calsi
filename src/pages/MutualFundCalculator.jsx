import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateLumpsum, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { MFContent } from '../content/MFContent';

export function MutualFundCalculator() {
  useDocumentMetadata(
    'Mutual Fund Returns Calculator 2026 | Compare MF Growth | Calsi',
    'Free Mutual Fund Return Calculator. Project your wealth creation, compare historical returns, and estimate maturity values of equity and debt funds.'
  );

  const [totalInvestment, setTotalInvestment] = useState(100000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const results = useMemo(() => {
    return calculateLumpsum(totalInvestment, expectedReturnRate, timePeriod);
  }, [totalInvestment, expectedReturnRate, timePeriod]);

  const chartData = [
    { name: 'Invested amount', value: results.investedAmount, color: 'var(--chart-color-2)' },
    { name: 'Est. returns', value: results.estimatedReturns, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <h1 className="page-title">Mutual Fund Returns Calculator</h1>
      <p className="page-subtitle">Project the growth of your mutual fund portfolio using historical CAGR</p>

      <div className="calculator-layout">
        <div className="calc-inputs">
          <InputSlider 
            label="Total investment" 
            value={totalInvestment} 
            min={500} 
            max={10000000} 
            step={500} 
            onChange={setTotalInvestment} 
            prefix="₹" 
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />
          <InputSlider 
            label="Expected return rate (p.a)" 
            value={expectedReturnRate} 
            min={1} 
            max={30} 
            step={0.1} 
            onChange={setExpectedReturnRate} 
            suffix="%" 
          />
          <InputSlider 
            label="Time period" 
            value={timePeriod} 
            min={1} 
            max={40} 
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
            Disclaimer: Mutual fund investments are subject to market risks, read all scheme related documents carefully. Projected returns are purely mathematical estimations.
          </p>
        </div>
      </div>

      <MFContent />
    </div>
  );
}
