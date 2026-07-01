import React from 'react';
import { useSchema } from '../hooks/useDocumentMetadata';

const GST_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "CALSI GST Calculator",
      "url": "https://CALSI.IN/gst",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
      "description": "Institutional GST Calculator. Calculate inclusive and exclusive tax metrics, model Input Tax Credit (ITC) cascades, and optimize corporate supply chain pricing.",
      "creator": { "@type": "Organization", "name": "CALSI", "url": "https://CALSI.IN" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between GST Inclusive and GST Exclusive pricing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GST Exclusive means the tax is added on top of the base price (e.g., Base ₹100 + 18% GST = Final Price ₹118). GST Inclusive means the tax is already baked into the final price. To extract the base price from an inclusive figure, the mathematical formula is: Base Price = Final Price / (1 + (GST Rate / 100))."
          }
        },
        {
          "@type": "Question",
          "name": "How does Input Tax Credit (ITC) solve the cascading effect of taxation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the pre-GST regime, businesses paid 'tax on tax' at every stage of the supply chain. ITC eliminates this. When a manufacturer pays GST on raw materials (Input), and then collects GST when selling the finished product (Output), they can subtract the Input tax from the Output tax. The business ultimately only pays tax on the exact 'Value Added' at their specific stage."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Reverse Charge Mechanism (RCM) under Indian GST Law?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Normally, the supplier of goods or services collects GST from the buyer and pays it to the government. Under RCM, this liability is inverted. The buyer (recipient) is legally obligated to calculate the GST, pay it directly to the government, and then claim it as ITC. This is frequently applicable in services like goods transport agencies (GTA) or when a registered business purchases from an unregistered supplier."
          }
        },
        {
          "@type": "Question",
          "name": "Should a small business opt for the GST Composition Scheme?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Composition Scheme allows small businesses (turnover under ₹1.5 Crores) to pay a flat 1% to 6% tax on gross turnover with zero complex compliance. However, there is a severe penalty: businesses under this scheme cannot claim any Input Tax Credit (ITC) on their purchases, nor can they collect GST from their customers. It is mathematically disastrous for B2B enterprises, but potentially viable for B2C retail."
          }
        },
        {
          "@type": "Question",
          "name": "How does GST impact corporate working capital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GST operates on an accrual billing basis, not a cash receipt basis. The moment a corporate entity issues an invoice, the GST liability is crystallized and must be paid by the 20th of the following month, regardless of whether the client has actually paid the invoice. For B2B enterprises with 90-day payment cycles, this creates a massive, structural working capital bleed."
          }
        }
      ]
    }
  ]
};

