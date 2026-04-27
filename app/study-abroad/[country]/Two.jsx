"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Form from "./Form";

import USAStudyVisa from "./usa";
import UAEStudyVisa from "./uae";
import CanadaStudyVisa from "./CanadaStudyVisa";
import AustraliaStudyVisa from "./AustraliaStudyVisa";
import UKStudyVisa from "./uk";
import NZStudyVisa from "./Newzealand";
import HongStudyVisa from "./HongStudyVisa";
import Germany from "./Germany";
import Norway from "./Norway";
import Poland from "./Poland";
import Switzerland from "./Switzerland";
import Sweden from "./Sweden";
import Spain from "./Spain";
import Philippines from "./Philippines";
import Southafrica from "./Southafrica";
import Singapore from "./Singapore";
import Malaysia from "./Malaysia";
import France from "./France";
import Itlay from "./Itlay";
import Ireland from "./Ireland";
import Netherland from "./Netherland";
import Lux from "./Lux";
import Dubai from "./Dubai";
import Denmark from "./Denmark";

const visaData = [
  { name: "Study in USA", path: "/study-abroad/usa", image: "/usa1.jpg" },
  { name: "Study in Uk", path: "/study-abroad/uk", image: "/uk1.webp" },
  { name: "Study in Canada", path: "/study-abroad/canada", image: "/canada1.jpg" },
  { name: "Study in Australia", path: "/study-abroad/australia", image: "/study-in-australia-flag.jpg" },
  { name: "Study in Germany", path: "/study-abroad/germany", image: "/germany.jpg" },
  { name: "Study in Italy", path: "/study-abroad/italy", image: "/itlay.jpg" },
  { name: "Study in France", path: "/study-abroad/france", image: "/france.jpg" },
  { name: "Study in Singapore", path: "/study-abroad/singapore", image: "/singapore.jpg" },
  { name: "Study in Malaysia", path: "/study-abroad/malaysia", image: "/m.jpg" },
  { name: "Study in South Africa", path: "/study-abroad/southafrica", image: "/sa.webp" },
  { name: "Study in New Zealand", path: "/study-abroad/newzealand", image: "/nz.webp" },
  { name: "Study in Philippines", path: "/study-abroad/philippines", image: "/p.jpg" },
  { name: "Study in Poland", path: "/study-abroad/poland", image: "/pol.webp" },
  { name: "Study in Ireland", path: "/study-abroad/ireland", image: "/ir.jpg" },
  { name: "Study in Spain", path: "/study-abroad/spain", image: "/spa.avif" },
  { name: "Study in Netherlands", path: "/study-abroad/netherlands", image: "/net.webp" },
  { name: "Study in Switzerland", path: "/study-abroad/switzerland", image: "/sw.webp" },
  { name: "Study in Denmark", path: "/study-abroad/denmark", image: "/de.jpg" },
  { name: "Study in Dubai", path: "/study-abroad/dubai", image: "/du.webp" },
  { name: "Study in Luxembourg", path: "/study-abroad/luxembourg", image: "/lux.jpg" },
  { name: "Study in Hongkong", path: "/study-abroad/hongkong", image: "/study-in-hongkong-flag.jpg" },
  { name: "Study in UAE", path: "/study-abroad/uae", image: "/ua.jpg" },
  { name: "Study in Norway", path: "/study-abroad/norway", image: "/norwaystudy.avif" },
  { name: "Study in Sweden", path: "/study-abroad/sweden", image: "/swedenstudy.jpg" },
];

