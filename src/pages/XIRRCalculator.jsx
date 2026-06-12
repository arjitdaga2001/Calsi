import { useState, useMemo } from 'react';
import { calculateXIRR, formatCurrency } from '../utils/calculations';
import { Plus, Trash2, TrendingUp, TrendingDown } from 'lucide-react';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import './xirr.css';

// ─── helpers ────────────────────────────────────────────────────────────────
const toDateStr = (d) => d.toISOString().split('T')[0];
const today = () => toDateStr(new Date());

const FREQUENCIES = [
  { label: 'One-time',    value: 'onetime',    months: null },
  { label: 'Monthly',    value: 'monthly',    months: 1   },
  { label: 'Quarterly',  value: 'quarterly',  months: 3   },
  { label: 'Half Yearly',value: 'halfyearly', months: 6   },
  { label: 'Yearly',     value: 'yearly',     months: 12  },
];

// Add N calendar months to a date string (matches Excel/Groww behaviour)
function addMonths(dateStr, n) {
  const d = new Date(dateStr);
  const day = d.getDate();
  d.setMonth(d.getMonth() + n);
  // If the day overflowed (e.g. Jan 31 + 1 month → Feb 28), clamp it
  if (d.getDate() < day) d.setDate(0);
  return toDateStr(d);
}

function generateFlows(frequency, startDate, endDate, amount) {
  if (!startDate || !endDate || amount <= 0) return [];
  const freq = FREQUENCIES.find(f => f.value === frequency);
  if (!freq) return [];

  const flows = [];
  if (frequency === 'onetime') {
    flows.push({ date: startDate, amount: -amount });
  } else {
    let current = startDate;
    while (current <= endDate) {
      flows.push({ date: current, amount: -amount });
      current = addMonths(current, freq.months);
    }
  }
  return flows;
}

const fmt = (v) => new Intl.NumberFormat('en-IN').format(Math.round(v));

