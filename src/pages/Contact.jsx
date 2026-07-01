import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { Mail, MapPin, Send } from 'lucide-react';
import './about.css'; // Utilizing shared premium styles

export function Contact() {
  useDocumentMetadata(
    'Contact Us | calsi.in',
    'Get in touch with the calsi.in team for feedback, calculator requests, or partnerships.'
  );

  return (
    <div className="calc-container contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We're here to help. Reach out to us for any questions, suggestions, or partnership inquiries.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-card-icon">
            <Mail size={26} />
          </div>
          <h2>Email Support</h2>
          <p>For any questions, suggestions, or bug reports, please email us directly. We aim to respond to all inquiries within 24 hours.</p>
          <a href="mailto:calsicalculators@gmail.com" className="contact-link">
            calsicalculators@gmail.com <Send size={16} />
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon">
            <MapPin size={26} />
          </div>
          <h2>Location</h2>
          <p>CALSI.IN operates out of Bangalore, India. We are a digital-first platform serving users across the nation.</p>
        </div>
      </div>
    </div>
  );
}
