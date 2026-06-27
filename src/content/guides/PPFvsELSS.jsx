import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Scale, Calculator, ArrowRight } from 'lucide-react';
import '../../pages/guides.css';

export function PPFvsELSS() {
  return (
    <article className="guide-article-content">
      <section className="guide-section">
        <p className="guide-lead">
          Every March, millions of Indians scramble to invest ₹1.5 Lakhs to save tax under Section 80C. 
          For decades, the undisputed king of 80C was the Public Provident Fund (PPF). It offered safety, guaranteed returns, 
          and tax-free maturity. 
        </p>
        <p>
          But in the last ten years, Equity Linked Savings Schemes (ELSS) have challenged the throne. ELSS mutual funds 
          offer market-linked returns that historically crush PPF. So, which one should you choose to park your precious 80C funds?
        </p>
      </section>

      <section className="guide-section">
        <h2>What are PPF and ELSS?</h2>
        <p>
          <strong>Public Provident Fund (PPF):</strong> A government-backed, fixed-income scheme with a 15-year lock-in. It currently offers a 7.1% interest rate (subject to quarterly revision). It is entirely tax-free (Exempt-Exempt-Exempt).
        </p>
        <p>
          <strong>ELSS (Tax Saving Mutual Funds):</strong> Diversified equity mutual funds with a strict 3-year lock-in period. They invest primarily in the stock market (Nifty, Sensex). Returns are not guaranteed but historically average 12-14%.
        </p>
      </section>

      <section className="guide-section">
        <h2>The 15-Year Showdown: Math Doesn't Lie</h2>
        <p>
          Let's assume you invest the maximum 80C limit of ₹1.5 Lakhs every year for 15 years.
        </p>
        
        <div className="table-responsive">
          <table className="guide-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>PPF (Public Provident Fund)</th>
                <th>ELSS Mutual Funds</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Annual Investment</strong></td>
                <td>₹ 1,50,000</td>
                <td>₹ 1,50,000</td>
              </tr>
              <tr>
                <td><strong>Total Invested (15 Yrs)</strong></td>
                <td>₹ 22.5 Lakhs</td>
                <td>₹ 22.5 Lakhs</td>
              </tr>
              <tr>
                <td><strong>Expected Annual Return</strong></td>
                <td>7.1% (Guaranteed)</td>
                <td>12% (Market estimate)</td>
              </tr>
              <tr>
                <td><strong>Corpus at Maturity</strong></td>
                <td><strong>~₹ 40.6 Lakhs</strong></td>
                <td><strong>~₹ 63.5 Lakhs</strong></td>
              </tr>
              <tr>
                <td><strong>Tax on Maturity</strong></td>
                <td>Zero (Tax-Free)</td>
                <td>12.5% LTCG above ₹1.25L</td>
              </tr>
              <tr>
                <td><strong>Lock-in Period</strong></td>
                <td>15 Years</td>
                <td><strong>3 Years</strong> (Lowest of all 80C options)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="guide-alert info">
          <strong>The Result:</strong> Even after paying Long Term Capital Gains (LTCG) tax on the ELSS corpus, you still end up with nearly <strong>₹20 Lakhs more wealth</strong> than PPF.
        </div>
      </section>

      <section className="guide-section">
        <h2>The Flaws of PPF in 2026</h2>
        <ol>
          <li><strong>Inflation Risk:</strong> Real inflation (especially education and healthcare) in India is easily 7-8%. A 7.1% return means your PPF money is barely preserving its purchasing power. It is not building wealth.</li>
          <li><strong>Illiquidity:</strong> A 15-year lock-in is massively restrictive. While partial withdrawals are allowed after 7 years, they are highly conditional.</li>
        </ol>
      </section>

      <section className="guide-section">
        <h2>When Should You Choose PPF?</h2>
        <p>ELSS is vastly superior for wealth creation, but PPF is still a fantastic tool in specific scenarios:</p>
        <ul>
          <li><strong>Asset Allocation:</strong> If your portfolio is already 80% heavily invested in stocks, PPF acts as the perfect debt component. It is the safest, highest-yielding tax-free debt instrument in India.</li>
          <li><strong>Risk Aversion:</strong> If you lose sleep over stock market crashes, the peace of mind that PPF's sovereign guarantee provides is priceless.</li>
          <li><strong>Approaching Retirement:</strong> If you are 5 years away from retiring, you shouldn't be dumping 80C money into volatile ELSS funds. PPF provides capital protection.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>The Smart Strategy: Combine Both</h2>
        <p>
          You don't have to choose just one. A smart investor allocates their 80C based on their age and risk profile. 
          For a 30-year-old, putting ₹1,00,000 into ELSS (for aggressive growth) and ₹50,000 into PPF (for a debt safety net) 
          is a highly optimized tax-saving strategy.
        </p>

        <div className="guide-cta-card">
          <div className="guide-cta-content">
            <Calculator className="guide-cta-icon" />
            <div>
              <h3>Compare Returns Yourself</h3>
              <p>Use our Lumpsum or SIP calculators to model ELSS returns versus PPF interest.</p>
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
