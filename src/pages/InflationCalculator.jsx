import { RelatedCalculators } from '../components/RelatedCalculators';
import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateInflation, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { InflationContent } from '../content/InflationContent';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';

export function InflationCalculator() {
  useDocumentMetadata(
    'Inflation Calculator 2026 India: Purchasing Power & Future Value',
    'Calculate how inflation erodes purchasing power over time. Estimate future cost of living and education expenses in India.'
  );

  const [amount, setAmount] = useState(100000);
  const [inflationRate, setInflationRate] = useState(6);
  const [years, setYears] = useState(10);
  const [mode, setMode] = useState('future');

  const results = useMemo(() =>
    calculateInflation(amount, inflationRate, years, mode),
    [amount, inflationRate, years, mode]
  );

  const chartData = [
    { name: 'Today\'s Value',       value: results.presentValue,  color: 'var(--chart-color-2)' },
    { name: 'Purchasing Power Loss', value: results.purchasingPowerLoss, color: '#f43f5e' },
  ];

  return (
    <div>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">Inflation Calculator</h1>
            <p className="calc-subtitle">Understand how inflation erodes the value of your money</p>
          </div>

          <div style={{ background: 'var(--surface-color, #1e293b)', border: '1px solid var(--accent-blue, #3b82f6)', borderRadius: '12px', padding: '16px 20px', marginBottom: '24px', boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--accent-blue, #3b82f6)', fontWeight: '600', fontSize: '14px' }}>
              <span>⚡ Quick Summary: Purchasing Power Impact</span>
            </div>
            <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              At <strong>{inflationRate}% annual inflation</strong>, <strong>{formatCurrency(amount)} today</strong> will require <strong>{formatCurrency(results.futureValue)}</strong> in <strong>{years} years</strong> to maintain identical purchasing power. Real value lost: <strong>{formatCurrency(results.purchasingPowerLoss)}</strong>.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            <button onClick={() => setMode('future')} style={{
              flex: 1, padding: '10px 0', borderRadius: '10px', fontSize: '13px', fontWeight: 600,
              border: `2px solid ${mode === 'future' ? 'var(--accent-blue)' : 'var(--border-color)'}`,
              background: mode === 'future' ? 'var(--primary-glow)' : 'transparent',
              color: mode === 'future' ? 'var(--accent-blue)' : 'var(--text-secondary)', cursor: 'pointer'
            }}>Future Value</button>
            <button onClick={() => setMode('present')} style={{
              flex: 1, padding: '10px 0', borderRadius: '10px', fontSize: '13px', fontWeight: 600,
              border: `2px solid ${mode === 'present' ? 'var(--accent-blue)' : 'var(--border-color)'}`,
              background: mode === 'present' ? 'var(--primary-glow)' : 'transparent',
              color: mode === 'present' ? 'var(--accent-blue)' : 'var(--text-secondary)', cursor: 'pointer'
            }}>Present Value</button>
          </div>
          <InputSlider
            label={mode === 'future' ? 'Amount Today' : 'Amount in Future'}
            value={amount} min={1000} max={10000000} step={1000} onChange={setAmount}
            prefix="₹" formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />
          <InputSlider label="Annual Inflation Rate" value={inflationRate} min={1} max={20} step={0.5} onChange={setInflationRate} suffix="%" />
          <InputSlider label="Time Period" value={years} min={1} max={40} step={1} onChange={setYears} suffix="Yr" />
        </div>
        <div className="calc-results">
          <DonutChart data={chartData} total={results.futureValue} />
          <div className="results-section">
            {mode === 'future' ? (
              <>
                <div className="result-row">
                  <span className="result-label">Amount Today</span>
                  <span className="result-value">{formatCurrency(results.presentValue)}</span>
                </div>
                <div className="result-row">
                  <span className="result-label">Equivalent Amount in {years} Years</span>
                  <span className="result-value" style={{ color: 'var(--accent-blue)', fontWeight: 700 }}>{formatCurrency(results.futureValue)}</span>
                </div>
                <div className="result-row">
                  <span className="result-label">Purchasing Power of Today's {formatCurrency(amount)} in {years} Yrs</span>
                  <span className="result-value" style={{ color: '#f43f5e' }}>{formatCurrency(results.effectivePurchasingPower)}</span>
                </div>
                <div className="result-row-total">
                  <span className="result-total-label">Purchasing Power Lost</span>
                  <span className="result-total-value" style={{ color: '#f43f5e' }}>{formatCurrency(results.purchasingPowerLoss)}</span>
                </div>
              </>
            ) : (
              <>
                <div className="result-row">
                  <span className="result-label">Future Amount Needed</span>
                  <span className="result-value">{formatCurrency(results.futureValue)}</span>
                </div>
                <div className="result-row">
                  <span className="result-label">Today's Equivalent Value</span>
                  <span className="result-value" style={{ color: 'var(--accent-blue)', fontWeight: 700 }}>{formatCurrency(results.presentValue)}</span>
                </div>
                <div className="result-row-total">
                  <span className="result-total-label">Value Eroded by Inflation</span>
                  <span className="result-total-value" style={{ color: '#f43f5e' }}>{formatCurrency(results.purchasingPowerLoss)}</span>
                </div>
              </>
            )}
          </div>
          <p className="calc-disclaimer">Based on a constant inflation rate. India's average CPI inflation was ~6% over the past decade. Actual inflation may vary by category and region.</p>
        </div>
      </div>
      <AffiliateWidget />
      <AdSlot />

      
      <RelatedCalculators calculators={[
        { name: 'EMI Calculator', path: '/calculators/emi-calculator', desc: 'Calculate your monthly loan EMI' },
        { name: 'SIP Calculator', path: '/calculators/sip-calculator', desc: 'Calculate your mutual fund returns' },
        { name: 'Income Tax', path: '/calculators/income-tax-calculator', desc: 'Plan your taxes smartly' }
      ]} />

      <InflationContent />
    </div>
  );
}
