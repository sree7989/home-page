"use client";

import { useState } from "react";
import Image from "next/image";
import { FaUniversity, FaRegHandshake, FaGlobeAmericas, FaFileInvoice } from "react-icons/fa";
import ModalFormWithPopup from "../../Popup/Popup";
import Aboutus from "../../Popup/Aboutus";

const offers = [
  "IELTS & PTE Coaching",
  "University Admissions",
  "Career Counselling",
  "Visa Assistance",
  "Work Abroad",
  "PR & Immigration",
  "Resume Marketing",
];

const stats = [
  { value: "2000+", label: "Successful Visas" },
  { value: "1500+", label: "Students Placed Abroad" },
  { value: "3000+", label: "IELTS Students Trained" },
  { value: "2500+", label: "PTE Students Trained" },
];

export default function CompFour() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ── WE OFFER SECTION ── */}
      <section className="py-10 bg-white">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="flex justify-center mb-10">
            <span className="flex items-center gap-2 px-6 py-2 rounded-full bg-red-100 text-red-600 font-semibold text-sm tracking-widest uppercase border border-red-200">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" />
              </svg>
              WE OFFER
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {offers.map((item, i) => (
              <div
                key={i}
                className="bg-red-600 text-white font-bold text-lg px-8 py-5 rounded-sm cursor-pointer hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-md"
                style={{ borderBottom: "4px solid #1e1b6e" }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORLD MAP SECTION ── */}
      <section className="bg-white pb-0">
<div className="relative w-full  pb-20">
          {/* Map wrapper — image stays, SVG overlays on top */}
<div className="relative w-full -mb-16">
            {/* ✅ Regular img tag — Next.js delete చేయదు */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
           <img
  src="/map.png"
  alt="World Map"
  className="w-full max-w-6xl mx-auto h-auto block"
/>
            {/* SVG Overlay — pins + dashed paths */}
            
          </div>

          {/* Stats Row */}
<div className="grid grid-cols-2 md:grid-cols-4 border-t border-gray-100 -mt-16 relative z-10">            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-8 px-4 border-r border-gray-100 last:border-r-0 bg-white"
              >
                <span className="text-red-600 font-extrabold text-4xl md:text-5xl">{s.value}</span>
                <span className="text-gray-600 text-base mt-2">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </>
     );
     }
     
     