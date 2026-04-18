"use client";
import { useState } from "react";

const services = [
  {
    title: "Migrate",
    img: "/migrate-service.jpg",
    desc: "Our services are designed to simplify the migration process and guide you towards a seamless transition to your desired destination. From initial consultations to visa applications, documentation and settlement.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-16 h-16">
        <rect x="3" y="3" width="13" height="18" rx="1.5" stroke="white" strokeWidth="1.5" fill="none"/>
        <circle cx="9.5" cy="11" r="2.5" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M5 19c0-2 2-3 4.5-3s4.5 1 4.5 3" stroke="white" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    title: "Study",
    img: "/study.jpg",
    desc: "Get admission to top universities worldwide with our complete study abroad assistance including SOP, visa, and accommodation guidance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-16 h-16">
        <path d="M12 3L2 8l10 5 10-5-10-5z" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M6 10.5v5c0 2 2.686 3.5 6 3.5s6-1.5 6-3.5v-5" stroke="white" strokeWidth="1.5" fill="none"/>
        <line x1="22" y1="8" x2="22" y2="14" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Work",
    img: "/work.jpg",
    desc: "Find global job opportunities and secure work visas easily with our expert team guiding you through every step.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-16 h-16">
        <rect x="2" y="7" width="20" height="14" rx="1.5" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="white" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="14" r="2.5" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M2 13h7M15 13h7" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Invest",
    img: "/invest.jpg",
    desc: "We believe in building strong relationships based on trust, transparency, and integrity. Our goal is to maximize your returns while minimizing risks. Get started today and begin your journey.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-16 h-16">
        <rect x="2" y="5" width="14" height="10" rx="1" stroke="white" strokeWidth="1.5" fill="none"/>
        <circle cx="9" cy="10" r="2" stroke="white" strokeWidth="1.5" fill="none"/>
        <circle cx="17" cy="15" r="5" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M17 12.5v2.5l1.5 1.5" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Counselling",
    img: "/counselling.jpg",
    desc: "Get expert counselling tailored to your goals and career path. Our certified counsellors are here to guide you at every step.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-16 h-16">
        <rect x="4" y="2" width="13" height="17" rx="1.5" stroke="white" strokeWidth="1.5" fill="none"/>
        <line x1="7" y1="7" x2="14" y2="7" stroke="white" strokeWidth="1.5"/>
        <line x1="7" y1="10" x2="14" y2="10" stroke="white" strokeWidth="1.5"/>
        <line x1="7" y1="13" x2="11" y2="13" stroke="white" strokeWidth="1.5"/>
        <circle cx="6" cy="5" r="2" stroke="white" strokeWidth="1" fill="none"/>
      </svg>
    ),
  },
  {
    title: "Coaching",
    img: "/coaching.jpg",
    desc: "Prepare for exams and interviews with professional coaching from our expert trainers for IELTS, PTE, and more.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-16 h-16">
        <circle cx="10" cy="7" r="3" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M4 20c0-3 2.5-5 6-5s6 2 6 5" stroke="white" strokeWidth="1.5" fill="none"/>
        <line x1="16" y1="8" x2="22" y2="8" stroke="white" strokeWidth="1.5"/>
        <line x1="16" y1="11" x2="22" y2="11" stroke="white" strokeWidth="1.5"/>
        <line x1="16" y1="14" x2="20" y2="14" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-8 bg-gray-100">
      {/* Heading */}
     <div className="text-center mb-16 px-4">
  <h2 className="text-6xl lg:text-6xl font-bold text-orange-500 tracking-wide mb-6">
    Our Services
  </h2>

  <p className="mt-4 text-gray-900 text-xl lg:text-xl leading-relaxed w-full px-6 lg:px-20">
    We provide a wide range of immigration and career services designed to help you achieve your dreams globally.
    From study visas to work permits, we guide you every step of the way.
    Our experienced team ensures personalized support, making complex processes simple and stress-free for every client.
    With a strong focus on transparency and success, we help you make the right decisions for your future abroad.
    Whether you're planning to study, work, or settle, we are committed to turning your global aspirations into reality.
  </p>
</div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="relative cursor-pointer overflow-hidden rounded-xl"
            style={{ height: "500px" }}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{ transform: hovered === index ? "scale(1.08)" : "scale(1)" }}
            />

            {/* Default overlay — icon + title */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-400"
              style={{
                background: "rgba(0,0,0,0.35)",
                opacity: hovered === index ? 0 : 1,
              }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-white text-3xl font-bold tracking-wide">{item.title}</h3>
            </div>

            {/* Hover overlay — dark + description */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-400"
              style={{
                background: "rgba(0,0,0,0.72)",
                opacity: hovered === index ? 1 : 0,
              }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-white text-3xl font-bold mb-4 tracking-wide">{item.title}</h3>
              <p className="text-gray-200 text-center text-base leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition">
          Schedule an Appointment
        </button>
      </div>
    </section>
  );
}