import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, HeartPulse, Activity, ArrowRight } from 'lucide-react';
import './guides.css';

export function HealthInsuranceTopUp() {
  return (
    <article className="guide-article-content">
      <section className="guide-section">
        <p className="guide-lead">
          Medical inflation in India is currently running at a staggering 14% annually—double the rate of general inflation. 
          A specialized surgery that costs ₹5 Lakhs today will easily cost over ₹35 Lakhs in 15 years. 
          Yet, most Indians rely solely on their employer's ₹3 Lakh to ₹5 Lakh corporate health insurance cover.
        </p>
        <p>
          So, how do you protect your family with a massive ₹50 Lakh to ₹1 Crore cover without paying exorbitant 
          premiums of ₹40,000+ per year? The secret weapon of smart financial planning is the <strong>Super Top-up Health Insurance Plan</strong>.
        </p>
      </section>

      <section className="guide-section">
        <h2>What is a Super Top-up Plan?</h2>
        <p>
          A Super Top-up policy is exactly what it sounds like: it provides additional coverage <em>on top of</em> a 
          base amount. It functions using a mechanism called a <strong>Deductible</strong>.
        </p>
        <p>
          A Deductible is a pre-determined amount that the Super Top-up policy will <strong>not</strong> cover. 
          Only once your medical bills cross this deductible amount will the Super Top-up policy activate and pay the rest.
        </p>
        <div className="guide-alert info">
          <strong>Example:</strong> You buy a ₹50 Lakh Super Top-up policy with a ₹5 Lakh deductible. 
          If you have a hospital bill of ₹12 Lakhs, you (or your base insurance) must pay the first ₹5 Lakhs. 
          The Super Top-up policy will cover the remaining ₹7 Lakhs.
        </div>
      </section>

      <section className="guide-section">
        <h2>Why is it So Cheap?</h2>
        <p>
          Insurance is all about probability. The probability of someone being hospitalized for a minor illness 
          (dengue, typhoid, minor surgery) costing between ₹1 Lakh to ₹4 Lakhs is extremely high. Therefore, base 
          health insurance policies that cover this first slice of risk are very expensive.
        </p>
        <p>
          However, the probability of someone needing a ₹25 Lakh treatment (major organ transplant, severe accident, 
          advanced cancer) is mathematically much lower. Because the insurance company knows they only have to pay 
          if the bill crosses your ₹5 Lakh deductible, their risk is lower. They pass this benefit to you in the 
          form of incredibly cheap premiums.
        </p>
        <ul>
          <li><strong>₹5 Lakh Base Policy (Age 30):</strong> Premium is approx ₹8,000 - ₹10,000 / year.</li>
          <li><strong>₹50 Lakh Super Top-up (₹5L Deductible):</strong> Premium is approx ₹2,500 - ₹3,500 / year.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>Top-up vs Super Top-up: The Crucial Difference</h2>
        <p>
          Never buy a regular "Top-up" plan; always buy a "Super Top-up" plan. The difference is critical and could bankrupt you if misunderstood.
        </p>
        
        <div className="table-responsive">
          <table className="guide-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Regular Top-Up</th>
                <th>Super Top-Up (Highly Recommended)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Deductible Application</strong></td>
                <td>Applies per individual claim/hospitalization.</td>
                <td>Applies to the <strong>aggregate</strong> claims in a policy year.</td>
              </tr>
              <tr>
                <td><strong>Scenario: Two bills of ₹4 Lakhs each in one year. Deductible = ₹5L.</strong></td>
                <td>Pays <strong>Zero</strong>. Neither bill individually crossed the ₹5L deductible.</td>
                <td>Pays <strong>₹3 Lakhs</strong>. Total bill (₹8L) crossed the ₹5L deductible. (8L - 5L = 3L).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h2>How to Structure Your Healthcare Portfolio</h2>
        <p>The smartest and most cost-effective way to secure ₹1 Crore of health cover is the two-tiered approach:</p>
        <ol>
          <li><strong>Tier 1 (The Deductible Funder):</strong> Rely on your Corporate Health Insurance (usually ₹5 Lakhs). If you don't have corporate cover, buy a standalone comprehensive retail base policy of ₹5 Lakhs.</li>
          <li><strong>Tier 2 (The Catastrophe Shield):</strong> Buy a ₹95 Lakh Super Top-up policy with a ₹5 Lakh deductible from the open market.</li>
        </ol>
        <p>
          If a major ₹20 Lakh medical emergency strikes, your corporate policy pays the first ₹5 Lakhs, fulfilling the deductible. Your Super Top-up then seamlessly pays the remaining ₹15 Lakhs. You pay ₹0 from your pocket, while maintaining a massive safety net.
        </p>
      </section>
      
      <section className="guide-section">
        <h2>Does a Super Top-up Save Tax?</h2>
        <p>
          Yes! The premium paid for a Super Top-up policy is fully eligible for tax deduction under Section 80D, 
          alongside your base policy premiums, up to the maximum limit of ₹25,000 for self/family and ₹50,000 for senior citizen parents.
        </p>
        <div className="guide-cta-card">
          <div className="guide-cta-content">
            <HeartPulse className="guide-cta-icon" />
            <div>
              <h3>Estimate Your Health Cover Needs</h3>
              <p>Calculate inflation-adjusted medical costs for the next 20 years.</p>
            </div>
          </div>
          <Link to="/health-insurance" className="guide-cta-button">
            Go to Health Insurance Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </article>
  );
}
