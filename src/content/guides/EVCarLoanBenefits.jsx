import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Car, ShieldAlert, ArrowRight } from 'lucide-react';
import '../../pages/guides.css';

export function EVCarLoanBenefits() {
  return (
    <article className="guide-article-content">
      <section className="guide-section">
        <p className="guide-lead">
          Buying a car in India is usually a terrible financial decision. It is a rapidly depreciating asset 
          funded by high-interest debt, generating zero return on investment. 
        </p>
        <p>
          However, to promote green mobility and combat pollution, the Government of India introduced a unique, 
          highly lucrative loophole for car buyers: <strong>Section 80EEB</strong>. If you are buying an Electric Vehicle (EV) 
          on a loan, the government will essentially pay for a chunk of your interest via tax deductions.
        </p>
      </section>

      <section className="guide-section">
        <h2>What is Section 80EEB?</h2>
        <p>
          Section 80EEB of the Income Tax Act allows individuals to claim a tax deduction of up to 
          <strong> ₹1.5 Lakhs every year</strong> on the interest paid towards a loan taken to purchase an Electric Vehicle.
        </p>
        <p>
          This deduction is available <em>over and above</em> the standard ₹1.5 Lakh limit of Section 80C. 
          It applies to both two-wheelers (electric scooters like Ather, Ola) and four-wheelers (Tata Nexon EV, BYD, MG ZS).
        </p>
      </section>

      <section className="guide-section">
        <h2>How Much Money Does it Actually Save?</h2>
        <p>
          Let's assume you are in the 30% tax bracket (plus 4% cess = 31.2% effective tax rate). 
          You buy a Tata Nexon EV and take a car loan of ₹15 Lakhs at 8.5% interest. 
        </p>
        <p>
          In the first year, your total interest payout to the bank might be around ₹1.2 Lakhs. 
          Under Section 80EEB, you can deduct this entire ₹1.2 Lakhs from your taxable income. 
        </p>
        <div className="guide-alert info">
          <strong>The Math:</strong> By reducing your taxable income by ₹1,20,000, you save exactly 31.2% of that amount in taxes. 
          <strong>You save ₹37,440 in cold, hard cash in year one alone.</strong> Over a 5-year loan tenure, this tax subsidy effectively drops your car loan interest rate from 8.5% down to almost 5.5%!
        </div>
      </section>

      <section className="guide-section">
        <h2>Critical Eligibility Rules for 80EEB</h2>
        <p>
          Before you rush to the showroom, you must meet strict conditions to claim this deduction:
        </p>
        <ul>
          <li><strong>Individuals Only:</strong> This deduction is NOT available to HUFs, companies, or partnership firms. It is only for individual taxpayers.</li>
          <li><strong>Loan Source:</strong> The loan must be sanctioned by a registered financial institution (a bank or an NBFC). You cannot borrow from friends or unorganized lenders.</li>
          <li><strong>One-Time Benefit:</strong> The deduction is available only for the <em>first</em> EV purchased by the individual. You cannot claim it on a second EV.</li>
          <li><strong>Sanction Window:</strong> The government originally set a sanction window between April 2019 and March 2023, but it often receives extensions. (Always check current budget notifications for the active sunset clause on 80EEB).</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>Internal Combustion (ICE) vs EV: The Total Cost of Ownership</h2>
        <p>
          When you combine the tax benefits of Section 80EEB with the lower running costs of an EV, the Total Cost of Ownership (TCO) completely flips.
        </p>
        <p>
          A petrol car running 1,000 km a month costs roughly ₹7,000 in fuel. An EV running the same distance costs roughly ₹1,000 in electricity. 
          That's a saving of ₹72,000 a year on fuel, plus ₹35,000+ in tax savings under 80EEB. Together, an EV effectively pays for a massive chunk of its own EMI!
        </p>
      </section>

      <section className="guide-section">
        <h2>Important Note on Tax Regimes</h2>
        <div className="guide-alert warning">
          Section 80EEB is a deduction under Chapter VI-A. Therefore, it is <strong>only available if you opt for the Old Tax Regime</strong>. If you file your taxes under the New Tax Regime, you cannot claim this ₹1.5 Lakh deduction. You must mathematically calculate which regime benefits you overall before taking the loan.
        </div>

        <div className="guide-cta-card">
          <div className="guide-cta-content">
            <Car className="guide-cta-icon" />
            <div>
              <h3>Calculate Your Car Loan EMI & Interest</h3>
              <p>Find out exactly how much interest you will pay in Year 1 so you can claim your 80EEB deduction.</p>
            </div>
          </div>
          <Link to="/car-loan" className="guide-cta-button">
            Go to Car Loan Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </article>
  );
}
