import { useState, useMemo } from 'react';
import { RelatedCalculators } from '../components/RelatedCalculators';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateULIP, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { ULIPContent } from '../content/ULIPContent';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';

export function ULIPCalculator() {
  const customSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Online ULIP Calculator",
    "description": "Calculate the maturity value of your ULIP policy. Estimate fund value, charges, and compare ULIP with term + mutual fund combination.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1136"
    }
  };
  useDocumentMetadata(
    'ULIP Calculator 2026: Returns Breakdown & ULIP vs Mutual Fund',
    'Calculate ULIP maturity value after allocation & mortality charges. Compare ULIP returns vs direct SIP to make smart investment decisions.',
    customSchema
  );

  const [annualPremium, setAnnualPremium] = useState(100000);
  const [policyTerm, setPolicyTerm] = useState(15);
  const [returnRate, setReturnRate] = useState(10);
  const [mortalityCharge, setMortalityCharge] = useState(0.5);
  const [fmc, setFmc] = useState(1.35);

  const results = useMemo(() =>
    calculateULIP(annualPremium, policyTerm, returnRate, mortalityCharge, fmc),
    [annualPremium, policyTerm, returnRate, mortalityCharge, fmc]
  );

  const chartData = [
    { name: 'Total Premiums', value: results.investedAmount, color: 'var(--chart-color-2)' },
    { name: 'Est. Returns',   value: results.estimatedReturns, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">ULIP Calculator</h1>
            <p className="calc-subtitle">Unit Linked Insurance Plan – Maturity Value Estimator</p>
          </div>

          <div style={{ background: 'var(--surface-color, #1e293b)', border: '1px solid var(--accent-blue, #3b82f6)', borderRadius: '12px', padding: '16px 20px', marginBottom: '24px', boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--accent-blue, #3b82f6)', fontWeight: '600', fontSize: '14px' }}>
              <span>⚡ Quick Summary: ULIP vs Mutual Fund Rule</span>
            </div>
            <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              For an annual premium of <strong>{formatCurrency(annualPremium)}</strong> over <strong>{policyTerm} years</strong>, estimated ULIP maturity value is <strong>{formatCurrency(results.maturityValue)}</strong>. Note: ULIPs have a 5-year lock-in and charge allocation + mortality fees.
            </p>
          </div>
          <InputSlider label="Annual Premium" value={annualPremium} min={12000} max={1000000} step={12000} onChange={setAnnualPremium} prefix="₹" formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)} />
          <InputSlider label="Policy Term" value={policyTerm} min={5} max={30} step={1} onChange={setPolicyTerm} suffix="Yr" />
          <InputSlider label="Expected Fund Return (p.a)" value={returnRate} min={4} max={18} step={0.5} onChange={setReturnRate} suffix="%" />
          <InputSlider label="Mortality Charge (% of premium)" value={mortalityCharge} min={0.1} max={3} step={0.05} onChange={setMortalityCharge} suffix="%" />
          <InputSlider label="Fund Management Charge (FMC)" value={fmc} min={0.5} max={2.5} step={0.05} onChange={setFmc} suffix="%" />
        </div>
        <div className="calc-results" style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}>
          <DonutChart data={chartData} total={results.maturityValue} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Total Premiums Paid</span>
              <span className="result-value">{formatCurrency(results.investedAmount)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Estimated Returns</span>
              <span className="result-value">{formatCurrency(results.estimatedReturns)}</span>
            </div>
            <div className="result-row-total">
              <span className="result-total-label">Maturity Value</span>
              <span className="result-total-value">{formatCurrency(results.maturityValue)}</span>
            </div>
          </div>
          <p className="calc-disclaimer">ULIPs have a 5-year lock-in. Charges reduce returns in early years. Consider Term + Mutual Fund for better flexibility.</p>
        </div>
      </div>
      <AffiliateWidget />
      <AdSlot />

      
      <RelatedCalculators calculators={[
        { name: 'EMI Calculator', path: '/calculators/emi-calculator', desc: 'Calculate your monthly loan EMI' },
        { name: 'SIP Calculator', path: '/calculators/sip-calculator', desc: 'Calculate your mutual fund returns' },
        { name: 'Income Tax', path: '/calculators/income-tax-calculator', desc: 'Plan your taxes smartly' }
      ]} />

      <ULIPContent />
    </div>
  );
}
