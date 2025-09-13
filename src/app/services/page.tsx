"use client";

import Navigation from '../../components/Navigation';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 'hair',
      name: 'Hair Services',
      icon: '💇‍♀️',
      description: 'Complete hair care and styling solutions',
      services: [
        'Hair Straightening (Keratin & Chemical)',
        'Professional Blow Dry',
        'Hair Cutting & Styling',
        'Hair Coloring & Highlights',
        'Hair Treatments & Conditioning',
        'Hair Extensions'
      ],
      priceRange: 'AED 40 - 400'
    },
    {
      id: 'makeup',
      name: 'Makeup Services',
      icon: '💄',
      description: 'Professional makeup for all occasions',
      services: [
        'Bridal Makeup',
        'Party Makeup',
        'Corporate/Office Makeup',
        'Traditional/Cultural Makeup',
        'Makeup for Photography',
        'Makeup Lessons'
      ],
      priceRange: 'AED 80 - 500'
    },
    {
      id: 'nails',
      name: 'Nail Services',
      icon: '💅',
      description: 'Complete nail care and artistry',
      services: [
        'Press-on Nails Application',
        'Nail Art & Designs',
        'Manicure & Pedicure',
        'Gel Polish Application',
        'Nail Extensions',
        'Nail Repair & Care'
      ],
      priceRange: 'AED 30 - 250'
    },
    {
      id: 'facial',
      name: 'Facial Treatments',
      icon: '✨',
      description: 'Rejuvenating skincare treatments',
      services: [
        'Deep Cleansing Facial',
        'Hydrating Facial',
        'Anti-Aging Facial',
        'Acne Treatment Facial',
        'Brightening Facial',
        'Sensitive Skin Facial'
      ],
      priceRange: 'AED 60 - 200'
    },
    {
      id: 'waxing',
      name: 'Waxing Services',
      icon: '🕯️',
      description: 'Professional hair removal',
      services: [
        'Full Body Waxing',
        'Facial Waxing',
        'Eyebrow Shaping',
        'Upper Lip Waxing',
        'Arm & Leg Waxing',
        'Bikini Waxing'
      ],
      priceRange: 'AED 15 - 150'
    },
    {
      id: 'threading',
      name: 'Threading',
      icon: '🧵',
      description: 'Precise eyebrow shaping',
      services: [
        'Eyebrow Threading',
        'Upper Lip Threading',
        'Chin Threading',
        'Forehead Threading',
        'Sideburns Threading',
        'Full Face Threading'
      ],
      priceRange: 'AED 10 - 50'
    },
    {
      id: 'bridal',
      name: 'Bridal Packages',
      icon: '👰',
      description: 'Complete bridal beauty solutions',
      services: [
        'Bridal Makeup (HD)',
        'Bridal Hair Styling',
        'Bridal Mehendi',
        'Bridal Nail Art',
        'Pre-Wedding Treatments',
        'Bridal Trial Sessions'
      ],
      priceRange: 'AED 300 - 1000'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-mobile">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gold/20 via-black to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gold">Beauty Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive beauty treatments designed to enhance your natural beauty 
            with professional care and premium products.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className="group bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-gold/50 transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gold">
                        {service.name}
                      </h2>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {service.services.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="text-gold text-sm">✓</span>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div>
                      <p className="text-gold font-semibold">{service.priceRange}</p>
                      <p className="text-gray-400 text-xs">Starting prices</p>
                    </div>
                    <Link
                      href="/pricing"
                      className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300"
                    >
                      View Pricing
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Highlights */}
      <section className="py-16 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gold">Signature Specialties</span>
            </h2>
            <p className="text-gray-300 text-lg">
              These are the services that make us the premier beauty destination in Bur Dubai
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/50 p-6 rounded-2xl border border-gold/30 text-center">
              <div className="text-4xl mb-4">💇‍♀️</div>
              <h3 className="font-playfair text-xl font-semibold text-gold mb-2">Hair Straightening</h3>
              <p className="text-gray-300 text-sm mb-3">Keratin treatments & chemical straightening for silky smooth hair</p>
              <p className="text-gold font-bold">Starting AED 200</p>
            </div>
            
            <div className="bg-black/50 p-6 rounded-2xl border border-gold/30 text-center">
              <div className="text-4xl mb-4">💨</div>
              <h3 className="font-playfair text-xl font-semibold text-gold mb-2">Blow Dry</h3>
              <p className="text-gray-300 text-sm mb-3">Professional styling with volume, bounce, and lasting hold</p>
              <p className="text-gold font-bold">Starting AED 50</p>
            </div>
            
            <div className="bg-black/50 p-6 rounded-2xl border border-gold/30 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-playfair text-xl font-semibold text-gold mb-2">Mehendi</h3>
              <p className="text-gray-300 text-sm mb-3">Traditional & contemporary henna designs for all occasions</p>
              <p className="text-gold font-bold">Starting AED 30</p>
            </div>
            
            <div className="bg-black/50 p-6 rounded-2xl border border-gold/30 text-center">
              <div className="text-4xl mb-4">💅</div>
              <h3 className="font-playfair text-xl font-semibold text-gold mb-2">Press-on Nails</h3>
              <p className="text-gray-300 text-sm mb-3">Instant glamorous nails with premium application</p>
              <p className="text-gold font-bold">Starting AED 80</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-gold">Transform Your Look?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the difference at Shobha Beauty Studio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transition-all duration-300 hover:shadow-lg"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+97143591532"
              className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold hover:text-black transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}