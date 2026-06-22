import { Link } from 'react-router-dom';
import { ArrowRight, Calculator } from 'lucide-react';

export function OldVsNewTaxRegime() {
  return (
    <article className="guide-article-content">
      <p className="guide-lead">
        With the Union Budget announcements constantly tweaking the income tax slabs, the perennial question for salaried individuals and business owners alike remains: <strong>Should I stick to the Old Tax Regime or shift to the New Tax Regime?</strong>
      </p>

      <h2>1. The Core Difference</h2>
      <p>
        The primary difference boils down to deductions versus lower rates. The <strong>Old Regime</strong> allows you to claim around 70 exemptions and deductions (like Section 80C, HRA, LTA, Home Loan interest, etc.). The <strong>New Regime</strong> offers lower, simplified tax rates but forces you to forego almost all of these deductions (except a standard deduction of ₹50,000 for salaried employees).
      </p>

      <h2>2. Tax Slabs for FY 2025-26</h2>
      <div className="guide-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Income Slab</th>
              <th>New Regime Tax Rate</th>
              <th>Old Regime Tax Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Up to ₹3 Lakhs</td><td>Nil</td><td>Nil (Up to ₹2.5L)</td></tr>
            <tr><td>₹3L to ₹6 Lakhs</td><td>5%</td><td>5% (₹2.5L - ₹5L)</td></tr>
            <tr><td>₹6L to ₹9 Lakhs</td><td>10%</td><td>20% (₹5L - ₹10L)</td></tr>
            <tr><td>₹9L to ₹12 Lakhs</td><td>15%</td><td>20%</td></tr>
            <tr><td>₹12L to ₹15 Lakhs</td><td>20%</td><td>30% (Above ₹10L)</td></tr>
            <tr><td>Above ₹15 Lakhs</td><td>30%</td><td>30%</td></tr>
          </tbody>
        </table>
      </div>

      <h2>3. When to Choose the Old Regime</h2>
      <p>
        The Old Regime is usually beneficial if you are heavily utilizing tax-saving instruments. If your total deductions (80C, 80D, HRA, Home Loan Interest under 24B) exceed <strong>₹3.75 Lakhs to ₹4 Lakhs</strong>, the math generally favors the old system.
      </p>
      <ul>
        <li>You have a running Home Loan with high interest payouts.</li>
        <li>You pay high rent and claim substantial HRA.</li>
        <li>You fully utilize the ₹1.5 Lakh 80C limit (EPF, PPF, ELSS, Life Insurance).</li>
      </ul>

      <h2>4. When to Choose the New Regime</h2>
      <p>
        The New Regime is the default option now, and it is significantly better for people who do not want to lock their money into specific tax-saving schemes just to save tax.
      </p>
      <ul>
        <li>Your income is up to ₹7 Lakhs (You pay zero tax due to Section 87A rebate).</li>
        <li>You prefer liquidity and want to invest in high-growth assets (like direct equity or non-ELSS mutual funds) rather than locking money in 5-year FDs or PPF.</li>
        <li>You don't have a home loan or pay rent.</li>
      </ul>

      <div className="guide-cta-box">
        <div className="guide-cta-icon">
          <Calculator size={32} />
        </div>
        <div className="guide-cta-text">
          <h3>Don't guess. Calculate it exactly.</h3>
          <p>We built a precise calculator that compares both regimes side-by-side based on your specific salary and deductions.</p>
          <Link to="/income-tax" className="guide-cta-btn">
            Open Income Tax Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
