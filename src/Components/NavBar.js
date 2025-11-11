// NavBar.jsx
import React, { useState } from "react";
import {
  FaChevronDown,
  FaSearch,
  FaThLarge,
  FaArrowRight,
} from "react-icons/fa";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import clsx from "clsx";

const navLinks = [
  { label: "Home" },
  { label: "Services" },
  { label: "Pages" },
  { label: "Portfolio" },
  { label: "Blog" },
  { label: "Contact" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-[#f8f9fa]">
      <nav className=" mx-auto flex items-center justify-between px-3 sm:px-8 py-2 relative h-[70px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl text-[#1d69f4]">
            Immigration Options
          </span>
          <span className="font-serif text-2xl text-[#232839] tracking-tight">
            4U
          </span>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-1 sm:gap-4">
          {/* Get a Quote */}
          <button
            className="md:ml-2 flex items-center md:gap-2 bg-[#1d69f4] text-white rounded-full py-1 px-2 md:py-2 md:px-4 md:pr-5 font-semibold shadow-lg hover:bg-[#255fd8] transition"
            onClick={() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            <span className="flex rounded-full w-8 h-8 bg-white/20 items-center justify-center md:mr-1">
              <FaArrowRight className="text-white text-lg" />
            </span>
            
            <span className="hidden  md:inline">Get a quote</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
