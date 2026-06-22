import { Link } from 'react-router-dom';
import { ArrowRight, Landmark } from 'lucide-react';

export function HomeLoanPrepayment() {
  return (
    <article className="guide-article-content">
      <p className="guide-lead">
        A 20-year home loan is mathematically front-loaded. During the initial years, the lion's share of your Equated Monthly Installment (EMI) services the interest, while barely denting the principal. From an economic standpoint, the decision to prepay this debt versus deploying excess capital into the markets is a classic cost-of-capital arbitrage problem.
      </p>

      <h2>The Illusory Burden of Long-Term Debt</h2>
      <p>
        Consider a ₹50 Lakh loan at 8.5% interest over 20 years. Your total interest outgo over the tenure will be roughly ₹54 Lakhs—more than the principal itself. However, interpreting this nominal figure without adjusting for inflation creates a behavioral bias against debt. In a macroeconomic environment where structural inflation hovers around 5-6%, the <em>real</em> cost of that 8.5% debt is significantly lower.
      </p>

      <h2>When Prepayment is Economically Justified</h2>
      <p>
        The mathematics favor aggressive prepayment in the first 1-5 years of the loan amortization schedule. Because the interest component is calculated on the outstanding principal, a lump sum payment early on drastically reduces the denominator for all subsequent interest calculations. 
      </p>
      <ul>
        <li>If your risk tolerance is strictly zero (e.g., your alternative is keeping cash in a savings account yielding 3% post-tax), prepaying an 8.5% loan is an immediate, risk-free, tax-free return of 8.5%.</li>
        <li>If you are in a variable interest rate regime and the central bank signals a sustained tightening cycle, prepaying minimizes exposure to rising rates.</li>
      </ul>

      <h2>The Opportunity Cost of Liquidity</h2>
      <p>
        Conversely, prepaying a home loan traps your liquidity in an illiquid asset. If you can reliably deploy that capital into an index fund yielding an expected long-term CAGR of 12%, the spread between your cost of debt (8.5% minus tax benefits under Section 24B) and your return on equity (12% minus 12.5% LTCG) represents free wealth creation. 
      </p>
      <div className="guide-highlight">
        <strong>The Arbitrage Rule:</strong> If your post-tax expected return on an investment exceeds the post-tax cost of your loan, do not prepay. Direct the surplus cash flow to the higher-yielding asset.
      </div>

      <p>
        Furthermore, Section 24B of the Income Tax Act allows a deduction of up to ₹2,00,000 on interest paid. For an individual in the 30% tax bracket, this effectively reduces the nominal 8.5% interest rate closer to 6%. Beating a 6% hurdle rate in the equity markets over a 15-year horizon is statistically highly probable.
      </p>

      <div className="guide-cta-box" style={{ '--guide-cta-bg': 'var(--cat-loan)' }}>
        <div className="guide-cta-icon">
          <Landmark size={32} />
        </div>
        <div className="guide-cta-text">
          <h3>Quantify Your Amortization Schedule</h3>
          <p>Model your exact home loan metrics, visualize the interest-to-principal ratio over time, and plan your prepayments analytically.</p>
          <Link to="/home-loan" className="guide-cta-btn">
            Open Home Loan Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
