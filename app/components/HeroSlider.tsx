"use client";

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";

export default function HeroSlider() {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);

  const CTA_BUTTON = "mt-6 inline-flex w-fit items-center gap-2 bg-gradient-to-r from-orange-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md";
const visaData: any = {
  Canada: [
    "PR Visa",
    "Work Visa",
    "Student Visa",
    "Express Entry Program",
    "PNP",
    "Business Visa",
    "Visit Visa",
    "Digital Nomad Visa",
  ],
  Australia: ["Student Visa", "PR Visa", "Work Visa"],
  Germany: ["Job Seeker Visa", "EU Blue Card", "Work Visa"],
  UK: ["Student Visa", "Skilled Worker Visa"],
  UAE: ["Work Visa", "Visit Visa"],
  "New Zealand": ["Student Visa", "Work Visa", "PR Visa"],
};
  return (
     <>
    <Swiper
  modules={[Autoplay, Navigation]}  
  navigation                         
  autoplay={{ delay: 4000 }}
  loop
  className="h-screen"
>

<SwiperSlide>
  <div className="relative h-full flex items-center px-20 overflow-hidden">

    {/* BACKGROUND */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "url('/australia-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "left center",
      }}
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/30 backdrop-blur-sm"></div>

    {/* MAIN CONTENT */}
    <div className="relative z-20 w-full flex items-center h-full">

      {/* LEFT */}
      <div className="w-1/2 flex flex-col justify-center">
        <h1 className="text-6xl font-extrabold text-blue-700 leading-tight">
  Study & Settle in Australia 
  <img 
    src="/australia-flag.svg" 
    alt="Australia Flag" 
    className="inline h-[1em] w-auto align-middle ml-2"
  />
</h1>

        <p className="mt-4 text-xl text-gray-800">
          World-class education, PR opportunities & global career growth
        </p>

        <button onClick={() => setActiveCountry("Australia")} className={CTA_BUTTON}>
          Free Assessment →
        </button>
      </div>

      {/* RIGHT ✅ CIRCLE DESIGN */}
      <div className="w-1/2 h-full relative flex items-center justify-center">

        <div className="relative">

          {/* BIG MAIN (Australia) */}
          <div className="w-[320px] h-[320px] rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="/australia-students.jpg"
              className="w-full h-full object-cover object-center scale-110"
            />
          </div>

          
          <div className="absolute -top-10 right-[-40px] w-[140px] h-[140px] rounded-full overflow-hidden shadow-xl border-4 border-white">
            <img
              src="/australia-city.jpg"
              className="w-full h-full object-cover"
            />
          </div>

         
          <div className="absolute bottom-[-30px] left-[-60px] w-[140px] h-[140px] rounded-full overflow-hidden shadow-xl border-4 border-white">
            <img
              src="/australia-graduation.jpg"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>

    </div>

  </div>
</SwiperSlide>
      {/* 🇩🇪 GERMANY */}
   <SwiperSlide>
  <div className="h-full flex items-center px-20 bg-black text-white">

    {/* LEFT */}
    <div className="w-1/2">
     <h1 className="text-6xl font-bold leading-tight flex items-center gap-2">
  Work in Germany
  <img 
    src="/germany-flag.svg" 
    alt="Germany Flag" 
    className="w-12 h-8 object-contain"
  />
</h1>

     <p className="mt-4 text-[22px] text-gray-300 max-w-[520px] leading-relaxed">
  High demand jobs, strong economy &
  <br />
  opportunity card benefits
</p>
      <button onClick={() => setActiveCountry("Germany")} className={`${CTA_BUTTON} mt-6`}>
        Free Assessment →
      </button>
    </div>

    {/* RIGHT ✅ NATURAL IMAGE (NO BOX) */}
    <div className="w-1/2 h-full flex items-center justify-center overflow-visible">

      <img
        src="/germany-hero.png"
        className="w-[850px] object-contain drop-shadow-2xl"
      />

    </div>

  </div>
</SwiperSlide>
     {/* 🌍 GLOBAL TRUST */}
