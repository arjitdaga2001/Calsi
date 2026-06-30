import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp, BarChart2, RefreshCw, Activity,
  Landmark, Archive, BookOpen,
  Briefcase, Building2, PiggyBank,
  CreditCard, Percent, FileText,
  ArrowRight, Search, ChevronDown,
  Car, Wallet, Bike, Target, Receipt, ShieldCheck, Heart, Sunset, Clock
} from 'lucide-react';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { guidesData } from '../data/guidesData';
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
    label: 'Loans & EMI',
    color: 'var(--cat-loan)',
    items: [
      { name: 'EMI Calculator',    path: '/emi',             icon: <CreditCard size={24} strokeWidth={2.5} />, desc: 'Loan EMI & interest' },
      { name: 'Home Loan',         path: '/home-loan',       icon: <Landmark   size={24} strokeWidth={2.5} />, desc: 'Housing loan EMI' },
      { name: 'Car Loan',          path: '/car-loan',        icon: <Car        size={24} strokeWidth={2.5} />, desc: 'Auto loan repayment' },
      { name: 'Personal Loan',     path: '/personal-loan',   icon: <Wallet     size={24} strokeWidth={2.5} />, desc: 'Personal loan EMI' },
      { name: 'Bike Loan',         path: '/bike-loan',       icon: <Bike       size={24} strokeWidth={2.5} />, desc: 'Two-wheeler loan EMI' },
      { name: 'Credit Card EMI',   path: '/credit-card-emi', icon: <CreditCard size={24} strokeWidth={2.5} />, desc: 'Convert outstanding to EMI' },
      { name: 'GST Calculator',    path: '/gst',             icon: <Percent    size={24} strokeWidth={2.5} />, desc: 'Goods & Services Tax' },
      { name: 'XIRR Calculator',   path: '/xirr',            icon: <FileText   size={24} strokeWidth={2.5} />, desc: 'Extended IRR calculation' },
    ],
  },
  {
    id: 'planning',
    label: 'Planning & Tax',
    color: 'var(--cat-mf)',
    items: [
      { name: 'Income Tax',           path: '/income-tax',   icon: <Receipt    size={24} strokeWidth={2.5} />, desc: 'Old vs New regime FY25' },
      { name: 'NPS Calculator',       path: '/nps',          icon: <Target     size={24} strokeWidth={2.5} />, desc: 'National Pension System' },
      { name: 'Retirement Planner',   path: '/retirement',   icon: <Sunset     size={24} strokeWidth={2.5} />, desc: 'Corpus needed to retire' },
      { name: 'LTCG Tax',             path: '/ltcg',         icon: <TrendingUp size={24} strokeWidth={2.5} />, desc: 'Capital gains tax calc' },
      { name: 'Inflation Calculator', path: '/inflation',    icon: <Activity   size={24} strokeWidth={2.5} />, desc: 'Future value of money' },
    ],
  },
  {
    id: 'insurance',
    label: 'Insurance',
    color: '#e11d48',
    items: [
      { name: 'Term Insurance',    path: '/term-insurance',   icon: <ShieldCheck size={24} strokeWidth={2.5} />, desc: 'How much cover you need' },
      { name: 'Health Insurance',  path: '/health-insurance', icon: <Heart       size={24} strokeWidth={2.5} />, desc: 'Mediclaim premium estimate' },
      { name: 'ULIP Calculator',   path: '/ulip',             icon: <BarChart2   size={24} strokeWidth={2.5} />, desc: 'Unit Linked Insurance Plan' },
    ],
  },
];

