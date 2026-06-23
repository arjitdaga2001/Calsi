import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Shield, ArrowRight, CheckCircle, ArrowLeft, Percent, Wallet, FileText, ChevronRight } from 'lucide-react';
import { CREDIT_CARDS_DATA } from '../data/creditCardsData';
import { AFFILIATE_LINKS } from '../constants/affiliateLinks';
import './guides.css'; // Reuse guides styles for layout consistency

export default function CreditCardReview() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundCard = CREDIT_CARDS_DATA.find(c => c.slug === slug);
    if (foundCard) {
      setCard(foundCard);
    } else {
      navigate('/emi-calculator'); // Redirect to calculator if not found
    }
  }, [slug, navigate]);

  if (!card) return null;

  const trackingLink = AFFILIATE_LINKS[card.affiliateKey] || '#';

  return (
    <div className="guide-post-container" style={{ paddingBottom: '80px' }}>
      {/* Breadcrumbs */}
      <div className="guide-breadcrumb">
        <Link to="/">Home</Link>
        <ChevronRight size={14} />
        <Link to="/emi-calculator">Credit Cards</Link>
        <ChevronRight size={14} />
        <span className="current">{card.name}</span>
      </div>

      <button onClick={() => navigate(-1)} className="back-button" style={{ marginBottom: '24px' }}>
        <ArrowLeft size={20} /> Back to Calculator
      </button>

      <article className="guide-content-wrapper">
        <header className="guide-post-header">
          <div className="guide-meta">
            <span className="guide-category">Credit Card Review</span>
            <span className="guide-read-time">Updated: 2026</span>
          </div>
          <h1 className="guide-post-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {card.name}
            <span style={{ fontSize: '16px', background: '#4cd96420', color: '#4cd964', padding: '4px 10px', borderRadius: '8px' }}>
              ⚡ Featured
            </span>
          </h1>
          <p className="guide-post-excerpt">{card.description}</p>
        </header>

        {/* Hero CTA Box */}
        <div style={{
          background: 'linear-gradient(145deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.02) 100%)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '16px'
        }}>
          <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', margin: 0 }}>
            Apply for the {card.name} Today
          </h3>
          <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '14.5px', maxWidth: '600px' }}>
            {card.ctaDescription}
          </p>
          <a 
            href={trackingLink} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              background: 'var(--accent-blue)',
              color: '#fff',
              padding: '16px 32px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)',
              marginTop: '8px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Apply Now <ArrowRight size={18} />
          </a>
        </div>

        {/* Quick Facts Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '40px'
        }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <Wallet size={24} color="var(--accent-blue)" style={{ marginBottom: '12px' }} />
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Joining Fee</div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>{card.fees.joining}</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <Wallet size={24} color="#ec4899" style={{ marginBottom: '12px' }} />
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Annual Fee</div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>{card.fees.annual}</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <Shield size={24} color="#4cd964" style={{ marginBottom: '12px' }} />
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Min. Income Required</div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>{card.eligibility.income}</div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="guide-body" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          <h2 style={{ color: 'var(--text-primary)', marginTop: '40px', marginBottom: '20px', fontSize: '24px' }}>Why You Should Apply</h2>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {card.benefits.map((benefit, i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle size={20} color="#4cd964" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <h2 style={{ color: 'var(--text-primary)', marginTop: '40px', marginBottom: '20px', fontSize: '24px' }}>Eligibility & Documents</h2>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><strong>Age:</strong> {card.eligibility.age}</li>
              <li><strong>Employment:</strong> {card.eligibility.employment}</li>
              <li><strong>Credit Score:</strong> {card.eligibility.creditScore}</li>
              <li><strong>Documents:</strong> PAN Card, Aadhaar Card, Income Proof (Bank statement or salary slip)</li>
            </ul>
          </div>

          {/* Bottom CTA */}
          <div style={{
            marginTop: '60px',
            padding: '32px',
            background: 'var(--surface-color)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.08)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '22px', marginBottom: '16px' }}>Ready to get your {card.name}?</h3>
            <a 
              href={trackingLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#fff',
                color: '#000',
                padding: '14px 28px',
                borderRadius: '8px',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '15px'
              }}
            >
              Apply via Official Partner
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
