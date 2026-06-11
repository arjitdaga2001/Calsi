import React, { useState, useMemo } from 'react';
import { calculateGST } from '../utils/calculations';
import './gst.css';

const GST_RATES = [3, 5, 12, 18, 28];

const formatNum = (v) =>
  new Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(v);

export function GSTCalculator() {
  const [amount, setAmount] = useState(10000);
  const [gstRate, setGstRate] = useState(18);
  const [calcType, setCalcType] = useState('exclusive'); // exclusive | inclusive

  const results = useMemo(
    () => calculateGST(amount, gstRate, calcType),
    [amount, gstRate, calcType]
  );

  const handleAmountChange = (e) => {
    const v = parseFloat(e.target.value.replace(/,/g, '')) || 0;
    setAmount(v);
  };

  return (
    <div>
      <h1 className="page-title">GST Calculator</h1>
      <div className="gst-layout">
        {/* ── Inputs ── */}
        <div className="gst-inputs">
          {/* Amount */}
          <div className="gst-field">
            <label className="gst-label">Amount (₹)</label>
            <div className="gst-input-wrap">
              <span className="gst-prefix">₹</span>
              <input
                id="gst-amount"
                type="number"
                value={amount}
                min={0}
                onChange={handleAmountChange}
                className="gst-input"
                placeholder="Enter amount"
              />
            </div>
          </div>

          {/* Calculation type toggle */}
          <div className="gst-field">
            <label className="gst-label">GST Calculation Type</label>
            <div className="gst-toggle">
              <button
                id="gst-exclusive"
                className={`gst-toggle-btn ${calcType === 'exclusive' ? 'active' : ''}`}
                onClick={() => setCalcType('exclusive')}
              >
                Exclusive (Add GST)
              </button>
              <button
                id="gst-inclusive"
                className={`gst-toggle-btn ${calcType === 'inclusive' ? 'active' : ''}`}
                onClick={() => setCalcType('inclusive')}
              >
                Inclusive (Extract GST)
              </button>
            </div>
          </div>

          {/* GST Rate pills */}
          <div className="gst-field">
            <label className="gst-label">GST Rate</label>
            <div className="gst-rate-pills">
              {GST_RATES.map((rate) => (
                <button
                  key={rate}
                  id={`gst-rate-${rate}`}
                  className={`gst-pill ${gstRate === rate ? 'active' : ''}`}
                  onClick={() => setGstRate(rate)}
                >
                  {rate}%
                </button>
              ))}
            </div>
            {/* Custom rate input */}
            <div className="gst-custom-rate">
              <label className="gst-label-sm">Custom rate</label>
              <div className="gst-input-wrap small">
                <input
                  id="gst-custom-rate"
                  type="number"
                  value={gstRate}
                  min={0}
                  max={100}
                  step={0.1}
                  onChange={(e) => setGstRate(parseFloat(e.target.value) || 0)}
                  className="gst-input"
                />
                <span className="gst-suffix">%</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Results ── */}
        <div className="gst-results">
          <div className="gst-result-card highlight">
            <div className="gst-result-label">
              {calcType === 'exclusive' ? 'Original Amount' : 'Pre-GST Amount'}
            </div>
            <div className="gst-result-value large">₹{formatNum(results.preGSTAmount)}</div>
          </div>

          <div className="gst-divider">
            <span>GST Breakdown</span>
          </div>

          {/* CGST + SGST side by side */}
          <div className="gst-breakdown">
            <div className="gst-result-card">
              <div className="gst-result-label">CGST ({gstRate / 2}%)</div>
              <div className="gst-result-value">₹{formatNum(results.cgst)}</div>
            </div>
            <div className="gst-result-card">
              <div className="gst-result-label">SGST ({gstRate / 2}%)</div>
              <div className="gst-result-value">₹{formatNum(results.sgst)}</div>
            </div>
          </div>

          {/* IGST as an alternative full-width row */}
          <div className="gst-result-card gst-igst-row">
            <div className="gst-result-label">
              <span className="gst-or-badge">OR</span>
              IGST ({gstRate}%)
            </div>
            <div className="gst-result-value">₹{formatNum(results.igst)}</div>
          </div>

          {/* Total GST — prominent */}
          <div className="gst-result-card total">
            <div className="gst-result-label gst-total-gst-label">Total GST Amount</div>
            <div className="gst-result-value accent gst-total-gst-value">₹{formatNum(results.totalGST)}</div>
          </div>

          {/* Final total */}
          <div className="gst-result-card total-final">
            <div className="gst-result-label">
              {calcType === 'exclusive' ? 'Total Amount (incl. GST)' : 'Total Amount (given)'}
            </div>
            <div className="gst-result-value primary">₹{formatNum(results.totalAmount)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
