import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Landmark, Calculator, ArrowRight } from 'lucide-react';
import '../../pages/guides.css';

export function EducationLoan80E() {
  return (
    <article className="guide-article-content">
      <section className="guide-section">
        <p className="guide-lead">
          Higher education, especially foreign degrees from the US, UK, or Australia, has become incredibly expensive. 
          A standard Master's degree can easily cost between ₹40 Lakhs to ₹80 Lakhs. While taking an education loan 
          might seem daunting, the Indian government provides one of the most generous tax deductions available 
          to ease this burden: <strong>Section 80E</strong>.
        </p>
        <p>
          Unlike Section 80C, which caps out at a measly ₹1.5 Lakhs, Section 80E has <strong>no upper limit</strong>. 
          If you structure your loan repayment correctly, your education loan can essentially make your entire salary tax-free for years.
        </p>
      </section>

      <section className="guide-section">
        <h2>What is Section 80E?</h2>
        <p>
          Section 80E of the Income Tax Act allows you to deduct the <strong>entire interest component</strong> of your 
          education loan EMI from your taxable income. 
        </p>
        <ul>
          <li><strong>Limit:</strong> UNLIMITED. If you pay ₹5 Lakhs in interest in a year, you can deduct the full ₹5 Lakhs.</li>
          <li><strong>Duration:</strong> The deduction is available for a maximum of <strong>8 consecutive years</strong>, starting from the year you begin repaying the loan.</li>
          <li><strong>Principal Excluded:</strong> You can only claim the interest portion, not the principal repayment.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>Who Can Claim It?</h2>
        <p>
          You don't just have to take the loan for yourself. You can claim Section 80E if you take an education loan for:
        </p>
        <ol>
          <li>Yourself</li>
          <li>Your Spouse</li>
          <li>Your Children</li>
          <li>A student for whom you are the legal guardian</li>
        </ol>
        <div className="guide-alert warning">
          <strong>Important Condition:</strong> The loan must be taken from a bank, registered financial institution, or an approved charitable institution. Loans from relatives or employers do NOT qualify.
        </div>
      </section>

      <section className="guide-section">
        <h2>Case Study: The ₹50 Lakh US Master's</h2>
        <p>
          Rahul takes a ₹50 Lakh education loan for his MS in Computer Science in the US. The interest rate is 10%, 
          and the tenure is 10 years. Upon returning, he gets a job in India with a ₹25 Lakh salary. Let's look at his Year 1 tax savings.
        </p>
        <ul>
          <li><strong>Loan Amount:</strong> ₹50 Lakhs</li>
          <li><strong>EMI:</strong> ~₹66,000 / month</li>
          <li><strong>Total EMI Paid in Year 1:</strong> ~₹7.92 Lakhs</li>
          <li><strong>Interest Component in Year 1:</strong> ~₹4.85 Lakhs</li>
        </ul>
        <p>
          Rahul's taxable income is ₹25 Lakhs. Under Section 80E, he deducts the full ₹4.85 Lakhs interest. 
          His new taxable income drops to ₹20.15 Lakhs. Because he is in the 30% tax bracket, 
          <strong> Rahul saves nearly ₹1.5 Lakhs in pure income tax in just one year!</strong>
        </p>
      </section>

      <section className="guide-section">
        <h2>Strategic Tip: Pay Off the Loan in 8 Years</h2>
        <p>
          Because Section 80E is only valid for 8 years (starting from the year you begin repayment), you should aggressively 
          restructure your EMI to ensure the loan is completely paid off within this 8-year window. 
        </p>
        <p>
          If you stretch the loan to 10 or 15 years, any interest paid in Year 9 and beyond will give you ZERO tax benefits, 
          which is mathematically disastrous.
        </p>

        <div className="guide-cta-card">
          <div className="guide-cta-content">
            <Calculator className="guide-cta-icon" />
            <div>
              <h3>Calculate Your EMI and Interest</h3>
              <p>Find out the exact interest component of your loan so you can plan your 80E deduction.</p>
            </div>
          </div>
          <Link to="/calculators/emi-calculator" className="guide-cta-button">
            Go to EMI Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </article>
  );
}
