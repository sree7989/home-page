"use client";

const services = [
  {
    title: "Study Abroad",
    desc: "Top universities & global education opportunities",
    icon: "🎓",
  },
  {
    title: "Work Abroad",
    desc: "High-paying jobs & international career growth",
    icon: "💼",
  },
  {
    title: "Visa Assistance",
    desc: "Complete documentation & visa support",
    icon: "📄",
  },
  {
    title: "Career Guidance",
    desc: "Personalized counselling for your future",
    icon: "🧭",
  },
];

export default function NewSteps() {
  return (
<section className="w-full pt-10 pb-24 bg-white px-10">
     <div className="text-center mb-20">
  <h2 className="text-5xl font-bold tracking-tight leading-tight">
    
    <span className="text-[#0A1F44]">
      Turning Your
    </span>{" "}
    
    <span className="bg-gradient-to-r from-orange-500 to-blue-700 text-transparent bg-clip-text">
      Global Dreams
    </span>{" "}
    
    <span className="text-[#0A1F44]">
      Into Reality
    </span>

  </h2>

  <p className="mt-2 text-gray-800 text-lg">
    From planning to landing — we guide you at every step
  </p>
</div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

        <div className="space-y-10">
          {services.slice(0, 2).map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>

        <div className="flex justify-center">
          <img
            src="/services-nature.png"
            className="w-[800px] h-[800x] object-contain drop-shadow-2xl"
          />
        </div>

        <div className="space-y-10">
          {services.slice(2, 4).map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>

      </div>

    </section>
  );
}

/* 🔥 REUSABLE CARD */
function Card({ item }) {
  return (
    <div
      className="relative p-8 rounded-2xl 
      bg-gradient-to-br from-orange-50 to-blue-50 
      border border-orange-300 
      shadow-lg 
      transition-all duration-500 
      hover:-translate-y-2 overflow-hidden"
    >

      {/* ICON */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full 
        bg-orange-200 text-2xl mb-6 
        shadow-sm">
        {item.icon}
      </div>

      {/* TITLE */}
      <h3 className="text-2xl font-bold text-[#0A1F44] tracking-tight">
        {item.title}
      </h3>

      {/* DESC */}
      <p className="text-gray-600 mt-3 text-sm leading-relaxed">
        {item.desc}
      </p>

      {/* PERMANENT BG EFFECT */}
      <div className="absolute inset-0 
        bg-gradient-to-br from-orange-50 to-blue-50 -z-10"></div>

      {/* PERMANENT BOTTOM LINE */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] 
        bg-gradient-to-r from-orange-400 to-blue-500"></div>

    </div>
  );
}