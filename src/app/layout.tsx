import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Shobha Beauty Studio & Nails | Premium Beauty Salon in Bur Dubai",
    template: "%s | Shobha Beauty Studio"
  },
  description: "Your one-stop beauty destination in Bur Dubai, Meena Bazaar. Specializing in Hair Straightening, Blow Dry, Mehendi, Press-on Nails, Bridal makeup and more. Open daily 10 AM - 10 PM.",
  keywords: [
    "Beauty Studio Bur Dubai", 
    "Nail Studio Meena Bazaar", 
    "Hair Straightening Dubai",
    "Mehendi Dubai",
    "Press-on Nails Dubai",
    "Bridal Makeup Dubai",
    "Beauty Salon UAE"
  ],
  authors: [{ name: "Shobha Beauty Studio & Nails" }],
  creator: "Shobha Beauty Studio & Nails",
  publisher: "Shobha Beauty Studio & Nails",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.shobhabeautystudio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shobha Beauty Studio & Nails | Premium Beauty Salon in Bur Dubai",
    description: "Your one-stop beauty destination specializing in Hair Straightening, Blow Dry, Mehendi, Press-on Nails. Located in Bur Dubai, Meena Bazaar, UAE.",
    url: "https://www.shobhabeautystudio.com",
    siteName: "Shobha Beauty Studio & Nails",
    images: [
      {
        url: "https://i.postimg.cc/YqtGN1NK/IMG-20250808-WA0128.jpg",
        width: 1200,
        height: 630,
        alt: "Shobha Beauty Studio & Nails - Premium Beauty Salon",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// LocalBusiness Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Shobha Beauty Studio & Nails",
  "image": "https://i.postimg.cc/YqtGN1NK/IMG-20250808-WA0128.jpg",
  "@id": "https://www.shobhabeautystudio.com",
  "url": "https://www.shobhabeautystudio.com",
  "telephone": "+971 4 359 1532",
  "email": "Shobhabeautysaloon@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Meena Bazaar",
    "addressLocality": "Bur Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.2598,
    "longitude": 55.2708
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "10:00",
    "closes": "22:00"
  },
  "sameAs": [
    "https://instagram.com/shobhasaloon"
  ],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
  "currenciesAccepted": "AED",
  "serviceArea": {
    "@type": "Place",
    "name": "Dubai, UAE"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Beauty Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hair Straightening",
          "description": "Professional hair straightening services for smooth, silky hair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Blow Dry",
          "description": "Expert blow drying for perfect hair styling"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mehendi",
          "description": "Beautiful henna designs for all occasions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Press-on Nails",
          "description": "Instant glamorous nails with professional press-on nail application"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bridal Makeup",
          "description": "Complete bridal beauty services for your special day"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics 4 Placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics 4 - Replace GA_MEASUREMENT_ID with actual ID
              // gtag('config', 'GA_MEASUREMENT_ID');
              console.log('Google Analytics 4 ready for configuration');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}