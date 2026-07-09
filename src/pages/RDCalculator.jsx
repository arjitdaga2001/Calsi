import { RelatedCalculators } from '../components/RelatedCalculators';
import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateRD, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { RDContent } from '../content/RDContent';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';

export function RDCalculator() {
  useDocumentMetadata(
    'RD Calculator 2026: Calculate Recurring Deposit Interest in India',
    'Calculate your monthly Recurring Deposit maturity value and interest. Compare RD rates from SBI, Post Office, HDFC, and ICICI Bank.'
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
      <div className="calculator-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">RD Calculator 2026</h1>
            <p className="calc-subtitle">Calculate your monthly Recurring Deposit maturity value and interest</p>
          </div>
          <InputSlider
            label="Monthly deposit"
            value={monthlyDeposit}
            min={100}
            max={10000000}
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
            Results are indicative. Assumes quarterly compounding of interest. Actual maturity value may vary based on exact deposit dates and applicable TDS under Income Tax laws.
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

      <RDContent />
    </div>
  );
}
