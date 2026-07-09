import React from 'react';
import { AdSlot } from '../../components/AdSlot';

export function TaxHarvestingStrategy2026() {
  return (
    <>
      <div className="guide-article-content">
        <p className="guide-intro">
          Under the new capital gains taxation framework introduced for 2026, the tax-free limit on Long-Term Capital Gains (LTCG) from equities and equity-oriented mutual funds was raised to ₹1.25 Lakhs per financial year. While many investors see this as a cap, intelligent investors see it as an annual opportunity. This strategy is called <strong>Tax-Loss Harvesting and Gain Stripping</strong>.
        </p>

        <div className="guide-highlight">
          <strong>The Core Concept:</strong> If you don't book ₹1.25 Lakhs of profit every year, you lose that tax-free limit forever. It does not carry forward to the next financial year.
        </div>

        <h2>How "Gain Stripping" Works in Practice</h2>
        <p>
          Assume you have a mutual fund portfolio that has grown by ₹3 Lakhs over the last 3 years. If you hold it for another 5 years and then sell it all at once, your total profit might be ₹10 Lakhs. In that year, you will get a ₹1.25 Lakh exemption, and you will pay a flat 12.5% tax on the remaining ₹8.75 Lakhs. This results in a massive tax bill of <strong>₹1,09,375</strong>.
        </p>
        <p>
          Instead, you should practice Gain Stripping:
        </p>
        <ul>
          <li><strong>Step 1:</strong> At the end of March every year, check your portfolio for units that have completed 365 days (qualifying for LTCG).</li>
          <li><strong>Step 2:</strong> Calculate exactly how many units you need to sell to book a profit of exactly ₹1.24 Lakhs.</li>
          <li><strong>Step 3:</strong> Sell those units. You pay <strong>Zero Tax</strong> because it is under the ₹1.25L threshold.</li>
          <li><strong>Step 4:</strong> Immediately reinvest the entire amount back into the same mutual fund on the same day (or next day).</li>
        </ul>
        
        <AdSlot />

        <h2>The Power of Stepping Up Your Acquisition Cost</h2>
        <p>
          When you sell and immediately rebuy, your overall portfolio value remains identical. However, in the eyes of the Income Tax Department, your <em>Cost of Acquisition</em> (the price you bought it at) has now been stepped up to the current market price. 
        </p>
        <p>
          By doing this every single year, you are essentially "resetting" your profit to zero annually, legally extracting ₹1.25 Lakhs of tax-free wealth compounding year after year. Over a 20-year investing journey, this simple 10-minute exercise every March can save you upwards of <strong>₹3.5 Lakhs to ₹5 Lakhs</strong> in total capital gains taxes.
        </p>

        <h2>Tax-Loss Harvesting: Offsetting Your Gains</h2>
        <p>
          What if you need to withdraw ₹5 Lakhs of profit for a financial emergency? You will inevitably breach the ₹1.25 Lakh threshold and have to pay 12.5% tax.
        </p>
        <p>
          This is where Tax-Loss Harvesting comes in. If you have any underperforming stocks or mutual funds in your portfolio that are currently sitting at a loss, you can sell them in the same financial year. The Income Tax laws allow you to <strong>set off</strong> Long-Term Capital Losses (LTCL) against Long-Term Capital Gains.
        </p>
        <p>
          If you book a ₹2 Lakh profit, but also sell a bad stock to book a ₹1 Lakh loss, your net taxable gain is only ₹1 Lakh. Since this is below the ₹1.25L limit, your tax liability drops back to absolutely zero.
        </p>
        
        <div className="guide-highlight" style={{ borderColor: 'var(--accent-green)', background: 'rgba(16, 185, 129, 0.05)' }}>
          <strong>Pro Tip:</strong> You can carry forward unadjusted Long-Term Capital Losses for up to 8 subsequent assessment years. So if you have a terrible year in the stock market, booking the loss on paper can shield your future profits from taxes for nearly a decade!
        </div>

        <h2>Conclusion</h2>
        <p>
          Tax optimization is not tax evasion. Leveraging the ₹1.25 Lakh exemption through annual gain stripping is a mathematically sound strategy recommended by every top-tier wealth manager in India. Remember to execute this strategy before March 31st each financial year, and always consult with a certified Chartered Accountant to ensure precise compliance.
        </p>
      </div>
    </>
  );
}
