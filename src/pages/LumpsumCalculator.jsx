import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateLumpsum, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata, useSchema } from '../hooks/useDocumentMetadata';

const LUMPSUM_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Calsi Lumpsum Calculator",
      "url": "https://calsi.vercel.app/lumpsum",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
      "description": "Free Lumpsum Calculator. Calculate the future maturity value and estimated wealth gain of your one-time mutual fund investments.",
      "creator": { "@type": "Organization", "name": "Calsi", "url": "https://calsi.vercel.app" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a Lumpsum Investment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A lumpsum investment is when you invest a large sum of money all at once in a mutual fund or other financial instrument, rather than spreading it out over time like an SIP."
          }
        },
        {
          "@type": "Question",
          "name": "What is the return on 1 lakh lumpsum for 10 years?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Assuming a conservative 12% annual return rate from an equity mutual fund, a one-time investment of ₹1 lakh will grow to approximately ₹3.10 lakhs in 10 years."
          }
        },
        {
          "@type": "Question",
          "name": "Is SIP better than Lumpsum?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SIP is generally safer for highly volatile equity markets because it averages out your purchase cost over time. Lumpsum is better when the market has crashed and valuations are low, or when you are investing in less volatile debt funds."
          }
        },
        {
          "@type": "Question",
          "name": "How is lumpsum return calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lumpsum returns are calculated using the compound interest formula: A = P(1 + r/n)^(nt), or simply A = P(1+r)^t if compounding annually. Where P is the principal amount, r is the annual interest rate, and t is the time in years."
          }
        }
      ]
    }
  ]
};

