import { useState, useMemo } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import {
  Calculator, TrendingUp, BarChart2, RefreshCw, Activity,
  Landmark, Archive, Shield, Briefcase, Building2, PiggyBank,
  CreditCard, Percent, FileText, ChevronDown, Search, BookOpen,
  Car, Wallet, Bike, Target, Receipt, ShieldCheck, Heart, Sunset
} from 'lucide-react';
import './sidebar.css';

const navGroups = [
  {
    id: 'mf',
    label: 'Mutual Funds & SIP',
    icon: <TrendingUp size={15} />,
    color: 'var(--cat-mf)',
    items: [
      { name: 'SIP (Monthly MF)', path: '/calculators/sip-calculator',        icon: <TrendingUp size={14} /> },
      { name: 'Lumpsum',        path: '/calculators/lumpsum-calculator',    icon: <BarChart2  size={14} /> },
      { name: 'SWP Calculator', path: '/calculators/swp-calculator',        icon: <RefreshCw  size={14} /> },
      { name: 'MF Returns',     path: '/calculators/mf-returns-calculator', icon: <Activity   size={14} /> },
    ],
  },
  {
    id: 'deposits',
    label: 'Deposits',
    icon: <Landmark size={15} />,
    color: 'var(--cat-dep)',
    items: [
      { name: 'FD Calculator', path: '/calculators/fd-calculator', icon: <Landmark size={14} /> },
      { name: 'RD Calculator', path: '/calculators/rd-calculator', icon: <Archive  size={14} /> },
    ],
  },
  {
    id: 'govt',
    label: 'Government Schemes',
    icon: <Shield size={15} />,
    color: 'var(--cat-govt)',
    items: [
      { name: 'PPF Calculator', path: '/calculators/ppf-calculator', icon: <Briefcase size={14} /> },
      { name: 'EPF Calculator', path: '/calculators/epf-calculator', icon: <Building2 size={14} /> },
      { name: 'SSY Calculator', path: '/calculators/ssy-calculator', icon: <PiggyBank size={14} /> },
      { name: 'NPS Calculator', path: '/calculators/nps-calculator', icon: <Shield     size={14} /> },
    ],
  },
  {
    id: 'loans',
    label: 'Loans & Tax',
    icon: <CreditCard size={15} />,
    color: 'var(--cat-loan)',
    items: [
      { name: 'EMI Calculator',        path: '/calculators/emi-calculator',             icon: <CreditCard size={14} /> },
      { name: 'Home Loan',             path: '/calculators/home-loan-calculator',       icon: <Landmark   size={14} /> },
      { name: 'Car Loan',              path: '/calculators/car-loan-calculator',        icon: <Car        size={14} /> },
      { name: 'Personal Loan',         path: '/calculators/personal-loan-calculator',   icon: <Wallet     size={14} /> },
      { name: 'Bike Loan',             path: '/calculators/bike-loan-calculator',       icon: <Bike       size={14} /> },
      { name: 'Credit Card EMI',       path: '/calculators/credit-card-emi-calculator', icon: <CreditCard size={14} /> },
      { name: 'GST Calculator',        path: '/calculators/gst-calculator',             icon: <Percent    size={14} /> },
      { name: 'XIRR Calculator',       path: '/calculators/xirr-calculator',            icon: <FileText   size={14} /> },
    ],
  },
  {
    id: 'planning',
    label: 'Planning & Tax',
    icon: <Target size={15} />,
    color: 'var(--cat-mf)',
    items: [
      { name: 'Income Tax',            path: '/calculators/income-tax-calculator',      icon: <Receipt    size={14} /> },
      { name: 'Retirement Planner',    path: '/calculators/retirement-calculator',      icon: <Sunset     size={14} /> },
      { name: 'LTCG / Capital Gains',  path: '/calculators/ltcg-calculator',            icon: <TrendingUp size={14} /> },
      { name: 'Inflation Calculator',  path: '/calculators/inflation-calculator',       icon: <Activity   size={14} /> },
    ],
  },
  {
    id: 'insurance',
    label: 'Insurance',
    icon: <ShieldCheck size={15} />,
    color: '#e11d48',
    items: [
      { name: 'Term Insurance',        path: '/calculators/term-insurance-calculator',  icon: <ShieldCheck size={14} /> },
      { name: 'Health Insurance',      path: '/calculators/health-insurance-calculator',icon: <Heart      size={14} /> },
      { name: 'ULIP Calculator',       path: '/calculators/ulip-calculator',            icon: <BarChart2  size={14} /> },
    ],
  },
];

