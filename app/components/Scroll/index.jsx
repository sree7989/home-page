"use client";

export default function GlobalOpportunities() {
  return (
    <section className="w-full bg-white py-12"> {/* FIXED */}

      {/* 🔥 TOP CONTENT */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-6 items-start"> {/* FIXED */}

          {/* LEFT HEADING */}
          <div>
           <h2 className="text-5xl md:text-6xl font-medium leading-snug">
  <span className="text-purple-900">Global</span> <br />
  <span className="text-orange-500 font-semibold">Opportunities</span>
</h2>
          </div>

          {/* RIGHT CONTENT */}
          <div>
         <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed max-w-xl md:-ml-12">
  Exploring opportunities abroad opens doors to new cultures, global careers, 
  and life-changing experiences. It helps you build international exposure, 
  improve communication, and gain skills that make you stand out. 

  Whether you plan to study, work, or settle overseas, the right guidance 
  ensures a smooth and confident journey every step of the way.
</p>
          </div>

        </div>
      </div>

      {/* 🔥 BOTTOM IMAGE */}
      <div className="w-full mt-10"> {/* FIXED */}
        <img
          src="/images/global-people.jpg"
          alt="Global People"
          className="w-full object-cover grayscale"
        />
      </div>

    </section>
  );
}