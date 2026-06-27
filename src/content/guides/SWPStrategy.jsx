import React from 'react';
import { Link } from 'react-router-dom';
import { RefreshCcw, DollarSign, ArrowRight } from 'lucide-react';
import '../../pages/guides.css';

export function SWPStrategy() {
  return (
    <article className="guide-article-content">
      <section className="guide-section">
        <p className="guide-lead">
          You spent 20 years diligently running SIPs. You finally hit your retirement corpus target of ₹3 Crores. 
          Congratulations! But now comes the most terrifying phase of investing: Decumulation. 
          How do you extract money from this corpus every month to pay for groceries, electricity, and travel, 
          without the fear of running out of money before you run out of life?
        </p>
        <p>
          The answer is a <strong>Systematic Withdrawal Plan (SWP)</strong>. This guide will walk you through the mechanics 
          of SWPs, the dreaded sequence of returns risk, and how to structure a bulletproof monthly income stream.
        </p>
      </section>

      <section className="guide-section">
        <h2>What is a Systematic Withdrawal Plan (SWP)?</h2>
        <p>
          An SWP is the exact opposite of an SIP. While an SIP automates transferring money from your bank to a mutual fund 
          every month to buy units, an SWP automates selling a fixed number of units every month and transferring the cash 
          back to your bank account.
        </p>
        <p>
          You tell the mutual fund house: <em>"Please send me ₹1 Lakh on the 1st of every month."</em> 
          The AMC will automatically sell exactly enough units based on that day's NAV to generate ₹1 Lakh and deposit it to your account.
        </p>
      </section>

      <section className="guide-section">
        <h2>The Magic of SWP: Capital Appreciation + Income</h2>
        <p>
          Many retirees make the mistake of withdrawing their entire equity corpus and putting it into a Bank FD or a Post Office Monthly Income Scheme (POMIS) to earn interest. 
          The problem with FDs is that the principal amount stagnates and gets eaten alive by inflation.
        </p>
        <p>
          When you set up an SWP from a mutual fund (ideally a balanced advantage fund or a conservative hybrid fund), the money that you <em>haven't</em> withdrawn yet continues to stay invested and grows.
        </p>
        <div className="guide-alert info">
          <strong>The Golden Scenario:</strong> If your portfolio generates a 9% annual return, and your SWP withdrawal rate is only 5% annually, your core corpus will not only survive, it will actually <strong>grow</strong> every year while paying you a monthly salary!
        </div>
      </section>

      <section className="guide-section">
        <h2>The 4% Rule vs The Indian Reality</h2>
        <p>
          In the US, the Trinity Study popularized the "4% Rule"—stating that you can safely withdraw 4% of your portfolio in year one, 
          and adjust that amount for inflation every year, without running out of money for 30 years.
        </p>
        <p>
          <strong>Does it work in India?</strong>
          India has higher inflation (5-7%) but also much higher equity returns (10-12%) compared to the US. 
          Financial planners generally agree that an initial withdrawal rate of <strong>4% to 5%</strong> is safe in India, provided your corpus is invested in a 50:50 or 60:40 Equity-to-Debt allocation.
        </p>
        <ul>
          <li>Corpus: ₹2 Crores</li>
          <li>Safe Withdrawal Rate (5%): ₹10 Lakhs per year.</li>
          <li>Monthly SWP: ₹83,333 / month.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>The Danger: Sequence of Returns Risk (SORR)</h2>
        <p>
          SWP is not flawless. The biggest threat to an SWP is a stock market crash occurring in the <em>first few years</em> of your retirement.
        </p>
        <p>
          If you need ₹1 Lakh per month, and the market crashes by 30%, the NAV of your fund drops heavily. To generate that same ₹1 Lakh, the AMC now has to sell <strong>30% more units</strong> of your fund. You are essentially selling your assets at dirt-cheap prices. When the market eventually recovers, you have far fewer units left to capture the upside, severely depleting your corpus.
        </p>
        
        <h3>The Bucket Strategy (The Solution to SORR)</h3>
        <p>
          To protect against market crashes, retirees should never run an SWP directly from a pure equity fund. Instead, use the Bucket Strategy:
        </p>
        <ol>
          <li><strong>Bucket 1 (Cash/Liquid - 3 Years of Expenses):</strong> Keep 3 years of living expenses in FDs or Liquid Funds. Run your SWP from this safe bucket.</li>
          <li><strong>Bucket 2 (Debt - 4 Years of Expenses):</strong> Keep the next 4 years in Corporate Bond or Short Duration Funds.</li>
          <li><strong>Bucket 3 (Equity - Growth):</strong> The rest of your money stays in Equity (Index Funds). </li>
        </ol>
        <p>
          When the market is up, sell some equity to refill Bucket 1. When the market crashes, do not touch the equity. You have 3 years of safe cash in Bucket 1 to ride out the bear market.
        </p>
      </section>

      <section className="guide-section">
        <h2>Tax Efficiency of SWP</h2>
        <p>
          SWPs are incredibly tax-efficient compared to FD interest. When you withdraw ₹1 Lakh via SWP, the entire ₹1 Lakh is not taxed. 
          Only the <strong>capital gains</strong> portion of that withdrawal is taxed. 
        </p>
        <p>
          Furthermore, long-term capital gains (LTCG) on equity mutual funds have an exemption limit of ₹1.25 Lakhs per year (as of recent budgets). 
          This means a significant portion of your SWP monthly income could literally be entirely tax-free!
        </p>
        
        <div className="guide-cta-card">
          <div className="guide-cta-content">
            <RefreshCcw className="guide-cta-icon" />
            <div>
              <h3>Simulate Your SWP Income</h3>
              <p>Calculate how long your money will last at different withdrawal rates.</p>
            </div>
          </div>
          <Link to="/swp" className="guide-cta-button">
            Go to SWP Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="guide-section faq-section">
        <h2>Frequently Asked Questions</h2>
        <details className="faq-item">
          <summary>Can I step-up my SWP amount every year?</summary>
          <div className="faq-answer">
            <p>Yes. Just like a Step-Up SIP, you should step-up your SWP amount by 5-6% every year to combat inflation and maintain your purchasing power. Make sure your initial withdrawal rate is low enough to handle this.</p>
          </div>
        </details>

        <details className="faq-item">
          <summary>Which mutual fund is best for SWP?</summary>
          <div className="faq-answer">
            <p>For a direct SWP without manual bucketing, Balanced Advantage Funds (BAF) or Conservative Hybrid Funds are best because they inherently manage the debt-equity ratio and reduce volatility.</p>
          </div>
        </details>
      </section>
    </article>
  );
}
