import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { Mail, MapPin } from 'lucide-react';

export function Contact() {
  useDocumentMetadata(
    'Contact Us | calsi.in',
    'Get in touch with the calsi.in team for feedback, calculator requests, or partnerships.'
  );

  return (
    <div className="calc-container">
      <div className="calc-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you.</p>
      </div>

      <div className="calc-content">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ background: 'var(--surface-color)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={20} style={{ color: 'var(--accent-blue)' }} /> Email Support
            </h2>
            <p>For any questions, suggestions, or bug reports, please email us directly. We aim to respond within 24 hours.</p>
            <p style={{ marginTop: '1rem', fontWeight: 'bold', fontSize: '1.1rem' }}>
              <a href="mailto:calsicalculators@gmail.com" style={{ color: 'var(--accent-blue)' }}>calsicalculators@gmail.com</a>
            </p>
          </div>

          <div style={{ background: 'var(--surface-color)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={20} style={{ color: 'var(--accent-blue)' }} /> Location
            </h2>
            <p>CALSI.IN operates out of Bangalore, India.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
