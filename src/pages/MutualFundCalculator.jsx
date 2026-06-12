import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateLumpsum, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata, useSchema } from '../hooks/useDocumentMetadata';

const MF_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Calsi Mutual Fund Returns Calculator",
      "url": "https://calsi.vercel.app/mf-returns",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
      "description": "Free Mutual Fund Returns Calculator. Estimate the growth, total interest, and maturity value of your mutual fund investments over time.",
      "creator": { "@type": "Organization", "name": "Calsi", "url": "https://calsi.vercel.app" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are mutual funds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A mutual fund is a financial vehicle that pools money from multiple investors to buy a diversified portfolio of stocks, bonds, or other securities. They are managed by professional fund managers."
          }
        },
        {
          "@type": "Question",
          "name": "How are mutual fund returns calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mutual fund returns are generally calculated using the Compound Annual Growth Rate (CAGR). It measures the smoothed annualized rate of return over a specific time period, assuming the investment compounds over time."
          }
        },
        {
          "@type": "Question",
          "name": "Are mutual fund returns guaranteed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, mutual fund returns are not guaranteed. They are linked to market performance. Equity funds carry higher risk and higher potential returns, while debt funds carry lower risk with more stable returns."
          }
        },
        {
          "@type": "Question",
          "name": "What is NAV in mutual funds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NAV stands for Net Asset Value. It represents the per-unit price of the mutual fund. When you invest, you are allotted units at the current day's NAV. The value of your investment is the number of units multiplied by the current NAV."
          }
        }
      ]
    }
  ]
};

export function MutualFundCalculator() {
  useDocumentMetadata(
    'Mutual Fund Returns Calculator 2026 | Compare MF Growth | Calsi',
    'Free Mutual Fund Return Calculator. Project your wealth creation, compare historical returns, and estimate maturity values of equity and debt funds.'
  );
  useSchema(MF_SCHEMA);

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
      <h1 className="page-title">Mutual Fund Returns Calculator</h1>
      <p className="page-subtitle">Project the growth of your mutual fund portfolio using historical CAGR</p>

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
            Disclaimer: Mutual fund investments are subject to market risks, read all scheme related documents carefully. Projected returns are purely mathematical estimations.
          </p>
        </div>
      </div>

      {/* ── SEO: Article Section ── */}
      <section className="calc-faq" style={{ marginBottom: '24px' }}>
        <h2>Understanding Mutual Fund Returns</h2>
        <div style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '16px' }}>
            Investing in mutual funds is one of the most effective ways to build wealth over the long term. A <strong>Mutual Fund</strong> is a financial vehicle created by an Asset Management Company (AMC) that pools money collected from many investors to invest in securities such as stocks, bonds, money market instruments, and other assets. Because they are managed by professional fund managers, they offer retail investors an easy way to achieve high diversification and strong returns without needing to be an expert in the stock market.
          </p>
          <h3 style={{ fontSize: '15px', color: 'var(--text-primary)', marginTop: '24px', marginBottom: '12px' }}>How Do Mutual Funds Generate Returns?</h3>
          <p style={{ marginBottom: '16px' }}>
            Mutual fund returns are generated in two primary ways: <strong>Capital Appreciation</strong> and <strong>Dividend Income</strong>. When the underlying stocks or bonds in the fund's portfolio increase in price, the Net Asset Value (NAV) of the mutual fund also increases. This capital appreciation is the main driver of wealth generation in equity mutual funds.
          </p>
          <p style={{ marginBottom: '16px' }}>
            When measuring mutual fund performance, the industry standard metric used is the <strong>Compound Annual Growth Rate (CAGR)</strong>. CAGR calculates the smoothed, annualized return of an investment over a specific period, assuming that profits are reinvested at the end of each year. Historically, broad market equity mutual funds in India (like Nifty 50 Index funds) have delivered a long-term CAGR of around 12% to 15%.
          </p>
          <h3 style={{ fontSize: '15px', color: 'var(--text-primary)', marginTop: '24px', marginBottom: '12px' }}>Why You Need a Mutual Fund Calculator</h3>
          <p style={{ marginBottom: '16px' }}>
            Projecting mutual fund returns manually is extremely difficult because compound interest math is non-linear. A mutual fund returns calculator eliminates this complexity. By inputting your initial investment amount, an assumed annual return rate (CAGR), and your holding period, the calculator instantly shows you your estimated final maturity value.
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '8px', marginBottom: '16px' }}>
            <li><strong>Visualize Compounding:</strong> See exactly how much of your final corpus is your own principal versus accumulated interest. Over periods of 15+ years, the interest portion will vastly exceed the principal.</li>
            <li><strong>Set Realistic Goals:</strong> Understand if your current investment amount is sufficient to meet your future financial targets (like retirement or buying a home).</li>
            <li><strong>Compare Fund Categories:</strong> Test different expected return rates. For example, use 12% for Large Cap Equity funds, 15% for Small Cap Equity funds, and 7% for conservative Debt funds to see the long-term impact on your wealth.</li>
          </ul>
        </div>
      </section>

      {/* ── SEO: FAQ Section ── */}
      <section className="calc-faq">
        <h2>Frequently Asked Questions</h2>

        <details className="faq-item">
          <summary>What is a good mutual fund return rate?</summary>
          <p>For <strong>Equity Mutual Funds</strong> (investing in stocks), a long-term CAGR of 10% to 15% is considered historically accurate and good. For <strong>Debt Mutual Funds</strong> (investing in bonds), expect returns in the range of 6% to 8%, which is generally slightly higher than a traditional bank FD.</p>
        </details>

        <details className="faq-item">
          <summary>Are mutual fund returns guaranteed?</summary>
          <p>No, mutual fund returns are absolutely <strong>not guaranteed</strong>. Because they invest in market-linked instruments (stocks and bonds), the value of your investment will fluctuate daily. However, staying invested for a longer horizon (5-7+ years) significantly reduces the probability of negative returns.</p>
        </details>

        <details className="faq-item">
          <summary>What is NAV (Net Asset Value)?</summary>
          <p>NAV is the price of a single "unit" of a mutual fund scheme. If a fund's NAV is ₹100 and you invest ₹1,000, you will be allocated 10 units. The daily performance of the fund is reflected by the daily change in its NAV.</p>
        </details>

        <details className="faq-item">
          <summary>How are mutual fund returns taxed in India?</summary>
          <p>Taxation depends on the holding period and the type of fund. For <strong>Equity Funds</strong>, Long Term Capital Gains (holding &gt; 1 year) are tax-free up to ₹1.25 Lakhs per year, and taxed at 12.5% beyond that. For <strong>Debt Funds</strong>, all gains are added to your income and taxed according to your income tax slab, regardless of the holding period.</p>
        </details>
      </section>

    </div>
  );
}
