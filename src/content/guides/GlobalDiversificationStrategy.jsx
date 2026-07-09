import { Link } from 'react-router-dom';
import { ArrowRight, Activity } from 'lucide-react';

export function GlobalDiversificationStrategy() {
  return (
    <article className="guide-article-content">
      <p className="guide-lead">
        For the Indian retail investor, the "home country bias" is a significant portfolio risk. While the Indian equity markets (Nifty 50) offer tremendous growth potential, constructing a truly robust, mathematically optimized portfolio in 2026 requires geographic and currency diversification. Here is why you must allocate a portion of your wealth to US and global equities.
      </p>

      <h2>1. The Currency Depreciation Arbitrage</h2>
      <p>
        The most overlooked advantage of investing in US equities from India is the structural depreciation of the Indian Rupee (INR) against the US Dollar (USD). Historically, the INR depreciates against the USD by approximately 3.5% to 4.5% annually due to inflation differentials.
      </p>
      <p>
        When you invest in a US index fund, you benefit from two distinct vectors of growth: the actual capital appreciation of the underlying stocks (e.g., the S&P 500 rising by 10%), plus the currency depreciation. 
      </p>
      <div className="guide-highlight">
        <strong>The Math:</strong> If the US market grows by 10% in dollar terms, and the USD appreciates by 4% against the INR, your absolute return in Rupee terms is approximately 14.4%. This invisible "currency kicker" acts as a powerful hedge against domestic inflation.
      </div>

      <h2>2. Decoupling from Domestic Macro-Risks</h2>
      <p>
        The Indian market is inherently tied to domestic variables: monsoon patterns, RBI monetary policy, local political stability, and fluctuating crude oil prices (as India is a net importer). If a localized crisis triggers a domestic bear market, a portfolio composed entirely of Indian assets will suffer a severe drawdown.
      </p>
      <p>
        Global diversification ensures that a portion of your wealth is insulated from Indian macro-shocks. US markets are driven by global technological innovation, US Federal Reserve policies, and massive multinational corporate earnings. This low correlation between the Nifty 50 and the S&P 500 reduces your portfolio's overall standard deviation (volatility).
      </p>

      <h2>3. Navigating the LRS and 20% TCS Rule</h2>
      <p>
        Investing directly in US stocks via foreign brokerage accounts requires utilizing the RBI's Liberalised Remittance Scheme (LRS). However, recent tax regulations have fundamentally altered this mechanism.
      </p>
      <p>
        As of the current tax rules, any remittance above ₹7 Lakhs in a financial year for investment purposes attracts a <strong>20% Tax Collected at Source (TCS)</strong>. While this 20% is not a "tax" (it can be adjusted against your final income tax liability or claimed as a refund), it severely impacts your immediate liquidity.
      </p>
      <h3>The Mutual Fund Bypass Strategy</h3>
      <p>
        To avoid the cash flow lock-up of the 20% TCS, the most efficient route for Indian investors in 2026 is domestic Mutual Funds and ETFs that invest in foreign indices (e.g., Motilal Oswal Nasdaq 100 ETF, or ICICI Prudential US Bluechip Equity Fund). Because you invest in INR through an Indian Asset Management Company (AMC), the LRS limits and TCS do not apply.
      </p>

      <h2>4. Taxation of International Equity in India</h2>
      <p>
        The taxation rules for international mutual funds underwent a severe overhaul. Previously, they enjoyed indexation benefits if held for over three years. Today, the tax structure is less forgiving:
      </p>
      <ul>
        <li><strong>Mutual Funds (less than 35% domestic equity):</strong> Any gains from international mutual funds or ETFs are now treated as Short-Term Capital Gains (STCG) regardless of the holding period. They are added to your overall income and taxed at your applicable slab rate (which could be up to 30%).</li>
        <li><strong>Direct US Stocks:</strong> If you invest directly in US stocks via LRS, gains held for more than 24 months are classified as Long-Term Capital Gains (LTCG) and taxed at 12.5% (post-Budget 2024 changes). Short-term gains are taxed at your slab rate. Additionally, US dividends attract a 25% withholding tax in the US, which can be partially offset in India using the Double Taxation Avoidance Agreement (DTAA).</li>
      </ul>

      <h2>5. Optimal Allocation Strategy</h2>
      <p>
        For a retail investor under 45 years of age, financial modeling suggests an optimal international equity allocation of <strong>15% to 25%</strong> of the total equity portfolio. This provides sufficient geographic diversification without exposing the portfolio to extreme currency volatility risks.
      </p>
      <p>
        The primary vehicle should be passive, low-cost index funds tracking the S&P 500 or Nasdaq 100. This ensures you capture the growth of global technology monopolies (Apple, Microsoft, NVIDIA) that are not available on the Indian bourses.
      </p>

      <div className="guide-cta-box" style={{ '--guide-cta-bg': '#10b981' }}>
        <div className="guide-cta-icon">
          <Activity size={32} />
        </div>
        <div className="guide-cta-text">
          <h3>Model Your Global SIP Returns</h3>
          <p>Project the future value of a diversified portfolio combining Nifty 50 and S&P 500 investments. Use our SIP calculator to map out your wealth creation journey.</p>
          <Link to="/calculators/sip-calculator" className="guide-cta-btn">
            Open SIP Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
