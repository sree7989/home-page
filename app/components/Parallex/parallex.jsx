"use client";
import { useRef, useState } from "react";

export default function Parallex() {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  const reviews = [
    { name: "Rahul", text: "This experience completely changed my expectations. Everything feels premium, smooth, and thoughtfully designed. It’s not just a product — it’s something you actually enjoy using." },
    { name: "Sneha", text: "From the first interaction, I could feel the quality. The visuals, the flow, the responsiveness — everything is just perfect. It creates a strong first impression instantly." },
    { name: "Arjun", text: "I’ve used many platforms, but this one genuinely stands out. It’s fast, beautiful, and incredibly engaging. You don’t just use it — you feel it." },
    { name: "Kavya", text: "It’s rare to find something this polished. The experience is smooth and visually stunning. It builds trust immediately and keeps you hooked." },
    { name: "David", text: "The attention to detail is incredible. Everything feels intentional and well-crafted. It’s one of the best experiences I’ve had." },
    { name: "Ananya", text: "Super clean UI and very smooth interactions. It actually feels satisfying to use every single time." },
    { name: "Rohit", text: "This is what a modern product should feel like. Fast, beautiful, and intuitive. Loved every bit of it." },
    { name: "Meera", text: "The experience is seamless and addictive. I didn’t expect it to be this good honestly." },
    { name: "Vikram", text: "Everything just works perfectly. No friction, no confusion — just smooth experience." },
    { name: "Pooja", text: "Visually stunning and very easy to use. It builds trust instantly." },
    { name: "Kiran", text: "One of the most polished products I’ve seen recently. Feels premium in every interaction." },
    { name: "Aisha", text: "The flow is so natural and intuitive. You don’t even have to think while using it." },
    { name: "Nikhil", text: "Performance is top-notch. It’s fast and responsive across everything." },
    { name: "Divya", text: "Absolutely loved the experience. Clean design and smooth navigation." },
    { name: "Sanjay", text: "This sets a new standard for quality. Everything feels top-tier." },
  ];

  const scroll = (dir) => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      const newIndex =
        dir === "left"
          ? Math.max(active - 1, 0)
          : Math.min(active + 1, reviews.length - 1);

      scrollRef.current.scrollTo({
        left: newIndex * width,
        behavior: "smooth",
      });

      setActive(newIndex);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col pb-6">

      {/* 🌈 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fdfbfb] via-[#f0f4ff] to-[#e0f7fa]"></div>

      {/* 🔥 HEADING */}
      <div className="relative z-20 text-center pt-4 pb-4 px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
           Moments That Turned Into Memories
          </span>
        </h2>
        <p className="text-gray-900 mt-3 text-sm md:text-base">
          Real experiences from real people ✨
        </p>
      </div>

      {/* 🔥 Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-md p-4 rounded-full shadow-xl hover:scale-110 transition"
      >
        ←
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-md p-4 rounded-full shadow-xl hover:scale-110 transition"
      >
        →
      </button>

      {/* 💫 Scroll Container */}
      <div
        ref={scrollRef}
className="flex-1 w-full flex overflow-x-auto snap-x snap-proximity"      >
        {reviews.map((item, index) => (
          <div
            key={index}
            className="min-w-full h-full snap-center flex items-center justify-center relative"
          >
            <div className="absolute w-[300px] h-[300px] bg-purple-300/30 blur-[100px] rounded-full"></div>

            <div className="relative z-10 max-w-3xl text-center px-10 py-14 rounded-3xl bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-white/50">

              <div className="text-5xl text-gray-300 mb-4">“</div>

              <div className="flex justify-center mb-4 text-yellow-400 text-lg tracking-wide">
                ★★★★★
              </div>

              <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-relaxed">
                {item.text}
              </p>

              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 flex items-center justify-center text-white font-bold shadow-md">
                  {item.name[0]}
                </div>
                <span className="font-semibold text-lg bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
                  {item.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
}