export function Home() {
  useDocumentMetadata(
    'Free Financial Calculators India | calsi.in',
    'Use free online financial calculators for SIP, EMI, PPF, FD, Income Tax & more. Plan your investments smartly with calsi.in — no login needed.'
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);

  const filteredGroups = groups.map(group => {
    return {
      ...group,
      items: group.items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    };
  }).filter(group => group.items.length > 0);

  return (
    <div className="home-wrap">
      {/* ── Top Navbar ── */}
      <nav className="home-navbar" aria-label="Main Navigation">
        <div className="home-navbar-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Link to="/" className="home-brand" style={{ textDecoration: 'none' }}>
            <img src="/logo.png" alt="CALSI.IN" style={{ height: '32px' }} />
          </Link>
          <Link to="/articles" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'transparent',
            color: 'var(--text-color)',
            padding: '8px 16px',
            borderRadius: '100px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '0.9rem',
            border: '1px solid var(--border-color)'
          }}>
            <BookOpen size={16} /> Guides & Articles
          </Link>
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
            <div className="home-search-container">
              <Search className="home-search-icon" size={20} />
              <input 
                type="text" 
                className="home-search-input" 
                placeholder="Search calculators..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                aria-label="Search calculators"
              />
            </div>
          </div>
        </header>

        {/* ── Calculator Groups ── */}
        <section className="home-content" aria-label="Calculator Categories">
          <div className="home-content-inner">
            {filteredGroups.length > 0 ? (
              <div className="home-category-accordion">
                {filteredGroups.map((group, index) => {
                  const isExpanded = expandedCategory === group.id || searchQuery.length > 0;
                  // Get a generic icon for the category based on its first item, or predefined
                  const categoryIcon = group.items[0]?.icon;
                  
                  return (
                    <article 
                      key={group.id} 
                      className={`cat-accordion-card ${isExpanded ? 'expanded' : ''}`}
                      style={{ '--c-color': group.color, animationDelay: `${index * 0.1}s` }}
                    >
                      <button 
                        className="cat-accordion-header" 
                        onClick={() => setExpandedCategory(isExpanded && !searchQuery ? null : group.id)}
                        aria-expanded={isExpanded}
                      >
                        <div className="cat-accordion-icon">
                          {categoryIcon}
                        </div>
                        <div className="cat-accordion-info">
                          <h2 className="cat-accordion-title">{group.label}</h2>
                          <p className="cat-accordion-sub">{group.items.length} Tools Available</p>
                          <p className="cat-accordion-tools-list" title={group.items.map(i => i.name).join(', ')}>
                            {group.items.map(i => i.name).join(' • ')}
                          </p>
                        </div>
                      </button>
                      
                      <div className="cat-accordion-content">
                        <div style={{ width: '100%', height: '1px', background: 'var(--border-color)', marginBottom: '20px' }} />
                        <nav className="home-grid" aria-label={`${group.label} Calculators`}>
                          {group.items.map(calc => (
                            <Link
                              key={calc.path}
                              to={calc.path}
                              className="calc-card"
                              aria-label={`Go to ${calc.name} calculator`}
                              style={{ '--c-color': group.color }}
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
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="home-no-results">
                No calculators found matching "{searchQuery}".
              </div>
            )}
          </div>
        </section>
        {/* ── Latest Insights ── */}
        <section className="home-content" aria-label="Latest Financial Insights" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
          <div className="home-content-inner">
            <div className="home-group-header" style={{ marginBottom: '8px' }}>
              <span className="home-group-dot" style={{ background: 'var(--accent-blue)' }} aria-hidden="true" />
              <h2 className="home-group-title" style={{ color: 'var(--accent-blue)' }}>Latest Financial Insights</h2>
            </div>
            
            <div className="home-grid">
              {guidesData.slice(0, 6).map(guide => (
                <Link key={guide.slug} to={`/articles/${guide.slug}`} className="calc-card" style={{ '--c-color': 'var(--accent-blue)', flexDirection: 'column', alignItems: 'flex-start', padding: '24px', gap: '16px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--accent-blue)', letterSpacing: '0.5px' }}>
                    {guide.category}
                  </div>
                  <h3 className="calc-name" style={{ fontSize: '17px', lineHeight: '1.4', margin: 0 }}>{guide.title}</h3>
                  <p className="calc-desc" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden', margin: 0 }}>{guide.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: 'auto', paddingTop: '8px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      <Clock size={14} /> {guide.readTime}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: 'var(--accent-blue)', fontWeight: 700 }}>
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <Link to="/articles" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'var(--surface-color)', border: '1px solid var(--border-color)', borderRadius: '100px', color: 'var(--text-primary)', fontWeight: 700, fontSize: '14px', textDecoration: 'none', boxShadow: 'var(--shadow-sm)', transition: 'all 0.2s' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--accent-blue)'; e.currentTarget.style.color = 'var(--accent-blue)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-primary)'; }}>
                View All {guidesData.length} Guides <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="home-footer" role="contentinfo">
        <div className="home-footer-inner" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '32px' }}>
          
          {/* SEO Popular Links */}
          <nav className="home-footer-popular" style={{ width: '100%', borderBottom: '1px dashed var(--border-color)', paddingBottom: '24px' }} aria-label="Popular Financial Calculators">
            <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-secondary)', marginBottom: '16px' }}>Most Searched Calculators</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px 24px' }}>
              <Link to="/calculators/home-loan-calculator" className="footer-seo-link">Home Loan EMI Calculator 2025</Link>
              <Link to="/calculators/income-tax-calculator" className="footer-seo-link">Income Tax Calculator AY 2026-27</Link>
              <Link to="/calculators/credit-card-emi-calculator" className="footer-seo-link">Credit Card EMI & Interest Calculator</Link>
              <Link to="/calculators/ulip-calculator" className="footer-seo-link">ULIP Returns & Maturity Calculator</Link>
              <Link to="/calculators/sip-calculator" className="footer-seo-link">SIP Calculator for Mutual Funds</Link>
              <Link to="/calculators/health-insurance-calculator" className="footer-seo-link">Health Insurance Premium Estimator</Link>
              <Link to="/calculators/nps-calculator" className="footer-seo-link">NPS Pension & Corpus Calculator</Link>
              <Link to="/calculators/term-insurance-calculator" className="footer-seo-link">Term Life Insurance Calculator</Link>
            </div>
          </nav>

          {/* Financial Disclaimer Banner */}
          <div className="footer-disclaimer" style={{ width: '100%', marginTop: '0', padding: '1rem', background: 'var(--surface-color)', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            <p style={{ margin: 0 }}>
              <strong>Disclaimer:</strong> Calsi.in calculators are for informational and educational purposes only. Results are indicative and do not constitute financial advice. Please consult a SEBI-registered Investment Advisor or Chartered Accountant before making financial decisions. Data sourced from RBI, SEBI, AMFI, and Income Tax Department.
            </p>
          </div>

          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <span className="home-footer-copy">© 2026 <strong>CALSI.IN</strong>. All rights reserved.</span>
            <nav className="home-footer-links" aria-label="Legal Links" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-conditions">Terms &amp; Conditions</Link>
            </nav>
          </div>
        </div>
      </footer>

    </div>
  );
}
