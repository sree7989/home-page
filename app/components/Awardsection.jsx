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
<div className="w-full pt-0 pb-4 md:pt-1 md:pb-0 bg-white overflow-x-hidden mt-0 md:-mt-3 relative z-10">      <h2 className="text-center text-[24px] sm:text-[28px] md:text-[42px] font-semibold text-[#1e3a8a] mb-0 md:mb-1 tracking-wide -mt-2 md:-mt-5">
        Start Your Journey to Top Global Destinations
      </h2>

      {/* SCROLL CONTAINER */}
      <div className="relative w-full overflow-hidden mt-2 md:mt-0 mb-6 md:mb-0">

        <div className="flex w-max animate-scroll gap-3 md:gap-6 pr-6">

          {[...countries, ...countries].map((country, index) => (
            <div
              key={index}
              className="min-w-[140px] md:min-w-[200px] flex flex-col items-center justify-center bg-white/80 rounded-xl shadow-md px-3 md:px-4 py-2 md:py-3"
            >

              <div className="relative w-[50px] h-[50px] md:w-[70px] md:h-[70px] mb-2">
                <Image
                  src={country.flag}
                  alt={country.name}
                  fill
                  className="object-contain rounded-sm"
                />
              </div>

              <p className="mt-1 text-[13px] md:text-base font-semibold text-gray-700 text-center">
                {country.name}
              </p>

            </div>
          ))}

        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 22s linear infinite;
        }

        @media (min-width: 768px) {
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
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

      {/* BUTTON */}
      <div className="text-center mt-10 md:mt-11 px-4 pb-2 md:pb-10 relative z-20">
        <button
          onClick={() => {
            document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
              document.querySelector("#contact-form input")?.focus();
            }, 500);
          }}
          className="w-full md:w-auto px-6 md:px-8 py-3 rounded-full text-white font-semibold flex items-center justify-center gap-2 mx-auto transition-all duration-300 bg-gradient-to-r from-[#ff7a18] to-[#2563eb] hover:from-[#2563eb] hover:to-[#ff7a18] shadow-lg hover:scale-105"
        >
          Start Your Journey →
        </button>
      </div>

    </div>
  );
}