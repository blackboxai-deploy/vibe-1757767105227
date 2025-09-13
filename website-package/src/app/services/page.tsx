"use client";

import Link from "next/link";

export default function ServicesPage() {
  const specialtyServices = [
    {
      id: "hair-straightening",
      name: "Hair Straightening",
      icon: "✨",
      description: "Transform your hair with our professional straightening treatments using premium keratin and chemical processes.",
      features: ["Keratin Treatment", "Chemical Straightening", "Hair Consultation", "Aftercare Guidance"],
      duration: "2-4 hours",
      results: "3-6 months",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bc3d075f-e3cd-40f5-a6a5-b7e9bf5c2ef7.png"
    },
    {
      id: "blow-dry",
      name: "Professional Blow Dry",
      icon: "💨", 
      description: "Expert styling with professional tools for perfect volume, bounce, and lasting hold.",
      features: ["Volume Blow Dry", "Smooth Blow Dry", "Bouncy Curls", "Special Occasion Styling"],
      duration: "30-60 minutes",
      results: "2-3 days",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fea927cf-237b-41ba-a7e6-aa28fbded299.png"
    },
    {
      id: "mehendi",
      name: "Mehendi & Henna Art",
      icon: "🎨",
      description: "Beautiful traditional and contemporary henna designs for all occasions and celebrations.",
      features: ["Bridal Mehendi", "Party Designs", "Simple Patterns", "Custom Artwork"],
      duration: "30 mins - 3 hours", 
      results: "1-2 weeks",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/75e29f40-38a2-49ce-9d92-ddf180271f13.png"
    },
    {
      id: "press-on-nails",
      name: "Press-on Nails",
      icon: "💅",
      description: "Instant glamorous nails with premium press-on application for perfect manicured look.",
      features: ["French Tips", "Custom Designs", "Various Lengths", "Premium Quality"],
      duration: "30-45 minutes",
      results: "1-2 weeks", 
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e0088d3d-5391-4295-bbe8-87316719b9de.png"
    }
  ];

  const additionalServices = [
    {
      name: "Professional Makeup",
      icon: "💄",
      description: "Expert makeup for all occasions - from daily glam to bridal perfection",
      services: ["Daily Makeup", "Party Makeup", "Bridal Makeup", "Special Events"]
    },
    {
      name: "Facial Treatments", 
      icon: "🧴",
      description: "Deep cleansing and rejuvenating facial treatments for healthy, glowing skin",
      services: ["Deep Cleansing", "Anti-Aging", "Hydrating Facial", "Acne Treatment"]
    },
    {
      name: "Waxing Services",
      icon: "🪒", 
      description: "Professional hair removal services using premium wax for smooth, long-lasting results",
      services: ["Full Body", "Facial Waxing", "Brazilian", "Eyebrow Shaping"]
    },
    {
      name: "Threading",
      icon: "🧵",
      description: "Precise eyebrow and facial hair threading by expert technicians",
      services: ["Eyebrow Threading", "Upper Lip", "Chin Threading", "Full Face"]
    },
    {
      name: "Bridal Packages",
      icon: "👰",
      description: "Complete bridal beauty transformation packages for your special day",
      services: ["Full Bridal Makeup", "Hair Styling", "Mehendi", "Nail Art"]
    }
  ];

  return (
    <div className="min-h-screen pb-mobile">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Our Professional <span className="text-gold">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Experience premium beauty treatments with our specialized services. 
            Each service is performed by trained professionals using high-quality products.
          </p>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-black mb-4">
              Our <span className="text-gold">Specialty Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              What makes us the premier beauty destination in Bur Dubai
            </p>
          </div>

          <div className="space-y-20">
            {specialtyServices.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl text-black">{service.icon}</span>
                    </div>
                    <h3 className="font-playfair text-3xl md:text-4xl font-bold text-black">
                      {service.name}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <span className="text-gold text-lg mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gold/10 p-6 rounded-lg mb-6 border border-gold/20">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-black mb-2">Duration</h4>
                        <p className="text-gray-600 text-sm">{service.duration}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-2">Results Last</h4>
                        <p className="text-gray-600 text-sm">{service.results}</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/book"
                    className="btn-primary"
                  >
                    Book {service.name}
                  </Link>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img
                    src={service.image}
                    alt={`${service.name} service showcase`}
                    className="rounded-2xl shadow-lg w-full h-auto object-cover lazy-image"
                    loading="lazy"
                    onLoad={(e) => e.currentTarget.classList.add('loaded')}
                  />
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gold/20 rounded-full"></div>
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold/30 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-black mb-4">
              Complete <span className="text-gold">Beauty Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              From head to toe, we've got all your beauty needs covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg card-hover border-l-4 border-gold">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl text-gold">{service.icon}</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-black">
                    {service.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.services.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-gold text-sm">•</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/book"
                  className="text-gold font-semibold hover:text-black transition-colors"
                >
                  Book Service →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Book Your <span className="text-gold">Service</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose from our range of professional beauty services and book your appointment today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="btn-primary text-lg px-10 py-4"
            >
              Book Appointment
            </Link>
            <Link
              href="/pricing"
              className="btn-secondary text-lg px-10 py-4"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}