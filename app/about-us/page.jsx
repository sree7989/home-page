import React from 'react'
import Hero from "./files/hero";
import Reviews from "./files/reviews"; // ✅ ADDED
import Two from "./files/two";
import CTA from "./files/cta";
import Three from "./files/three";
import Four from "./files/four";
import Price from "@/app/components/Price";
import Why from "./files/Why";

export const metadata = {
  title: 'About VJC Overseas – Trusted Visa & Immigration Experts',
  description: 'Trusted visa & immigration consultancy for work, study & PR. VJC Overseas offers expert guidance and smooth, stress-free immigration services.',
  keywords: 'immigration consultants, visa consultants, australia pr, work visa, australia pr visa, permanent residency, germany opportunity card, study visa usa, job visa in australia, best immigration consultants in Hyderabad, best immigration consultants in Bangalore, study abroad, visa process, work permit, student visa',
};

const page = () => {
  return (
    <>
      <div className="max-w-full overflow-hidden">
        <Hero/>
        <Reviews/> {/* ✅ ADDED HERE */}
      
        <Two/>
          <Why/>
        <CTA/>
        <Four/>
        <Price/>
        <Three/>
      </div>
    </>
  )
}

export default page;