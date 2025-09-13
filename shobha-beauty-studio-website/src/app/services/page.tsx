"use client";

import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Professional Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Experience premium beauty treatments with our specialized services. 
            Each service is performed by trained professionals using high-quality products.
          </p>
        </div>
      </section>

      {/* Hair Straightening Service */}
      <section id="hair-straightening" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">✨</span>
                </div>
                <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900">
                  Hair Straightening
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Transform your hair with our professional straightening treatments. 
                We offer both keratin treatments and chemical straightening options 
                to give you silky, smooth, and manageable hair that lasts.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-sky-500 text-lg mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Keratin Treatment</h3>
                    <p className="text-gray-600 text-sm">Smooths and strengthens hair while reducing frizz</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sky-500 text-lg mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Chemical Straightening</h3>
                    <p className="text-gray-600 text-sm">Permanent straightening for long-lasting results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sky-500 text-lg mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Hair Consultation</h3>
                    <p className="text-gray-600 text-sm">Professional assessment to choose the best treatment</p>
                  </div>
                </div>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Treatment Duration</h4>
                <p className="text-gray-600 text-sm mb-3">2-4 hours depending on hair length and type</p>
                <h4 className="font-semibold text-gray-900 mb-2">Results Last</h4>
                <p className="text-gray-600 text-sm">3-6 months with proper care</p>
              </div>

              <Link
                href="/book"
                className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Book Hair Straightening
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6f7f76f7-164e-4d00-beaa-db9fb9f268cb.png"
                alt="Professional hair straightening transformation showing before and after results with silky smooth hair"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f778dcb6-5107-4726-a0ec-4dea1c6149fd.png";
                  e.currentTarget.alt = "Hair Straightening Service";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blow Dry Service */}
      <section id="blow-dry" className="py-20 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2e496c7e-bfe8-4f63-87f9-3158a600075f.png"
                alt="Professional blow dry styling session showing expert technique with volume and perfect finish"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/efe065b8-62a9-4b01-9326-9204f94d13db.png";
                  e.currentTarget.alt = "Professional Blow Dry Service";
                }}
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">💨</span>
                </div>
                <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900">
                  Professional Blow Dry
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Get salon-perfect hair with our expert blow dry services. 
                Using professional tools and techniques, we create stunning styles 
                with volume, bounce, and lasting hold.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-sky-500 text-lg mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Volume Blow Dry</h3>
                    <p className="text-gray-600 text-sm">Creates lift and body for fine or flat hair</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sky-500 text-lg mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Smooth Blow Dry</h3>
                    <p className="text-gray-600 text-sm">Sleek, polished finish for professional looks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sky-500 text-lg mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Bouncy Curls</h3>
                    <p className="text-gray-600 text-sm">Soft, natural-looking curls and waves</p>
                  </div>
                </div>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Service Duration</h4>
                <p className="text-gray-600 text-sm mb-3">30-60 minutes depending on hair length</p>
                <h4 className="font-semibold text-gray-900 mb-2">Perfect For</h4>
                <p className="text-gray-600 text-sm">Special occasions, daily styling, or post-wash styling</p>
              </div>

              <Link
                href="/book"
                className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Book Blow Dry Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mehendi Service */}
      <section id="mehendi" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">🎨</span>
                </div>
                <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900">
                  Mehendi & Henna Art
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Beautiful, intricate henna designs for all occasions. From traditional 
                bridal patterns to contemporary geometric designs, our skilled artists 
                create stunning mehendi art that celebrates your special moments.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-sky-500 text-lg mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Bridal Mehendi</h3>
                    <p className="text-gray-600 text-sm">Elaborate designs for weddings and celebrations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sky-500 text-lg mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Party Mehendi</h3>
                    <p className="text-gray-600 text-sm">Stylish designs for festivals and parties</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sky-500 text-lg mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Simple & Contemporary</h3>
                    <p className="text-gray-600 text-sm">Modern, minimalist designs for everyday wear</p>
                  </div>
                </div>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Application Time</h4>
                <p className="text-gray-600 text-sm mb-3">30 minutes to 3 hours based on design complexity</p>
                <h4 className="font-semibold text-gray-900 mb-2">Natural Henna</h4>
                <p className="text-gray-600 text-sm">100% natural henna paste for safe, beautiful staining</p>
              </div>

              <Link
                href="/book"
                className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Book Mehendi Session
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c7bc18fb-7235-4444-8da3-58247fd2e052.png"
                alt="Beautiful intricate mehendi henna art design on hands showing traditional bridal patterns"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c49102aa-5da4-446d-a345-71ecc21a3cca.png";
                  e.currentTarget.alt = "Mehendi Henna Art Service";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Press-on Nails Service */}
      <section id="press-on-nails" className="py-20 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c299e1f9-518d-4d88-b2c5-649e8656a5bf.png"
                alt="Glamorous press-on nails application showing professional manicure with elegant nail designs"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c814ab0d-dc00-488e-95c3-3a8fb977572c.png";
                  e.currentTarget.alt = "Press-on Nails Service";
                }}
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl text-white">💅</span>
                </div>
                <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900">
                  Press-on Nails
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                Get instant glamorous nails with our premium press-on nail service. 
                Perfect for special occasions or when you want beautiful nails without 
                the time commitment of traditional manicures.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-sky-500 text-lg mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Instant Application</h3>
                    <p className="text-gray-600 text-sm">Quick 30-minute application for immediate results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sky-500 text-lg mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Various Designs</h3>
                    <p className="text-gray-600 text-sm">French tips, colors, patterns, and custom designs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sky-500 text-lg mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">High Quality Material</h3>
                    <p className="text-gray-600 text-sm">Durable, comfortable press-on nails that look natural</p>
                  </div>
                </div>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Application Time</h4>
                <p className="text-gray-600 text-sm mb-3">30-45 minutes including nail prep</p>
                <h4 className="font-semibold text-gray-900 mb-2">Lasts</h4>
                <p className="text-gray-600 text-sm">1-2 weeks with proper care</p>
              </div>

              <Link
                href="/book"
                className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Book Nail Application
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Book Your Service?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Choose from our range of professional beauty services and book your appointment today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-sky-600 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}