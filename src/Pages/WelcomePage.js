import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const [selectedCountry, setSelectedCountry] = useState('');
  const navigate = useNavigate();

  // Check on mount if user already has preferred country, show loading spinner while checking
  useEffect(() => {
    const preferredCountry = localStorage.getItem('preferred_country') || '';
    if (preferredCountry) {
      setSelectedCountry(preferredCountry); // set (for completeness, although will immediately redirect)
      // Simulate loading/UI protection
      setTimeout(() => {
        navigate('/home', { replace: true });
      }, 700);
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, [navigate]);

  // When user selects a country, update, show checkmark briefly, then navigate
  useEffect(() => {
    if (selectedCountry && !loading) {
      localStorage.setItem('preferred_country', selectedCountry);
      setLoading(true); // show spinner transition before redirect
      setTimeout(() => {
        navigate('/home', { replace: true });
      }, 700);
    }
  }, [selectedCountry, loading, navigate]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    // Add pt-safe (padding top) on mobile to avoid cutting off, and use min-h-[100svh] for better viewport fit on mobile
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
        <h1 className="
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
        </h1>
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
        <p className="
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
        </p>
        <div className="
          w-full my-[1vw] mb-[1vw] flex gap-7 justify-center flex-wrap 
          px-1
        ">
          {COUNTRY_OPTIONS.map((opt) => {
            const isSelected = selectedCountry === opt.key;
            return (
              <button
                key={opt.key}
                onClick={() => setSelectedCountry(opt.key)}
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
                  ${isSelected
                    ? 'border-[#339bee] bg-gradient-to-tr from-[#eaf5ff] via-[#e3f1fd] to-[#b3d8fa] shadow-lg'
                    : 'border-[#d1e2fd] bg-[#f6f9fe] hover:border-[#95bae9]'
                  }
                  outline-none
                `}
                style={{ flex: '1 1 240px', margin: 0, transition: 'box-shadow 0.2s, transform 0.2s' }}
                aria-pressed={isSelected}
              >
                <span className="font-bold text-[1.22em] text-[#026cff] drop-shadow-sm font-serif">
                  {opt.label}
                </span>
                <span className="font-normal text-[1em] text-[#5271a6] mt-3 text-center leading-snug max-w-[90%]">
                  {opt.description}
                </span>
                {isSelected && (
                  <svg className="w-6 h-6 mt-2 text-[#1cd08d]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 6.293a1 1 0 00-1.414 0l-5.828 5.829-2.828-2.828a1 1 0 10-1.415 1.415l3.535 3.536a1 1 0 001.415 0l6.535-6.535a1 1 0 000-1.415z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
        <div className="
          font-normal text-[#748bbb]
          text-[clamp(0.95rem,1vw,16px)]
          text-center mt-8 w-full
          px-6
        ">
          <span>
            <b className="text-[#1b3667] font-bold font-serif">{COMPANY_NAME}</b>
            &nbsp;|&nbsp;
            <span className="italic text-[#7295c7]">Business setup & immigration specialists</span>
            <br className="hidden sm:block" />
            for <span className="text-[#026cff] font-semibold">UK</span>,{' '}
            <span className="text-[#2673aa] font-semibold">Dubai</span>, and{' '}
            <span className="text-[#3e7832] font-semibold">Hungary</span>.
          </span>
        </div>
      </div>
    
      {/* Footer */}
      <footer className="
        mx-auto
        relative z-10 text-center
        text-[0.92em]
        text-[#b1bdd6]
        py-5
        tracking-wide
        mt-3
      ">
        &copy; {new Date().getFullYear()} <span className="font-bold text-[#184484]">{COMPANY_NAME}</span>
      </footer>
    </div>
  );
};

export default WelcomePage;