"use client";

import React, { useEffect, Suspense } from "react";
import dynamic from "next/dynamic";

// ✅ Main Sections
import Hero from "@/app/components/Hero";
import NewSteps from "@/app/components/NewSteps";

// ✅ 🔥 ADD THIS LINE
import Form from "./components/Form";

// 🌍 Countries
const Countries = dynamic(() => import("@/app/components/Countries"), {
  ssr: false,
});

// 💼 Our Services
const ServicesDec = dynamic(
  () => import("@/app/components/ServicesDec"),
  { ssr: false }
);

// ⭐ Why VJC
const Desc = dynamic(
  () => import("@/app/components/Scroll/components/Description"),
  { ssr: false }
);

// 🔄 EASY PROCESS
const Scroll = dynamic(() => import("@/app/components/Scroll"), {
  ssr: false,
});

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
    <div className="flex justify-center items-center h-40">
      <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
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
    <main className="w-full">
      
      {/* 🔥 HERO */}
      <Hero />

      {/* 🔥 FORM (HERO KINDHA EXACT PLACE) */}
      <Form />

      {/* ✨ DREAM */}
      <NewSteps />

      {/* 🌍 COUNTRIES */}
      <Suspense fallback={<LoadingIndicator />}>
        <Countries />
      </Suspense>

      {/* 💼 SERVICES */}
      <Suspense fallback={<LoadingIndicator />}>
        <ServicesDec />
      </Suspense>

      {/* ⭐ WHY VJC */}
      <Suspense fallback={<LoadingIndicator />}>
        <Desc />
      </Suspense>

      {/* 🔄 EASY PROCESS */}
      <Suspense fallback={<LoadingIndicator />}>
        <Scroll />
      </Suspense>

      {/* 🏆 AWARDS */}
      <Suspense fallback={<LoadingIndicator />}>
        <Awardsection />
      </Suspense>

      {/* 🌄 PARALLAX */}
      <Suspense fallback={<LoadingIndicator />}>
        <Parallex />
      </Suspense>

    </main>
  );
}