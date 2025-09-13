"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("Thank you for your message! We will get back to you within 24 hours.");
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with Shobha Beauty Studio & Nails. We're here to answer your questions 
            and help you schedule the perfect beauty appointment.
          </p>
        </div>
      </section>

      {/* Contact Information & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-8">
                Visit Our Studio
              </h2>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Our Location
                    </h3>
                    <p className="text-gray-600">
                      Meena Bazaar<br/>
                      Bur Dubai, UAE
                    </p>
                    <Link
                      href="https://maps.google.com/?q=Meena+Bazaar+Bur+Dubai+UAE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-600 hover:text-sky-700 text-sm font-medium mt-2 inline-block"
                    >
                      Get Directions →
                    </Link>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Phone Number
                    </h3>
                    <a 
                      href="tel:+97143591532"
                      className="text-gray-600 hover:text-sky-600 transition-colors"
                    >
                      +971 4 359 1532
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Available daily 10 AM - 10 PM
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Email Address
                    </h3>
                    <a 
                      href="mailto:Shobhabeautysaloon@gmail.com"
                      className="text-gray-600 hover:text-sky-600 transition-colors break-all"
                    >
                      Shobhabeautysaloon@gmail.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">📷</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Follow Us
                    </h3>
                    <a 
                      href="https://www.instagram.com/shobhasaloon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-sky-600 transition-colors"
                    >
                      @shobhasaloon
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Daily beauty inspiration
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Business Hours
                    </h3>
                    <div className="text-gray-600">
                      <p className="font-medium text-sky-600">Open Daily</p>
                      <p>10:00 AM - 10:00 PM</p>
                      <p className="text-sm text-green-600 font-medium mt-1">
                        365 days a year
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+97143591532"
                  className="bg-sky-500 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-sky-600 transition-colors"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/97143591532"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-green-700 transition-colors"
                >
                  WhatsApp
                </a>
                <Link
                  href="/book"
                  className="border-2 border-sky-500 text-sky-600 px-6 py-3 rounded-full font-semibold text-center hover:bg-sky-50 transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>

            {/* Google Maps */}
            <div>
              <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-8">
                Find Us on Map
              </h2>
              <div className="bg-gray-100 rounded-2xl overflow-hidden h-96 lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5441087465467!2d55.26834641501438!3d25.259869483905426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xa5286883d5dd8594!2sMeena%20Bazaar%2C%20Bur%20Dubai%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1634567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shobha Beauty Studio Location - Meena Bazaar, Bur Dubai"
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Located in the heart of Meena Bazaar, Bur Dubai - Easy access by metro, bus, or car
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600">
              Have questions or need more information? We'd love to hear from you!
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-sky-100 p-8 md:p-12">
            {submitMessage ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-semibold text-lg text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">{submitMessage}</p>
                <button
                  onClick={() => setSubmitMessage("")}
                  className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-sky-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-sky-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-sky-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-sky-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject...</option>
                    <option value="booking-inquiry">Booking Inquiry</option>
                    <option value="service-question">Service Question</option>
                    <option value="pricing-info">Pricing Information</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-sky-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                    placeholder="Please share your message, questions, or feedback..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-gradient-to-r from-sky-500 to-sky-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    We typically respond within 24 hours during business days
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-sky-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Do I need an appointment?
              </h3>
              <p className="text-gray-600">
                While walk-ins are welcome, we recommend booking an appointment to ensure 
                availability and minimize waiting time. You can book online, call us, or 
                WhatsApp us.
              </p>
            </div>

            <div className="bg-sky-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept cash (AED), credit cards (Visa, Mastercard), debit cards, 
                and bank transfers. All prices are in UAE Dirhams.
              </p>
            </div>

            <div className="bg-sky-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                How long do the services take?
              </h3>
              <p className="text-gray-600">
                Service duration varies: Blow dry (30-60 mins), Hair straightening (2-4 hours), 
                Mehendi (30 mins-3 hours), Press-on nails (30-45 mins). We'll provide exact 
                timing during consultation.
              </p>
            </div>

            <div className="bg-sky-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Do you use safe products?
              </h3>
              <p className="text-gray-600">
                Yes, we use only high-quality, certified products from trusted brands. 
                We maintain strict safety and hygiene standards, and all our staff are 
                professionally trained.
              </p>
            </div>

            <div className="bg-sky-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Can I cancel or reschedule my appointment?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel or reschedule with 24-hour advance notice. 
                Contact us by phone or WhatsApp to make changes to your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Contact us today to book your appointment or ask any questions
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
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}