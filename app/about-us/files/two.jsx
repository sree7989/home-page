"use client";
import Image from "next/image";

export default function WhyChooseVJC() {
  return (
    <section className="w-full py-7 lg:py-11 bg-gray-100">
      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-4 items-center">

        {/* LEFT IMAGE */}
   <div className="w-[90%] h-[600px] mx-auto rounded-2xl overflow-hidden">
  <Image
    src="/why-vjc.jpg"
    alt="Why Choose VJC Overseas"
    width={1200}
    height={800}
    className="w-full h-full object-cover"
  />
</div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">

          {/* MAIN HEADING */}
         <h2 className="text-4xl lg:text-5xl font-extrabold">
  <span className="text-gray-900">Why Choose</span>{" "}
  <span className="text-orange-500">VJC Overseas</span>
</h2>

          {/* CONTENT BLOCKS */}

          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Expertise:
            </h3>
            <p className="text-gray-700">
              Our team consists of experienced immigration consultants and advisors who stay updated with the latest global policies, ensuring you receive accurate, timely, and trustworthy guidance at every step.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Personalized Service:
            </h3>
            <p className="text-gray-700">
              We understand that every individual has unique goals. Our approach is tailored to your specific needs, providing customized solutions that align with your career and education aspirations abroad.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Transparency:
            </h3>
            <p className="text-gray-700">
              We maintain complete transparency throughout the process, offering clear communication about requirements, timelines, and costs, so you always stay informed and confident.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Efficiency:
            </h3>
            <p className="text-gray-700">
              Our streamlined processes and expert handling minimize delays, ensuring a smooth and hassle-free experience from application to final approval.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Proven Success:
            </h3>
            <p className="text-gray-700">
              With a strong track record of successful visa approvals and satisfied clients, we have built a reputation for reliability and results in the overseas education and immigration industry.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}