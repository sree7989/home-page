'use client';

import Image from 'next/image';
import Form from './Form';

export default function ContactSection() {
  return (
    <div className="w-full bg-white">
      <div className="text-center py-2 px-4">
        
        {/* Form + Image Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4">
          
          {/* Left: Form */}
          <div className=" w-full max-w-xl">
            <Form />
          </div>

          {/* Right: Only Image */}
<div className="flex justify-center md:justify-start items-center w-full -ml-6 md:-ml-6 relative">
  <div className="relative w-full h-[750px]">
  <Image
    src="/girl-2.png"
    alt="Contact"
    fill
   className="object-cover"
    priority
  />
</div>

</div>

        </div>
      </div>
    </div>
  );
}