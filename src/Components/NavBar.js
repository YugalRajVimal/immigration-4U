// NavBar.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  FaChevronDown,
  FaArrowRight,
} from "react-icons/fa";
import clsx from "clsx";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" }, // Update this path as needed
  { label: "Contact", to: "/contact" }, // Update this path as needed
];

// These should match exactly with WelcomePage.js COUNTRY_OPTIONS
const COUNTRY_OPTIONS = [
  {
    key: "UK",
    label: "United Kingdom",
  },
  {
    key: "DUBAI",
    label: "Dubai",
  },
  {
    key: "HUNGARY",
    label: "Hungary",
  },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [countryMenuOpen, setCountryMenuOpen] = useState(false);
  const [preferredCountry, setPreferredCountry] = useState("");
  const countryMenuRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  // Get preferred country from localStorage on mount
  useEffect(() => {
    const item = localStorage.getItem("preferred_country") || "";
    setPreferredCountry(item);
  }, []);

  // Handle click away for country menu
  useEffect(() => {
    if (!countryMenuOpen) return;
    function handleClick(e) {
      if (
        countryMenuRef.current &&
        !countryMenuRef.current.contains(e.target)
      ) {
        setCountryMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [countryMenuOpen]);

  // Update localStorage and reload page when changing preferred country
  function handleCountrySelect(key) {
    localStorage.setItem("preferred_country", key);
    setPreferredCountry(key);
    setCountryMenuOpen(false);
    // Optionally navigate to home or reload
    // If you're on /, WelcomePage auto-redirects if preferred_country is set, so reload is fine
    // If on other pages, you may want to reload or prompt user.
    // Here, just reload the window (softly, to pick up UI changes)
    window.location.reload();
  }

  return (
    <header className="w-full shadow-sm bg-[#f8f9fa] py-2 z-50 relative">
      <nav className="mx-auto flex items-center justify-between px-3 sm:px-8 py-2 relative h-[70px]">
        {/* Logo */}
        <div className="flex flex-1 items-center justify-start gap-2">
          {/* Logo image */}
          <img
            src="/logo.png"
            alt="Immigration Options 4U Logo"
            className="w-16 h-16 object-contain rounded-full shadow-sm bg-white"
            style={{ filter: "drop-shadow(0 1px 4px #e0edfd)" }}
          />
          <span className="font-bold text-2xl text-[#1d69f4]">
            Immigration Options
          </span>
          <span className="font-serif text-2xl text-[#232839] tracking-tight">
            4U
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex md:flex-1 items-center justify-center gap-7">
          {navLinks.map((link) =>
            link.to.startsWith("/") ? (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={clsx(
                    "font-medium text-base hover:text-[#1d69f4] transition",
                    location.pathname === link.to
                      ? "text-[#1d69f4] font-bold"
                      : "text-[#232839]"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.to}
                  className="font-medium text-base hover:text-[#1d69f4] transition text-[#232839]"
                >
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Right Side Actions */}
        <div className="flex flex-1 items-center justify-end gap-1 sm:gap-4 relative">
          {/* Preferred Country Switcher */}
          <div className="relative" ref={countryMenuRef}>
            <button
              className={clsx(
                "flex items-center gap-1 px-3 py-2 rounded-md border text-[#23386a] bg-white border-[#dbeafd] hover:bg-[#f1f6fb] font-medium shadow-sm transition",
                countryMenuOpen && "ring-2 ring-[#1d69f4]/20"
              )}
              onClick={() => setCountryMenuOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={countryMenuOpen}
              aria-label="Select preferred country"
            >
              <span className="font-bold text-sm text-[#1d69f4]">
                {COUNTRY_OPTIONS.find(
                  (opt) => opt.key === preferredCountry
                )?.label || "Select Country"}
              </span>
              <FaChevronDown className="ml-1 text-xs text-[#568edb]" />
            </button>
            {countryMenuOpen && (
              <ul
                className="
                absolute right-0 mt-2 min-w-[180px] rounded-md bg-white border border-[#cae0fa] shadow-xl z-50
                py-2
                "
                role="listbox"
              >
                {COUNTRY_OPTIONS.map((opt) => (
                  <li
                    key={opt.key}
                    className={clsx(
                      "px-4 py-2 hover:bg-[#eaf3fd] cursor-pointer text-sm font-medium",
                      preferredCountry === opt.key ? "bg-[#e8f0fc] text-[#089166] font-bold" : ""
                    )}
                    role="option"
                    aria-selected={preferredCountry === opt.key}
                    onClick={() => handleCountrySelect(opt.key)}
                  >
                    {opt.label}
                    {preferredCountry === opt.key && (
                      <span className="ml-2 text-[#089166] font-bold">✓</span>
                    )}
                  </li>
                ))}
                <hr className="my-1 border-[#e9eff8]" />
                <li
                  className="px-4 py-2 text-xs text-[#ab2432] hover:bg-[#fee7ea] cursor-pointer"
                  role="option"
                  aria-selected={preferredCountry === ""}
                  onClick={() => handleCountrySelect("")}
                >
                  Clear Selection
                </li>
              </ul>
            )}
          </div>
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

            <span className="hidden md:inline">Get a quote</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
