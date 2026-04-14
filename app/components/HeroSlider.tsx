"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    id: "PERMANENT",
    title: "Permanent Residency Visa",
    subtitle: "GLOBAL EXPERTISE / 01",
    desc: "Secure your future abroad with PR visas for Canada, Australia & more.",
    image: "/images/pr.jpg",
    overlay: "bg-black/40",
  },
  {
    id: "JOBSEEKER",
    title: "Job Seeker Visa",
    subtitle: "GLOBAL EXPERTISE / 02",
    desc: "Find global job opportunities with job seeker visas and career support.",
    image: "/images/job.jpg",
    overlay: "bg-black/40",
  },
  {
    id: "STUDY ABROAD",
    title: "Student Visa",
    subtitle: "GLOBAL EXPERTISE / 03",
    desc: "Study in top international universities with expert visa assistance.",
    image: "/images/study.jpg",
    overlay: "bg-black/40",
  },
  {
    id: "DEPENDENT",
    title: "Dependent Visa",
    subtitle: "GLOBAL EXPERTISE / 04",
    desc: "Bring your family along with hassle-free dependent visa services.",
    image: "/images/family.jpg",
    overlay: "bg-black/40",
  },
  {
    id: "INVESTOR",
    title: "Investor Visa",
    subtitle: "GLOBAL EXPERTISE / 05",
    desc: "Expand globally with investment-based immigration programs.",
    image: "/images/invest.jpg",
    overlay: "bg-black/40",
  },
  {
    id: "RESUME MARKETING",
    title: "Resume Marketing",
    subtitle: "GLOBAL EXPERTISE / 06",
    desc: "Boost your chances with professional resume marketing & job reach.",
    image: "/images/resume.jpg",
    overlay: "bg-black/40",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
 <section className="relative w-full h-[50vh] sm:h-[55vh] md:h-[72vh] overflow-hidden">

      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === active ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          {/* BG IMAGE */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ${
              index === active ? "scale-110" : "scale-100"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* OVERLAY */}
          <div className={`absolute inset-0 ${slide.overlay}`} />

          {/* TEXT */}
<div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4 md:px-6 pt-2 md:pt-10">            
            <p className="tracking-[3px] md:tracking-[4px] text-[10px] md:text-xs mb-4 md:mb-6 text-blue-400 uppercase">
              {slide.subtitle}
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg leading-tight">
              {slide.title}
            </h1>

            <p className="mt-3 md:mt-4 max-w-md md:max-w-xl text-gray-200 text-xs sm:text-sm md:text-base">
              {slide.desc}
            </p>
          </div>
        </div>
      ))}

      {/* BOTTOM TABS */}
      <div className="absolute bottom-0 left-0 w-full bg-black/90 z-30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="flex items-center gap-6 md:gap-0 md:justify-between h-[60px] md:h-[70px] overflow-x-auto md:overflow-visible no-scrollbar">
            
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className="relative whitespace-nowrap text-[10px] sm:text-xs md:text-sm tracking-widest uppercase text-gray-400 hover:text-white transition"
              >
                {slide.id}

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-blue-500 transition-all duration-300 ${
                    index === active ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}

          </div>
        </div>
      </div>

    </section>
  );
}