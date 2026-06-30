import React from 'react';
import { useSchema } from '../hooks/useDocumentMetadata';

const XIRR_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Calsi XIRR Calculator",
      "url": "https://calsi.vercel.app/xirr",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
      "description": "Institutional XIRR Calculator. Execute Newton-Raphson algorithmic iterations to calculate the exact annualized yield of highly erratic, non-periodic cash flows.",
      "creator": { "@type": "Organization", "name": "Calsi", "url": "https://calsi.vercel.app" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between CAGR and XIRR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CAGR (Compound Annual Growth Rate) is a rudimentary metric that only measures the return between a single starting value and a single ending value, completely ignoring any cash flows that occurred in between. XIRR (Extended Internal Rate of Return) evaluates highly erratic, multiple cash flows occurring on specific dates. If you invest via an SIP or make random withdrawals, CAGR is mathematically invalid; XIRR is the only accurate metric."
          }
        },
        {
          "@type": "Question",
          "name": "How does the XIRR algorithmic calculation work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "XIRR does not use a closed-form algebraic formula. It relies on a trial-and-error mathematical algorithm known as the Newton-Raphson method. The algorithm systematically guesses thousands of different discount rates until it finds the exact rate (XIRR) that forces the Net Present Value (NPV) of all your historical cash flows to equal exactly zero."
          }
        },
        {
          "@type": "Question",
          "name": "Why is the exact date of a transaction so critical in XIRR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike standard IRR which assumes equal intervals between cash flows (like exactly one month), XIRR calculates compounding on a daily basis. If you delay an investment by 15 days, the algorithm records that those specific rupees had 15 fewer days in the market to compound. Consequently, precision in transaction dates drastically alters the final XIRR percentage."
          }
        },
        {
          "@type": "Question",
          "name": "What does a negative XIRR indicate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A negative XIRR simply indicates wealth destruction. It mathematically proves that the current terminal value of your portfolio is less than the aggregate sum of the capital you injected over time. In corporate finance, a negative XIRR over a 5-year horizon is an immediate trigger for portfolio liquidation."
          }
        },
        {
          "@type": "Question",
          "name": "How do Private Equity and Venture Capital firms use XIRR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PE and VC funds do not deploy capital all at once. They execute 'capital calls', drawing down funds from Limited Partners (LPs) at highly erratic intervals over several years as startups require funding. Because these cash flows are non-periodic and volatile, XIRR is the global institutional standard used to calculate the fund's performance and the subsequent 'Carried Interest' performance fees."
          }
        }
      ]
    }
  ]
};

