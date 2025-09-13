"use client";

import Navigation from '../../components/Navigation';
import Link from 'next/link';

export default function AboutPage() {
  const team = [
    {
      name: 'Shobha',
      role: 'Founder & Master Stylist',
      experience: '13+ years',
      specialty: 'Hair Straightening & Styling',
      description: 'Expert in all hair treatments with international certifications'
    },
    {
      name: 'Priya',
      role: 'Senior Nail Artist',
      experience: '8+ years',
      specialty: 'Nail Art & Press-on Applications',
      description: 'Creative nail artist specializing in intricate designs'
    },
    {
      name: 'Fatima',
      role: 'Mehendi Specialist',
      experience: '10+ years',
      specialty: 'Traditional & Modern Henna',
      description: 'Master of both traditional and contemporary mehendi styles'
    },
    {
      name: 'Aisha',
      role: 'Beauty Consultant',
      experience: '6+ years',
      specialty: 'Makeup & Skincare',
      description: 'Expert in bridal makeup and facial treatments'
    }
  ];

  const values = [
    {
      icon: '🏆',
      title: 'Excellence',
      description: 'We maintain the highest standards in all our services using premium products and advanced techniques.'
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: 'Building lasting relationships with our clients through consistent quality and reliable service.'
    },
    {
      icon: '✨',
      title: 'Innovation',
      description: 'Staying updated with latest beauty trends and techniques to offer cutting-edge services.'
    },
    {
      icon: '❤️',
      title: 'Care',
      description: 'Providing personalized attention and care to enhance each client\'s natural beauty.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-mobile">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gold/20 via-black to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-gold">Our Studio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Your trusted beauty destination in Bur Dubai since 2011, 
            dedicated to enhancing natural beauty with professional care.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gold">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  Founded in 2011 in the heart of Meena Bazaar, Bur Dubai, 
                  Shobha Beauty Studio & Nails began with a simple vision: 
                  to provide exceptional beauty services that enhance natural beauty 
                  and boost confidence.
                </p>
                <p>
                  Over 13 years, we've grown from a small studio into one of 
                  Bur Dubai's most trusted beauty destinations. Our commitment 
                  to quality, professionalism, and customer satisfaction has 
                  earned us thousands of loyal clients.
                </p>
                <p>
                  Today, we specialize in nail artistry, hair treatments, 
                  mehendi designs, and complete beauty transformations. 
                  Each service is performed with meticulous attention to 
                  detail and genuine care for our clients.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="text-3xl font-bold text-gold mb-2">13+</div>
                  <div className="text-sm text-gray-300">Years Since 2011</div>
                </div>
                <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="text-3xl font-bold text-gold mb-2">10K+</div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=700&fit=crop&crop=center"
                alt="Shobha Beauty Studio elegant salon interior with professional equipment"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = "https://via.placeholder.com/600x700/C6A664/000000?text=Beauty+Studio";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gold">Values</span>
            </h2>
            <p className="text-gray-300 text-lg">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-black/50 border border-gray-800 hover:border-gold/50 transition-all duration-300">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-playfair text-xl font-semibold text-gold mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-gold">Expert Team</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Skilled professionals dedicated to your beauty transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gold/50 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-black font-bold">{member.name[0]}</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gold mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{member.role}</p>
                <p className="text-gold text-sm font-medium mb-3">{member.experience}</p>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene & Safety */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Hygiene & <span className="text-gold">Premium Products</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Your safety and satisfaction are our top priorities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-black/50 border border-gray-800">
              <div className="text-4xl mb-4">🧼</div>
              <h3 className="font-semibold text-gold mb-3">Strict Hygiene</h3>
              <p className="text-gray-300 text-sm">
                All tools sanitized, single-use items, and clean workspace maintained at all times.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-black/50 border border-gray-800">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="font-semibold text-gold mb-3">Premium Products</h3>
              <p className="text-gray-300 text-sm">
                Only the finest quality products from internationally trusted beauty brands.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-black/50 border border-gray-800">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-semibold text-gold mb-3">Safety First</h3>
              <p className="text-gray-300 text-sm">
                Certified professionals following all UAE health and safety regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Experience the <span className="text-gold">Difference</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust Shobha Beauty Studio for their beauty needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transition-all duration-300"
            >
              Book Your Visit
            </Link>
            <Link
              href="/gallery"
              className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold hover:text-black transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}