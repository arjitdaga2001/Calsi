import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Landmark, PieChart, ArrowRight } from 'lucide-react';
import './guides.css';

export function FreelancerTaxSection44ADA() {
  return (
    <article className="guide-article-content">
      <section className="guide-section">
        <p className="guide-lead">
          Are you a software developer doing freelance gigs? A consultant, architect, doctor, or digital marketer 
          operating independently? If you are declaring all your gross receipts as your total income and paying 30% tax 
          on it, you are making a massive financial mistake.
        </p>
        <p>
          The Income Tax Act of India has a built-in legal loophole—a massive concession—designed specifically for independent 
          professionals to reduce compliance burden and slash their tax liability in half. It is called the 
          <strong> Presumptive Taxation Scheme under Section 44ADA</strong>.
        </p>
      </section>

      <section className="guide-section">
        <h2>What is Section 44ADA?</h2>
        <p>
          Normally, to calculate your business tax, you must maintain complex books of accounts, hire an accountant, 
          track every single expense (laptop, internet, travel, client dinners), and subtract those from your total revenue 
          to find your net profit. 
        </p>
        <p>
          Section 44ADA allows you to skip all of that. Under this section, the government allows you to <strong>presume that 50% of your gross receipts are your business expenses</strong>. You only have to declare the remaining 50% as your taxable profit.
        </p>
        
        <div className="guide-alert info">
          <strong>The Magic Rule:</strong> If you earn ₹50 Lakhs a year as a freelance developer, you simply declare ₹25 Lakhs as your profit. The government does not ask for a single bill or receipt for the remaining ₹25 Lakhs.
        </div>
      </section>

      <section className="guide-section">
        <h2>Who is Eligible for 44ADA?</h2>
        <p>This scheme is exclusively for resident individuals and partnerships engaged in specified professions:</p>
        <ul>
          <li><strong>Information Technology (IT)</strong> (Software developers, UI/UX designers, freelance coders)</li>
          <li><strong>Medical Professionals</strong> (Doctors, surgeons)</li>
          <li><strong>Legal Professionals</strong> (Lawyers, advocates)</li>
          <li><strong>Engineering and Architecture</strong></li>
          <li><strong>Accountancy</strong> (CAs)</li>
          <li><strong>Technical Consultancy</strong></li>
        </ul>
        <p>
          <strong>The Limit:</strong> As of recent budgets, if 95% of your receipts are digital (bank transfers, UPI), 
          the limit to use Section 44ADA has been enhanced to <strong>₹75 Lakhs</strong> per financial year. 
          If you have high cash receipts, the limit remains at ₹50 Lakhs.
        </p>
      </section>

      <section className="guide-section">
        <h2>The Financial Impact: Case Study</h2>
        <p>Let's look at Neha, a freelance UI/UX designer earning ₹60 Lakhs entirely via bank transfers.</p>
        
        <h3>Scenario 1: Filing Normally (Without 44ADA)</h3>
        <p>Neha doesn't know about 44ADA. She has actual expenses (laptop depreciation, software subscriptions, internet) of about ₹5 Lakhs.</p>
        <ul>
          <li>Gross Receipts: ₹60,00,000</li>
          <li>Actual Expenses: ₹5,00,000</li>
          <li>Taxable Profit: ₹55,00,000</li>
          <li><strong>Tax Liability (approx): ~₹14.8 Lakhs</strong></li>
        </ul>

        <h3>Scenario 2: Filing under Section 44ADA</h3>
        <p>Neha opts for 44ADA. Even though her actual expenses were only ₹5 Lakhs, she is legally allowed to claim a 50% flat expense rate.</p>
        <ul>
          <li>Gross Receipts: ₹60,00,000</li>
          <li>Presumed Expenses (50%): ₹30,00,000</li>
          <li>Taxable Profit: ₹30,00,000</li>
          <li><strong>Tax Liability (approx): ~₹6.2 Lakhs</strong></li>
        </ul>
        
        <div className="guide-alert warning">
          By simply selecting Section 44ADA while filing her ITR-4, Neha legally saved over <strong>₹8 Lakhs in income tax</strong> in a single year, without maintaining any accounting books!
        </div>
      </section>

      <section className="guide-section">
        <h2>Can You Declare More or Less than 50%?</h2>
        <ul>
          <li><strong>Declaring More:</strong> Yes, you can voluntarily declare that your profit is 60% or 70% of your gross receipts and pay tax on that higher amount.</li>
          <li><strong>Declaring Less:</strong> If your actual profit margins are lower than 50% (e.g., you earned ₹50L but spent ₹35L on sub-contractors, so profit is only 30%), you <strong>cannot</strong> use Section 44ADA. You must maintain full books of accounts and undergo a Tax Audit by a CA.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>What About Section 80C Deductions?</h2>
        <p>
          The beauty of Section 44ADA is that it determines your Gross Total Income. Once your profit is calculated at 50%, 
          you can <em>still</em> claim all standard Chapter VI-A deductions on that amount. 
        </p>
        <p>
          So from your ₹30 Lakh profit, you can further subtract ₹1.5L (80C - PPF, ELSS), ₹50,000 (80CCD(1B) - NPS), 
          and ₹25,000 (80D - Health Insurance), bringing your taxable income down even further!
        </p>

        <div className="guide-cta-card">
          <div className="guide-cta-content">
            <Landmark className="guide-cta-icon" />
            <div>
              <h3>Calculate Your Final Tax Liability</h3>
              <p>Plug your 44ADA presumed profit into our Income Tax Calculator to see your exact tax slab and cess.</p>
            </div>
          </div>
          <Link to="/income-tax" className="guide-cta-button">
            Go to Income Tax Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </article>
  );
}
