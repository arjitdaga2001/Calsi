import { Link } from 'react-router-dom';
import { ArrowRight, Shield } from 'lucide-react';

export function NPSvsEPF() {
  return (
    <article className="guide-article-content">
      <p className="guide-lead">
        Constructing a tax-efficient retirement portfolio requires navigating the complex regulatory frameworks governing statutory provident funds and voluntary pension systems. The Employees' Provident Fund (EPF) and the National Pension System (NPS) represent the two primary tax-advantaged vehicles in the Indian macroeconomic landscape.
      </p>

      <h2>The EPF Structure: Guaranteed Yields and Illiquidity</h2>
      <p>
        The EPF operates under an Exempt-Exempt-Exempt (EEE) tax regime. Contributions (up to ₹1.5 Lakh under 80C), the accrued interest, and the final withdrawal are entirely tax-free, provided continuous service conditions are met.
      </p>
      <p>
        The yield on EPF is sovereign-backed and historically hovers around 8.1% to 8.5%. While this offers absolute capital protection and a risk-free premium over structural inflation, the portfolio is strictly debt-oriented. For a young professional with a 30-year accumulation phase, the absence of equity exposure severely limits the aggregate compounding potential.
      </p>

      <h2>The NPS Structure: Market-Linked Growth and Tax Arbitrage</h2>
      <p>
        Conversely, the NPS is a defined-contribution, market-linked vehicle. It introduces significant tax arbitrage opportunities through Section 80CCD(1B), allowing an exclusive ₹50,000 deduction above and beyond the congested 80C limit. Furthermore, corporate routing under Section 80CCD(2) permits an employer to contribute up to 10% of basic salary tax-free.
      </p>
      <p>
        The economic superiority of NPS lies in its asset allocation flexibility. An investor can allocate up to 75% of their corpus to the equity asset class (Active Choice). Over a multi-decade horizon, the equity risk premium ensures the NPS corpus will mathematically outperform the debt-heavy EPF corpus by a substantial margin.
      </p>

      <h2>The Taxation Asymmetry at Maturity</h2>
      <p>
        The primary friction point of the NPS is its Exempt-Exempt-Taxable (EET) structure at maturity. While 60% of the terminal corpus can be withdrawn tax-free, the remaining 40% must be mandatorily deployed into an annuity. The annuity payouts are then taxed according to the investor's marginal slab rate in retirement.
      </p>
      <div className="guide-highlight">
        <strong>Strategic Synthesis:</strong> EPF provides the necessary sovereign-backed debt foundation for a portfolio, while NPS serves as the aggressive, equity-linked growth engine. Optimal capital allocation involves maximizing employer EPF matching, fully utilizing the ₹50,000 NPS 80CCD(1B) tranche, and routing further surplus into highly liquid equity index funds.
      </div>

      <div className="guide-cta-box" style={{ '--guide-cta-bg': 'var(--cat-mf)' }}>
        <div className="guide-cta-icon">
          <Shield size={32} />
        </div>
        <div className="guide-cta-text">
          <h3>Project Your NPS Maturity Valuation</h3>
          <p>Model your equity and debt allocations, forecast the terminal corpus, and calculate the mandatory annuity yield.</p>
          <Link to="/nps" className="guide-cta-btn">
            Open NPS Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
