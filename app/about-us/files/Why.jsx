"use client";
import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="bg-[#f5f5f5] py-10 lg:py-16">

      {/* ===== OUR MISSION ===== */}
      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 items-center gap-6">

        {/* LEFT CONTENT */}
       <div className="pl-6 lg:pl-12">
 <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 flex items-center mb-4 relative">

  {/* Big circle behind */}
  <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-orange-500 z-0" />

  {/* O letter on top of circle */}
  <span className="relative z-10 text-white font-bold pl-2">O</span>

  {/* ur Mission */}
  <span className="relative z-10">ur Mission</span>

</h2>

  <p className="text-gray-700 leading-relaxed text-xl">
    At Glocal Opportunities, our mission is to make studying, working, and settling abroad simple and stress-free for our clients. 
    We guide people with care, fill every gap in their journey, and turn big dreams into real opportunities. 
    We want to <span className="font-semibold text-gray-900">become the giant of visa and immigration</span> 
    where lives change, futures begin, and going global feels effortless. 
    For us, your vision is our mission!
  </p>
</div>
<div className="w-full h-[500px] flex justify-end items-center">
  <img
    src="/mission1.png"
    alt="Mission"
    className="h-[580px] w-auto object-contain mr-12  translate-y-[40px]"
  />
</div>
      </div>

      {/* ===== OUR VISION ===== */}
      <div className="max-w-7xl mx-auto px-5 mt-16 grid lg:grid-cols-2 items-center gap-6">

        {/* LEFT IMAGE */}
        <div className="w-full h-[500px] flex items-center">

  <Image
    src="/vision.jpg"
    alt="Vision"
    width={500}
    height={500}
    className="h-[580px] w-auto object-contain"
    priority
  />

</div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 flex items-center mb-4 relative">

  {/* Big circle behind */}
  <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-orange-500 z-0" />

  {/* O letter on top of circle */}
  <span className="relative z-10 text-white font-bold pl-2">O</span>

  {/* ur Mission */}
  <span className="relative z-10">ur Vision</span>

</h2>
<p className="text-gray-700 leading-relaxed text-xl">
  We want to be the trusted partner who makes going abroad a truly life-changing decision. 
  By offering top-notch services, unique destinations, and pathways many haven't even heard of, 
  we aim to open doors to every dream. With Glocal Opportunities, your journey becomes easier, 
  your choices become wider, and every step takes you closer to a brighter future. 
  We strive to empower individuals with the right guidance and support to confidently achieve their global ambitions.
</p>
        </div>

      </div>

    </section>
  );
}