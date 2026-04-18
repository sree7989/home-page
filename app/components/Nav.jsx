"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const menu = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" }, // ✅ ADDED (ONLY CHANGE)
    { name: "Study Abroad", path: "/study-abroad" },
    { name: "Work Abroad", path: "/work-abroad" },
    { name: "PR Visas", path: "/pr-visas" },
    { name: "Resume Marketing", path: "/resume-marketing" },
    { name: "Our Services", path: "/services" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      <style>{`
        #nav-toggle { display: none; }

        .burger-icon {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          cursor: pointer;
          margin-left: 6px;
          flex-shrink: 0;
        }

        .burger-icon span {
          display: block;
          height: 2px;
          width: 100%;
          background-color: #4B5563;
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        @media (max-width: 767px) {
          .burger-icon { display: flex; }
        }

        #nav-toggle:checked ~ header .burger-icon span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        #nav-toggle:checked ~ header .burger-icon span:nth-child(2) {
          opacity: 0;
          width: 0;
        }
        #nav-toggle:checked ~ header .burger-icon span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        .mobile-menu {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, opacity 0.35s ease;
        }

        #nav-toggle:checked ~ header .mobile-menu {
          max-height: 500px;
          opacity: 1;
        }
      `}</style>

      <input type="checkbox" id="nav-toggle" className="hidden" />

      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">

        <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none z-10">
          <Image src="/16years-new.webp" alt="16 years" width={140} height={140} className="object-contain" />
        </div>

        <div className="w-full flex items-center justify-between px-3 sm:px-5 md:px-6 py-2 relative z-10">

          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/logo-1.webp" alt="logo" width={42} height={42} className="object-contain w-[26px] sm:w-[34px] md:w-[42px]" />
            <Image src="/logo-2.webp" alt="logo" width={110} height={42} className="object-contain w-[70px] sm:w-[90px] md:w-[115px]" />
          </Link>

          <nav className="hidden md:flex items-center gap-5 lg:gap-8 text-gray-700">
            {menu.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link key={item.name} href={item.path} className={`relative text-[13px] lg:text-[15px] transition-colors ${isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"}`}>
                  {item.name}
                  <span className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300 ${isActive ? "w-full" : "w-0"}`} />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 shrink-0 md:pr-32 lg:pr-36">

            <div className="md:hidden absolute left-[55%] -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none z-20">
              <Image src="/16years-new.webp" alt="16 years excellence" width={85} height={85} className="object-contain" />
            </div>

            <a href="tel:+919160449000" className="hidden md:flex items-center justify-center gap-1.5 h-9 px-5 py-2 rounded-full text-white text-sm bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500 shadow-sm transition-opacity hover:opacity-90 shrink-0">
              <FaPhoneAlt className="text-[13px] shrink-0" />
              <span className="text-sm font-medium whitespace-nowrap">+91 91604 49000</span>
            </a>

            <label htmlFor="nav-toggle" className="burger-icon" aria-label="Toggle menu">
              <span />
              <span />
              <span />
            </label>

          </div>
        </div>

        <div className="mobile-menu md:hidden border-t border-gray-100 bg-white">
          <nav className="flex flex-col items-center gap-4 py-5 px-4">
            {menu.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link key={item.name} href={item.path} className={`text-[15px] font-medium transition-colors ${isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-500"}`}>
                  {item.name}
                </Link>
              );
            })}

            <a href="tel:+919160449000" className="mt-1 flex items-center gap-2 text-[14px] font-medium text-orange-500">
              <FaPhoneAlt className="text-xs" />
              +91 91604 49000
            </a>
          </nav>
        </div>

      </header>
    </>
  );
}