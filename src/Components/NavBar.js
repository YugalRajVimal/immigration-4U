// // NavBar.jsx
// import React, { useState, useEffect, useRef } from "react";
// import {
//   FaChevronDown,
//   FaArrowRight,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import clsx from "clsx";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// // Option nav links - fully specified for country menu
// const countryDropdownList = [
//   { key: "austria", label: "Austria", to: "/country/austria" },
//   { key: "belgium", label: "Belgium", to: "/country/belgium" },
//   { key: "bulgaria", label: "Bulgaria", to: "/country/bulgaria" },
//   { key: "cyprus", label: "Cyprus", to: "/country/cyprus" },
//   { key: "czech-republic", label: "Czech Republic", to: "/country/czech-republic" },
//   { key: "germany", label: "Germany", to: "/country/germany" },
//   { key: "hungary", label: "Hungary", to: "/country/hungary" },
//   { key: "norway", label: "Norway", to: "/country/norway" },
//   { key: "portugal", label: "Portugal", to: "/country/portugal" },
//   { key: "spain", label: "Spain", to: "/country/spain" },
//   { key: "switzerland", label: "Switzerland", to: "/country/switzerland" },
//   { key: "united-kingdom", label: "United Kingdom", to: "/country/united-kingdom" },
//   { key: "dubai", label: "Dubai", to: "/country/dubai" },
  
// ];

// // Navigation links config
// const navLinks = [
//   { label: "Home", to: "/" },
//   { label: "About", to: "/about" },
//   { label: "Services", to: "/services" },
//   // Insert Immigration Options with drop down
//   {
//     label: "Immigration Options",
//     to: "#immigration-options",
//     dropdown: [
//       { label: "Investment", to: "/investment" },
//       { label: "Business", to: "/business" },
//       { label: "Employment", to: "/employment" },
//     ],
//   },
//   { label: "Contact", to: "/contact" },
// ];

// // Country selector options (for preferred selector only)
// const COUNTRY_OPTIONS = [
//   { key: "UK", label: "United Kingdom" },
//   { key: "DUBAI", label: "Dubai" },
//   { key: "HUNGARY", label: "Hungary" },
// ];

// export default function NavBar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [countryMenuOpen, setCountryMenuOpen] = useState(false);
//   const [immigrationDropdownOpen, setImmigrationDropdownOpen] = useState(false);
//   const [immigrationDropdownMobileOpen, setImmigrationDropdownMobileOpen] = useState(false);

//   // For "Option" (country dropdown) Nav Link
//   const [optionDropdownOpen, setOptionDropdownOpen] = useState(false);
//   const [optionDropdownMobileOpen, setOptionDropdownMobileOpen] = useState(false);

//   const [preferredCountry, setPreferredCountry] = useState("");
//   const countryMenuRef = useRef();
//   const immigrationDropdownRef = useRef();
//   const optionDropdownRef = useRef(); // for desktop option dropdown
//   const mobileMenuRef = useRef();
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Get preferred country from localStorage on mount
//   useEffect(() => {
//     const item = localStorage.getItem("preferred_country") || "";
//     setPreferredCountry(item);
//   }, []);

//   // Handle click away for country menu
//   useEffect(() => {
//     if (!countryMenuOpen) return;
//     function handleClick(e) {
//       if (
//         countryMenuRef.current &&
//         !countryMenuRef.current.contains(e.target)
//       ) {
//         setCountryMenuOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, [countryMenuOpen]);

//   // Handle click away for immigration dropdown (desktop)
//   useEffect(() => {
//     if (!immigrationDropdownOpen) return;
//     function handleClick(e) {
//       if (
//         immigrationDropdownRef.current &&
//         !immigrationDropdownRef.current.contains(e.target)
//       ) {
//         setImmigrationDropdownOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, [immigrationDropdownOpen]);

//   // Handle click away for Option dropdown (desktop country list)
//   useEffect(() => {
//     if (!optionDropdownOpen) return;
//     function handleClick(e) {
//       if (
//         optionDropdownRef.current &&
//         !optionDropdownRef.current.contains(e.target)
//       ) {
//         setOptionDropdownOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, [optionDropdownOpen]);

//   // Handle click away for mobile menu
//   useEffect(() => {
//     if (!mobileOpen) return;
//     function handleClick(e) {
//       if (
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(e.target)
//       ) {
//         setMobileOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, [mobileOpen]);

