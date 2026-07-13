import { useState, useMemo } from 'react';
import { RelatedCalculators } from '../components/RelatedCalculators';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateTermInsurance, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { TermInsuranceContent } from '../content/TermInsuranceContent';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';

export function TermInsuranceCalculator() {
  const customSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Term Insurance Premium Calculator",
    "description": "Calculate the right term life insurance cover for your family. Use the Human Life Value method to find out how much term insurance you need in India.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1306"
    }
  };
  useDocumentMetadata(
    'Term Insurance Calculator 2025 – How Much Cover Do You Need? | Calsi | Term Insurance Premium Calculator',
    'Calculate the right term life insurance cover for your family. Use the Human Life Value method to find out how much term insurance you need in India.',
    customSchema
  );

  const [annualIncome, setAnnualIncome] = useState(1200000);
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [inflationRate, setInflationRate] = useState(6);
  const [existingCover, setExistingCover] = useState(0);

  const results = useMemo(() =>
    calculateTermInsurance(annualIncome, currentAge, retirementAge, inflationRate, existingCover),
    [annualIncome, currentAge, retirementAge, inflationRate, existingCover]
  );

  const coverLakhs = Math.round(results.suggestedCover / 100000);

  const chartData = [
    { name: 'Human Life Value', value: results.humanLifeValue, color: 'var(--chart-color-1)' },
    { name: 'Existing Cover',   value: existingCover,           color: 'var(--chart-color-2)' },
  ];

  return (
    <div>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">Term Insurance Calculator</h1>
            <p className="calc-subtitle">Find out exactly how much life cover your family needs</p>
          </div>
          <InputSlider label="Annual Income" value={annualIncome} min={200000} max={10000000} step={100000} onChange={setAnnualIncome} prefix="₹" formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)} />
          <InputSlider label="Current Age" value={currentAge} min={18} max={55} step={1} onChange={setCurrentAge} suffix="Yr" />
          <InputSlider label="Retirement Age" value={retirementAge} min={currentAge + 1} max={70} step={1} onChange={setRetirementAge} suffix="Yr" />
          <InputSlider label="Expected Inflation Rate" value={inflationRate} min={3} max={12} step={0.5} onChange={setInflationRate} suffix="%" />
          <InputSlider label="Existing Life Cover" value={existingCover} min={0} max={50000000} step={500000} onChange={setExistingCover} prefix="₹" formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)} />
        </div>
        <div className="calc-results">
          <DonutChart data={chartData} total={results.suggestedCover} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Human Life Value (HLV)</span>
              <span className="result-value">{formatCurrency(results.humanLifeValue)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Existing Cover</span>
              <span className="result-value">{formatCurrency(existingCover)}</span>
            </div>
            <div className="result-row-total">
              <span className="result-total-label">Additional Cover Needed</span>
              <span className="result-total-value">{formatCurrency(results.recommendedCover)}</span>
            </div>
          </div>
          <p className="calc-disclaimer">Calculated using the Human Life Value (HLV) method. Actual premium depends on health, lifestyle, and insurer. Compare plans on PolicyBazaar or Ditto for best rates.</p>
        </div>
      </div>

      <AffiliateWidget />
      <AdSlot />

      
      <RelatedCalculators calculators={[
        { name: 'EMI Calculator', path: '/calculators/emi-calculator', desc: 'Calculate your monthly loan EMI' },
        { name: 'SIP Calculator', path: '/calculators/sip-calculator', desc: 'Calculate your mutual fund returns' },
        { name: 'Income Tax', path: '/calculators/income-tax-calculator', desc: 'Plan your taxes smartly' }
      ]} />

      <TermInsuranceContent />
    </div>
  );
}
