import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const homeLoanAmounts = [10, 15, 20, 25, 30, 40, 50, 75]; // Lakhs
const homeLoanTenures = [10, 15, 20]; // Years

export function PopularHomeLoans() {
  return (
    <section className="calc-faq" style={{ marginTop: '32px' }}>
      <h2>Popular Home Loan EMI Searches (2026)</h2>
      <div className="popular-links-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
        {homeLoanAmounts.flatMap(amount =>
          homeLoanTenures.map(tenure => (
            <Link
              key={`${amount}-${tenure}`}
              to={`/emi/${amount}-lakh-home-loan-${tenure}-years`}
              className="popular-link-tile"
              style={{ padding: '12px', background: 'var(--surface-color)', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '13px', color: 'var(--accent-blue)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', transition: 'all 0.2s', boxShadow: 'var(--shadow-sm)' }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent-blue)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.transform = 'none'; }}
            >
              ₹{amount} Lakh for {tenure} Years <ArrowRight size={14} />
            </Link>
          ))
        )}
      </div>
    </section>
  );
}

const sipAmounts = [1000, 2000, 5000, 10000, 15000, 20000, 25000, 50000];
const sipTenures = [5, 10, 15, 20, 25];

export function PopularSIPs() {
  return (
    <section className="calc-faq" style={{ marginTop: '32px' }}>
      <h2>Most Searched SIP Investments (2026)</h2>
      <div className="popular-links-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
        {sipAmounts.flatMap(amount =>
          sipTenures.map(tenure => (
            <Link
              key={`${amount}-${tenure}`}
              to={`/sip/${amount}-sip-for-${tenure}-years`}
              className="popular-link-tile"
              style={{ padding: '12px', background: 'var(--surface-color)', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '13px', color: 'var(--accent-blue)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', transition: 'all 0.2s', boxShadow: 'var(--shadow-sm)' }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent-blue)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.transform = 'none'; }}
            >
              ₹{amount.toLocaleString('en-IN')} SIP for {tenure} Yrs <ArrowRight size={14} />
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