<SwiperSlide>
  <div
    className="relative h-full flex items-center justify-between px-20 text-white"
    style={{
      backgroundImage: "url('/world-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >

    {/* LEFT (unchanged) */}
    <div className="w-1/3">
  {/* image removed */}
</div>

    {/* CENTER (FIXED 🔥) */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold">
        Trusted by Thousands of Clients
      </h1>
      <p className="mt-4 text-lg">
        Your journey to abroad starts with VJC Overseas
      </p>
      <button className={CTA_BUTTON}>Free Assessment →</button>
    </div>

  </div>
</SwiperSlide>

    <SwiperSlide>
  <div className="relative h-full flex items-center justify-between px-20 overflow-hidden">

    {/* ✅ SOFT BLUR BACKGROUND */}
    <div 
      className="absolute inset-0 bg-cover bg-center scale-105 blur-sm"
      style={{
        backgroundImage: "url('/canada-background.jpg')",
      }}
    ></div>

    {/* ✅ LIGHT OVERLAY (balanced) */}
    <div className="absolute inset-0 bg-black/20"></div>

    {/* LEFT */}
    <div className="relative z-10 w-1/2">
      <h1 className="text-6xl font-bold leading-tight text-white drop-shadow-md flex items-center gap-3">
  
  <span>Migrate to</span>

  <span className="bg-gradient-to-r from-orange-500 to-orange-500 text-transparent bg-clip-text flex items-center gap-3">
    Canada
    <img
      src="https://flagcdn.com/w80/ca.png"
      alt="Canada Flag"
      className="w-20 h-20 object-contain"
    />
  </span>

</h1>

      <p className="mt-4 text-xl text-gray-200 drop-shadow-sm">
        PR visas, express entry & high quality lifestyle opportunities
      </p>

      <button onClick={() => setActiveCountry("Canada")} className={CTA_BUTTON}>Free Assessment →</button>
    </div>

    {/* RIGHT - 4 CIRCLES */}
    <div className="relative z-10 w-1/2 flex justify-end">

      <div className="w-[280px] h-[280px] rounded-full overflow-hidden shadow-xl border-4 border-red-500">
        <img src="/canada-main-page.jpg" className="w-full h-full object-cover" />
      </div>

      <div className="absolute top-[-30px] right-[200px] w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg border-4 border-white">
        <img src="/canada-city.jpg" className="w-full h-full object-cover" />
      </div>

      <div className="absolute bottom-[-30px] right-[220px] w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg border-4 border-white">
        <img src="/canada-grad.jpg" className="w-full h-full object-cover" />
      </div>

      <div className="absolute bottom-[20px] right-[-40px] w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg border-4 border-white">
        <img src="/canada-visa.jpg" className="w-full h-full object-cover" />
      </div>

    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="relative h-full flex items-center justify-between px-20 overflow-hidden">

    {/* 🔥 BACKGROUND IMAGE */}
    <div 
      className="absolute inset-0 bg-cover bg-center scale-105 blur-sm"
      style={{
        backgroundImage: "url('/uk-bg.jpg')",
      }}
    ></div>

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/30"></div>

    {/* LEFT */}
    <div className="relative z-10 w-1/2">
      <h1 className="text-6xl font-bold text-white drop-shadow-lg flex items-center gap-3">
  Study in UK
  <img
    src="https://flagcdn.com/w80/gb.png"
    alt="UK Flag"
    className="w-12 h-8 object-contain"
  />
</h1>
      <p className="mt-4 text-gray-200">
        Top universities, global exposure & post-study work visa
      </p>

      <button onClick={() => setActiveCountry("UK")} className={CTA_BUTTON}>Free Assessment →</button>
    </div>

    {/* 🔥 RIGHT SIDE (Option 1 – Icons List) */}
    <div className="relative z-10 w-1/2 flex flex-col justify-center gap-6 text-white pl-20">

      <div className="flex items-center gap-6 text-lg">
        <span className="text-3xl">🎓</span>
        <p>Top UK Universities</p>
      </div>

      <div className="flex items-center gap-6 text-lg">
        <span className="text-3xl">🌍</span>
        <p>Global Exposure</p>
      </div>

      <div className="flex items-center gap-6 text-lg">
        <span className="text-3xl">💼</span>
        <p>Post Study Work Visa</p>
      </div>

    </div>

  </div>
</SwiperSlide>

      {/* 🇦🇪 UAE */}
      <SwiperSlide>
        <div className="h-full flex items-center justify-center text-white"
          style={{
            backgroundImage: "url('/uae.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black/60 p-10 rounded-lg text-center">
            <h1 className="text-5xl font-bold">Work in UAE </h1>
            <p className="mt-4">
              Tax-free salary & modern lifestyle opportunities
            </p>
            <button onClick={() => setActiveCountry("UAE")} className={CTA_BUTTON}>Free Assessment →</button>
          </div>
        </div>
      </SwiperSlide>

      {/*  NEW ZEALAND (PREMIUM UNIQUE LAYOUT) */}
<SwiperSlide>
  <div className="relative h-full flex items-center overflow-hidden">

    {/* 🔥 BACKGROUND IMAGE */}
    <div 
      className="absolute inset-0 bg-cover bg-center scale-105"
      style={{
        backgroundImage: "url('/newzealand.jpg')",
      }}
    ></div>

    {/* 🔥 DARK GRADIENT OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

    {/* LEFT CONTENT */}
    <div className="relative z-10 w-1/2 px-20 text-white">
<h1 className="text-6xl font-bold leading-tight drop-shadow-lg">
  
  {/* TOP LINE */}
  <span className="flex items-center gap-3 text-white">
    Study in
    <img
      src="https://flagcdn.com/w80/nz.png"
      alt="NZ Flag"
      className="w-20 h-20 object-contain"
    />
  </span>

  {/* SECOND LINE */}
  <span className="block text-green-400 mt-2">
    New Zealand
  </span>

</h1>

      <p className="mt-6 text-lg text-gray-200 max-w-[500px]">
        High quality education, peaceful lifestyle & excellent post-study work opportunities
      </p>

    <button onClick={() => setActiveCountry("New Zealand")} className={`${CTA_BUTTON} mt-6`}>
        Free Assessment →
      </button>

    </div>

    {/* RIGHT SIDE – GLASS CARD FEATURES */}
    <div className="relative z-10 w-1/2 flex justify-center">

      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-white w-[350px]">

        <div className="flex items-center gap-4 mb-6">
          <span className="text-3xl">🎓</span>
          <p className="text-lg">Top Ranked Universities</p>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <span className="text-3xl">🌿</span>
          <p className="text-lg">Peaceful Lifestyle</p>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <span className="text-3xl">💼</span>
          <p className="text-lg">Post Study Work Visa</p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-3xl">🛂</span>
          <p className="text-lg">PR Pathways Available</p>
        </div>

      </div>

    </div>

  </div>
</SwiperSlide>

    </Swiper>
   {activeCountry && (
  <div className="fixed inset-0 bg-white z-50 flex">

    {/* LEFT SIDE */}
    <div className="w-1/3 p-16">
    <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-blue-600 text-transparent bg-clip-text">
  Choose Your Dream Destination
</h1>
      <p className="mt-6 text-gray-900 text-lg leading-relaxed">
  VJC Overseas provides expert guidance to help you choose the right visa pathway for your goals.  
  Our team ensures a smooth and transparent process from application to approval.  
  We specialize in global immigration, study, and work visa solutions tailored to your needs.  
  With personalized support and proven expertise, we increase your chances of visa success.  
  Start your journey abroad with confidence and trust VJC Overseas every step of the way.
</p>
    </div>

    {/* RIGHT SIDE CARDS */}
    <div className="w-2/3 grid grid-cols-3 gap-8 p-10">

      {/* CANADA */}
      <div className="group [perspective:1000px]">
        <div className="relative h-[200px] w-full duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

          {/* FRONT */}
          <div className="absolute inset-0 bg-gray-400 flex flex-col justify-center items-center relative">

  <img 
    src="/canada-map.png" 
    className="w-full h-[70%] object-contain scale-110"
  />

  <span className="absolute bottom-4 w-full text-center text-white font-bold text-lg tracking-wide">
    CANADA
  </span>

</div>

          {/* BACK */}
          <div className="absolute inset-0 bg-white p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto">
            {visaData.Canada.map((v: string, i: number) => (
              <p key={i}>› {v}</p>
            ))}
          </div>

        </div>
      </div>

      {/* AUSTRALIA */}
      <div className="group [perspective:1000px]">
        <div className="relative h-[200px] w-full duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

          <div className="absolute inset-0 bg-gray-400 flex items-center justify-center [backface-visibility:hidden]">
           <img 
  src="/australia-map.png" 
  className="w-full h-full object-cover scale-125"
/><span className="absolute bottom-[8%] left-[2%] text-red-600 font-bold text-xl tracking-wide drop-shadow-md">
  AUSTRALIA
</span>
          </div>

          <div className="absolute inset-0 bg-white p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            {visaData.Australia.map((v: string, i: number) => (
              <p key={i}>› {v}</p>
            ))}
          </div>

        </div>
      </div>

      {/* GERMANY */}
      <div className="group [perspective:1000px]">
        <div className="relative h-[200px] w-full duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

          <div className="absolute inset-0 bg-gray-400 flex items-center justify-center [backface-visibility:hidden]">
          <img 
  src="/germany-map.png" 
  className="w-full h-full object-cover scale-125"
/>
            <span className="absolute bottom-3 text-white font-bold">GERMANY</span>
          </div>

          <div className="absolute inset-0 bg-white p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            {visaData.Germany.map((v: string, i: number) => (
              <p key={i}>› {v}</p>
            ))}
          </div>

        </div>
      </div>

      {/* UK */}
      <div className="group [perspective:1000px]">
        <div className="relative h-[200px] w-full duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

          <div className="absolute inset-0 bg-gray-400 flex items-center justify-center [backface-visibility:hidden]">
          <img 
  src="/uk-map.png" 
  className="w-full h-full object-cover scale-125"
/>
            <span className="absolute bottom-0 text-white font-bold">UK</span>
          </div>

          <div className="absolute inset-0 bg-white p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            {visaData.UK.map((v: string, i: number) => (
              <p key={i}>› {v}</p>
            ))}
          </div>

        </div>
      </div>
      <div className="group [perspective:1000px]">
  <div className="relative h-[200px] w-full duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

    <div className="absolute inset-0 bg-gray-400 flex items-center justify-center [backface-visibility:hidden]">
      <img 
  src="/usa-map.png" 
  className="w-full h-full object-cover scale-125"
