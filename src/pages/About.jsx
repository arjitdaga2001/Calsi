import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { ShieldCheck, Target, Heart } from 'lucide-react';
import './about.css';

export function About() {
  useDocumentMetadata(
    'About Us | calsi.in',
    'Learn about CALSI.IN, our mission, and the verified financial data that powers our free calculators for Indian investors.'
  );

  return (
    <div className="calc-container about-page">
      <div className="calc-header">
        <h1>About CALSI.IN</h1>
        <p>Empowering Indians with expert-verified financial tools.</p>
      </div>

      <div className="calc-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            calsi.in was built out of a simple frustration: why are professional-grade financial calculators locked behind paywalls, intrusive ads, or complex spreadsheets? We believe that every Indian, whether a student planning their first SIP or a professional navigating the New Tax Regime, deserves access to accurate, free, and easy-to-use financial tools.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <blockquote style={{ borderLeft: '4px solid var(--accent-blue)', paddingLeft: '1rem', fontStyle: 'italic', margin: '1.5rem 0', color: 'var(--text-color)', fontSize: '1.2rem' }}>
            "Making institutional-grade financial tools free for every Indian."
          </blockquote>
        </section>

        <section className="about-section">
          <h2>Trust & Data Verification</h2>
          <p>
            We take accuracy seriously. All our calculators are meticulously verified against official data from:
          </p>
          <ul style={{ lineHeight: '1.8' }}>
            <li><ShieldCheck size={16} style={{ color: 'var(--success)' }} /> <strong>Reserve Bank of India (RBI)</strong> for deposit and lending rates.</li>
            <li><ShieldCheck size={16} style={{ color: 'var(--success)' }} /> <strong>Securities and Exchange Board of India (SEBI) & AMFI</strong> for mutual fund methodologies.</li>
            <li><ShieldCheck size={16} style={{ color: 'var(--success)' }} /> <strong>Income Tax Department of India</strong> for all tax slabs and rules (updated for AY 2026-27).</li>
          </ul>
        </section>

        <section className="about-section" style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <p>Last updated: June 30, 2026</p>
        </section>
      </div>
    </div>
  );
}
