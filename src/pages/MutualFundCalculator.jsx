import { useState, useMemo } from 'react';
import { RelatedCalculators } from '../components/RelatedCalculators';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateLumpsum, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { MFContent } from '../content/MFContent';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';

export function MutualFundCalculator() {
  useDocumentMetadata(
    'Mutual Fund Returns Calculator 2026 (SIP & Lumpsum)',
    'Estimate the future value of your equity and debt mutual fund investments. Free Mutual Fund Return Calculator for Indian investors.'
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
      <div className="calculator-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">Mutual Fund Returns Calculator 2026</h1>
            <p className="calc-subtitle">Estimate the future value of your equity and debt mutual fund investments</p>
          </div>
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
            Disclaimer: Mutual fund investments are subject to market risks, read all scheme related documents carefully. Projected returns are purely mathematical estimations.
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

      <MFContent />
    </div>
  );
}
