"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Nav from "@/app/components/Nav";
import Link from "next/link";

/* COUNT UP COMPONENT */
const CountUp = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const node = ref.current;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (node) observerRef.current.observe(node);

    return () => {
      if (node) observerRef.current.unobserve(node);
    };
  }, []);

  const startCounting = () => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
  };

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const CompOne = () => {
  return (
    <>
      <Nav />

      {/* MAIN SECTION */}
      <section className="w-full bg-white py-6 lg:py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 grid lg:grid-cols-2 gap-10 items-start">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6 mt-4 lg:mt-0">
            
            {/* Small Heading */}
            <p className="text-lg font-semibold text-orange-500 uppercase tracking-wider">
              About VJC Overseas
            </p>

            {/* Big Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900">
  Shaping Global Careers <br />
  With Trusted <span className="text-blue-500">Guidance</span>
</h1>
            {/* Content */}
            <p className="text-gray-900 max-w-xl text-xl leading-relaxed">
              Welcome to VJC Overseas, a trusted name in overseas education and
              Immigration Support Services. Since 2009, we’ve been dedicated to guiding
              students and professionals toward achieving their global ambitions with
              confidence and clarity. Our expert team provides personalized support at
              every step, ensuring a smooth and hassle-free journey from application to
              destination.
            </p>

            <p className="text-gray-900 max-w-xl text-xl leading-relaxed">
              With years of experience and a strong international network, we connect
              individuals with the right universities and career opportunities abroad.
              Our commitment to transparency, reliability, and success has helped
              thousands of aspirants build brighter futures. 
            </p>

            {/* STATS ROW */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              
              <div className="border rounded-xl p-4 text-center">
                <h2 className="text-2xl font-bold text-blue-500">
                  <CountUp end={7500} suffix="+" />
                </h2>
                <p className="text-sm text-gray-600">Students Placed Abroad</p>
              </div>

              <div className="border rounded-xl p-4 text-center">
                <h2 className="text-2xl font-bold text-blue-500">
                  <CountUp end={2000} suffix="+" />
                </h2>
                <p className="text-sm text-gray-600">Job Seeker Visas</p>
              </div>

              <div className="border rounded-xl p-4 text-center">
                <h2 className="text-2xl font-bold text-blue-500">
                  <CountUp end={16} suffix="+" />
                </h2>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>

              <div className="border rounded-xl p-4 text-center">
                <h2 className="text-2xl font-bold text-blue-500">
                  <CountUp end={30000} suffix="+" />
                </h2>
                <p className="text-sm text-gray-600">Visit/Tourist Visas</p>
              </div>

            </div>

            {/* BUTTON */}
           <div className="pt-4 flex justify-center ">
  <Link
    href="/contact"
    className="inline-block px-8 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition"
  >
    Get Started
  </Link>
</div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[750px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src="/about-us.png"
                alt="About VJC Overseas"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default CompOne;