//   // Update localStorage and reload page when changing preferred country
//   function handleCountrySelect(key) {
//     localStorage.setItem("preferred_country", key);
//     setPreferredCountry(key);
//     setCountryMenuOpen(false);
//     window.location.reload();
//   }

//   // Handler for clicking a country in the Option menu (both desktop and mobile)
//   function handleCountryOptionClick(countryTo) {
//     setOptionDropdownOpen(false);
//     setOptionDropdownMobileOpen(false);
//     setMobileOpen(false);
//     if (countryTo?.startsWith("/country/")) {
//       navigate(countryTo);
//     }
//   }

//   return (
//     <header className="w-full shadow-sm bg-[#f8f9fa] py-2 z-50 relative">
//       <nav className="mx-auto flex items-center justify-between px-3 sm:px-8 py-2 relative h-[70px] max-w-[1600px]">
//         {/* Logo */}
//         <div className="flex flex-1 items-center justify-start gap-2">
//           <img
//             src="/logo.png"
//             alt="Immigration Options 4U Logo"
//             className="w-16 h-16 object-contain rounded-full shadow-sm bg-white"
//             style={{ filter: "drop-shadow(0 1px 4px #e0edfd)" }}
//           />
//           <span className="font-bold text-lg lg:text-xl text-[#1d69f4]  font-serif">
//             Immigration Options 4U
//           </span>
//         </div>

