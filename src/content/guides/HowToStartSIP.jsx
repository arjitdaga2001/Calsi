import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, TrendingUp } from 'lucide-react';

export function HowToStartSIP() {
  return (
    <article className="guide-article-content">
      <p className="guide-lead">
        A Systematic Investment Plan (SIP) is one of the most powerful wealth creation tools available to retail investors. Instead of trying to time the market, an SIP allows you to invest a fixed amount every month into mutual funds, automatically building your corpus over time.
      </p>

      <h2>1. The Magic of Rupee Cost Averaging</h2>
      <p>
        When you invest via SIP, your money buys fewer units when the market is high and more units when the market is low. Over a long period, this averages out your purchase cost, heavily protecting you from market volatility. You don't need to be a stock market expert; you just need to be disciplined.
      </p>

      <h2>2. The Power of Compounding</h2>
      <p>
        Albert Einstein allegedly called compounding the "eighth wonder of the world." The earlier you start, the more time your returns have to generate their own returns. 
      </p>
      <div className="guide-highlight">
        <strong>Example:</strong> If you invest just ₹5,000 per month for 20 years at an expected return of 12%, your total investment is ₹12 Lakhs. But your final maturity value will be staggering <strong>₹50 Lakhs!</strong>
      </div>

      <h2>3. Steps to Start Your First SIP</h2>
      <ol>
        <li><strong>Get your KYC done:</strong> You need a PAN card, Aadhaar card, and a bank account. Most platforms do this digitally in 5 minutes.</li>
        <li><strong>Choose a Platform:</strong> You can use direct mutual fund apps like Coin by Zerodha, Groww, Kuvera, or MFUtility. Always choose "Direct Growth" plans over "Regular" plans to save on commission fees.</li>
        <li><strong>Select a Fund:</strong> For beginners, an Index Fund (like a Nifty 50 Index Fund) or a Flexi-Cap fund is usually recommended.</li>
        <li><strong>Set the Amount and Date:</strong> Start with an amount you won't miss. Even ₹500/month is enough to begin. Set the auto-deduct date 2-3 days after your salary date.</li>
      </ol>

      <div className="guide-cta-box" style={{ '--guide-cta-bg': 'var(--cat-mf)' }}>
        <div className="guide-cta-icon">
          <TrendingUp size={32} />
        </div>
        <div className="guide-cta-text">
          <h3>See the magic for yourself</h3>
          <p>Use our SIP calculator to see exactly how much wealth you can build over 5, 10, or 20 years.</p>
          <Link to="/sip" className="guide-cta-btn">
            Calculate SIP Returns <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
