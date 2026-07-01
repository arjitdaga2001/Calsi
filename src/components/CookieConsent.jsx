import { useState, useEffect } from 'react';
import './cookie-consent.css';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent-overlay">
      <div className="cookie-consent-box">
        <div className="cookie-consent-content">
          <h4>We Value Your Privacy</h4>
          <p>
            We use cookies to analyze site traffic, personalize content, and serve relevant ads via Google AdSense. 
            By clicking "Accept", you consent to our use of cookies in accordance with our <a href="/privacy-policy">Privacy Policy</a>.
          </p>
        </div>
        <div className="cookie-consent-actions">
          <button className="cookie-btn cookie-accept" onClick={handleAccept}>
            Accept & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