const heroData = {
  "Study in USA": {
    line1: "Study in the USA for",
    highlight: "Indian Students:",
    line2: "Top Education & Global Prospects",
    image: "/usa.png",
  },
  "Study in Uk": {
    line1: "Study in the UK for",
    highlight: "Indian Students:",
    line2: "World-Class Education & Career Growth",
    image: "/uk.png",
  },
  "Study in Canada": {
    line1: "Study in Canada for",
    highlight: "Indian Students:",
    line2: "World-Class Education and Diversity",
    image: "/canada.png",
  },
  "Study in Australia": {
    line1: "Study in Australia for",
    highlight: "Indian Students:",
    line2: "Your Gateway to Global Success",
    image: "/australia.png",
  },
  "Study in Germany": {
    line1: "Study in Germany for",
    highlight: "Indian Students:",
    line2: "Education in the Land of Ideas",
    image: "/germany.png",
  },
  "Study in Italy": {
    line1: "Study in Italy for",
    highlight: "Indian Students:",
    line2: "Experience Rich Culture and Education",
    image: "/italy.png",
  },
  "Study in France": {
    line1: "Study in France for",
    highlight: "Indian Students:",
    line2: "Top Universities with Cultural Excellence",
    image: "/france.png",
  },
  "Study in Singapore": {
    line1: "Study in Singapore for",
    highlight: "Indian Students:",
    line2: "Asia's Leading Education Hub",
    image: "/singapore.png",
  },
  "Study in Malaysia": {
    line1: "Study in Malaysia for",
    highlight: "Indian Students:",
    line2: "Your Gateway to a Brighter Future",
    image: "/malaysia.png",
  },
  "Study in South Africa": {
    line1: "Study in South Africa for",
    highlight: "Indian Students:",
    line2: "Quality Education with Affordable Costs",
    image: "/southafrica.png",
  },
  "Study in New Zealand": {
    line1: "Study in New Zealand for",
    highlight: "Indian Students:",
    line2: "Peaceful Environment with Top Education",
    image: "/nz.png",
  },
  "Study in Philippines": {
    line1: "Study in Philippines for",
    highlight: "Indian Students:",
    line2: "Affordable Medical Education Destination",
    image: "/philippines.png",
  },
  "Study in Poland": {
    line1: "Study in Poland for",
    highlight: "Indian Students:",
    line2: "European Education at Low Cost",
    image: "/poland.png",
  },
  "Study in Ireland": {
    line1: "Study in Ireland for",
    highlight: "Indian Students:",
    line2: "Top Education & Global Exposure",
    image: "/ireland.png",
  },
  "Study in Spain": {
    line1: "Study in Spain for",
    highlight: "Indian Students:",
    line2: "Study in a Vibrant Cultural Hub",
    image: "/spain.png",
  },
  "Study in Netherlands": {
    line1: "Study in Netherlands for",
    highlight: "Indian Students:",
    line2: "Innovation and Research Excellence",
    image: "/netherlands.png",
  },
  "Study in Switzerland": {
    line1: "Study in Switzerland for",
    highlight: "Indian Students:",
    line2: "Global Hub for Hospitality & Business",
    image: "/switzerland.png",
  },
  "Study in Denmark": {
    line1: "Study in Denmark for",
    highlight: "Indian Students:",
    line2: "High Quality Education in Europe",
    image: "/denmark.png",
  },
  "Study in Dubai": {
    line1: "Study in Dubai for",
    highlight: "Indian Students:",
    line2: "Modern Education in a Global City",
    image: "/dubai.png",
  },
  "Study in Luxembourg": {
    line1: "Study in Luxembourg for",
    highlight: "Indian Students:",
    line2: "Small Country, Big Opportunities",
    image: "/luxembourg.png",
  },
  "Study in Hongkong": {
    line1: "Study in Hong Kong for",
    highlight: "Indian Students:",
    line2: "Gateway to Asian Education",
    image: "/hongkong.png",
  },
  "Study in UAE": {
    line1: "Study in UAE for",
    highlight: "Indian Students:",
    line2: "Top Universities in the Middle East",
    image: "/uae.png",
  },
  "Study in Norway": {
    line1: "Study in Norway for",
    highlight: "Indian Students:",
    line2: "Free Education with High Quality",
    image: "/norway.png",
  },
  "Study in Sweden": {
    line1: "Study in Sweden for",
    highlight: "Indian Students:",
    line2: "Innovation & Research Driven Education",
    image: "/sweden.png",
  },
};

