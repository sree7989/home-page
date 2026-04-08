"use client";

import React, { useEffect, useRef } from "react";

export default function Description() {

  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
  el.classList.add("show-right");
} else {
  el.classList.remove("show-right");
}
        });
      },
      { threshold: 0.3 }
    );

    if (el) observer.observe(el);
  }, []);

  return (
   <section className="w-full bg-[#f3f4f6] pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
<h2 className="text-5xl font-bold leading-tight m-0 bg-gradient-to-r from-pink-700 via-purple-700 to-indigo-500 bg-clip-text text-transparent">  Why Choose VJC Overseas?
</h2>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            At VJC Overseas, we don’t just process visas — we build migration journeys.
            With expert consultants, transparent processes, and a proven success record,
            we help you move abroad with confidence.
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">

            <div className="flex gap-4 bg-white p-5 rounded-xl shadow-sm border-l-4 border-orange-500">
              <div className="text-xl">🎯</div>
              <div>
                <h4 className="font-semibold">Expert Eligibility Check</h4>
                <p className="text-sm text-gray-500">
                  Profile evaluation by certified migration consultants.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-5 rounded-xl shadow-sm border-l-4 border-orange-500">
              <div className="text-xl">📋</div>
              <div>
                <h4 className="font-semibold">Transparent Process</h4>
                <p className="text-sm text-gray-500">
                  No fake promises, only realistic guidance.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-5 rounded-xl shadow-sm border-l-4 border-orange-500">
              <div className="text-xl">🌍</div>
              <div>
                <h4 className="font-semibold">Global Visa Expertise</h4>
                <p className="text-sm text-gray-500">
                  Australia, Canada, UK, Europe & more.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-5 rounded-xl shadow-sm border-l-4 border-orange-500">
              <div className="text-xl">🤝</div>
              <div>
                <h4 className="font-semibold">End-to-End Support</h4>
                <p className="text-sm text-gray-500">
                  From documentation to visa filing.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          <div 
            ref={imgRef}
            className="relative w-full max-w-[520px] translate-x-[120px] opacity-0 transition-all duration-1000 ease-out"
          >

            {/* MAIN IMAGE */}
            <img
               src="/images/vjc-hero-family.jpg"
              alt="family"
              className="w-full rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            />

            {/* BADGE */}
            <div className="absolute -top-6 right-0 bg-[#169ac4] text-white px-8 py-5 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold leading-none">16+</h3>
              <p className="text-sm mt-1">Years of Experience</p>
            </div>

            {/* SMALL IMAGE */}
            <div className="absolute -bottom-10 left-[-40px] w-[220px]">
              <img
                src="/images/vjc-passport.jpg"
                alt="passport"
                className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              />
            </div>

          </div>

        </div>

      </div>

      {/* 🔥 ANIMATION */}
      <style jsx>{`
        .show-right {
          transform: translateX(0);
          opacity: 1;
        }
      `}</style>

    </section>
  );
}