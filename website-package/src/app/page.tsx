"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

export default function HomePage() {
  const [currentOffer, setCurrentOffer] = useState(0);
  
  const offers = [
    { title: "Bridal Glow Package", discount: "20% OFF", description: "Complete bridal beauty transformation" },
    { title: "Nails Glam Pack", discount: "15% OFF", description: "Manicure + Press-on Nails combo" },
    { title: "Hair Care Special", discount: "25% OFF", description: "Hair Straightening + Blow Dry" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen pb-mobile">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4e12895e-a1f8-46a8-a30b-7c20c21f75ad.png"
            alt="Shobha Beauty Studio - Luxury salon interior"
            className="w-full h-full object-cover lazy-image"
            loading="lazy"
            onLoad={(e) => e.currentTarget.classList.add('loaded')}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fadeInUp">
              <div className="mb-6">
                <img
                  src="https://i.postimg.cc/YqtGN1NK/IMG-20250808-WA0128.jpg"
                  alt="Shobha Beauty Studio Logo"
                  className="h-20 w-20 mx-auto lg:mx-0 mb-4 rounded-lg bg-white/10 p-2"
                  loading="eager"
                />
              </div>
              
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                <span className="text-gold">Your one-stop</span>
                <br />beauty destination
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Experience premium beauty services at Shobha Beauty Studio & Nails in the heart of Meena Bazaar, Bur Dubai. 
                Open daily 10AM-10PM, 365 days.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="tel:+97143591532"
                  className="btn-primary"
                >
                  📞 Call Now
                </a>
                <Link
                  href="/book"
                  className="btn-secondary"
                >
                  📅 Book Appointment
                </Link>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <span className="text-gold text-xl">🕒</span>
                  <span className="text-sm font-medium text-white">Daily 10AM-10PM</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <span className="text-gold text-xl">📍</span>
                  <span className="text-sm font-medium text-white">Meena Bazaar, Bur Dubai</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <span className="text-gold text-xl">⭐</span>
                  <span className="text-sm font-medium text-white">365 days open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-black mb-4">
              Our Expert Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional beauty treatments designed to enhance your natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Hair Straightening", icon: "✨", desc: "Keratin & chemical treatments", specialty: true },
              { name: "Blow Dry", icon: "💨", desc: "Professional styling", specialty: true },
              { name: "Mehendi", icon: "🎨", desc: "Henna art & designs", specialty: true },
              { name: "Press-on Nails", icon: "💅", desc: "Instant glamorous nails", specialty: true },
              { name: "Makeup", icon: "💄", desc: "Professional makeup services" },
              { name: "Facial", icon: "🧴", desc: "Deep cleansing & rejuvenation" },
              { name: "Waxing", icon: "🪒", desc: "Hair removal services" },
              { name: "Bridal", icon: "👰", desc: "Complete bridal packages" }
            ].map((service, index) => (
              <div 
                key={service.name} 
                className={`card-hover p-6 rounded-xl text-center ${
                  service.specialty 
                    ? 'bg-gradient-to-br from-gold/10 to-gold/5 border-2 border-gold' 
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <div className={`w-16 h-16 ${service.specialty ? 'bg-gold' : 'bg-gray-800'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-2xl ${service.specialty ? 'text-black' : 'text-white'}`}>
                    {service.icon}
                  </span>
                </div>
                <h3 className={`font-playfair font-semibold text-lg mb-2 ${service.specialty ? 'text-gold' : 'text-black'}`}>
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
                {service.specialty && (
                  <span className="inline-block mt-2 bg-gold text-black text-xs px-2 py-1 rounded-full font-semibold">
                    SPECIALTY
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="btn-primary"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Rotating Offers */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold text-white mb-8">
            Special Offers
          </h2>
          
          <div className="relative h-32 overflow-hidden">
            {offers.map((offer, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentOffer ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}
              >
                <div className="bg-gold text-black p-6 rounded-xl">
                  <h3 className="font-playfair text-2xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-lg mb-2">{offer.discount}</p>
                  <p className="text-sm">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 mt-6">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentOffer(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentOffer ? 'bg-gold' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-black mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Fatima A.", service: "Hair Straightening", review: "Amazing results! My hair has never looked so smooth and professional. The team is incredibly skilled.", rating: 5 },
              { name: "Priya S.", service: "Bridal Package", review: "Perfect bridal experience! The mehendi was stunning and makeup flawless. Highly recommend for special occasions.", rating: 5 },
              { name: "Sarah M.", service: "Press-on Nails", review: "Love my nails! They look so natural and elegant. Perfect for my work environment. Will definitely be back!", rating: 5 }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                <div>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-sm text-gold">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-black mb-4">
              Follow Our Journey
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Get daily beauty inspiration on Instagram
            </p>
            <a
              href="https://instagram.com/shobhasaloon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gold hover:text-black transition-colors"
            >
              <span className="text-2xl">📷</span>
              <span className="font-semibold">@shobhasaloon</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={`https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/df8f0820-afcf-4bf2-a973-b6d80460a32b.png}+Beauty+Work+Showcase`}
                  alt={`Instagram post ${i}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Your Beauty Transformation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your appointment today at Dubai's premier beauty destination
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="btn-primary text-lg px-10 py-4"
            >
              Book Appointment Now
            </Link>
            <a
              href="https://wa.me/97143591532"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-10 py-4"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}