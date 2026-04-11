// FooterWithContact.jsx
import React, { useState, useEffect } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";

const FOOTER_CONTENT = {
  DUBAI: {
    mainHeading: "Let's",
    mainHeadingHighlight: "connect",
    mainHeadingEnd: "and collaborate",
    ctaButtonText: "Get started now",
    formIntro:
      "Feel free to get in touch or visit our Dubai location.",
    primaryCountry: "Dubai",
    selectOptions: ["Consult", "Collaboration", "Other"],
  },
  HUNGARY: {
    mainHeading: "Let's",
    mainHeadingHighlight: "build",
    mainHeadingEnd: "your European dream",
    ctaButtonText: "Start your residency journey",
    formIntro:
      "Feel free to get in touch or visit our Budapest office.",
    primaryCountry: "Hungary",
    selectOptions: ["Investment Inquiry", "Residency Consultation", "Other"],
  },
  UK: {
    mainHeading: "Let's",
    mainHeadingHighlight: "achieve",
    mainHeadingEnd: "your UK goals",
    ctaButtonText: "Begin your journey",
    formIntro:
      "Feel free to get in touch or visit our London office.",
    primaryCountry: "United Kingdom (UK)",
    selectOptions: ["Business Immigration", "Family Visa", "Other"],
  },
};

const ALL_CONTACTS = {
  "United Kingdom (UK)": {
    address: "First Floor, 30 High Road, Wood Green, London N22 6BX.",
    country: "United Kingdom (UK)",
  },
  Hungary: {
    address: "1114 Budapest, Meszoly Utca 4.a;.1",
    country: "Hungary",
  },
  Dubai: {
    address:
      "17th Floor Fahidi Heights, (Near Four Points Sheraton Hotel) Bur Dubai, Dubai. UAE.",
    country: "Dubai",
  },
};

export default function FooterWithContact() {
  const [preferredCountry, setPreferredCountry] = useState("DUBAI");

  useEffect(() => {
    const item = localStorage.getItem("preferred_country") || "DUBAI";
    setPreferredCountry(item);
  }, []);

  const content = FOOTER_CONTENT[preferredCountry] || FOOTER_CONTENT.DUBAI;

  // Sort contacts to show primary country first
  const primaryContactKey = content.primaryCountry;
  const sortedContacts = Object.entries(ALL_CONTACTS).sort(([key1], [key2]) => {
    if (key1 === primaryContactKey) return -1;
    if (key2 === primaryContactKey) return 1;
    return 0;
  });

  return (
    <footer
      id="contact"
      className="bg-[#151c27] w-full text-gray-200 font-sans"
    >
      <div className="flex flex-col lg:flex-row">
        {/* LEFT */}
        <div className="flex-1 px-8 py-12 flex flex-col justify-between">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 mt-4 text-white leading-tight">
              {content.mainHeading}{" "}
              <span className="text-[#1e82fd]">{content.mainHeadingHighlight}</span>
              <br />
              {content.mainHeadingEnd}
            </h2>
            <button className="mt-5 flex items-center gap-2 bg-[#1e82fd] text-white py-3 px-7 rounded-full font-semibold text-lg shadow">
              <FaArrowRight className="mr-2" />
              {content.ctaButtonText}
            </button>
          </div>
          {/* Contact Details Section */}
          <div className="mt-14">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Details:
            </h3>
            <div className="flex flex-col gap-7">
              {sortedContacts.map(([key, contact], index) => (
                <div
                  key={index}
                  className={
                    contact.country === primaryContactKey
                      ? "bg-[#1e82fd] bg-opacity-10 p-4 rounded-lg border border-[#1e82fd] border-opacity-30"
                      : ""
                  }
                >
                  <h4 className="font-semibold text-gray-400 mb-1">
                    {contact.country}
                    {contact.country === primaryContactKey && (
                      <span className="text-[#1e82fd] ml-2">(Primary)</span>
                    )}
                  </h4>
                  <p className="text-sm text-gray-300 mb-1">
                    {contact.address}
                  </p>
                </div>
              ))}
              <div>
                <h4 className="font-semibold text-gray-400 mb-1">Email</h4>
                <a
                  href="mailto:info@immigrationoptions4u.com"
                  className="text-sm text-[#7cc3fa] hover:underline font-semibold"
                >
                  info@immigrationoptions4u.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 bg-[#232b39] rounded-bl-3xl px-8 py-12 flex flex-col justify-center">
          <form className="w-full max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-7 text-white">
              {content.formIntro}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Full name*
                </label>
                <input
                  className="w-full bg-transparent border-b-2 border-[#2e3951] text-white py-3 px-2 focus:outline-none"
                  type="text"
                  required
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Email address*
                </label>
                <input
                  className="w-full bg-transparent border-b-2 border-[#2e3951] text-white py-3 px-2 focus:outline-none"
                  type="email"
                  required
                  placeholder="Email address"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Phone number*
                </label>
                <input
                  className="w-full bg-transparent border-b-2 border-[#2e3951] text-white py-3 px-2 focus:outline-none"
                  type="tel"
                  required
                  placeholder="Phone number"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Choose a option
                </label>
                <select
                  className="w-full bg-transparent border-b-2 border-[#2e3951] text-white py-3 px-2 focus:outline-none"
                  required
                >
                  <option value="">Select...</option>
                  {content.selectOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-8">
              <label className="block mb-2 text-sm font-semibold">
                Type message
              </label>
              <textarea
                className="w-full bg-transparent border-b-2 border-[#2e3951] text-white py-3 px-2 focus:outline-none h-20 resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center py-4 rounded-full bg-[#1e82fd] text-white font-semibold text-lg shadow-lg hover:bg-[#1766ba] transition mt-2"
            >
              Submit message <FaArrowRight className="ml-2" />
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER NAV SECTION */}
      <div className="border-t border-[#222c3d] mt-8 flex flex-col lg:flex-row justify-between items-center px-8 py-6">
        {/* Left & Social */}
        <div className="flex items-center flex-wrap gap-4 w-full lg:w-auto mb-6 lg:mb-0">
          {/* Logo */}
          <div className="flex items-center gap-2 mr-8">
            <span className="font-bold text-2xl text-white">
              Immigration Options
            </span>
            <span className="font-serif text-2xl text-[#c7d6ec]">4U</span>
          </div>
          {/* Social Icons */}
          <ul className="flex gap-4 ml-4 text-gray-400 text-lg">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
          </ul>
        </div>

        {/* Up arrow floating button */}
        <button
          className="fixed bottom-16 right-8 z-50 bg-[#1e82fd] w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-[#1766ba] transition"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-white text-2xl" />
        </button>
      </div>
      {/* Copyright & policies */}
      <div className="flex flex-col md:flex-row gap-3 justify-between items-center px-8 pb-7 text-gray-400 text-sm">
        <div>
          © 2025{" "}
          <span className="font-semibold text-white">
            Immigration Options 4 U
          </span>{" "}
          All rights reserved.
        </div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-3 items-center">
          {/* <span>Policy & privacy &nbsp;•&nbsp; Terms & conditions</span> */}
          {/* <span className="hidden md:inline">|</span> */}
          <span>
            Made with passion by{" "}
            <a
              href="https://gowappily.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e82fd] hover:underline font-semibold"
            >
              GoWappily Infotech
            </a>
            .
          </span>
        </div>
      </div>
    </footer>
  );
}