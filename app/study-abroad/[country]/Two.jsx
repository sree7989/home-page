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
      case "Study in USA":
        return <USAStudyVisa />;
      case "Study in Canada":
        return <CanadaStudyVisa />;
      case "Study in Australia":
        return <AustraliaStudyVisa />;
      case "Study in Uk":
        return <UKStudyVisa />;
      case "Study in New Zealand":
        return <NZStudyVisa />;
      case "Study in Hongkong":
        return <HongStudyVisa />;
      case "Study in UAE":
        return <UAEStudyVisa />;
      case "Study in Germany":
        return <Germany />;
      case "Study in Norway":
        return <Norway />;
      case "Study in Poland":
        return <Poland />;
      case "Study in Switzerland":
        return <Switzerland />;
      case "Study in Sweden":
        return <Sweden />;
      case "Study in Spain":
        return <Spain />;
      case "Study in Philippines":
        return <Philippines />;
      case "Study in South Africa":
        return <Southafrica />;
      case "Study in Singapore":
        return <Singapore />;
      case "Study in Malaysia":
        return <Malaysia />;
      case "Study in France":
        return <France />;
      case "Study in Italy":
        return <Itlay />;
      case "Study in Ireland":
        return <Ireland />;
      case "Study in Netherlands":
        return <Netherland />;
      case "Study in Luxembourg":
        return <Lux />;
      case "Study in Dubai":
        return <Dubai />;
      case "Study in Denmark":
        return <Denmark />;
      default:
        return <div>Select a country</div>;
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* ===== HERO SECTION ===== */}
      <div
        className="relative w-full min-h-[80vh] bg-cover bg-center -mt-20"
        style={{ backgroundImage: `url(${selectedVisa.image || "/usa1.jpg"})` }}
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

      {/* ===== MAIN SECTION ===== */}
      <div className="relative w-full bg-white px-4 sm:px-6 lg:px-12 pt-10 pb-12">
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
            {renderCountryContent()}
          </div>

          {/* RIGHT → STICKY SECTION */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              {/* ===== EXPLORE COUNTRIES ===== */}
              <div className="p-0 overflow-hidden">
                <div className="mb-6 text-center">
                  <h2 className="text-3xl md:text-[2rem] font-extrabold tracking-tight text-gray-900">
                    Explore Countries
                  </h2>
                </div>

                <div className="overflow-hidden">
                  <motion.div
                    className="flex"
                    animate={{ x: `-${active * 100}%` }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    {countryGroups.map((group, i) => (
                      <div key={i} className="flex flex-col gap-4 min-w-full">
                        <div className="grid grid-cols-3 gap-3">
                          {group.slice(0, 3).map((country, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleCountryClick(country)}
                              className="p-3 rounded-md border-2 border-orange-500 bg-white text-gray-700 transition-all duration-300"
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
                              className="p-3 rounded-md border-2 border-orange-500 bg-white text-gray-700 transition-all duration-300"
                            >
                              {country.replace("Study in ", "")}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* ===== FORM SECTION ===== */}
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