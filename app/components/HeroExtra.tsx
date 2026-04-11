"use client";

import { useEffect, useState, useRef } from "react";

const awards = [
  {
    title: "India's Best Overseas Education Consultancy Of The Year",
    image: "/images/award1.png",
  },
  {
    title: "Global Icon Award Winner",
    image: "/images/award2.png",
  },
  {
    title:
      "India's Most Trusted Immigration And Overseas Education Consultancy Of The Year",
    image: "/images/award3.png",
  },
];

export default function HeroExtra() {
  const [active, setActive] = useState<number>(0);

  const [clients, setClients] = useState<number>(0);
  const [visa, setVisa] = useState<number>(0);
  const [reach, setReach] = useState<number>(0);

  const sectionRef = useRef<HTMLElement | null>(null);
  const hasAnimated = useRef<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % awards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const animateValue = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    end: number,
    speed: number
  ): void => {
    let start = 0;
    const step = Math.ceil(end / 100);

    const counter = setInterval(() => {
      start += step;

      if (start >= end) {
        setter(end);
        clearInterval(counter);
      } else {
        setter(start);
      }
    }, speed);
  };

  const startCounters = () => {
    animateValue(setClients, 8000, 50);
    animateValue(setVisa, 500, 20);
    animateValue(setReach, 10000, 60);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startCounters();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
     className="bg-[#f8f8f8] pt-2 pb-6 md:pt-4 md:pb-8 -mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-8 items-start">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-[34px] sm:text-[42px] lg:text-[54px] font-extrabold text-[#14213d] leading-[1.08] tracking-[-0.02em] mb-6 md:mb-8">
            India's Most Trusted Brand
          </h2>

          {/* Dynamic Image */}
          <div className="mb-4 md:mb-6 flex justify-center">
            <img
              key={active}
              src={awards[active]?.image ?? ""}
              alt="Award"
              className="w-[320px] sm:w-[400px] md:w-[460px] h-auto object-contain transition-all duration-500"
            />
          </div>

          {/* Dynamic Text */}
          <div
            className={`min-h-[80px] md:min-h-[90px] mb-4 md:mb-6 -mt-8 transition-all duration-500
            ${active === 1 ? "text-center" : "ml-6 md:ml-10 text-left"}`}
          >
            <p
              className={`text-[22px] md:text-[26px] text-[#222] font-semibold leading-[1.5] max-w-[750px] 
              ${active === 1 ? "mx-auto" : ""}`}
            >
              {awards[active]?.title ?? ""}
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-12 ml-4 md:ml-8">
            <div>
              <h4 className="text-[32px] md:text-[38px] font-extrabold text-[#1d4ed8]">
                {clients.toLocaleString()}+
              </h4>
              <p className="text-[17px] md:text-[19px] text-[#555] mt-2 font-medium">
                Trusted Clients
              </p>
            </div>

            <div>
              <h4 className="text-[32px] md:text-[38px] font-extrabold text-[#f97316]">
                {visa.toLocaleString()}+
              </h4>
              <p className="text-[17px] md:text-[19px] text-[#555] mt-2 font-medium">
                Visa Success
              </p>
            </div>

            <div>
              <h4 className="text-[32px] md:text-[38px] font-extrabold text-[#1d4ed8]">
                {reach.toLocaleString()}+
              </h4>
              <p className="text-[17px] md:text-[19px] text-[#555] mt-2 font-medium">
                Global Reach
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Form */}
        <div className="bg-white rounded-[8px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-4 md:p-6">
          
          {/* Heading */}
          <h3 className="text-[22px] md:text-[26px] font-bold mb-3 text-center 
          bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#f97316] 
          bg-clip-text text-transparent 
          drop-shadow-[0_4px_12px_rgba(249,115,22,0.5)]">
            Sign Up & Get Free Assessment
          </h3>

          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-md outline-none"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-md outline-none"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="+91 Phone Number"
            className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-md outline-none"
          />

          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            <input
              type="text"
              placeholder="Country"
              className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none"
            />
            <input
              type="number"
              placeholder="Your Age"
              className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <select className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none">
              <option>Select Experience</option>
              <option>0-1 Years</option>
              <option>1-3 Years</option>
              <option>3+ Years</option>
            </select>

            <select className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none">
              <option>Select Qualification</option>
              <option>Degree</option>
              <option>Masters</option>
              <option>PhD</option>
            </select>
          </div>

          {/* Upload Resume - 🔥 FIXED */}
          <div className="mb-3">
            <label className="block text-sm mb-2 text-gray-600">
              Upload Resume
            </label>
            <input
              type="file"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#1d4ed8] text-white py-3 rounded-md font-semibold 
          hover:bg-[#f97316] transition-all duration-300">
            Claim Your Free Assessment
          </button>

        </div>
      </div>
    </section>
  );
}