"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSlider() {
  const testimonials = [
    [
      {
        name: "Jenny Wilson",
        location: "New York, America",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "I absolutely love this salon. Warm welcome and perfect styling made me feel relaxed and happy throughout.",
        rating: 5,
      },
      {
        name: "Esther Howard",
        location: "New York, America",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        text: "Everything was elegant and smooth. Staff listened carefully and created exactly the style I wanted.",
        rating: 5,
      },
      {
        name: "Wade Warren",
        location: "New York, America",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Beautiful atmosphere and professional service. Final look exceeded my expectations completely today.",
        rating: 5,
      },
    ],
    [
      {
        name: "Rahul Sharma",
        location: "Mumbai, India",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        text: "Amazing styling quality and friendly service. Highly recommend this wonderful place for everyone.",
        rating: 5,
      },
      {
        name: "Sneha Reddy",
        location: "Hyderabad, India",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        text: "The team made me feel special. Everything looked elegant, polished and absolutely perfect from start to finish.",
        rating: 5,
      },
      {
        name: "Arjun Patel",
        location: "Delhi, India",
        image: "https://randomuser.me/api/portraits/men/18.jpg",
        text: "Talented staff and lovely hospitality. Loved every relaxing minute spent inside here.",
        rating: 5,
      },
    ],
    [
      {
        name: "Kavya",
        location: "Bangalore, India",
        image: "https://randomuser.me/api/portraits/women/55.jpg",
        text: "Luxurious experience with beautiful detailing. Every moment felt smooth and satisfying.",
        rating: 5,
      },
      {
        name: "David",
        location: "California, USA",
        image: "https://randomuser.me/api/portraits/men/67.jpg",
        text: "Fantastic styling and premium service. Definitely coming back again very soon for another wonderful experience.",
        rating: 5,
      },
      {
        name: "Meera",
        location: "Chennai, India",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        text: "Professional care and lovely ambience. Truly memorable and calming experience.",
        rating: 5,
      },
    ],
    [
      {
        name: "Nikhil",
        location: "Pune, India",
        image: "https://randomuser.me/api/portraits/men/70.jpg",
        text: "Excellent quality service with kind staff. Completely satisfied with results.",
        rating: 5,
      },
      {
        name: "Divya",
        location: "Kerala, India",
        image: "https://randomuser.me/api/portraits/women/77.jpg",
        text: "Beautiful ambience and peaceful styling session. Relaxing from beginning to end with complete comfort and care.",
        rating: 5,
      },
      {
        name: "Sanjay",
        location: "Goa, India",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        text: "Outstanding styling skills and professional support. Great experience overall.",
        rating: 5,
      },
    ],
    [
      {
        name: "Aisha",
        location: "Dubai, UAE",
        image: "https://randomuser.me/api/portraits/women/30.jpg",
        text: "Absolutely stunning results. Felt confident, beautiful and extremely happy throughout the entire experience.",
        rating: 5,
      },
      {
        name: "Rohit",
        location: "Kolkata, India",
        image: "https://randomuser.me/api/portraits/men/50.jpg",
        text: "Perfect styling with premium quality service. Worth every single visit with great satisfaction and comfort.",
        rating: 5,
      },
      {
        name: "Pooja",
        location: "Jaipur, India",
        image: "https://randomuser.me/api/portraits/women/10.jpg",
        text: "Calm atmosphere and talented staff. Wonderful experience from start to finish with great comfort.",
        rating: 5,
      },
    ],
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(autoSlide);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full bg-[#f7f7f7] py-12 px-10 overflow-hidden">
      <div className="max-w-[1800px] mx-auto relative px-16">
        <h2 className="text-center text-4xl md:text-5xl font-serif text-[#1f2533] mb-16">
          Journeys of Happy Clients
        </h2>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center"
        >
          <ChevronRight />
        </button>

        {/* Cards */}
        <div className="flex justify-center items-center gap-6">
          {testimonials[currentSlide].map((item, index) => {
            const isCenter = index === 1;

            return (
              <div
                key={index}
                className={`relative rounded-[24px] overflow-hidden
                ${isCenter ? "w-[390px] h-[370px]" : "w-[360px] h-[320px]"}`}
              >
                {/* 🔵 (kept but reduced visual impact naturally by white card) */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-white to-blue-300 blur-2xl opacity-60"></div>

              <div className={`relative bg-white 
border border-blue-400 
${isCenter ? "scale-105 shadow-[0_12px_40px_rgba(59,130,246,0.12)]" : ""}
p-8 h-full flex flex-col justify-between 
shadow-[0_8px_30px_rgba(0,0,0,0.05)]`}>

  {/* 🔵 Corner gradient (background layer) */}
  <div className="absolute top-0 right-0 w-40 h-40 
  bg-[radial-gradient(circle,_rgba(147,197,253,0.4),_transparent_70%)] 
  pointer-events-none"></div>

  {/* ✅ Content */}
  <div className="relative z-10"></div>
                  <div>
                    <Quote className="text-purple-500 mb-4" />

                    <div className="flex gap-2 mb-3">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>

                    <p
                      className={`text-[#2c3553] font-serif ${
                        isCenter ? "text-[22px]" : "text-[18px]"
                      }`}
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.text}
                    </p>
                  </div>

                  <div>
                    <div className="border-t mb-4"></div>

                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h4 className="font-serif text-lg">
                          {item.name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full ${
                currentSlide === index
                  ? "bg-purple-500"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}