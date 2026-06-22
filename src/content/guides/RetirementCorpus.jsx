import { Link } from 'react-router-dom';
import { ArrowRight, Sunset } from 'lucide-react';

export function RetirementCorpus() {
  return (
    <article className="guide-article-content">
      <p className="guide-lead">
        The financial services industry frequently propagates the concept of "The Number"—a static, often arbitrary figure required to retire comfortably. However, static projections fail fundamentally when exposed to the dynamic variables of human longevity, macroeconomic inflation, and market sequence-of-returns risk.
      </p>

      <h2>The Fallacy of the 4% Rule in Emerging Markets</h2>
      <p>
        The Trinity Study popularized the "4% Rule," suggesting a retiree could safely withdraw 4% of their portfolio annually (adjusted for inflation) for 30 years without capital depletion. This study relied heavily on US equity and bond historical data. Applying this heuristic blindly in an emerging market with structural inflation differentials and higher interest rate volatility is mathematically dangerous.
      </p>

      <h2>Inflation: The Invisible Tax on Purchasing Power</h2>
      <p>
        The most critical variable in retirement modeling is not your return rate, but the inflation rate. If your current monthly expense is ₹1,00,000, a conservative 6% inflation rate dictates that you will need approximately ₹3,20,000 per month to maintain the exact same standard of living twenty years from now. 
      </p>
      <p>
        Failing to account for the compounding nature of inflation results in a drastic underestimation of the required terminal corpus. Your portfolio must generate a <em>real return</em> (nominal return minus inflation) that outpaces your withdrawal rate.
      </p>

      <h2>A Quantitative Framework for Target Setting</h2>
      <p>
        A robust retirement model requires a stochastic approach rather than a deterministic one. Instead of targeting a fixed number, one must build a corpus capable of generating an inflation-indexed annuity. The formulaic approach involves:
      </p>
      <ul>
        <li><strong>Estimating Life Expectancy:</strong> Modeling a post-retirement lifespan of at least 30-35 years.</li>
        <li><strong>Calculating the Initial Withdrawal Rate:</strong> Targeting a conservative 3% to 3.5% initial withdrawal rate in a high-inflation economy.</li>
        <li><strong>Asset Allocation Shift:</strong> Understanding that the "glide path" of your portfolio must shift from accumulation (equity-heavy) to preservation (debt-heavy) a decade prior to retirement to mitigate sequence-of-returns risk.</li>
      </ul>

      <div className="guide-highlight">
        <strong>The Real Target:</strong> Multiply your projected annual expenses at the year of retirement by 30 to 35. That is your baseline corpus requirement.
      </div>

      <div className="guide-cta-box" style={{ '--guide-cta-bg': 'var(--cat-mf)' }}>
        <div className="guide-cta-icon">
          <Sunset size={32} />
        </div>
        <div className="guide-cta-text">
          <h3>Compute Your Exact Liability</h3>
          <p>Input your current expenses, expected inflation, and timeline to run a deterministic calculation of your required retirement corpus.</p>
          <Link to="/retirement" className="guide-cta-btn">
            Open Retirement Planner <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
