import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, FileSignature, Landmark, ArrowRight } from 'lucide-react';
import './guides.css';

export function RSUTaxation() {
  return (
    <article className="guide-article-content">
      <section className="guide-section">
        <p className="guide-lead">
          For software engineers and startup employees in India, Restricted Stock Units (RSUs) and Employee Stock Ownership Plans (ESOPs) 
          are often the ticket to massive, life-changing wealth. It is not uncommon for a tech employee's stock grants to exceed 
          their base salary.
        </p>
        <p>
          However, because these stocks are often listed in the US (like Google, Amazon, Meta) or unlisted (like Swiggy, Zepto before IPO), 
          the taxation is incredibly complex. A lack of tax planning can result in you losing nearly 40% of your stock wealth to the 
          Indian Income Tax department. Here is how RSU taxation works.
        </p>
      </section>

      <section className="guide-section">
        <h2>The Two Stages of RSU/ESOP Taxation</h2>
        <p>The Income Tax Department taxes your stock options at two very specific events. You get taxed twice!</p>
        
        <h3>Stage 1: At the time of Vesting / Exercise (Taxed as Salary)</h3>
        <p>
          When your RSUs "vest" (become yours), or when you "exercise" your ESOPs (buy them at the strike price), 
          the government considers the value of those shares as a "Perquisite" (a benefit given by your employer).
        </p>
        <ul>
          <li><strong>Tax Calculation:</strong> (Fair Market Value of the share on that day - What you paid for it) × Number of shares.</li>
          <li><strong>How it is taxed:</strong> This amount is added directly to your standard salary and taxed at your income tax slab rate (usually 30% + cess).</li>
        </ul>
        <div className="guide-alert warning">
          <strong>The Liquidity Trap:</strong> When RSUs vest, you owe 30% tax on their value immediately. Since you haven't actually sold the shares to get cash, where does the tax money come from? Employers usually do a "Sell to Cover"—they automatically sell 30% of your vested shares on the very first day and send the cash to the Indian government as TDS.
        </div>

        <h3>Stage 2: At the time of Sale (Taxed as Capital Gains)</h3>
        <p>
          Months or years later, when you finally sell the shares on the stock market, you are taxed again. 
          But this time, you are only taxed on the <em>profit</em> made between the Vesting Date and the Sale Date.
        </p>
        <ul>
          <li><strong>Tax Calculation:</strong> Sale Price - Fair Market Value on Vesting Date.</li>
          <li><strong>How it is taxed:</strong> This depends entirely on whether the shares are Indian or Foreign, and Listed or Unlisted.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>Capital Gains Tax Rates (The Complex Part)</h2>
        
        <h3>1. Indian Listed Companies (e.g., Zomato, Infosys)</h3>
        <ul>
          <li><strong>Short Term (STCG):</strong> Held for less than 1 year. Taxed at 20%.</li>
          <li><strong>Long Term (LTCG):</strong> Held for more than 1 year. Taxed at 12.5% (above ₹1.25 Lakh exemption).</li>
        </ul>

        <h3>2. Foreign Listed Companies (e.g., Google, Amazon, Microsoft RSUs)</h3>
        <p>The Indian government treats foreign stocks as "Unlisted" assets for tax holding period purposes.</p>
        <ul>
          <li><strong>Short Term (STCG):</strong> Held for less than 24 months. Added to your income and taxed at your slab rate (30%).</li>
          <li><strong>Long Term (LTCG):</strong> Held for more than 24 months. Taxed at 12.5% (Without indexation).</li>
        </ul>
        <p><em>Note: If your US broker withholds taxes in the US when you sell, you can claim relief in India under the DTAA (Double Taxation Avoidance Agreement) to avoid paying tax twice on the sale.</em></p>

        <h3>3. Indian Unlisted Startups</h3>
        <ul>
          <li><strong>Short Term (STCG):</strong> Held for less than 24 months. Taxed at your slab rate (30%).</li>
          <li><strong>Long Term (LTCG):</strong> Held for more than 24 months. Taxed at 12.5%.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>Startup Exception: Section 80-IAC (Tax Deferral)</h2>
        <p>
          To prevent startup employees from facing a massive tax bill when they exercise illiquid ESOPs, the government allows employees of <strong>Eligible Startups (recognized by DPIIT under Section 80-IAC)</strong> to defer the Stage 1 Perquisite tax.
        </p>
        <p>If you work for an eligible startup, you don't pay the 30% tax on exercise. You pay it whichever of these happens first:</p>
        <ol>
          <li>5 years from the year of exercise.</li>
          <li>When you sell the shares.</li>
          <li>When you leave the company.</li>
        </ol>
      </section>

      <section className="guide-section faq-section">
        <h2>Frequently Asked Questions</h2>
        <details className="faq-item">
          <summary>Should I hold my US RSUs or sell immediately upon vesting?</summary>
          <div className="faq-answer">
            <p>Financial planners strongly advise selling RSUs immediately upon vesting. Why? Because you already paid 30% tax on them. If you wouldn't use your cash salary to buy your company's stock, you shouldn't hold the RSUs. Sell them, bring the cash to India, and diversify into Index Funds to avoid concentration risk (having both your job and your wealth tied to one company).</p>
          </div>
        </details>
      </section>
    </article>
  );
}
