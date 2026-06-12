import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateSIP, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { SIPContent } from '../content/SIPContent';

export function SIPCalculator() {
  useDocumentMetadata(
    'SIP Calculator 2026 – Calculate Monthly Mutual Fund Returns | Calsi',
    'Free SIP Calculator India. Enter monthly investment, rate & tenure to get exact maturity value. Calculate how ₹5,000/month grows over 10, 15, 20 years. No signup needed.'
  );

  const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const results = useMemo(() => {
    return calculateSIP(monthlyInvestment, expectedReturnRate, timePeriod);
  }, [monthlyInvestment, expectedReturnRate, timePeriod]);

  const chartData = [
    { name: 'Invested amount', value: results.investedAmount, color: 'var(--chart-color-2)' },
    { name: 'Est. returns', value: results.estimatedReturns, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <h1 className="page-title">SIP Calculator</h1>
      <p className="page-subtitle">Estimate your monthly SIP mutual fund returns &amp; maturity value</p>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <InputSlider
            label="Monthly investment"
            value={monthlyInvestment}
            min={500}
            max={200000}
            step={500}
            onChange={setMonthlyInvestment}
            prefix="₹"
          />
          <InputSlider
            label="Expected annual return"
            value={expectedReturnRate}
            min={1}
            max={30}
            step={0.5}
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
            Results are indicative. Actual returns may vary. Not investment advice.{' '}
            <a href="https://www.amfiindia.com" target="_blank" rel="noopener noreferrer">AMFI</a>-regulated funds.
          </p>
        </div>
      </div>

      <SIPContent />
    </div>
  );
}
