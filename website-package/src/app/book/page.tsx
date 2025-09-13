"use client";

import { useState } from "react";
import Link from "next/link";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

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
    // Specialty Services
    { id: "hair-straightening", name: "Hair Straightening", duration: "2-4 hours", price: "AED 200-400", category: "Hair" },
    { id: "blow-dry", name: "Professional Blow Dry", duration: "30-60 mins", price: "AED 40-120", category: "Hair" },
    { id: "mehendi", name: "Mehendi & Henna Art", duration: "30mins-3hours", price: "AED 30-500", category: "Mehendi" },
    { id: "press-on-nails", name: "Press-on Nails", duration: "30-45 mins", price: "AED 80-220", category: "Nails" },
    
    // Additional Services
    { id: "bridal-makeup", name: "Bridal Makeup", duration: "2-3 hours", price: "AED 300-500", category: "Makeup" },
    { id: "party-makeup", name: "Party Makeup", duration: "1-2 hours", price: "AED 150-250", category: "Makeup" },
    { id: "daily-makeup", name: "Daily Makeup", duration: "45 mins", price: "AED 80-120", category: "Makeup" },
    { id: "facial-treatment", name: "Facial Treatment", duration: "1 hour", price: "AED 80-180", category: "Facial" },
    { id: "waxing-service", name: "Waxing Service", duration: "30mins-2hours", price: "AED 30-250", category: "Waxing" },
    { id: "threading", name: "Threading", duration: "10-30 mins", price: "AED 10-60", category: "Threading" },
    
    // Combo Packages
    { id: "bridal-glow", name: "Bridal Glow Package", duration: "6-8 hours", price: "AED 850", category: "Package" },
    { id: "nails-glam", name: "Nails Glam Pack", duration: "1.5 hours", price: "AED 180", category: "Package" },
    { id: "hair-care", name: "Hair Care Special", duration: "3-4 hours", price: "AED 320", category: "Package" },
    { id: "party-ready", name: "Party Ready Bundle", duration: "2-3 hours", price: "AED 280", category: "Package" }
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
    
    // Create WhatsApp message
    const selectedService = services.find(s => s.id === formData.service);
    const whatsappMessage = `🌟 *APPOINTMENT BOOKING REQUEST* 🌟

Shobha Beauty Studio & Nails
📍 Meena Bazaar, Bur Dubai

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
${formData.email ? `📧 *Email:* ${formData.email}\n` : ''}

💇‍♀️ *Service:* ${selectedService?.name || formData.service}
⏰ *Duration:* ${selectedService?.duration || 'N/A'}
💰 *Price Range:* ${selectedService?.price || 'N/A'}

📅 *Preferred Date:* ${formData.date}
🕒 *Preferred Time:* ${formData.time}

${formData.message ? `📝 *Special Requests:*\n${formData.message}\n\n` : ''}कृपया मेरी appointment confirm करें।
Thank you! 🙏`;
    
    // Simulate form processing
    setTimeout(() => {
      setSubmitMessage("Your appointment request is ready! Send it via WhatsApp:");
      setIsSubmitting(false);
      
      // Create WhatsApp URL for later use
      (window as any).whatsappBookingURL = `https://wa.me/97143591532?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Don't reset form yet - keep data for WhatsApp
    }, 2000);
  };

  const sendToWhatsApp = () => {
    if ((window as any).whatsappBookingURL) {
      window.open((window as any).whatsappBookingURL, '_blank');
      
      // Reset form after sending to WhatsApp
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          date: "",
          time: "",
          message: ""
        });
        setSubmitMessage("");
      }, 1000);
    }
  };

  // Get tomorrow's date as minimum date
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <div className="min-h-screen pb-mobile">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Book Your <span className="text-gold">Appointment</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Schedule your beauty transformation with our expert team. 
            We're open daily from 10 AM to 10 PM, ready to serve you 365 days a year.
          </p>
        </div>
      </section>

      {/* WhatsApp Shortcut */}
      <section className="py-12 bg-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-2xl font-bold text-black mb-4">
            Quick <span className="text-gold">WhatsApp Booking</span>
          </h2>
          <p className="text-gray-600 mb-6">
            For fastest booking, send us a WhatsApp message directly
          </p>
          <a
            href="https://wa.me/97143591532?text=Hello! I would like to book an appointment at Shobha Beauty Studio. Please let me know your availability. Thank you!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors text-lg"
          >
            <span>💬</span>
            <span>WhatsApp Quick Book</span>
          </a>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-black mb-4">
                Detailed Appointment <span className="text-gold">Form</span>
              </h2>
              <p className="text-gray-600">
                Fill out the form below for a detailed booking request
              </p>
            </div>

            {submitMessage ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
                <div className="text-5xl mb-6">✅</div>
                <h3 className="font-playfair text-xl font-bold text-green-800 mb-4">Booking Request Ready!</h3>
                <p className="text-green-700 mb-6">{submitMessage}</p>
                
                <div className="bg-white/80 p-6 rounded-lg mb-8 text-left max-w-2xl mx-auto">
                  <h4 className="font-semibold text-green-800 mb-3 text-center">📱 How to send via WhatsApp:</h4>
                  <ol className="text-sm text-green-700 space-y-2">
                    <li><strong>1.</strong> Click "Send to WhatsApp" button below</li>
                    <li><strong>2.</strong> WhatsApp will open with your booking details</li>
                    <li><strong>3.</strong> Simply tap "Send" to send your request</li>
                    <li><strong>4.</strong> We'll confirm within 30 minutes!</li>
                  </ol>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={sendToWhatsApp}
                    className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-colors"
                  >
                    💬 Send to WhatsApp
                  </button>
                  <a
                    href="tel:+97143591532"
                    className="bg-black text-gold px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors"
                  >
                    📞 Call: +971 4 359 1532
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold focus:outline-none transition-colors"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-black mb-2">
                    Select Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold focus:outline-none transition-colors"
                  >
                    <option value="">Choose your service...</option>
                    <optgroup label="🌟 Specialty Services">
                      {services.filter(s => ["Hair", "Mehendi", "Nails"].includes(s.category)).map((service) => (
                        <option key={service.id} value={service.id}>
                          ⭐ {service.name} - {service.duration} ({service.price})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="💄 Beauty Services">
                      {services.filter(s => ["Makeup", "Facial", "Waxing", "Threading"].includes(s.category)).map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name} - {service.duration} ({service.price})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="🎁 Special Packages">
                      {services.filter(s => s.category === "Package").map((service) => (
                        <option key={service.id} value={service.id}>
                          🎁 {service.name} - {service.duration} ({service.price})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-black mb-2">
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
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-black mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold focus:outline-none transition-colors"
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
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Special Requests or Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold focus:outline-none transition-colors"
                    placeholder="Any special requests, allergies, reference photos, or additional information..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary text-lg px-12 py-4 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Preparing Request...' : '📱 Prepare WhatsApp Booking'}
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    * Required fields. Your request will be formatted for WhatsApp.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-black mb-6">
            Need <span className="text-gold">Immediate Help</span>?
          </h2>
          <p className="text-gray-600 mb-8">
            For urgent bookings or questions, contact us directly
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <a
              href="tel:+97143591532"
              className="bg-white p-6 rounded-xl border-2 border-gold/20 hover:border-gold hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📞</div>
              <h3 className="font-playfair font-semibold text-black mb-2">Call Us</h3>
              <p className="text-gold font-medium">+971 4 359 1532</p>
              <p className="text-sm text-gray-500 mt-2">Daily 10 AM - 10 PM</p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/97143591532"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl border-2 border-gold/20 hover:border-gold hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💬</div>
              <h3 className="font-playfair font-semibold text-black mb-2">WhatsApp</h3>
              <p className="text-gold font-medium">Instant Booking</p>
              <p className="text-sm text-gray-500 mt-2">Quick responses</p>
            </a>

            {/* Visit */}
            <Link
              href="/contact"
              className="bg-white p-6 rounded-xl border-2 border-gold/20 hover:border-gold hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📍</div>
              <h3 className="font-playfair font-semibold text-black mb-2">Visit Us</h3>
              <p className="text-gold font-medium">Meena Bazaar</p>
              <p className="text-sm text-gray-500 mt-2">Bur Dubai, UAE</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Policies */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-black mb-4">
              Booking <span className="text-gold">Policies</span>
            </h2>
            <p className="text-gray-600">
              Please review our policies before booking your appointment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gold/10 p-6 rounded-lg border border-gold/20">
              <h3 className="font-playfair font-semibold text-lg text-black mb-4">Appointment Guidelines</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Arrive 10 minutes early</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Free consultation included</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Inform us of allergies/concerns</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Bring reference photos</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-playfair font-semibold text-lg text-black mb-4">Cancellation Policy</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>24-hour advance notice required</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Free rescheduling allowed</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Late arrivals may be rescheduled</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Group bookings welcome</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/5 p-6 rounded-lg border border-black/20">
              <h3 className="font-playfair font-semibold text-lg text-black mb-4">What to Expect</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Professional consultation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Premium products used</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Aftercare instructions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Follow-up support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}