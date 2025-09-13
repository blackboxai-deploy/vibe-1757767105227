"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-yellow-600">Shobha Beauty Studio</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted beauty destination in the heart of Meena Bazaar, Bur Dubai. 
            Dedicated to enhancing your natural beauty with professional care and exceptional service.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Founded in 2011 in the bustling heart of Meena Bazaar, Bur Dubai, 
                  Shobha Beauty Studio & Nails began as a dream to provide exceptional 
                  beauty services to the diverse and vibrant community of Dubai.
                </p>
                <p>
                  What started as a small studio has grown into one of Bur Dubai's 
                  most trusted beauty destinations, serving thousands of satisfied 
                  clients over the past 13 years. Our commitment to quality, 
                  professionalism, and customer satisfaction has been the cornerstone 
                  of our success.
                </p>
                <p>
                  Today, we specialize in four core services: professional hair 
                  straightening, expert blow drying, intricate mehendi artistry, 
                  and glamorous press-on nails. Each service is performed with 
                  meticulous attention to detail and a passion for perfection.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-yellow-100 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">13+</div>
                  <div className="text-sm font-medium text-gray-800">Years Since 2011</div>
                </div>
                <div className="text-center p-4 bg-yellow-100 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">8000+</div>
                  <div className="text-sm font-medium text-gray-800">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/20968c41-b45b-4a43-b7c8-acb870de1ce3.png"
                alt="Shobha Beauty Studio founder and owner in professional portrait with elegant salon background"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1fd16336-183b-44dc-9598-3518c51b7820.png";
                  e.currentTarget.alt = "Studio Owner";
                }}
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-sky-200 rounded-full opacity-60"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-sky-300 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guided by our core values, we strive to provide exceptional beauty services 
              that enhance confidence and celebrate individual beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Excellence */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🏆</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600">
                We maintain the highest standards in all our services, using premium 
                products and advanced techniques to deliver outstanding results.
              </p>
            </div>

            {/* Trust */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🤝</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
                Trust & Safety
              </h3>
              <p className="text-gray-600">
                Your safety and satisfaction are our top priorities. We maintain strict 
                hygiene standards and use only certified, safe products.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">💡</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We stay updated with the latest beauty trends and techniques, 
                continuously improving our services to meet evolving needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600">
              Our skilled professionals bring years of experience and passion to every service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/770dc259-b7dd-44db-aecd-a24ceec995c9.png"
                alt="Professional hair specialist team member smiling portrait"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4f95146b-8c91-4b01-bcd1-578e0491538e.png";
                  e.currentTarget.alt = "Hair Specialist";
                }}
              />
              <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                Shobha
              </h3>
              <p className="text-sky-600 font-medium text-sm mb-2">Founder & Lead Stylist</p>
              <p className="text-gray-600 text-sm">
                Master hair stylist with 13+ years experience since 2011 in straightening and styling
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/375f7155-77cf-4400-a2e0-a202d54dfc7c.png"
                alt="Expert mehendi artist and henna specialist professional portrait"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9c9cd465-0186-41bb-9b37-df399d6db805.png";
                  e.currentTarget.alt = "Mehendi Artist";
                }}
              />
              <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                Priya
              </h3>
              <p className="text-sky-600 font-medium text-sm mb-2">Senior Mehendi Artist</p>
              <p className="text-gray-600 text-sm">
                Specialized in bridal and traditional mehendi with intricate design expertise
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4845cc31-6955-49f1-a097-33d3d8dec1b1.png"
                alt="Professional nail technician and manicure specialist team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/db859e6a-d1c9-4308-817f-c8b9bcc719f5.png";
                  e.currentTarget.alt = "Nail Specialist";
                }}
              />
              <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                Fatima
              </h3>
              <p className="text-sky-600 font-medium text-sm mb-2">Nail Specialist</p>
              <p className="text-gray-600 text-sm">
                Expert in press-on nails and manicure services with artistic flair
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e972ebed-0dd2-45df-9012-559d779d17bd.png"
                alt="Senior beauty consultant and customer service professional portrait"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3f6f2279-8a4f-43ec-85d2-3f8bcf59e6d9.png";
                  e.currentTarget.alt = "Beauty Consultant";
                }}
              />
              <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                Aisha
              </h3>
              <p className="text-sky-600 font-medium text-sm mb-2">Beauty Consultant</p>
              <p className="text-gray-600 text-sm">
                Experienced in customer consultation and personalized beauty solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Facility */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Facility
            </h2>
            <p className="text-lg text-gray-600">
              A modern, comfortable space designed for your relaxation and beauty transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">🏢</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Modern Equipment
                  </h3>
                  <p className="text-gray-600">
                    State-of-the-art professional equipment and tools for all our services, 
                    ensuring the best results and comfort.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">🧼</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Hygiene Standards
                  </h3>
                  <p className="text-gray-600">
                    Strict hygiene protocols with sanitized equipment, clean workspace, 
                    and safety measures for every client.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">💺</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Comfortable Environment
                  </h3>
                  <p className="text-gray-600">
                    Relaxing atmosphere with comfortable seating, pleasant ambiance, 
                    and welcoming space for all clients.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Prime Location
                  </h3>
                  <p className="text-gray-600">
                    Conveniently located in Meena Bazaar, Bur Dubai, with easy access 
                    and parking facilities nearby.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a163962b-b860-4e40-95ae-7eacb2f06032.png"
                alt="Modern beauty salon interior with elegant styling stations and comfortable waiting area"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d522de17-c284-4a50-be45-ac6fcdb7d84b.png";
                  e.currentTarget.alt = "Salon Interior";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Recognition
            </h2>
            <p className="text-lg text-gray-600">
              Our commitment to excellence recognized through professional certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-sky-50 to-white rounded-lg border border-sky-100">
              <div className="text-4xl mb-4">🏅</div>
              <h3 className="font-semibold text-gray-900 mb-2">Professional Certification</h3>
              <p className="text-sm text-gray-600">Certified beauty professionals with continuous training</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-sky-50 to-white rounded-lg border border-sky-100">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Safety Standards</h3>
              <p className="text-sm text-gray-600">Compliant with UAE health and safety regulations</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-sky-50 to-white rounded-lg border border-sky-100">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-semibold text-gray-900 mb-2">Client Satisfaction</h3>
              <p className="text-sm text-gray-600">95% customer satisfaction rate and positive reviews</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-sky-50 to-white rounded-lg border border-sky-100">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="font-semibold text-gray-900 mb-2">Community Trust</h3>
              <p className="text-sm text-gray-600">Trusted by Bur Dubai community since 2011 - 13+ years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Join thousands of satisfied clients who trust Shobha Beauty Studio for their beauty needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Book Your Visit
            </Link>
            <Link
              href="/gallery"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-sky-600 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}