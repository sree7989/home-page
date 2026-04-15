"use client";
 
import { useEffect, useState, useRef } from "react";
 
const slides = [
  {
    title: "India's Best Overseas Education Consultancy Of The Year",
    image: "/images/award1.png",
  },
  {
    title: "Global Icon Award Winner",
    image: "/images/award2.png",
  },
  {
    title:
      "India's Most Trusted Immigration And Overseas Education Consultancy Of The Year",
    image: "/images/award3.png",
  },
];
 
export default function HeroExtra() {
  const [active, setActive] = useState(0);

  const [clients, setClients] = useState(0);
  const [visa, setVisa] = useState(0);
  const [reach, setReach] = useState(0);

  const sectionRef = useRef<HTMLElement | null>(null);
  const hasAnimated = useRef(false);

  // 🔥 FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    age: "",
    experience: "",
    qualification: "",
    resume: null as any,
  });

  // 🔥 SUBMIT FUNCTION
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("country", formData.country);
    data.append("selectedJob", "Free Assessment");
    data.append("message", "New lead from form");
    data.append("landingPage", "homepage");

    if (formData.resume) {
      data.append("resume", formData.resume);
    }

    const res = await fetch("/api/send-email", {
      method: "POST",
      body: data,
    });

    const result = await res.json();
    alert("Form submitted ✅");
    console.log(result);
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // COUNTER ANIMATION
  const animateValue = (setter: any, end: number, speed: number) => {
    let start = 0;
    const step = Math.ceil(end / 100);

    const counter = setInterval(() => {
      start += step;

      if (start >= end) {
        setter(end);
        clearInterval(counter);
      } else {
        setter(start);
      }
    }, speed);
  };

  const startCounters = () => {
    animateValue(setClients, 8000, 50);
    animateValue(setVisa, 500, 20);
    animateValue(setReach, 10000, 60);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startCounters();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact-form"
      ref={sectionRef}
      className="bg-white pt-0 pb-6 md:pt-0 md:pb-4 mt-0 md:-mt-32"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-8 items-start">

        {/* LEFT SIDE SLIDER */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${active * 100}%)`,
            }}
          >
            {slides.map((item, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
              >
              <h2 className="text-[24px] sm:text-[30px] md:text-[42px] lg:text-[54px] font-extrabold text-[#14213d] leading-[1.1] md:leading-[1.08] tracking-[-0.02em] mb-2 md:mb-1 text-center lg:text-left">
                  India's Most Trusted Brand
                </h2>
 
                {/* Image */}
               <div className="flex justify-center -mb-2 md:-mb-6 mt-2 md:mt-0">
                  <img
                    src={item.image}
                    alt="Award"
                   className="block w-[240px] sm:w-[320px] md:w-[400px] lg:w-[460px] h-auto object-contain"
                  />
                </div>
 
                {/* Text */}
             <div className="mb-0 text-center px-4">
<p className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] text-[#222] font-semibold leading-[1.6] md:leading-[1.5] max-w-[750px] mx-auto text-center lg:text-left">                    {item.title}
                  </p>
                </div>
 
                {/* Stats */}
              <div className="mt-6 flex flex-wrap justify-center gap-6 md:gap-10">
                  <div>
                    <h4 className="text-[32px] md:text-[38px] font-extrabold text-[#1d4ed8]">
                      {clients.toLocaleString()}+
                    </h4>
                    <p className="text-[13px] sm:text-[15px] md:text-[18px] lg:text-[19px] text-[#555] mt-2 font-medium">
                      Trusted Clients
                    </p>
                  </div>
 
                  <div>
                    <h4 className="text-[32px] md:text-[38px] font-extrabold text-[#f97316]">
                      {visa.toLocaleString()}+
                    </h4>
                    <p className="text-[17px] md:text-[19px] text-[#555] mt-2 font-medium">
                      Visa Success
                    </p>
                  </div>
 
                  <div>
                    <h4 className="text-[32px] md:text-[38px] font-extrabold text-[#1d4ed8]">
                      {reach.toLocaleString()}+
                    </h4>
                    <p className="text-[17px] md:text-[19px] text-[#555] mt-2 font-medium">
                      Global Reach
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
 
        {/* RIGHT SIDE - Form */}
        <form
  onSubmit={handleSubmit}
  className="bg-white relative z-10 pointer-events-auto rounded-[8px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-4 md:p-6"
>
         
  {/* Heading */}
  <h3 className="text-[22px] md:text-[26px] font-bold mb-3 text-center
  bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#f97316]
  bg-clip-text text-transparent
  drop-shadow-[0_4px_12px_rgba(249,115,22,0.5)]">
    Sign Up & Get Free Assessment
  </h3>

  {/* Name */}
  <input
    type="text"
    placeholder="Your Name"
    className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-md outline-none"
    onChange={(e) =>
      setFormData({ ...formData, name: e.target.value })
    }
  />

  {/* Email */}
  <input
    type="email"
    placeholder="Your Email"
    className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-md outline-none"
    onChange={(e) =>
      setFormData({ ...formData, email: e.target.value })
    }
  />

  {/* Phone */}
  <input
    type="tel"
    placeholder="+91 Phone Number"
    className="w-full mb-3 px-4 py-3 border border-gray-300 rounded-md outline-none"
    onChange={(e) =>
      setFormData({ ...formData, phone: e.target.value })
    }
  />

  {/* Row 1 */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
    <input
      type="text"
      placeholder="Country"
      className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none"
      onChange={(e) =>
        setFormData({ ...formData, country: e.target.value })
      }
    />
    <input
      type="number"
      placeholder="Your Age"
      className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none"
      onChange={(e) =>
        setFormData({ ...formData, age: e.target.value })
      }
    />
  </div>

  {/* Row 2 */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
    <select
      className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none"
      onChange={(e) =>
        setFormData({ ...formData, experience: e.target.value })
      }
    >
      <option>Select Experience</option>
      <option>0-1 Years</option>
      <option>1-3 Years</option>
      <option>3+ Years</option>
    </select>

    <select
      className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none"
      onChange={(e) =>
        setFormData({ ...formData, qualification: e.target.value })
      }
    >
      <option>Select Qualification</option>
      <option>Degree</option>
      <option>Masters</option>
      <option>PhD</option>
    </select>
  </div>

  {/* Upload Resume */}
  <div className="mb-3">
    <label className="block text-sm mb-2 text-gray-600">
      Upload Resume
    </label>
    <input
      type="file"
      className="w-full border border-gray-300 rounded-md px-3 py-2"
      onChange={(e: any) =>
        setFormData({ ...formData, resume: e.target.files[0] })
      }
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-[#1d4ed8] text-white py-2 md:py-3 rounded-md font-semibold hover:bg-[#f97316] transition-all duration-300"
  >
    Claim Your Free Assessment
  </button>

</form>
      </div>
    </section>
  );
}
 