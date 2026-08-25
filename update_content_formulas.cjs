const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'src', 'content');

const formulaMap = {
  TermInsuranceContent: `
      <section className="calc-faq" style={{ marginTop: '24px', background: 'var(--surface-color)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '12px' }}>🧮 Term Insurance Formula & Calculation Guide</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
          Term insurance coverage is computed using the standard <strong>Human Life Value (HLV)</strong> discounting model. It estimates the present value of income needed to support your family's future expenses and liabilities until your planned retirement age, adjusted for inflation:
        </p>
        <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '13.5px', color: 'var(--accent-blue)', overflowX: 'auto', marginBottom: '16px' }}>
          <strong>HLV = ∑ [ (Annual Income × (1 + Inflation Rate)^t) / (1 + Discount Rate)^t ] - Existing Cover</strong>
        </div>
        <ul style={{ fontSize: '13.5px', color: 'var(--text-secondary)', paddingLeft: '20px', lineHeight: '1.6' }}>
          <li><strong>Annual Income:</strong> Your current net annual take-home income.</li>
          <li><strong>Years to Retirement:</strong> Number of remaining active earning years (Retirement Age - Current Age).</li>
          <li><strong>Inflation Adjustment:</strong> Expected cost of living increase (typically 5% - 7% per annum in India).</li>
          <li><strong>Net Additional Cover:</strong> Minimum total cover required minus any active, existing term policies.</li>
        </ul>
      </section>
  `,
  ULIPContent: `
      <section className="calc-faq" style={{ marginTop: '24px', background: 'var(--surface-color)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '12px' }}>🧮 ULIP Return & Fund Maturity Formula Guide</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
          ULIP maturity value is calculated by compounding net allocated premiums after deducting mortality and administrative charges, then applying the net fund return (R_net = Market Return - Fund Management Charge):
        </p>
        <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '13.5px', color: 'var(--accent-blue)', overflowX: 'auto', marginBottom: '16px' }}>
          <strong>Net Premium (t) = Gross Annual Premium × (1 - Premium Allocation Charge %) - Annual Mortality Charge</strong><br/>
          <strong>Maturity Value = ∑ [ Net Premium (t) × (1 + R_net)^(Tenure - t) ]</strong>
        </div>
        <ul style={{ fontSize: '13.5px', color: 'var(--text-secondary)', paddingLeft: '20px', lineHeight: '1.6' }}>
          <li><strong>Gross Premium:</strong> Total annual installment paid toward the policy.</li>
          <li><strong>FMC (Fund Management Charge):</strong> IRDAI-capped fee (up to 1.35% p.a.) deducted daily from Fund Net Asset Value (NAV).</li>
          <li><strong>Mortality Charge:</strong> Risk premium deducted for the life cover portion based on your age bracket.</li>
        </ul>
      </section>
  `,
  HealthInsuranceContent: `
      <section className="calc-faq" style={{ marginTop: '24px', background: 'var(--surface-color)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '12px' }}>🧮 Health Insurance Premium Estimation Formula</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
          Mediclaim premium is derived using age-rated risk bands, city tier rating factors, pre-existing health condition multipliers, and statutory Goods & Services Tax (GST):
        </p>
        <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '13.5px', color: 'var(--accent-blue)', overflowX: 'auto', marginBottom: '16px' }}>
          <strong>Annual Base Premium = Base Rate(Age Band, Sum Insured) × City Multiplier × Pre-Existing Factor</strong><br/>
          <strong>Total Annual Outflow = Base Premium + (Base Premium × 18% GST)</strong>
        </div>
        <ul style={{ fontSize: '13.5px', color: 'var(--text-secondary)', paddingLeft: '20px', lineHeight: '1.6' }}>
          <li><strong>Age Band:</strong> Risk tier based on the age of the primary insured member.</li>
          <li><strong>City Tier Factor:</strong> Tier 1/Metro medical costs command a higher base premium factor.</li>
          <li><strong>GST Component:</strong> Fixed 18% statutory tax applied on total premium in India.</li>
        </ul>
      </section>
  `,
  CreditCardEMIContent: `
      <section className="calc-faq" style={{ marginTop: '24px', background: 'var(--surface-color)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '12px' }}>🧮 Credit Card EMI & Interest Calculation Formula</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
          Credit card EMI is calculated on a reducing monthly balance using the standard loan amortization formula where r is monthly interest (Annual Rate ÷ 12 / 100):
        </p>
        <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '13.5px', color: 'var(--accent-blue)', overflowX: 'auto', marginBottom: '16px' }}>
          <strong>Monthly EMI = P × r × (1 + r)^n / [ (1 + r)^n - 1 ]</strong><br/>
          <strong>Total Interest = (EMI × n) - P</strong>
        </div>
        <ul style={{ fontSize: '13.5px', color: 'var(--text-secondary)', paddingLeft: '20px', lineHeight: '1.6' }}>
          <li><strong>P (Principal):</strong> Outstanding credit card balance converted to EMI.</li>
          <li><strong>r (Monthly Interest):</strong> Annual card interest rate divided by 12 (e.g. 36% p.a. = 3% monthly).</li>
          <li><strong>n (Tenure):</strong> Total number of repayment months (e.g. 6, 12, 24 months).</li>
          <li><strong>Tax Note:</strong> 18% GST applies to the monthly interest portion & processing fees.</li>
        </ul>
      </section>
  `,
  CarLoanContent: `
      <section className="calc-faq" style={{ marginTop: '24px', background: 'var(--surface-color)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '12px' }}>🧮 Car Loan EMI & Reducing Balance Formula</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
          Auto loans are amortized monthly using the reducing balance method. Interest reduces each month as principal is paid off:
        </p>
        <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '13.5px', color: 'var(--accent-blue)', overflowX: 'auto', marginBottom: '16px' }}>
          <strong>Monthly EMI = [ P × R × (1 + R)^N ] / [ (1 + R)^N - 1 ]</strong>
        </div>
        <ul style={{ fontSize: '13.5px', color: 'var(--text-secondary)', paddingLeft: '20px', lineHeight: '1.6' }}>
          <li><strong>P:</strong> Net loan amount borrowed (On-Road Price - Down Payment).</li>
          <li><strong>R:</strong> Monthly interest rate (Annual Rate / 12 / 100).</li>
          <li><strong>N:</strong> Loan tenure in months (e.g., 5 years = 60 months).</li>
        </ul>
      </section>
  `
};

