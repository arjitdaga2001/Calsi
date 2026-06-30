import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, PiggyBank, Briefcase, ArrowRight } from 'lucide-react';
import '../../pages/guides.css';

export function FDvsDebtFunds() {
  return (
    <article className="guide-article-content">
      <section className="guide-section">
        <p className="guide-lead">
          For decades, the Indian middle class had a simple financial strategy: put money in a Fixed Deposit (FD) 
          and sleep peacefully. But as financial literacy grew, Debt Mutual Funds emerged as the smarter, tax-efficient 
          alternative to FDs, especially for those in the 30% tax bracket due to indexation benefits.
        </p>
        <p>
          However, the government drastically changed the tax laws in recent budgets. The massive tax arbitrage that Debt Funds 
          enjoyed has been stripped away. In 2026, with the playing field leveled, which instrument should you choose to 
          park your safe capital?
        </p>
      </section>

      <section className="guide-section">
        <h2>The Death of the Indexation Benefit</h2>
        <p>
          Prior to April 2023, if you held a Debt Mutual Fund for more than 3 years, your profits were taxed at 20% <em>after indexation</em>. 
          This meant you could adjust your purchase price for inflation. Effectively, you paid almost zero tax on Debt Funds, 
          while FD interest was brutally taxed at your slab rate (up to 30%+).
        </p>
        <p>
          <strong>The New Reality:</strong> Today, capital gains from Debt Mutual Funds (with less than 35% equity exposure) 
          are added to your income and taxed at your marginal slab rate, regardless of how long you hold them. 
          They are now taxed exactly like Fixed Deposits.
        </p>
      </section>

      <section className="guide-section">
        <h2>FD vs Debt Funds: The 2026 Comparison</h2>
        
        <h3>1. The Deferral Advantage (Why Debt Funds Still Win)</h3>
        <p>
          Even with identical tax rates, Debt Funds hold a massive mathematical advantage: <strong>Tax Deferral</strong>.
        </p>
        <p>
          With an FD, the bank calculates interest every year and automatically deducts TDS (Tax Deducted at Source). You pay tax on the interest <em>every single year</em>, even if you haven't withdrawn the money. This severely damages the compounding effect.
        </p>
        <p>
          With a Debt Fund, you only pay tax in the year you <em>sell</em> the fund. Your money grows tax-free for 10 years, compounding beautifully, and you only pay the taxman at the very end. This deferred taxation results in a significantly larger final corpus.
        </p>

        <h3>2. Set-off of Losses</h3>
        <p>
          You cannot set off any capital losses against FD interest. However, if you sell a Debt Fund at a loss, or if you have Short Term Capital Losses (STCL) from the stock market, you can set them off against the gains from your Debt Funds, lowering your overall tax liability.
        </p>

        <h3>3. Premature Withdrawal Penalties</h3>
        <p>
          <strong>Fixed Deposits:</strong> If you break an FD before maturity, banks usually charge a 1% penalty on the interest rate. 
        </p>
        <p>
          <strong>Debt Funds:</strong> Open-ended debt funds (like Liquid Funds or Money Market Funds) have zero exit load after 7 days. You can withdraw exactly what you need (e.g., ₹20,000 from a ₹5 Lakh corpus) without touching the rest. In an FD, you usually have to break the entire deposit.
        </p>
      </section>

      <section className="guide-section">
        <h2>When are Fixed Deposits Better?</h2>
        <p>
          Despite the advantages of Debt Funds, FDs are not dead. They are the superior choice in three scenarios:
        </p>
        <ol>
          <li><strong>Senior Citizens:</strong> Seniors get an extra 0.5% interest rate on FDs. Additionally, under Section 80TTB, senior citizens can claim a tax deduction of up to ₹50,000 on FD interest every year, making it highly tax-efficient for them.</li>
          <li><strong>DICGC Insurance:</strong> Bank FDs are insured up to ₹5 Lakhs per bank by the RBI subsidiary DICGC. Debt funds carry credit risk and interest rate risk, and have no sovereign guarantee.</li>
          <li><strong>Short-Term Certainty:</strong> If you need the money for a daughter's wedding in exactly 8 months, an FD locks in a guaranteed rate. A debt fund's return can fluctuate if RBI changes repo rates.</li>
        </ol>
      </section>

      <section className="guide-section">
        <h2>The Verdict</h2>
        <p>
          If you are in the 30% tax bracket and investing for the long term (3+ years), <strong>Debt Mutual Funds</strong> still win due to the power of tax deferral and compounding. 
        </p>
        <p>
          If you are a senior citizen, in the 0% to 10% tax bracket, or need absolute capital protection for less than a year, <strong>Fixed Deposits</strong> remain the king of safety.
        </p>

        <div className="guide-cta-card">
          <div className="guide-cta-content">
            <PiggyBank className="guide-cta-icon" />
            <div>
              <h3>Calculate Your FD Returns</h3>
              <p>Find out your exact maturity amount and interest earned using our FD calculator.</p>
            </div>
          </div>
          <Link to="/calculators/fd-calculator" className="guide-cta-button">
            Go to FD Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </article>
  );
}
