import React from 'react';
import { useSchema } from '../hooks/useDocumentMetadata';

const EMI_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Calsi EMI Calculator",
      "url": "https://calsi.vercel.app/emi",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
      "description": "Institutional EMI Calculator. Deconstruct amortization schedules, model strategic prepayments, and optimize corporate or retail debt obligations.",
      "creator": { "@type": "Organization", "name": "Calsi", "url": "https://calsi.vercel.app" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is the Equated Monthly Installment (EMI) mathematically calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The standard EMI formula utilized by retail banks is E = P × r × (1 + r)^n / ((1 + r)^n - 1), where P is the principal loan amount, r is the monthly interest rate (annual rate divided by 12 and converted to decimal), and n is the total tenure in months. This algorithm ensures the exact amortization of the debt over the stipulated tenure."
          }
        },
        {
          "@type": "Question",
          "name": "Why is the interest component so high in the early years of a home loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This is a structural feature of the amortization curve. In the first few years, your outstanding principal is at its peak. Since monthly interest is strictly calculated on the outstanding principal, the vast majority of your EMI goes toward servicing the interest, not reducing the principal. It is only in the final years of the loan that the ratio flips and the principal is aggressively paid down."
          }
        },
        {
          "@type": "Question",
          "name": "How does strategic prepayment destroy loan tenure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Any prepayment you make is legally mandated to be deducted 100% directly from your outstanding principal, completely bypassing the interest curve. By making just one extra EMI payment per year, or increasing your monthly EMI by a mere 5%, you can effectively obliterate 5 to 7 years off a standard 20-year home loan, saving tens of lakhs in compound interest."
          }
        },
        {
          "@type": "Question",
          "name": "Should I choose a Fixed Rate or a Floating Rate (Repo-Linked) loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For long-term mortgages, floating rate loans (specifically Repo Rate Linked Lending Rates - RLLR) are structurally superior. In a falling interest rate macroeconomic environment, floating rates automatically transmit the RBI's rate cuts to your EMI. Furthermore, the RBI prohibits banks from levying prepayment penalties on floating-rate home loans, providing you with unlimited liquidity flexibility."
          }
        },
        {
          "@type": "Question",
          "name": "What are the tax benefits of a Home Loan under Indian Law?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A home loan serves as a massive tax shield. Under Section 24(b), you can deduct up to ₹2 Lakhs of the interest paid from your taxable income. Under Section 80C, you can deduct up to ₹1.5 Lakhs of the principal repayment. If the property is jointly owned with a working spouse, these deduction limits double, allowing for a combined ₹7 Lakhs of tax-free liquidity annually."
          }
        }
      ]
    }
  ]
};

