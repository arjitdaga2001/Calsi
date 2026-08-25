import { useState, useMemo } from 'react';
import { RelatedCalculators } from '../components/RelatedCalculators';
import { DonutChart } from '../components/DonutChart';
import { calculateXIRR, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { XIRRContent } from '../content/XIRRContent';
import { AdSlot } from '../components/AdSlot';
import { AffiliateWidget } from '../components/AffiliateWidget';
import './xirr.css';

// Initial state for XIRR cash flows
const INITIAL_CASHFLOWS = [
  { id: 1, amount: -100000, date: '2020-01-01', type: 'investment' },
  { id: 2, amount: -50000, date: '2021-06-15', type: 'investment' },
  { id: 3, amount: 20000, date: '2022-12-01', type: 'withdrawal' },
  { id: 4, amount: 250000, date: '2024-03-31', type: 'current_value' },
];

export function XIRRCalculator() {
  const xirrSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "XIRR Calculator",
    "description": "Calculate XIRR for your mutual funds and SIPs.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1205"
    }
  };
  useDocumentMetadata(
    'XIRR Calculator 2026: Calculate Real Mutual Fund Return Rate',
    'Calculate Extended Internal Rate of Return (XIRR) for irregular cashflows and SIP investments with accuracy.',
    xirrSchema
  );

  const [calcMode, setCalcMode] = useState('simple'); // 'simple' or 'manual'
  
  // Simple mode state
  const [frequency, setFrequency] = useState('yearly');
  const [startDate, setStartDate] = useState('2021-01-01');
  const [maturityDate, setMaturityDate] = useState('2024-01-01');
  const [recurringAmount, setRecurringAmount] = useState(10000);
  const [maturityAmount, setMaturityAmount] = useState(60000);

  // Manual mode state
  const [cashFlows, setCashFlows] = useState(INITIAL_CASHFLOWS);

  const handleAddRow = () => {
    const newId = cashFlows.length > 0 ? Math.max(...cashFlows.map(cf => cf.id)) + 1 : 1;
    setCashFlows([
      ...cashFlows,
      { id: newId, amount: 0, date: new Date().toISOString().split('T')[0], type: 'investment' }
    ]);
  };

  const handleRemoveRow = (id) => {
    setCashFlows(cashFlows.filter(cf => cf.id !== id));
  };

  const handleUpdateRow = (id, field, value) => {
    setCashFlows(cashFlows.map(cf => {
      if (cf.id === id) {
        // If type is current_value or withdrawal, amount should be positive. If investment, negative.
        // We handle the visual representation separately from the internal state which needs strict signs for XIRR math
        let parsedValue = value;
        if (field === 'amount') {
           parsedValue = parseFloat(value) || 0;
           // Auto-correct signs based on type if user types positive/negative
           if (cf.type === 'investment') {
              parsedValue = -Math.abs(parsedValue);
           } else {
              parsedValue = Math.abs(parsedValue);
           }
        }
        if (field === 'type') {
           // When type changes, flip sign if necessary
           if (value === 'investment') {
             parsedValue = -Math.abs(cf.amount);
           } else {
             parsedValue = Math.abs(cf.amount);
           }
           return { ...cf, [field]: value, amount: parsedValue };
        }
        return { ...cf, [field]: parsedValue };
      }
      return cf;
    }));
  };

  const results = useMemo(() => {
    try {
      let activeCashFlows = cashFlows;
      
      if (calcMode === 'simple') {
        activeCashFlows = [];
        let currDate = new Date(startDate);
        const endDate = new Date(maturityDate);
        let maxIters = 10000;
        
        while (currDate < endDate && maxIters > 0) {
          activeCashFlows.push({
            id: activeCashFlows.length,
            amount: -Math.abs(recurringAmount),
            date: currDate.toISOString().split('T')[0],
            type: 'investment'
          });
          
          if (frequency === '14_days') currDate.setDate(currDate.getDate() + 14);
          else if (frequency === 'monthly') currDate.setMonth(currDate.getMonth() + 1);
          else if (frequency === 'quarterly') currDate.setMonth(currDate.getMonth() + 3);
          else if (frequency === 'half_yearly') currDate.setMonth(currDate.getMonth() + 6);
          else if (frequency === 'yearly') currDate.setFullYear(currDate.getFullYear() + 1);
          
          maxIters--;
        }
        
        activeCashFlows.push({
          id: activeCashFlows.length,
          amount: Math.abs(maturityAmount),
          date: endDate.toISOString().split('T')[0],
          type: 'current_value'
        });
      }

      const values = activeCashFlows.map(cf => cf.amount);
      const xirrValue = calculateXIRR(activeCashFlows);

      // Calculate totals for UI
      const totalInvested = Math.abs(values.filter(v => v < 0).reduce((acc, curr) => acc + curr, 0));
      const totalWithdrawn = values.filter(v => v > 0).reduce((acc, curr) => acc + curr, 0);

      return {
        xirr: xirrValue !== null ? xirrValue.toFixed(2) : null,
        totalInvested,
        totalWithdrawn,
        profit: totalWithdrawn - totalInvested,
        isError: false
      };
    } catch (error) {
      return { xirr: null, totalInvested: 0, totalWithdrawn: 0, profit: 0, isError: true };
    }
  }, [cashFlows, calcMode, frequency, startDate, maturityDate, recurringAmount, maturityAmount]);

  const chartData = [
    { name: 'Total Invested', value: results.totalInvested, color: 'var(--chart-color-2)' },
    { name: 'Total Return', value: Math.max(0, results.profit), color: 'var(--chart-color-1)' },
  ];

  return (
    <div className="xirr-page">
      <div className="calculator-layout">
        <div className="calc-inputs xirr-table-wrapper">
          <div className="calc-inputs-header">
            <h1 className="calc-title">XIRR Calculator</h1>
            <p className="calc-subtitle">Extended Internal Rate of Return for complex cash flows</p>
          </div>
          
          <div className="xirr-mode-toggle">
            <button 
              className={`xirr-mode-btn ${calcMode === 'simple' ? 'active' : ''}`}
              onClick={() => setCalcMode('simple')}
            >
              Simple Mode
            </button>
            <button 
              className={`xirr-mode-btn ${calcMode === 'manual' ? 'active' : ''}`}
              onClick={() => setCalcMode('manual')}
            >
              Manual Entry
            </button>
          </div>

          {calcMode === 'simple' ? (
            <div className="xirr-simple-form">
              <div className="xirr-form-group">
                <label className="xirr-form-label">Investment Frequency</label>
                <div className="xirr-freq-pills">
                  {['14_days', 'monthly', 'quarterly', 'half_yearly', 'yearly'].map(f => (
                    <button 
                      key={f}
                      className={`xirr-freq-pill ${frequency === f ? 'active' : ''}`}
                      onClick={() => setFrequency(f)}
                    >
                      {f === '14_days' ? '14 Days' : 
                       f === 'monthly' ? 'Monthly' : 
                       f === 'quarterly' ? 'Quarterly' : 
                       f === 'half_yearly' ? 'Half Yearly' : 'Yearly'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="xirr-dates-row">
                <div className="xirr-form-group">
                  <label className="xirr-form-label">Start Date</label>
                  <input 
                    type="date" 
                    className="xirr-date-field" 
                    value={startDate} 
                    onChange={e => setStartDate(e.target.value)}
                  />
                </div>
                <div className="xirr-form-group">
                  <label className="xirr-form-label">Maturity Date</label>
                  <input 
                    type="date" 
                    className="xirr-date-field" 
                    value={maturityDate} 
                    onChange={e => setMaturityDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="xirr-form-group">
                 <label className="xirr-form-label">Recurring investment amount</label>
                 <div className="xirr-amount-field-wrap">
                   <span className="xirr-field-prefix">₹</span>
                   <input 
                     type="number" 
                     className="xirr-amount-field" 
                     value={recurringAmount || ''} 
                     onChange={e => setRecurringAmount(Number(e.target.value))}
                   />
                 </div>
              </div>

              <div className="xirr-form-group">
                 <label className="xirr-form-label">Total maturity amount</label>
                 <div className="xirr-amount-field-wrap">
                   <span className="xirr-field-prefix">₹</span>
                   <input 
                     type="number" 
                     className="xirr-amount-field" 
                     value={maturityAmount || ''} 
                     onChange={e => setMaturityAmount(Number(e.target.value))}
                   />
                 </div>
              </div>
            </div>
          ) : (
            <>
              <div className="xirr-header-actions">
                <h3>Cash Flows</h3>
                <button className="xirr-add-btn" onClick={handleAddRow}>+ Add Transaction</button>
              </div>

              <div className="xirr-list">
                <div className="xirr-list-header">
                  <div>Date</div>
                  <div>Transaction Type</div>
                  <div>Amount (₹)</div>
                  <div></div>
                </div>
                <div className="xirr-list-body">
                  {cashFlows.map((cf) => (
                    <div className="xirr-list-row" key={cf.id}>
                      <div className="xirr-input-box">
                        <input 
                          type="date" 
                          className="xirr-field"
                          value={cf.date} 
                          onChange={(e) => handleUpdateRow(cf.id, 'date', e.target.value)}
                        />
                      </div>
                      <div className="xirr-input-box">
                        <select 
                          className="xirr-field"
                          value={cf.type}
                          onChange={(e) => handleUpdateRow(cf.id, 'type', e.target.value)}
                        >
                          <option value="investment">Investment (Outflow)</option>
                          <option value="withdrawal">Withdrawal (Inflow)</option>
                          <option value="current_value">Current Value</option>
                        </select>
                      </div>
                      <div className="xirr-input-box">
                        <input 
                          type="number" 
                          className={`xirr-field ${cf.amount < 0 ? 'text-red' : 'text-green'}`}
                          value={Math.abs(cf.amount) || ''} 
                          onChange={(e) => handleUpdateRow(cf.id, 'amount', e.target.value)}
                          placeholder="0"
                        />
                      </div>
                      <button 
                        className="xirr-delete-btn" 
                        onClick={() => handleRemoveRow(cf.id)}
                        title="Remove transaction"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          
          {results.isError && (
             <div className="xirr-error-msg">
               Unable to calculate XIRR. Ensure you have at least one investment (negative) and one return/current value (positive) on different dates.
             </div>
          )}

        </div>
        
        <div className="calc-results">
          <div className={`xirr-rate-card ${results.xirr && Number(results.xirr) >= 0 ? 'good' : 'bad'}`}>
            <div className="xirr-rate-label">Your XIRR</div>
            <div className="xirr-rate-value">
              {results.xirr !== null ? `${results.xirr}%` : '---'}
            </div>
            <div className="xirr-rate-badge">Annualized Return</div>
          </div>

          <DonutChart data={chartData} />
          
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">
                <span className="result-label-dot" style={{ background: 'var(--chart-color-2)' }} />
                Total Invested
              </span>
              <span className="result-value">{formatCurrency(results.totalInvested)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">
                <span className="result-label-dot" style={{ background: 'var(--chart-color-1)' }} />
                Maturity Amount
              </span>
              <span className="result-value">{formatCurrency(results.totalWithdrawn)}</span>
            </div>
            <div className="result-row-total">
              <span className="result-total-label">Net Profit / Loss</span>
              <span className="result-total-value">{formatCurrency(results.profit)}</span>
            </div>
          </div>
          <p className="calc-disclaimer">
            XIRR (Extended Internal Rate of Return) calculates annualized yield for irregular cash flows. It requires exactly one sequence of dates and values where at least one value is negative (investment) and one is positive (return).
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

      <XIRRContent />
    </div>
  );
}
