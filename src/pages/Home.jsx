import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp, BarChart2, RefreshCw, Activity,
  Landmark, Archive,
  Briefcase, Building2, PiggyBank,
  CreditCard, Percent, FileText,
  ArrowRight,
} from 'lucide-react';
import './home.css';

const groups = [
  {
    id: 'mf',
    label: 'Mutual Funds & SIP',
    color: 'var(--cat-mf)',
    items: [
      { name: 'SIP (Monthly MF)', path: '/sip',       icon: <TrendingUp size={22} />, desc: 'Monthly mutual fund investment' },
      { name: 'Lumpsum',          path: '/lumpsum',   icon: <BarChart2  size={22} />, desc: 'One-time investment growth' },
      { name: 'SWP Calculator',   path: '/swp',       icon: <RefreshCw  size={22} />, desc: 'Systematic Withdrawal Plan' },
      { name: 'MF Returns',       path: '/mf-returns',icon: <Activity   size={22} />, desc: 'Mutual fund return estimator' },
    ],
  },
  {
    id: 'dep',
    label: 'Deposits',
    color: 'var(--cat-dep)',
    items: [
      { name: 'FD Calculator',    path: '/fd', icon: <Landmark size={22} />, desc: 'Fixed deposit maturity value' },
      { name: 'RD Calculator',    path: '/rd', icon: <Archive  size={22} />, desc: 'Recurring deposit maturity' },
    ],
  },
  {
    id: 'govt',
    label: 'Government Schemes',
    color: 'var(--cat-govt)',
    items: [
      { name: 'PPF Calculator',   path: '/ppf', icon: <Briefcase  size={22} />, desc: 'Public Provident Fund' },
      { name: 'EPF Calculator',   path: '/epf', icon: <Building2  size={22} />, desc: 'Employee Provident Fund' },
      { name: 'SSY Calculator',   path: '/ssy', icon: <PiggyBank  size={22} />, desc: 'Sukanya Samriddhi Yojana' },
    ],
  },
  {
    id: 'loan',
    label: 'Loans & Tax',
    color: 'var(--cat-loan)',
    items: [
      { name: 'EMI Calculator',   path: '/emi',  icon: <CreditCard size={22} />, desc: 'Loan EMI & interest' },
      { name: 'GST Calculator',   path: '/gst',  icon: <Percent    size={22} />, desc: 'Goods & Services Tax' },
      { name: 'XIRR Calculator',  path: '/xirr', icon: <FileText   size={22} />, desc: 'Extended IRR calculation' },
    ],
  },
];

export function Home() {
  return (
    <div className="home-wrap">

      {/* ── Top Navbar ── */}
      <header className="home-navbar">
        <div className="home-navbar-inner">
          <div className="home-brand">
            <span className="home-brand-name">Kalculator</span>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <h1 className="home-hero-title">Calculators</h1>
          <p className="home-hero-sub">
            Free, accurate tools to plan your investments, loans, deposits and taxes.
          </p>
        </div>
      </section>

      {/* ── Calculator Groups ── */}
      <section className="home-content">
        <div className="home-content-inner">
          {groups.map(group => (
            <div key={group.id} className="home-group">
              <div className="home-group-header">
                <span className="home-group-dot" style={{ background: group.color }} />
                <h2 className="home-group-title" style={{ color: group.color }}>
                  {group.label}
                </h2>
              </div>

              <div className="home-grid">
                {group.items.map(calc => (
                  <Link
                    key={calc.path}
                    to={calc.path}
                    className="calc-card"
                    style={{
                      '--c-color': group.color,
                    }}
                  >
                    <div className="calc-icon">
                      {calc.icon}
                    </div>
                    <div className="calc-info">
                      <h3 className="calc-name">{calc.name}</h3>
                      <p  className="calc-desc">{calc.desc}</p>
                    </div>
                    <ArrowRight size={14} className="calc-arrow" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
