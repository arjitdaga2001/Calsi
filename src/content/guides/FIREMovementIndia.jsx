import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Flame, TrendingUp, ArrowRight } from 'lucide-react';
import './guides.css';

export function FIREMovementIndia() {
  return (
    <article className="guide-article-content">
      <section className="guide-section">
        <p className="guide-lead">
          The concept of working 9-to-5 until the age of 60 is rapidly losing its appeal. A massive global movement 
          known as <strong>FIRE (Financial Independence, Retire Early)</strong> has taken root in India. 
          Millennials and Gen Z are aggressively restructuring their finances to accumulate a massive corpus, 
          quit the corporate rat race, and reclaim their time by their 40s—or even late 30s.
        </p>
        <p>
          But achieving FIRE in India is vastly different from achieving it in the US or Europe. High inflation, 
          lack of social security, and exorbitant healthcare costs make early retirement here an extreme mathematical challenge. 
          Here is how to calculate exactly what it takes to FIRE in India.
        </p>
      </section>

      <section className="guide-section">
        <h2>The Core Philosophy of FIRE</h2>
        <p>
          The FIRE movement is built on two primary pillars:
        </p>
        <ol>
          <li><strong>Extreme Savings Rate:</strong> While conventional advice suggests saving 20% of your income, FIRE practitioners save <strong>50% to 75%</strong> of their post-tax income. This is achieved through aggressive frugality and rapid career income scaling.</li>
          <li><strong>Aggressive Investing:</strong> Saving alone won't get you there. The saved capital is heavily deployed into high-growth assets (mostly Equity Index Funds) to let compounding do the heavy lifting.</li>
        </ol>
      </section>

      <section className="guide-section">
        <h2>The 25x Rule vs The Indian Reality</h2>
        <p>
          In the West, the standard FIRE formula is the <strong>25x Rule</strong>. It states that you need 25 times your annual expenses to retire. 
          (If you spend ₹12 Lakhs a year, you need a corpus of ₹3 Crores). This is based on the famous Trinity Study's 4% Safe Withdrawal Rate.
        </p>
        
        <div className="guide-alert warning">
          <strong>Warning for Indians:</strong> The 25x rule is highly risky in India. India's historical inflation is around 6-7% (compared to 2-3% in the US). If you retire at 40, your money needs to last 40 to 50 years.
        </div>

        <p>
          Most financial planners in India recommend a <strong>33x to 40x</strong> corpus for extreme early retirees. 
          This implies a Safe Withdrawal Rate (SWR) of roughly 2.5% to 3%. 
        </p>
        <ul>
          <li><strong>Annual Expenses:</strong> ₹12,00,000 (₹1 Lakh/month)</li>
          <li><strong>Target FIRE Corpus (35x):</strong> ₹4.2 Crores</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>The 3 Types of FIRE</h2>
        <p>The FIRE community has evolved to recognize that early retirement isn't a one-size-fits-all model.</p>
        <ul>
          <li><strong>Lean FIRE:</strong> Retiring on a very minimalist budget. You accumulate a smaller corpus (e.g., ₹1.5 Crores) and live highly frugally, often moving to a Tier-3 city or rural area.</li>
          <li><strong>Fat FIRE:</strong> Retiring with luxury. You accumulate a massive corpus (e.g., ₹10+ Crores) so you can travel internationally, live in a Tier-1 city, and not worry about expenses.</li>
          <li><strong>Barista / Coast FIRE:</strong> You accumulate enough corpus so that compounding takes care of your traditional retirement age (60), allowing you to quit your stressful corporate job at 40 and work a low-stress, low-paying job (like a barista, freelancer, or consultant) just to cover current daily expenses.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>The Execution: How to Actually Get There</h2>
        
        <h3>1. The Savings Rate Math</h3>
        <p>Your timeline to retirement is almost entirely dictated by your savings rate, assuming standard market returns (10-12% post-tax):</p>
        <ul>
          <li><strong>Save 20% of income:</strong> Takes ~37 years to retire.</li>
          <li><strong>Save 50% of income:</strong> Takes ~17 years to retire.</li>
          <li><strong>Save 70% of income:</strong> Takes ~8.5 years to retire.</li>
        </ul>

        <h3>2. Post-Retirement Healthcare (The Silent Killer)</h3>
        <p>
          Healthcare inflation in India is 14%. A bypass surgery that costs ₹5 Lakhs today will cost ₹35 Lakhs in 15 years. 
          To FIRE in India, you must secure a massive, dedicated Health Insurance Base Plan (₹10 Lakhs) + a Super Top-up (₹50 Lakhs to ₹1 Crore). 
          Never rely solely on corporate insurance, because you lose it the day you FIRE.
        </p>

        <h3>3. The Bucket Strategy for Withdrawals</h3>
        <p>
          If you retire at 40 and the stock market crashes at 41, you are in deep trouble. FIRE practitioners use the Bucket Strategy to protect their corpus:
        </p>
        <ul>
          <li><strong>Bucket 1 (Cash/FDs):</strong> 3 to 4 years of living expenses. Safe from all market crashes.</li>
          <li><strong>Bucket 2 (Debt Funds):</strong> 5 to 7 years of living expenses. Beats inflation slightly, low volatility.</li>
          <li><strong>Bucket 3 (Equity Funds):</strong> The rest of the corpus. This bucket stays untouched during market crashes and generates the long-term inflation-beating growth.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>Is FIRE Right for You?</h2>
        <p>
          Retiring early sounds amazing, but many early retirees suffer from a loss of identity and depression. 
          FIRE is not about escaping work; it's about <strong>escaping forced labor</strong>. The most successful FIRE practitioners 
          retire <em>to</em> something—a passion project, an NGO, an indie business—rather than retiring <em>from</em> something.
        </p>

        <div className="guide-cta-card">
          <div className="guide-cta-content">
            <Target className="guide-cta-icon" />
            <div>
              <h3>Calculate Your Retirement Corpus</h3>
              <p>Find out exactly how much you need to reach Financial Independence.</p>
            </div>
          </div>
          <Link to="/retirement" className="guide-cta-button">
            Go to Retirement Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="guide-section faq-section">
        <h2>Frequently Asked Questions</h2>
        <details className="faq-item">
          <summary>Does the FIRE corpus include my primary house?</summary>
          <div className="faq-answer">
            <p>No. Your FIRE corpus multiplier (e.g., 35x) applies strictly to liquid, income-generating assets (Mutual Funds, Stocks, FDs, Commercial Real Estate). Your primary residence does not generate cash flow to pay for groceries, so it cannot be counted in the FIRE number.</p>
          </div>
        </details>
        <details className="faq-item">
          <summary>What if I run out of money at age 70?</summary>
          <div className="faq-answer">
            <p>This is the biggest fear. By strictly adhering to a 2.5% to 3% Safe Withdrawal Rate, adjusting for inflation, and maintaining a diversified Equity/Debt portfolio, mathematical simulations show a 95%+ probability that your corpus will outlast you.</p>
          </div>
        </details>
      </section>
    </article>
  );
}
