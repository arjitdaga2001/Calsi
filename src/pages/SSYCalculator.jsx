import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateSSY, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import './epf.css'; /* reuse the table styles */

export function SSYCalculator() {
  useDocumentMetadata(
    'Sukanya Samriddhi Yojana (SSY) Calculator | Calsi',
    'Calculate the maturity value and interest accrued on your Sukanya Samriddhi Account (SSY) deposits with our free online calculator.'
  );

  const [yearlyInvestment, setYearlyInvestment] = useState(50000);
  const [girlsAge, setGirlsAge] = useState(5);

  const results = useMemo(() => {
    return calculateSSY(yearlyInvestment, girlsAge);
  }, [yearlyInvestment, girlsAge]);

  const chartData = [
    { name: 'Invested Amount', value: results.investedAmount, color: 'var(--chart-color-2)' },
    { name: 'Interest Earned', value: results.estimatedReturns, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <h1 className="page-title">Sukanya Samriddhi Yojana (SSY)</h1>
      <p className="page-subtitle">
        Calculate your SSY maturity corpus — investments for 15 years, account matures after 21 years from opening.
      </p>

      <div className="calculator-layout">
        <div className="calc-inputs">
          <InputSlider
            label="Yearly Investment"
            value={yearlyInvestment}
            min={250}
            max={150000}
            step={250}
            onChange={setYearlyInvestment}
            prefix="₹"
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />
          <InputSlider
            label="Girl's Current Age"
            value={girlsAge}
            min={0}
            max={10}
            step={1}
            onChange={setGirlsAge}
            suffix=" Yr"
          />
          <div className="epf-info-note" style={{ marginTop: '8px' }}>
            📌 <strong>Scheme rules:</strong><br />
            • Interest rate: <strong>8.2% p.a.</strong> (compounded annually)<br />
            • Deposits made for <strong>15 years</strong> from account opening<br />
            • Account matures in <strong>21 years</strong> from opening (always 6 years of passive growth)<br />
            • Max yearly deposit: <strong>₹1,50,000</strong>
          </div>
        </div>

        <div className="calc-results">
          <DonutChart data={chartData} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Invested Amount</span>
              <span className="result-value">{formatCurrency(results.investedAmount)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Interest Earned</span>
              <span className="result-value">{formatCurrency(results.estimatedReturns)}</span>
            </div>
            <div className="result-row" style={{ marginTop: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
              <span className="result-label">Maturity Value</span>
              <span className="result-total">{formatCurrency(results.totalValue)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Yearly Breakdown Table ── */}
      {results.yearlyData && results.yearlyData.length > 0 && (
        <div className="epf-table-container">
          <h2 className="epf-table-title">Year-by-Year Growth</h2>
          <div className="epf-table-scroll">
            <table className="epf-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Girl's Age</th>
                  <th>Phase</th>
                  <th>Deposit</th>
                  <th>Interest Earned</th>
                  <th>Closing Balance</th>
                </tr>
              </thead>
              <tbody>
                {results.yearlyData.map((row) => (
                  <tr key={row.year}>
                    <td className="epf-year-cell">{row.year}</td>
                    <td>{row.age} yrs</td>
                    <td>
                      <span style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: row.phase === 'Investment' ? 'rgba(17,24,39,0.07)' : 'rgba(16,185,129,0.1)',
                        color: row.phase === 'Investment' ? 'var(--chart-color-1)' : 'var(--chart-color-3)',
                      }}>
                        {row.phase}
                      </span>
                    </td>
                    <td style={{ color: 'var(--chart-color-2)' }}>
                      {row.deposit > 0 ? formatCurrency(row.deposit) : '—'}
                    </td>
                    <td style={{ color: 'var(--cat-govt)' }}>{formatCurrency(row.interest)}</td>
                    <td className="epf-balance-cell">{formatCurrency(row.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
