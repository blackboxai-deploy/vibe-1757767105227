// API Configuration for Shobha Beauty Studio
// Future-ready for custom backend integration

export const API_CONFIG = {
  // Base URL for API endpoints - update this when backend is ready
  API_BASE_URL: typeof window !== 'undefined' ? 'http://localhost:3001/api' : 'http://localhost:3001/api',
  
  // Endpoints for future backend integration
  ENDPOINTS: {
    // Booking system
    APPOINTMENTS: '/appointments',
    AVAILABILITY: '/availability',
    SERVICES: '/services',
    
    // Contact & inquiries
    CONTACT: '/contact',
    NEWSLETTER: '/newsletter',
    
    // Gallery & content
    GALLERY: '/gallery',
    TESTIMONIALS: '/testimonials',
    
    // Business data
    BUSINESS_HOURS: '/business-hours',
    PRICING: '/pricing',
  },
  
  // WhatsApp Integration
  WHATSAPP: {
    BUSINESS_NUMBER: '+97143591532',
    BASE_URL: 'https://wa.me/97143591532',
  },
  
  // Business Information
  BUSINESS: {
    NAME: 'Shobha Beauty Studio & Nails',
    PHONE: '+971 4 359 1532',
    EMAIL: 'Shobhabeautysaloon@gmail.com',
    INSTAGRAM: 'https://instagram.com/shobhasaloon',
    ADDRESS: {
      STREET: 'Meena Bazaar',
      CITY: 'Bur Dubai',
      COUNTRY: 'UAE',
      COORDINATES: {
        LAT: 25.2598,
        LNG: 55.2708
      }
    },
    HOURS: {
      OPEN: '10:00',
      CLOSE: '22:00',
      DAYS: 'Daily (365 days a year)',
      TIMEZONE: 'Asia/Dubai'
    }
  },
  
  // Services Configuration
  SERVICES: {
    HAIR: ['Hair Straightening', 'Blow Dry', 'Hair Cut & Style', 'Hair Coloring'],
    NAILS: ['Press-on Nails', 'Gel Manicure', 'Nail Art', 'French Manicure'],
    MAKEUP: ['Bridal Makeup', 'Party Makeup', 'Daily Makeup'],
    FACIAL: ['Deep Cleansing', 'Hydrating', 'Anti-Aging', 'Brightening'],
    WAXING: ['Full Body', 'Legs', 'Underarms', 'Brazilian'],
    THREADING: ['Eyebrows', 'Upper Lip', 'Full Face'],
    BRIDAL: ['Complete Package', 'Trial Session', 'Mehendi + Makeup'],
    SPECIALTIES: ['Hair Straightening', 'Blow Dry', 'Mehendi', 'Press-on Nails']
  },
  
  // Pricing Ranges (AED)
  PRICING: {
    'Hair Straightening': { min: 200, max: 400 },
    'Blow Dry': { min: 50, max: 120 },
    'Mehendi': { min: 30, max: 500 },
    'Press-on Nails': { min: 80, max: 220 },
    'Bridal Makeup': { min: 300, max: 600 },
    'Nail Art': { min: 100, max: 200 },
    'Facial Treatment': { min: 100, max: 300 },
    'Waxing': { min: 30, max: 300 },
    'Threading': { min: 15, max: 100 }
  },
  
  // Packages
  PACKAGES: {
    'Bridal Glow Package': {
      price: 800,
      originalPrice: 1000,
      services: ['Bridal Makeup', 'Hair Styling', 'Mehendi Design', 'Manicure & Pedicure'],
      duration: '4-6 hours'
    },
    'Nails Glam Pack': {
      price: 180,
      originalPrice: 230,
      services: ['Press-on Nails', 'Nail Art Design', 'Hand Treatment', 'Cuticle Care'],
      duration: '1-2 hours'
    },
    'Monthly Care': {
      price: 250,
      services: ['2 Blow Dry Sessions', '1 Facial Treatment', 'Eyebrow Threading', '20% off other services'],
      duration: 'Monthly subscription'
    }
  }
};

// Helper functions for API integration
export const createWhatsAppBookingURL = (bookingData: {
  name: string;
  phone: string;
  email?: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}) => {
  const message = `🌟 *New Appointment Request* 🌟

👤 *Name:* ${bookingData.name}
📞 *Phone:* ${bookingData.phone}
${bookingData.email ? `📧 *Email:* ${bookingData.email}\n` : ''}💅 *Service:* ${bookingData.service}
📅 *Date:* ${bookingData.date}
⏰ *Time:* ${bookingData.time}
${bookingData.message ? `📝 *Special Request:* ${bookingData.message}\n` : ''}
---
Please confirm my appointment. Thank you! 🙏

*Shobha Beauty Studio & Nails*
📍 Meena Bazaar, Bur Dubai`;

  return `${API_CONFIG.WHATSAPP.BASE_URL}?text=${encodeURIComponent(message)}`;
};

export const createContactWhatsAppURL = (contactData: {
  name: string;
  message: string;
  phone?: string;
}) => {
  const message = `💬 *New Inquiry* 💬

👤 *Name:* ${contactData.name}
${contactData.phone ? `📞 *Phone:* ${contactData.phone}\n` : ''}📝 *Message:* ${contactData.message}

---
*Shobha Beauty Studio & Nails*
📍 Meena Bazaar, Bur Dubai`;

  return `${API_CONFIG.WHATSAPP.BASE_URL}?text=${encodeURIComponent(message)}`;
};

// Future API helper functions
export const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  try {
    const response = await fetch(`${API_CONFIG.API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

export default API_CONFIG;