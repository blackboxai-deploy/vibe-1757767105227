"use client";

import Link from "next/link";

export default function GalleryPage() {
  const galleryImages = {
    hairStraightening: [
      {
        before: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c791b3ec-f66b-4806-ba91-a012320852ec.png",
        after: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8bc91d50-3613-41fb-adcb-2446fbcbafb1.png",
        title: "Keratin Hair Straightening",
        description: "Dramatic transformation from curly to silky smooth"
      },
      {
        before: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7c357955-2d19-40ad-8629-56099009467a.png",
        after: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/79c40c43-1f39-4c77-86ad-2b866c961639.png",
        title: "Chemical Hair Straightening", 
        description: "Long-lasting straight hair results"
      },
      {
        before: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7eda197f-ea85-4503-a0c0-10cca271ed77.png",
        after: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/57f84874-be6b-4a13-ae5b-c7281fc723dc.png",
        title: "Professional Hair Transformation",
        description: "From thick coarse hair to smooth perfection"
      }
    ],
    blowDry: [
      {
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1904eff9-322f-4a04-ba79-d3f65499485d.png",
        title: "Volume Blow Dry",
        description: "Beautiful volume and bounce for fine hair"
      },
      {
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6888bb3f-1c51-4eb2-9a55-864a226b7237.png",
        title: "Smooth Blow Dry",
        description: "Sleek, polished look for professional occasions"
      },
      {
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/57225a42-d53f-4cec-84a8-bae60c03c454.png",
        title: "Bouncy Curls",
        description: "Natural-looking curls and waves"
      }
    ],
    mehendi: [
      {
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/62fe7f0b-a503-41fa-8226-7dcf46c39f92.png",
        title: "Bridal Mehendi Design",
        description: "Elaborate traditional patterns for wedding day"
      },
      {
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3085dc40-5436-4ce9-9f7f-bc9c8629e2b6.png",
        title: "Contemporary Mehendi",
        description: "Modern geometric patterns for special occasions"
      },
      {
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/21686112-2692-4b60-80e2-1c86c047a46c.png",
        title: "Simple Mehendi",
        description: "Elegant minimalist designs for everyday beauty"
      }
    ],
    nails: [
      {
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2e8352e8-9f09-4ab3-aad5-c45694ae9ec3.png",
        title: "French Tip Press-on Nails",
        description: "Classic elegance with perfect application"
      },
      {
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b6a3e16b-b422-4d99-8a35-2361f1743493.png",
        title: "Artistic Press-on Nails",
        description: "Creative designs for bold statement looks"
      },
      {
        image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c51aeca9-a02c-4bbf-bbfb-450a18caef15.png",
        title: "Natural Press-on Nails",
        description: "Professional nude tones for work-appropriate style"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Work Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the transformations we create every day. From dramatic hair straightening 
            to intricate mehendi designs, see the quality and artistry that makes us Dubai's 
            trusted beauty destination.
          </p>
        </div>
      </section>

      {/* Hair Straightening Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl text-white">✨</span>
              </div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900">
                Hair Straightening Transformations
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              See the incredible before and after results of our professional hair straightening services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.hairStraightening.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img
                      src={item.before}
                      alt={`Before ${item.title}`}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4719b278-ef55-4488-88ad-a86fa7a18e40.png";
                      }}
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={item.after}
                      alt={`After ${item.title}`}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/40fa6afa-bf02-4dc8-9756-626d48bd1592.png";
                      }}
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      AFTER
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blow Dry Gallery */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl text-white">💨</span>
              </div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900">
                Professional Blow Dry Styles
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Expert styling for every occasion and hair type
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.blowDry.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c9483c7e-cf93-4096-8835-dbc189946a90.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Professional Styling</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mehendi Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl text-white">🎨</span>
              </div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900">
                Mehendi & Henna Art
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Beautiful traditional and contemporary henna designs for all occasions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.mehendi.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8e097363-1c74-44c4-b8d9-238a9cd32a32.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Henna Art Design</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press-on Nails Gallery */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl text-white">💅</span>
              </div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900">
                Press-on Nail Artistry
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Instant glamorous nails with professional application and stunning designs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.nails.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f5d4c8d5-e69a-49d1-9f76-f0fa78554d0c.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">Nail Art Design</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials with Photos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Happy Clients & Reviews
            </h2>
            <p className="text-lg text-gray-600">
              See what our satisfied customers are saying about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-2xl border border-sky-100">
              <div className="flex items-center mb-4">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a9d4b06c-d0c0-4d7f-8463-17bcf8feb62c.png"
                  alt="Client testimonial"
                  className="w-12 h-12 rounded-full mr-4"
                  onError={(e) => {
                    e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/604d7b55-b2a9-4990-b0fe-038620fb0c83.png";
                  }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Fatima A.</h4>
                  <div className="flex text-yellow-400 text-sm">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Amazing hair straightening results! My hair has never looked so smooth and manageable. 
                The team at Shobha Beauty Studio is incredibly professional."
              </p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-2xl border border-sky-100">
              <div className="flex items-center mb-4">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c49a8a10-bc95-4ba7-87f7-bc620ee96247.png"
                  alt="Client testimonial"
                  className="w-12 h-12 rounded-full mr-4"
                  onError={(e) => {
                    e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cce8549f-ebcf-4c8d-bb50-e9a15013b1d7.png";
                  }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Priya S.</h4>
                  <div className="flex text-yellow-400 text-sm">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The bridal mehendi design was absolutely stunning! So intricate and beautiful. 
                Highly recommend for any special occasion."
              </p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-2xl border border-sky-100">
              <div className="flex items-center mb-4">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/27fb665a-bd2d-46b0-b31d-78d9ed27f875.png"
                  alt="Client testimonial"
                  className="w-12 h-12 rounded-full mr-4"
                  onError={(e) => {
                    e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ee77b29b-5b2e-4701-96b7-4aca212fa3dc.png";
                  }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah M.</h4>
                  <div className="flex text-yellow-400 text-sm">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Love my press-on nails! They look so natural and elegant. Perfect for my work environment. 
                Will definitely be back!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Integration */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6">
            Follow Us for More Inspiration
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Get daily beauty inspiration and see our latest work on Instagram
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/shobhasaloon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>📷</span>
              <span>@shobhasaloon</span>
            </a>
            <Link
              href="/book"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-sky-600 transition-all"
            >
              Book Your Transformation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}