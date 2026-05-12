import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Add flag SVGs (inline for performance/flexibility)
const FLAG_ICONS = {
  UK: (
    <span className="absolute inset-0 z-0 pointer-events-none opacity-30">
      {/* UK Flag SVG */}
      <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="48" height="32" fill="#00247D"/>
        <path d="M0,0 L48,32 M48,0 L0,32" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L48,32 M48,0 L0,32" stroke="#CF142B" strokeWidth="4"/>
        <rect x="19" width="10" height="32" fill="#fff"/>
        <rect y="11" width="48" height="10" fill="#fff"/>
        <rect x="21.7" width="4.6" height="32" fill="#CF142B"/>
        <rect y="13.7" width="48" height="4.6" fill="#CF142B"/>
      </svg>
    </span>
  ),
  DUBAI: (
    <span className="absolute inset-0 z-0 pointer-events-none opacity-25">
      {/* UAE Flag SVG (Dubai) */}
      <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="48" height="32" fill="#00732F"/>
        <rect width="48" height="10.667" y="0" fill="#fff"/>
        <rect width="48" height="10.667" y="21.333" fill="#000"/>
        <rect width="12" height="32" fill="#D71920"/>
      </svg>
    </span>
  ),
  HUNGARY: (
    <span className="absolute inset-0 z-0 pointer-events-none opacity-25">
      {/* Hungary Flag SVG */}
      <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="48" height="10.667" y="0" fill="#C60C30"/>
        <rect width="48" height="10.667" y="10.666" fill="#fff"/>
        <rect width="48" height="10.667" y="21.333" fill="#477050"/>
      </svg>
    </span>
  ),
};

const COUNTRY_OPTIONS = [
  {
    key: 'UK',
    label: 'United Kingdom',
    description:
      "Set up your business and access European markets with ease. Leverage our London-based expertise.",
  },
  {
    key: 'DUBAI',
    label: 'Dubai',
    description:
      "Empowering entrepreneurs in the Middle East's commercial hub. Enjoy tax-friendly policies and dynamic growth.",
  },
  {
    key: 'HUNGARY',
    label: 'Hungary',
    description:
      "The gateway to Central and Eastern Europe. Choose Hungary for its strategic location and business flexibility.",
  },
];

const COMPANY_NAME = 'Immigration Options 4U';

// Simple loading spinner
const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#026cff] mb-5"></div>
    <div className="text-[#184484] text-xl font-semibold">Loading preferences...</div>
  </div>
);

const WelcomePage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Reset "preferred_country" in localStorage every time the WelcomePage is visited
  useEffect(() => {
    localStorage.removeItem('preferred_country');
  }, []);

  // On mount, check if a preferred country exists and redirect if so, else show welcome
  useEffect(() => {
    // After reset, this will always be false, but keep logic for future adaptation, e.g. server-side remembered user
    const preferredCountry = localStorage.getItem('preferred_country') || '';
    if (preferredCountry) {
      setTimeout(() => {
        navigate('/home', { replace: true });
      }, 700);
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, [navigate]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const handleCountryClick = (key) => {
    localStorage.setItem('preferred_country', key);
    navigate('/home');
  };

  return (
    <div className='flex flex-col justify-center items-start w-full bg-[#e9f3fd] min-h-[100svh] sm:min-h-screen pt-[20vw] sm:pt-0 px-2'>
      {/* Logo & branding */}
      <div className="flex flex-col items-center w-full mb-3">
        <div className="flex items-center justify-center mb-2 -mt-8 sm:mt-0 relative z-20">
          {/* Logo - use your image or fallback */}
          <img
            src={"/logo.png"}
            alt="Immigration Options 4U Logo"
            className="object-cover w-24 h-24 rounded-full"
            style={{ filter: 'drop-shadow(0 2px 6px #e0edfd)' }}
          />
        </div>
        {/* <h1 className="
          m-0 font-extrabold font-serif
          text-[clamp(2.27rem,5vw,46px)]
          tracking-widest
          text-[#184484]
          text-center
          leading-tight
          w-full
          drop-shadow-sm
        ">
          Welcome to <span className="text-[#026cff]">{COMPANY_NAME}</span>
        </h1> */}
        <p className="
          mt-2 mb-0 font-semibold font-serif
          text-[#2585e3]
          text-[clamp(1.13rem,1.9vw,24px)]
          text-center w-full drop-shadow-xs
          tracking-wide
        ">
          Your Gateway to International Business
        </p>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* <p className="
          mt-7 mb-7 text-[#40506a]
          text-[clamp(1.06rem,1.22vw,18px)] leading-[1.45]
          text-center w-full font-medium font-serif
        ">
          At <span className="font-bold text-[#1b3667]">{COMPANY_NAME}</span>,
          we help you realise your business dreams in
          <span className="text-[#2585e3] font-semibold"> UK</span>, 
          <span className="text-[#2673aa] font-semibold"> Dubai</span>, and
          <span className="text-[#3e7832] font-semibold"> Hungary</span>.<br className="hidden sm:block" />
          Select your preferred destination to get started.
        </p> */}
        <div className="
          w-full my-[1vw] mb-[1vw] flex gap-7 justify-center flex-wrap 
          px-1
        ">
          {COUNTRY_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              onClick={() => handleCountryClick(opt.key)}
              className={`
                flex flex-col items-center gap-2
                flex-1 min-w-[190px] max-w-[320px]
                min-h-[148px]
                px-5
                py-7
                rounded-[24px]
                font-semibold
                cursor-pointer
                font-poppins
                transition-all duration-200 transform
                border-2
                shadow-md hover:shadow-xl
                hover:scale-105
                active:scale-100
                text-[#1e3159]
                text-[1.13rem]
                bg-opacity-90
                relative overflow-hidden
                border-[#d1e2fd] bg-[#f6f9fe] hover:border-[#95bae9]
                outline-none
              `}
              style={{ flex: '1 1 240px', margin: 0, transition: 'box-shadow 0.2s, transform 0.2s' }}
            >
              {/* Flag background */}
              {FLAG_ICONS[opt.key]}
              <span className="font-bold text-[1.22em] text-[#026cff] drop-shadow-sm font-serif relative z-10">
                {opt.label}
              </span>
              <span className="font-normal text-[1em] text-[#5271a6] mt-3 text-center leading-snug max-w-[90%] relative z-10">
                {opt.description}
              </span>
            </button>
          ))}
        </div>
        <div className="
          font-normal text-[#748bbb]
          text-[clamp(0.95rem,1vw,16px)]
          text-center mt-8 w-full
          px-6
        ">
          {/* <span>
            <b className="text-[#1b3667] font-bold font-serif">{COMPANY_NAME}</b>
            &nbsp;|&nbsp;
            <span className="italic text-[#7295c7]">Business setup & immigration specialists</span>
            <br className="hidden sm:block" />
            for <span className="text-[#026cff] font-semibold">UK</span>,{' '}
            <span className="text-[#2673aa] font-semibold">Dubai</span>, and{' '}
            <span className="text-[#3e7832] font-semibold">Hungary</span>.
          </span> */}
        </div>
      </div>
    
      {/* Footer */}
      {/* <footer className="
        mx-auto
        relative z-10 text-center
        text-[0.92em]
        text-[#b1bdd6]
        py-5
        tracking-wide
        mt-3
      ">
        &copy; {new Date().getFullYear()} <span className="font-bold text-[#184484]">{COMPANY_NAME}</span>
      </footer> */}
    </div>
  );
};

export default WelcomePage;