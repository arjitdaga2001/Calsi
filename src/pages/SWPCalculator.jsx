import React, { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateSWP, formatCurrency } from '../utils/calculations';
import './swp.css';

export function SWPCalculator() {
  const [totalInvestment, setTotalInvestment]     = useState(1000000);
  const [withdrawalPerMonth, setWithdrawalPerMonth] = useState(10000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(8);
  const [timePeriod, setTimePeriod]               = useState(5);
  const [withdrawalTiming, setWithdrawalTiming]   = useState('end'); // 'end' | 'start'

  const results = useMemo(() =>
    calculateSWP(totalInvestment, withdrawalPerMonth, expectedReturnRate, timePeriod, withdrawalTiming),
    [totalInvestment, withdrawalPerMonth, expectedReturnRate, timePeriod, withdrawalTiming]
  );

  // diff between end-of-month and beginning-of-month for info label
  const altResults = useMemo(() =>
    calculateSWP(totalInvestment, withdrawalPerMonth, expectedReturnRate, timePeriod,
      withdrawalTiming === 'end' ? 'start' : 'end'),
    [totalInvestment, withdrawalPerMonth, expectedReturnRate, timePeriod, withdrawalTiming]
  );
  const diff = results.finalValue - altResults.finalValue;

  const chartData = [
    { name: 'Total Withdrawn', value: results.totalWithdrawn, color: 'var(--chart-color-2)' },
    { name: 'Final Value',     value: results.finalValue,     color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <h1 className="page-title">SWP Calculator</h1>
      <div className="calculator-layout">

        {/* ── Inputs ── */}
        <div className="calc-inputs">
          <InputSlider
            label="Total investment" value={totalInvestment}
            min={50000} max={50000000} step={10000}
            onChange={setTotalInvestment} prefix="₹"
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />
          <InputSlider
            label="Withdrawal per month" value={withdrawalPerMonth}
            min={1000} max={500000} step={1000}
            onChange={setWithdrawalPerMonth} prefix="₹"
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />
          <InputSlider
            label="Expected return rate (p.a)" value={expectedReturnRate}
            min={1} max={30} step={0.1}
            onChange={setExpectedReturnRate} suffix="%"
          />
          <InputSlider
            label="Time period" value={timePeriod}
            min={1} max={40} step={1}
            onChange={setTimePeriod} suffix="Yr"
          />

          {/* ── Withdrawal Timing Toggle ── */}
          <div className="swp-timing-section">
            <div className="swp-timing-label">Withdrawal timing</div>
            <div className="swp-timing-toggle">
              <button
                id="swp-end-of-month"
                className={`swp-timing-btn ${withdrawalTiming === 'end' ? 'active' : ''}`}
                onClick={() => setWithdrawalTiming('end')}
              >
                <span className="swp-timing-icon">📅</span>
                <span className="swp-timing-text">
                  <span className="swp-timing-main">End of Month</span>
                  <span className="swp-timing-sub">Ordinary annuity</span>
                </span>
              </button>

              <button
                id="swp-start-of-month"
                className={`swp-timing-btn ${withdrawalTiming === 'start' ? 'active' : ''}`}
                onClick={() => setWithdrawalTiming('start')}
              >
                <span className="swp-timing-icon">🗓️</span>
                <span className="swp-timing-text">
                  <span className="swp-timing-main">Beginning of Month</span>
                  <span className="swp-timing-sub">Annuity due</span>
                </span>
              </button>
            </div>

            {/* Diff hint */}
            <div className="swp-timing-hint">
              <span className="swp-hint-dot" />
              {withdrawalTiming === 'end'
                ? `End-of-month withdrawals leave ₹${Math.abs(diff).toLocaleString('en-IN')} more in the corpus vs. beginning-of-month.`
                : `Beginning-of-month withdrawals reduce the final corpus by ₹${Math.abs(diff).toLocaleString('en-IN')} compared to end-of-month.`
              }
            </div>
          </div>
        </div>

        {/* ── Results ── */}
        <div className="calc-results">
          <DonutChart data={chartData} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Total Investment</span>
              <span className="result-value">{formatCurrency(results.totalInvestment)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Total Withdrawn</span>
              <span className="result-value">{formatCurrency(results.totalWithdrawn)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Timing</span>
              <span className="result-value swp-timing-badge">
                {withdrawalTiming === 'end' ? 'End of Month' : 'Beginning of Month'}
              </span>
            </div>
            <div className="result-total">
              <span className="result-label">Final Value</span>
              <span>{formatCurrency(results.finalValue)}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

