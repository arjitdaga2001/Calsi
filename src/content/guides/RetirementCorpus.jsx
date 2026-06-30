import { Link } from 'react-router-dom';
import { ArrowRight, Sunset } from 'lucide-react';

export function RetirementCorpus() {
  return (
    <article className="guide-article-content">
      <p className="guide-lead">
        The traditional wealth management industry fundamentally relies on the proliferation of "The Number"—a static, often arbitrary milestone figure aggressively marketed as the threshold for a comfortable retirement. Whether it is ₹5 Crores or ₹10 Crores, reducing retirement planning to a single nominal target represents a severe analytical failure. A robust retirement architecture must mathematically account for the dynamic, highly destructive variables of structural inflation, longevity risk, and sequence-of-returns volatility.
      </p>

      <h2>1. The Demise of the 4% Rule in Emerging Markets</h2>
      <p>
        The cornerstone of global retirement planning is the "Trinity Study," a 1998 paper which concluded that a retiree could withdraw 4% of their initial portfolio value annually (adjusted upward for inflation every year) for a 30-year period without capital depletion. This became globally enshrined as the "Safe Withdrawal Rate."
      </p>
      <p>
        However, the Trinity Study was back-tested exclusively on United States historical data—an economy characterized by long periods of low structural inflation (2-3%) and low-interest rates. Applying a 4% initial withdrawal rate in an emerging market like India is a mathematical hazard.
      </p>
      <p>
        India experiences structurally higher inflation (averaging 5.5% to 7%) alongside significantly higher volatility in equity and bond yields. If an Indian retiree attempts to increase their withdrawal by 7% every year to match inflation, while simultaneously suffering a 20% equity drawdown early in their retirement, the portfolio enters an irreversible "death spiral." For Indian parameters, quantitative analysts increasingly suggest a highly conservative Safe Withdrawal Rate closer to <strong>2.5% to 3.2%</strong>.
      </p>

      <h2>2. Inflation: The Exponential Wealth Destroyer</h2>
      <p>
        The single greatest threat to a retiree is not an equity market crash; it is the silent, compounding erosion of purchasing power caused by inflation. The human brain struggles to comprehend exponential functions intuitively, leading to severe underestimations of future liabilities.
      </p>
      <p>
        Consider a household currently sustaining a comfortable lifestyle on ₹1,00,000 per month. If this individual is 15 years away from retirement, applying a modest 6% annual inflation rate means that at the exact moment of retirement, that identical lifestyle will cost roughly <strong>₹2,40,000 per month</strong>. 
      </p>
      <p>
        But the calculation does not stop there. If the retiree survives for 25 years post-retirement, their monthly requirement in the final year of their life will balloon to an astonishing <strong>₹10,30,000 per month</strong>. The retirement corpus must be massive enough to generate an exponentially increasing annuity payout for decades, without the underlying principal collapsing.
      </p>

      <h2>3. Modeling the Target: The Liability Matching Framework</h2>
      <p>
        To compute an accurate terminal corpus requirement, one must move from heuristics to rigorous deterministic modeling. The core equation requires establishing the "Real Return" of the portfolio. 
      </p>
      <div className="guide-highlight">
        <strong>The Real Return Equation:</strong> <br/>
        Real Return = ((1 + Nominal Portfolio Return) / (1 + Inflation Rate)) - 1
        <br/><br/>
        If your retirement portfolio (a mix of debt and equity) yields a nominal 9% CAGR, and inflation is 6%, your <em>Real Return</em> is barely 2.83%. Your corpus is only truly growing by 2.83% in purchasing power terms.
      </div>
      <p>
        With a Real Return of 2.83%, generating an inflation-adjusted payout for 30 years requires a baseline corpus equivalent to approximately <strong>30 to 35 times your annual expenses <em>at the time of retirement</em></strong>.
      </p>
      <p>
        Using the previous example: If year-one retirement expenses are ₹28.8 Lakhs annually (₹2.4L/month), applying a 33x multiplier dictates a target corpus of roughly <strong>₹9.5 Crores</strong>. While this nominal figure appears staggering, a disciplined SIP compounding in high-yield equity assets over 15-20 years is mathematically engineered to achieve it.
      </p>

      <h2>4. Mitigating Sequence of Returns Risk (SRR)</h2>
      <p>
        The final pillar of a robust retirement framework is navigating Sequence of Returns Risk. SRR is the danger that a severe market crash occurs in the first 2-3 years immediately following your retirement. 
      </p>
      <p>
        If your ₹10 Crore portfolio is heavily allocated to equities, and the market crashes 30% in Year 1, your corpus drops to ₹7 Crores. You are then forced to withdraw ₹30 Lakhs for living expenses by liquidating assets at distressed, rock-bottom valuations. Your portfolio is now permanently impaired and mathematically incapable of recovering, even if the market subsequently rallies.
      </p>
      <h3>The Bucket Strategy Solution:</h3>
      <p>
        To immunize against SRR, institutional asset managers employ a "Bucket Strategy" as the retirement date approaches:
      </p>
      <ul>
        <li><strong>Bucket 1 (Immediate Liquidity):</strong> Contains 3 to 5 years’ worth of living expenses strictly in ultra-safe, highly liquid assets like Liquid Mutual Funds, Arbitrage Funds, and Bank FDs. This ensures you are never forced to sell equities during a crash.</li>
        <li><strong>Bucket 2 (Income Generation):</strong> Contains 5 to 7 years of expenses in moderate-yield, low-volatility assets like Corporate Bond Funds, Sovereign Gold Bonds (SGBs), and Senior Citizen Savings Schemes (SCSS).</li>
        <li><strong>Bucket 3 (Long-Term Growth):</strong> The remaining capital remains aggressively deployed in diversified Equity Index Funds to combat long-term inflation and provide multi-decadal growth.</li>
      </ul>

      <h2>5. Actionable Implementation</h2>
      <p>
        Retirement planning is fundamentally an exercise in liability matching. You must accurately project your future cash flow requirements and reverse-engineer the exact monthly capital allocation required to fund that liability. Guesswork will result in catastrophic capital depletion.
      </p>

      <div className="guide-cta-box" style={{ '--guide-cta-bg': 'var(--cat-mf)' }}>
        <div className="guide-cta-icon">
          <Sunset size={32} />
        </div>
        <div className="guide-cta-text">
          <h3>Compute Your Exact Liability Matrix</h3>
          <p>Input your current lifestyle burn rate, expected inflation trajectory, and investment timeline. Our deterministic Retirement Planner will output the precise, mathematically sound corpus required for infinite sustainability.</p>
          <Link to="/calculators/retirement-calculator" className="guide-cta-btn">
            Open Retirement Planner <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
