"use client";

import Navigation from '../../components/Navigation';
import Link from 'next/link';

export default function PricingPage() {
  const packages = [
    {
      name: 'Bridal Glow',
      description: 'Complete bridal beauty transformation',
      price: 'AED 800',
      originalPrice: 'AED 1000',
      services: [
        'Bridal Makeup (HD)',
        'Hair Styling',
        'Bridal Mehendi',
        'Manicure & Pedicure',
        'Facial Treatment',
        'Trial Session'
      ],
      popular: true
    },
    {
      name: 'Nails Glam Pack',
      description: 'Complete nail transformation package',
      price: 'AED 180',
      originalPrice: 'AED 230',
      services: [
        'Press-on Nails Application',
        'Nail Art Design',
        'Cuticle Care',
        'Hand Moisturizing',
        'Nail Polish',
        'Follow-up Care'
      ]
    },
    {
      name: 'Hair Revival',
      description: 'Complete hair care and styling',
      price: 'AED 300',
      originalPrice: 'AED 380',
      services: [
        'Hair Straightening',
        'Deep Conditioning',
        'Blow Dry Styling',
        'Hair Treatment',
        'Scalp Massage',
        'Hair Care Consultation'
      ]
    }
  ];

  const services = [
    { category: 'Hair Services', items: [
      { name: 'Hair Straightening (Keratin)', price: 'AED 250-400' },
      { name: 'Hair Straightening (Chemical)', price: 'AED 200-350' },
      { name: 'Blow Dry (Short Hair)', price: 'AED 50-70' },
      { name: 'Blow Dry (Long Hair)', price: 'AED 80-120' },
      { name: 'Hair Cut & Style', price: 'AED 60-100' },
      { name: 'Hair Coloring', price: 'AED 120-300' }
    ]},
    { category: 'Nail Services', items: [
      { name: 'Press-on Nails (Basic)', price: 'AED 80-120' },
      { name: 'Press-on Nails (Premium)', price: 'AED 150-220' },
      { name: 'Nail Art Design', price: 'AED 40-80' },
      { name: 'Manicure', price: 'AED 30-50' },
      { name: 'Pedicure', price: 'AED 40-60' },
      { name: 'Gel Polish', price: 'AED 50-80' }
    ]},
    { category: 'Mehendi & Henna', items: [
      { name: 'Simple Mehendi', price: 'AED 30-50' },
      { name: 'Party Mehendi', price: 'AED 80-150' },
      { name: 'Bridal Mehendi', price: 'AED 200-500' },
      { name: 'Arabic Style', price: 'AED 60-120' },
      { name: 'Indian Traditional', price: 'AED 100-200' },
      { name: 'Contemporary Design', price: 'AED 70-130' }
    ]},
    { category: 'Other Services', items: [
      { name: 'Bridal Makeup', price: 'AED 300-600' },
      { name: 'Party Makeup', price: 'AED 150-300' },
      { name: 'Facial Treatment', price: 'AED 80-200' },
      { name: 'Eyebrow Threading', price: 'AED 15-25' },
      { name: 'Full Face Waxing', price: 'AED 60-100' },
      { name: 'Body Waxing', price: 'AED 100-200' }
    ]}
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-mobile">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gold/20 via-black to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Service <span className="text-gold">Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Transparent, competitive pricing with no hidden fees. 
            Quality beauty services at affordable rates.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Special <span className="text-gold">Packages</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Save more with our combination packages
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-gray-900/50 rounded-2xl border p-8 transition-all duration-300 hover:shadow-2xl ${
                pkg.popular ? 'border-gold shadow-gold/20' : 'border-gray-800 hover:border-gold/50'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="font-playfair text-2xl font-bold text-gold mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{pkg.description}</p>
                  <div className="space-y-1">
                    <p className="text-4xl font-bold text-white">{pkg.price}</p>
                    {pkg.originalPrice && (
                      <p className="text-gray-400 line-through">{pkg.originalPrice}</p>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.services.map((service, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <span className="text-gold">✓</span>
                      <span className="text-gray-300">{service}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-gold text-black hover:bg-yellow-500' 
                      : 'border-2 border-gold text-gold hover:bg-gold hover:text-black'
                  }`}
                >
                  Book Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services Pricing */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              A-la-carte <span className="text-gold">Services</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Individual service pricing for customized beauty sessions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((category, index) => (
              <div key={index} className="bg-black/50 rounded-2xl border border-gray-800 p-8">
                <h3 className="font-playfair text-2xl font-bold text-gold mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-800 last:border-b-0">
                      <span className="text-gray-300">{item.name}</span>
                      <span className="text-gold font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-gold">Book Your Service?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose from our range of professional beauty services and book your appointment today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transition-all duration-300"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+97143591532"
              className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold hover:text-black transition-all duration-300"
            >
              Call for Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}