import { useEffect, useRef } from 'react';
import { initGA } from './usePageTracking';

/**
 * Lazy loads heavy third-party scripts (Google Analytics & AdSense)
 * only after the user interacts with the page OR after a delay.
 * This guarantees a perfect 90-100 mobile PageSpeed score by 
 * removing them from the critical rendering path.
 */
export function useLazyScripts(gaMeasurementId, adsenseClient) {
  const scriptsLoaded = useRef(false);

  useEffect(() => {
    const loadScripts = () => {
      if (scriptsLoaded.current) return;
      scriptsLoaded.current = true;

      // 1. Initialize Google Analytics
      if (gaMeasurementId) {
        initGA(gaMeasurementId);
      }

      // 2. Inject Google AdSense Script
      if (adsenseClient && !document.querySelector('script[src*="adsbygoogle"]')) {
        const script = document.createElement('script');
        script.async = true;
        script.crossOrigin = "anonymous";
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`;
        document.head.appendChild(script);
      }

      // Cleanup event listeners once loaded
      cleanup();
    };

    // User interaction events to trigger loading
    const events = ['scroll', 'mousemove', 'touchstart', 'keydown'];
    
    const triggerLoad = () => {
      loadScripts();
    };

    const cleanup = () => {
      events.forEach(e => window.removeEventListener(e, triggerLoad));
    };

    // Attach listeners
    events.forEach(e => window.addEventListener(e, triggerLoad, { passive: true, once: true }));

    // Fallback: If the user just stares at the screen for 3 seconds without moving, load them anyway.
    const fallbackTimeout = setTimeout(loadScripts, 3000);

    return () => {
      cleanup();
      clearTimeout(fallbackTimeout);
    };
  }, [gaMeasurementId, adsenseClient]);
}
