import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Building, Landmark, ArrowRight } from 'lucide-react';
import '../../pages/guides.css';

export function UPSvsNPS() {
  return (
    <article className="guide-article-content">
      <section className="guide-section">
        <p className="guide-lead">
          The landscape of retirement planning for government employees has experienced a massive seismic shift. 
          For years, the debate raged around the New Pension Scheme (now National Pension System - NPS), which replaced 
          the Old Pension Scheme (OPS) in 2004. Employees wanted the guaranteed security of OPS, while the government 
          needed the fiscal sustainability of NPS. 
        </p>
        <p>
          In a major middle-ground compromise, the government introduced the <strong>Unified Pension Scheme (UPS)</strong>. 
          This hybrid model attempts to take the best of both worlds—providing assured benefits without bankrupting the exchequer. 
          But how does UPS really stack up against NPS? Let's dive deep into the mechanics, math, and tax implications of both.
        </p>
      </section>

      <section className="guide-section">
        <h2>What is the Unified Pension Scheme (UPS)?</h2>
        <p>
          The Unified Pension Scheme is a newly proposed pension framework primarily targeted at Central Government employees, 
          designed to offer guaranteed retirement security. 
        </p>
        <p><strong>Key Features of UPS:</strong></p>
        <ul>
          <li><strong>Assured Pension:</strong> 50% of the average basic pay drawn over the last 12 months before retirement, provided the employee has a minimum qualifying service of 25 years.</li>
          <li><strong>Assured Minimum Pension:</strong> ₹10,000 per month upon superannuation for a minimum of 10 years of service.</li>
          <li><strong>Assured Family Pension:</strong> In case of the employee's demise, 60% of the pension will be provided to the spouse/dependents.</li>
          <li><strong>Inflation Indexation:</strong> The pension is indexed to inflation (Dearness Relief), just like the Old Pension Scheme.</li>
          <li><strong>Lump Sum at Superannuation:</strong> Aside from the pension, employees get a lump sum calculated as 1/10th of monthly emoluments (pay + DA) for every six months of service completed.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>How is NPS Different?</h2>
        <p>
          The National Pension System (NPS) is a defined contribution scheme. Your retirement corpus depends entirely 
          on how much you contribute and how the financial markets perform. It is mandatory for central govt employees 
          joining after 2004, but is also open to all private-sector employees.
        </p>
        <p><strong>Key Features of NPS:</strong></p>
        <ul>
          <li><strong>Market-Linked Returns:</strong> Your money is invested in Equity, Corporate Debt, and Govt Bonds. Long-term returns historically hover around 9-11%.</li>
          <li><strong>No Guarantee:</strong> There is no fixed "50% of last drawn salary" guarantee. If markets crash right before you retire, your annuity payouts could be lower.</li>
          <li><strong>Mandatory Annuity:</strong> At age 60, you can withdraw 60% as a tax-free lump sum. The remaining 40% MUST be used to purchase an annuity (a financial product that pays a monthly pension).</li>
          <li><strong>Contributions:</strong> Employees contribute 10% of basic pay, and the government (employer) contributes 14%.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>UPS vs NPS: The Head-to-Head Comparison</h2>
        
        <div className="table-responsive">
          <table className="guide-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Unified Pension Scheme (UPS)</th>
                <th>National Pension System (NPS)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Pension Guarantee</strong></td>
                <td>Guaranteed 50% of last 12 months' average basic pay (25 yrs service)</td>
                <td>No guarantee. Depends entirely on corpus size and annuity rates.</td>
              </tr>
              <tr>
                <td><strong>Inflation Protection</strong></td>
                <td>Yes. Dearness Relief (DR) is applied to keep up with inflation.</td>
                <td>No. Standard annuities offer flat monthly payouts which lose purchasing power.</td>
              </tr>
              <tr>
                <td><strong>Employee Contribution</strong></td>
                <td>Same as NPS (10% of basic pay)</td>
                <td>10% of basic pay</td>
              </tr>
              <tr>
                <td><strong>Employer Contribution</strong></td>
                <td>Increased to 18.5% (funded by govt)</td>
                <td>14% (by govt employer)</td>
              </tr>
              <tr>
                <td><strong>Lump Sum Withdrawal</strong></td>
                <td>Calculated separately (1/10th per 6 months). Does not reduce the pension amount.</td>
                <td>60% of total corpus tax-free. Taking this reduces the monthly pension (annuity).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h2>Which One is Better?</h2>
        <p>
          For government employees who have the option to choose, <strong>UPS is overwhelmingly superior</strong> in terms of 
          peace of mind and risk mitigation.
        </p>
        <p>
          The biggest flaw in NPS for retirees is the lack of inflation indexation on the annuity portion. If your NPS corpus buys you an annuity of ₹50,000/month at age 60, you will still receive exactly ₹50,000/month at age 80. By then, inflation will have destroyed the purchasing power of that money.
        </p>
        <p>
          UPS solves this by bringing back Dearness Relief (DR). Furthermore, guaranteeing 50% of the last drawn salary protects the employee against stock market volatility. In NPS, a 20% market crash the year you retire could drastically permanently reduce your lifestyle.
        </p>
      </section>

      <section className="guide-section">
        <h2>What About Private Sector Employees?</h2>
        <div className="guide-alert warning">
          The Unified Pension Scheme (UPS) is currently <strong>only for government employees</strong>. Private sector employees must rely on a combination of EPF, PPF, and NPS to build their retirement corpus.
        </div>
        <p>
          If you are in the private sector, NPS is still an excellent vehicle due to the exclusive ₹50,000 tax deduction under Section 80CCD(1B) and the employer contribution deduction under 80CCD(2). However, you must actively manage your NPS asset allocation (shifting to debt as you near 60) to protect against market crashes.
        </p>
        
        <div className="guide-cta-card">
          <div className="guide-cta-content">
            <Landmark className="guide-cta-icon" />
            <div>
              <h3>Plan Your NPS Retirement</h3>
              <p>Calculate your expected corpus and monthly annuity based on your current age.</p>
            </div>
          </div>
          <Link to="/calculators/nps-calculator" className="guide-cta-button">
            Go to NPS Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="guide-section faq-section">
        <h2>Frequently Asked Questions</h2>
        <details className="faq-item">
          <summary>Can existing NPS subscribers switch to UPS?</summary>
          <div className="faq-answer">
            <p>Yes. Central government employees who are currently subscribed to NPS will be given a one-time option to switch to the Unified Pension Scheme (UPS).</p>
          </div>
        </details>

        <details className="faq-item">
          <summary>Do I lose my NPS corpus if I switch to UPS?</summary>
          <div className="faq-answer">
            <p>No. Your past contributions will be seamlessly integrated into the new framework to fund the UPS guarantees. The exact actuarial mechanics will be managed by the government.</p>
          </div>
        </details>
      </section>
    </article>
  );
}
