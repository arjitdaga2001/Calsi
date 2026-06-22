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
      { name: 'SIP (Monthly MF)', path: '/sip',        icon: <TrendingUp size={14} /> },
      { name: 'Lumpsum',        path: '/lumpsum',    icon: <BarChart2  size={14} /> },
      { name: 'SWP Calculator', path: '/swp',        icon: <RefreshCw  size={14} /> },
      { name: 'MF Returns',     path: '/mf-returns', icon: <Activity   size={14} /> },
    ],
  },
  {
    id: 'deposits',
    label: 'Deposits',
    icon: <Landmark size={15} />,
    color: 'var(--cat-dep)',
    items: [
      { name: 'FD Calculator', path: '/fd', icon: <Landmark size={14} /> },
      { name: 'RD Calculator', path: '/rd', icon: <Archive  size={14} /> },
    ],
  },
  {
    id: 'govt',
    label: 'Government Schemes',
    icon: <Shield size={15} />,
    color: 'var(--cat-govt)',
    items: [
      { name: 'PPF Calculator', path: '/ppf', icon: <Briefcase size={14} /> },
      { name: 'EPF Calculator', path: '/epf', icon: <Building2 size={14} /> },
      { name: 'SSY Calculator', path: '/ssy', icon: <PiggyBank size={14} /> },
    ],
  },
  {
    id: 'loans',
    label: 'Loans & Tax',
    icon: <CreditCard size={15} />,
    color: 'var(--cat-loan)',
    items: [
      { name: 'EMI Calculator',        path: '/emi',             icon: <CreditCard size={14} /> },
      { name: 'Home Loan',             path: '/home-loan',       icon: <Landmark   size={14} /> },
      { name: 'Car Loan',              path: '/car-loan',        icon: <Car        size={14} /> },
      { name: 'Personal Loan',         path: '/personal-loan',   icon: <Wallet     size={14} /> },
      { name: 'Bike Loan',             path: '/bike-loan',       icon: <Bike       size={14} /> },
      { name: 'Credit Card EMI',        path: '/credit-card-emi', icon: <CreditCard size={14} /> },
      { name: 'GST Calculator',        path: '/gst',             icon: <Percent    size={14} /> },
      { name: 'XIRR Calculator',       path: '/xirr',            icon: <FileText   size={14} /> },
    ],
  },
  {
    id: 'planning',
    label: 'Planning & Tax',
    icon: <Target size={15} />,
    color: 'var(--cat-mf)',
    items: [
      { name: 'Income Tax',            path: '/income-tax',      icon: <Receipt    size={14} /> },
      { name: 'NPS Calculator',        path: '/nps',             icon: <Shield     size={14} /> },
      { name: 'Retirement Planner',    path: '/retirement',      icon: <Sunset     size={14} /> },
      { name: 'LTCG / Capital Gains',  path: '/ltcg',            icon: <TrendingUp size={14} /> },
      { name: 'Inflation Calculator',  path: '/inflation',       icon: <Activity   size={14} /> },
    ],
  },
  {
    id: 'insurance',
    label: 'Insurance',
    icon: <ShieldCheck size={15} />,
    color: '#e11d48',
    items: [
      { name: 'Term Insurance',        path: '/term-insurance',  icon: <ShieldCheck size={14} /> },
      { name: 'Health Insurance',      path: '/health-insurance',icon: <Heart      size={14} /> },
      { name: 'ULIP Calculator',       path: '/ulip',            icon: <BarChart2  size={14} /> },
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
      {/* ── Brand ── */}
      <div className="sidebar-brand">
        <Link to="/" className="brand-text" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="brand-name"><strong>CALSI.IN</strong></span>
          <span className="brand-tagline">Smart Calculator Suite</span>
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
          to="/guides" 
          className={({ isActive }) => `nav-home ${isActive || location.pathname.startsWith('/guides') ? 'active' : ''}`}
          style={{ marginTop: '4px', background: location.pathname.startsWith('/guides') ? 'var(--bg-active)' : 'transparent' }}
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
        <div className="sidebar-footer-links">
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