export function GSTContent() {
  useSchema(GST_SCHEMA);

  return (
    <>
      

      <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid var(--accent-blue)', padding: '16px', margin: '0 auto 24px auto', borderRadius: '4px', maxWidth: '1100px', width: '100%', boxSizing: 'border-box' }}>
        <strong>What does this calculator do?</strong> This GST calculator helps Indian retail investors, salaried professionals, and students plan their finances smartly by computing values based on standard formulas.
        <br/><br/>
        <strong>Example:</strong> Priya from Pune earns ₹8 LPA and wants to save ₹50,000. Using this calculator, she can quickly determine her exact financial outcome and optimize her savings strategy.
      </div>
    <section className="calc-faq" style={{ marginBottom: '24px' }}>
        <h2>The Definitive Masterclass on Goods and Services Tax (GST) Architecture</h2>
        <div style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: '1.85' }}>
          
          <p style={{ marginBottom: '20px' }}>
            In the domain of corporate finance and supply chain logistics, taxation is not merely an administrative compliance exercise; it is a fundamental determinant of operating margins, pricing architecture, and working capital efficiency. The implementation of the <strong>Goods and Services Tax (GST)</strong> fundamentally rewrote the macroeconomic infrastructure of India, transitioning the nation from a fragmented, cascading tax nightmare into a unified, value-added tax (VAT) geometry.
          </p>
          <p style={{ marginBottom: '20px' }}>
            To a retail consumer, GST is just an extra 18% line item at the bottom of a restaurant bill. To a credentialed Chief Financial Officer (CFO), GST is a hyper-complex ledger of Input Tax Credits, reverse charge liabilities, and cash-flow sequencing. This masterclass will deconstruct the mathematical eradication of the cascading effect, the strategic optimization of ITC, the brutal reality of working capital lockups, and how to architect pricing models under the GST regime.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            1. The Mathematical Eradication of the Cascading Effect
          </h3>
          <p style={{ marginBottom: '20px' }}>
            To understand the genius of GST, one must understand the catastrophic failure of the legacy tax regime. Before GST, India operated on a system of Excise Duty, VAT, CST, and Service Tax. If a factory manufactured a laptop, they paid Excise Duty. When the wholesaler bought it, they paid VAT <em>on top of</em> the Excise Duty. This was "Tax on Tax"—the cascading effect. It artificially inflated the terminal price of goods by 25% to 30%, destroying global export competitiveness.
          </p>
          <p style={{ marginBottom: '20px' }}>
            GST annihilated this through a seamless, unbroken chain of set-offs. It is a pure <strong>Value Added Tax</strong>. The government only extracts tax on the absolute margin added at each specific node of the supply chain. If the total tax on a product from raw material to final consumer is ₹1,000, that ₹1,000 is paid fractionally by the miner, the manufacturer, the wholesaler, and the retailer, precisely in proportion to the value they added. The terminal consumer absorbs the final burden, but the "Tax on Tax" inflation is permanently erased.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            2. The Lifeline of Corporate Margins: Input Tax Credit (ITC)
          </h3>
          <p style={{ marginBottom: '20px' }}>
            The mechanism that allows the eradication of the cascading effect is the <strong>Input Tax Credit (ITC)</strong>. In corporate taxation, mastering ITC reconciliation is the difference between profitability and bankruptcy.
          </p>
          <p style={{ marginBottom: '20px' }}>
            The mathematical logic is elegant: <strong>Net Tax Liability = Output Tax (collected from sales) minus Input Tax (paid on purchases).</strong>
          </p>
          <p style={{ marginBottom: '20px' }}>
            If your software agency purchases ₹10 Lakhs worth of Macbook Pros for your developers, you pay an 18% GST (₹1.8 Lakhs) to the vendor. That ₹1.8 Lakhs is not an expense; it is a liquid asset sitting in your electronic credit ledger. When your agency bills a client ₹20 Lakhs for a software project, you collect 18% GST (₹3.6 Lakhs) from the client.
          </p>
          <p style={{ marginBottom: '20px' }}>
            You do not remit ₹3.6 Lakhs to the government. You deduct your ITC (₹1.8 Lakhs) and remit only the balance (₹1.8 Lakhs). You have successfully legally recovered the entire tax paid on your capital expenditure. However, if your vendor commits fraud and fails to upload their GSTR-1, the government will ruthlessly deny your ITC claim under Rule 36(4), forcing you to pay the tax twice. Institutional vendor reconciliation is therefore a critical corporate mandate.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            3. The Reverse Charge Mechanism (RCM): Liability Inversion
          </h3>
          <p style={{ marginBottom: '20px' }}>
            The standard flow of GST involves the supplier collecting the tax and depositing it. However, the government engineered a legal anomaly to trap tax evasion in unorganized sectors: The <strong>Reverse Charge Mechanism (RCM)</strong>.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Under RCM, the liability is forcefully inverted. If a massive registered corporation hires an unregistered freelance truck driver (Goods Transport Agency) to move freight, the truck driver does not collect GST. Instead, the corporation is legally mandated to calculate the GST on the freight charge, deposit it directly into the government treasury out of their own pocket, and then claim it back as an Input Tax Credit in the subsequent month.
          </p>
          <p style={{ marginBottom: '20px' }}>
            RCM forces large corporate entities to act as tax collectors for the government when dealing with the unorganized sector. Failure to identify RCM liabilities during statutory audits results in catastrophic penal interest and the permanent forfeiture of the associated ITC.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            4. The Working Capital Bleed: Accrual vs Cash Accounting
          </h3>
          <p style={{ marginBottom: '20px' }}>
            The most severe structural flaw of the GST framework for B2B enterprises is that it operates on an aggressive <strong>Accrual Basis</strong> rather than a Cash Basis. This triggers massive working capital hemorrhages.
          </p>
          <p style={{ marginBottom: '20px' }}>
            According to the "Time of Supply" rules, the moment you issue a tax invoice, your liability to the government crystallizes. If you issue an invoice for ₹1 Crore + 18% GST on the 2nd of the month, you are legally obligated to deposit ₹18 Lakhs to the government by the 20th of the following month. 
          </p>
          <p style={{ marginBottom: '20px' }}>
            In the B2B sector, payment cycles routinely stretch to 90 or 120 days. The client has not paid you the ₹1 Crore, nor have they paid you the ₹18 Lakhs in tax. Yet, the government demands the ₹18 Lakhs immediately. The corporation is forced to drain its own working capital—often utilizing high-interest overdraft facilities—to fund the government's tax collection. Architecting pricing models and negotiating stringent payment terms to mitigate this cash-flow bleed is the primary directive of a CFO under the GST regime.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>
            5. Pricing Architecture: Inclusive vs Exclusive Modeling
          </h3>
          <p style={{ marginBottom: '20px' }}>
            When constructing consumer-facing retail pricing (B2C), behavioral economics dictates that the price must be "GST Inclusive." The consumer wishes to see a flat ₹999 on the tag, not ₹846.61 + 18% GST. However, corporate accounting systems require the exact extraction of the base value to calculate profit margins.
          </p>
          <p style={{ marginBottom: '20px' }}>
            The mathematical extraction formula is: <strong>Base Price = Final Price / (1 + (GST Rate / 100))</strong>.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Conversely, in B2B enterprise software and consulting, pricing is strictly "GST Exclusive." You quote $10,000 + Taxes. This is because the enterprise client does not care about the GST amount; they will instantly claim it back as Input Tax Credit. To them, the GST is mathematically irrelevant to their P&L statement.
          </p>
          <p style={{ marginBottom: '20px' }}>
            In summation, GST is a highly sophisticated, mathematically rigorous financial framework that demands flawless execution. A single error in HSN classification or ITC reconciliation can trigger draconian departmental notices. Utilize our institutional GST calculator above to instantly switch between Inclusive and Exclusive pricing architectures, calculate precise CGST/SGST/IGST bifurcations, and ensure your invoicing is mathematically impenetrable.
          </p>

        </div>
      </section>

      {/* ── SEO: FAQ Section ── */}
      <section className="calc-faq">
        <h2>Expert Financial FAQs: GST Mechanics</h2>

        <details className="faq-item">
          <summary>What is the difference between GST Inclusive and GST Exclusive pricing?</summary>
          <p>GST Exclusive means the tax is added on top of the base price (e.g., Base ₹100 + 18% GST = Final Price ₹118). GST Inclusive means the tax is already baked into the final price. To extract the base price from an inclusive figure, the mathematical formula is: <strong>Base Price = Final Price / (1 + (GST Rate / 100))</strong>.</p>
        </details>

        <details className="faq-item">
          <summary>How does Input Tax Credit (ITC) solve the cascading effect of taxation?</summary>
          <p>Under the pre-GST regime, businesses paid 'tax on tax' at every stage of the supply chain. ITC eliminates this. When a manufacturer pays GST on raw materials (Input), and then collects GST when selling the product (Output), they can <strong>subtract the Input tax from the Output tax</strong>. The business ultimately only pays tax on the exact 'Value Added'.</p>
        </details>

        <details className="faq-item">
          <summary>What is the Reverse Charge Mechanism (RCM) under Indian GST Law?</summary>
          <p>Normally, the supplier collects GST from the buyer. Under RCM, this liability is inverted. The buyer (recipient) is legally obligated to calculate the GST, pay it directly to the government out of pocket, and then claim it as ITC. This is frequently applicable when a registered business purchases from an unregistered supplier or Goods Transport Agency.</p>
        </details>

        <details className="faq-item">
          <summary>Should a small business opt for the GST Composition Scheme?</summary>
          <p>The Composition Scheme allows small businesses (turnover under ₹1.5 Crores) to pay a flat 1% to 6% tax on gross turnover with zero complex compliance. However, there is a severe penalty: businesses under this scheme <strong>cannot claim any Input Tax Credit (ITC)</strong>, nor can they collect GST from customers. It is mathematically disastrous for B2B enterprises.</p>
        </details>

        <details className="faq-item">
          <summary>How does GST impact corporate working capital?</summary>
          <p>GST operates on an <strong>accrual billing basis</strong>. The moment a corporate entity issues an invoice, the GST liability is crystallized and must be paid by the 20th of the following month, regardless of whether the client has actually paid the invoice. For B2B enterprises with 90-day payment cycles, this creates a massive structural working capital bleed.</p>
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
        <ul style={{ fontSize: '14px', color: 'var(--text-secondary)', paddingLeft: '24px' }}>
          <li>Monthly SIP inflows in India crossed ₹24,000 crore in 2026 (AMFI).</li>
          <li>New Tax Regime is now the default regime for FY 2025-26 (Budget 2025).</li>
          <li>PPF interest rate for Q1 FY2026-27 remains highly attractive for tax-free compounding (Ministry of Finance).</li>
        </ul>
      </section>
  
</>
  );
}
