"use client";

import { useState } from 'react';
import Navigation from '../../components/Navigation';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const services = [
    'Hair Straightening',
    'Blow Dry',
    'Mehendi/Henna',
    'Press-on Nails',
    'Bridal Makeup',
    'Facial Treatment',
    'Waxing',
    'Threading',
    'Bridal Package'
  ];

  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM',
    '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
    '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create WhatsApp message
    const whatsappMessage = `🌟 *NEW APPOINTMENT REQUEST* 🌟

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
${formData.email ? `📧 *Email:* ${formData.email}\n` : ''}💅 *Service:* ${formData.service}
📅 *Date:* ${formData.date}
⏰ *Time:* ${formData.time}
${formData.message ? `📝 *Special Request:* ${formData.message}\n` : ''}
---
Please confirm my booking. Thank you!
Shobha Beauty Studio & Nails`;
    
    const whatsappURL = `https://wa.me/97143591532?text=${encodeURIComponent(whatsappMessage)}`;
    
    setTimeout(() => {
      setSubmitMessage('Your appointment request is ready! Click below to send via WhatsApp:');
      setIsSubmitting(false);
      
      // Auto-open WhatsApp after a brief delay
      setTimeout(() => {
        window.open(whatsappURL, '_blank');
      }, 1500);
    }, 2000);
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <div className="min-h-screen bg-black text-white pb-mobile">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gold/20 via-black to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Book Your <span className="text-gold">Appointment</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Schedule your beauty transformation with our expert team. 
            Open daily 10 AM - 10 PM, ready to serve you 365 days a year.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {submitMessage ? (
            <div className="bg-gray-900 border-2 border-gold rounded-2xl p-8 text-center">
              <div className="text-6xl mb-6">✅</div>
              <h2 className="font-playfair text-2xl font-bold text-gold mb-4">
                Appointment Request Ready!
              </h2>
              <p className="text-gray-300 mb-6">{submitMessage}</p>
              
              <div className="bg-gray-800 p-6 rounded-xl mb-6">
                <h3 className="font-semibold text-gold mb-3">📱 How WhatsApp Booking Works:</h3>
                <ol className="text-left text-gray-300 space-y-2 max-w-md mx-auto">
                  <li>1. Click "Send WhatsApp Message" below</li>
                  <li>2. WhatsApp opens with your appointment details</li>
                  <li>3. Simply click "Send" in WhatsApp</li>
                  <li>4. We'll confirm within 30 minutes!</li>
                </ol>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const whatsappMessage = `🌟 *NEW APPOINTMENT REQUEST* 🌟

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
${formData.email ? `📧 *Email:* ${formData.email}\n` : ''}💅 *Service:* ${formData.service}
📅 *Date:* ${formData.date}
⏰ *Time:* ${formData.time}
${formData.message ? `📝 *Special Request:* ${formData.message}\n` : ''}
---
Please confirm my booking. Thank you!
Shobha Beauty Studio & Nails`;
                    const whatsappURL = `https://wa.me/97143591532?text=${encodeURIComponent(whatsappMessage)}`;
                    window.open(whatsappURL, '_blank');
                  }}
                  className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all duration-300"
                >
                  💬 Send WhatsApp Message
                </button>
                <a
                  href="tel:+97143591532"
                  className="bg-gold text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300"
                >
                  📞 Call Directly
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="font-playfair text-3xl font-bold mb-4">
                  Schedule Your <span className="text-gold">Beauty Session</span>
                </h2>
                <p className="text-gray-300">
                  Fill out the form below and we'll send your appointment request via WhatsApp
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gold font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gold font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gold font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gold font-medium mb-2">
                    Select Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
                  >
                    <option value="">Choose your service...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-gold font-medium mb-2">
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
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-gold font-medium mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
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

                <div>
                  <label htmlFor="message" className="block text-gold font-medium mb-2">
                    Special Requests or Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-gold focus:outline-none transition-colors text-white"
                    placeholder="Any special requests, allergies, or additional information..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-gold text-black px-12 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transition-all duration-300 hover:shadow-lg ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Preparing WhatsApp...' : 'Book via WhatsApp'}
                  </button>
                  <p className="text-gray-400 text-sm mt-4">
                    * Your appointment details will be sent via WhatsApp for instant confirmation
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold mb-4">
              Need <span className="text-gold">Immediate Assistance?</span>
            </h2>
            <p className="text-gray-300">Contact us directly for urgent bookings or questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <a
              href="tel:+97143591532"
              className="bg-black/50 border border-gray-800 hover:border-gold/50 p-6 rounded-2xl text-center group transition-all duration-300"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📞</div>
              <h3 className="font-semibold text-gold mb-2">Call Us</h3>
              <p className="text-gray-300 text-sm">+971 4 359 1532</p>
            </a>
            
            <a
              href="https://wa.me/97143591532"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/50 border border-gray-800 hover:border-gold/50 p-6 rounded-2xl text-center group transition-all duration-300"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">💬</div>
              <h3 className="font-semibold text-gold mb-2">WhatsApp</h3>
              <p className="text-gray-300 text-sm">Quick Response</p>
            </a>
            
            <a
              href="mailto:Shobhabeautysaloon@gmail.com"
              className="bg-black/50 border border-gray-800 hover:border-gold/50 p-6 rounded-2xl text-center group transition-all duration-300"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">✉️</div>
              <h3 className="font-semibold text-gold mb-2">Email</h3>
              <p className="text-gray-300 text-sm">24hr Response</p>
            </a>
            
            <a
              href="https://instagram.com/shobhasaloon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/50 border border-gray-800 hover:border-gold/50 p-6 rounded-2xl text-center group transition-all duration-300"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📸</div>
              <h3 className="font-semibold text-gold mb-2">Instagram</h3>
              <p className="text-gray-300 text-sm">@shobhasaloon</p>
            </a>
          </div>
        </div>
      </section>

      {/* Location & Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">
                Visit Our <span className="text-gold">Studio</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-gold text-2xl mt-1">📍</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                    <p className="text-gray-300">
                      Meena Bazaar<br />
                      Bur Dubai, UAE
                    </p>
                    <a
                      href="https://maps.google.com/?q=Meena+Bazaar+Bur+Dubai+UAE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-yellow-400 text-sm mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-gold text-2xl mt-1">🕒</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <p className="text-gray-300">
                      <span className="text-gold font-semibold">Daily:</span> 10:00 AM - 10:00 PM
                    </p>
                    <p className="text-green-400 text-sm mt-1">
                      Open 365 days a year • Only 1 annual closing
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-gold text-2xl mt-1">🚇</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">How to Reach Us</h3>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Metro: Al Fahidi Station (Green Line)</li>
                      <li>• Bus: Several routes to Bur Dubai</li>
                      <li>• Taxi: Available 24/7</li>
                      <li>• Car: Parking available nearby</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-96 lg:h-[500px] rounded-2xl overflow-hidden border border-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5441087465467!2d55.26834641501438!3d25.259869483905426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xa5286883d5dd8594!2sMeena%20Bazaar%2C%20Bur%20Dubai%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1634567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shobha Beauty Studio Location - Meena Bazaar, Bur Dubai"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-black/50 p-6 rounded-2xl border border-gray-800">
              <h3 className="font-semibold text-gold mb-3">Do I need an appointment?</h3>
              <p className="text-gray-300">
                While walk-ins are welcome, we strongly recommend booking an appointment 
                to ensure availability and minimize waiting time.
              </p>
            </div>

            <div className="bg-black/50 p-6 rounded-2xl border border-gray-800">
              <h3 className="font-semibold text-gold mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300">
                We accept cash (AED), all major credit cards, debit cards, and bank transfers. 
                All prices are in UAE Dirhams.
              </p>
            </div>

            <div className="bg-black/50 p-6 rounded-2xl border border-gray-800">
              <h3 className="font-semibold text-gold mb-3">How does WhatsApp booking work?</h3>
              <p className="text-gray-300">
                Fill out our online form, and it automatically creates a WhatsApp message with 
                your appointment details. Send it to us, and we'll confirm within 30 minutes!
              </p>
            </div>

            <div className="bg-black/50 p-6 rounded-2xl border border-gray-800">
              <h3 className="font-semibold text-gold mb-3">Can I cancel or reschedule?</h3>
              <p className="text-gray-300">
                Yes! Please give us 24-hour advance notice for cancellations or rescheduling. 
                Contact us via WhatsApp or phone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}