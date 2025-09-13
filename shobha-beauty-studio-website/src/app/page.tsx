"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your Beauty
                <span className="block text-sky-600">Destination</span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 mt-2">
                  in Bur Dubai
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Experience premium beauty services at Shobha Beauty Studio & Nails. 
                Specializing in hair straightening, blow dry, mehendi, and press-on nails 
                in the heart of Meena Bazaar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/book"
                  className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Book Appointment
                </Link>
                <a
                  href="tel:+97143591532"
                  className="border-2 border-sky-500 text-sky-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-sky-50 transition-all duration-300"
                >
                  Call Now
                </a>
              </div>

              {/* Quick Info */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <span className="text-sky-500 text-xl">🕒</span>
                  <span className="text-sm font-medium text-gray-700">Daily 10AM-10PM</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <span className="text-sky-500 text-xl">📍</span>
                  <span className="text-sm font-medium text-gray-700">Meena Bazaar</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <span className="text-sky-500 text-xl">⭐</span>
                  <span className="text-sm font-medium text-gray-700">10+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d57842c5-8e99-4c11-afc0-9fdb004751bd.png"
                  alt="Shobha Beauty Studio elegant salon interior with professional styling chairs and mirrors"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/51b6e3af-d7be-4070-8ee7-0ced47ac93ff.png";
                    e.currentTarget.alt = "Beauty Studio Interior";
                  }}
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-sky-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-sky-300 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Specialty Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our range of professional beauty services designed to enhance 
              your natural beauty and boost your confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Hair Straightening */}
            <div className="group bg-gradient-to-br from-sky-50 to-white p-8 rounded-xl border border-sky-100 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">✨</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                Hair Straightening
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Professional keratin treatments and chemical straightening for silky, smooth hair that lasts.
              </p>
              <Link
                href="/services#hair-straightening"
                className="text-sky-600 font-medium text-sm hover:text-sky-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Blow Dry */}
            <div className="group bg-gradient-to-br from-sky-50 to-white p-8 rounded-xl border border-sky-100 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">💨</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                Professional Blow Dry
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Expert styling with professional tools for perfect volume, bounce, and lasting hold.
              </p>
              <Link
                href="/services#blow-dry"
                className="text-sky-600 font-medium text-sm hover:text-sky-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Mehendi */}
            <div className="group bg-gradient-to-br from-sky-50 to-white p-8 rounded-xl border border-sky-100 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">🎨</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                Mehendi & Henna
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Beautiful traditional and contemporary henna designs for all occasions and celebrations.
              </p>
              <Link
                href="/services#mehendi"
                className="text-sky-600 font-medium text-sm hover:text-sky-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Press-on Nails */}
            <div className="group bg-gradient-to-br from-sky-50 to-white p-8 rounded-xl border border-sky-100 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">💅</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                Press-on Nails
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Instant glamorous nails with premium press-on application for perfect manicured look.
              </p>
              <Link
                href="/services#press-on-nails"
                className="text-sky-600 font-medium text-sm hover:text-sky-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-sky-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Shobha Beauty Studio?
            </h2>
            <p className="text-lg text-gray-600">
              Your trusted beauty partner in Bur Dubai with exceptional service and results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">👑</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                10+ Years Experience
              </h3>
              <p className="text-gray-600">
                Over a decade of professional beauty services with thousands of satisfied clients
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🏆</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                Premium Products
              </h3>
              <p className="text-gray-600">
                We use only the finest quality products from trusted international brands
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🕒</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                Always Open
              </h3>
              <p className="text-gray-600">
                Open daily from 10 AM to 10 PM, 365 days a year for your convenience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Book your appointment today and experience the difference at Shobha Beauty Studio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Book Appointment
            </Link>
            <a
              href="https://wa.me/97143591532"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-sky-600 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}