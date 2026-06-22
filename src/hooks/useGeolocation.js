import { useState, useEffect } from 'react';

// Common Indian Tier-1 and Tier-2 cities often required by highly targeted campaigns (like Acko)
export const TARGET_CITIES = [
  'Mumbai', 'Pune', 'Chennai', 'Delhi', 'Kolkata', 'Hyderabad', 
  'Ahmedabad', 'Vadodara', 'Gandhinagar', 'Surat', 'Rajkot', 'Anand', 'Jamnagar',
  'Chandigarh', 'Vishakhapatnam', 'Bhubaneswar', 'Goa', 'Ludhiana', 
  'Lucknow', 'Jaipur', 'Bhopal', 'Ranchi', 'Nagpur', 'Nashik', 'Patna', 
  'Mysore', 'Dehradun', 'Mangalore', 'Raipur', 'Bengaluru'
];

export function useGeolocation() {
  const [location, setLocation] = useState({
    countryCode: 'IN', // Default to IN to prevent flashes
    city: '',
    isTargetCity: true, // Default to true so we don't accidentally hide Indian ads initially
    isInternational: false,
    isMobile: window.innerWidth <= 768, // Add device detection
    loading: true
  });

  useEffect(() => {
    // Handle window resize for dynamic device detection
    const handleResize = () => {
      setLocation(prev => ({
        ...prev,
        isMobile: window.innerWidth <= 768
      }));
    };
    
    window.addEventListener('resize', handleResize);

    // Fetch location data from ipapi
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        const isInternational = data.country_code !== 'IN';
        
        // Check if the user's city is in our approved target list
        // We do a loose inclusion check to account for spelling differences
        const isTargetCity = TARGET_CITIES.some(targetCity => 
          data.city && data.city.toLowerCase().includes(targetCity.toLowerCase())
        );

        setLocation(prev => ({
          ...prev,
          countryCode: data.country_code,
          city: data.city,
          isTargetCity: isInternational ? false : isTargetCity,
          isInternational: isInternational,
          loading: false
        }));
      } catch (error) {
        console.error("Geolocation fetch failed, defaulting to Indian audience", error);
        // Fallback to defaults
        setLocation(prev => ({ ...prev, loading: false }));
      }
    };

    fetchLocation();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return location;
}
