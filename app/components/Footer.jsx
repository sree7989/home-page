'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] pt-12 pb-6">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 border-b border-gray-700 pb-10">

          {/* ABOUT */}
          <div>
            <h3 className="text-orange-500 font-semibold text-2xl mb-4">About</h3>
          <ul className="space-y-3 text-[16px] text-white font-medium">
              <li><Link href="/services" className="hover:text-orange-400 transition">Services</Link></li>
              <li><Link href="/" className="hover:text-orange-400 transition">Our CEO Message</Link></li>
              <li><Link href="/" className="hover:text-orange-400 transition">Our Network</Link></li>
              <li><Link href="/" className="hover:text-orange-400 transition">Careers</Link></li>
            </ul>
          </div>

          {/* BLOGS */}
          <div>
            <h3 className="text-orange-500 font-semibold text-2xl mb-4">Blogs</h3>
           <ul className="space-y-3 text-[16px] text-white font-medium">
              <li><Link href="/migrate/canada" className="hover:text-orange-400 transition">Canada Immigration</Link></li>
              <li><Link href="/migrate/australia" className="hover:text-orange-400 transition">Australia Immigration</Link></li>
              <li><Link href="/migrate/united-states" className="hover:text-orange-400 transition">USA Immigration</Link></li>
              <li><Link href="/migrate/germany" className="hover:text-orange-400 transition">Germany Immigration</Link></li>
              <li><Link href="/migrate/germany/work-visa" className="hover:text-orange-400 transition">Germany Jobs</Link></li>
            </ul>
          </div>

          {/* SETTLE */}
          <div>
            <h3 className="text-orange-500 font-semibold text-2xl mb-4">Settle Abroad</h3>
           <ul className="space-y-3 text-[16px] text-white font-medium">
              <li><Link href="/migrate-canada-permanent-residency-visa" className="hover:text-orange-400 transition">Settle in Canada</Link></li>
              <li><Link href="/migrate-australia-permanent-residency-visa" className="hover:text-orange-400 transition"> Settle in Australia</Link></li>
              <li><Link href="/germany-opportunity-card" className="hover:text-orange-400 transition"> Settle in Germany</Link></li>
              <li><Link href="/pr-visas/ukpr" className="hover:text-orange-400 transition">Settele in UK</Link></li>
              <li><Link href="/pr-visas/usagreencard" className="hover:text-orange-400 transition">Settle in USA</Link></li>
            </ul>
          </div>

          {/* LOCATIONS */}
          <div>
            <h3 className="text-orange-500 font-semibold text-2xl mb-4">Our Locations</h3>
           <ul className="space-y-3 text-[16px] text-white font-medium">
              <li><Link href="/hyderabad" className="hover:text-orange-400 transition">Hyderabad</Link></li>
              <li><Link href="/bangalore" className="hover:text-orange-400 transition">Bangalore</Link></li>
              <li><Link href="/usa/texas" className="hover:text-orange-400 transition">USA - Texas</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-orange-500 font-semibold text-2xl mb-4">Contact</h3>
            <p className="text-[15px] text-white">info@vjcoverseas.com</p>
            <p className="text-[15px] text-white mt-1">+91 9160449000</p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-4 text-2xl text-white">
              <FaFacebook className="hover:text-orange-400 cursor-pointer transition" />
              <FaInstagram className="hover:text-orange-400 cursor-pointer transition" />
              <FaLinkedin className="hover:text-orange-400 cursor-pointer transition" />
              <FaYoutube className="hover:text-orange-400 cursor-pointer transition" />
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-400">

          <p>© 2026 VJC Overseas</p>

          <div className="flex gap-4 mt-3 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition">
              Terms & Conditions
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}