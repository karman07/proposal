import { useEffect, useState } from 'react';

export const useRestaurant = () => {
  const [restaurant, setRestaurant] = useState({
    name: '[Restaurant Name]',
    location: '[Restaurant Location]',
    city: '[City]',
    // These stay the same - YOUR contact details
    phone: '+91 84277 07595',
    email: 'info@dine3d.com',
    fullAddress: '[Restaurant Name] - [Restaurant Location]',
    // Pricing data
    pricing: {
      setupFirst40: { standard: 2000, partner: 1000 },
      setupAfter40: { standard: 1500, partner: 850 },
      monthlyHosting: { standard: 3500, partner: 2000 },
      freeViews: { standard: 2000, partner: 3000 },
      extraViews: { standard: 0.75, partner: 0.50 }
    }
  });

  useEffect(() => {
    // Get restaurant info and pricing from URL
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name') || urlParams.get('restaurantName'); // Support both parameters
    const location = urlParams.get('location');
    const city = urlParams.get('city');
    
    // Pricing parameters
    const setupFirst40Standard = urlParams.get('setupFirst40Standard');
    const setupFirst40Partner = urlParams.get('setupFirst40Partner');
    const setupAfter40Standard = urlParams.get('setupAfter40Standard');
    const setupAfter40Partner = urlParams.get('setupAfter40Partner');
    const monthlyHostingStandard = urlParams.get('monthlyHostingStandard');
    const monthlyHostingPartner = urlParams.get('monthlyHostingPartner');
    const freeViewsStandard = urlParams.get('freeViewsStandard');
    const freeViewsPartner = urlParams.get('freeViewsPartner');
    const extraViewsStandard = urlParams.get('extraViewsStandard');
    const extraViewsPartner = urlParams.get('extraViewsPartner');
    
    if (name || location || city || setupFirst40Standard) {
      setRestaurant({
        name: name || '[Restaurant Name]',
        location: location || '[Restaurant Location]', 
        city: city || '[City]',
        // YOUR details remain constant
        phone: '+91 84277 07595',
        email: 'info@dine3d.com',
        fullAddress: `${name || '[Restaurant Name]'} - ${location || '[Restaurant Location]'}`,
        // Dynamic pricing
        pricing: {
          setupFirst40: { 
            standard: setupFirst40Standard ? parseInt(setupFirst40Standard) : 2000, 
            partner: setupFirst40Partner ? parseInt(setupFirst40Partner) : 1000 
          },
          setupAfter40: { 
            standard: setupAfter40Standard ? parseInt(setupAfter40Standard) : 1500, 
            partner: setupAfter40Partner ? parseInt(setupAfter40Partner) : 850 
          },
          monthlyHosting: { 
            standard: monthlyHostingStandard ? parseInt(monthlyHostingStandard) : 3500, 
            partner: monthlyHostingPartner ? parseInt(monthlyHostingPartner) : 2000 
          },
          freeViews: { 
            standard: freeViewsStandard ? parseInt(freeViewsStandard) : 2000, 
            partner: freeViewsPartner ? parseInt(freeViewsPartner) : 3000 
          },
          extraViews: { 
            standard: extraViewsStandard ? parseFloat(extraViewsStandard) : 0.75, 
            partner: extraViewsPartner ? parseFloat(extraViewsPartner) : 0.50 
          }
        }
      });
      
      document.title = `${name || '[Restaurant Name]'} - AR Menu Proposal`;
    }
  }, []);

  return restaurant;
};