const defaultVisa = {
  name: "Study Abroad",
  path: "/study-abroad",
  image: "/usa1.jpg",
};

const countryGroups = [
  [
    "Study in USA",
    "Study in Uk",
    "Study in Canada",
    "Study in Australia",
    "Study in Germany",
    "Study in Italy",
  ],
  [
    "Study in France",
    "Study in Singapore",
    "Study in Malaysia",
    "Study in South Africa",
    "Study in New Zealand",
    "Study in Philippines",
  ],
  [
    "Study in Poland",
    "Study in Ireland",
    "Study in Spain",
    "Study in Netherlands",
    "Study in Switzerland",
    "Study in Denmark",
  ],
  [
    "Study in Dubai",
    "Study in Luxembourg",
    "Study in Hongkong",
    "Study in UAE",
    "Study in Norway",
    "Study in Sweden",
  ],
];

const Migrate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedVisa, setSelectedVisa] = useState(defaultVisa);
  const [active, setActive] = useState(0);
  const totalSlides = countryGroups.length;

const nextSlide = () => {
  setActive((prev) => (prev + 1) % totalSlides);
};

const prevSlide = () => {
  setActive((prev) => (prev - 1 + totalSlides) % totalSlides);
};

  useEffect(() => {
    const foundVisa = visaData.find((visa) => visa.path === pathname);
    setSelectedVisa(foundVisa || defaultVisa);
  }, [pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleCountryClick = (countryName) => {
    const foundVisa = visaData.find((visa) => visa.name === countryName);
    if (foundVisa) {
      setSelectedVisa(foundVisa);
      router.push(foundVisa.path);
    }
  };

  const renderCountryContent = () => {
    switch (selectedVisa.name) {
      case "Study in USA": return <USAStudyVisa />;
      case "Study in Canada": return <CanadaStudyVisa />;
      case "Study in Australia": return <AustraliaStudyVisa />;
      case "Study in Uk": return <UKStudyVisa />;
      case "Study in New Zealand": return <NZStudyVisa />;
      case "Study in Hongkong": return <HongStudyVisa />;
      case "Study in UAE": return <UAEStudyVisa />;
      case "Study in Germany": return <Germany />;
      case "Study in Norway": return <Norway />;
      case "Study in Poland": return <Poland />;
      case "Study in Switzerland": return <Switzerland />;
      case "Study in Sweden": return <Sweden />;
      case "Study in Spain": return <Spain />;
      case "Study in Philippines": return <Philippines />;
      case "Study in South Africa": return <Southafrica />;
      case "Study in Singapore": return <Singapore />;
      case "Study in Malaysia": return <Malaysia />;
      case "Study in France": return <France />;
      case "Study in Italy": return <Itlay />;
      case "Study in Ireland": return <Ireland />;
      case "Study in Netherlands": return <Netherland />;
      case "Study in Luxembourg": return <Lux />;
      case "Study in Dubai": return <Dubai />;
      case "Study in Denmark": return <Denmark />;
      default: return <div>Select a country</div>;
    }
  };

  const hero = heroData[selectedVisa.name];

  return (
    <div className="w-full min-h-screen flex flex-col">

      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full overflow-hidden -mt-20" style={{ minHeight: "85vh" }}>

        {/* BACKGROUND GRADIENT */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
          }}
        />

        {/* SUBTLE DECORATIVE BLOB — left side */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] opacity-10 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
        />

        {/* CURVE AT BOTTOM */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1440 150" className="w-full h-[120px]" preserveAspectRatio="none">
            <path d="M0,100 Q720,-20 1440,100 L1440,150 L0,150 Z" fill="#f8fafc" />
          </svg>
        </div>

        {/* HERO CONTENT */}
        <div
          className="relative z-20 w-full flex items-center px-6 lg:px-20"
          style={{ minHeight: "85vh" }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">

            {/* LEFT — TEXT */}
            <div className="text-white space-y-8 pt-24 lg:pt-0">
              {hero ? (
                <div className="space-y-2">
                  {/* Line 1 */}
                  <h1 className="font-extrabold leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
                    {hero.line1}
                  </h1>

                  {/* Highlight line — with red underline */}
                  {hero.highlight && (
                    <h1
                      className="font-extrabold leading-tight relative inline-block"
                      style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
                    >
                      {hero.highlight}
                      <span
                        className="absolute left-0 -bottom-1 w-full"
                        style={{ height: "3px", background: "#ef4444", borderRadius: "2px" }}
                      />
                    </h1>
                  )}

                  {/* Line 2 */}
                  <h2
                    className="font-semibold leading-tight text-slate-300"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", marginTop: hero.highlight ? "1rem" : "0" }}
                  >
                    {hero.line2}
                  </h2>
                </div>
              ) : (
                <h1 className="text-4xl font-extrabold">Study Abroad</h1>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  className="px-7 py-3 font-semibold rounded-lg text-white shadow-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                  style={{ background: "#1d4ed8", fontSize: "1rem" }}
                >
                  Free Expert Consultation
                </button>
                <button
                  className="px-7 py-3 font-semibold rounded-lg text-white shadow-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                  style={{ background: "#1d4ed8", fontSize: "1rem" }}
                >
                 Check Eligibility
                </button>
              </div>
            </div>

            {/* RIGHT — IMAGE */}
            <div className="flex items-center justify-center lg:justify-end pt-24 lg:pt-0">
              {hero?.image ? (
                <img
                  key={hero.image}
                  src={hero.image}
                  alt={selectedVisa.name}
                  className="w-auto object-contain drop-shadow-2xl"
                  style={{ maxHeight: "460px", maxWidth: "100%" }}
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              ) : null}
            </div>

          </div>
        </div>
      </div>

      {/* ===== MAIN SECTION ===== */}
      <div className="relative w-full bg-slate-50 px-4 sm:px-6 lg:px-12 pt-10 pb-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

          {/* LEFT — COUNTRY CONTENT */}
          <div className="w-full lg:w-2/3">
            {renderCountryContent()}
          </div>

          {/* RIGHT — STICKY SIDEBAR */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24 space-y-6">

              {/* EXPLORE COUNTRIES SLIDER */}
              <div className="p-0 overflow-hidden">
                <div className="mb-5 flex items-center justify-between px-2">

  {/* LEFT BUTTON */}
  <button
    onClick={prevSlide}
    className="px-3 py-1 bg-orange-500 text-white rounded-md"
  >
    {"<"}
  </button>

  {/* TITLE */}
  <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
    Explore Countries
  </h2>

  {/* RIGHT BUTTON */}
  <button
    onClick={nextSlide}
    className="px-3 py-1 bg-orange-500 text-white rounded-md"
  >
    {">"}
  </button>

</div>

                <div className="overflow-hidden">
                  <motion.div
                    className="flex"
                    animate={{ x: `-${active * 100}%` }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    {countryGroups.map((group, i) => (
                      <div key={i} className="flex flex-col gap-3 min-w-full">
                        <div className="grid grid-cols-3 gap-3">
                          {group.slice(0, 3).map((country, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleCountryClick(country)}
                              className="p-3 rounded-md border-2 border-orange-500 bg-white text-gray-700 text-sm font-medium transition-all duration-200 hover:bg-orange-50 hover:text-orange-600"
                            >
                              {country.replace("Study in ", "")}
                            </button>
                          ))}

                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {group.slice(3, 6).map((country, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleCountryClick(country)}
                              className="p-3 rounded-md border-2 border-orange-500 bg-white text-gray-700 text-sm font-medium transition-all duration-200 hover:bg-orange-50 hover:text-orange-600"
                            >
                              {country.replace("Study in ", "")}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {[0, 1, 2, 3].map((i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: active === i ? "24px" : "8px",
                        height: "8px",
                        background: active === i ? "#f97316" : "#d1d5db",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* FORM */}
              <div>
                <Form />
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Migrate;
