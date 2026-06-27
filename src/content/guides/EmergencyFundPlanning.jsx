import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, PiggyBank, RefreshCcw, ArrowRight } from 'lucide-react';
import '../../pages/guides.css';

export function EmergencyFundPlanning() {
  return (
    <article className="guide-article-content">
      <section className="guide-section">
        <p className="guide-lead">
          The Covid-19 pandemic and the recent waves of tech layoffs taught the Indian middle class a brutal lesson: 
          Your salary is never guaranteed. The only thing standing between you and financial ruin during a job loss 
          or medical crisis is a properly structured <strong>Emergency Fund</strong>.
        </p>
        <p>
          However, keeping ₹5 Lakhs in a regular savings account earning 2.5% interest is financial negligence. 
          Inflation will slowly bleed that money dry. Here is how to construct a high-yield, perfectly liquid emergency fund.
        </p>
      </section>

      <section className="guide-section">
        <h2>How Big Should Your Emergency Fund Be?</h2>
        <p>
          A common mistake is calculating the emergency fund based on your <em>income</em>. It should always be calculated based on your <strong>mandatory expenses</strong>.
        </p>
        <ul>
          <li><strong>Single & Renting:</strong> 3 to 6 months of living expenses.</li>
          <li><strong>Married with Kids (Single Income):</strong> 6 to 9 months of living expenses.</li>
          <li><strong>Freelancer/Business Owner (Volatile Income):</strong> 12 months of living expenses.</li>
        </ul>
        <div className="guide-alert info">
          <strong>Mandatory Expenses Include:</strong> Rent, Home Loan EMI, Groceries, Utility Bills, School Fees, and Insurance Premiums. 
          <em>Exclude:</em> Dining out, vacations, and SIPs (you will pause SIPs during an emergency).
        </div>
      </section>

      <section className="guide-section">
        <h2>The 3-Tier Emergency Fund Architecture</h2>
        <p>
          Do not dump your entire emergency corpus into one place. You need to balance <strong>instant liquidity</strong> with <strong>inflation protection</strong>. 
          Use the 3-Tier system:
        </p>
        
        <h3>Tier 1: Instant Cash (1 Month of Expenses)</h3>
        <ul>
          <li><strong>Where to keep it:</strong> A high-interest savings account (like IDFC First or Kotak Mahindra offering 4-6%) or simply your primary salary account.</li>
          <li><strong>Why:</strong> You need this money at 2:00 AM on a Sunday if there is a medical emergency. It must be accessible via UPI or ATM instantly.</li>
        </ul>

        <h3>Tier 2: The Medium-Term Buffer (2 Months of Expenses)</h3>
        <ul>
          <li><strong>Where to keep it:</strong> Sweep-in Fixed Deposits (Auto-sweep) or Arbitrage Mutual Funds.</li>
          <li><strong>Why:</strong> An auto-sweep FD acts like a savings account but pays FD interest rates (7%). If you swipe your debit card for more than your savings balance, it automatically breaks the exact FD amount without penalties. Arbitrage funds offer tax-efficient returns and can be redeemed in T+1 days.</li>
        </ul>

        <h3>Tier 3: The Deep Reserve (3 to 6 Months of Expenses)</h3>
        <ul>
          <li><strong>Where to keep it:</strong> Liquid Mutual Funds or Money Market Funds.</li>
          <li><strong>Why:</strong> Liquid funds invest in highly secure, short-term government and corporate bonds. They historically generate 6.5% to 7% returns, closely tracking the RBI Repo Rate. They have zero exit load after 7 days and take 24 hours to hit your bank account upon redemption. They protect your deep reserves from inflation much better than a savings account.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>What NOT to do with your Emergency Fund</h2>
        <p>When panic hits and you need cash, the last thing you want is market volatility or lock-ins.</p>
        <ol>
          <li><strong>Never invest it in Equity:</strong> Do not put emergency funds in Nifty 50 or Small Cap funds. Job losses usually correlate with economic recessions. If you lose your job during a crash, your ₹5 Lakh emergency fund might only be worth ₹3 Lakhs when you are forced to sell.</li>
          <li><strong>Never lock it in PPF or ELSS:</strong> These have strict lock-ins (15 years and 3 years). An emergency fund that you cannot withdraw is entirely useless.</li>
          <li><strong>Avoid long-term Debt Funds:</strong> Long duration bond funds can see negative returns if interest rates suddenly spike. Stick to Liquid or Overnight funds.</li>
        </ol>
      </section>

      <section className="guide-section">
        <h2>Refilling the Tank</h2>
        <p>
          If you use a portion of your emergency fund to fix a broken car or pay a hospital bill, 
          your immediate priority for the next few months is to pause your equity investments and redirect all cash flow to 
          refill the emergency fund back to its optimal level.
        </p>

        <div className="guide-cta-card">
          <div className="guide-cta-content">
            <PiggyBank className="guide-cta-icon" />
            <div>
              <h3>Secure Your Finances</h3>
              <p>Calculate the interest you can earn by moving your idle cash into a Liquid Fund or FD.</p>
            </div>
          </div>
          <Link to="/fd" className="guide-cta-button">
            Go to FD Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </article>
  );
}
