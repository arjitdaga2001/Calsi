import { useState, useMemo } from 'react';
import { RelatedCalculators } from '../components/RelatedCalculators';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateIncomeTax, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { IncomeTaxContent } from '../content/IncomeTaxContent';
import { TAX_CONFIG } from '../constants/financialRates';
import { AffiliateWidget } from '../components/AffiliateWidget';
import { RelatedGuides } from '../components/RelatedGuides';
const DEDUCTION_LIMIT = 1500000;

export function IncomeTaxCalculator() {
  useDocumentMetadata(
    `Income Tax Calculator FY ${TAX_CONFIG.FY} – Old vs New Regime AY ${TAX_CONFIG.AY} | CALSI.IN`,
    `Calculate your income tax for FY ${TAX_CONFIG.FY} (AY ${TAX_CONFIG.AY}) with latest slabs. Compare Old vs New Tax Regime, apply deductions under 80C, 80D, HRA.`
  );

  const [grossIncome, setGrossIncome] = useState(1200000);
  const [age, setAge] = useState(30);
  const [regime, setRegime] = useState('new');
  const [sec80C, setSec80C] = useState(150000);
  const [sec80D, setSec80D] = useState(25000);
  const [hra, setHra] = useState(120000);
  const [lta, setLta] = useState(0);
  const [others, setOthers] = useState(0);

  const deductions = useMemo(() => ({ section80C: sec80C, section80D: sec80D, hra, lta, otherDeductions: others }), [sec80C, sec80D, hra, lta, others]);
  const oldResult = useMemo(() => calculateIncomeTax(grossIncome, 'old', age, deductions), [grossIncome, age, deductions]);
  const newResult = useMemo(() => calculateIncomeTax(grossIncome, 'new', age, deductions), [grossIncome, age, deductions]);
  const result = regime === 'new' ? newResult : oldResult;
  const betterRegime = newResult.totalTax <= oldResult.totalTax ? 'new' : 'old';
  const saving = Math.abs(oldResult.totalTax - newResult.totalTax);

  const chartData = [
    { name: 'Take-Home', value: result.takeHome, color: 'var(--chart-color-2)' },
    { name: 'Total Tax', value: result.totalTax, color: '#f43f5e' },
  ];

  return (
    <div>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">Income Tax Calculator</h1>
            <p className="calc-subtitle">FY {TAX_CONFIG.FY} (AY {TAX_CONFIG.AY}) — Zero tax up to ₹{TAX_CONFIG.NEW_REGIME_REBATE_LIMIT === 1200000 ? '12.75L' : `${(TAX_CONFIG.NEW_REGIME_REBATE_LIMIT + TAX_CONFIG.STANDARD_DEDUCTION) / 100000}L`} (New Regime)</p>
          </div>

          {/* Regime Toggle */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
            {['new', 'old'].map(r => (
              <button key={r} onClick={() => setRegime(r)} style={{
                flex: 1, padding: '10px 0', borderRadius: '10px', border: `2px solid ${regime === r ? 'var(--accent-blue)' : 'var(--border-color)'}`,
                background: regime === r ? 'var(--primary-glow)' : 'transparent',
                color: regime === r ? 'var(--accent-blue)' : 'var(--text-secondary)',
                fontWeight: 700, fontSize: '13px', cursor: 'pointer', transition: 'all 0.2s'
              }}>
                {r === 'new' ? 'New Regime' : 'Old Regime'}
              </button>
            ))}
          </div>

          <InputSlider label="Annual Gross Income" value={grossIncome} min={100000} max={10000000} step={50000} onChange={setGrossIncome} prefix="₹" formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)} />
          <InputSlider label="Your Age" value={age} min={18} max={90} step={1} onChange={setAge} suffix="Yr" />

          {regime === 'old' && (
            <>
              <div style={{ margin: '8px 0 4px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>Old Regime Deductions</div>
              <InputSlider label="Section 80C (max ₹1.5L)" value={sec80C} min={0} max={150000} step={5000} onChange={setSec80C} prefix="₹" formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)} />
              <InputSlider label="Section 80D – Health Insurance" value={sec80D} min={0} max={100000} step={1000} onChange={setSec80D} prefix="₹" formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)} />
              <InputSlider label="HRA Exemption" value={hra} min={0} max={DEDUCTION_LIMIT} step={5000} onChange={setHra} prefix="₹" formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)} />
              <InputSlider label="LTA Exemption" value={lta} min={0} max={200000} step={5000} onChange={setLta} prefix="₹" formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)} />
              <InputSlider label="Other Deductions" value={others} min={0} max={500000} step={5000} onChange={setOthers} prefix="₹" formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)} />
            </>
          )}
        </div>

        <div className="calc-results">
          {/* Recommendation Alert */}
          <div style={{
            background: betterRegime === regime ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
            border: `1px solid ${betterRegime === regime ? 'var(--accent-green)' : '#f59e0b'}`,
            color: betterRegime === regime ? 'var(--accent-green)' : '#d97706',
            borderRadius: '8px', padding: '10px 14px', fontSize: '13px', fontWeight: 600, textAlign: 'center'
          }}>
            {betterRegime === regime 
              ? '✅ You are on the optimal tax regime.' 
              : `⚡ Switch to ${betterRegime === 'new' ? 'New' : 'Old'} Regime to save ${formatCurrency(saving)}`}
          </div>

          <DonutChart data={chartData} total={result.grossIncome} />

          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Gross Income</span>
              <span className="result-value">{formatCurrency(result.grossIncome)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Taxable Income</span>
              <span className="result-value">{formatCurrency(result.taxableIncome)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Income Tax</span>
              <span className="result-value">{formatCurrency(result.incomeTax)}</span>
            </div>
            {result.rebate > 0 && (
              <div className="result-row">
                <span className="result-label">Section 87A Rebate</span>
                <span className="result-value" style={{ color: 'var(--accent-green)' }}>- {formatCurrency(result.rebate)}</span>
              </div>
            )}
            {result.surcharge > 0 && (
              <div className="result-row">
                <span className="result-label">Surcharge</span>
                <span className="result-value">{formatCurrency(result.surcharge)}</span>
              </div>
            )}
            <div className="result-row">
              <span className="result-label">Health & Education Cess (4%)</span>
              <span className="result-value">{formatCurrency(result.cess)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Effective Tax Rate</span>
              <span className="result-value">{result.effectiveRate}%</span>
            </div>
            <div className="result-row-total">
              <span className="result-total-label">Total Tax Liability</span>
              <span className="result-total-value">{formatCurrency(result.totalTax)}</span>
            </div>
            <div className="result-row" style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-color)' }}>
              <span className="result-label" style={{ fontWeight: 700 }}>Take-Home (After Tax)</span>
              <span className="result-value" style={{ color: 'var(--accent-green)', fontWeight: 700, fontSize: '15px' }}>{formatCurrency(result.takeHome)}</span>
            </div>
          </div>

          <p className="calc-disclaimer">Based on AY {TAX_CONFIG.AY} tax slabs. Does not include professional tax or EPF deductions. Consult a CA for precise tax planning.</p>
        </div>
      </div>

      <AffiliateWidget />

      <RelatedGuides slugs={['old-vs-new-tax-regime-2026', 'freelancer-tax-saving-section-44ada', 'smart-tax-saving-beyond-80c']} title="Top Tax Saving Guides" />

      
      <RelatedCalculators calculators={[
        { name: 'EMI Calculator', path: '/calculators/emi-calculator', desc: 'Calculate your monthly loan EMI' },
        { name: 'SIP Calculator', path: '/calculators/sip-calculator', desc: 'Calculate your mutual fund returns' },
        { name: 'Income Tax', path: '/calculators/income-tax-calculator', desc: 'Plan your taxes smartly' }
      ]} />

      <IncomeTaxContent />
    </div>
  );
}
