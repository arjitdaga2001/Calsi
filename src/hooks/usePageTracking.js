import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// Initialize GA4 only if a valid measurement ID is provided
export const initGA = (measurementId) => {
  if (measurementId && measurementId.startsWith('G-')) {
    ReactGA.initialize(measurementId);
  } else {
    console.warn('GA4 is not initialized. Please provide a valid measurement ID starting with "G-".');
  }
};

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Send pageview with a custom path
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);
};
