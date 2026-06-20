import { Link } from 'react-router-dom';
import './footer.css';

export function Footer() {
  return (
    <footer className="global-footer" role="contentinfo">
      <div className="footer-grid">
        <div className="footer-col">
          <h4 className="footer-title">Mutual Funds & SIP</h4>
          <ul className="footer-links-list">
            <li><Link to="/sip">SIP Calculator</Link></li>
            <li><Link to="/lumpsum">Lumpsum Calculator</Link></li>
            <li><Link to="/swp">SWP Calculator</Link></li>
            <li><Link to="/mf-returns">MF Returns Calculator</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Loans & EMI</h4>
          <ul className="footer-links-list">
            <li><Link to="/emi">EMI Calculator</Link></li>
            <li><Link to="/home-loan">Home Loan Calculator</Link></li>
            <li><Link to="/car-loan">Car Loan Calculator</Link></li>
            <li><Link to="/personal-loan">Personal Loan Calculator</Link></li>
            <li><Link to="/bike-loan">Bike Loan Calculator</Link></li>
            <li><Link to="/credit-card-emi">Credit Card EMI</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Government & Deposits</h4>
          <ul className="footer-links-list">
            <li><Link to="/ppf">PPF Calculator</Link></li>
            <li><Link to="/epf">EPF Calculator</Link></li>
            <li><Link to="/ssy">SSY Calculator</Link></li>
            <li><Link to="/nps">NPS Calculator</Link></li>
            <li><Link to="/fd">FD Calculator</Link></li>
            <li><Link to="/rd">RD Calculator</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Planning & Tax</h4>
          <ul className="footer-links-list">
            <li><Link to="/income-tax">Income Tax Calculator</Link></li>
            <li><Link to="/retirement">Retirement Planner</Link></li>
            <li><Link to="/gst">GST Calculator</Link></li>
            <li><Link to="/ltcg">LTCG / Capital Gains</Link></li>
            <li><Link to="/inflation">Inflation Calculator</Link></li>
            <li><Link to="/xirr">XIRR Calculator</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Insurance</h4>
          <ul className="footer-links-list">
            <li><Link to="/term-insurance">Term Insurance Calculator</Link></li>
            <li><Link to="/health-insurance">Health Insurance Calculator</Link></li>
            <li><Link to="/ulip">ULIP Calculator</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Popular Tools</h4>
          <ul className="footer-links-list">
            <li><Link to="/home-loan">Home Loan EMI Calculator 2025</Link></li>
            <li><Link to="/income-tax">Income Tax Calculator AY 2026-27</Link></li>
            <li><Link to="/credit-card-emi">Credit Card EMI & Interest Calc</Link></li>
            <li><Link to="/ulip">ULIP Returns Calculator</Link></li>
            <li><Link to="/health-insurance">Mediclaim Premium Estimator</Link></li>
            <li><Link to="/term-insurance">Term Life Insurance Calc</Link></li>
            <li><Link to="/sip">Mutual Fund SIP Calculator</Link></li>
            <li><Link to="/nps">NPS Pension Calculator</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© 2026 <strong>CALSI.IN</strong>. All rights reserved.</span>
        <div className="footer-legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span className="footer-divider">•</span>
          <Link to="/terms-conditions">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
