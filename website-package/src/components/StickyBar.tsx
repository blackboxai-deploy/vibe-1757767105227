"use client";

import Link from "next/link";

export default function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t-2 border-gold shadow-lg md:hidden">
      <div className="flex items-center justify-center gap-4 px-4 py-3">
        <a
          href="tel:+97143591532"
          className="flex-1 bg-gold text-black py-3 px-6 rounded-full font-semibold text-center hover:bg-yellow-500 transition-colors duration-300"
        >
          📞 Call Now
        </a>
        <Link
          href="/book"
          className="flex-1 bg-white text-black py-3 px-6 rounded-full font-semibold text-center hover:bg-gray-100 transition-colors duration-300"
        >
          📅 Book Now
        </Link>
      </div>
    </div>
  );
}