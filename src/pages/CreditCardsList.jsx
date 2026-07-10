import React from 'react';
import { Link } from 'react-router-dom';
import { CREDIT_CARDS_DATA } from '../data/creditCardsData';
import { ArrowRight } from 'lucide-react';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import './guides.css'; // Reuse guides css for layout

export function CreditCardsList() {
  useDocumentMetadata(
    "Best Credit Cards in India (2026) | CALSI",
    "Compare the best credit cards in India. Find the perfect card for shopping, travel, rewards, and fuel. Detailed reviews and instant application links."
  );

  return (
    <div className="guides-container">
      <header className="guides-header">
        <h1>Best Credit Cards in India (2026)</h1>
        <p>Compare premium rewards, cashback, and lifetime free credit cards. Handpicked by our financial experts.</p>
      </header>

      <div className="guides-grid">
        {CREDIT_CARDS_DATA.map(card => (
          <Link to={`/credit-cards/${card.slug}`} key={card.slug} className="guide-card" style={{ textDecoration: 'none' }}>
            <div className="guide-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-primary)' }}>{card.name}</h2>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', marginBottom: '12px', fontWeight: '600' }}>{card.bank}</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px', flex: 1 }}>{card.tagline}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#4cd964', fontSize: '0.9rem', fontWeight: '600' }}>
                <span>Read Full Review</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
