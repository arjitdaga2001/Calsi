import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function AdSlot({ adSlot = '1234567890', adFormat = 'auto', style = {} }) {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Small timeout ensures the DOM node is fully painted before pushing
    let timeout;
    try {
      timeout = setTimeout(() => {
        // Find the ins element inside our dangerouslySetInnerHTML container
        const insElement = containerRef.current?.querySelector('ins');
        if (insElement && !insElement.hasAttribute('data-adsbygoogle-status')) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      }, 100);
    } catch (e) {
      console.error('AdSense error:', e);
    }
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div 
      key={location.pathname + adSlot}
      ref={containerRef}
      className="ad-container" 
      style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '30px auto',
        minHeight: '90px',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.01)',
        ...style
      }}
      dangerouslySetInnerHTML={{
        __html: `<ins class="adsbygoogle" style="display:block;width:100%" data-ad-client="ca-pub-4163850944046836" data-ad-slot="${adSlot}" data-ad-format="${adFormat}" data-full-width-responsive="true"></ins>`
      }}
    />
  );
}
