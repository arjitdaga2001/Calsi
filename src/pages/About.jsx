import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { ShieldCheck, Target, Heart, BookOpen, Activity, Building2 } from 'lucide-react';
import './about.css';

export function About() {
  useDocumentMetadata(
    'About Us | calsi.in',
    'Learn about CALSI.IN, our mission, and the verified financial data that powers our free calculators for Indian investors.'
  );

  return (
    <div className="calc-container about-page">
      <div className="about-hero">
        <h1>About CALSI.IN</h1>
        <p>Empowering Indians with expert-verified, institutional-grade financial tools—completely free and accessible to everyone.</p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <div className="about-card-icon">
            <BookOpen size={26} />
          </div>
          <h2>Our Story</h2>
          <p>
            calsi.in was built out of a simple frustration: why are professional-grade financial calculators locked behind paywalls, intrusive ads, or complex spreadsheets? We believe that every Indian, whether a student planning their first SIP or a professional navigating the New Tax Regime, deserves access to accurate, free, and easy-to-use financial tools.
          </p>
        </div>

        <div className="about-card">
          <div className="about-card-icon">
            <Target size={26} />
          </div>
          <h2>Our Mission</h2>
          <p>We are on a mission to democratize financial planning in India by removing barriers to high-quality financial data and computations.</p>
          <blockquote className="about-quote">
            "Making institutional-grade financial tools free for every Indian."
          </blockquote>
        </div>
      </div>

      <div className="about-card" style={{ marginTop: '30px' }}>
        <div className="about-card-icon">
          <ShieldCheck size={26} />
        </div>
        <h2>Trust & Data Verification</h2>
        <p>
          We take accuracy seriously. All our calculators are meticulously verified against official data from the most trusted financial institutions:
        </p>
        <ul className="trust-list">
          <li>
            <Building2 size={24} style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '2px' }} /> 
            <div>
              <strong>Reserve Bank of India (RBI)</strong>
              Used for validating deposit, repo, and lending rate methodologies.
            </div>
          </li>
          <li>
            <Activity size={24} style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '2px' }} /> 
            <div>
              <strong>SEBI & AMFI</strong>
              Strictly following methodologies for mutual fund and SIP return projections.
            </div>
          </li>
          <li>
            <Heart size={24} style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '2px' }} /> 
            <div>
              <strong>Income Tax Department of India</strong>
              Ensuring all tax slabs and rules are accurate and updated for AY 2026-27.
            </div>
          </li>
        </ul>
      </div>

      <div style={{ marginTop: '2.5rem', textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)' }}>
        <p>Last updated: July 2026</p>
      </div>
    </div>
  );
}
