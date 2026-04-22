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
];

const defaultVisa = {
  name: "Study Abroad",
  path: "/study-abroad",
};

const Migrate = () => {
  const pathname = usePathname();
  const [selectedVisa, setSelectedVisa] = useState(defaultVisa);

  useEffect(() => {
    const foundVisa = visaData.find((visa) => visa.path === pathname);
    setSelectedVisa(foundVisa || defaultVisa);
  }, [pathname]);

  return (
    <div className="w-full min-h-screen flex flex-col">

      {/* ===== HERO SECTION ===== */}
      <div
        className="relative w-full min-h-[80vh] bg-cover bg-center -mt-20"
        style={{ backgroundImage: `url(${selectedVisa.image})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative z-10 w-full h-full flex items-center justify-center px-6">
          <motion.div className="text-white text-center">
            <h1 className="text-4xl md:text-5xl font-bold uppercase">
              {selectedVisa.name}
            </h1>
            <p className="mt-4 text-lg">
              Explore global education opportunities and start your journey today.
            </p>
          </motion.div>
        </div>
      </div>
     

      {/* ===== MAIN SECTION (NEW LAYOUT) ===== */}
    <div className="relative w-full bg-white px-4 sm:px-6 lg:px-12 pt-10 pb-12">
      {/* 👇 CURVED TOP SHAPE */}
<div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
  <svg
    viewBox="0 0 1440 100"
    className="w-full h-[80px]"
    preserveAspectRatio="none"
  >
    <path
  d="M0,100 Q720,-20 1440,100 L1440,100 L0,100 Z"
  fill="white"
/>
  </svg>
</div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

          {/* LEFT → CONTENT */}
          <div className="w-full lg:w-2/3">
            {selectedVisa.name === "Study in USA" ? (
              <USAStudyVisa />
            ) : selectedVisa.name === "Study in Canada" ? (
              <CanadaStudyVisa />
            ) : selectedVisa.name === "Study in Australia" ? (
              <AustraliaStudyVisa />
            ) : selectedVisa.name === "Study in Uk" ? (
              <UKStudyVisa />
            ) : selectedVisa.name === "Study in New Zealand" ? (
              <NZStudyVisa />
            ) : selectedVisa.name === "Study in Hongkong" ? (
              <HongStudyVisa />
            ) : selectedVisa.name === "Study in UAE" ? (
              <UAEStudyVisa />
            ) : selectedVisa.name === "Study in Germany" ? (
              <Germany />
            ) : selectedVisa.name === "Study in Norway" ? (
              <Norway />
            ) : selectedVisa.name === "Study in Poland" ? (
              <Poland />
            ) : selectedVisa.name === "Study in Switzerland" ? (
              <Switzerland />
            ) : selectedVisa.name === "Study in Sweden" ? (
              <Sweden />
            ) : selectedVisa.name === "Study in Spain" ? (
              <Spain />
            ) : selectedVisa.name === "Study in Philippines" ? (
              <Philippines />
            ) : selectedVisa.name === "Study in South Africa" ? (
              <Southafrica />
            ) : selectedVisa.name === "Study in Singapore" ? (
              <Singapore />
            ) : selectedVisa.name === "Study in Malaysia" ? (
              <Malaysia />
            ) : selectedVisa.name === "Study in France" ? (
              <France />
            ) : selectedVisa.name === "Study in Italy" ? (
              <Itlay />
            ) : selectedVisa.name === "Study in Ireland" ? (
              <Ireland />
            ) : selectedVisa.name === "Study in Netherlands" ? (
              <Netherland />
            ) : selectedVisa.name === "Study in Luxembourg" ? (
              <Lux />
            ) : selectedVisa.name === "Study in Dubai" ? (
              <Dubai />
            ) : selectedVisa.name === "Study in Denmark" ? (
              <Denmark />
            ) : (
              <div>Select a country</div>
            )}
          </div>

          {/* RIGHT → STICKY FORM */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24">
              <div className="p-6 border rounded-xl shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-center">
                  Apply Now
                </h2>
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