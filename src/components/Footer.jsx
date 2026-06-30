import { Link } from 'react-router-dom';
import './footer.css';

export function Footer() {
  return (
    <footer className="global-footer" role="contentinfo">
      <div className="footer-grid">
        <div className="footer-col">
          <h4 className="footer-title">Mutual Funds & SIP</h4>
          <ul className="footer-links-list">
            <li><Link to="/calculators/sip-calculator">SIP Calculator</Link></li>
            <li><Link to="/calculators/lumpsum-calculator">Lumpsum Calculator</Link></li>
            <li><Link to="/calculators/swp-calculator">SWP Calculator</Link></li>
            <li><Link to="/calculators/mf-returns-calculator">MF Returns Calculator</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Loans & EMI</h4>
          <ul className="footer-links-list">
            <li><Link to="/calculators/emi-calculator">EMI Calculator</Link></li>
            <li><Link to="/calculators/home-loan-calculator">Home Loan Calculator</Link></li>
            <li><Link to="/calculators/car-loan-calculator">Car Loan Calculator</Link></li>
            <li><Link to="/calculators/personal-loan-calculator">Personal Loan Calculator</Link></li>
            <li><Link to="/calculators/bike-loan-calculator">Bike Loan Calculator</Link></li>
            <li><Link to="/calculators/credit-card-emi-calculator">Credit Card EMI</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Government & Deposits</h4>
          <ul className="footer-links-list">
            <li><Link to="/calculators/ppf-calculator">PPF Calculator</Link></li>
            <li><Link to="/calculators/epf-calculator">EPF Calculator</Link></li>
            <li><Link to="/calculators/ssy-calculator">SSY Calculator</Link></li>
            <li><Link to="/calculators/nps-calculator">NPS Calculator</Link></li>
            <li><Link to="/calculators/fd-calculator">FD Calculator</Link></li>
            <li><Link to="/calculators/rd-calculator">RD Calculator</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Planning & Tax</h4>
          <ul className="footer-links-list">
            <li><Link to="/calculators/income-tax-calculator">Income Tax Calculator</Link></li>
            <li><Link to="/calculators/retirement-calculator">Retirement Planner</Link></li>
            <li><Link to="/calculators/gst-calculator">GST Calculator</Link></li>
            <li><Link to="/calculators/ltcg-calculator">LTCG / Capital Gains</Link></li>
            <li><Link to="/calculators/inflation-calculator">Inflation Calculator</Link></li>
            <li><Link to="/calculators/xirr-calculator">XIRR Calculator</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Insurance</h4>
          <ul className="footer-links-list">
            <li><Link to="/calculators/term-insurance-calculator">Term Insurance Calculator</Link></li>
            <li><Link to="/calculators/health-insurance-calculator">Health Insurance Calculator</Link></li>
            <li><Link to="/calculators/ulip-calculator">ULIP Calculator</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Popular Tools</h4>
          <ul className="footer-links-list">
            <li><Link to="/calculators/home-loan-calculator">Home Loan EMI Calculator 2025</Link></li>
            <li><Link to="/calculators/income-tax-calculator">Income Tax Calculator AY 2026-27</Link></li>
            <li><Link to="/calculators/credit-card-emi-calculator">Credit Card EMI & Interest Calc</Link></li>
            <li><Link to="/calculators/ulip-calculator">ULIP Returns Calculator</Link></li>
            <li><Link to="/calculators/health-insurance-calculator">Mediclaim Premium Estimator</Link></li>
            <li><Link to="/calculators/term-insurance-calculator">Term Life Insurance Calc</Link></li>
            <li><Link to="/calculators/sip-calculator">Mutual Fund SIP Calculator</Link></li>
            <li><Link to="/calculators/nps-calculator">NPS Pension Calculator</Link></li>
          </ul>
        </div>
      </div>

      {/* EEAT Trust Signals Banner */}
      <div className="footer-trust-banner">
        <div className="trust-item">
          <span className="trust-icon">✓</span>
          <div className="trust-text">
            <strong>Expert Reviewed</strong>
            <p>Verified financial models</p>
          </div>
        </div>
        <div className="trust-item">
          <span className="trust-icon">🔒</span>
          <div className="trust-text">
            <strong>100% Secure</strong>
            <p>No login. Data is private.</p>
          </div>
        </div>
        <div className="trust-item">
          <span className="trust-icon">⚡</span>
          <div className="trust-text">
            <strong>Highly Accurate</strong>
            <p>Latest Indian tax rates</p>
          </div>
        </div>
      </div>
      
      {/* Financial Disclaimer Banner */}
      <div className="footer-disclaimer" style={{ marginTop: '2rem', padding: '1rem', background: 'var(--surface-color)', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
        <p style={{ margin: 0 }}>
          <strong>Disclaimer:</strong> Calsi.in calculators are for informational and educational purposes only. Results are indicative and do not constitute financial advice. Please consult a SEBI-registered Investment Advisor or Chartered Accountant before making financial decisions. Data sourced from RBI, SEBI, AMFI, and Income Tax Department.
        </p>
      </div>

      <div className="footer-bottom">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="footer-copy">© 2026 <strong>CALSI.IN</strong>. All rights reserved.</span>
          <a href="https://www.instagram.com/calsi_in/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
        <div className="footer-legal">
          <Link to="/about">About Us</Link>
          <span className="footer-divider">•</span>
          <Link to="/contact">Contact</Link>
          <span className="footer-divider">•</span>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span className="footer-divider">•</span>
          <Link to="/terms-conditions">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
