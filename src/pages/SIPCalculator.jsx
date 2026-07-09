import { useState, useMemo } from 'react';
import { RelatedCalculators } from '../components/RelatedCalculators';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateSIP, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { SIPContent } from '../content/SIPContent';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';
import { RelatedGuides } from '../components/RelatedGuides';
import { PopularSIPs } from '../components/PopularLinks';
export function SIPCalculator() {
  useDocumentMetadata(
    'SIP Calculator 2026: Calculate Mutual Fund Returns in India',
    'Free SIP Calculator (2026). Calculate mutual fund SIP returns, maturity amount, and wealth gain. Compare top mutual funds in India instantly.'
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
      <div className="calculator-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">SIP Calculator 2026 (Mutual Fund)</h1>
            <p className="calc-subtitle">Calculate your expected return on monthly SIP investments in India with accurate wealth compounding</p>
          </div>
          <InputSlider
            label="Monthly investment"
            value={monthlyInvestment}
            min={500}
            max={10000000}
            step={500}
            onChange={setMonthlyInvestment}
            prefix="₹"
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
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
            Results are indicative. Actual returns may vary. Not investment advice.{' '}
            <a href="https://www.amfiindia.com" target="_blank" rel="noopener noreferrer">AMFI</a>-regulated funds.
          </p>
        </div>
      </div>

      <AffiliateWidget />
      <AdSlot />

      <RelatedGuides slugs={['step-up-sip-1-crore-strategy', 'how-to-start-sip-investment', 'child-education-planning-sip']} title="Top SIP Strategies & Guides" />
      <PopularSIPs />

      
      <RelatedCalculators calculators={[
        { name: 'EMI Calculator', path: '/calculators/emi-calculator', desc: 'Calculate your monthly loan EMI' },
        { name: 'SIP Calculator', path: '/calculators/sip-calculator', desc: 'Calculate your mutual fund returns' },
        { name: 'Income Tax', path: '/calculators/income-tax-calculator', desc: 'Plan your taxes smartly' }
      ]} />

      <SIPContent />
    </div>
  );
}