export function XIRRContent() {
  useSchema(XIRR_SCHEMA);

  return (
    <>
      

      <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid var(--accent-blue)', padding: '16px', marginBottom: '24px', borderRadius: '4px' }}>
        <strong>What does this calculator do?</strong> This XIRR calculator helps Indian retail investors, salaried professionals, and students plan their finances smartly by computing values based on standard formulas.
        <br/><br/>
        <strong>Example:</strong> Priya from Pune earns ₹8 LPA and wants to save ₹50,000. Using this calculator, she can quickly determine her exact financial outcome and optimize her savings strategy.
      </div>
    <section className="calc-faq" style={{ marginBottom: '24px' }}>
        <h2>The Definitive Masterclass on Extended Internal Rate of Return (XIRR)</h2>
        <div style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: '1.85' }}>
          
          <p style={{ marginBottom: '20px' }}>
            In the elite echelons of corporate finance, investment banking, and Private Equity, metrics dictate capital flow. Retail investors obsess over Absolute Returns or simple Compound Annual Growth Rates (CAGR). However, when dealing with complex, real-world portfolios characterized by highly erratic cash injections and sporadic liquidations, these elementary metrics collapse. They produce mathematically fraudulent data.
          </p>
          <p style={{ marginBottom: '20px' }}>
            The global institutional standard for measuring the performance of an actively managed portfolio is the <strong>Extended Internal Rate of Return (XIRR)</strong>. As a financial architect, I mandate that my clients disregard their broker’s absolute return dashboards and exclusively evaluate their wealth managers using XIRR. This masterclass will deconstruct why CAGR is dangerously flawed for SIPs, the algorithmic genius of the Newton-Raphson method, and how to weaponize XIRR to ruthlessly audit your investment portfolio.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            1. The Fatal Flaw of CAGR in the Real World
          </h3>
          <p style={{ marginBottom: '20px' }}>
            To understand the necessity of XIRR, one must first expose the limitations of CAGR. The CAGR formula is elegantly simple: <strong>(Ending Value / Beginning Value)^(1/Years) - 1</strong>. It evaluates a single lumpsum investment made on Day 1 and compares it against the terminal value on Day 1000. 
          </p>
          <p style={{ marginBottom: '20px' }}>
            But human financial behavior is not a single lumpsum event. A standard High-Net-Worth Individual (HNI) executes a ₹2 Lakh SIP on the 5th of every month, injects a random ₹10 Lakh annual bonus in March, and sporadically withdraws ₹5 Lakhs for a luxury purchase. 
          </p>
          <p style={{ marginBottom: '20px' }}>
            If you attempt to apply CAGR to this chaotic ledger, the mathematics violently fail. CAGR assumes all capital was invested on Day 1. It ignores the fact that the ₹10 Lakhs injected in Year 3 only had two years to compound, artificially inflating or deflating the performance metric. To evaluate multiple cash flows occurring at non-periodic intervals, you must abandon CAGR entirely and utilize XIRR.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            2. The Algorithmic Mechanics: The Newton-Raphson Method
          </h3>
          <p style={{ marginBottom: '20px' }}>
            Unlike CAGR, XIRR does not possess a closed-form algebraic formula that you can calculate on a standard calculator. It is a highly sophisticated computational algorithm rooted in calculus, specifically the <strong>Newton-Raphson method</strong>.
          </p>
          <p style={{ marginBottom: '20px' }}>
            The definition of XIRR is: <em>The specific discount rate that forces the Net Present Value (NPV) of all historical cash flows to exactly zero.</em>
          </p>
          <p style={{ marginBottom: '20px' }}>
            Because the equation involves multiple fractional exponents (representing the exact number of days each transaction was in the market), the equation cannot be algebraically solved for the rate. Instead, our calculator algorithm guesses a rate (say, 10%), checks if the NPV is zero, fails, adjusts the guess via the calculus derivative, guesses 12%, fails, adjusts, guesses 11.5%, and iterates thousands of times per second until it converges on the exact decimal precision. This algorithmic horsepower is what makes XIRR the apex metric of financial evaluation.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            3. The Tyranny of the Calendar: Exact Daily Compounding
          </h3>
          <p style={{ marginBottom: '20px' }}>
            There is a lesser metric known simply as IRR (Internal Rate of Return). IRR assumes that all cash flows occur at perfectly equal intervals (e.g., exactly every 30 days). In the real world, this never happens. Weekends, bank holidays, and delayed payrolls ensure your SIP might hit on the 5th one month and the 8th the next.
          </p>
          <p style={{ marginBottom: '20px' }}>
            The 'X' in XIRR stands for <em>Extended</em>. It incorporates the exact calendar date of every single transaction. The algorithm calculates compounding on a <strong>daily basis</strong>. If you deploy ₹5 Lakhs on October 1st instead of October 15th, the algorithm mathematically registers that those specific rupees had 14 extra days in the market to generate wealth. 
          </p>
          <p style={{ marginBottom: '20px' }}>
            This precision is why XIRR is utilized by global Private Equity and Venture Capital funds. They execute "capital calls"—drawing down funds from their Limited Partners (LPs) at highly erratic intervals over a 7-year fund lifecycle. They charge their 20% "Carried Interest" performance fees exclusively based on the XIRR they deliver, not the absolute returns.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            4. Weaponizing XIRR for Portfolio Auditing
          </h3>
          <p style={{ marginBottom: '20px' }}>
            As a wealth strategist, I utilize XIRR as a diagnostic scalpel to identify parasitic investments within a client's portfolio. The most common offenders are traditional Endowment Life Insurance Policies (ULIPs/Moneyback policies).
          </p>
          <p style={{ marginBottom: '20px' }}>
            An insurance agent will present a brochure showing you pay ₹1 Lakh for 10 years, and at Year 20, you receive ₹20 Lakhs. They will triumphantly claim this is a "100% Return on Investment." This is statistical manipulation designed for the financially illiterate. 
          </p>
          <p style={{ marginBottom: '20px' }}>
            When you run those exact cash flows—10 negative outflows of ₹1 Lakh on exact dates, followed by 10 years of illiquidity, and a final positive inflow of ₹20 Lakhs—the XIRR calculation routinely spits out a pathetic 4.5% to 5.5%. The policy mathematically failed to even beat macroeconomic inflation. By running the XIRR, you penetrate the marketing illusion and expose the actual annualized yield of the asset.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            5. The Danger of Short-Term XIRR Anomalies
          </h3>
          <p style={{ marginBottom: '20px' }}>
            A critical caveat when operating with XIRR is understanding its fragility over extremely short time horizons (under 12 months). 
          </p>
          <p style={{ marginBottom: '20px' }}>
            If you invest ₹1 Lakh, and 30 days later the market rallies, surging your portfolio to ₹1.1 Lakhs. Your absolute return is a respectable 10%. However, because XIRR is an <em>annualized</em> metric, the algorithm assumes you will continue to generate that exact 10% every single month for the rest of the year. The calculator will spit out an astronomical XIRR of over 200%. This is a mathematical anomaly, not a realistic projection. XIRR is only a valid metric for evaluating portfolios with a seasoning of at least 12 to 24 months.
          </p>
          <p style={{ marginBottom: '20px' }}>
            In summation, if you are actively managing a portfolio, deploying SIPs, booking partial profits, and rebalancing capital, XIRR is the only metric that matters. Utilize our institutional XIRR calculator above. Input your exact historical cash flows, the precise dates of execution, and the current terminal value, to instantly execute the Newton-Raphson algorithm and uncover the unvarnished truth of your financial performance.
          </p>

        </div>
      </section>

      {/* ── SEO: FAQ Section ── */}
      <section className="calc-faq">
        <h2>Expert Financial FAQs: XIRR Mechanics</h2>

        <details className="faq-item">
          <summary>What is the difference between CAGR and XIRR?</summary>
          <p><strong>CAGR (Compound Annual Growth Rate)</strong> is a rudimentary metric that only measures the return between a single starting value and a single ending value, completely ignoring any cash flows that occurred in between. <strong>XIRR (Extended Internal Rate of Return)</strong> evaluates highly erratic, multiple cash flows occurring on specific dates. If you invest via an SIP or make random withdrawals, CAGR is mathematically invalid; XIRR is the only accurate metric.</p>
        </details>

        <details className="faq-item">
          <summary>How does the XIRR algorithmic calculation work?</summary>
          <p>XIRR does not use a closed-form algebraic formula. It relies on a trial-and-error mathematical algorithm known as the <strong>Newton-Raphson method</strong>. The algorithm systematically guesses thousands of different discount rates per second until it finds the exact rate that forces the Net Present Value (NPV) of all your historical cash flows to equal exactly zero.</p>
        </details>

        <details className="faq-item">
          <summary>Why is the exact date of a transaction so critical in XIRR?</summary>
          <p>Unlike standard IRR which assumes equal intervals between cash flows, XIRR calculates compounding on a <strong>daily basis</strong>. If you delay an investment by 15 days, the algorithm records that those specific rupees had 15 fewer days in the market to compound. Consequently, precision in transaction dates drastically alters the final XIRR percentage.</p>
        </details>

        <details className="faq-item">
          <summary>What does a negative XIRR indicate?</summary>
          <p>A negative XIRR simply indicates <strong>wealth destruction</strong>. It mathematically proves that the current terminal value of your portfolio is less than the aggregate sum of the capital you injected over time. In corporate finance, a negative XIRR over a 5-year horizon is an immediate trigger for portfolio liquidation.</p>
        </details>

        <details className="faq-item">
          <summary>How do Private Equity and Venture Capital firms use XIRR?</summary>
          <p>PE and VC funds execute 'capital calls', drawing down funds from Limited Partners (LPs) at highly erratic intervals over several years as startups require funding. Because these cash flows are non-periodic and volatile, XIRR is the <strong>global institutional standard</strong> used to calculate the fund's performance and the subsequent 'Carried Interest' performance fees.</p>
        </details>
      </section>
    
      {/* ── EEAT: Data Sources & Methodology ── */}
      <section className="calc-faq" style={{ marginTop: '24px' }}>
        <h3>Data Sources & Methodology</h3>
        <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
          <strong>Data Sources:</strong> Data used in this calculator is updated for FY 2025-26 (AY 2026-27) and sourced from official Indian regulatory bodies including the Reserve Bank of India (RBI), Securities and Exchange Board of India (SEBI), Association of Mutual Funds in India (AMFI), and the Income Tax Department of India.
          <br /><br />
          <strong>Methodology:</strong> The formulas used reflect standard mathematical principles of time value of money and Indian taxation laws. 
          <br /><br />
          <em>Last updated: June 30, 2026</em>
        </p>
      </section>


      <section className="calc-faq" style={{ marginTop: '24px', background: 'var(--surface-color)', padding: '16px', borderRadius: '8px' }}>
        <h3>Market Insights & Statistics</h3>
        <ul style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
          <li>Monthly SIP inflows in India crossed ₹24,000 crore in 2026 (AMFI).</li>
          <li>New Tax Regime is now the default regime for FY 2025-26 (Budget 2025).</li>
          <li>PPF interest rate for Q1 FY2026-27 remains highly attractive for tax-free compounding (Ministry of Finance).</li>
        </ul>
      </section>
  
</>
  );
}
