import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { Mail, Send } from 'lucide-react';
import './about.css'; // Utilizing shared premium styles

const InstagramIcon = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export function Contact() {
  useDocumentMetadata(
    'Contact Us | calsi.in',
    'Get in touch with the calsi.in team for feedback, calculator requests, or partnership inquiries.'
  );

  return (
    <div className="calc-container contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We're here to help. Reach out to us for any questions, suggestions, or partnership inquiries.</p>
      </div>

      <div className="about-grid">
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
            <InstagramIcon size={26} />
          </div>
          <h2>Instagram</h2>
          <p>Follow us on Instagram for daily financial tips, calculator updates, and wealth-building strategies.</p>
          <a href="https://instagram.com/calsi_in" target="_blank" rel="noopener noreferrer" className="contact-link">
            @calsi_in <Send size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
