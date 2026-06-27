import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Activity, Search, ArrowRight } from 'lucide-react';
import './guides.css';

export function IndexVsActiveFunds() {
  return (
    <article className="guide-article-content">
      <section className="guide-section">
        <p className="guide-lead">
          For decades, the mutual fund industry has sold a very profitable narrative: <em>"Pay our expert fund managers a 2% fee, 
          and they will pick the best stocks to beat the market."</em> This is called Active Investing. 
        </p>
        <p>
          However, hard data from the SPIVA (S&P Indices Versus Active) scorecard reveals a brutal truth: over a 10-year period, 
          nearly <strong>85% of large-cap active mutual funds in India fail to beat the Nifty 50 Index</strong>. 
          If the experts can't beat the market, why are you paying them? This has led to the massive rise of Index Funds.
        </p>
      </section>

      <section className="guide-section">
        <h2>What is an Index Fund?</h2>
        <p>
          An Index Fund does not employ a highly-paid fund manager to pick stocks. It relies on a computer algorithm that 
          simply copies a stock market index (like the Nifty 50 or Sensex) exactly. 
        </p>
        <p>
          If Reliance is 10% of the Nifty 50, the Nifty 50 Index Fund puts exactly 10% of your money into Reliance. 
          It is completely automated, passive, and mechanical.
        </p>
      </section>

      <section className="guide-section">
        <h2>Why Active Funds Fail to Beat the Index</h2>
        <p>It seems counterintuitive. Why can't a team of IIT/IIM analysts sitting in Mumbai beat a dumb computer algorithm? Here is why:</p>
        
        <h3>1. The Expense Ratio Drag</h3>
        <p>
          Active funds charge an expense ratio of 1% to 2% to pay for their analysts, research, and fancy offices. 
          Index funds charge roughly 0.1% to 0.2%. For an active fund to simply <em>match</em> the index's return in your pocket, 
          the fund manager has to beat the market by an extra 1.5% every year just to cover his own fees. This is statistically incredibly difficult over 20 years.
        </p>

        <h3>2. The Churn Rate (Trading Costs)</h3>
        <p>
          Active managers constantly buy and sell stocks trying to time the market. Every transaction incurs brokerage, STT, and impact costs, which silently eat into the fund's returns. Index funds buy and hold, resulting in near-zero trading costs.
        </p>

        <h3>3. Market Efficiency</h3>
        <p>
          In the 1990s, fund managers had access to insider information and better research, allowing them to easily beat the market. Today, large-cap stocks like HDFC Bank or TCS are tracked by hundreds of analysts globally. It is virtually impossible to find "hidden gems" in the top 100 companies.
        </p>
      </section>

      <section className="guide-section">
        <h2>Where Active Funds Still Work (For Now)</h2>
        <p>
          The passive index revolution is absolute in the Large-Cap space. You should <strong>never</strong> buy an active Large-Cap fund. However, active management still has some merit in two areas in India:
        </p>
        <ul>
          <li><strong>Mid-Cap and Small-Cap Funds:</strong> The Indian small-cap market is still somewhat inefficient. There are hundreds of under-researched companies. A good active manager can still find multi-baggers here and beat the Small-Cap index.</li>
          <li><strong>Flexi-Cap Funds:</strong> Managers who can swiftly move money between large, mid, and small caps based on market valuations can sometimes generate alpha (extra returns).</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>The Ideal Retail Portfolio</h2>
        <p>
          For 90% of retail investors who don't want to track the markets daily, the "Core and Satellite" strategy is mathematically optimal:
        </p>
        <div className="guide-alert info">
          <strong>The 70-30 Strategy:</strong> Put 70% of your equity SIPs into a low-cost Nifty 50 or Nifty LargeMidcap 250 Index Fund. Put the remaining 30% into an active Small-Cap or Flexi-Cap fund to chase alpha.
        </div>
      </section>

      <section className="guide-section faq-section">
        <h2>Frequently Asked Questions</h2>
        <details className="faq-item">
          <summary>What is Tracking Error in Index Funds?</summary>
          <div className="faq-answer">
            <p>Tracking error is the slight difference between the returns of the actual Nifty 50 index and the Index Fund you bought. It happens due to the fund's cash holdings and the 0.1% expense ratio. When choosing an index fund, always pick the one with the lowest tracking error (e.g., UTI Nifty 50 or Navi Nifty 50).</p>
          </div>
        </details>
      </section>
    </article>
  );
}
