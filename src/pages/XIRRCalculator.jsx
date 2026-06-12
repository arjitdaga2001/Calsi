import { useState, useMemo } from 'react';
import { DonutChart } from '../components/DonutChart';
import { calculateXIRR, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { XIRRContent } from '../content/XIRRContent';
import './xirr.css';

// Initial state for XIRR cash flows
const INITIAL_CASHFLOWS = [
  { id: 1, amount: -100000, date: '2020-01-01', type: 'investment' },
  { id: 2, amount: -50000, date: '2021-06-15', type: 'investment' },
  { id: 3, amount: 20000, date: '2022-12-01', type: 'withdrawal' },
  { id: 4, amount: 250000, date: '2024-03-31', type: 'current_value' },
];

export function XIRRCalculator() {
  useDocumentMetadata(
    'XIRR Calculator 2026 – Extended Internal Rate of Return | Calsi',
    'Calculate XIRR for your mutual funds and SIPs. Analyze complex cash flows with irregular dates using our advanced XIRR calculator.'
  );

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
      // Prepare data for XIRR calculation
      // XIRR needs array of values and array of dates
      const values = cashFlows.map(cf => cf.amount);
      const dates = cashFlows.map(cf => new Date(cf.date));

      const xirrValue = calculateXIRR(values, dates);

      // Calculate totals for UI
      const totalInvested = Math.abs(values.filter(v => v < 0).reduce((acc, curr) => acc + curr, 0));
      const totalWithdrawn = values.filter(v => v > 0).reduce((acc, curr) => acc + curr, 0);

      return {
        xirr: xirrValue !== null ? (xirrValue * 100).toFixed(2) : null,
        totalInvested,
        totalWithdrawn,
        profit: totalWithdrawn - totalInvested,
        isError: false
      };
    } catch (error) {
      return { xirr: null, totalInvested: 0, totalWithdrawn: 0, profit: 0, isError: true };
    }
  }, [cashFlows]);

  const chartData = [
    { name: 'Total Invested', value: results.totalInvested, color: 'var(--chart-color-2)' },
    { name: 'Total Return', value: Math.max(0, results.profit), color: 'var(--chart-color-1)' },
  ];

  return (
    <div className="xirr-page">
      <h1 className="page-title">XIRR Calculator</h1>
      <p className="page-subtitle">Extended Internal Rate of Return for complex cash flows</p>

      <div className="calculator-layout xirr-layout">
        <div className="calc-inputs xirr-table-wrapper">
          
          <div className="xirr-header-actions">
            <h3>Cash Flows</h3>
            <button className="xirr-add-btn" onClick={handleAddRow}>+ Add Transaction</button>
          </div>

          <div className="xirr-table-container">
            <table className="xirr-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Transaction Type</th>
                  <th>Amount (₹)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cashFlows.map((cf) => (
                  <tr key={cf.id}>
                    <td>
                      <input 
                        type="date" 
                        className="xirr-input-date"
                        value={cf.date} 
                        onChange={(e) => handleUpdateRow(cf.id, 'date', e.target.value)}
                      />
                    </td>
                    <td>
                      <select 
                        className="xirr-select"
                        value={cf.type}
                        onChange={(e) => handleUpdateRow(cf.id, 'type', e.target.value)}
                      >
                        <option value="investment">Investment (Outflow)</option>
                        <option value="withdrawal">Withdrawal (Inflow)</option>
                        <option value="current_value">Current Value</option>
                      </select>
                    </td>
                    <td>
                      <input 
                        type="number" 
                        className={`xirr-input-number ${cf.amount < 0 ? 'negative' : 'positive'}`}
                        value={Math.abs(cf.amount) || ''} 
                        onChange={(e) => handleUpdateRow(cf.id, 'amount', e.target.value)}
                        placeholder="0"
                      />
                    </td>
                    <td>
                      <button 
                        className="xirr-remove-btn" 
                        onClick={() => handleRemoveRow(cf.id)}
                        title="Remove transaction"
                      >
                        ×
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {results.isError && (
             <div className="xirr-error-msg">
               Unable to calculate XIRR. Ensure you have at least one investment (negative) and one return/current value (positive) on different dates.
             </div>
          )}

        </div>
        
        <div className="calc-results">
          <DonutChart data={chartData} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Total Invested</span>
              <span className="result-value">{formatCurrency(results.totalInvested)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Current Value / Withdrawn</span>
              <span className="result-value">{formatCurrency(results.totalWithdrawn)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Net Profit / Loss</span>
              <span className={`result-value ${results.profit < 0 ? 'loss-text' : ''}`}>
                 {formatCurrency(results.profit)}
              </span>
            </div>
            
            <div className="result-row xirr-final-box">
              <span className="result-label xirr-final-label">Annualized XIRR</span>
              <span className="result-total xirr-final-value">
                {results.xirr !== null ? `${results.xirr}%` : '---'}
              </span>
            </div>
          </div>
          <p className="calc-disclaimer">
            XIRR (Extended Internal Rate of Return) calculates annualized yield for irregular cash flows. It requires exactly one sequence of dates and values where at least one value is negative (investment) and one is positive (return).
          </p>
        </div>
      </div>

      <XIRRContent />
    </div>
  );
}
