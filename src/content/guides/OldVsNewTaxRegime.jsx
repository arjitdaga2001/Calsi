import { Link } from 'react-router-dom';
import { ArrowRight, Calculator } from 'lucide-react';

export function OldVsNewTaxRegime() {
  return (
    <article className="guide-article-content">
      <p className="guide-lead">
        The Indian macroeconomic landscape has witnessed a paradigm shift in taxation philosophy over the last few fiscal years. The introduction of the simplified tax framework has forced every salaried professional and business owner into a complex annual dilemma: optimizing between the heavily deduction-reliant Old Tax Regime and the streamlined, lower-rate New Tax Regime.
      </p>

      <h2>1. The Philosophical Divergence in Tax Policy</h2>
      <p>
        Historically, the Indian tax code was designed not just for revenue collection, but as an instrument for capital allocation. By offering exemptions under sections like 80C, 80D, and 24B, the government essentially subsidized specific behaviors: saving for retirement (EPF/PPF), purchasing health insurance, and investing in real estate. While effective for capital formation, this created an incredibly convoluted tax code characterized by high compliance costs and litigation.
      </p>
      <p>
        The introduction of the New Tax Regime signifies a structural pivot toward consumer liquidity. By stripping away approximately 70 exemptions and replacing them with significantly lower marginal tax rates, the government is returning discretionary capital to the taxpayer. The economic thesis is simple: individuals are better capital allocators than the state. By maximizing take-home pay, the government hopes to stimulate aggregate demand and consumption, which in turn fuels economic growth.
      </p>
      <p>
        For the taxpayer, however, this philosophical shift demands rigorous quantitative analysis. The "better" regime is no longer a matter of general advice; it is a highly individualized mathematical output dependent on specific cash flows, investment velocity, and risk tolerance.
      </p>

      <h2>2. Analyzing the Marginal Tax Slabs for FY 2025-26</h2>
      <p>
        Before conducting a comparative analysis, one must understand the precise marginal rate differentials. The New Tax Regime has been heavily incentivized in recent budgets to encourage mass migration, culminating in a structure that is highly advantageous for the middle-income demographic.
      </p>
      <div className="guide-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Income Bracket (₹)</th>
              <th>New Regime Tax Rate</th>
              <th>Old Regime Tax Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>0 to 3,00,000</td><td>Nil</td><td>Nil (Up to 2.5L)</td></tr>
            <tr><td>3,00,001 to 6,00,000</td><td>5%</td><td>5% (2.5L to 5L)</td></tr>
            <tr><td>6,00,001 to 9,00,000</td><td>10%</td><td>20% (5L to 10L)</td></tr>
            <tr><td>9,00,001 to 12,00,000</td><td>15%</td><td>20%</td></tr>
            <tr><td>12,00,001 to 15,00,000</td><td>20%</td><td>30% (Above 10L)</td></tr>
            <tr><td>Above 15,00,000</td><td>30%</td><td>30%</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Crucially, the standard deduction of ₹50,000 has been extended to the New Regime for salaried employees. Furthermore, the rebate under Section 87A ensures that individuals with a taxable income of up to ₹7 Lakhs under the New Regime effectively pay zero income tax. Under the Old Regime, this rebate caps out at a taxable income of ₹5 Lakhs.
      </p>

      <h2>3. The Breakeven Calculus: When Deductions Justify the Old Regime</h2>
      <p>
        The mathematical inflection point between the two systems is determined by the total volume of eligible deductions a taxpayer can legitimately claim. Because the Old Regime applies higher marginal rates, the taxpayer must aggressively shrink their taxable base to achieve parity with the New Regime.
      </p>
      <p>
        Based on quantitative modeling across various income brackets, the "breakeven point" typically hovers between ₹3.75 Lakhs and ₹4.25 Lakhs in total deductions. If your total eligible deductions exceed this threshold, the Old Regime preserves wealth. If they fall short, the New Regime is mathematically superior.
      </p>
      <h3>Components of a High-Deduction Portfolio:</h3>
      <ul>
        <li><strong>Section 80C (₹1.5 Lakhs):</strong> The cornerstone of Indian tax planning, encompassing Employee Provident Fund (EPF), Public Provident Fund (PPF), Equity Linked Savings Schemes (ELSS), and Life Insurance Premiums. Fully exhausting this limit is generally considered a baseline requirement for the Old Regime to remain competitive.</li>
        <li><strong>House Rent Allowance (HRA):</strong> For residents of metropolitan areas paying substantial rent, the HRA exemption acts as a massive shield against taxable income. This is often the deciding variable. Taxpayers residing in owned properties (with no rent outflow) find it exceedingly difficult to justify the Old Regime.</li>
        <li><strong>Section 24B (Home Loan Interest - up to ₹2 Lakhs):</strong> Servicing debt on a self-occupied property provides a significant deduction. When combined with the principal repayment under 80C, a home loan heavily tilts the scale toward the Old Regime.</li>
        <li><strong>Section 80D (Health Insurance - up to ₹75,000):</strong> Premiums paid for self, family, and senior citizen parents provide additional, highly necessary tax arbitrage.</li>
      </ul>

      <h2>4. The Liquidity Premium of the New Regime</h2>
      <p>
        While the Old Regime may theoretically offer lower tax outflows for a highly leveraged individual (e.g., someone maximizing HRA, 80C, and a home loan), one must factor in the <em>opportunity cost of liquidity</em>. 
      </p>
      <p>
        To claim ₹1.5 Lakhs under 80C, an investor might lock their capital into a 15-year PPF yielding 7.1%, or a 5-year tax-saving fixed deposit yielding 6.5%. These are low-velocity, low-yield assets. The New Regime liberates this capital. By accepting a slightly higher tax outflow, the taxpayer retains the liquidity to deploy that capital into high-growth, non-tax-deductible instruments, such as direct equity portfolios, small-cap mutual funds, or alternative investment funds (AIFs) which historically offer a superior long-term Compound Annual Growth Rate (CAGR).
      </p>
      <div className="guide-highlight">
        <strong>The Liquidity Arbitrage:</strong> If the post-tax return on liquid equity investments exceeds the tax savings generated by locking capital into low-yield 80C instruments, the New Regime is economically optimal, even if the absolute tax paid is marginally higher.
      </div>

      <h2>5. Case Studies: Simulating Tax Outcomes</h2>
      <p>
        To move beyond theoretical abstraction, let us model two distinct financial profiles:
      </p>
      <h3>Profile A: The Early-Career Professional</h3>
      <p>
        Income: ₹9,00,000. Deductions: Standard Deduction (₹50k), EPF Contribution (₹40k), No Home Loan, No Rent (Living with parents).
        <br/>Under the Old Regime, the taxable income is ₹8.1 Lakhs, resulting in a tax liability of roughly ₹77,480. 
        <br/>Under the New Regime, the standard deduction brings the income to ₹8.5 Lakhs. The tax liability drops to approximately ₹41,600. The lack of structured deductions makes the New Regime the clear winner, generating over ₹35,000 in immediate liquidity.
      </p>

      <h3>Profile B: The Mid-Career Homeowner</h3>
      <p>
        Income: ₹18,00,000. Deductions: Standard Deduction (₹50k), fully maximized 80C (₹1.5L), Health Insurance 80D (₹25k), and Home Loan Interest under 24B (₹2L). Total Deductions = ₹4.25 Lakhs.
        <br/>Under the Old Regime, the taxable income drops to ₹13.75 Lakhs. The tax liability is approximately ₹2,34,000.
        <br/>Under the New Regime, only the standard deduction applies, leaving a taxable income of ₹17.5 Lakhs. The tax liability escalates to ₹2,80,800. Here, the aggressive utilization of statutory deductions secures a massive ₹46,800 tax saving under the Old Regime.
      </p>

      <h2>6. Strategic Conclusion and Next Steps</h2>
      <p>
        Tax planning should never be conducted in a vacuum; it is merely one component of comprehensive wealth architecture. The transition to the New Regime is inevitable, as successive budgets clearly indicate a policy preference for a deduction-free, low-rate environment. However, as long as the dual system exists, taxpayers must conduct a rigorous NPV (Net Present Value) analysis of their cash flows every financial year.
      </p>
      <p>
        Do not rely on generalized heuristics. The precise intersection of your gross income and your specific deduction profile dictates the optimal path. We highly recommend utilizing a computational tool to run the exact numbers before committing to a regime declaration with your employer.
      </p>

      <div className="guide-cta-box" style={{ '--guide-cta-bg': '#2563eb' }}>
        <div className="guide-cta-icon">
          <Calculator size={32} />
        </div>
        <div className="guide-cta-text">
          <h3>Compute Your Exact Tax Liability</h3>
          <p>Deploy our institutional-grade Income Tax Calculator to run a side-by-side quantitative analysis of both regimes. Input your salary and deductions to instantly determine your optimal tax strategy.</p>
          <Link to="/calculators/income-tax-calculator" className="guide-cta-btn">
            Open Income Tax Calculator <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
