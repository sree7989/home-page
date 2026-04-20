"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is Global Opportunities?",
    answer:
      "Global Opportunities is a leading visa and immigration consultancy helping individuals study, work, and settle abroad with expert guidance and end-to-end support.",
  },
  {
    question: "How do I know if I qualify for immigration?",
    answer:
      "Our experts assess your profile based on age, education, work experience, and language skills to determine the best immigration pathway for you.",
  },
  {
    question: "Can you help with job search abroad?",
    answer:
      "Yes! We assist with resume marketing, job search strategies, and connecting you with international employers in your field.",
  },
  {
    question: "Is hiring a licensed immigration consultant necessary?",
    answer:
      "While not mandatory, a licensed consultant significantly improves your chances of success by ensuring your application is complete, accurate, and submitted on time.",
  },
  {
    question: "Which countries are best for Indians to study, work, or migrate?",
    answer:
      "Canada, Australia, the UK, Germany, and New Zealand are among the most popular destinations for Indians due to their welcoming immigration policies and quality of life.",
  },
  {
    question: "How long does the visa process take?",
    answer:
      "Processing times vary by country and visa type — typically ranging from 4 weeks to 6 months. Our team keeps you updated at every stage.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions{" "}
            <span className="text-gray-800 font-normal text-2xl md:text-3xl">
              (Common Immigration Questions Answered)
            </span>
          </h2>
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Left — Image */}
          <div className="w-full lg:w-[42%] shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/faq-lady.jpg"
              alt="FAQ"
              className="w-full h-[480px] object-cover rounded-xl"
            />
          </div>

          {/* Right — Accordion */}
          <div className="flex-1 flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                >
<span className="text-gray-900 font-medium text-xl pr-4">                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 transition-transform duration-300"
                    style={{
                      transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>

                {/* Answer — smooth expand */}
                <div
                  style={{
                    maxHeight: openIndex === i ? "300px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
<p className="px-6 pb-5 text-gray-600 text-lg leading-relaxed">                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}