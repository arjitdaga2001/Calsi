import { Link } from 'react-router-dom';
import { ArrowRight, CreditCard } from 'lucide-react';

export function CreditCardDebt() {
  return (
    <article className="guide-article-content">
      <p className="guide-lead">
        Unsecured consumer credit, particularly in the form of credit card debt, represents one of the most toxic liabilities on a retail balance sheet. The economic mechanics of revolving credit are engineered to trap the uninformed consumer in a continuous cycle of high-interest capitalization.
      </p>

      <h2>The Asymmetry of Compounding</h2>
      <p>
        While compounding is the fundamental driver of wealth creation in an investment portfolio, it is equally destructive when applied to liabilities. Credit card debt in emerging markets carries an Annualized Percentage Rate (APR) ranging from 36% to 42%. 
      </p>
      <p>
        Furthermore, interest on credit cards is compounded on a <em>daily</em> basis, not monthly. A failure to clear the total outstanding balance by the due date immediately revokes the interest-free grace period. Consequently, interest is levied not just on the rolled-over amount, but on all new purchases made subsequently, generating a parabolic debt trajectory.
      </p>

      <h2>The Mathematics of the Minimum Due Trap</h2>
      <p>
        The "Minimum Amount Due" (MAD) typically constitutes merely 5% of the total outstanding principal, plus applicable taxes and fees. Paying only the MAD is an economic fallacy. 
      </p>
      <p>
        Because 95% of your payment services the exorbitant interest charge, the principal amortizes at a glacial pace. A ₹1,00,000 balance at 40% APR, serviced solely by minimum payments, can take over a decade to clear, with the aggregate interest paid vastly exceeding the initial principal.
      </p>

      <h2>Restructuring Strategies</h2>
      <p>
        From a quantitative perspective, liquidating high-yielding assets (like equity mutual funds) to clear 40% debt is almost always a mathematically superior decision. The spread between a 12% equity return and a 40% liability cost is an insurmountable negative arbitrage of 28%.
      </p>
      <ul>
        <li><strong>Debt Consolidation:</strong> Securing a personal loan at 12-15% to immediately liquidate a 40% credit card liability yields instant, risk-free interest savings.</li>
        <li><strong>Balance Transfer EMIs:</strong> Utilizing low-interest balance transfer facilities or converting the outstanding balance into fixed-rate EMIs halts the daily compounding mechanism.</li>
      </ul>

      <div className="guide-highlight">
        <strong>The Rule of Restructuring:</strong> Never carry revolving credit card debt. If a balance cannot be cleared immediately, it must be aggressively restructured into a fixed-amortization instrument (like an EMI) with a lower terminal interest rate.
      </div>

      <div className="guide-cta-box" style={{ '--guide-cta-bg': 'var(--cat-loan)' }}>
        <div className="guide-cta-icon">
          <CreditCard size={32} />
        </div>
        <div className="guide-cta-text">
          <h3>Deconstruct Your EMI Options</h3>
          <p>Model the exact interest outgo when converting your outstanding balance into an EMI, and compare the effective interest rate against revolving debt.</p>
          <Link to="/credit-card-emi" className="guide-cta-btn">
            Open Credit Card EMI Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
