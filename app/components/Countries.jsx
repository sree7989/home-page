"use client";

import { useEffect, useRef } from "react";
import countries from "./countriesdata.js";

export default function Countries() {
  const scrollRef = useRef(null);

  // 🔁 AUTO SCROLL (perfect 3 cards slide)
  useEffect(() => {
    const container = scrollRef.current;

    const interval = setInterval(() => {
      if (!container) return;

      container.scrollBy({
        left: container.clientWidth,
        behavior: "smooth",
      });

      // 🔄 LOOP BACK
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ⬅️➡️ MANUAL SCROLL
  const scroll = (dir) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left:
        dir === "left"
          ? -scrollRef.current.clientWidth
          : scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
<section className="pt-10 pb-10 bg-[#e9eff5]">      
      {/* 🔥 HEADING */}
      <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3 group">
  
  {/* 🌍 ICON */}
  <span className="text-4xl transition-transform duration-300 group-hover:rotate-12">
    🌍
  </span>

  {/* TEXT */}
  <span>
    <span className="text-[#06152e] group-hover:text-[#000c1f] transition">
      Best Countries
    </span>{" "}
    
    <span className="bg-gradient-to-r from-orange-600 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-800 group-hover:to-orange-600 transition-all duration-500">
      To Study Abroad
    </span>
  </span>

</h2>

      {/* SLIDER WRAPPER */}
      <div className="relative px-6">

        {/* SLIDER */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
        >
          {countries.map((item, i) => (
            
            <div
              key={i}
              className="min-w-[33.33%] flex-shrink-0 px-3 snap-start"
            >
              
              <div className="bg-white rounded-2xl shadow-md p-3 hover:shadow-xl transition">
                
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={item.image}
                    className="w-full h-[200px] object-cover rounded-xl"
                  />

                  {/* 🔥 UPDATED FLAG (ONLY CHANGE) */}
                  <div className="w-14 h-14 rounded-full border-4 border-white absolute -bottom-6 right-4 shadow-xl overflow-hidden">
                    <img
                      src={item.flag}
                      className="w-full h-full object-cover"
                    />
                  </div>

                </div>

                {/* COUNTRY NAME */}
                <h3 className="mt-6 text-xl font-semibold text-[#0A1F44]">
                  {item.name}
                </h3>

              </div>
            </div>

          ))}
        </div>

        {/* ⬅️ LEFT ARROW */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:scale-110 transition"
        >
          ←
        </button>

        {/* ➡️ RIGHT ARROW */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:scale-110 transition"
        >
          →
        </button>

      </div>
    </section>
  );
}