"use client";

import React, { useEffect, Suspense } from "react";
import dynamic from "next/dynamic";

// ✅ Main Sections
import Hero from "@/app/components/Hero";
import NewSteps from "@/app/components/NewSteps";

// ✅ NEW IMPORT
import HeroExtra from "./components/HeroExtra";

// 🌍 Countries
const Countries = dynamic(() => import("@/app/components/Countries"), {
  ssr: false,
});

// 💼 Our Services
const ServicesDec = dynamic(
  () => import("@/app/components/ServicesDec"),
  { ssr: false }
);

// 🔄 EASY PROCESS
const Scroll = dynamic(() => import("@/app/components/Scroll"), {
  ssr: false,
});

// ⭐ Why VJC
const Desc = dynamic(
  () => import("@/app/components/Scroll/components/Description"),
  { ssr: false }
);

// 🏆 Awards
const Awardsection = dynamic(
  () => import("@/app/components/Awardsection"),
  { ssr: false }
);

// 🌄 Parallax
const Parallex = dynamic(
  () => import("@/app/components/Parallex/parallex"),
  { ssr: false }
);

// 🔄 Loader
function LoadingIndicator() {
  return (
    <div className="flex justify-center items-center h-32 sm:h-40 md:h-48">
      <div className="w-8 h-8 sm:w-10 sm:h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

// 🔝 Scroll top
const scrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

export default function Home() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <main className="w-full overflow-x-hidden">

      {/* 🔥 HERO */}
   
  <Hero />

    <div className="mt-[-210px] md:mt-0">
  <HeroExtra />
</div>
   

      {/* 🔹 GLOBAL CONTAINER (for all below sections) */}
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 space-y-12 sm:space-y-16 md:space-y-20">

        {/* ✨ DREAM */}
        <section className="w-full">
          <NewSteps />
        </section>

        {/* 🌍 COUNTRIES */}
        <section className="w-full">
          <Suspense fallback={<LoadingIndicator />}>
            <Countries />
          </Suspense>
        </section>

        {/* ⭐ WHY VJC */}
        <section className="w-full">
          <Suspense fallback={<LoadingIndicator />}>
            <Desc />
          </Suspense>
        </section>

        {/* 💼 SERVICES */}
        <section className="w-full">
          <Suspense fallback={<LoadingIndicator />}>
            <ServicesDec />
          </Suspense>
        </section>

        {/* 🔄 EASY PROCESS */}
        <section className="w-full">
          <Suspense fallback={<LoadingIndicator />}>
            <Scroll />
          </Suspense>
        </section>

        {/* 🏆 AWARDS */}
        <section className="w-full">
          <Suspense fallback={<LoadingIndicator />}>
            <Awardsection />
          </Suspense>
        </section>

        {/* 🌄 PARALLAX */}
        <section className="w-full">
          <Suspense fallback={<LoadingIndicator />}>
            <Parallex />
          </Suspense>
        </section>

      </div>
    </main>
  );
}