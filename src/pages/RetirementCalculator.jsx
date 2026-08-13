import { RelatedCalculators } from '../components/RelatedCalculators';
import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateRetirement, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { RetirementContent } from '../content/RetirementContent';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';
import { RelatedGuides } from '../components/RelatedGuides';
export function RetirementCalculator() {
  useDocumentMetadata(
    '【Free】 Retirement Planning Calculator 2026 | Calculate Corpus Instantly',
    'Calculate how much corpus you need to retire comfortably in India. 100% free retirement planner with inflation adjustment.'
  );

  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpenses, setMonthlyExpenses] = useState(50000);
  const [inflationRate, setInflationRate] = useState(6);
  const [returnRate, setReturnRate] = useState(10);
  const [currentSavings, setCurrentSavings] = useState(500000);

  const results = useMemo(() =>
    calculateRetirement(currentAge, retirementAge, monthlyExpenses, inflationRate, returnRate, currentSavings),
    [currentAge, retirementAge, monthlyExpenses, inflationRate, returnRate, currentSavings]
  );

  const chartData = [
    { name: 'Current Savings', value: results.currentSavingsGrown, color: 'var(--chart-color-2)' },
    { name: 'Additional Needed', value: results.additionalCorpusNeeded, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">Retirement Calculator</h1>
            <p className="calc-subtitle">Find out how much corpus you need to retire comfortably</p>
          </div>
          <InputSlider label="Current Age" value={currentAge} min={20} max={60} step={1} onChange={setCurrentAge} suffix="Yr" />
          <InputSlider label="Retirement Age" value={retirementAge} min={currentAge + 1} max={75} step={1} onChange={setRetirementAge} suffix="Yr" />
          <InputSlider label="Monthly Expenses (Today)" value={monthlyExpenses} min={10000} max={500000} step={5000} onChange={setMonthlyExpenses} prefix="₹" formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)} />
          <InputSlider label="Inflation Rate" value={inflationRate} min={3} max={12} step={0.5} onChange={setInflationRate} suffix="%" />
          <InputSlider label="Expected Return Rate" value={returnRate} min={5} max={15} step={0.5} onChange={setReturnRate} suffix="%" />
          <InputSlider label="Current Savings" value={currentSavings} min={0} max={10000000} step={50000} onChange={setCurrentSavings} prefix="₹" formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)} />
        </div>
        <div className="calc-results" style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}>
          <DonutChart data={chartData} total={results.corpusNeeded} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Monthly SIP Required</span>
              <span className="result-value" style={{ color: 'var(--accent-blue)', fontWeight: 700, fontSize: '16px' }}>{formatCurrency(results.monthlyInvestmentRequired)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Monthly Expenses at Retirement</span>
              <span className="result-value">{formatCurrency(results.monthlyExpensesAtRetirement)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Current Savings (grown)</span>
              <span className="result-value">{formatCurrency(results.currentSavingsGrown)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Years to Retire</span>
              <span className="result-value">{results.yearsToRetire} years</span>
            </div>
            <div className="result-row-total">
              <span className="result-total-label">Additional Corpus Needed</span>
              <span className="result-total-value">{formatCurrency(results.additionalCorpusNeeded)}</span>
            </div>
          </div>
          <p className="calc-disclaimer">Life expectancy assumed at 85 years. Returns are pre-tax and pre-inflation. Consult a financial advisor for a personalized retirement plan.</p>
        </div>
      </div>
      <AffiliateWidget />
      <AdSlot />

      <RelatedGuides slugs={['retirement-corpus-planning', 'swp-monthly-income-strategy', 'fire-movement-india-early-retirement', 'unified-pension-scheme-ups-vs-nps']} title="Retirement Planning Guides" />

      
      <RelatedCalculators calculators={[
        { name: 'EMI Calculator', path: '/calculators/emi-calculator', desc: 'Calculate your monthly loan EMI' },
        { name: 'SIP Calculator', path: '/calculators/sip-calculator', desc: 'Calculate your mutual fund returns' },
        { name: 'Income Tax', path: '/calculators/income-tax-calculator', desc: 'Plan your taxes smartly' }
      ]} />

      <RetirementContent />
    </div>
  );
}