export function LumpsumCalculator() {
  useDocumentMetadata(
    'Lumpsum Calculator 2026 – One-Time Mutual Fund Returns | Calsi',
    'Calculate the future value and total returns of your one-time lumpsum mutual fund investments using our free, easy-to-use lumpsum calculator.'
  );
  useSchema(LUMPSUM_SCHEMA);

  const [totalInvestment, setTotalInvestment] = useState(100000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const results = useMemo(() => {
    return calculateLumpsum(totalInvestment, expectedReturnRate, timePeriod);
  }, [totalInvestment, expectedReturnRate, timePeriod]);

  const chartData = [
    { name: 'Invested amount', value: results.investedAmount, color: 'var(--chart-color-2)' },
    { name: 'Est. returns', value: results.estimatedReturns, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <h1 className="page-title">Lumpsum Calculator</h1>
      <p className="page-subtitle">Estimate future wealth from your one-time mutual fund investments</p>
      
      <div className="calculator-layout">
        <div className="calc-inputs">
          <InputSlider 
            label="Total investment" 
            value={totalInvestment} 
            min={500} 
            max={10000000} 
            step={500} 
            onChange={setTotalInvestment} 
            prefix="₹" 
            formatValue={(v) => new Intl.NumberFormat('en-IN').format(v)}
          />
          <InputSlider 
            label="Expected return rate (p.a)" 
            value={expectedReturnRate} 
            min={1} 
            max={30} 
            step={0.1} 
            onChange={setExpectedReturnRate} 
            suffix="%" 
          />
          <InputSlider 
            label="Time period" 
            value={timePeriod} 
            min={1} 
            max={40} 
            step={1} 
            onChange={setTimePeriod} 
            suffix="Yr" 
          />
        </div>
        <div className="calc-results">
          <DonutChart data={chartData} />
          <div className="results-section">
            <div className="result-row">
              <span className="result-label">Invested amount</span>
              <span className="result-value">{formatCurrency(results.investedAmount)}</span>
            </div>
            <div className="result-row">
              <span className="result-label">Est. returns</span>
              <span className="result-value">{formatCurrency(results.estimatedReturns)}</span>
            </div>
            <div className="result-row" style={{ marginTop: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
              <span className="result-label">Total value</span>
              <span className="result-total">{formatCurrency(results.totalValue)}</span>
            </div>
          </div>
          <p className="calc-disclaimer">
            Returns are indicative and based on a fixed CAGR. Mutual fund investments are subject to market risks. Past performance does not guarantee future results.
          </p>
        </div>
      </div>

      {/* ── SEO: Article Section ── */}
      <section className="calc-faq" style={{ marginBottom: '24px' }}>
        <h2>What is a Lumpsum Investment?</h2>
        <div style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '16px' }}>
            A <strong>Lumpsum Investment</strong> involves depositing a large, single sum of money into a financial instrument, such as a mutual fund, all at once. This is the opposite of a Systematic Investment Plan (SIP), where you invest a fixed amount regularly. Lumpsum investing is typically preferred when you receive a sudden influx of cash—like an annual bonus, a retirement payout, a property sale, or an inheritance—and want to put it to work in the market immediately.
          </p>
          <h3 style={{ fontSize: '15px', color: 'var(--text-primary)', marginTop: '24px', marginBottom: '12px' }}>How Do Lumpsum Investments Grow?</h3>
          <p style={{ marginBottom: '16px' }}>
            When you make a one-time investment in a mutual fund, your money buys a specific number of "units" based on the Net Asset Value (NAV) of the fund on that particular day. Over time, as the underlying assets (stocks, bonds, or gold) in the mutual fund increase in value, the NAV of your units increases proportionally.
          </p>
          <p style={{ marginBottom: '16px' }}>
            The growth of a lumpsum investment is driven purely by the <strong>Power of Compounding</strong>. Because your entire capital is deployed in the market from Day 1, it has the maximum possible time to grow. In a rising market, a lumpsum investment will statistically outperform an SIP of the same total amount simply because all the money is earning interest earlier.
          </p>
          <h3 style={{ fontSize: '15px', color: 'var(--text-primary)', marginTop: '24px', marginBottom: '12px' }}>SIP vs Lumpsum: Which is Better?</h3>
          <p style={{ marginBottom: '16px' }}>
            Choosing between an SIP and a lumpsum investment depends largely on market conditions and your risk appetite. 
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '8px', marginBottom: '16px' }}>
            <li><strong>When to choose Lumpsum:</strong> Lumpsum investments are ideal when the stock market is experiencing a correction or a crash, allowing you to buy mutual fund units at a heavy discount. It is also excellent for investing in low-risk Debt Mutual Funds, where market timing is irrelevant.</li>
            <li><strong>When to choose SIP:</strong> If the market is at an all-time high or highly volatile, investing a massive lumpsum is risky. An SIP is better because it averages out the purchase cost and protects you against sudden market crashes.</li>
          </ul>
          <h3 style={{ fontSize: '15px', color: 'var(--text-primary)', marginTop: '24px', marginBottom: '12px' }}>How to Use the Lumpsum Calculator</h3>
          <p>
            The online lumpsum return calculator simplifies your financial forecasting. Simply enter the total amount you wish to invest, input an expected annual return rate (CAGR), and select the number of years you plan to stay invested. The calculator instantly processes the compound interest math and provides you with a clear breakdown of your estimated wealth gain versus your principal amount.
          </p>
        </div>
      </section>

      {/* ── SEO: FAQ Section ── */}
      <section className="calc-faq">
        <h2>Frequently Asked Questions</h2>

        <details className="faq-item">
          <summary>What is the return on ₹1 lakh lumpsum for 10 years?</summary>
          <p>Assuming a realistic <strong>12% annual return rate</strong> from an equity mutual fund, a one-time investment of ₹1 lakh will grow to approximately <strong>₹3.10 lakhs</strong> in 10 years. The wealth gained strictly from interest is ₹2.10 lakhs.</p>
        </details>

        <details className="faq-item">
          <summary>Is Lumpsum investment safe?</summary>
          <p>Lumpsum investments in equity mutual funds carry <strong>market risk</strong>. If you invest a large amount right before a market crash, your portfolio value will drop instantly. However, if you have a long-term horizon (7+ years), historical data shows that equity markets recover and deliver excellent inflation-beating returns.</p>
        </details>

        <details className="faq-item">
          <summary>What is the minimum lumpsum amount I can invest?</summary>
          <p>Most mutual fund houses (AMCs) in India allow you to start a lumpsum investment with a minimum amount of just <strong>₹5,000</strong>. Some specific index funds even allow lumpsum investments starting at ₹500 or ₹1,000.</p>
        </details>

        <details className="faq-item">
          <summary>How is lumpsum return calculated mathematically?</summary>
          <p>The lumpsum calculator uses the standard Compound Interest formula: <strong>A = P(1+r)ᵗ</strong>. Where 'A' is the final Maturity Amount, 'P' is the Principal Investment, 'r' is the expected annual rate of return (in decimal), and 't' is the time period in years.</p>
        </details>
      </section>
    </div>
  );
}
