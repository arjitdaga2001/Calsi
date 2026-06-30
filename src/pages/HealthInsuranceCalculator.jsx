import { useState, useMemo } from 'react';
import { RelatedCalculators } from '../components/RelatedCalculators';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateHealthInsurance, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { HealthInsuranceContent } from '../content/HealthInsuranceContent';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';

export function HealthInsuranceCalculator() {
  useDocumentMetadata(
    'Health Insurance Premium Calculator 2025 – Estimate Mediclaim Cost | Calsi',
    'Estimate your health insurance premium based on age, members, city and cover amount. Find the best mediclaim policy for your family in India.'
  );

  const [age, setAge] = useState(32);
  const [members, setMembers] = useState(2);
  const [cityTier, setCityTier] = useState('metro');
  const [existingConditions, setExistingConditions] = useState(false);
  const [coverAmount, setCoverAmount] = useState(500000);

  const results = useMemo(() =>
    calculateHealthInsurance(age, members, cityTier, existingConditions, coverAmount),
    [age, members, cityTier, existingConditions, coverAmount]
  );

  const chartData = [
    { name: 'Base Premium', value: results.annualPremium, color: 'var(--chart-color-2)' },
    { name: 'GST (18%)',    value: results.gst,            color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">Health Insurance Calculator</h1>
            <p className="calc-subtitle">Estimate your Mediclaim / Health Insurance Premium</p>
          </div>
          <InputSlider label="Primary Member Age" value={age} min={18} max={75} step={1} onChange={setAge} suffix="Yr" />
          <InputSlider label="No. of Members" value={members} min={1} max={6} step={1} onChange={setMembers} suffix=" members" />
          <InputSlider label="Sum Insured (Cover Amount)" value={coverAmount} min={100000} max={10000000} step={100000} onChange={setCoverAmount} prefix="₹" formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)} />

          <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
            {[['metro', 'Metro City'], ['tier1', 'Tier-1 City'], ['tier2', 'Tier-2 / Rest']].map(([val, label]) => (
              <button key={val} onClick={() => setCityTier(val)} style={{
                flex: 1, padding: '10px 4px', borderRadius: '10px', fontSize: '11.5px', fontWeight: 600,
                border: `2px solid ${cityTier === val ? 'var(--accent-blue)' : 'var(--border-color)'}`,
                background: cityTier === val ? 'var(--primary-glow)' : 'transparent',
                color: cityTier === val ? 'var(--accent-blue)' : 'var(--text-secondary)', cursor: 'pointer'
              }}>{label}</button>
            ))}
          </div>

          <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <input type="checkbox" id="preExisting" checked={existingConditions} onChange={e => setExistingConditions(e.target.checked)} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
            <label htmlFor="preExisting" style={{ fontSize: '14px', color: 'var(--text-secondary)', cursor: 'pointer' }}>Pre-existing conditions (diabetes, BP, etc.)</label>
          </div>
        </div>
        <div className="calc-results">
          <DonutChart data={chartData} total={results.totalWithGST} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Monthly Premium</span>
              <span className="result-value" style={{ color: 'var(--accent-blue)', fontSize: '17px' }}>{formatCurrency(results.monthlyPremium)}</span>
            </div>
            <div className="result-row">
              <span className="result-label"><span className="result-label-dot" style={{ background: 'var(--chart-color-2)' }} />Annual Base Premium</span>
              <span className="result-value">{formatCurrency(results.annualPremium)}</span>
            </div>
            <div className="result-row">
              <span className="result-label"><span className="result-label-dot" style={{ background: 'var(--chart-color-1)' }} />GST @ 18%</span>
              <span className="result-value">{formatCurrency(results.gst)}</span>
            </div>
            <div className="result-row-total">
              <span className="result-total-label">Total Annual Premium</span>
              <span className="result-total-value">{formatCurrency(results.totalWithGST)}</span>
            </div>
          </div>
          <p className="calc-disclaimer">This is an estimate. Actual premiums vary by insurer, medical history, and policy features. Compare plans on PolicyBazaar or Ditto for exact quotes.</p>
        </div>
      </div>
      <AffiliateWidget />
      <AdSlot />

      
      <RelatedCalculators calculators={[
        { name: 'EMI Calculator', path: '/calculators/emi-calculator', desc: 'Calculate your monthly loan EMI' },
        { name: 'SIP Calculator', path: '/calculators/sip-calculator', desc: 'Calculate your mutual fund returns' },
        { name: 'Income Tax', path: '/calculators/income-tax-calculator', desc: 'Plan your taxes smartly' }
      ]} />

      <HealthInsuranceContent />
    </div>
  );
}