export function EMIContent() {
  useSchema(EMI_SCHEMA);

  return (
    <>
      <section className="calc-faq" style={{ marginBottom: '24px' }}>
        <h2>The Definitive Masterclass on Debt Amortization & Leverage (EMI)</h2>
        <div style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: '1.85' }}>
          
          <p style={{ marginBottom: '20px' }}>
            In the realm of institutional wealth architecture, the concept of debt is bifurcated into two strict categories: Destructive Liability and Strategic Leverage. A depreciating asset funded by high-interest unsecured debt (like credit card loans or auto loans) is a wealth destroyer. Conversely, an appreciating asset funded by sovereign-subsidized, tax-shielded debt (like a residential or commercial mortgage) is the fundamental cornerstone of real estate empire building.
          </p>
          <p style={{ marginBottom: '20px' }}>
            To master leverage, you must entirely decode the mathematics of the <strong>Equated Monthly Installment (EMI)</strong>. As a corporate financial strategist, I consistently witness retail borrowers losing lakhs of rupees to banks simply because they do not understand the underlying amortization curve. This masterclass will deconstruct the predatory nature of front-loaded interest, the absolute necessity of strategic prepayment, the macroeconomic choice between fixed and floating rates, and the tax arbitrage of a home mortgage.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            1. The Amortization Curve: Why Banks Win the Early Years
          </h3>
          <p style={{ marginBottom: '20px' }}>
            The most profound shock a borrower experiences occurs when they review their loan statement after 5 years of religiously paying a 20-year mortgage, only to discover their principal balance has barely moved. This is not fraud; it is the rigid mathematics of the <strong>Amortization Schedule</strong>.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Interest is calculated strictly on the outstanding principal. In Month 1 of a ₹1 Crore loan at 9% p.a., your outstanding principal is massive (₹1 Crore). Therefore, the interest component for that month is roughly ₹75,000. If your EMI is ₹90,000, a staggering 83% of your payment is instantly consumed by the bank as profit, while only ₹15,000 goes toward reducing your actual debt. 
          </p>
          <p style={{ marginBottom: '20px' }}>
            This creates a highly asymmetrical, front-loaded interest curve. The bank extracts the vast majority of its profit in the first 7 to 8 years of a 20-year loan. By the time you reach Year 15, the principal is finally small, and the ratio flips: your EMI primarily kills principal. Understanding this curve is critical; if you plan to sell or flip the property within 5 years, you must recognize that you have paid almost nothing toward equity and have essentially been renting the money from the bank at maximum margin.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            2. The Prepayment Strategy: Detonating the Debt Schedule
          </h3>
          <p style={{ marginBottom: '20px' }}>
            Because the bank’s profit relies on keeping your principal high in the early years, your singular mathematical objective must be to aggressively attack the principal. This is executed via <strong>Strategic Prepayment</strong>.
          </p>
          <p style={{ marginBottom: '20px' }}>
            By law, any lump sum prepayment you make outside of your EMI is immediately and 100% deducted from the outstanding principal. It bypasses the interest curve entirely. Let us observe the institutional impact of this:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}><strong>The 1-Extra-EMI Strategy:</strong> If you divide your annual bonus and pay exactly 13 EMIs a year instead of 12, a standard 20-year home loan will be violently compressed to approximately 16.5 years.</li>
            <li style={{ marginBottom: '8px' }}><strong>The 5% Step-Up Strategy:</strong> If you voluntarily increase your EMI payout by a mere 5% every year (matching your salary increment), a 20-year mortgage is obliterated in roughly 12 years.</li>
          </ul>
          <p style={{ marginBottom: '20px' }}>
            When you prepay ₹1 Lakh in Year 2, you are not merely reducing your debt by ₹1 Lakh. You are legally denying the bank the right to charge 9% interest on that ₹1 Lakh for the remaining 18 years. A ₹1 Lakh prepayment early in the tenure literally erases over ₹2.5 Lakhs in future compound interest. Prepayment is the ultimate defensive alpha.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            3. Floating vs Fixed Rates: The Macroeconomic Play
          </h3>
          <p style={{ marginBottom: '20px' }}>
            When securing leverage, the borrower is forced to choose between a Fixed Rate and a Floating Rate. In the Indian retail banking sector, specifically for long-tenure mortgages, the institutional consensus is unequivocally in favor of the <strong>Floating Rate (Repo-Linked)</strong>.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Fixed rates are typically priced 100 to 200 basis points higher than floating rates. The bank charges you a massive premium to insure you against future rate hikes. However, the true danger of a fixed-rate loan is liquidity lock-in. Banks are legally permitted to charge exorbitant prepayment penalties (often 2% to 4% of the outstanding principal) if you attempt to prepay or refinance a fixed-rate loan.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Conversely, the RBI mandated in 2019 that no bank or NBFC can charge a single rupee as a prepayment penalty on floating-rate housing loans for individuals. This zero-friction liquidity allows you to ruthlessly refinance your loan. If HDFC is charging you 9.0% and SBI drops their rate to 8.4%, you can port your entire ₹2 Crore loan to SBI with zero exit load. You retain absolute control over your liability.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            4. The Home Loan Tax Shield: Arbitraging the Government
          </h3>
          <p style={{ marginBottom: '20px' }}>
            A primary residence mortgage is not merely a loan; it is a government-subsidized tax shield. High-Net-Worth Individuals (HNIs) leverage these exact clauses to strip lakhs of rupees from their taxable income footprint.
          </p>
          <p style={{ marginBottom: '20px' }}>
            <strong>Section 24(b):</strong> Allows a flat deduction of up to ₹2 Lakhs per annum on the interest component paid. For a borrower in the 30% slab, this translates to an absolute cash savings of ₹60,000 every year. If the property is rented out (Let-Out Property), there is theoretically no upper limit to the interest you can claim against the rental income.
          </p>
          <p style={{ marginBottom: '20px' }}>
            <strong>Section 80C:</strong> Allows a deduction of up to ₹1.5 Lakhs per annum on the principal repayment component of the EMI.
          </p>
          <p style={{ marginBottom: '20px' }}>
            If the property is co-owned and co-borrowed with a working spouse, the Income Tax Department permits both individuals to claim these limits independently. This means a dual-income household can legally shield up to <strong>₹7 Lakhs of income per year</strong> (₹4L under 24b + ₹3L under 80C) from taxation. This extreme tax efficiency effectively reduces the "Real Cost of Borrowing" from a nominal 8.5% down to roughly 5.8% post-tax.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            5. The Ultimate Arbitrage: Should You Prepay or Invest?
          </h3>
          <p style={{ marginBottom: '20px' }}>
            The most complex mathematical dilemma faced by wealthy professionals is: <em>"I have a ₹20 Lakh bonus. Should I prepay my home loan, or invest it in Equity Mutual Funds?"</em>
          </p>
          <p style={{ marginBottom: '20px' }}>
            This is resolved purely by calculating the Arbitrage Spread. If your home loan interest rate is 8.5%, but your post-tax effective cost of borrowing (factoring in the Section 24b deductions) is roughly 6.0%. If you deploy that ₹20 Lakhs into a Nifty 50 Index Fund, historical macroeconomic data suggests an expected post-tax CAGR of roughly 11% to 12%. 
          </p>
          <p style={{ marginBottom: '20px' }}>
            You are borrowing money at 6.0% to earn 12.0%. This represents a positive arbitrage spread of 600 basis points. In corporate finance, when you possess positive spread, you do not pay down debt; you aggressively deploy the capital into the higher-yielding asset. However, this mathematically flawless strategy requires absolute emotional discipline to stomach equity volatility. If you are prone to panic selling during a market crash, the mathematics fail, and you are far better served instantly annihilating the debt via prepayment.
          </p>
          <p style={{ marginBottom: '20px' }}>
            In summation, debt is a scalpel. In the hands of a novice, it causes financial hemorrhage; in the hands of a surgeon, it carves out empires. Utilize our institutional-grade EMI calculator above to dissect your exact amortization schedule, model your interest outgo, and architect a strategic prepayment plan to ruthlessly optimize your liabilities.
          </p>

        </div>
      </section>

      {/* ── SEO: FAQ Section ── */}
      <section className="calc-faq">
        <h2>Expert Financial FAQs: Debt Amortization Mechanics</h2>

        <details className="faq-item">
          <summary>How is the Equated Monthly Installment (EMI) mathematically calculated?</summary>
          <p>The standard EMI formula utilized by retail banks is <strong>E = P × r × (1 + r)ⁿ / ((1 + r)ⁿ - 1)</strong>, where P is the principal loan amount, r is the monthly interest rate (annual rate divided by 12 and converted to decimal), and n is the total tenure in months. This algorithm ensures the exact amortization of the debt over the stipulated tenure.</p>
        </details>

        <details className="faq-item">
          <summary>Why is the interest component so high in the early years of a home loan?</summary>
          <p>In the first few years, your outstanding principal is at its peak. Since monthly interest is strictly calculated on the outstanding principal, the vast majority of your EMI goes toward servicing the interest, not reducing the principal. It is only in the final years of the loan that the ratio flips and the principal is aggressively paid down.</p>
        </details>

        <details className="faq-item">
          <summary>How does strategic prepayment destroy loan tenure?</summary>
          <p>Any prepayment you make is legally mandated to be deducted 100% directly from your outstanding principal, completely bypassing the interest curve. By making just one extra EMI payment per year, or increasing your monthly EMI by a mere 5%, you can effectively obliterate 5 to 7 years off a standard 20-year home loan, saving tens of lakhs in compound interest.</p>
        </details>

        <details className="faq-item">
          <summary>Should I choose a Fixed Rate or a Floating Rate (Repo-Linked) loan?</summary>
          <p>For long-term mortgages, floating rate loans (specifically Repo Rate Linked Lending Rates - RLLR) are structurally superior. The RBI prohibits banks from levying prepayment penalties on floating-rate home loans, providing you with unlimited liquidity flexibility to refinance to a cheaper bank at any time without exit loads.</p>
        </details>

        <details className="faq-item">
          <summary>What are the tax benefits of a Home Loan under Indian Law?</summary>
          <p>A home loan serves as a massive tax shield. Under <strong>Section 24(b)</strong>, you can deduct up to ₹2 Lakhs of the interest paid from your taxable income. Under <strong>Section 80C</strong>, you can deduct up to ₹1.5 Lakhs of the principal repayment. If the property is jointly owned with a working spouse, these limits double, allowing for a combined ₹7 Lakhs of tax-free liquidity annually.</p>
        </details>
      </section>
    </>
  );
}