/>
     <span className="absolute bottom-[0%] left-1/2 -translate-x-1/2 text-blue-900 font-bold text-xl tracking-wide drop-shadow-md">
  USA
</span>
    </div>

    <div className="absolute inset-0 bg-white p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
      {[
        "H1B Visa",
        "F1 Student Visa",
        "B1/B2 Visit Visa",
        "Green Card",
      ].map((v, i) => (
        <p key={i}>› {v}</p>
      ))}
    </div>

  </div>
</div>
<div className="group [perspective:1000px]">
  <div className="relative h-[200px] w-full duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

    <div className="absolute inset-0 bg-gray-400 flex items-center justify-center [backface-visibility:hidden]">
      <img 
  src="/nz-map.png" 
  className="w-full h-full object-cover scale-125"
/>
      <span className="absolute bottom-3 text-white font-bold">NEW ZEALAND</span>
    </div>

    <div className="absolute inset-0 bg-white p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
      {visaData["New Zealand"].map((v: string, i: number) => (
        <p key={i}>› {v}</p>
      ))}
    </div>

  </div>
</div>


    </div>

    {/* CLOSE BUTTON */}
    <button
      onClick={() => setActiveCountry(null)}
      className="absolute top-6 right-10 text-black text-xl"
    >
      ✕
    </button>

  </div>
)}
      
  
</>
  );
}