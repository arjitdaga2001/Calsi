import { Link } from 'react-router-dom';
import {
  TrendingUp, BarChart2, RefreshCw, Activity,
  Landmark, Archive,
  Briefcase, Building2, PiggyBank,
  CreditCard, Percent, FileText,
  ArrowRight,
} from 'lucide-react';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import './home.css';

const groups = [
  {
    id: 'mf',
    label: 'Mutual Funds & SIP',
    color: 'var(--cat-mf)',
    items: [
      { name: 'SIP (Monthly MF)', path: '/sip',       icon: <TrendingUp size={24} strokeWidth={2.5} />, desc: 'Monthly mutual fund investment' },
      { name: 'Lumpsum',          path: '/lumpsum',   icon: <BarChart2  size={24} strokeWidth={2.5} />, desc: 'One-time investment growth' },
      { name: 'SWP Calculator',   path: '/swp',       icon: <RefreshCw  size={24} strokeWidth={2.5} />, desc: 'Systematic Withdrawal Plan' },
      { name: 'MF Returns',       path: '/mf-returns',icon: <Activity   size={24} strokeWidth={2.5} />, desc: 'Mutual fund return estimator' },
    ],
  },
  {
    id: 'dep',
    label: 'Deposits',
    color: 'var(--cat-dep)',
    items: [
      { name: 'FD Calculator',    path: '/fd', icon: <Landmark size={24} strokeWidth={2.5} />, desc: 'Fixed deposit maturity value' },
      { name: 'RD Calculator',    path: '/rd', icon: <Archive  size={24} strokeWidth={2.5} />, desc: 'Recurring deposit maturity' },
    ],
  },
  {
    id: 'govt',
    label: 'Government Schemes',
    color: 'var(--cat-govt)',
    items: [
      { name: 'PPF Calculator',   path: '/ppf', icon: <Briefcase  size={24} strokeWidth={2.5} />, desc: 'Public Provident Fund' },
      { name: 'EPF Calculator',   path: '/epf', icon: <Building2  size={24} strokeWidth={2.5} />, desc: 'Employee Provident Fund' },
      { name: 'SSY Calculator',   path: '/ssy', icon: <PiggyBank  size={24} strokeWidth={2.5} />, desc: 'Sukanya Samriddhi Yojana' },
    ],
  },
  {
    id: 'loan',
    label: 'Loans & Tax',
    color: 'var(--cat-loan)',
    items: [
      { name: 'EMI Calculator',   path: '/emi',  icon: <CreditCard size={24} strokeWidth={2.5} />, desc: 'Loan EMI & interest' },
      { name: 'GST Calculator',   path: '/gst',  icon: <Percent    size={24} strokeWidth={2.5} />, desc: 'Goods & Services Tax' },
      { name: 'XIRR Calculator',  path: '/xirr', icon: <FileText   size={24} strokeWidth={2.5} />, desc: 'Extended IRR calculation' },
    ],
  },
];

export function Home() {
  useDocumentMetadata(
    'Calsi – Smart Financial Calculators',
    'Free financial calculators for SIP, FD, RD, PPF, EPF, EMI and more. Plan your investments smarter.'
  );

  return (
    <div className="home-wrap">

      {/* ── Top Navbar ── */}
      <nav className="home-navbar" aria-label="Main Navigation">
        <div className="home-navbar-inner">
          <div className="home-brand">
            <span className="home-brand-name">Calsi</span>
          </div>
        </div>
      </nav>

      <main role="main">
        {/* ── Spectacular Hero ── */}
        <header className="home-hero">
          <div className="home-hero-inner animate-fade-up">
            <h1 className="home-hero-title">Calculators</h1>
            <p className="home-hero-sub">
              Free, institutional-grade tools to master your investments, optimize your loans, and architect your tax strategy.
            </p>
          </div>
        </header>

        {/* ── Calculator Groups ── */}
        <section className="home-content" aria-label="Calculator Categories">
          <div className="home-content-inner">
            {groups.map(group => (
              <article key={group.id} className="home-group" aria-labelledby={`group-title-${group.id}`}>
                <div className="home-group-header">
                  <span className="home-group-dot" style={{ background: group.color }} aria-hidden="true" />
                  <h2 id={`group-title-${group.id}`} className="home-group-title" style={{ color: group.color }}>
                    {group.label}
                  </h2>
                </div>

                <nav className="home-grid" aria-label={`${group.label} Calculators`}>
                  {group.items.map(calc => (
                    <Link
                      key={calc.path}
                      to={calc.path}
                      className="calc-card"
                      aria-label={`Go to ${calc.name} calculator`}
                      style={{
                        '--c-color': group.color,
                      }}
                    >
                      <div className="calc-icon" aria-hidden="true">
                        {calc.icon}
                      </div>
                      <div className="calc-info">
                        <h3 className="calc-name">{calc.name}</h3>
                        <p  className="calc-desc">{calc.desc}</p>
                      </div>
                      <ArrowRight size={16} strokeWidth={2.5} className="calc-arrow" aria-hidden="true" />
                    </Link>
                  ))}
                </nav>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="home-footer" role="contentinfo">
        <div className="home-footer-inner" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '32px' }}>
          
          {/* SEO Popular Links */}
          <nav className="home-footer-popular" style={{ width: '100%', borderBottom: '1px dashed var(--border-color)', paddingBottom: '24px' }} aria-label="Popular Home Loan Links">
            <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-secondary)', marginBottom: '16px' }}>Popular Tools</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px 24px' }}>
              <Link to="/emi/20-lakh-home-loan-20-years" className="footer-seo-link">₹20 Lakh Home Loan EMI for 20 Years</Link>
              <Link to="/emi/30-lakh-home-loan-20-years" className="footer-seo-link">₹30 Lakh Home Loan EMI</Link>
              <Link to="/emi/50-lakh-home-loan-20-years" className="footer-seo-link">₹50 Lakh Home Loan EMI</Link>
              <Link to="/emi/1-crore-home-loan-20-years" className="footer-seo-link">₹1 Crore Home Loan EMI</Link>
            </div>
          </nav>

          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <span className="home-footer-copy">© 2026 Calsi. All rights reserved.</span>
            <nav className="home-footer-links" aria-label="Legal Links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-conditions">Terms &amp; Conditions</Link>
            </nav>
          </div>
        </div>
      </footer>

    </div>
  );
}
