import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Landmark, MapPin, ArrowRight } from 'lucide-react';
import '../../pages/guides.css';

export function REITvsRealEstate() {
  return (
    <article className="guide-article-content">
      <section className="guide-section">
        <p className="guide-lead">
          Historically, the most lucrative real estate in India hasn't been the 2BHK residential apartment—it has been 
          Grade-A Commercial Real Estate (CRE). Office parks, malls, and massive warehouses generate incredible 
          rental yields (7-9%) compared to residential property (2-3%). 
        </p>
        <p>
          But there was a major catch: To buy a premium office space in Mumbai, Bengaluru, or Gurgaon, you needed 
          <strong>₹5 to ₹10 Crores</strong> in capital. This effectively locked retail investors out of the best real 
          estate assets. That is, until the introduction of <strong>Real Estate Investment Trusts (REITs)</strong>.
        </p>
      </section>

      <section className="guide-section">
        <h2>What are REITs?</h2>
        <p>
          A REIT works exactly like a Mutual Fund, but instead of pooling money from thousands of investors to buy stocks, 
          it pools money to buy massive, income-generating commercial properties. These properties are leased to multinational 
          companies (like Google, TCS, Amazon), and the rent collected is distributed back to you as dividends.
        </p>
        <p>
          India currently has several publicly traded REITs, including:
        </p>
        <ul>
          <li><strong>Embassy Office Parks REIT:</strong> The first and largest, backed by Blackstone.</li>
          <li><strong>Mindspace Business Parks REIT:</strong> K. Raheja Corp portfolio.</li>
          <li><strong>Brookfield India Real Estate Trust:</strong> Managed by global asset manager Brookfield.</li>
          <li><strong>Nexus Select Trust:</strong> India's first retail (shopping mall) REIT.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>REITs vs Physical Real Estate: The Ultimate Comparison</h2>
        
        <h3>1. Capital Required (Entry Barrier)</h3>
        <p>
          <strong>Physical CRE:</strong> Requires crores of rupees. Even a fractional ownership platform often demands ₹10 to ₹25 Lakhs minimum investment.
        </p>
        <p>
          <strong>REITs:</strong> You can buy a single unit of a REIT on the stock market for just ₹250 to ₹400. You can literally invest ₹1,000 and become a fractional owner of a massive tech park in Bengaluru.
        </p>

        <h3>2. Liquidity</h3>
        <p>
          <strong>Physical CRE:</strong> Highly illiquid. If you need money for a medical emergency, you cannot sell "10% of your office space." Finding a buyer for a ₹5 Crore property can take 6 to 12 months.
        </p>
        <p>
          <strong>REITs:</strong> Liquid instantly. Because they trade on the NSE and BSE like regular shares, you can click "Sell" on your Zerodha or Groww app and have the cash in your bank account in T+1 days.
        </p>

        <h3>3. Rental Yields & Distributions</h3>
        <p>
          <strong>Physical CRE:</strong> Can generate 7% to 9% yields. However, you have to deal with tenant vacancies, property tax, maintenance, and broker fees. If your single tenant leaves, your income drops to zero instantly.
        </p>
        <p>
          <strong>REITs:</strong> By law, REITs must distribute <strong>90% of their net distributable cash flows</strong> to investors at least twice a year (most do it quarterly). Current REIT yields range from 6% to 8%. Because a REIT owns dozens of buildings with hundreds of corporate tenants, the risk of vacancy is heavily diversified.
        </p>

        <h3>4. Capital Appreciation</h3>
        <p>
          Both physical real estate and REITs offer capital appreciation over time as the underlying property values and rental rates increase. However, REIT prices can also be volatile in the short term depending on stock market sentiment and interest rates.
        </p>
      </section>

      <section className="guide-section">
        <h2>Taxation on REITs (As of 2026)</h2>
        <p>
          The taxation on REITs is slightly complex because the payouts are split into three components: 
          <strong>Interest, Dividend, and Repayment of Debt</strong>.
        </p>
        <ul>
          <li><strong>Dividend:</strong> Taxable at your slab rate (unless the REIT has a special tax status).</li>
          <li><strong>Interest:</strong> Taxable at your income tax slab rate.</li>
          <li><strong>Repayment of Debt (Return of Capital):</strong> Generally tax-free in the hands of the investor, though it reduces your acquisition cost for future capital gains.</li>
        </ul>
        <p>
          When you sell the REIT units on the stock market, they are taxed similarly to equity shares: Short-Term Capital Gains (STCG) if held less than 1 year, and Long-Term Capital Gains (LTCG) if held more than 1 year.
        </p>
      </section>

      <section className="guide-section">
        <h2>The Verdict: Which is Better?</h2>
        <p>
          For the 99% of retail investors, <strong>REITs are vastly superior</strong> to buying physical commercial real estate. 
          They provide professional management, zero tenant headaches, massive diversification, instant liquidity, and a 
          high entry-level yield without requiring you to take on a massive loan.
        </p>
        <p>
          Physical real estate is only better if you are an Ultra High Net Worth Individual (UHNWI) who already possesses 
          tens of crores in capital and has a dedicated family office to manage the properties and tenants.
        </p>
      </section>

      <section className="guide-section faq-section">
        <h2>Frequently Asked Questions</h2>
        <details className="faq-item">
          <summary>How do I invest in REITs?</summary>
          <div className="faq-answer">
            <p>You can buy REITs exactly like you buy stocks. Just open your Demat account (Zerodha, Groww, Upstox), search for "Embassy" or "Mindspace", and hit buy. You can even set up a monthly SIP.</p>
          </div>
        </details>

        <details className="faq-item">
          <summary>Are REITs safer than Mutual Funds?</summary>
          <div className="faq-answer">
            <p>REITs are generally less volatile than pure Equity Mutual Funds because they are backed by physical, rent-generating assets. However, they are more volatile than Debt Mutual Funds or FDs, as their price can fluctuate on the stock exchange.</p>
          </div>
        </details>
      </section>
    </article>
  );
}
