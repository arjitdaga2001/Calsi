import { useState } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import {
  Calculator, TrendingUp, BarChart2, RefreshCw, Activity,
  Landmark, Archive, Shield, Briefcase, Building2, PiggyBank,
  CreditCard, Percent, FileText, ChevronDown
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
      { name: 'EMI Calculator',  path: '/emi',  icon: <CreditCard size={14} /> },
      { name: 'GST Calculator',  path: '/gst',  icon: <Percent    size={14} /> },
      { name: 'XIRR Calculator', path: '/xirr', icon: <FileText   size={14} /> },
    ],
  },
];

export function Sidebar({ isOpen }) {
  const location = useLocation();
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
        <div className="brand-text">
          <span className="brand-name">Calsi</span>
          <span className="brand-tagline">Smart Calculator Suite</span>
        </div>
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

        <div className="nav-section-label">Categories</div>

        {navGroups.map((group) => {
          const isOpen = openGroups[group.id];
          const hasActive = isGroupActive(group);

          return (
            <div key={group.id} className={`nav-group ${isOpen ? 'open' : ''}`}>
              <button 
                className={`nav-group-trigger ${hasActive ? 'has-active' : ''}`}
                onClick={() => toggleGroup(group.id)}
              >
                <span className="nav-group-icon" style={{ color: group.color }}>{group.icon}</span>
                <span className="nav-group-label">{group.label}</span>
                <ChevronDown size={14} className={`nav-group-chevron ${isOpen ? 'rotated' : ''}`} />
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
        })}
      </nav>

      {/* ── Footer ── */}
      <div className="sidebar-footer">
        <div className="sidebar-footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms &amp; Conditions</Link>
        </div>
        <div className="sidebar-footer-bottom">
          <span className="sidebar-footer-copyright">© 2026 Calsi</span>
          <div className="sidebar-footer-text">
            <Calculator size={11} />
            <span>v1.0</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