// ─── Component ───────────────────────────────────────────────────────────────
export function XIRRCalculator() {
  useDocumentMetadata(
    'XIRR Calculator – Extended Internal Rate of Return | Calsi',
    'Compute the XIRR for irregular cash flows, SIPs, and mutual fund transactions with multiple deposits and withdrawals.'
  );

  const [mode, setMode] = useState('simple'); // 'simple' | 'manual'

  // Simple mode state
  const [frequency, setFrequency]   = useState('monthly');
  const [startDate, setStartDate]   = useState(() => {
    const d = new Date();
    d.setFullYear(d.getFullYear() - 3);
    return toDateStr(d);
  });
  const [endDate,   setEndDate]     = useState(today);
  const [sipAmount, setSipAmount]   = useState(10000);
  const [currentVal,setCurrentVal]  = useState(450000);

  // Manual mode state
  const [manualFlows, setManualFlows] = useState([
    { id: 1, amount: -100000, date: (() => { const d = new Date(); d.setFullYear(d.getFullYear()-2); return toDateStr(d); })(), label: 'Investment' },
    { id: 2, amount: -50000,  date: (() => { const d = new Date(); d.setFullYear(d.getFullYear()-1); return toDateStr(d); })(), label: 'Top-up' },
    { id: 3, amount: 200000,  date: today(), label: 'Current Value' },
  ]);
  let nextId = 10;

  // ── Compute cashflows ──────────────────────────────────────────────────────
  const { cashflows, totalInvested, totalReturns } = useMemo(() => {
    if (mode === 'manual') {
      const invested = manualFlows.filter(f => f.amount < 0).reduce((s, f) => s + Math.abs(f.amount), 0);
      const returns  = manualFlows.filter(f => f.amount > 0).reduce((s, f) => s + f.amount, 0);
      return { cashflows: manualFlows.map(f => ({ amount: f.amount, date: f.date })), totalInvested: invested, totalReturns: returns };
    }
    const flows = generateFlows(frequency, startDate, endDate, sipAmount);
    const invested = flows.reduce((s, f) => s + Math.abs(f.amount), 0);
    const allFlows = [...flows, { date: endDate, amount: currentVal }];
    return { cashflows: allFlows, totalInvested: invested, totalReturns: currentVal };
  }, [mode, frequency, startDate, endDate, sipAmount, currentVal, manualFlows]);

  const xirrResult = useMemo(() => {
    const sorted = [...cashflows].sort((a, b) => new Date(a.date) - new Date(b.date));
    return calculateXIRR(sorted);
  }, [cashflows]);

  const netGain    = totalReturns - totalInvested;
  const isPositive = netGain >= 0;
  const isGoodXIRR = xirrResult !== null && xirrResult >= 0;

  // Manual mode handlers
  const addRow = () => setManualFlows(prev => [
    ...prev,
    { id: nextId++, amount: -10000, date: today(), label: `Cash flow ${prev.length + 1}` }
  ]);
  const removeRow = (id) => setManualFlows(prev => prev.filter(f => f.id !== id));
  const updateFlow = (id, field, value) =>
    setManualFlows(prev => prev.map(f => f.id === id ? { ...f, [field]: value } : f));

  const installmentCount = mode === 'simple'
    ? generateFlows(frequency, startDate, endDate, sipAmount).length
    : manualFlows.filter(f => f.amount < 0).length;

  return (
    <div>
      <h1 className="page-title">XIRR Calculator</h1>
      <p className="page-subtitle">
        Calculate the actual annualised return on your investments, accounting for the timing of each cash flow.
      </p>

      {/* ── Mode Toggle ── */}
      <div className="xirr-mode-toggle">
        <button
          className={`xirr-mode-btn ${mode === 'simple' ? 'active' : ''}`}
          onClick={() => setMode('simple')}
        >
          Simple Mode
        </button>
        <button
          className={`xirr-mode-btn ${mode === 'manual' ? 'active' : ''}`}
          onClick={() => setMode('manual')}
        >
          Manual Entry
        </button>
      </div>

      <div className="xirr-layout">
        {/* ══ LEFT PANEL ══ */}
        <div className="xirr-table-section">

          {mode === 'simple' ? (
            /* ── Simple Mode ── */
            <div className="xirr-simple-form">
              {/* Investment Frequency */}
              <div className="xirr-form-group">
                <label className="xirr-form-label">Investment Frequency</label>
                <div className="xirr-freq-pills">
                  {FREQUENCIES.map(f => (
                    <button
                      key={f.value}
                      className={`xirr-freq-pill ${frequency === f.value ? 'active' : ''}`}
                      onClick={() => setFrequency(f.value)}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dates */}
              <div className="xirr-dates-row">
                <div className="xirr-form-group">
                  <label className="xirr-form-label">Start Date</label>
                  <input
                    type="date"
                    className="xirr-date-field"
                    value={startDate}
                    max={endDate}
                    onChange={e => setStartDate(e.target.value)}
                  />
                </div>
                <div className="xirr-form-group">
                  <label className="xirr-form-label">End Date</label>
                  <input
                    type="date"
                    className="xirr-date-field"
                    value={endDate}
                    min={startDate}
                    max={today()}
                    onChange={e => setEndDate(e.target.value)}
                  />
                </div>
              </div>

              {/* Amounts */}
              <div className="xirr-dates-row">
                <div className="xirr-form-group">
                  <label className="xirr-form-label">
                    {frequency === 'onetime' ? 'Investment Amount (₹)' : 'Investment per Instalment (₹)'}
                  </label>
                  <div className="xirr-amount-field-wrap">
                    <span className="xirr-field-prefix">₹</span>
                    <input
                      type="number"
                      className="xirr-amount-field"
                      value={sipAmount}
                      min={1}
                      onChange={e => setSipAmount(Math.max(1, parseFloat(e.target.value) || 0))}
                    />
                  </div>
                </div>
                <div className="xirr-form-group">
                  <label className="xirr-form-label">Current / Redemption Value (₹)</label>
                  <div className="xirr-amount-field-wrap">
                    <span className="xirr-field-prefix">₹</span>
                    <input
                      type="number"
                      className="xirr-amount-field"
                      value={currentVal}
                      min={0}
                      onChange={e => setCurrentVal(Math.max(0, parseFloat(e.target.value) || 0))}
                    />
                  </div>
                </div>
              </div>

              {/* Generated flows preview */}
              {installmentCount > 0 && (
                <div className="xirr-flows-preview">
                  <span className="xirr-flows-badge">{installmentCount} instalment{installmentCount !== 1 ? 's' : ''}</span>
                  <span className="xirr-flows-text">
                    of {formatCurrency(sipAmount)} each from {startDate} → {endDate}
                  </span>
                </div>
              )}
            </div>
          ) : (
            /* ── Manual Mode ── */
            <>
              <div className="xirr-table-header">
                <span>Cash Flows</span>
                <div className="xirr-hint">
                  Use <strong>negative</strong> for investments, <strong>positive</strong> for returns
                </div>
              </div>

              <div className="xirr-table">
                <div className="xirr-row header-row">
                  <span>Label</span>
                  <span>Amount (₹)</span>
                  <span>Date</span>
                  <span></span>
                </div>

                {manualFlows.map((cf) => (
                  <div key={cf.id} className="xirr-row">
                    <input
                      className="xirr-cell-input label-input"
                      type="text"
                      value={cf.label}
                      onChange={e => updateFlow(cf.id, 'label', e.target.value)}
                      placeholder="Label"
                    />
                    <div className={`xirr-amount-wrap ${cf.amount < 0 ? 'negative' : cf.amount > 0 ? 'positive' : ''}`}>
                      <span className="xirr-rupee">₹</span>
                      <input
                        className="amount-input"
                        type="number"
                        value={cf.amount}
                        onChange={e => updateFlow(cf.id, 'amount', parseFloat(e.target.value) || 0)}
                      />
                    </div>
                    <input
                      className="xirr-cell-input date-input"
                      type="date"
                      value={cf.date}
                      onChange={e => updateFlow(cf.id, 'date', e.target.value)}
                    />
                    <button
                      className="xirr-remove-btn"
                      onClick={() => removeRow(cf.id)}
                      disabled={manualFlows.length <= 2}
                      title="Remove row"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>

              <button className="xirr-add-btn" onClick={addRow}>
                <Plus size={15} />
                Add Cash Flow
              </button>
            </>
          )}
        </div>

        {/* ══ RIGHT PANEL — Results ══ */}
        <div className="xirr-results">
          {/* XIRR big card */}
          <div className={`xirr-rate-card ${isGoodXIRR ? 'good' : 'bad'}`}>
            <div className="xirr-rate-label">XIRR (Annualised Return)</div>
            <div className="xirr-rate-value">
              {xirrResult !== null ? `${xirrResult}%` : '—'}
            </div>
            {xirrResult !== null && (
              <div className="xirr-rate-badge">
                {xirrResult >= 20 ? '🚀 Exceptional'
                  : xirrResult >= 15 ? '🔥 Excellent'
                  : xirrResult >= 10 ? '✅ Good'
                  : xirrResult >= 0  ? '⚠️ Moderate'
                  : '❌ Loss'}
              </div>
            )}
          </div>

          {/* Summary cards */}
          <div className="xirr-cards-grid">
            <div className="xirr-mini-card">
              <div className="xirr-mini-label">Total Invested</div>
              <div className="xirr-mini-value neg">₹{fmt(totalInvested)}</div>
              {installmentCount > 0 && (
                <div className="xirr-mini-sub">{installmentCount} instalment{installmentCount !== 1 ? 's' : ''}</div>
              )}
            </div>
            <div className="xirr-mini-card">
              <div className="xirr-mini-label">Current Value</div>
              <div className="xirr-mini-value pos">₹{fmt(totalReturns)}</div>
              {mode === 'simple' && <div className="xirr-mini-sub">as of {endDate}</div>}
            </div>
          </div>

          {/* Net gain / loss */}
          <div className={`xirr-net-card ${isPositive ? 'gain' : 'loss'}`}>
            <div className="xirr-net-icon">
              {isPositive ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
            </div>
            <div>
              <div className="xirr-net-label">Net {isPositive ? 'Gain' : 'Loss'}</div>
              <div className="xirr-net-value">
                {isPositive ? '+' : '-'}₹{fmt(Math.abs(netGain))}
                <span className="xirr-net-pct">
                  ({totalInvested > 0 ? ((Math.abs(netGain) / totalInvested) * 100).toFixed(1) : 0}%)
                </span>
              </div>
            </div>
          </div>

          {/* What is XIRR */}
          <div className="xirr-info-box">
            <div className="xirr-info-title">What is XIRR?</div>
            <p>
              XIRR (Extended Internal Rate of Return) calculates the annualised return for investments
              with irregular cash flows — like SIPs or lump sum top-ups at different times.
              Unlike simple returns, XIRR accounts for the exact timing of each transaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
