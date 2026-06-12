import React from 'react';
import { useSchema } from '../hooks/useDocumentMetadata';

const SSY_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Calsi SSY Calculator",
      "url": "https://calsi.vercel.app/ssy",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
      "description": "Institutional Sukanya Samriddhi Yojana (SSY) Calculator. Model the 21-year maturity compounding curve and optimize EEE tax-exempt capital allocation for your daughter.",
      "creator": { "@type": "Organization", "name": "Calsi", "url": "https://calsi.vercel.app" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why does the SSY scheme mathematically outperform the PPF?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both instruments share the elite EEE (Exempt-Exempt-Exempt) tax structure, but the Ministry of Finance structurally mandates the SSY interest rate to be 0.50% to 0.90% higher than the PPF. Compounded over a 21-year maturity horizon, this seemingly minor delta generates lakhs of additional tax-free wealth."
          }
        },
        {
          "@type": "Question",
          "name": "What is the structural anomaly between the SSY Deposit Period and Maturity Period?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike standard instruments where you deposit until maturity, the SSY has a 15-year contribution phase but a 21-year maturity phase. You are legally prohibited from depositing capital after Year 15. However, the accumulated corpus continues to compound at the sovereign interest rate for the final 6 years (Year 16 to Year 21), driving massive exponential growth."
          }
        },
        {
          "@type": "Question",
          "name": "How does the '5th of the Month' rule affect SSY returns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Identical to the PPF, SSY interest is calculated on the lowest balance between the close of the 5th day and the end of the month. To capture maximum compounding velocity, the optimal institutional strategy is to deposit the entire ₹1.5 Lakh annual maximum limit strictly between the 1st and 4th of April every financial year."
          }
        },
        {
          "@type": "Question",
          "name": "What are the liquidity constraints of the SSY account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The SSY is a highly illiquid instrument designed to enforce saving discipline. Premature withdrawal is strictly prohibited until the girl child attains the age of 18. At age 18, a maximum of 50% of the preceding year's balance can be withdrawn exclusively for higher education. The account fully matures and allows 100% liquidation after 21 years or at the time of the girl's marriage (after age 18)."
          }
        },
        {
          "@type": "Question",
          "name": "Can High-Net-Worth Individuals (HNIs) open an SSY account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. There are no income restrictions for the SSY. Any Indian resident parent or legal guardian of a girl child below the age of 10 can open the account. For HNIs, the SSY is an indispensable tool to permanently shield ₹1.5 Lakhs annually from their 30%+ marginal tax slab while generating sovereign-backed alpha."
          }
        }
      ]
    }
  ]
};