export function Sidebar({ isOpen }) {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNavGroups = useMemo(() => {
    if (!searchQuery) return navGroups;
    return navGroups.map(group => ({
      ...group,
      items: group.items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(group => group.items.length > 0);
  }, [searchQuery]);

  const [openGroups, setOpenGroups] = useState(() => {
    const initialState = {};
    navGroups.forEach(g => {
      initialState[g.id] = true; // All open by default
    });
    return initialState;
  });

  const toggleGroup = (id) => {
    setOpenGroups(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const isGroupActive = (group) => {
    return group.items.some(item => location.pathname === item.path);
  };

  return (
    <aside className={`sidebar${isOpen ? ' mobile-open' : ''}`}>
      <div className="sidebar-brand">
        <Link to="/" className="brand-text" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.png" alt="CALSI.IN Logo" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="brand-name"><strong>CALSI.IN</strong></span>
            <span className="brand-tagline">Smart Calculator Suite</span>
          </div>
        </Link>
      </div>

      <div className="sidebar-search">
        <Search size={14} className="sidebar-search-icon" />
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="sidebar-search-input"
        />
      </div>

      {/* ── Navigation ── */}
      <nav className="sidebar-nav">
        <NavLink 
          to="/" 
          className={({ isActive }) => `nav-home ${isActive || location.pathname === '/' ? 'active' : ''}`}
        >
          <Calculator size={15} />
          <span>All Calculators</span>
        </NavLink>

        <NavLink 
          to="/articles" 
          className={({ isActive }) => `nav-home ${isActive || location.pathname.startsWith('/articles') ? 'active' : ''}`}
          style={{ marginTop: '4px', background: location.pathname.startsWith('/articles') ? 'var(--bg-active)' : 'transparent' }}
        >
          <BookOpen size={15} />
          <span>Guides & Articles</span>
        </NavLink>

        <div className="nav-section-label">Categories</div>

        {filteredNavGroups.length > 0 ? (
          filteredNavGroups.map((group) => {
            const isGroupOpen = searchQuery ? true : openGroups[group.id];
            const hasActive = isGroupActive(group);

            return (
              <div key={group.id} className={`nav-group ${isGroupOpen ? 'open' : ''}`}>
                <button 
                  className={`nav-group-trigger ${hasActive ? 'has-active' : ''}`}
                  onClick={() => toggleGroup(group.id)}
                >
                  <span className="nav-group-icon" style={{ color: group.color }}>{group.icon}</span>
                  <span className="nav-group-label">{group.label}</span>
                  <ChevronDown size={14} className={`nav-group-chevron ${isGroupOpen ? 'rotated' : ''}`} />
                </button>

                <div className="nav-group-items">
                  {group.items.map(item => {
                    const isActive = location.pathname === item.path;
                    return (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={`nav-item ${isActive ? 'active' : ''}`}
                        style={{ '--group-color': group.color }}
                      >
                        <span className="nav-item-icon">{item.icon}</span>
                        <span className="nav-item-label">{item.name}</span>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <div className="sidebar-no-results">No calculators found.</div>
        )}
      </nav>

      {/* ── Footer ── */}
      <div className="sidebar-footer">
        <div className="sidebar-footer-links" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms &amp; Conditions</Link>
        </div>
        <div className="sidebar-footer-bottom">
          <span className="sidebar-footer-copyright">© 2026 <strong>CALSI.IN</strong></span>
          <div className="sidebar-footer-text">
            <Calculator size={11} />
            <span>v1.0</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
