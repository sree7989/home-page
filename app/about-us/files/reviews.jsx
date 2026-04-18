"use client";
import React, { useEffect, useState } from "react";

const journeyData = [
  {
    year: "2009",
    title: "Where It All Began",
desc: "VJC Overseas was founded with a strong vision to guide students towards global education opportunities. From the very beginning, we focused on providing genuine support, expert advice, and a clear pathway for students to achieve their dreams abroad with confidence. Over time, our commitment to transparency and personalized guidance helped us build lasting trust among students and professionals. We continuously adapted to changing global trends to offer the best opportunities available. This strong foundation set the stage for our future growth and success.",  
 img: "/journey-2009.jpg",
  },
  {
    year: "2012",
     title: "Stepping Into Growth",
desc: "We expanded our services by building strong partnerships with international universities and improving our visa success rate. Our team grew, and we started helping more students successfully move abroad for education and career opportunities. This phase marked a significant step in strengthening our global network and expanding our reach. We focused on delivering consistent results and enhancing the overall student experience. Our dedication during this period laid the groundwork for becoming a trusted name in the industry.",  
 img: "/journey-2012.jpg",
  },
  {
    year: "2015",
    title: "Earning Trust, Building Reputation",
desc: "By this time, VJC Overseas became a trusted name in overseas education consulting. Our consistent results, transparency, and student success stories helped us build a strong reputation in the industry. We earned the confidence of students and families through our reliable and honest approach. Our growing success stories became a reflection of our commitment and expertise. This phase strengthened our position as a dependable partner for aspiring global professionals.",   
 img: "/journey-2015.jpg",
  },
  {
    year: "2018",
   title: "Expanding Beyond Boundaries",
desc: "We expanded our operations to major cities and strengthened our global reach. This allowed us to serve more students and provide better opportunities across different countries and programs. Our presence in multiple locations helped us connect with a wider audience and understand diverse student needs. We enhanced our support systems to deliver a seamless experience for every applicant. This phase marked a significant leap in scaling our impact and influence in the industry.",  
 img: "/journey-2018.jpg",
  },
  {
    year: "2022",
    title: "Recognized Among the Best",
desc: "Our commitment to excellence was recognized as we were awarded India's Most Trusted Brand. This milestone reflected the trust and satisfaction of thousands of students who chose VJC Overseas. It was a proud moment that validated our years of hard work and dedication. This recognition strengthened our credibility and inspired us to aim even higher. It marked a turning point where our brand stood out as a leader in the industry.",   
 img: "/journey-2022.jpg",
  },
  {
  year: "2026",
  title: "Leading the Global Future",
  desc: "As we step into the future, VJC Overseas continues to lead with innovation, excellence, and a global vision. We are committed to setting new benchmarks in overseas education and immigration services, helping students achieve success on an international scale. With advanced solutions, stronger global partnerships, and a forward-thinking approach, we aim to create limitless opportunities for aspiring individuals. This phase represents our evolution into a global leader, shaping the future of education and careers worldwide.",
  img: "/journey-2026.jpg",
}
];

export default function OurJourney() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % journeyData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">

        {/* 🔥 SECTION HEADING */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2563EB] mb-12 font-serif">
  Our Journey
</h2>
        {/* Timeline */}
        <div className="flex justify-between items-center mb-20 relative">
          <div className="absolute w-full h-[2px] bg-gray-300 top-1/2"></div>

          {journeyData.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer text-center z-10"
            >
              <div
                className={`w-4 h-4 rounded-full mx-auto mb-2 ${
                  index === activeIndex
                    ? "bg-orange-500 scale-125"
                    : "bg-gray-300"
                }`}
              />
              <p
                className={`text-sm ${
                  index === activeIndex
                    ? "text-black font-semibold"
                    : "text-gray-400"
                }`}
              >
                {item.year}
              </p>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          
          <div className="h-[350px] rounded-xl overflow-hidden">
            <img
              src={journeyData[activeIndex].img}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-start">
            
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              {journeyData[activeIndex].title}
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed">
              {journeyData[activeIndex].desc}
            </p>

            {/* 🔥 ARROW BUTTONS ADDED */}
            <div className="flex gap-4 mt-6">
              
              <button
                onClick={() =>
                  setActiveIndex(
                    (activeIndex - 1 + journeyData.length) %
                      journeyData.length
                  )
                }
                className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-xl hover:bg-gray-100 transition"
              >
                ←
              </button>

              <button
                onClick={() =>
                  setActiveIndex(
                    (activeIndex + 1) % journeyData.length
                  )
                }
                className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-xl hover:bg-gray-100 transition"
              >
                →
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}