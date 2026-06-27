import React from 'react';
import { Link } from 'react-router-dom';
import { Coins, CircleDollarSign, TrendingUp, ArrowRight } from 'lucide-react';
import './guides.css';

export function SGBvsPhysicalGold() {
  return (
    <article className="guide-article-content">
      <section className="guide-section">
        <p className="guide-lead">
          Indians love gold. We hold over 25,000 tonnes of it in our households. For generations, buying physical gold 
          jewellery, coins, or bars has been the default method of preserving wealth. 
        </p>
        <p>
          But physical gold is an incredibly inefficient investment. By the time you account for making charges, GST, 
          and storage costs, you instantly lose 15-20% of your investment's value the moment you walk out of the jewelry store. 
          To solve this, the Government of India introduced <strong>Sovereign Gold Bonds (SGBs)</strong>.
        </p>
      </section>

      <section className="guide-section">
        <h2>What are Sovereign Gold Bonds (SGBs)?</h2>
        <p>
          SGBs are government securities denominated in grams of gold. They are issued by the Reserve Bank of India (RBI) 
          on behalf of the Government of India. Instead of holding a physical gold coin, you hold a digital certificate 
          that guarantees you the exact market value of that gold upon maturity.
        </p>
      </section>

      <section className="guide-section">
        <h2>The 4 Reasons SGBs Destroy Physical Gold as an Investment</h2>
        
        <h3>1. The Extra 2.5% Annual Interest</h3>
        <p>
          Physical gold just sits in a locker. It generates no cash flow. An SGB, on the other hand, pays you a 
          <strong> guaranteed 2.5% annual interest</strong> on your initial investment amount, paid out semi-annually 
          directly to your bank account.
        </p>

        <h3>2. Zero Making Charges and GST</h3>
        <p>
          When you buy physical gold, you pay 3% GST and anywhere from 10% to 20% in making charges. If you buy ₹1 Lakh 
          worth of gold jewelry, you only get about ₹85,000 worth of actual gold. SGBs have <strong>zero making charges 
          and zero GST</strong>. 100% of your money goes into the gold asset.
        </p>

        <h3>3. 100% Tax-Free Capital Gains</h3>
        <p>
          This is the most powerful feature of SGBs. If you buy physical gold or a Gold Mutual Fund and sell it at a profit 
          after 3 years, you have to pay Capital Gains Tax. However, if you hold an SGB until its maturity (8 years), 
          <strong>the entire capital gain is completely tax-free!</strong>
        </p>

        <h3>4. Sovereign Guarantee & No Storage Costs</h3>
        <p>
          Physical gold requires bank lockers, insurance, and constant fear of theft. SGBs are held in your digital Demat 
          account. Furthermore, because they are issued by the RBI, they carry a sovereign guarantee, meaning there is zero 
          risk of default.
        </p>
      </section>

      <section className="guide-section">
        <h2>SGB vs Physical Gold vs Gold ETFs</h2>
        
        <div className="table-responsive">
          <table className="guide-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Sovereign Gold Bonds (SGB)</th>
                <th>Physical Gold</th>
                <th>Gold ETF / Digital Gold</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Annual Income</strong></td>
                <td><strong>2.5% Interest per year</strong></td>
                <td>None</td>
                <td>None</td>
              </tr>
              <tr>
                <td><strong>Capital Gains Tax</strong></td>
                <td><strong>Zero (if held to maturity)</strong></td>
                <td>Taxable as per slab or LTCG</td>
                <td>Taxable as STCG / LTCG</td>
              </tr>
              <tr>
                <td><strong>GST & Making Charges</strong></td>
                <td><strong>Zero</strong></td>
                <td>10-25%</td>
                <td>Expense Ratios (~0.5%)</td>
              </tr>
              <tr>
                <td><strong>Liquidity</strong></td>
                <td>Low (Lock-in of 5 years, though tradable on exchange)</td>
                <td>High (Can be sold anywhere)</td>
                <td>Very High (Instant sell)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h2>The Catch: Liquidity and Lock-in</h2>
        <p>
          SGBs have a maturity period of 8 years. You can redeem them with the RBI prematurely after the 5th year. 
          While SGBs are listed on the stock exchange and can be sold earlier, the trading volumes are often low, 
          meaning you might have to sell them at a slight discount to the market price if you need emergency cash.
        </p>
        <p>
          Therefore, SGBs are best used for long-term goals (like a child's marriage or retirement hedging) where 
          you are absolutely certain you won't need the money for 5 to 8 years.
        </p>

        <div className="guide-alert info">
          <strong>Pro Tip:</strong> Buy SGBs from the secondary market (on Zerodha/Groww) rather than during the RBI's primary issuance. Often, you can buy SGBs at a 2-4% discount to the actual gold price because desperate sellers are willing to take a haircut for liquidity!
        </div>
      </section>
    </article>
  );
}
