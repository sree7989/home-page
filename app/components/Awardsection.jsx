'use client';

import React from 'react';
import Image from 'next/image';

const countries = [
  { name: 'Canada', flag: '/flags/canada.png' },
  { name: 'Australia', flag: '/flags/australia.png' },
  { name: 'United Kingdom', flag: '/flags/uk.png' },
  { name: 'United States', flag: '/flags/usa.png' },
  { name: 'Germany', flag: '/flags/germany.png' },
  { name: 'New Zealand', flag: '/flags/nz.png' },
  { name: 'Ireland', flag: '/flags/ireland.png' },
  { name: 'Singapore', flag: '/flags/singapore.png' },
  { name: 'France', flag: '/flags/france.png' },
  { name: 'Malta', flag: '/flags/malta.png' },
  { name: 'Maldives', flag: '/flags/maldives.png' },
];

export default function CountriesCarousel() {
  return (
<div className="w-full py-6 bg-white overflow-hidden">
      {/* HEADING */}
    <h2 className="text-center text-[34px] md:text-[42px] font-semibold text-[#1e3a8a] mb-8 tracking-wide">
  Start Your Journey to Top Global Destinations
</h2>

      {/* SCROLL CONTAINER */}
      <div className="relative w-full overflow-hidden">

       <div className="flex w-max animate-scroll gap-6 pr-10">

          {/* LOOP TWICE FOR INFINITE EFFECT */}
          {[...countries, ...countries].map((country, index) => (
            <div className="min-w-[200px] flex flex-col items-center justify-center bg-white/80 rounded-xl shadow-md px-4 py-3">

  <div className="relative w-[70px] h-[70px] mb-2">
    <Image
      src={country.flag}
      alt=""
      fill
      className="object-contain rounded-sm"
    />
  </div>

  <p className="mt-2 text-base font-semibold text-gray-700 text-center">
    {country.name}
  </p>

</div>
          ))}

        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </div>
  );
}