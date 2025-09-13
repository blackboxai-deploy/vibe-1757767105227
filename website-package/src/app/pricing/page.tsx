"use client";

import Link from "next/link";

export default function PricingPage() {
  const alaCarteServices = [
    // Hair Services
    { category: "Hair Services", service: "Hair Straightening - Keratin", price: "AED 250-400", duration: "2-4 hours", specialty: true },
    { category: "Hair Services", service: "Hair Straightening - Chemical", price: "AED 200-350", duration: "2-3 hours", specialty: true },
    { category: "Hair Services", service: "Professional Blow Dry", price: "AED 40-120", duration: "30-60 mins", specialty: true },
    { category: "Hair Services", service: "Hair Wash & Set", price: "AED 30-50", duration: "45 mins" },
    { category: "Hair Services", service: "Hair Cut & Style", price: "AED 60-100", duration: "1 hour" },
    
    // Makeup Services
    { category: "Makeup", service: "Bridal Makeup", price: "AED 300-500", duration: "2-3 hours" },
    { category: "Makeup", service: "Party Makeup", price: "AED 150-250", duration: "1-2 hours" },
    { category: "Makeup", service: "Daily Makeup", price: "AED 80-120", duration: "45 mins" },
    { category: "Makeup", service: "Special Event Makeup", price: "AED 200-300", duration: "1.5 hours" },
    
    // Nail Services
    { category: "Nails", service: "Press-on Nails Application", price: "AED 80-220", duration: "30-45 mins", specialty: true },
    { category: "Nails", service: "Manicure - Basic", price: "AED 30-50", duration: "30 mins" },
    { category: "Nails", service: "Manicure - Deluxe", price: "AED 60-80", duration: "45 mins" },
    { category: "Nails", service: "Nail Art & Design", price: "AED 40-100", duration: "30-60 mins" },
    
    // Facial Services
    { category: "Facial", service: "Deep Cleansing Facial", price: "AED 80-120", duration: "1 hour" },
    { category: "Facial", service: "Anti-Aging Facial", price: "AED 120-180", duration: "1.5 hours" },
    { category: "Facial", service: "Hydrating Facial", price: "AED 100-150", duration: "1 hour" },
    { category: "Facial", service: "Acne Treatment", price: "AED 90-140", duration: "1 hour" },
    
    // Waxing Services
    { category: "Waxing", service: "Full Body Waxing", price: "AED 150-250", duration: "2 hours" },
    { category: "Waxing", service: "Half Body Waxing", price: "AED 80-120", duration: "1 hour" },
    { category: "Waxing", service: "Facial Waxing", price: "AED 30-50", duration: "30 mins" },
    { category: "Waxing", service: "Eyebrow Waxing", price: "AED 20-30", duration: "15 mins" },
    
    // Threading Services
    { category: "Threading", service: "Eyebrow Threading", price: "AED 15-25", duration: "15 mins" },
    { category: "Threading", service: "Upper Lip Threading", price: "AED 10-15", duration: "10 mins" },
    { category: "Threading", service: "Chin Threading", price: "AED 15-20", duration: "15 mins" },
    { category: "Threading", service: "Full Face Threading", price: "AED 40-60", duration: "30 mins" },
    
    // Mehendi Services
    { category: "Mehendi", service: "Bridal Mehendi", price: "AED 200-500", duration: "2-4 hours", specialty: true },
    { category: "Mehendi", service: "Party Mehendi", price: "AED 80-150", duration: "1-2 hours", specialty: true },
    { category: "Mehendi", service: "Simple Mehendi", price: "AED 30-50", duration: "30 mins", specialty: true },
    { category: "Mehendi", service: "Custom Design", price: "AED 100-200", duration: "1-3 hours", specialty: true }
  ];

  const comboBundles = [
    {
      name: "Bridal Glow Package",
      price: "AED 850",
      originalPrice: "AED 1050",
      savings: "AED 200",
      duration: "6-8 hours",
      services: [
        "Complete Bridal Makeup",
        "Hair Straightening or Styling", 
        "Bridal Mehendi (Both Hands)",
        "Manicure & Press-on Nails",
        "Eyebrow Threading",
        "Upper Lip Threading"
      ],
      popular: true
    },
    {
      name: "Nails Glam Pack",
      price: "AED 180",
      originalPrice: "AED 220", 
      savings: "AED 40",
      duration: "1.5 hours",
      services: [
        "Deluxe Manicure",
        "Press-on Nails Application",
        "Nail Art Design",
        "Hand Moisturizing Treatment"
      ]
    },
    {
      name: "Hair Care Special",
      price: "AED 320",
      originalPrice: "AED 400",
      savings: "AED 80", 
      duration: "3-4 hours",
      services: [
        "Hair Straightening (Keratin)",
        "Professional Blow Dry",
        "Hair Treatment",
        "Style Consultation"
      ]
    },
    {
      name: "Party Ready Bundle",
      price: "AED 280",
      originalPrice: "AED 350",
      savings: "AED 70",
      duration: "2-3 hours", 
      services: [
        "Party Makeup",
        "Hair Styling",
        "Eyebrow Threading",
        "Simple Mehendi"
      ]
    },
    {
      name: "Monthly Maintenance",
      price: "AED 200",
      originalPrice: "AED 280",
      savings: "AED 80",
      duration: "Multiple visits",
      services: [
        "2 Blow Dry Sessions",
        "1 Manicure Session", 
        "Eyebrow Threading",
        "20% off other services"
      ],
      subscription: true
    }
  ];

  const categorizedServices = alaCarteServices.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof alaCarteServices>);

  return (
    <div className="min-h-screen pb-mobile">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Service <span className="text-gold">Pricing & Packages</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent, competitive pricing with no hidden fees. 
            All services include professional consultation and aftercare advice.
          </p>
        </div>
      </section>

      {/* Combo Bundles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-black mb-4">
              Special <span className="text-gold">Combo Bundles</span>
            </h2>
            <p className="text-lg text-gray-600">
              Save more with our expertly curated service packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comboBundles.map((bundle, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-2xl border-2 p-8 card-hover ${
                  bundle.popular 
                    ? 'border-gold shadow-gold' 
                    : 'border-gray-200'
                } ${bundle.subscription ? 'border-black' : ''}`}
              >
                {bundle.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold text-black px-4 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                {bundle.subscription && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-black text-gold px-4 py-2 rounded-full text-sm font-bold">
                      SUBSCRIPTION
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-playfair text-2xl font-bold text-black mb-2">
                    {bundle.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-gold">{bundle.price}</span>
                    <span className="text-lg line-through text-gray-400">{bundle.originalPrice}</span>
                  </div>
                  <p className="text-green-600 font-semibold text-sm">Save {bundle.savings}!</p>
                  <p className="text-gray-500 text-sm">{bundle.duration}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {bundle.services.map((service, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <span className="text-gold mt-1">✓</span>
                      <span className="text-gray-700 text-sm">{service}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/book"
                  className={`block text-center py-3 px-6 rounded-full font-semibold transition-all ${
                    bundle.popular 
                      ? 'bg-gold text-black hover:bg-yellow-500' 
                      : bundle.subscription
                        ? 'bg-black text-gold hover:bg-gray-800'
                        : 'bg-gray-800 text-white hover:bg-black'
                  }`}
                >
                  {bundle.subscription ? 'Subscribe Now' : 'Book Package'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A-la-carte Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-black mb-4">
              Individual <span className="text-gold">Service Pricing</span>
            </h2>
            <p className="text-lg text-gray-600">
              Choose individual services based on your specific needs
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(categorizedServices).map(([category, services]) => (
              <div key={category} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl text-black">
                      {category === 'Hair Services' ? '💇‍♀️' : 
                       category === 'Makeup' ? '💄' :
                       category === 'Nails' ? '💅' :
                       category === 'Facial' ? '🧴' :
                       category === 'Waxing' ? '🪒' :
                       category === 'Threading' ? '🧵' :
                       category === 'Mehendi' ? '🎨' : '✨'}
                    </span>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-black">{category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div 
                      key={index} 
                      className={`flex justify-between items-center p-4 rounded-lg border ${
                        service.specialty 
                          ? 'bg-gold/10 border-gold' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div>
                        <h4 className={`font-semibold ${service.specialty ? 'text-gold' : 'text-black'}`}>
                          {service.service}
                          {service.specialty && (
                            <span className="ml-2 text-xs bg-gold text-black px-2 py-1 rounded-full">
                              SPECIALTY
                            </span>
                          )}
                        </h4>
                        <p className="text-gray-600 text-sm">{service.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${service.specialty ? 'text-gold' : 'text-black'}`}>
                          {service.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Policies */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl font-bold text-black mb-4">
              Payment & <span className="text-gold">Policies</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gold/10 p-6 rounded-lg border border-gold/20">
              <h3 className="font-playfair font-semibold text-lg text-black mb-4">Payment Methods</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span>Cash (AED)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span>Credit Cards (Visa, Mastercard)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span>Debit Cards</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span>Bank Transfers</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-playfair font-semibold text-lg text-black mb-4">Booking Policies</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span>24-hour cancellation notice</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span>Free consultation included</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span>Rescheduling allowed</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span>Group bookings welcome</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/5 p-6 rounded-lg border border-black/20">
              <h3 className="font-playfair font-semibold text-lg text-black mb-4">Service Guarantee</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span>100% satisfaction guarantee</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span>Premium products only</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span>Experienced professionals</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span>Hygiene certified</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Book Your <span className="text-gold">Service Today</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Quality services at competitive prices. No hidden fees, just beautiful results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="btn-primary text-lg px-10 py-4"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+97143591532"
              className="btn-secondary text-lg px-10 py-4"
            >
              Call for Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}