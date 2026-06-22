import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';

export function XIRRvsCAGR() {
  return (
    <article className="guide-article-content">
      <p className="guide-lead">
        Evaluating the performance of an investment portfolio requires an understanding of time-weighted versus money-weighted returns. Retail investors frequently conflate Absolute Returns, CAGR (Compound Annual Growth Rate), and XIRR (Extended Internal Rate of Return), leading to heavily distorted assessments of portfolio yield.
      </p>

      <h2>The Limitation of CAGR</h2>
      <p>
        CAGR is an elegant, smoothed metric. It assumes a single, lump-sum investment at Time 0, which grows undisturbed to Time T. The formula is simply: <code>(Ending Value / Beginning Value)^(1/Years) - 1</code>.
      </p>
      <p>
        While mathematically sound for a fixed deposit or a one-time property purchase, CAGR breaks down entirely when applied to dynamic portfolios characterized by continuous cash inflows and outflows—such as monthly SIPs, dividend reinvestments, or staggered capital withdrawals.
      </p>

      <h2>Why XIRR is the Superior Metric</h2>
      <p>
        XIRR represents the exact annualized yield of a series of irregular cash flows occurring at irregular intervals. It is essentially the discount rate that makes the Net Present Value (NPV) of all your cash inflows and outflows exactly zero.
      </p>
      <p>
        In an SIP, you are purchasing assets at different price points over time. Some tranches of capital have been compounding for five years, while others have only been in the market for a month. XIRR assigns a precise time-weight to every single transaction. 
      </p>

      <h2>Interpreting Asymmetric Cash Flows</h2>
      <div className="guide-highlight">
        <strong>The Illusion of Absolute Return:</strong> If you invest ₹10,000 every month for 5 years (Total ₹6,00,000) and your final value is ₹8,00,000, your Absolute Return is 33.3%. However, because the capital was deployed sequentially rather than simultaneously, the XIRR is roughly 11.5%—a much more accurate representation of the asset's annualized performance.
      </div>

      <p>
        When evaluating the efficacy of an active fund manager or a self-directed equity portfolio against a benchmark index, XIRR is the only mathematically rigorous metric to use. It prevents the distortion caused by injecting a large amount of capital right before a market rally, which would artificially inflate an absolute return calculation.
      </p>

      <div className="guide-cta-box" style={{ '--guide-cta-bg': 'var(--cat-loan)' }}>
        <div className="guide-cta-icon">
          <FileText size={32} />
        </div>
        <div className="guide-cta-text">
          <h3>Analyze Your Irregular Cash Flows</h3>
          <p>Input your transaction dates and amounts to precisely calculate the annualized yield of your active investments.</p>
          <Link to="/xirr" className="guide-cta-btn">
            Open XIRR Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
