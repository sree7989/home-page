"use client";

import { useRef, useEffect } from "react";

export default function NewSteps() {

  const imgRef = useRef(null);
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
      desc: "Applying for overseas education involves a lot more than just filling out an application form.",
      icon: "/icons/documentation.png",
      bg: "bg-red-600",
    },
    {
      title: "Processing",
      desc: "VJC inspires students with all the necessary skills and knowledge needed.",
      icon: "/icons/processing.png",
      bg: "bg-blue-700",
    },
    {
      title: "Pre-Departure",
      desc: "We ensure full preparation and support before your journey abroad.",
      icon: "/icons/predeparture.png",
      bg: "bg-red-600",
    },
  ];

  return (
    <section className="w-full bg-white py-16 max-md:py-10 relative overflow-hidden">

      <div className="absolute right-10 top-10 opacity-20 max-md:hidden">
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

      {/* TOP */}
      <div className="max-w-7xl mx-auto px-4 md:pl-10 md:pr-10 grid md:grid-cols-2 gap-16 max-md:gap-8 items-center">

        {/* LEFT */}
        <div className="max-md:text-center">
          <p className="text-blue-600 font-semibold mb-4 text-2xl max-md:text-lg">
            Explore | Travel | Educate
          </p>

          <h2 className="text-[64px] max-md:text-[32px] leading-[1.15] font-bold text-[#0A1F44]">
            <span className="whitespace-nowrap">
              Your <span className="text-red-500">success</span> journey
            </span>
            <br />
            start with us!
          </h2>

         <p className="mt-6 text-gray-600 text-2xl max-md:text-base leading-relaxed max-w-xl mx-auto">
  VJC Overseas guides you towards global opportunities with expert visa and education consultancy services.
  We simplify your journey with personalized support at every step of the process.
 From university selection to visa approval, we ensure a smooth and stress-free experience.
 </p>

          <button
            onClick={() => {
              document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
              setTimeout(() => {
                document.querySelector("#contact-form input")?.focus();
              }, 500);
            }}
            className="mt-8 md:mt-10 bg-[#1f6ea5] hover:bg-[#185a87] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold shadow-md transition"
          >
            Get Free Consultation →
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          <div 
            ref={imgRef}
            className="relative w-full max-w-[520px] translate-x-[120px] max-md:translate-x-0 opacity-0 transition-all duration-1000 ease-out"
          >

            <img
              src="/images/vjc-hero-family.jpg"
              alt="family"
              className="w-full rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            />

            <div className="absolute -top-6 right-0 bg-[#169ac4] text-white px-6 md:px-8 py-4 md:py-5 rounded-2xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold leading-none">16+</h3>
              <p className="text-xs md:text-sm mt-1">Years of Experience</p>
            </div>

            <div className="absolute -bottom-10 left-[-40px] max-md:left-0 max-md:w-[140px] w-[220px]">
              <img
                src="/images/vjc-passport.jpg"
                alt="passport"
                className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              />
            </div>

          </div>

        </div>

      </div>

      {/* SERVICES */}
      <div className="max-w-7xl mx-auto px-4 md:pl-16 md:pr-10 mt-16 md:mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          {services.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardRef.current[i] = el)}
              className={`${item.bg} text-white rounded-2xl p-5 md:p-6 flex flex-col justify-between min-h-[150px] hover:scale-105 transition duration-700 translate-y-[80px] opacity-0`}
            >
              
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 md:w-16 mb-4 md:mb-6"
              />

              <h3 className="text-xl md:text-3xl font-extrabold mb-3 md:mb-4 tracking-wide">
                {item.title}
              </h3>

              <p className="text-sm md:text-lg font-semibold leading-relaxed mb-4 md:mb-6 opacity-95">
                {item.desc}
              </p>

              <button className="flex items-center gap-2 md:gap-3 text-sm md:text-base font-bold mt-2">
                Learn More →
              </button>

            </div>
          ))}

        </div>
      </div>

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