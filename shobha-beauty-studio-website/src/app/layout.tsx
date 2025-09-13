import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  subsets: ["latin"], 
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: {
    default: "Shobha Beauty Studio & Nails | Premium Beauty Salon in Bur Dubai",
    template: "%s | Shobha Beauty Studio"
  },
  description: "Professional beauty salon in Bur Dubai, Meena Bazaar. Specializing in Hair Straightening, Blow Dry, Mehendi, and Press-on Nails. Open daily 10am-10pm. Book your appointment today!",
  keywords: ["beauty salon", "hair straightening", "blow dry", "mehendi", "press-on nails", "Bur Dubai", "Meena Bazaar", "UAE", "beauty studio"],
  authors: [{ name: "Shobha Beauty Studio" }],
  creator: "Shobha Beauty Studio",
  publisher: "Shobha Beauty Studio",
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
    description: "Professional beauty salon specializing in Hair Straightening, Blow Dry, Mehendi, and Press-on Nails. Located in Bur Dubai, Meena Bazaar, UAE.",
    url: "https://www.shobhabeautystudio.com",
    siteName: "Shobha Beauty Studio",
    images: [
      {
        url: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/93957d36-5e68-4b17-aa74-c82835a54ea0.png+Bur+Dubai",
        width: 1200,
        height: 630,
        alt: "Shobha Beauty Studio - Professional Beauty Salon",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shobha Beauty Studio & Nails | Premium Beauty Salon",
    description: "Professional beauty salon in Bur Dubai. Hair Straightening, Blow Dry, Mehendi, Press-on Nails. Open daily 10am-10pm.",
    images: ["https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f168fd1c-95d2-4599-aa77-b4ac66aedd10.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Shobha Beauty Studio & Nails",
  "image": "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/27e1e56e-4285-4aab-bc9c-a65e0b351b1f.png",
  "@id": "https://www.shobhabeautystudio.com",
  "url": "https://www.shobhabeautystudio.com",
  "telephone": "+97143591532",
  "email": "Shobhabeautysaloon@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Meena Bazaar",
    "addressLocality": "Bur Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
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
    "https://www.instagram.com/shobhasaloon"
  ],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
  "currenciesAccepted": "AED",
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-inter bg-white text-gray-900 antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}