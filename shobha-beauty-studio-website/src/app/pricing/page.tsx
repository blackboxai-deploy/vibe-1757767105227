"use client";

import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Service Pricing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent, competitive pricing with no hidden fees. 
            All services include professional consultation and aftercare advice.
          </p>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Hair Straightening Pricing */}
            <div className="bg-gradient-to-br from-sky-50 to-white border-2 border-sky-100 rounded-2xl p-8 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">✨</span>
                </div>
                <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-2">
                  Hair Straightening
                </h3>
                <p className="text-gray-600 mb-6">Professional smoothing treatments</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-sky-100">
                  <span className="text-gray-700">Keratin Treatment</span>
                  <span className="font-semibold text-sky-600">AED 250-400</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-sky-100">
                  <span className="text-gray-700">Chemical Straightening</span>
                  <span className="font-semibold text-sky-600">AED 200-350</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-sky-100">
                  <span className="text-gray-700">Touch-up Service</span>
                  <span className="font-semibold text-sky-600">AED 150-250</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">*Prices vary by hair length & thickness</p>
                <Link
                  href="/book"
                  className="block bg-sky-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-sky-600 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Blow Dry Pricing */}
            <div className="bg-gradient-to-br from-sky-50 to-white border-2 border-sky-100 rounded-2xl p-8 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">💨</span>
                </div>
                <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-2">
                  Blow Dry
                </h3>
                <p className="text-gray-600 mb-6">Professional styling services</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-sky-100">
                  <span className="text-gray-700">Short Hair</span>
                  <span className="font-semibold text-sky-600">AED 40-60</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-sky-100">
                  <span className="text-gray-700">Medium Hair</span>
                  <span className="font-semibold text-sky-600">AED 60-80</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-sky-100">
                  <span className="text-gray-700">Long Hair</span>
                  <span className="font-semibold text-sky-600">AED 80-120</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">*Includes wash & styling</p>
                <Link
                  href="/book"
                  className="block bg-sky-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-sky-600 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Mehendi Pricing */}
            <div className="bg-gradient-to-br from-sky-50 to-white border-2 border-sky-100 rounded-2xl p-8 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">🎨</span>
                </div>
                <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-2">
                  Mehendi
                </h3>
                <p className="text-gray-600 mb-6">Beautiful henna art designs</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-sky-100">
                  <span className="text-gray-700">Simple Design</span>
                  <span className="font-semibold text-sky-600">AED 30-50</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-sky-100">
                  <span className="text-gray-700">Party Design</span>
                  <span className="font-semibold text-sky-600">AED 80-150</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-sky-100">
                  <span className="text-gray-700">Bridal Design</span>
                  <span className="font-semibold text-sky-600">AED 200-500</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">*Both hands included</p>
                <Link
                  href="/book"
                  className="block bg-sky-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-sky-600 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Press-on Nails Pricing */}
            <div className="bg-gradient-to-br from-sky-50 to-white border-2 border-sky-100 rounded-2xl p-8 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">💅</span>
                </div>
                <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-2">
                  Press-on Nails
                </h3>
                <p className="text-gray-600 mb-6">Instant glamorous nails</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-sky-100">
                  <span className="text-gray-700">Basic Application</span>
                  <span className="font-semibold text-sky-600">AED 80-120</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-sky-100">
                  <span className="text-gray-700">Premium Design</span>
                  <span className="font-semibold text-sky-600">AED 120-180</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-sky-100">
                  <span className="text-gray-700">Custom Length</span>
                  <span className="font-semibold text-sky-600">AED 150-220</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4">*Full set of 10 nails</p>
                <Link
                  href="/book"
                  className="block bg-sky-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-sky-600 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Special Packages & Offers
            </h2>
            <p className="text-lg text-gray-600">
              Save more with our combination packages and seasonal offers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Bridal Package */}
            <div className="bg-white border-2 border-sky-200 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold transform rotate-12">
                Most Popular
              </div>
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">👰</span>
              </div>
              <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-4">
                Bridal Beauty Package
              </h3>
              <p className="text-gray-600 mb-6">Complete bridal preparation</p>
              
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-sky-500">✓</span>
                  <span className="text-gray-700">Hair Straightening</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sky-500">✓</span>
                  <span className="text-gray-700">Professional Blow Dry</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sky-500">✓</span>
                  <span className="text-gray-700">Bridal Mehendi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sky-500">✓</span>
                  <span className="text-gray-700">Press-on Nails</span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-3xl font-bold text-gray-900 mb-2">
                  <span className="line-through text-gray-400 text-xl mr-2">AED 800</span>
                  AED 650
                </p>
                <p className="text-sm text-green-600 font-semibold">Save AED 150!</p>
              </div>
              
              <Link
                href="/book"
                className="block bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-8 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Book Bridal Package
              </Link>
            </div>

            {/* Party Ready Package */}
            <div className="bg-white border-2 border-sky-200 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🎉</span>
              </div>
              <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-4">
                Party Ready Package
              </h3>
              <p className="text-gray-600 mb-6">Perfect for celebrations</p>
              
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-sky-500">✓</span>
                  <span className="text-gray-700">Blow Dry Styling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sky-500">✓</span>
                  <span className="text-gray-700">Party Mehendi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sky-500">✓</span>
                  <span className="text-gray-700">Premium Nail Application</span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-3xl font-bold text-gray-900 mb-2">
                  <span className="line-through text-gray-400 text-xl mr-2">AED 320</span>
                  AED 250
                </p>
                <p className="text-sm text-green-600 font-semibold">Save AED 70!</p>
              </div>
              
              <Link
                href="/book"
                className="block bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-8 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Book Party Package
              </Link>
            </div>

            {/* Monthly Maintenance */}
            <div className="bg-white border-2 border-sky-200 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🔄</span>
              </div>
              <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-4">
                Monthly Care Package
              </h3>
              <p className="text-gray-600 mb-6">Regular beauty maintenance</p>
              
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-sky-500">✓</span>
                  <span className="text-gray-700">2 Blow Dry Sessions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sky-500">✓</span>
                  <span className="text-gray-700">1 Nail Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sky-500">✓</span>
                  <span className="text-gray-700">Simple Mehendi (Optional)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sky-500">✓</span>
                  <span className="text-gray-700">20% off other services</span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-3xl font-bold text-gray-900 mb-2">AED 180</p>
                <p className="text-sm text-green-600 font-semibold">Monthly subscription</p>
              </div>
              
              <Link
                href="/book"
                className="block bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-8 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Policies */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-4">
              Payment & Policies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-sky-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Payment Methods</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="text-sky-500">✓</span>
                  <span>Cash (AED)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sky-500">✓</span>
                  <span>Credit Cards (Visa, Mastercard)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sky-500">✓</span>
                  <span>Debit Cards</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sky-500">✓</span>
                  <span>Bank Transfers</span>
                </li>
              </ul>
            </div>

            <div className="bg-sky-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Booking Policies</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="text-sky-500">✓</span>
                  <span>24-hour cancellation notice</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sky-500">✓</span>
                  <span>Free consultation included</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sky-500">✓</span>
                  <span>Rescheduling allowed</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sky-500">✓</span>
                  <span>Group bookings welcome</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6">
            Book Your Service Today
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Quality services at competitive prices. No hidden fees, just beautiful results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+97143591532"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-sky-600 transition-all"
            >
              Call for Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}