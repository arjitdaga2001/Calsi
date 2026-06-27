import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Calculator, Scissors, ArrowRight } from 'lucide-react';
import '../../pages/guides.css';

export function DirectVsRegularMF() {
  return (
    <article className="guide-article-content">
      <section className="guide-section">
        <p className="guide-lead">
          If you are investing your hard-earned money in Mutual Funds through a bank relationship manager, a local broker, 
          or an agent, you are likely losing up to <strong>20% of your final wealth</strong> to a silent killer: 
          Distributor Commissions.
        </p>
        <p>
          This is the fundamental difference between a <strong>Regular Plan</strong> and a <strong>Direct Plan</strong> 
          in Mutual Funds. Making the switch to Direct is the single easiest way to add lakhs (or even crores) of rupees 
          to your retirement corpus over a 20-year period without taking any additional risk. Let's look at the math.
        </p>
      </section>

      <section className="guide-section">
        <h2>What is an Expense Ratio?</h2>
        <p>
          Mutual funds don't manage your money for free. The Asset Management Company (AMC) charges a fee for fund management, 
          marketing, and administrative costs. This fee is called the <strong>Expense Ratio</strong>, and it is deducted 
          automatically from your fund's NAV every single day.
        </p>
        <p>
          A fund with a 1% expense ratio that generates a 12% gross return will only give you an 11% net return.
        </p>
      </section>

      <section className="guide-section">
        <h2>Regular Funds vs Direct Funds</h2>
        
        <h3>The Regular Plan (The Hidden Trap)</h3>
        <p>
          When you buy a "Regular" plan, you are buying it through an intermediary (a bank, an agent, or a platform like 
          ICICI Direct or HDFC Sec). The AMC pays a commission (often 1% to 1.5% annually) to this agent for bringing in your business. 
          <strong>Who pays this commission? You do.</strong> The fund charges a higher Expense Ratio to cover the broker's cut.
        </p>

        <h3>The Direct Plan (The Wealth Builder)</h3>
        <p>
          When you buy a "Direct" plan, you are bypassing the broker and buying directly from the AMC (using apps like Zerodha Coin, 
          Groww, or Kuvera). Because there is no agent to pay, the AMC passes the savings back to you in the form of a much lower Expense Ratio.
        </p>
      </section>

      <section className="guide-section">
        <h2>The Mathematics of the 1% Difference</h2>
        <p>
          A difference of 1% to 1.5% might sound tiny. "What's 1% among friends?" you might think. But over 20 years, 
          thanks to the destructive power of reverse compounding, that 1% destroys your wealth.
        </p>
        <p><strong>Case Study:</strong> You invest ₹20,000 per month via SIP for 25 years.</p>
        <ul>
          <li><strong>Fund Returns (Gross):</strong> 13% CAGR</li>
        </ul>
        
        <div className="table-responsive">
          <table className="guide-table">
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Expense Ratio</th>
                <th>Net Return</th>
                <th>Final Corpus (25 Years)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Regular Plan</strong></td>
                <td>2.00%</td>
                <td>11.0%</td>
                <td><strong>₹ 2.65 Crores</strong></td>
              </tr>
              <tr>
                <td><strong>Direct Plan</strong></td>
                <td>0.50%</td>
                <td>12.5%</td>
                <td><strong>₹ 3.39 Crores</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="guide-alert warning">
          By simply choosing the Regular plan instead of the Direct plan, you paid your broker <strong>₹74 Lakhs</strong> in lost compounding over 25 years. This is money that rightfully belongs to your family.
        </div>
      </section>

      <section className="guide-section">
        <h2>How to Check if You Are in a Regular Fund</h2>
        <p>
          Look at your mutual fund statement (CAS - Consolidated Account Statement) or open your brokerage app. 
          Check the exact name of the mutual fund. 
        </p>
        <ul>
          <li>If it says: <em>"HDFC Flexi Cap Fund - <strong>Regular</strong> Plan - Growth"</em> → You are paying commissions.</li>
          <li>If it says: <em>"HDFC Flexi Cap Fund - <strong>Direct</strong> Plan - Growth"</em> → You are safe.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>How to Switch to Direct Funds</h2>
        <p>
          Switching is incredibly easy and can be done online. However, it is treated as a <strong>Redemption (Sell) and a Purchase (Buy)</strong> for tax purposes.
        </p>
        <ol>
          <li>Open an account with a Direct Mutual Fund platform (like Zerodha Coin, Groww, INDmoney, or Kuvera).</li>
          <li>Stop your active SIPs in the Regular plans immediately so no new money flows in.</li>
          <li>Start fresh SIPs in the <strong>Direct</strong> versions of the exact same funds on your new platform.</li>
          <li><strong>Careful:</strong> Don't sell your old Regular units all at once if they incur massive Short Term Capital Gains (STCG) tax or exit loads. Sell them strategically after they cross the 1-year mark to utilize the ₹1.25 Lakh tax-free LTCG limit every year, and reinvest that money into the Direct funds.</li>
        </ol>
      </section>

      <section className="guide-section">
        <h2>When Does a Regular Plan Make Sense?</h2>
        <p>
          A Regular plan <em>only</em> makes sense if you have absolutely zero knowledge of finance, no time to learn, 
          and your financial advisor is a true expert providing comprehensive financial planning (insurance, tax, estate planning) 
          and actively managing your behavior to prevent you from panic selling during a market crash. 
        </p>
        <p>
          However, most banks and agents just sell you the fund with the highest commission and never call you again. 
          If you are reading this guide, you already know enough to switch to Direct.
        </p>

        <div className="guide-cta-card">
          <div className="guide-cta-content">
            <Calculator className="guide-cta-icon" />
            <div>
              <h3>Check the Compounding Math</h3>
              <p>Use our SIP Calculator to see exactly how much an extra 1.5% return adds to your corpus over 20 years.</p>
            </div>
          </div>
          <Link to="/sip" className="guide-cta-button">
            Go to SIP Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="guide-section faq-section">
        <h2>Frequently Asked Questions</h2>
        <details className="faq-item">
          <summary>Is the portfolio of a Direct and Regular plan different?</summary>
          <div className="faq-answer">
            <p>No. Both plans invest in the exact same stocks, have the same fund manager, and the same portfolio. The only difference is the Expense Ratio deduction, which causes their NAVs to grow at different speeds.</p>
          </div>
        </details>
        <details className="faq-item">
          <summary>Do banks offer Direct Plans?</summary>
          <div className="faq-answer">
            <p>Most traditional banks (SBI, HDFC, ICICI) heavily push Regular plans through their net banking portals because they earn massive trailing commissions. You must use a dedicated discount broker or direct AMC websites to buy Direct plans.</p>
          </div>
        </details>
      </section>
    </article>
  );
}
