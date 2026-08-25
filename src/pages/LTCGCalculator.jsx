import { useState, useMemo } from 'react';
import { RelatedCalculators } from '../components/RelatedCalculators';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateLTCG, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { LTCGContent } from '../content/LTCGContent';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';

const today = new Date().toISOString().split('T')[0];
const threeYearsAgo = new Date(Date.now() - 3 * 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

export function LTCGCalculator() {
  useDocumentMetadata(
    'LTCG Tax Calculator 2026: Long Term Capital Gains Tax',
    'Calculate Long Term Capital Gains (LTCG) tax on stocks, equity mutual funds, and real estate for FY 2025-26.'
  );

  const [assetType, setAssetType] = useState('equity');
  const [purchasePrice, setPurchasePrice] = useState(1000000);
  const [salePrice, setSalePrice] = useState(2500000);
  const [purchaseExpenses, setPurchaseExpenses] = useState(20000);
  const [sellingExpenses, setSellingExpenses] = useState(30000);
  const [purchaseDate, setPurchaseDate] = useState('2021-06-15');
  const [saleDate, setSaleDate] = useState(today);
  const [taxSlabRate, setTaxSlabRate] = useState(30);
  const [selectedIndexationOption, setSelectedIndexationOption] = useState('auto'); // 'auto', 'standard', 'indexed'

  const results = useMemo(() => {
    const rawResults = calculateLTCG(
      assetType,
      purchasePrice,
      salePrice,
      purchaseDate,
      saleDate,
      purchaseExpenses,
      sellingExpenses,
      taxSlabRate
    );

    if (rawResults.hasIndexationOption && selectedIndexationOption !== 'auto') {
      const useIndexed = selectedIndexationOption === 'indexed';
      const chosenTax = useIndexed ? rawResults.optionIndexedTax : rawResults.optionStandardTax;
      const chosenTotal = useIndexed ? rawResults.optionIndexedTotal : rawResults.optionStandardTotal;
      const chosenCess = Math.round(chosenTax * 0.04); // simplified cess check
      
      return {
        ...rawResults,
        tax: chosenTax,
        totalTax: chosenTotal,
        cess: chosenCess,
        chosenOption: selectedIndexationOption,
        taxableGains: useIndexed ? rawResults.indexedGains : rawResults.gains
      };
    }

    return rawResults;
  }, [assetType, purchasePrice, salePrice, purchaseDate, saleDate, purchaseExpenses, sellingExpenses, taxSlabRate, selectedIndexationOption]);

  const chartData = [
    { name: 'Taxable Gains', value: results.taxableGains, color: 'var(--chart-color-2)' },
    { name: 'Tax Liability', value: results.totalTax, color: '#ff4d4d' },
  ];

  const showSlabRate = !results.isLongTerm || assetType === 'debt';

  return (
    <div>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">Capital Gains Tax Calculator</h1>
            <p className="calc-subtitle">Calculate LTCG &amp; STCG tax under Budget 2024 guidelines</p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>Asset Type</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              {[
                ['equity', 'Equity / MF'],
                ['property', 'Real Estate'],
                ['debt', 'Debt Funds'],
                ['gold', 'Gold / Gold ETF']
              ].map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => {
                    setAssetType(val);
                    setSelectedIndexationOption('auto');
                  }}
                  style={{
                    padding: '10px 8px',
                    borderRadius: '10px',
                    fontSize: '13px',
                    fontWeight: 600,
                    border: `2px solid ${assetType === val ? 'var(--accent-blue)' : 'var(--border-color)'}`,
                    background: assetType === val ? 'var(--primary-glow)' : 'transparent',
                    color: assetType === val ? 'var(--accent-blue)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <InputSlider
            label="Purchase Price"
            value={purchasePrice}
            min={10000}
            max={50000000}
            step={10000}
            onChange={setPurchasePrice}
            prefix="₹"
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />

          <InputSlider
            label="Sale Price"
            value={salePrice}
            min={purchasePrice}
            max={100000000}
            step={10000}
            onChange={setSalePrice}
            prefix="₹"
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>Purchase Date</label>
              <input
                type="date"
                value={purchaseDate}
                onChange={(e) => setPurchaseDate(e.target.value)}
                max={saleDate}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-color)',
                  fontSize: '14px',
                  background: 'var(--surface-color)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>
            <div>
              <label style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>Sale Date</label>
              <input
                type="date"
                value={saleDate}
                onChange={(e) => setSaleDate(e.target.value)}
                min={purchaseDate}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-color)',
                  fontSize: '14px',
                  background: 'var(--surface-color)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>
          </div>

          <InputSlider
            label="Acquisition / Purchase Expenses"
            value={purchaseExpenses}
            min={0}
            max={500000}
            step={5000}
            onChange={setPurchaseExpenses}
            prefix="₹"
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />

          <InputSlider
            label="Transfer / Selling Expenses"
            value={sellingExpenses}
            min={0}
            max={500000}
            step={5000}
            onChange={setSellingExpenses}
            prefix="₹"
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />

          {showSlabRate && (
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '13px', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>
                Your Income Tax Slab Rate (for STCG)
              </label>
              <select
                value={taxSlabRate}
                onChange={(e) => setTaxSlabRate(Number(e.target.value))}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-color)',
                  fontSize: '14px',
                  background: 'var(--surface-color)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer'
                }}
              >
                <option value={5}>5% Slab</option>
                <option value={10}>10% Slab</option>
                <option value={15}>15% Slab</option>
                <option value={20}>20% Slab</option>
                <option value={30}>30% Slab</option>
                <option value={39}>39% Slab (Max Surcharge)</option>
              </select>
            </div>
          )}
        </div>

        <div className="calc-results">
          <DonutChart data={chartData} total={results.gains} />

          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Net Sale Consideration</span>
              <span className="result-value">{formatCurrency(results.netSaleConsideration)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Net Cost of Acquisition</span>
              <span className="result-value">{formatCurrency(results.netCostOfAcquisition)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Gross Capital Gains</span>
              <span className="result-value">{formatCurrency(results.gains)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Holding Period</span>
              <span className="result-value">
                {results.holdingYears} Yr ({results.holdingMonths} Mo)
              </span>
            </div>
            <div className="result-row">
              <span className="result-label">Gain Type</span>
              <span className="result-value" style={{ fontWeight: 700, color: 'var(--accent-blue)' }}>
                {results.isLongTerm ? 'Long Term (LTCG)' : 'Short Term (STCG)'}
              </span>
            </div>
            <div className="result-row">
              <span className="result-label">Applicable Tax Rate</span>
              <span className="result-value">{results.taxRate}%</span>
            </div>
            <div className="result-row">
              <span className="result-label">Taxable Capital Gains</span>
              <span className="result-value">{formatCurrency(results.taxableGains)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Cess &amp; Surcharge</span>
              <span className="result-value">{formatCurrency(results.surcharge + results.cess)}</span>
            </div>
            <div className="result-row-total">
              <span className="result-total-label">Total Tax Payable</span>
              <span className="result-total-value">{formatCurrency(results.totalTax)}</span>
            </div>
          </div>

          {results.hasIndexationOption && (
            <div
              style={{
                marginTop: '20px',
                padding: '16px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-color)',
                textAlign: 'left'
              }}
            >
              <div
                style={{
                  background: 'var(--accent-blue)',
                  color: 'white',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '4px 8px',
                  borderRadius: '6px',
                  display: 'inline-block',
                  marginBottom: '10px'
                }}
              >
                PRO TIP: GRANDFATHERING OPTION DETECTED
              </div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '12px' }}>
                Since this real estate asset was acquired before <strong>July 23, 2024</strong>, you can choose whichever tax scheme yields the lower liability:
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                <label
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    background: selectedIndexationOption === 'standard' || (selectedIndexationOption === 'auto' && results.chosenOption === 'standard') ? 'rgba(0, 122, 255, 0.15)' : 'transparent',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="radio"
                      name="indexationOption"
                      checked={selectedIndexationOption === 'standard' || (selectedIndexationOption === 'auto' && results.chosenOption === 'standard')}
                      onChange={() => setSelectedIndexationOption('standard')}
                    />
                    <span style={{ fontSize: '13px', fontWeight: 600 }}>12.5% Tax (No Indexation)</span>
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 700 }}>{formatCurrency(results.optionStandardTotal)}</span>
                </label>

                <label
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    background: selectedIndexationOption === 'indexed' || (selectedIndexationOption === 'auto' && results.chosenOption === 'indexed') ? 'rgba(0, 122, 255, 0.15)' : 'transparent',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="radio"
                      name="indexationOption"
                      checked={selectedIndexationOption === 'indexed' || (selectedIndexationOption === 'auto' && results.chosenOption === 'indexed')}
                      onChange={() => setSelectedIndexationOption('indexed')}
                    />
                    <span style={{ fontSize: '13px', fontWeight: 600 }}>20% Tax (With Indexation)</span>
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 700 }}>{formatCurrency(results.optionIndexedTotal)}</span>
                </label>
              </div>

              <div
                style={{
                  fontSize: '12px',
                  color: '#4cd964',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>✓</span>
                <span>
                  Recommended:{' '}
                  {results.optionIndexedTotal < results.optionStandardTotal
                    ? `20% Scheme (Saves ${formatCurrency(results.optionStandardTotal - results.optionIndexedTotal)})`
                    : `12.5% Scheme (Saves ${formatCurrency(results.optionIndexedTotal - results.optionStandardTotal)})`}
                </span>
              </div>
            </div>
          )}

          <p className="calc-disclaimer" style={{ marginTop: '16px' }}>
            Budget 2024 Rules: Listed Equity LTCG is 12.5% (above ₹1.25L exemption limit). STCG is 20%. Gold/Property LTCG is 12.5% without indexation. Property purchased before July 23, 2024 offers 20% indexation option. Debt MFs are always STCG.
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

      <LTCGContent />
    </div>
  );
}

