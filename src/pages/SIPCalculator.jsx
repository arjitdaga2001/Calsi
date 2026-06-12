import { useState, useMemo } from 'react';
import { InputSlider } from '../components/InputSlider';
import { DonutChart } from '../components/DonutChart';
import { calculateSIP, formatCurrency } from '../utils/calculations';
import { useDocumentMetadata, useSchema } from '../hooks/useDocumentMetadata';

const SIP_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Calsi SIP Calculator",
      "url": "https://calsi.vercel.app/sip",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
      "description": "Free SIP Calculator. Calculate monthly mutual fund SIP returns with exact maturity value, invested amount, and estimated gains.",
      "creator": { "@type": "Organization", "name": "Calsi", "url": "https://calsi.vercel.app" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much will I get if I invest ₹10,000 per month in SIP for 20 years?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At 12% annual return (CAGR), investing ₹10,000 per month in SIP for 20 years gives a maturity value of approximately ₹99.91 lakhs. Total invested: ₹24 lakhs. Estimated returns: ₹75.91 lakhs."
          }
        },
        {
          "@type": "Question",
          "name": "How much SIP to invest to get ₹1 crore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To accumulate ₹1 crore in 15 years at 12% annual return, you need to invest approximately ₹20,000 per month via SIP. In 20 years, you only need ₹10,000/month at the same return rate."
          }
        },
        {
          "@type": "Question",
          "name": "Is SIP better than FD in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SIP in equity mutual funds has historically delivered 10–15% CAGR over long periods, significantly higher than FD rates of 6–7.5%. However, SIP returns are market-linked and not guaranteed, while FD offers fixed, assured returns. SIP is better for long-term wealth creation (7+ years); FD is better for capital safety and short-term goals."
          }
        },
        {
          "@type": "Question",
          "name": "What is the SIP calculator formula?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The SIP maturity formula is: M = P × [(1 + r)^n – 1] / r × (1 + r). Where: P = monthly investment amount, r = monthly return rate (annual rate ÷ 12), n = total number of months (years × 12), M = maturity value."
          }
        },
        {
          "@type": "Question",
          "name": "Can I withdraw SIP before maturity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Unlike PPF or FD with lock-in, most open-ended mutual fund SIPs can be stopped and redeemed anytime (except ELSS, which has a 3-year lock-in). Redemption is processed within 2–3 business days."
          }
        }
      ]
    }
  ]
};

export function SIPCalculator() {
  useDocumentMetadata(
    'SIP Calculator 2026 – Calculate Monthly Mutual Fund Returns | Calsi',
    'Free SIP Calculator India. Enter monthly investment, rate & tenure to get exact maturity value. Calculate how ₹5,000/month grows over 10, 15, 20 years. No signup needed.'
  );
  useSchema(SIP_SCHEMA);

  const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const results = useMemo(() => {
    return calculateSIP(monthlyInvestment, expectedReturnRate, timePeriod);
  }, [monthlyInvestment, expectedReturnRate, timePeriod]);

  const chartData = [
    { name: 'Invested amount', value: results.investedAmount, color: 'var(--chart-color-2)' },
    { name: 'Est. returns', value: results.estimatedReturns, color: 'var(--chart-color-1)' },
  ];

  return (
    <div>
      <h1 className="page-title">SIP Calculator</h1>
      <p className="page-subtitle">Estimate your monthly SIP mutual fund returns &amp; maturity value</p>
      <div className="calculator-layout">
        <div className="calc-inputs">
          <InputSlider
            label="Monthly investment"
            value={monthlyInvestment}
            min={500}
            max={200000}
            step={500}
            onChange={setMonthlyInvestment}
            prefix="₹"
          />
          <InputSlider
            label="Expected annual return"
            value={expectedReturnRate}
            min={1}
            max={30}
            step={0.5}
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
            Results are indicative. Actual returns may vary. Not investment advice.{' '}
            <a href="https://www.amfiindia.com" target="_blank" rel="noopener noreferrer">AMFI</a>-regulated funds.
          </p>
        </div>
      </div>

      {/* ── SEO: FAQ Section ── */}
      <section className="calc-faq">
        <h2>Frequently Asked Questions</h2>

        <details className="faq-item">
          <summary>How much will I get if I invest ₹10,000/month for 20 years?</summary>
          <p>At 12% annual return, investing ₹10,000/month for 20 years gives a maturity value of approximately <strong>₹99.91 lakhs</strong>. Invested: ₹24 lakhs | Estimated returns: ₹75.91 lakhs.</p>
        </details>

        <details className="faq-item">
          <summary>How much SIP per month to get ₹1 crore?</summary>
          <p>To get ₹1 crore in <strong>15 years</strong> at 12% p.a., invest ≈ ₹20,000/month. In <strong>20 years</strong>, only ₹10,000/month is needed. In <strong>25 years</strong>, just ₹5,300/month.</p>
        </details>

        <details className="faq-item">
          <summary>Is SIP better than FD?</summary>
          <p>SIP in equity mutual funds has historically delivered 10–15% CAGR over 10+ years — significantly more than FD's 6–7.5%. However, SIP returns are <strong>market-linked</strong> and not guaranteed. Choose SIP for long-term wealth creation; FD for capital safety.</p>
        </details>

        <details className="faq-item">
          <summary>What is the SIP calculator formula?</summary>
          <p><strong>M = P × [(1 + r)ⁿ – 1] / r × (1 + r)</strong><br />Where P = monthly amount, r = monthly rate (annual ÷ 12), n = total months. This is the standard future-value-of-annuity formula.</p>
        </details>

        <details className="faq-item">
          <summary>Can I stop SIP anytime?</summary>
          <p>Yes. Open-ended equity SIPs can be paused or stopped anytime with no penalty. Redemption is processed within 2–3 business days. <strong>Exception:</strong> ELSS funds have a 3-year lock-in per instalment.</p>
        </details>
      </section>
    </div>
  );
}
