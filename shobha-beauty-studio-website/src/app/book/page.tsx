"use client";

import { useState } from "react";
import Link from "next/link";

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const services = [
    { id: "hair-straightening", name: "Hair Straightening", duration: "2-4 hours", price: "AED 200-400" },
    { id: "blow-dry", name: "Professional Blow Dry", duration: "30-60 mins", price: "AED 40-120" },
    { id: "mehendi", name: "Mehendi & Henna Art", duration: "30mins-3hours", price: "AED 30-500" },
    { id: "press-on-nails", name: "Press-on Nails", duration: "30-45 mins", price: "AED 80-220" },
    { id: "bridal-package", name: "Bridal Package", duration: "4-6 hours", price: "AED 650" },
    { id: "party-package", name: "Party Ready Package", duration: "2-3 hours", price: "AED 250" }
  ];

  const timeSlots = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM",
    "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM",
    "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
    "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
  ];

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
      setSubmitMessage("Thank you! Your appointment request has been received. We will contact you shortly to confirm your booking.");
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: "",
        message: ""
      });
    }, 2000);
  };

  // Get tomorrow's date as minimum date
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your Appointment
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule your beauty transformation with our expert team. 
            We're open daily from 10 AM to 10 PM, ready to serve you 365 days a year.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl border-2 border-sky-100 p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Schedule Your Service
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll confirm your appointment within 24 hours
              </p>
            </div>

            {submitMessage ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-semibold text-lg text-green-800 mb-2">Appointment Requested!</h3>
                <p className="text-green-700">{submitMessage}</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+97143591532"
                    className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
                  >
                    Call Us: +971 4 359 1532
                  </a>
                  <a
                    href="https://wa.me/97143591532"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-sky-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-sky-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-sky-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Select Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-sky-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                  >
                    <option value="">Choose your service...</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name} - {service.duration} ({service.price})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={getTomorrowDate()}
                      required
                      className="w-full px-4 py-3 border-2 border-sky-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-sky-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select time...</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests or Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-sky-200 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                    placeholder="Any special requests, allergies, or additional information..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-gradient-to-r from-sky-500 to-sky-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Book Appointment'}
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    * Required fields. We'll confirm your appointment within 24 hours.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-gray-600 mb-8">
            For urgent bookings or questions, contact us directly
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <a
              href="tel:+97143591532"
              className="bg-white p-6 rounded-xl border-2 border-sky-100 hover:border-sky-300 hover:shadow-lg transition-all group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📞</div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-sky-600 font-medium">+971 4 359 1532</p>
              <p className="text-sm text-gray-500 mt-2">Daily 10 AM - 10 PM</p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/97143591532"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl border-2 border-sky-100 hover:border-sky-300 hover:shadow-lg transition-all group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">💬</div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-sky-600 font-medium">Message Us</p>
              <p className="text-sm text-gray-500 mt-2">Quick responses</p>
            </a>

            {/* Visit */}
            <Link
              href="/contact"
              className="bg-white p-6 rounded-xl border-2 border-sky-100 hover:border-sky-300 hover:shadow-lg transition-all group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📍</div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-sky-600 font-medium">Meena Bazaar</p>
              <p className="text-sm text-gray-500 mt-2">Bur Dubai, UAE</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Policies */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Booking Policies
            </h2>
            <p className="text-gray-600">
              Please review our policies before booking your appointment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-sky-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Appointment Guidelines</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-sky-500 mt-1">✓</span>
                  <span>Arrive 10 minutes early for your appointment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-500 mt-1">✓</span>
                  <span>Consultation is included with every service</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-500 mt-1">✓</span>
                  <span>Please inform us of any allergies or concerns</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-500 mt-1">✓</span>
                  <span>Bring reference photos if you have specific requests</span>
                </li>
              </ul>
            </div>

            <div className="bg-sky-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Cancellation Policy</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-sky-500 mt-1">✓</span>
                  <span>24-hour advance notice required for cancellation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-500 mt-1">✓</span>
                  <span>Appointments can be rescheduled free of charge</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-500 mt-1">✓</span>
                  <span>Late arrivals may need to reschedule</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-sky-500 mt-1">✓</span>
                  <span>Group bookings have special terms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}