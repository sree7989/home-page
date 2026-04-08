'use client';

import React from 'react';
import Image from 'next/image';

const awards = [
  { image: '/award2022.png', name: "India's Best Overseas Education Consultancy Of The Year" },
  { image: '/award2023.png', name: 'Global Icon Award Winner' },
  { image: '/award2024.png', name: "India's Most Trusted Immigration And Overseas Education Consultancy Of The Year" },
];

export default function AwardCarouselSliding() {
  return (
    <div
      className="relative w-full py-9 px-4 bg-gradient-to-r from-indigo-100 via-white to-indigo-100"
    >
      <div className="max-w-6xl mx-auto text-center">
      <h2 className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-extrabold mb-12 tracking-wide bg-gradient-to-r from-yellow-700 via-voilet-500 to-yellow-600 bg-clip-text text-transparent">
  ✨ A Legacy Etched in Excellence ✨
</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              
              {/* DIFFERENT AWARD MODELS */}
              <div className="relative w-[200px] h-[200px] flex items-center justify-center">

                {/* MODEL 1 - TROPHY STYLE */}
                {index === 0 && (
                  <div className="relative w-[140px] h-[180px] bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-t-full rounded-b-xl shadow-2xl flex items-center justify-center">
                    <Image
                      src={award.image}
                      alt={`Award ${index + 1}`}
                      fill
                      className="object-contain p-4"
                      priority
                      unoptimized
                    />
                  </div>
                )}

                {/* MODEL 2 - GLASS AWARD STYLE */}
                {index === 1 && (
                  <div className="relative w-[160px] h-[180px] bg-white/40 backdrop-blur-xl border border-white/50 rounded-xl shadow-2xl flex items-center justify-center">
                    <Image
                      src={award.image}
                      alt={`Award ${index + 1}`}
                      fill
                      className="object-contain p-4"
                      priority
                      unoptimized
                    />
                  </div>
                )}

                {/* MODEL 3 - CERTIFICATE / PLAQUE STYLE */}
                {index === 2 && (
                  <div className="relative w-[180px] h-[140px] bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg shadow-2xl p-[6px]">
                    <div className="relative w-full h-full bg-white rounded-md overflow-hidden">
                      <Image
                        src={award.image}
                        alt={`Award ${index + 1}`}
                        fill
                        className="object-contain p-3"
                        priority
                        unoptimized
                      />
                    </div>
                  </div>
                )}

              </div>

              <p className="mt-5 text-center text-sm font-semibold text-gray-700 leading-relaxed">
                {award.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}