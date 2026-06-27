import React from 'react';
import { Link } from 'react-router-dom';
import { Home, IndianRupee, TrendingDown, ArrowRight } from 'lucide-react';
import '../../pages/guides.css';

export function BuyVsRentIndia() {
  return (
    <article className="guide-article-content">
      <section className="guide-section">
        <p className="guide-lead">
          The Great Indian Dream has always been intimately tied to owning a home. For generations, buying a house 
          was considered the ultimate sign of financial stability. But in 2026, with property prices in Tier-1 cities 
          skyrocketing and home loan interest rates hovering around 8.5%, a fierce debate has emerged among millennials: 
          Is it mathematically smarter to buy a house, or should you just rent and invest the difference?
        </p>
        <p>
          Let's strip away the emotional attachment to brick-and-mortar and look at the pure, cold mathematics 
          of buying versus renting a house in India today.
        </p>
      </section>

      <section className="guide-section">
        <h2>The Core Metrics: Rental Yields vs Loan Interest</h2>
        <p>
          The fundamental reason why renting makes so much financial sense in India boils down to a massive disparity 
          between two numbers: <strong>Rental Yield</strong> and <strong>Home Loan Interest Rates</strong>.
        </p>
        <ul>
          <li><strong>Rental Yield (India):</strong> 2% to 3.5% annually. (If a property costs ₹1 Crore, the annual rent is typically ₹2 Lakhs to ₹3.5 Lakhs).</li>
          <li><strong>Home Loan Interest Rate:</strong> 8.5% to 9% annually.</li>
        </ul>
        <p>
          In a developed economy like the US, rental yields might be 5-6% while mortgage rates were historically 3-4%. 
          In that scenario, buying is a no-brainer. But in India, the cost of borrowing capital is nearly triple the cost of renting the asset.
        </p>
      </section>

      <section className="guide-section">
        <h2>Case Study: The ₹1 Crore Apartment</h2>
        <p>Let's compare two friends, <strong>Aarav (The Buyer)</strong> and <strong>Rohan (The Renter)</strong>. Both have their eyes on a ₹1 Crore apartment in Bengaluru.</p>
        
        <h3>Aarav The Buyer</h3>
        <p>Aarav decides to buy the apartment. He puts down a ₹20 Lakh down payment and takes an ₹80 Lakh home loan at 8.5% for 20 years.</p>
        <ul>
          <li><strong>Down Payment:</strong> ₹20,00,000</li>
          <li><strong>EMI:</strong> ₹69,426 per month</li>
          <li><strong>Total Interest Paid (20 Yrs):</strong> ₹86.6 Lakhs</li>
          <li><strong>Total Cost of House:</strong> ₹1.86 Crores (ignoring maintenance, property tax, and registration).</li>
        </ul>
        <p>Assuming the property appreciates at a modest 5% annually, after 20 years, the house is worth roughly ₹2.65 Crores.</p>

        <h3>Rohan The Renter</h3>
        <p>Rohan decides to rent the exact same apartment. The rental yield is 3%, meaning his rent is ₹25,000 per month. But Rohan is disciplined. He takes the money he saved by not buying and invests it.</p>
        <ul>
          <li><strong>Invests Down Payment:</strong> He invests the ₹20 Lakhs lump sum in an Index Fund (12% expected return).</li>
          <li><strong>Invests the EMI Difference:</strong> His rent is ₹25,000. Aarav's EMI is ~₹69,400. Rohan starts a SIP of the difference (₹44,400) every month. <em>(Note: We'll assume rent increases by 5% yearly, so his SIP decreases over time)</em>.</li>
        </ul>
        <div className="guide-alert info">
          <strong>The Result After 20 Years:</strong> Thanks to the massive compounding effect of Indian equities at 12%, Rohan's mutual fund portfolio will grow to an astonishing <strong>₹6 to ₹7 Crores!</strong> He can now buy Aarav's house twice over in cash, and still have millions left over.
        </div>
      </section>

      <section className="guide-section">
        <h2>When Does Buying Make Sense?</h2>
        <p>
          If the math favors renting so heavily, why do people still buy houses? Because personal finance is 
          personal, not just mathematical. Buying a house makes sense if:
        </p>
        <ol>
          <li><strong>You Lacks Discipline:</strong> If Rohan didn't invest that ₹44,400 difference every month and just spent it on lifestyle upgrades, he would end up with zero wealth and no house. An EMI is "forced savings."</li>
          <li><strong>Emotional Security:</strong> You cannot put a price tag on the mental peace of knowing a landlord won't evict you next month.</li>
          <li><strong>Customization:</strong> You want to design your home exactly to your tastes, tear down walls, and build your dream interior.</li>
          <li><strong>Tax Benefits:</strong> Under Section 24(b) and 80C, you get tax deductions on home loan interest and principal. However, with the new tax regime removing many of these exemptions, this benefit is diminishing.</li>
        </ol>
      </section>

      <section className="guide-section">
        <h2>The Verdict</h2>
        <p>
          From a strictly financial perspective, <strong>renting + investing the difference in equity mutual funds</strong> 
          will almost always generate substantially more wealth in India than buying a house on a loan. 
        </p>
        <p>
          However, a house is an emotional asset, not an investment asset. The smartest strategy for many millennials 
          is to rent during their 20s and 30s to maintain career mobility and build a massive equity portfolio, and then 
          buy a house in their 40s with a much larger down payment to minimize the devastating interest costs of a home loan.
        </p>
        
        <div className="guide-cta-card">
          <div className="guide-cta-content">
            <Home className="guide-cta-icon" />
            <div>
              <h3>Calculate Your Own Home Loan</h3>
              <p>See exactly how much interest the bank will charge you over 20 years.</p>
            </div>
          </div>
          <Link to="/home-loan" className="guide-cta-button">
            Go to Home Loan Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="guide-section faq-section">
        <h2>Frequently Asked Questions</h2>
        <details className="faq-item">
          <summary>Does rent money go down the drain?</summary>
          <div className="faq-answer">
            <p>No. Rent is paying for a service: shelter. In the early years of a home loan, almost 80% of your EMI goes toward paying interest to the bank, not building equity. Bank interest is also "money down the drain". Renting is simply choosing to pay a landlord rather than a bank, and in India, the landlord is currently much cheaper.</p>
          </div>
        </details>

        <details className="faq-item">
          <summary>What if property prices double in 5 years?</summary>
          <div className="faq-answer">
            <p>While isolated pockets of real estate see massive spikes, the historical average return on residential real estate in India across major cities is around 4-6% over a 15-20 year period, barely beating inflation. Liquid equity markets historically provide 10-12%.</p>
          </div>
        </details>
      </section>
    </article>
  );
}