//         {/* Desktop Navigation Links */}
//         <ul className="hidden md:flex md:flex-1 items-center justify-center gap-7">
//           {navLinks.map((link) =>
//             link.dropdown ? (
//               <li
//                 key={link.label}
//                 className="relative"
//                 ref={immigrationDropdownRef}
//                 onMouseEnter={() => setImmigrationDropdownOpen(true)}
//                 onMouseLeave={() => setImmigrationDropdownOpen(false)}
//               >
//                 <button
//                   className={clsx(
//                     "flex items-center gap-1 font-medium text-base transition rounded px-2 py-2 hover:text-[#1d69f4] whitespace-nowrap",
//                     immigrationDropdownOpen
//                       ? "text-[#1d69f4] font-bold"
//                       : "text-[#232839]"
//                   )}
//                   aria-haspopup="true"
//                   aria-expanded={immigrationDropdownOpen}
//                   onClick={() => setImmigrationDropdownOpen((v) => !v)}
//                   type="button"
//                 >
//                   {link.label}
//                   <FaChevronDown className="ml-1 text-xs text-[#568edb]" />
//                 </button>
//                 {immigrationDropdownOpen && (
//                   <ul className="absolute left-0 top-full bg-white shadow-lg border border-[#e4ecfa] rounded-md py-2 min-w-[180px] z-50">
//                     {link.dropdown.map((item) => (
//                       <li key={item.label}>
//                         <Link
//                           to={item.to}
//                           className={clsx(
//                             "block px-4 py-2 text-sm font-medium hover:bg-[#eaf3fd] transition",
//                             location.pathname === item.to
//                               ? "text-[#1d69f4] font-bold"
//                               : "text-[#232839]"
//                           )}
//                           onClick={() => {
//                             setImmigrationDropdownOpen(false);
//                             setMobileOpen(false);
//                           }}
//                         >
//                           {item.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ) : link.to.startsWith("/") ? (
//               <li key={link.label}>
//                 <Link
//                   to={link.to}
//                   className={clsx(
//                     "font-medium text-base hover:text-[#1d69f4] transition",
//                     location.pathname === link.to
//                       ? "text-[#1d69f4] font-bold"
//                       : "text-[#232839]"
//                   )}
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ) : (
//               <li key={link.label}>
//                 <a
//                   href={link.to}
//                   className="font-medium text-base hover:text-[#1d69f4] transition text-[#232839]"
//                 >
//                   {link.label}
//                 </a>
//               </li>
//             )
//           )}

//           {/* Option Nav Link: Desktop dropdown */}
//           <li
//             className="relative"
//             ref={optionDropdownRef}
//             onMouseEnter={() => setOptionDropdownOpen(true)}
//             onMouseLeave={() => setOptionDropdownOpen(false)}
//           >
//             <button
//               className={clsx(
//                 "flex items-center gap-1 font-medium text-base transition rounded px-2 py-2 hover:text-[#1d69f4] whitespace-nowrap",
//                 optionDropdownOpen ? "text-[#1d69f4] font-bold" : "text-[#232839]"
//               )}
//               aria-haspopup="true"
//               aria-expanded={optionDropdownOpen}
//               onClick={() => setOptionDropdownOpen((v) => !v)}
//               type="button"
//             >
//               Option
//               <FaChevronDown className="ml-1 text-xs text-[#568edb]" />
//             </button>
//             {optionDropdownOpen && (
//               <ul className="absolute left-0 top-full bg-white shadow-lg border border-[#e4ecfa] rounded-md py-2 min-w-[220px] z-50 max-h-72 overflow-auto">
//                 {countryDropdownList.length === 0 ? (
//                   <li className="px-4 py-2 text-sm text-gray-400">No countries found</li>
//                 ) : (
//                   countryDropdownList.map((country) => (
//                     <li key={country.key}>
//                       <Link
//                         to={country.to}
//                         className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-[#eaf3fd] transition text-[#232839]"
//                         onClick={() => {
//                           handleCountryOptionClick(country.to);
//                         }}
//                       >
//                         {country.label}
//                       </Link>
//                     </li>
//                   ))
//                 )}
//               </ul>
//             )}
//           </li>
//         </ul>

//         {/* Right Side Actions (desktop + mobile) */}
//         <div className="flex flex-1 items-center justify-end gap-1 sm:gap-4 relative">
//           {/* Desktop preferred country switcher */}
//           {/* <div className="hidden md:block relative" ref={countryMenuRef}>
//             <button
//               className={clsx(
//                 "flex items-center gap-1 px-3 py-2 rounded-md border text-[#23386a] bg-white border-[#dbeafd] hover:bg-[#f1f6fb] font-medium shadow-sm transition",
//                 countryMenuOpen && "ring-2 ring-[#1d69f4]/20"
//               )}
//               onClick={() => setCountryMenuOpen((v) => !v)}
//               aria-haspopup="listbox"
//               aria-expanded={countryMenuOpen}
//               aria-label="Select preferred country"
//             >
//               <span className="font-bold text-sm text-[#1d69f4]">
//                 {COUNTRY_OPTIONS.find(
//                   (opt) => opt.key === preferredCountry
//                 )?.label || "Select Country"}
//               </span>
//               <FaChevronDown className="ml-1 text-xs text-[#568edb]" />
//             </button>
//             {countryMenuOpen && (
//               <ul
//                 className="
//                 absolute right-0 mt-2 min-w-[180px] rounded-md bg-white border border-[#cae0fa] shadow-xl z-50
//                 py-2
//                 "
//                 role="listbox"
//               >
//                 {COUNTRY_OPTIONS.map((opt) => (
//                   <li
//                     key={opt.key}
//                     className={clsx(
//                       "px-4 py-2 hover:bg-[#eaf3fd] cursor-pointer text-sm font-medium",
//                       preferredCountry === opt.key
//                         ? "bg-[#e8f0fc] text-[#089166] font-bold"
//                         : ""
//                     )}
//                     role="option"
//                     aria-selected={preferredCountry === opt.key}
//                     onClick={() => handleCountrySelect(opt.key)}
//                   >
//                     {opt.label}
//                     {preferredCountry === opt.key && (
//                       <span className="ml-2 text-[#089166] font-bold">✓</span>
//                     )}
//                   </li>
//                 ))}
//                 <hr className="my-1 border-[#e9eff8]" />
//                 <li
//                   className="px-4 py-2 text-xs text-[#ab2432] hover:bg-[#fee7ea] cursor-pointer"
//                   role="option"
//                   aria-selected={preferredCountry === ""}
//                   onClick={() => handleCountrySelect("")}
//                 >
//                   Clear Selection
//                 </li>
//               </ul>
//             )}
//           </div> */}

//           {/* Desktop "Get a Quote" button */}
//           <button
//             className="hidden md:flex md:ml-2 items-center md:gap-2 bg-[#1d69f4] text-white rounded-full py-1 px-2 md:py-2 md:px-4 md:pr-5 font-semibold shadow-lg hover:bg-[#255fd8] transition"
//             onClick={() => {
//               window.scrollTo({
//                 top: document.documentElement.scrollHeight,
//                 behavior: "smooth",
//               });
//             }}
//           >
//             <span className="flex rounded-full w-8 h-8 bg-white/20 items-center justify-center md:mr-1">
//               <FaArrowRight className="text-white text-lg" />
//             </span>
//             <span className="hidden md:inline">Get a quote</span>
//           </button>

//           {/* Hamburger icon (mobile only) */}
//           <button
//             className="md:hidden flex items-center justify-center text-[#1d69f4] p-2 rounded hover:bg-[#e4eeff] transition z-50"
//             aria-label="Open mobile menu"
//             onClick={() => setMobileOpen((m) => !m)}
//           >
//             {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
//           </button>
//         </div>

//         {/* Mobile menu overlay */}
//         <div
//           className={clsx(
//             "fixed inset-0 bg-black/30 z-40 transition-opacity duration-200 ease-in-out",
//             mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//           )}
//           aria-hidden={!mobileOpen}
//           onClick={() => setMobileOpen(false)}
//         />
//         {/* Mobile slide-out menu */}
//         <div
//           ref={mobileMenuRef}
//           className={clsx(
//             "fixed top-0 right-0 z-50 h-full w-4/5 max-w-xs bg-white shadow-lg flex flex-col transition-transform duration-300 ease-in-out",
//             mobileOpen ? "translate-x-0" : "translate-x-full"
//           )}
//         >
//           <div className="flex items-center py-4 px-4 border-b border-gray-100 gap-3">
//             <img
//               src="/logo.png"
//               alt="Immigration Options 4U Logo"
//               className="w-12 h-12 object-contain rounded-full shadow bg-white"
//               style={{ filter: "drop-shadow(0 1px 4px #e0edfd)" }}
//             />
//             <span className="font-bold text-xl text-[#1d69f4] mr-1 font-serif">
//               Immigration Options 4U
//             </span>
//             <div className="flex-1" />
//             <button
//               className="p-2 text-gray-600 hover:text-[#d82323] focus:outline-none"
//               aria-label="Close mobile menu"
//               onClick={() => setMobileOpen(false)}
//             >
//               <FaTimes size={20} />
//             </button>
//           </div>
//           <ul className="flex flex-col gap-2 px-4 py-4">
//             {navLinks.map((link) =>
//               link.dropdown ? (
//                 <li key={link.label} className="relative">
//                   <button
//                     className={clsx(
//                       "flex w-full items-center gap-1 px-2 py-2 rounded text-base font-semibold text-left",
//                       immigrationDropdownMobileOpen
//                         ? "bg-[#f0f6ff] text-[#1274d6]"
//                         : "text-[#232839] hover:bg-[#f0f6ff]"
//                     )}
//                     aria-haspopup="true"
//                     aria-expanded={immigrationDropdownMobileOpen}
//                     onClick={() => setImmigrationDropdownMobileOpen(v => !v)}
//                     type="button"
//                   >
//                     {link.label}
//                     <FaChevronDown
//                       className={clsx(
//                         "ml-auto text-xs transition",
//                         immigrationDropdownMobileOpen && "rotate-180"
//                       )}
//                     />
//                   </button>
//                   {immigrationDropdownMobileOpen && (
//                     <ul className="bg-[#f5faff] border border-[#daeaff] rounded py-1 mt-1 ml-2 shadow z-10">
//                       {link.dropdown.map((item) => (
//                         <li key={item.label}>
//                           <Link
//                             to={item.to}
//                             className={clsx(
//                               "block px-4 py-2 text-sm rounded hover:bg-[#eaf3fd] transition",
//                               location.pathname === item.to
//                                 ? "text-[#1d69f4] font-bold"
//                                 : "text-[#232839]"
//                             )}
//                             onClick={() => {
//                               setImmigrationDropdownMobileOpen(false);
//                               setMobileOpen(false);
//                             }}
//                           >
//                             {item.label}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ) : (
//                 <li key={link.label}>
//                   {link.to.startsWith("/") ? (
//                     <Link
//                       to={link.to}
//                       className={clsx(
//                         "block px-2 py-2 rounded text-base font-semibold",
//                         location.pathname === link.to
//                           ? "bg-[#e3eeff] text-[#1d69f4]"
//                           : "text-[#232839] hover:bg-[#f0f6ff]"
//                       )}
//                       onClick={() => setMobileOpen(false)}
//                     >
//                       {link.label}
//                     </Link>
//                   ) : (
//                     <a
//                       href={link.to}
//                       className="block px-2 py-2 text-[#232839] hover:bg-[#f0f6ff] rounded"
//                     >
//                       {link.label}
//                     </a>
//                   )}
//                 </li>
//               )
//             )}

//             {/* Option Nav Link: Mobile dropdown */}
//             <li className="relative">
//               <button
//                 className={clsx(
//                   "flex w-full items-center gap-1 px-2 py-2 rounded text-base font-semibold text-left",
//                   optionDropdownMobileOpen
//                     ? "bg-[#f0f6ff] text-[#1274d6]"
//                     : "text-[#232839] hover:bg-[#f0f6ff]"
//                 )}
//                 aria-haspopup="true"
//                 aria-expanded={optionDropdownMobileOpen}
//                 onClick={() => setOptionDropdownMobileOpen(v => !v)}
//                 type="button"
//               >
//                 Option
//                 <FaChevronDown
//                   className={clsx(
//                     "ml-auto text-xs transition",
//                     optionDropdownMobileOpen && "rotate-180"
//                   )}
//                 />
//               </button>
//               {optionDropdownMobileOpen && (
//                 <ul className="bg-[#f5faff] border border-[#daeaff] rounded py-1 mt-1 ml-2 shadow z-10 max-h-64 overflow-auto">
//                   {countryDropdownList.length === 0 ? (
//                     <li className="px-4 py-2 text-sm text-gray-400">No countries found</li>
//                   ) : (
//                     countryDropdownList.map((country) => (
//                       <li key={country.key}>
//                         <Link
//                           to={country.to}
//                           className="block w-full text-left px-4 py-2 text-sm rounded hover:bg-[#eaf3fd] transition text-[#232839]"
//                           onClick={() => {
//                             handleCountryOptionClick(country.to);
//                           }}
//                         >
//                           {country.label}
//                         </Link>
//                       </li>
//                     ))
//                   )}
//                 </ul>
//               )}
//             </li>
//           </ul>
//           {/* Mobile Preferred Country Switcher */}
//           {/* <div className="relative mb-4 mx-4">
//             <button
//               className={clsx(
//                 "flex items-center w-full gap-2 px-4 py-2 rounded-md border text-[#23386a] bg-white border-[#dbeafd] hover:bg-[#f1f6fb] font-medium shadow-sm transition",
//                 countryMenuOpen && "ring-2 ring-[#1d69f4]/20"
//               )}
//               onClick={() => setCountryMenuOpen((v) => !v)}
//               aria-haspopup="listbox"
//               aria-expanded={countryMenuOpen}
//               aria-label="Select preferred country"
//               type="button"
//             >
//               <span className="font-bold text-sm text-[#1d69f4]">
//                 {COUNTRY_OPTIONS.find(
//                   (opt) => opt.key === preferredCountry
//                 )?.label || "Select Country"}
//               </span>
//               <FaChevronDown className="ml-auto text-xs text-[#568edb]" />
//             </button>
//             {countryMenuOpen && (
//               <ul
//                 className="
//                   absolute right-0 left-0 mt-2 min-w-[180px] rounded-md bg-white border border-[#cae0fa] shadow-xl z-50
//                   py-2
//                 "
//                 role="listbox"
//               >
//                 {COUNTRY_OPTIONS.map((opt) => (
//                   <li
//                     key={opt.key}
//                     className={clsx(
//                       "px-4 py-2 hover:bg-[#eaf3fd] cursor-pointer text-sm font-medium",
//                       preferredCountry === opt.key
//                         ? "bg-[#e8f0fc] text-[#089166] font-bold"
//                         : ""
//                     )}
//                     role="option"
//                     aria-selected={preferredCountry === opt.key}
//                     onClick={() => {
//                       handleCountrySelect(opt.key);
//                       setMobileOpen(false);
//                     }}
//                   >
//                     {opt.label}
//                     {preferredCountry === opt.key && (
//                       <span className="ml-2 text-[#089166] font-bold">✓</span>
//                     )}
//                   </li>
//                 ))}
//                 <hr className="my-1 border-[#e9eff8]" />
//                 <li
//                   className="px-4 py-2 text-xs text-[#ab2432] hover:bg-[#fee7ea] cursor-pointer"
//                   role="option"
//                   aria-selected={preferredCountry === ""}
//                   onClick={() => {
//                     handleCountrySelect("");
//                     setMobileOpen(false);
//                   }}
//                 >
//                   Clear Selection
//                 </li>
//               </ul>
//             )}
//           </div> */}
//           {/* Mobile "Get a Quote" button */}
//           <button
//             className="flex mx-4 items-center gap-2 bg-[#1d69f4] text-white rounded-full py-2 px-3 font-semibold shadow-lg hover:bg-[#255fd8] transition"
//             onClick={() => {
//               setMobileOpen(false);
//               setTimeout(() => {
//                 window.scrollTo({
//                   top: document.documentElement.scrollHeight,
//                   behavior: "smooth",
//                 });
//               }, 300);
//             }}
//           >
//             <span className="flex rounded-full w-8 h-8 bg-white/20 items-center justify-center">
//               <FaArrowRight className="text-white text-lg" />
//             </span>
//             <span>Get a quote</span>
//           </button>
//           <div className="flex flex-col gap-3 px-4 pb-6 mt-auto"></div>
//         </div>
//       </nav>
//     </header>
//   );
// }


// NavBar.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import clsx from "clsx";
import { Link, useLocation, useNavigate } from "react-router-dom";

const countryDropdownList = [
  { key: "austria", label: "Austria", to: "/country/austria" },
  { key: "belgium", label: "Belgium", to: "/country/belgium" },
  { key: "bulgaria", label: "Bulgaria", to: "/country/bulgaria" },
  { key: "cyprus", label: "Cyprus", to: "/country/cyprus" },
  { key: "czech-republic", label: "Czech Republic", to: "/country/czech-republic" },
  { key: "germany", label: "Germany", to: "/country/germany" },
  { key: "hungary", label: "Hungary", to: "/country/hungary" },
  { key: "norway", label: "Norway", to: "/country/norway" },
  { key: "portugal", label: "Portugal", to: "/country/portugal" },
  { key: "spain", label: "Spain", to: "/country/spain" },
  { key: "switzerland", label: "Switzerland", to: "/country/switzerland" },
  { key: "united-kingdom", label: "United Kingdom", to: "/country/united-kingdom" },
  { key: "dubai", label: "Dubai", to: "/country/dubai" },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  {
    label: "Immigration Options",
    to: "#immigration-options",
    dropdown: [
      { label: "Investment", to: "/investment" },
      { label: "Business", to: "/business" },
      { label: "Employment", to: "/employment" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [immigrationOpen, setImmigrationOpen] = useState(false);
  const [immigrationMobileOpen, setImmigrationMobileOpen] = useState(false);
  const [optionOpen, setOptionOpen] = useState(false);
  const [optionMobileOpen, setOptionMobileOpen] = useState(false);

  const immigrationRef = useRef(null);
  const optionRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setImmigrationMobileOpen(false);
    setOptionMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Generic click-outside hook
  function useClickOutside(ref, open, setter) {
    useEffect(() => {
      if (!open) return;
      function handle(e) {
        if (ref.current && !ref.current.contains(e.target)) setter(false);
      }
      document.addEventListener("mousedown", handle);
      return () => document.removeEventListener("mousedown", handle);
    }, [open]);
  }

  useClickOutside(immigrationRef, immigrationOpen, setImmigrationOpen);
  useClickOutside(optionRef, optionOpen, setOptionOpen);

  function handleOptionClick(to) {
    setOptionOpen(false);
    setOptionMobileOpen(false);
    setMobileOpen(false);
    if (to?.startsWith("/country/")) navigate(to);
  }

  // Shared dropdown item styles
  const dropdownItem =
    "block w-full text-left px-4 py-2 text-sm font-medium hover:bg-[#eaf3fd] transition text-[#232839]";
  const activeDropdownItem = "text-[#1d69f4] font-bold";

  return (
    <header className="w-full shadow-sm bg-[#f8f9fa] z-50 sticky top-0">
      <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-[70px] max-w-[1600px]">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/logo.png"
            alt="Immigration Options 4U"
            className="w-12 h-12 object-contain rounded-full shadow-sm bg-white"
            style={{ filter: "drop-shadow(0 1px 4px #e0edfd)" }}
          />
          <span className="font-bold text-base lg:text-lg text-[#1d69f4] font-serif leading-tight hidden sm:block">
            Immigration Options 4U
          </span>
        </Link>

        {/* ── Desktop nav links ── */}
        <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.label} className="relative" ref={immigrationRef}>
                <button
                  type="button"
                  className={clsx(
                    "flex items-center gap-1 font-medium text-sm xl:text-base px-3 py-2 rounded transition hover:text-[#1d69f4] whitespace-nowrap",
                    immigrationOpen ? "text-[#1d69f4] font-bold" : "text-[#232839]"
                  )}
                  aria-haspopup="true"
                  aria-expanded={immigrationOpen}
                  onMouseEnter={() => setImmigrationOpen(true)}
                  onMouseLeave={() => setImmigrationOpen(false)}
                  onClick={() => setImmigrationOpen((v) => !v)}
                >
                  {link.label}
                  <FaChevronDown
                    className={clsx(
                      "ml-0.5 text-xs text-[#568edb] transition-transform duration-200",
                      immigrationOpen && "rotate-180"
                    )}
                  />
                </button>
                <ul
                  className={clsx(
                    "absolute left-0 top-full mt-0 bg-white shadow-lg border border-[#e4ecfa] rounded-md py-2 min-w-[180px] z-50 transition-all duration-150",
                    immigrationOpen
                      ? "opacity-100 pointer-events-auto translate-y-0"
                      : "opacity-0 pointer-events-none -translate-y-1"
                  )}
                  onMouseEnter={() => setImmigrationOpen(true)}
                  onMouseLeave={() => setImmigrationOpen(false)}
                >
                  {link.dropdown.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        className={clsx(
                          dropdownItem,
                          location.pathname === item.to && activeDropdownItem
                        )}
                        onClick={() => setImmigrationOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={clsx(
                    "font-medium text-sm xl:text-base px-3 py-2 rounded transition hover:text-[#1d69f4] whitespace-nowrap",
                    location.pathname === link.to
                      ? "text-[#1d69f4] font-bold"
                      : "text-[#232839]"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}

          {/* Option dropdown */}
          <li className="relative" ref={optionRef}>
            <button
              type="button"
              className={clsx(
                "flex items-center gap-1 font-medium text-sm xl:text-base px-3 py-2 rounded transition hover:text-[#1d69f4] whitespace-nowrap",
                optionOpen ? "text-[#1d69f4] font-bold" : "text-[#232839]"
              )}
              aria-haspopup="true"
              aria-expanded={optionOpen}
              onMouseEnter={() => setOptionOpen(true)}
              onMouseLeave={() => setOptionOpen(false)}
              onClick={() => setOptionOpen((v) => !v)}
            >
              Option
              <FaChevronDown
                className={clsx(
                  "ml-0.5 text-xs text-[#568edb] transition-transform duration-200",
                  optionOpen && "rotate-180"
                )}
              />
            </button>
            <ul
              className={clsx(
                "absolute left-0 top-full mt-0 bg-white shadow-lg border border-[#e4ecfa] rounded-md py-2 min-w-[220px] z-50 max-h-72 overflow-y-auto transition-all duration-150",
                optionOpen
                  ? "opacity-100 pointer-events-auto translate-y-0"
                  : "opacity-0 pointer-events-none -translate-y-1"
              )}
              onMouseEnter={() => setOptionOpen(true)}
              onMouseLeave={() => setOptionOpen(false)}
            >
              {countryDropdownList.map((country) => (
                <li key={country.key}>
                  <Link
                    to={country.to}
                    className={dropdownItem}
                    onClick={() => handleOptionClick(country.to)}
                  >
                    {country.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* ── Right side actions ── */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Get a Quote — desktop */}
          <button
            type="button"
            className="hidden lg:flex items-center gap-2 bg-[#1d69f4] text-white rounded-full py-2 px-4 pr-5 font-semibold shadow-lg hover:bg-[#255fd8] transition text-sm xl:text-base whitespace-nowrap"
            onClick={() =>
              window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })
            }
          >
            <span className="flex rounded-full w-7 h-7 bg-white/20 items-center justify-center">
              <FaArrowRight className="text-white text-sm" />
            </span>
            Get a quote
          </button>

          {/* Hamburger — mobile / tablet */}
          <button
            type="button"
            className="lg:hidden flex items-center justify-center text-[#1d69f4] p-2 rounded hover:bg-[#e4eeff] transition"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu backdrop ── */}
      <div
        className={clsx(
          "lg:hidden fixed inset-0 bg-black/30 z-40 transition-opacity duration-200",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Mobile slide-out panel ── */}
      <aside
        ref={mobileMenuRef}
        className={clsx(
          "lg:hidden fixed top-0 right-0 z-50 h-full w-4/5 max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
          <img
            src="/logo.png"
            alt="Immigration Options 4U"
            className="w-10 h-10 object-contain rounded-full shadow bg-white shrink-0"
            style={{ filter: "drop-shadow(0 1px 4px #e0edfd)" }}
          />
          <span className="font-bold text-base text-[#1d69f4] font-serif leading-tight">
            Immigration Options 4U
          </span>
          <button
            type="button"
            className="ml-auto p-2 text-gray-500 hover:text-[#d82323] transition rounded"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Scrollable link list */}
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label}>
                  <button
                    type="button"
                    className={clsx(
                      "flex w-full items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition",
                      immigrationMobileOpen
                        ? "bg-[#eaf3fd] text-[#1d69f4]"
                        : "text-[#232839] hover:bg-[#f0f6ff]"
                    )}
                    onClick={() => setImmigrationMobileOpen((v) => !v)}
                  >
                    {link.label}
                    <FaChevronDown
                      className={clsx(
                        "text-xs text-[#568edb] transition-transform duration-200",
                        immigrationMobileOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {immigrationMobileOpen && (
                    <ul className="mt-1 ml-3 bg-[#f5faff] border border-[#daeaff] rounded-lg py-1 overflow-hidden">
                      {link.dropdown.map((item) => (
                        <li key={item.label}>
                          <Link
                            to={item.to}
                            className={clsx(
                              "block px-4 py-2.5 text-sm rounded hover:bg-[#eaf3fd] transition",
                              location.pathname === item.to
                                ? "text-[#1d69f4] font-bold"
                                : "text-[#232839]"
                            )}
                            onClick={() => {
                              setImmigrationMobileOpen(false);
                              setMobileOpen(false);
                            }}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className={clsx(
                      "block px-3 py-2.5 rounded-lg text-sm font-semibold transition",
                      location.pathname === link.to
                        ? "bg-[#e3eeff] text-[#1d69f4]"
                        : "text-[#232839] hover:bg-[#f0f6ff]"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}

            {/* Option dropdown — mobile */}
            <li>
              <button
                type="button"
                className={clsx(
                  "flex w-full items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition",
                  optionMobileOpen
                    ? "bg-[#eaf3fd] text-[#1d69f4]"
                    : "text-[#232839] hover:bg-[#f0f6ff]"
                )}
                onClick={() => setOptionMobileOpen((v) => !v)}
              >
                Option
                <FaChevronDown
                  className={clsx(
                    "text-xs text-[#568edb] transition-transform duration-200",
                    optionMobileOpen && "rotate-180"
                  )}
                />
              </button>
              {optionMobileOpen && (
                <ul className="mt-1 ml-3 bg-[#f5faff] border border-[#daeaff] rounded-lg py-1 max-h-56 overflow-y-auto">
                  {countryDropdownList.map((country) => (
                    <li key={country.key}>
                      <Link
                        to={country.to}
                        className="block px-4 py-2.5 text-sm text-[#232839] hover:bg-[#eaf3fd] transition rounded"
                        onClick={() => handleOptionClick(country.to)}
                      >
                        {country.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* Footer CTA */}
        <div className="px-5 py-5 border-t border-gray-100">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 bg-[#1d69f4] text-white rounded-full py-3 px-5 font-semibold shadow-lg hover:bg-[#255fd8] transition"
            onClick={() => {
              setMobileOpen(false);
              setTimeout(
                () =>
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                  }),
                300
              );
            }}
          >
            <span className="flex rounded-full w-7 h-7 bg-white/20 items-center justify-center">
              <FaArrowRight className="text-white text-sm" />
            </span>
            Get a quote
          </button>
        </div>
      </aside>
    </header>
  );
}