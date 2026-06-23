import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, CheckCircle, XCircle, ChevronRight,
  CreditCard, Wallet, User, FileText, Star, ShieldCheck, AlertCircle
} from 'lucide-react';
import { CREDIT_CARDS_DATA } from '../data/creditCardsData';
import { AFFILIATE_LINKS } from '../constants/affiliateLinks';
import './CreditCardReview.css';

export default function CreditCardReview() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = CREDIT_CARDS_DATA.find(c => c.slug === slug);
    if (found) setCard(found);
    else navigate('/credit-card-emi');
  }, [slug, navigate]);

  if (!card) return null;

  const affiliateLink = AFFILIATE_LINKS[card.affiliateKey] || '#';

  return (
    <div className="ccr-page">
      {/* Breadcrumb */}
      <nav className="ccr-breadcrumb">
        <Link to="/">Home</Link>
        <ChevronRight size={14} />
        <Link to="/credit-card-emi">Credit Cards</Link>
        <ChevronRight size={14} />
        <span>{card.name}</span>
      </nav>

      {/* Back Button */}
      <button className="ccr-back-btn" onClick={() => navigate('/credit-card-emi')}>
        <ArrowLeft size={18} />
        Back to Calculator
      </button>

      {/* ─── Hero Section ─── */}
      <section className="ccr-hero" style={{ background: card.cardColor }}>
        <div className="ccr-hero-content">
          <div className="ccr-hero-text">
            <span className="ccr-hero-bank">{card.bank}</span>
            <h1 className="ccr-hero-title">{card.name}</h1>
            <p className="ccr-hero-tagline">{card.tagline}</p>
            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ccr-apply-btn"
              style={{ background: card.accentColor, color: '#0f172a' }}
            >
              Apply Now — Official Link <ArrowRight size={18} />
            </a>
            <p className="ccr-hero-disclaimer">Via official affiliate partner. Zero spam. No hidden charges.</p>
          </div>
        </div>
      </section>

      {/* ─── Highlights Grid ─── */}
      <section className="ccr-section">
        <h2 className="ccr-section-title">Why This Card Stands Out</h2>
        <div className="ccr-highlights-grid">
          {card.highlights.map((h, i) => (
            <div key={i} className="ccr-highlight-card">
              <span className="ccr-highlight-icon">{h.icon}</span>
              <h3 className="ccr-highlight-title">{h.title}</h3>
              <p className="ccr-highlight-desc">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Overview ─── */}
      <section className="ccr-section">
        <div className="ccr-two-col">
          {/* Fees */}
          <div className="ccr-card-box">
            <div className="ccr-box-header">
              <Wallet size={20} color="var(--accent-blue)" />
              <h2>Fees & Charges</h2>
            </div>
            <table className="ccr-info-table">
              <tbody>
                <tr><td>Joining Fee</td><td className="ccr-val">{card.fees.joining}</td></tr>
                <tr><td>Annual Fee</td><td className="ccr-val">{card.fees.annual}</td></tr>
                <tr><td>Annual Fee Waiver</td><td className="ccr-val highlight">{card.fees.annualWaiver}</td></tr>
                <tr><td>Fuel Surcharge</td><td className="ccr-val">{card.fees.fuelSurchargeWaiver}</td></tr>
              </tbody>
            </table>
          </div>

          {/* Eligibility */}
          <div className="ccr-card-box">
            <div className="ccr-box-header">
              <User size={20} color="#ec4899" />
              <h2>Eligibility Criteria</h2>
            </div>
            <table className="ccr-info-table">
              <tbody>
                <tr><td>Age</td><td className="ccr-val">{card.eligibility.age}</td></tr>
                <tr><td>Employment</td><td className="ccr-val">{card.eligibility.employment}</td></tr>
                <tr><td>Min. Income</td><td className="ccr-val highlight">{card.eligibility.income}</td></tr>
                <tr><td>Credit Score</td><td className="ccr-val">{card.eligibility.creditScore}</td></tr>
                <tr><td>New-to-Credit</td><td className="ccr-val">{card.eligibility.newToCredit}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Rewards Breakdown ─── */}
      <section className="ccr-section">
        <div className="ccr-box-header" style={{ marginBottom: '20px' }}>
          <Star size={20} color="#FFD700" />
          <h2 className="ccr-section-title" style={{ margin: 0 }}>Reward Rates by Category</h2>
        </div>
        <div className="ccr-card-box" style={{ padding: 0, overflow: 'hidden' }}>
          <table className="ccr-rewards-table">
            <thead>
              <tr>
                <th>Spending Category</th>
                <th>Reward Rate</th>
                <th>Cap / Limit</th>
              </tr>
            </thead>
            <tbody>
              {card.rewards.map((r, i) => (
                <tr key={i}>
                  <td>{r.category}</td>
                  <td className="ccr-reward-rate">{r.rate}</td>
                  <td>{r.cap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── Pros & Cons ─── */}
      <section className="ccr-section">
        <h2 className="ccr-section-title">Pros & Cons</h2>
        <div className="ccr-two-col">
          <div className="ccr-card-box ccr-pros">
            <h3 className="ccr-pro-con-title">
              <CheckCircle size={18} color="#4cd964" /> Pros
            </h3>
            <ul className="ccr-list">
              {card.prosAndCons.pros.map((p, i) => (
                <li key={i}><CheckCircle size={14} color="#4cd964" /><span>{p}</span></li>
              ))}
            </ul>
          </div>
          <div className="ccr-card-box ccr-cons">
            <h3 className="ccr-pro-con-title">
              <XCircle size={18} color="#ff4d4d" /> Cons
            </h3>
            <ul className="ccr-list">
              {card.prosAndCons.cons.map((c, i) => (
                <li key={i}><XCircle size={14} color="#ff4d4d" /><span>{c}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Documents Required ─── */}
      <section className="ccr-section">
        <div className="ccr-card-box">
          <div className="ccr-box-header">
            <FileText size={20} color="#8b5cf6" />
            <h2>Documents Required</h2>
          </div>
          <ul className="ccr-doc-list">
            {card.documents.map((doc, i) => (
              <li key={i}><ShieldCheck size={16} color="#8b5cf6" /><span>{doc}</span></li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Important T&Cs ─── */}
      <section className="ccr-section">
        <div className="ccr-card-box ccr-tc-box">
          <div className="ccr-box-header">
            <AlertCircle size={20} color="#f59e0b" />
            <h2>Important Terms & Conditions</h2>
          </div>
          <ul className="ccr-tc-list">
            {card.tcNotes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="ccr-cta-section" style={{ background: card.cardColor }}>
        <h2 className="ccr-cta-title">Ready to Apply for the {card.name}?</h2>
        <p className="ccr-cta-desc">{card.ctaDescription}</p>
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="ccr-apply-btn ccr-apply-btn-large"
          style={{ background: card.accentColor, color: '#000' }}
        >
          Apply Now — Official Partner Link <ArrowRight size={20} />
        </a>
        <p className="ccr-hero-disclaimer" style={{ marginTop: '16px' }}>
          Secure application. Powered by an official affiliate partner.
        </p>
      </section>
    </div>
  );
}
