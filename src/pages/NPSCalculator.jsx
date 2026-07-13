import { RelatedCalculators } from '../components/RelatedCalculators';
import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateNPS, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { NPSContent } from '../content/NPSContent';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';

export function NPSCalculator() {
  useDocumentMetadata(
    'NPS Calculator — National Pension Scheme | calsi.in',
    'Calculate your NPS retirement corpus & monthly pension with our free NPS calculator. Includes tax benefits under 80CCD at calsi.in.'
  );

  const [monthlyContribution, setMonthlyContribution] = useState(5000);
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [expectedReturn, setExpectedReturn] = useState(10);
  const [annuityRate, setAnnuityRate] = useState(6);
  const [annuityPercent, setAnnuityPercent] = useState(40);

  const results = useMemo(() =>
    calculateNPS(monthlyContribution, currentAge, retirementAge, expectedReturn, annuityRate, annuityPercent),
    [monthlyContribution, currentAge, retirementAge, expectedReturn, annuityRate, annuityPercent]
  );

  const chartData = [
    { name: 'Invested Amount',  value: results.investedAmount,  color: 'var(--chart-color-2)' },
    { name: 'Est. Returns',     value: results.estimatedReturns, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">NPS Pension Calculator</h1>
            <p className="calc-subtitle">National Pension System – Corpus & Pension Estimator</p>
          </div>
          <InputSlider label="Monthly Contribution" value={monthlyContribution} min={500} max={100000} step={500} onChange={setMonthlyContribution} prefix="₹" formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)} />
          <InputSlider label="Current Age" value={currentAge} min={18} max={55} step={1} onChange={setCurrentAge} suffix="Yr" />
          <InputSlider label="Retirement Age" value={retirementAge} min={currentAge + 1} max={70} step={1} onChange={setRetirementAge} suffix="Yr" />
          <InputSlider label="Expected Annual Return" value={expectedReturn} min={6} max={15} step={0.5} onChange={setExpectedReturn} suffix="%" />
          <InputSlider label="Annuity Purchase (%)" value={annuityPercent} min={40} max={100} step={5} onChange={setAnnuityPercent} suffix="%" />
          <InputSlider label="Annuity Rate" value={annuityRate} min={4} max={9} step={0.25} onChange={setAnnuityRate} suffix="%" />
        </div>
        <div className="calc-results">
          <DonutChart data={chartData} total={results.totalCorpus} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Est. Monthly Pension</span>
              <span className="result-value" style={{ color: 'var(--accent-blue)', fontSize: '17px' }}>{formatCurrency(results.monthlyPension)}</span>
            </div>
            <div className="result-row">
              <span className="result-label"><span className="result-label-dot" style={{ background: 'var(--chart-color-2)' }} />Invested Amount</span>
              <span className="result-value">{formatCurrency(results.investedAmount)}</span>
            </div>
            <div className="result-row">
              <span className="result-label"><span className="result-label-dot" style={{ background: 'var(--chart-color-1)' }} />Est. Returns</span>
              <span className="result-value">{formatCurrency(results.estimatedReturns)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Total NPS Corpus</span>
              <span className="result-value">{formatCurrency(results.totalCorpus)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Lumpsum (at 60)</span>
              <span className="result-value">{formatCurrency(results.lumpsum)}</span>
            </div>
            <div className="result-row-total">
              <span className="result-total-label">Annuity Corpus</span>
              <span className="result-total-value">{formatCurrency(results.annuityCorpus)}</span>
            </div>
          </div>
          <p className="calc-disclaimer">NPS requires minimum 40% of corpus to be used for annuity purchase. Returns are market-linked and may vary.</p>
        </div>
      </div>
      <AffiliateWidget />
      <AdSlot />

      
      <RelatedCalculators calculators={[
        { name: 'EMI Calculator', path: '/calculators/emi-calculator', desc: 'Calculate your monthly loan EMI' },
        { name: 'SIP Calculator', path: '/calculators/sip-calculator', desc: 'Calculate your mutual fund returns' },
        { name: 'Income Tax', path: '/calculators/income-tax-calculator', desc: 'Plan your taxes smartly' }
      ]} />

      <NPSContent />
    </div>
  );
}
