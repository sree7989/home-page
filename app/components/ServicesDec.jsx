"use client";

import React, { useEffect } from "react";
import {
  FaUserGraduate,
  FaBriefcase,
  FaPassport,
  FaUsers,
  FaChartLine,
  FaPlane,
  FaFileAlt,
  FaStar,
} from "react-icons/fa";

const leftServices = [
  {
    icon: <FaUserGraduate />,
    title: "Student Visa",
    desc: "Apply with expert guidance from professionals.",
  },
  {
    icon: <FaBriefcase />,
    title: "Job Seeker Visa",
    desc: "Open doors to global career opportunities.",
  },
  {
    icon: <FaUsers />,
    title: "Dependent Visa",
    desc: "Bring your family with smooth processing.",
  },
];

const rightServices = [
  {
    icon: <FaPassport />,
    title: "PR Visa",
    desc: "Settle abroad with confidence.",
  },
  {
    icon: <FaChartLine />,
    title: "Investor Visa",
    desc: "Expand your business globally.",
  },
  {
    icon: <FaFileAlt />,
    title: "Resume Marketing",
    desc: "Get noticed by top recruiters.",
  },
];

export default function ServicesDec() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); // scroll malli vachinappudu re-animate
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <div className="fade-up">
        {/* 🔥 DOUBLE COLOR HEADING (ADDED ONLY) */}
     <div className="text-center pt-12 pb-4 bg-gradient-to-r from-white via-orange-50 to-orange-200">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 bg-clip-text text-transparent tracking-tight">
  Turn Your Dream Abroad into Reality
  <span className="block">Faster & Easier</span>
</h1>
        <p className="text-gray-900 mt-2 text-sm">
          Trusted visa solutions for your dreams ✈️
        </p>
      </div>
      </div>

      <div className="fade-up">
      <section className="w-full py-24 bg-gradient-to-r from-white via-orange-50 to-orange-200 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">
            {leftServices.map((item, index) => (
              <div className="fade-up"
                key={index}
                >
              <div
                className="bg-white rounded-2xl shadow-md p-6 flex gap-4 items-start hover:shadow-xl transition"
              >
                <div className="text-orange-500 text-2xl mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
              </div>
            ))}
          </div>

          {/* CENTER */}
          <div className="fade-up">
          <div className="text-center relative">
            
            <div className="w-60 h-60 mx-auto rounded-full bg-gradient-to-r from-orange-400 to-blue-500 p-2">
              <img
                src="/girl.png"
                alt="center"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <h2 className="text-3xl font-bold mt-6">
              Our Services
            </h2>

            <p className="text-gray-800 text-sm mt-2">
              Discover top-notch services designed for your success.
            </p>

          </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            {rightServices.map((item, index) => (
              <div className="fade-up"
                key={index}
              >
              <div
                className="bg-white rounded-2xl shadow-md p-6 flex gap-4 items-start hover:shadow-xl transition"
              >
                <div className="text-orange-500 text-2xl mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      </div>

      <div className="fade-up">
     {/* ⭐ SUCCESS RATINGS (UPGRADED PREMIUM) */}
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 -mt-16 mb-24">
  
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 opacity-20 blur-xl rounded-2xl group-hover:opacity-40 transition"></div>
    <div className="relative bg-white/80 backdrop-blur-xl border border-white/30 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition hover:-translate-y-1">
      <FaStar className="text-yellow-400 text-2xl mx-auto mb-2" />
      <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
        4.9
      </h3>
      <p className="text-xs text-gray-600 mt-1">Client Rating</p>
    </div>
  </div>

  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-20 blur-xl rounded-2xl group-hover:opacity-40 transition"></div>
    <div className="relative bg-white/80 backdrop-blur-xl border border-white/30 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition hover:-translate-y-1">
      <FaStar className="text-yellow-400 text-2xl mx-auto mb-2" />
      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
        10K+
      </h3>
      <p className="text-xs text-gray-600 mt-1">Visas Approved</p>
    </div>
  </div>

  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-20 blur-xl rounded-2xl group-hover:opacity-40 transition"></div>
    <div className="relative bg-white/80 backdrop-blur-xl border border-white/30 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition hover:-translate-y-1">
      <FaStar className="text-yellow-400 text-2xl mx-auto mb-2" />
      <h3 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
        98%
      </h3>
      <p className="text-xs text-gray-600 mt-1">Success Rate</p>
    </div>
  </div>

  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-20 blur-xl rounded-2xl group-hover:opacity-40 transition"></div>
    <div className="relative bg-white/80 backdrop-blur-xl border border-white/30 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition hover:-translate-y-1">
      <FaStar className="text-yellow-400 text-2xl mx-auto mb-2" />
      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        16+
      </h3>
      <p className="text-xs text-gray-600 mt-1">Years Experience</p>
    </div>
     </div>

      </div>
      </div>

      {/* 🔥 ANIMATION CSS */}
      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.8s ease;
        }

        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}