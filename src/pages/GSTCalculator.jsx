import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { GSTContent } from '../content/GSTContent';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';
import './gst.css';

export function GSTCalculator() {
  useDocumentMetadata(
    'GST Calculator — Add or Remove GST | calsi.in',
    'Calculate GST instantly with our free GST calculator. Add or remove GST at 5%, 12%, 18% or 28% with CGST, SGST & IGST split at calsi.in.'
  );

  const [amount, setAmount] = useState(10000);
  const [gstRate, setGstRate] = useState(18);
  const [calcType, setCalcType] = useState('exclusive'); // 'exclusive' | 'inclusive'

  const results = useMemo(() => {
    let baseAmount = 0;
    let gstAmount = 0;
    let totalAmount = 0;

    if (calcType === 'exclusive') {
      baseAmount = amount;
      gstAmount = (amount * gstRate) / 100;
      totalAmount = baseAmount + gstAmount;
    } else {
      totalAmount = amount;
      gstAmount = amount - (amount * (100 / (100 + gstRate)));
      baseAmount = totalAmount - gstAmount;
    }

    // Split GST into CGST/SGST (assuming intra-state for display purposes)
    const cgst = gstAmount / 2;
    const sgst = gstAmount / 2;

    return { baseAmount, gstAmount, totalAmount, cgst, sgst };
  }, [amount, gstRate, calcType]);

  const chartData = [
    { name: 'Base Amount', value: results.baseAmount, color: 'var(--chart-color-2)' },
    { name: 'Total GST', value: results.gstAmount, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <div className="calc-inputs-header">
            <h1 className="calc-title">GST Calculator</h1>
            <p className="calc-subtitle">Calculate Goods and Services Tax instantly</p>
          </div>
          <div className="gst-toggle-wrapper">
            <button 
              className={`gst-toggle-btn ${calcType === 'exclusive' ? 'active' : ''}`}
              onClick={() => setCalcType('exclusive')}
            >
              GST Exclusive
              <span>(Add GST to price)</span>
            </button>
            <button 
              className={`gst-toggle-btn ${calcType === 'inclusive' ? 'active' : ''}`}
              onClick={() => setCalcType('inclusive')}
            >
              GST Inclusive
              <span>(Extract GST from price)</span>
            </button>
          </div>

          <InputSlider
            label={calcType === 'exclusive' ? "Base Amount" : "Total Amount"}
            value={amount}
            min={100}
            max={10000000}
            step={100}
            onChange={setAmount}
            prefix="₹"
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />

          <div className="gst-rates-wrapper">
            <label className="input-label">GST Rate</label>
            <div className="gst-rate-pills">
              {[3, 5, 12, 18, 28].map(rate => (
                <button
                  key={rate}
                  className={`gst-rate-pill ${gstRate === rate ? 'active' : ''}`}
                  onClick={() => setGstRate(rate)}
                >
                  {rate}%
                </button>
              ))}
            </div>
            {/* Fallback slider for custom rates if needed, though standard rates are usually enough */}
            <div style={{marginTop: '16px'}}>
               <InputSlider
                  label="Custom Rate"
                  value={gstRate}
                  min={0.1}
                  max={40}
                  step={0.1}
                  onChange={setGstRate}
                  suffix="%"
                />
            </div>
          </div>

        </div>
        
        <div className="calc-results">
          <DonutChart data={chartData} total={results.totalAmount} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">
                <span className="result-label-dot" style={{ background: 'var(--chart-color-2)' }} />
                Base Amount
              </span>
              <span className="result-value">{formatCurrency(results.baseAmount)}</span>
            </div>
            <div className="gst-breakdown-container">
              <div className="gst-breakdown-row">
                <span className="result-label">CGST ({gstRate/2}%)</span>
                <span className="result-value">{formatCurrency(results.cgst)}</span>
              </div>
              <div className="gst-breakdown-row">
                <span className="result-label">SGST ({gstRate/2}%)</span>
                <span className="result-value">{formatCurrency(results.sgst)}</span>
              </div>
            </div>
            <div className="result-row">
              <span className="result-label" style={{ fontWeight: 600 }}>
                <span className="result-label-dot" style={{ background: 'var(--chart-color-1)' }} />
                Total GST
              </span>
              <span className="result-value" style={{ fontWeight: 700, color: 'var(--accent-blue)' }}>
                {formatCurrency(results.gstAmount)}
              </span>
            </div>
            <div className="result-row-total">
              <span className="result-total-label">Total Amount</span>
              <span className="result-total-value">{formatCurrency(results.totalAmount)}</span>
            </div>
          </div>
        </div>
      </div>

      <AffiliateWidget />
      <AdSlot />

      <GSTContent />
    </div>
  );
}
