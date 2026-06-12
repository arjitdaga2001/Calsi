import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateSWP, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata, useSchema } from '../hooks/useDocumentMetadata';
import './swp.css';

const SWP_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Calsi SWP Calculator",
      "url": "https://calsi.vercel.app/swp",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
      "description": "Free Systematic Withdrawal Plan (SWP) Calculator. Calculate your monthly withdrawals, total withdrawn amount, and the remaining mutual fund balance.",
      "creator": { "@type": "Organization", "name": "Calsi", "url": "https://calsi.vercel.app" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is SWP in mutual funds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SWP stands for Systematic Withdrawal Plan. It allows an investor to withdraw a fixed amount of money from their mutual fund investments at regular intervals (like monthly or quarterly). It is highly useful for retirees seeking a regular pension-like income."
          }
        },
        {
          "@type": "Question",
          "name": "How is SWP different from SIP?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SIP (Systematic Investment Plan) is used to put money into a mutual fund regularly to build wealth. SWP is the exact opposite—it is used to take money out of a mutual fund regularly to generate a steady income stream while the remaining balance continues to grow."
          }
        },
        {
          "@type": "Question",
          "name": "Is SWP tax-free in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, SWP withdrawals are subject to capital gains tax. However, only the 'profit' portion of each withdrawal is taxed, not the principal. Long-Term Capital Gains (LTCG) on equity funds are tax-free up to ₹1.25 Lakhs per financial year, making SWP highly tax-efficient compared to Fixed Deposit interest."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my SWP withdrawal is higher than the returns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you withdraw more money than the mutual fund is generating in returns, your principal investment will start depleting. Eventually, your mutual fund balance will reach zero."
          }
        }
      ]
    }
  ]
};

export function SWPCalculator() {
  useDocumentMetadata(
    'SWP Calculator 2026 – Systematic Withdrawal Plan | Calsi',
    'Plan your monthly withdrawals and calculate the remaining balance of your mutual fund investments using our free SWP calculator.'
  );
  useSchema(SWP_SCHEMA);

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
      <p className="page-subtitle">Plan your monthly withdrawals &amp; remaining mutual fund balance</p>

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
            <div className="result-total" style={{ marginTop: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between' }}>
              <span className="result-label" style={{ fontWeight: 600 }}>Final Value</span>
              <span style={{ fontWeight: 800, color: 'var(--chart-color-1)' }}>{formatCurrency(results.finalValue)}</span>
            </div>
          </div>
          <p className="calc-disclaimer">
            Results are indicative. Actual mutual fund returns may fluctuate. Be careful not to set withdrawal rates higher than return rates to avoid principal depletion.
          </p>
        </div>

      </div>

      {/* ── SEO: Article Section ── */}
      <section className="calc-faq" style={{ marginBottom: '24px' }}>
        <h2>What is a Systematic Withdrawal Plan (SWP)?</h2>
        <div style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '16px' }}>
            A <strong>Systematic Withdrawal Plan (SWP)</strong> is a powerful mutual fund facility that allows investors to withdraw a fixed amount of money at regular intervals—usually monthly or quarterly. It acts as the exact reverse of an SIP. While an SIP helps you accumulate wealth over time, an SWP helps you draw down that wealth steadily, making it a favorite tool for retirees and anyone seeking a regular "pension-like" income.
          </p>
          <h3 style={{ fontSize: '15px', color: 'var(--text-primary)', marginTop: '24px', marginBottom: '12px' }}>How Does SWP Work?</h3>
          <p style={{ marginBottom: '16px' }}>
            When you set up an SWP, the mutual fund house (AMC) automatically redeems a certain number of your mutual fund units on a specified date each month to meet your requested withdrawal amount. The beauty of an SWP is that while you are regularly taking money out, your remaining balance remains invested in the market and continues to generate compound interest.
          </p>
          <p style={{ marginBottom: '16px' }}>
            If the annual return of your mutual fund is higher than your annual withdrawal rate, your corpus will actually <em>continue to grow</em> even as you withdraw a monthly income. This is why financial planners recommend an SWP rate of around 4% to 6% per year on equity-oriented portfolios.
          </p>
          <h3 style={{ fontSize: '15px', color: 'var(--text-primary)', marginTop: '24px', marginBottom: '12px' }}>Tax Benefits of SWP in India</h3>
          <p style={{ marginBottom: '16px' }}>
            SWP is incredibly tax-efficient compared to traditional Fixed Deposits. When you withdraw money via SWP, you are essentially selling mutual fund units. Every withdrawal contains two components: the principal (your own money) and the capital gain (profit).
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '8px', marginBottom: '16px' }}>
            <li><strong>Principal Component:</strong> Completely tax-free because it is your own money.</li>
            <li><strong>Capital Gains Component:</strong> For Equity mutual funds held for over 1 year, Long-Term Capital Gains (LTCG) are completely tax-free up to ₹1.25 Lakhs per financial year. Beyond that, it is taxed at a flat 12.5% (as of latest tax rules).</li>
          </ul>
          <p style={{ marginBottom: '16px' }}>
            In contrast, the entire interest earned on a Fixed Deposit is fully taxable as per your income tax slab, making SWP a mathematically superior choice for regular income.
          </p>
        </div>
      </section>

      {/* ── SEO: FAQ Section ── */}
      <section className="calc-faq">
        <h2>Frequently Asked Questions</h2>

        <details className="faq-item">
          <summary>What is the 'Safe Withdrawal Rate' for SWP?</summary>
          <p>Financial planners globally recommend a safe withdrawal rate of <strong>4% to 6% annually</strong> of your total corpus. For example, if you have ₹1 Crore, withdrawing ₹40,000 to ₹50,000 per month ensures your corpus outlives you, factoring in market crashes and inflation.</p>
        </details>

        <details className="faq-item">
          <summary>What happens if my withdrawal exceeds my fund's returns?</summary>
          <p>If your mutual fund generates an 8% annual return, but your SWP withdraws 12% of the corpus annually, you will begin eating into your principal investment. Your total balance will continuously decrease until the fund eventually hits zero.</p>
        </details>

        <details className="faq-item">
          <summary>How is SWP different from SIP?</summary>
          <p>SIP (Systematic Investment Plan) is used to invest a fixed amount regularly to <strong>build a corpus</strong>. SWP (Systematic Withdrawal Plan) is used to withdraw a fixed amount regularly from an already built corpus to <strong>generate income</strong>.</p>
        </details>

        <details className="faq-item">
          <summary>Does timing matter (Beginning vs. End of month)?</summary>
          <p>Yes. Withdrawing at the <strong>End of the Month</strong> is mathematically better. It allows your money to stay invested for the entire month and earn interest before the withdrawal happens, resulting in a higher final corpus.</p>
        </details>
      </section>

    </div>
  );
}
