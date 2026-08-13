import { RelatedCalculators } from '../components/RelatedCalculators';
import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculatePPF, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { PPFContent } from '../content/PPFContent';
import { GOVT_RATES } from '../constants/financialRates';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';

export function PPFCalculator() {
  useDocumentMetadata(
    '【Free】 PPF Calculator 2026 | Calculate Maturity & Interest Instantly',
    'Calculate your Public Provident Fund (PPF) maturity value and tax-free interest instantly. 100% free, updated for 2026 rules.'
  );

  const [yearlyInvestment, setYearlyInvestment] = useState(150000);
  const [timePeriod, setTimePeriod] = useState(15);
  // PPF rate is fixed by government, currently loaded dynamically
  const interestRate = GOVT_RATES.PPF;

  const results = useMemo(() => {
    return calculatePPF(yearlyInvestment, timePeriod);
  }, [yearlyInvestment, timePeriod]);

  const chartData = [
    { name: 'Invested amount', value: results.investedAmount, color: 'var(--chart-color-2)' },
    { name: 'Est. returns', value: results.estimatedReturns, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">PPF Calculator 2026</h1>
            <p className="calc-subtitle">Calculate tax-free returns and maturity amount for your PPF account</p>
          </div>
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
            step={1}
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
          <DonutChart data={chartData} total={results.totalValue} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">
                <span className="result-label-dot" style={{ background: 'var(--chart-color-2)' }} />
                Invested Amount
              </span>
              <span className="result-value">{formatCurrency(results.investedAmount)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">
                <span className="result-label-dot" style={{ background: 'var(--chart-color-1)' }} />
                Est. Returns
              </span>
              <span className="result-value">{formatCurrency(results.estimatedReturns)}</span>
            </div>
            <div className="result-row-total">
              <span className="result-total-label">Total Value</span>
              <span className="result-total-value">{formatCurrency(results.totalValue)}</span>
            </div>
          </div>
          <p className="calc-disclaimer">
            Calculations are based on the assumption that deposits are made before the 5th of April each year to maximize interest. Actual returns may vary slightly if deposits are staggered.
          </p>
        </div>
      </div>

      <AffiliateWidget />
      <AdSlot />

      
      <RelatedCalculators calculators={[
        { name: 'EMI Calculator', path: '/calculators/emi-calculator', desc: 'Calculate your monthly loan EMI' },
        { name: 'SIP Calculator', path: '/calculators/sip-calculator', desc: 'Calculate your mutual fund returns' },
        { name: 'Income Tax', path: '/calculators/income-tax-calculator', desc: 'Plan your taxes smartly' }
      ]} />

      <PPFContent />
    </div>
  );
}
