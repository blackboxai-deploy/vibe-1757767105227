"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Work', icon: '🎨' },
    { id: 'nails', name: 'Nail Designs', icon: '💅' },
    { id: 'bridal', name: 'Bridal Looks', icon: '👰' },
    { id: 'hair', name: 'Hair Work', icon: '💇‍♀️' },
    { id: 'mehendi', name: 'Mehendi', icon: '🎨' }
  ];

  const galleryItems = [
    {
      category: 'nails',
      title: 'French Tip Press-on Nails',
      description: 'Classic elegance with modern application',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=600&fit=crop&crop=center'
    },
    {
      category: 'nails',
      title: 'Artistic Nail Design',
      description: 'Custom artwork for special occasions',
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500&h=600&fit=crop&crop=center'
    },
    {
      category: 'bridal',
      title: 'Bridal Makeup Look',
      description: 'Radiant bridal transformation',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&h=600&fit=crop&crop=center'
    },
    {
      category: 'hair',
      title: 'Hair Straightening Results',
      description: 'Before and after transformation',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&h=600&fit=crop&crop=center'
    },
    {
      category: 'mehendi',
      title: 'Bridal Mehendi Design',
      description: 'Intricate traditional patterns',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=600&fit=crop&crop=center'
    },
    {
      category: 'nails',
      title: 'Glamorous Evening Nails',
      description: 'Perfect for special events',
      image: 'https://images.unsplash.com/photo-1604654894309-0e6d5c2b5c78?w=500&h=600&fit=crop&crop=center'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white pb-mobile">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gold/20 via-black to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Our Work <span className="text-gold">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Discover the beautiful transformations we create every day. 
            From stunning nail designs to complete beauty makeovers.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gold text-black shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gold'
                }`}
              >
                <span>{filter.icon}</span>
                <span>{filter.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div key={index} className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-gold/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = `https://via.placeholder.com/500x600/C6A664/000000?text=${item.category}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-gold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Ready for Your <span className="text-gold">Transformation?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your appointment today and join our gallery of satisfied clients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transition-all duration-300"
            >
              Book Now
            </Link>
            <a
              href="https://instagram.com/shobhasaloon"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold hover:text-black transition-all duration-300"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}