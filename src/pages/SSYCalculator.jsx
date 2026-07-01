import { RelatedCalculators } from '../components/RelatedCalculators';
import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateSSY, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { SSYContent } from '../content/SSYContent';
import { GOVT_RATES } from '../constants/financialRates';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';

export function SSYCalculator() {
  useDocumentMetadata(
    'SSY Calculator — Sukanya Samriddhi Yojana | calsi.in',
    'Calculate Sukanya Samriddhi Yojana returns with our free SSY calculator. Get maturity amount at 8.2% with EEE tax benefit at calsi.in.'
  );

  const [yearlyInvestment, setYearlyInvestment] = useState(150000);
  const [girlsAge, setGirlsAge] = useState(5);
  const [startYear] = useState(new Date().getFullYear());
  
  // SSY rate is fixed by government, currently loaded dynamically
  const interestRate = GOVT_RATES.SSY;

  const results = useMemo(() => {
    return calculateSSY(yearlyInvestment, girlsAge);
  }, [yearlyInvestment, girlsAge]);

  const chartData = [
    { name: 'Invested amount', value: results.investedAmount, color: 'var(--chart-color-2)' },
    { name: 'Est. returns', value: results.estimatedReturns, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">SSY Calculator</h1>
            <p className="calc-subtitle">Sukanya Samriddhi Yojana Maturity Calculator</p>
          </div>
          <InputSlider
            label="Yearly investment"
            value={yearlyInvestment}
            min={250}
            max={150000}
            step={250}
            onChange={setYearlyInvestment}
            prefix="₹"
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />
          <InputSlider
            label="Girl's Age"
            value={girlsAge}
            min={1}
            max={10}
            step={1}
            onChange={setGirlsAge}
            suffix="Yr"
          />
          <div className="info-box" style={{ marginTop: '20px', padding: '16px', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Current SSY Interest Rate</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '16px' }}>{interestRate}% p.a.</span>
            </div>
            <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              Deposits are made for 15 years. The account matures after 21 years from the date of opening.
            </p>
          </div>
        </div>
        <div className="calc-results">
          <DonutChart data={chartData} total={results.totalValue} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Maturity Year</span>
              <span className="result-value" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                {startYear + 21}
              </span>
            </div>
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
            Assumes yearly deposits are made at the beginning of the financial year. The interest rate is subject to change by the government.
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

      <SSYContent />
    </div>
  );
}
