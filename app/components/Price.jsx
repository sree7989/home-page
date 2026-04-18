"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const HeroZoomSection = () => {
  const ref = useRef(null);

  // 🔥 Section-based scroll (UPDATED)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🔥 Raw zoom (UPDATED → now uses scrollYProgress instead of scrollY)
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1, 1.35]);

  // 🔥 Smooth spring (same)
  const scale = useSpring(scaleRaw, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  // Overlay goes from DARK → LIGHT (UPDATED to same scroll source)
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.65, 0.15]);

  return (
    <section ref={ref} className="relative w-full h-[70vh] overflow-hidden -mt-10">
      
      {/* Background Image */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-0 bg-blue-900/50 will-change-transform"
      >
        <img
          src="/comp-1.webp"
          alt="hero"
          className="w-full h-full object-cover object-[40%_10%]"
        />
      </motion.div>

      {/* Blue Overlay (DARK → LIGHT) */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-blue-900 z-10"
      />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-white text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight font-sans w-full text-center">
            <span className="block md:whitespace-nowrap">
              Need Experts To Assist You With Your
            </span>
            <span className="block">
              Visa Application?
            </span>
          </h1>

          <p className="text-white mt-6 text-xl md:text-2xl font-medium whitespace-nowrap text-center">
            You are at the right place. VJC Overseas is your one stop solution for all your immigration related queries.
          </p>

          <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition">
            GET IN TOUCH
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroZoomSection;