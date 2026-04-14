"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", path: "/" },
    { name: "Study Abroad", path: "/study-abroad" },
    { name: "Work Abroad", path: "/work-abroad" },
    { name: "PR Visas", path: "/pr-visas" },
    { name: "Resume Marketing", path: "/resume-marketing" },
    { name: "Our Services", path: "/services" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 py-2">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
        >
          <Image
            src="/logo-1.webp"
            alt="logo"
            width={40}
            height={40}
            className="object-contain w-[24px] sm:w-[30px] md:w-[40px]"
          />

          <Image
            src="/logo-2.webp"
            alt="logo"
            width={100}
            height={40}
            className="object-contain w-[60px] sm:w-[80px] md:w-[110px]"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-gray-700">
          {menu.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`relative text-[14px] lg:text-[15px] transition ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "hover:text-orange-500"
                }`}
              >
                {item.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 shrink-0">

          {/* CALL BUTTON */}
          <a
            href="tel:+919160449000"
            className="flex items-center justify-center 
            w-9 h-9 sm:w-auto sm:h-auto
            sm:px-3 md:px-5 sm:py-2
            rounded-full text-white
            bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500
            shadow-md transition duration-300 flex-shrink-0"
          >
            <FaPhoneAlt className="text-[12px] sm:text-sm" />

            <span className="hidden sm:inline md:hidden ml-1 text-xs">
              Call
            </span>
            <span className="hidden md:inline ml-1 text-sm">
              +91 91604 49000
            </span>
          </a>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-lg sm:text-xl ml-2 flex-shrink-0"
          >
            {open ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white border-t transition-all duration-300 ${
          open ? "max-h-[500px] py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-5">
          {menu.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`text-[15px] font-medium ${
                  isActive ? "text-orange-500" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

    </header>
  );
}