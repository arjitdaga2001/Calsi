import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculatePPF, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { PPFContent } from '../content/PPFContent';

export function PPFCalculator() {
  useDocumentMetadata(
    'PPF Calculator 2026 – Public Provident Fund Returns | Calsi',
    'Calculate your PPF maturity amount and tax-free interest over 15 years with our free PPF returns calculator.'
  );

  const [yearlyInvestment, setYearlyInvestment] = useState(150000);
  const [timePeriod, setTimePeriod] = useState(15);
  // PPF rate is fixed by government, currently 7.1%
  const interestRate = 7.1;

  const results = useMemo(() => {
    return calculatePPF(yearlyInvestment, interestRate, timePeriod);
  }, [yearlyInvestment, interestRate, timePeriod]);

  const chartData = [
    { name: 'Invested amount', value: results.investedAmount, color: 'var(--chart-color-2)' },
    { name: 'Est. returns', value: results.estimatedReturns, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <h1 className="page-title">PPF Calculator</h1>
      <p className="page-subtitle">Calculate Public Provident Fund Maturity &amp; Interest</p>

      <div className="calculator-layout">
        <div className="calc-inputs">
          <InputSlider
            label="Yearly investment"
            value={yearlyInvestment}
            min={500}
            max={150000}
            step={500}
            onChange={setYearlyInvestment}
            prefix="₹"
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />
          <InputSlider
            label="Time period"
            value={timePeriod}
            min={15}
            max={50}
            step={5}
            onChange={setTimePeriod}
            suffix="Yr"
          />
          <div className="info-box" style={{ marginTop: '20px', padding: '16px', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Current PPF Interest Rate</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '16px' }}>{interestRate}% p.a.</span>
            </div>
            <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              Interest rate is determined by the Government of India every quarter.
            </p>
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
          <p className="calc-disclaimer">
            Calculations are based on the assumption that deposits are made before the 5th of April each year to maximize interest. Actual returns may vary slightly if deposits are staggered.
          </p>
        </div>
      </div>

      <PPFContent />
    </div>
  );
}
