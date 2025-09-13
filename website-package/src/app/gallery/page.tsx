"use client";

import { useState } from "react";
import Link from "next/link";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Work", icon: "🎨" },
    { id: "nails", name: "Nail Designs", icon: "💅" },
    { id: "bridal", name: "Bridal Looks", icon: "👰" },
    { id: "hair", name: "Hair Transformations", icon: "✨" },
    { id: "mehendi", name: "Mehendi Art", icon: "🎨" },
    { id: "makeup", name: "Makeup", icon: "💄" }
  ];

  const galleryItems = [
    // Nail Designs
    { category: "nails", title: "French Tip Elegance", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5eed3b04-c4bc-458d-a0a2-12e57017d941.png", type: "Press-on Nails" },
    { category: "nails", title: "Artistic Nail Design", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/37c276bc-fdc8-4826-9bc7-018c22b8d75f.png", type: "Custom Design" },
    { category: "nails", title: "Bridal Nail Art", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3dcc2067-a618-4924-b525-aa9c6d198e65.png", type: "Bridal Nails" },
    { category: "nails", title: "Natural Look Nails", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2c5a8dae-f9b2-4818-8e95-c0f38486c8b5.png", type: "Natural Style" },
    { category: "nails", title: "Glam Party Nails", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2afe7896-1517-485d-8153-fb47dd4ff3bc.png", type: "Party Style" },
    { category: "nails", title: "Office Professional", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5f6dc4e1-ef23-4f93-892e-2e9ed8775ffb.png", type: "Professional" },

    // Bridal Looks
    { category: "bridal", title: "Traditional Bridal Look", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2419573e-6cda-47e9-9f39-cef7a4717d90.png", type: "Complete Bridal" },
    { category: "bridal", title: "Modern Bridal Style", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/116c69ef-035e-42bb-964d-58476a361322.png", type: "Modern Bridal" },
    { category: "bridal", title: "Reception Look", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0c64ee82-de11-4de8-a397-ad0f2546f65d.png", type: "Reception" },
    { category: "bridal", title: "Engagement Makeup", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5a875e70-4c00-42de-8fb4-af7f1a5794d7.png", type: "Engagement" },
    { category: "bridal", title: "Henna Ceremony", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/be3b0821-dc49-4ce3-a3e5-a41039fd4444.png", type: "Mehendi Look" },

    // Hair Transformations (Before/After)
    { category: "hair", title: "Keratin Straightening", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7ab7f30c-4900-441a-86b0-25e0f2c0e26b.png", type: "Before/After", beforeAfter: true },
    { category: "hair", title: "Chemical Straightening", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e0e40bae-ba35-42cb-a01c-d1e126697a4e.png", type: "Before/After", beforeAfter: true },
    { category: "hair", title: "Volume Blow Dry", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1572ea01-94e4-4471-9e73-84390fc6e2aa.png", type: "Blow Dry" },
    { category: "hair", title: "Sleek Blow Dry", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/90acb315-e981-4fb0-afb0-61fa06d6e22a.png", type: "Blow Dry" },
    { category: "hair", title: "Curly Blow Dry", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bb171d77-4917-4437-93e0-cbc6e0d03b6a.png", type: "Blow Dry" },

    // Mehendi Art
    { category: "mehendi", title: "Bridal Mehendi", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/26be6e5a-911b-4e9a-ba24-7ec25227ad77.png", type: "Bridal Design" },
    { category: "mehendi", title: "Arabic Mehendi", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/769c78b8-0798-4581-a56d-4daff80a4c89.png", type: "Arabic Style" },
    { category: "mehendi", title: "Contemporary Design", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/65dbaa38-5d79-4c0d-b1a0-ba82ecb598c5.png", type: "Modern Style" },
    { category: "mehendi", title: "Simple Elegant", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/71b42f65-0599-4d13-9e28-674796f5287e.png", type: "Simple Style" },
    { category: "mehendi", title: "Festival Mehendi", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/56f21dd7-0b39-4b54-a7f9-4aa6bdb18e58.png", type: "Festival Style" },

    // Makeup
    { category: "makeup", title: "Smokey Eye Glam", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6a49d1e6-9bca-4d26-96a2-f9786d403d74.png", type: "Evening Makeup" },
    { category: "makeup", title: "Natural Day Look", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f1edf029-ec62-4267-a66f-3cfc38a6cd44.png", type: "Day Makeup" },
    { category: "makeup", title: "Party Glam", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0a6123e0-df31-4d7c-b089-4098dad498e6.png", type: "Party Makeup" },
    { category: "makeup", title: "Corporate Look", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/97a405bc-92e4-424d-8a45-5abbf33f6be6.png", type: "Professional" }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen pb-mobile">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Our Work <span className="text-gold">Gallery</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the transformations we create every day. From nail designs to bridal looks, 
            see the quality and artistry that makes us Dubai's trusted beauty destination.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-gold text-black shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gold/20 hover:text-black"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl overflow-hidden shadow-lg card-hover"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 lazy-image"
                    loading="lazy"
                    onLoad={(e) => e.currentTarget.classList.add('loaded')}
                  />
                  
                  {item.beforeAfter && (
                    <div className="absolute top-4 left-4 bg-gold text-black px-3 py-1 rounded-full text-xs font-bold">
                      BEFORE/AFTER
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-playfair text-white font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gold text-sm font-medium">
                        {item.type}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair font-semibold text-lg text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gold text-sm font-medium mb-4">
                    {item.type}
                  </p>
                  <Link
                    href="/book"
                    className="text-black font-semibold hover:text-gold transition-colors text-sm"
                  >
                    Book Similar Service →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-gold">🎨</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-black mb-4">
                More Work Coming Soon
              </h3>
              <p className="text-gray-600 mb-8">
                We're constantly updating our gallery with new transformations and designs.
              </p>
              <Link
                href="/services"
                className="btn-primary"
              >
                View Our Services
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-black mb-4">
              Happy <span className="text-gold">Clients</span>
            </h2>
            <p className="text-lg text-gray-600">
              See what our satisfied customers are saying about their transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Fatima A.", 
                service: "Hair Straightening", 
                review: "Incredible transformation! My hair has never looked so smooth and manageable. The team at Shobha Beauty Studio is truly professional.",
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/66d6e8ff-6610-469d-875f-9bad315a38d1.png"
              },
              { 
                name: "Priya S.", 
                service: "Bridal Package", 
                review: "Perfect bridal experience! The mehendi was stunning, makeup flawless, and the team made me feel like a queen on my special day.",
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/06ac8438-a130-46a1-b328-02ec110eba4d.png"
              },
              { 
                name: "Sarah M.", 
                service: "Press-on Nails", 
                review: "Love my press-on nails! They look so natural and elegant. Perfect for my work environment. Definitely coming back!",
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/361fc8ab-0056-445d-bd0c-ed7f442119b0.png"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gold/5 p-6 rounded-xl border border-gold/20">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-black">{testimonial.name}</h4>
                    <div className="flex text-gold text-sm">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-3">"{testimonial.review}"</p>
                <p className="text-gold text-sm font-medium">{testimonial.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Integration */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Follow Us for <span className="text-gold">More Inspiration</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get daily beauty inspiration and see our latest work on Instagram
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/shobhasaloon"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4 inline-flex items-center justify-center space-x-2"
            >
              <span>📷</span>
              <span>Follow @shobhasaloon</span>
            </a>
            <Link
              href="/book"
              className="btn-secondary text-lg px-10 py-4"
            >
              Book Your Transformation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}