export function SSYContent() {
  useSchema(SSY_SCHEMA);

  return (
    <>
      <section className="calc-faq" style={{ marginBottom: '24px' }}>
        <h2>The Definitive Masterclass on Sukanya Samriddhi Yojana (SSY) Architecture</h2>
        <div style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: '1.85' }}>
          
          <p style={{ marginBottom: '20px' }}>
            Within the complex matrix of Indian capital markets and fixed-income securities, true structural arbitrage is rare. However, the <strong>Sukanya Samriddhi Yojana (SSY)</strong>—launched under the 'Beti Bachao Beti Padhao' campaign—represents one of the most mathematically dominant, tax-efficient wealth accumulation vehicles ever engineered by the sovereign state.
          </p>
          <p style={{ marginBottom: '20px' }}>
            From the perspective of a corporate financial architect managing high-net-worth portfolios, the SSY is not viewed merely as a "child welfare scheme." It is evaluated as a hyper-optimized, sovereign-backed debt instrument that guarantees absolute capital preservation, aggressively outpaces inflation, and operates within the elite EEE taxation framework. If you possess a qualifying daughter (below 10 years of age), maximizing your allocation to the SSY is not an option; it is a fiduciary imperative. This masterclass deconstructs the compounding geometry and strategic deployment of the SSY.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            1. The Mathematical Superiority over PPF
          </h3>
          <p style={{ marginBottom: '20px' }}>
            The Public Provident Fund (PPF) is universally lauded as the premier risk-free debt instrument in India. Yet, the SSY systematically outperforms it. The Ministry of Finance structurally mandates that the SSY interest rate remains pegged at a premium (typically 0.50% to 0.90% higher) over the prevailing PPF rate. 
          </p>
          <p style={{ marginBottom: '20px' }}>
            While a 0.8% differential appears statistically insignificant to the retail investor, it creates staggering disparities when exposed to the geometry of compounding over a 21-year horizon. Assuming a constant ₹1.5 Lakh annual deposit and a 100 bps yield spread, the SSY will generate tens of lakhs in surplus tax-free wealth compared to an identically funded PPF account. If your objective is fixed-income alpha, the SSY is the apex predator of the debt market.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            2. The 'EEE' Tax Shield: Engineering Post-Tax Alpha
          </h3>
          <p style={{ marginBottom: '20px' }}>
            Gross returns are an illusion; net post-tax returns dictate the reality of your balance sheet. The SSY operates under the coveted <strong>Exempt-Exempt-Exempt (EEE)</strong> tax classification.
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}><strong>Exemption 1 (Investment):</strong> The capital injected into the SSY (up to the ₹1.5 Lakh ceiling) qualifies for a 100% tax deduction under Section 80C. For a professional in the highest 30% slab, this translates to an immediate cash-flow saving of ₹45,000 annually.</li>
            <li style={{ marginBottom: '8px' }}><strong>Exemption 2 (Accumulation):</strong> The sovereign interest declared annually is completely exempt from taxation. No TDS is deducted, and no slab-rate tax is applicable. 100% of the yield is reinvested to compound the corpus.</li>
            <li style={{ marginBottom: '8px' }}><strong>Exemption 3 (Maturity):</strong> At the 21-year maturity mark, the terminal corpus—which can easily exceed ₹70 Lakhs—is liquidated entirely tax-free.</li>
          </ul>
          <p style={{ marginBottom: '20px' }}>
            To replicate the terminal wealth of an SSY using a traditional, fully taxable Bank Fixed Deposit, an HNI would require an FD offering an annual interest rate exceeding 11.5%—an absurdity in the modern macroeconomic environment.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            3. The 15-Year vs 21-Year Structural Anomaly
          </h3>
          <p style={{ marginBottom: '20px' }}>
            The SSY possesses a unique, two-phased architectural timeline that enforces aggressive wealth preservation: a <strong>15-Year Contribution Phase</strong> followed by a <strong>6-Year Compounding Phase</strong> (culminating in a 21-year maturity).
          </p>
          <p style={{ marginBottom: '20px' }}>
            You are legally mandated to halt all deposits into the account after the completion of the 15th year. However, the accumulated corpus does not stagnate. For the subsequent 6 years (Years 16 through 21), the entire portfolio continues to compound at the sovereign interest rate. 
          </p>
          <p style={{ marginBottom: '20px' }}>
            This structure perfectly aligns with the principles of delayed gratification. By Year 15, your total deployed capital is ₹22.5 Lakhs (₹1.5L x 15). Over the next 6 years, without injecting a single additional rupee, the parabolic nature of the compounding curve forces the corpus to nearly double purely through accumulated interest. This zero-contribution growth phase is the ultimate demonstration of your money working for you.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            4. The Institutional Execution: The '5th of April' Mandate
          </h3>
          <p style={{ marginBottom: '20px' }}>
            Exactly like the PPF, the SSY is governed by the <strong>"5th of the Month" algorithmic rule</strong>. Interest is calculated exclusively on the lowest balance held between the 5th day and the last day of the month.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Retail investors typically initiate a monthly SIP into the SSY, fracturing their ₹1.5 Lakh limit into twelve ₹12,500 installments. This is mathematically suboptimal. The capital deposited in March earns interest for only one month, suffering severe cash drag.
          </p>
          <p style={{ marginBottom: '20px' }}>
            The institutional mandate is to execute a single, ₹1.5 Lakh lumpsum transfer <strong>between April 1st and April 4th</strong> of every financial year. By deploying the entire capital at the absolute genesis of the fiscal calendar, the entire ₹1.5 Lakhs earns compounding interest for the maximum 365 days. Modeled over the 21-year tenure, this strategic April injection yields hundreds of thousands of rupees in surplus wealth compared to a staggered monthly approach.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            5. Liquidity Frictions and Portfolio Integration
          </h3>
          <p style={{ marginBottom: '20px' }}>
            The SSY is highly illiquid, designed explicitly to fund higher education and matrimonial expenses. Premature liquidation is legally barred until the girl child attains 18 years of age. At 18, a maximum of 50% of the preceding year's balance can be withdrawn for documented educational expenses. The account is forcibly terminated either at the 21-year mark or upon the marriage of the girl (provided she is over 18).
          </p>
          <p style={{ marginBottom: '20px' }}>
            Because of this extreme illiquidity, the SSY must not constitute your entire portfolio. It must be viewed as the ultimate, risk-free debt anchor supporting a high-growth equity allocation (Mutual Funds/Direct Equity). The SSY guarantees the capital floor, neutralizing sequence of returns risk for your daughter's major life liabilities, while the equity portfolio drives the alpha required for holistic generational wealth.
          </p>
          <p style={{ marginBottom: '20px' }}>
            In conclusion, if the demographic criteria are met, the Sukanya Samriddhi Yojana is a mandatory allocation. Utilize our institutional SSY calculator above to precisely model the 21-year compounding geometry, adhere strictly to the April lumpsum strategy, and secure an impregnable financial foundation for your daughter's future.
          </p>

        </div>
      </section>

      {/* ── SEO: FAQ Section ── */}
      <section className="calc-faq">
        <h2>Expert Financial FAQs: SSY Mechanics</h2>

        <details className="faq-item">
          <summary>Why does the SSY scheme mathematically outperform the PPF?</summary>
          <p>Both instruments share the elite <strong>EEE (Exempt-Exempt-Exempt)</strong> tax structure, but the Ministry of Finance structurally mandates the SSY interest rate to be <strong>0.50% to 0.90% higher</strong> than the PPF. Compounded over a 21-year maturity horizon, this seemingly minor delta generates lakhs of additional tax-free wealth.</p>
        </details>

        <details className="faq-item">
          <summary>What is the structural anomaly between the SSY Deposit Period and Maturity Period?</summary>
          <p>Unlike standard instruments where you deposit until maturity, the SSY has a <strong>15-year contribution phase</strong> but a <strong>21-year maturity phase</strong>. You are legally prohibited from depositing capital after Year 15. However, the accumulated corpus continues to compound at the sovereign interest rate for the final 6 years (Year 16 to Year 21), driving massive exponential growth.</p>
        </details>

        <details className="faq-item">
          <summary>How does the '5th of the Month' rule affect SSY returns?</summary>
          <p>Identical to the PPF, SSY interest is calculated on the lowest balance between the <strong>close of the 5th day and the end of the month</strong>. To capture maximum compounding velocity, the optimal institutional strategy is to deposit the entire ₹1.5 Lakh annual maximum limit strictly between the <strong>1st and 4th of April</strong> every financial year.</p>
        </details>

        <details className="faq-item">
          <summary>What are the liquidity constraints of the SSY account?</summary>
          <p>The SSY is highly illiquid. Premature withdrawal is strictly prohibited until the girl child attains the age of 18. At age 18, a maximum of <strong>50%</strong> of the preceding year's balance can be withdrawn exclusively for higher education. The account fully matures and allows 100% liquidation after 21 years or at the time of the girl's marriage (after age 18).</p>
        </details>

        <details className="faq-item">
          <summary>Can High-Net-Worth Individuals (HNIs) open an SSY account?</summary>
          <p>Yes. There are <strong>no income restrictions</strong> for the SSY. Any Indian resident parent or legal guardian of a girl child below the age of 10 can open the account. For HNIs, the SSY is an indispensable tool to permanently shield ₹1.5 Lakhs annually from their 30%+ marginal tax slab while generating sovereign-backed alpha.</p>
        </details>
      </section>
    </>
  );
}
