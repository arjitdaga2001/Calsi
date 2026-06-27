import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Calculator, Target, ArrowRight } from 'lucide-react';
import '../../pages/guides.css';

export function ChildEducationSIP() {
  return (
    <article className="guide-article-content">
      <section className="guide-section">
        <p className="guide-lead">
          For most Indian parents, funding their child's higher education is a non-negotiable life goal. 
          However, the cost of education is inflating at a terrifying speed. While general inflation in India hovers around 6%, 
          <strong> Education Inflation is consistently tracking at 10% to 12% annually</strong>.
        </p>
        <p>
          An engineering degree that costs ₹10 Lakhs today will cost a staggering ₹40 Lakhs in 15 years. 
          If you don't start aggressively investing for this today, your child will graduate burdened with crushing 
          education loans, or you will have to liquidate your retirement corpus to fund their degree. 
          Here is how to calculate and build the perfect Education SIP.
        </p>
      </section>

      <section className="guide-section">
        <h2>Step 1: Calculate the Future Cost of Education</h2>
        <p>
          Do not make the fatal mistake of planning based on today's cost. You must calculate the future value (FV) 
          of the degree when your child actually turns 18.
        </p>
        <p><strong>Example Scenario:</strong></p>
        <ul>
          <li><strong>Current Age of Child:</strong> 3 years old</li>
          <li><strong>Years to College (Time Horizon):</strong> 15 years</li>
          <li><strong>Current Cost of an MBA:</strong> ₹20 Lakhs</li>
          <li><strong>Education Inflation Rate:</strong> 10%</li>
        </ul>
        <div className="guide-alert info">
          <strong>The Future Cost:</strong> Applying the compound interest formula to inflation, that ₹20 Lakh MBA will cost approximately <strong>₹83.5 Lakhs</strong> in 15 years. This is your target corpus.
        </div>
      </section>

      <section className="guide-section">
        <h2>Step 2: Reverse Engineer the SIP Amount</h2>
        <p>
          Once you have your target (₹83.5 Lakhs) and your time horizon (15 years), you need to find out how much you must invest every month.
        </p>
        <p>
          Assuming you invest in a diversified Equity Mutual Fund (Index or Flexi-cap) that yields 12% CAGR:
          To reach ₹83.5 Lakhs in 15 years, you need a monthly SIP of roughly <strong>₹17,000</strong>.
        </p>
        <p>
          If ₹17,000 seems too steep right now, you can use a <strong>Step-Up SIP Strategy</strong>. Start with ₹10,000 per month today, and increase it by 10% every year as your salary grows. You will still comfortably hit the ₹83.5 Lakh target.
        </p>
      </section>

      <section className="guide-section">
        <h2>Step 3: The Glide Path Strategy (Crucial)</h2>
        <p>
          This is where 90% of parents fail. They run an equity SIP for 15 years and plan to withdraw the money when the child turns 18. 
          <strong>What if the stock market crashes by 40% when your child is 17?</strong> Your ₹83 Lakh corpus could instantly drop to ₹50 Lakhs, derailing their entire education.
        </p>
        <p>
          To prevent this, you must use a "Glide Path." You systematically de-risk the portfolio as the goal approaches:
        </p>
        <ul>
          <li><strong>Years 1 to 12:</strong> 100% Equity (Index Funds/Flexi-Cap). Maximize growth.</li>
          <li><strong>Year 13:</strong> Move 30% of the corpus to safe Debt Funds or FDs.</li>
          <li><strong>Year 14:</strong> Move another 30% to Debt Funds.</li>
          <li><strong>Year 15 (The year before college):</strong> The entire corpus must be sitting safely in a Liquid Fund or Bank FD. Zero stock market risk.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>Are "Child Insurance Plans" Worth It?</h2>
        <p>
          Banks and insurance agents will aggressively pitch you "Child Endowment Plans" or "ULIPs". 
          <strong>Avoid them at all costs.</strong> 
        </p>
        <p>
          These plans are notorious for combining insurance with investment, resulting in high commissions for the agent, heavy mortality charges, and abysmal returns for you (typically 5-6%). These plans do not beat education inflation.
        </p>
        <p>
          <strong>The Better Approach:</strong> Buy a pure Term Life Insurance policy on the earning parent's life (to protect the family in case of death) and invest the remaining money purely in Mutual Funds via SIP.
        </p>

        <div className="guide-cta-card">
          <div className="guide-cta-content">
            <Calculator className="guide-cta-icon" />
            <div>
              <h3>Model Your Child's Future</h3>
              <p>Use our SIP Calculator to reverse engineer the exact monthly investment needed for your child's degree.</p>
            </div>
          </div>
          <Link to="/sip" className="guide-cta-button">
            Go to SIP Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </article>
  );
}
