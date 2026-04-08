"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "Free Counselling",
    desc: "Our experts guide you in selecting the right country, course, and visa pathway based on your goals.",
  },
  {
    number: "02",
    title: "Eligibility Screening",
    desc: "We carefully assess your academic profile, financials, and background to ensure visa success chances.",
  },
  {
    number: "03",
    title: "Documentation Process",
    desc: "All required documents like SOP, LOR, and financial proofs are professionally prepared.",
  },
  {
    number: "04",
    title: "Application & Tracking",
    desc: "We submit your applications and continuously track progress until visa approval.",
  },
];

export default function Scroll() {
  return (
   <section className="w-full pt-6 pb-10 bg-gray-50">
      <div className="w-full px-6">

        {/* 🔥 CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-stretch">

          {/* ⬅️ LEFT SIDE */}
          <div>

            {/* 🔥 LEFT HEADING (UPDATED) */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight group cursor-pointer">

  <span className="bg-gradient-to-r from-purple-900 to-indigo-700 text-transparent bg-clip-text transition-all duration-500 group-hover:from-indigo-700 group-hover:to-purple-900">
    Your Step-by-Step Path
  </span>{" "}

  <span className="bg-gradient-to-r from-red-500 to-red-500 text-transparent bg-clip-text transition-all duration-500 group-hover:from-blue-500 group-hover:to-cyan-500">
    to a Successful Visa
  </span>

</h2>
              <p className="text-gray-600 mt-4 max-w-xl">
                A successful visa application depends on proper guidance,
                documentation, and how well your profile is presented.
              </p>
            </div>

            {/* 🔥 STEPS */}
            <div className="relative pl-14  pr-12 border-l-2 border-orange-300 space-y-10">

              {steps.map((step) => (
                <div key={step.number} className="relative">

                  {/* Number */}
                  <span className="absolute -left-6 top-1 text-orange-500 font-bold text-lg">
                    {step.number}
                  </span>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-2 ml-6">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* ➡️ RIGHT SIDE (HEIGHT MATCH FIX) */}
          <div className="flex items-stretch justify-center">

            <img 
              src="/easy-visa-process-chat.png" 
              alt="Easy Visa Process" 
          className="w-[360px] h-[90%] object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}