// Check all files in content directory and update them if generic disclaimer or missing formula
fs.readdirSync(contentDir).forEach(file => {
  if (file.endsWith('.jsx')) {
    const filePath = path.join(contentDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace generic disclaimer box if present
    const genericPattern = /<div style=\{\{ background: 'rgba\(59, 130, 246, 0\.1\)', borderLeft: '4px solid var\(--accent-blue\)', padding: '16px', margin: '0 auto 24px auto', borderRadius: '4px', maxWidth: '1100px', width: '100%', boxSizing: 'border-box' \}\}>[\s\S]*?<\/div>/;
    
    const calcName = file.replace('Content.jsx', '');
    const readableName = calcName.replace(/([A-Z])/g, ' $1').trim();
    
    const specificIntro = `<div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid var(--accent-blue)', padding: '16px', margin: '0 auto 24px auto', borderRadius: '4px', maxWidth: '1100px', width: '100%', boxSizing: 'border-box' }}>
        <strong>What does this calculator do?</strong> This ${readableName} Calculator provides instant, institutional-grade estimates for Indian investors and borrowers based on official RBI, SEBI, and Income Tax guidelines.
        <br/><br/>
        <strong>Example:</strong> Enter your financial values above to instantly generate an interactive breakdown, schedule, and visual chart customized to your goals.
      </div>`;

    if (genericPattern.test(content)) {
      content = content.replace(genericPattern, specificIntro);
    }
    
    // Add formula guide if defined in formulaMap and not already in file
    const compName = file.replace('.jsx', '');
    if (formulaMap[compName] && !content.includes('Formula & Calculation Guide') && !content.includes('Formula Guide')) {
      // Insert formula guide before market insights or last closing tag
      if (content.includes('<h3>Data Sources & Methodology</h3>')) {
        content = content.replace('<h3>Data Sources & Methodology</h3>', `${formulaMap[compName]}\n\n      <h3>Data Sources & Methodology</h3>`);
      } else {
        content = content.replace('</>', `${formulaMap[compName]}\n</>`);
      }
    }
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
});
