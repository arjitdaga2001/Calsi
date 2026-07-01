import { useEffect, useRef } from 'react';

export function AdSlot({ adSlot = '1234567890', adFormat = 'auto', style = {} }) {
  const adRef = useRef(null);

  useEffect(() => {
    // Only push if the ad hasn't been initialized yet
    try {
      if (adRef.current && !adRef.current.hasAttribute('data-adsbygoogle-status')) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div 
      className="ad-container" 
      style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '30px auto',
        minHeight: '90px', // Prevents layout shift
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.01)',
        ...style
      }}
    >
      <ins 
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', ...style }}
        data-ad-client="ca-pub-0000000000000000" // Replace with your actual ca-pub ID
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}
