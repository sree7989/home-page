"use client";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const menu = [
    { name: "Home", path: "/" },
    { name: "Study Abroad", path: "/study-abroad" },
    { name: "Work Abroad", path: "/work-abroad" },
    { name: "PR Visas", path: "/pr-visas" },
    { name: "Our Services", path: "/services" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* LEFT - LOGO */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-1.webp"
            alt="logo"
            width={55}
            height={55}
            className="object-contain"
          />
          <Image
            src="/logo-2.webp"
            alt="logo"
            width={130}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* CENTER - MENU */}
        <nav className="hidden md:flex items-center space-x-10 font-semibold text-[15px] text-gray-700">

          {menu.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
             className={`relative group transition duration-300 ${
  isActive
    ? "text-orange-500 font-extrabold text-[17px] tracking-wide"
    : "hover:text-orange-500 font-medium text-[15px]"
}`}
              >
                {item.name}

                {/* 🔥 Hover + Active underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300 
                  ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}

        </nav>

        {/* RIGHT - CALL BUTTON */}
        <div className="flex items-center">
          <a
            href="tel:+919160449000"
            className="flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold
            bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500
            shadow-lg hover:shadow-2xl hover:scale-110 transition duration-300"
          >
            <FaPhoneAlt className="text-sm" />
            +91 91604 49000
          </a>
        </div>

      </div>
    </header>
  );
}