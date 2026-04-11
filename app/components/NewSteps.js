"use client";

import { useRef, useEffect } from "react";

export default function NewSteps() {

  const imgRef = useRef(null);

  // 🔥 NEW (cards ref)
  const cardRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-right");
    } else {
      entry.target.classList.remove("show-right");
    }
  },
  { threshold: 0.3 }
);

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  // 🔥 NEW (cards animation)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-up");
          } else {
            entry.target.classList.remove("show-up");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      cardRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const services = [
    {
      title: "Counseling",
      desc: "Career Counseling When it comes to taking ownership for developing your career, learning from others is vitally important.",
      icon: "/icons/counseling.png",
      bg: "bg-blue-700",
    },
    {
      title: "Documentation",
      desc: "Applying for overseas education involves a lot more than just filling out an application form. A student would not want to land up",
      icon: "/icons/documentation.png",
      bg: "bg-red-600",
    },
    {
      title: "Processing",
      desc: "VJC inspires students, providing them with all the necessary skills and knowledge needed to engage effectively and easily with",
      icon: "/icons/processing.png",
      bg: "bg-blue-700",
    },
    {
      title: "Pre-Departure",
      desc: "Rest assured that we take no chances when it comes to securing your visa. As a part of our service, all students receive preparation assistance.",
      icon: "/icons/predeparture.png",
      bg: "bg-red-600",
    },
  ];

  return (
    <section className="w-full bg-white py-16 relative overflow-hidden">

      {/* ✈️ FLIGHT PATH */}
      <div className="absolute right-10 top-10 opacity-20">
        <svg width="300" height="200">
          <path
            d="M10 150 Q150 20 290 120"
            stroke="#9ca3af"
            strokeDasharray="6 6"
            fill="transparent"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <p className="text-blue-600 font-semibold mb-4 text-2xl">
            Explore | Travel | Educate
          </p>

          <h2 className="text-[64px] leading-[1.15] font-bold text-[#0A1F44]">
            <span className="whitespace-nowrap">
              Your <span className="text-red-500">success</span> journey
            </span>
            <br />
            start with us!
          </h2>

          <p className="mt-6 text-gray-600 text-2xl leading-relaxed max-w-xl">
            VJC Overseas guides you towards global opportunities with expert visa and 
            education consultancy services. From choosing the right country to securing 
            your visa, we support you at every step of your journey abroad.
          </p>

          <button className="mt-10 bg-[#1f6ea5] hover:bg-[#185a87] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md transition">
            Get Free Consultation
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          <div 
            ref={imgRef}
            className="relative w-full max-w-[520px] translate-x-[120px] opacity-0 transition-all duration-1000 ease-out"
          >

            <img
              src="/images/vjc-hero-family.jpg"
              alt="family"
              className="w-full rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            />

            <div className="absolute -top-6 right-0 bg-[#169ac4] text-white px-8 py-5 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold leading-none">16+</h3>
              <p className="text-sm mt-1">Years of Experience</p>
            </div>

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

      {/* 🔥 SERVICES */}
      <div className="max-w-7xl mx-auto px-12 mt-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {services.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardRef.current[i] = el)}
              className={`${item.bg} text-white rounded-2xl p-6 flex flex-col justify-between min-h-[150px] hover:scale-105 transition duration-700 translate-y-[80px] opacity-0`}
            >
              
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 mb-6 "
              />

              <h3 className="text-3xl font-extrabold mb-4 tracking-wide">
                {item.title}
              </h3>

              <p className="text-lg font-semibold leading-relaxed mb-6 opacity-95">
                {item.desc}
              </p>

              <button className="flex items-center gap-3 text-base font-bold mt-2">
                Learn More →
              </button>

            </div>
          ))}

        </div>
      </div>

      {/* 🔥 ANIMATION */}
      <style jsx>{`
        .show-right {
          transform: translateX(0);
          opacity: 1;
        }

        .show-up {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style>

    </section>
  );
}