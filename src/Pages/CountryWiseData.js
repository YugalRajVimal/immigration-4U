import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function formatInvestment(minInvestment, currency) {
  if (minInvestment == null || currency == null) return "N/A";
  return `${minInvestment.toLocaleString()} ${currency}`;
}

const SECTION_CONFIG = [
  { key: "program",               label: "Overview",               icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { key: "benefits",              label: "Key Benefits",           icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
  { key: "requirements",         label: "Requirements",            icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
  { key: "steps",                 label: "Process Steps",          icon: "M13 5l7 7-7 7M5 5l7 7-7 7" },
  { key: "services",              label: "Included Services",      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { key: "qualifyingInvestments", label: "Qualifying Investments", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { key: "timeline",              label: "Timeline",               icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { key: "family",                label: "Family",                 icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
];

const SvgIcon = ({ path, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.6}
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const Badge = ({ children, variant = "default" }) => {
  const variants = {
    default:  "bg-slate-100 text-slate-600 border border-slate-200",
    success:  "bg-emerald-50 text-emerald-700 border border-emerald-200",
    muted:    "bg-slate-50 text-slate-400 border border-slate-200",
    accent:   "bg-blue-50 text-blue-700 border border-blue-200",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide ${variants[variant]}`}>
      {children}
    </span>
  );
};

const SectionContent = ({ section, program }) => {
  switch (section.key) {
    case "program":
      return (
        <div className="space-y-5">
          {program.tagline && (
            <p className="text-sm font-medium text-blue-600 tracking-wide uppercase">
              {program.tagline}
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1.5">Investment Required</p>
              <p className={`text-base font-bold ${program.investmentRequired ? "text-emerald-600" : "text-slate-400"}`}>
                {program.investmentRequired ? "Yes" : "No"}
              </p>
            </div>
            {program.investmentRequired && (
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1.5">Min. Investment</p>
                <p className="text-base font-bold text-slate-800">
                  {formatInvestment(program.minInvestment, program.currency)}
                </p>
              </div>
            )}
            {typeof program.familyEligible !== "undefined" && (
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1.5">Family Eligible</p>
                <p className={`text-base font-bold ${program.familyEligible ? "text-emerald-600" : "text-slate-400"}`}>
                  {program.familyEligible ? "Yes" : "No"}
                  {program.dependents && (
                    <span className="text-sm font-normal text-slate-400 ml-2">({program.dependents})</span>
                  )}
                </p>
              </div>
            )}
          </div>
          {program.intro && (
            <p className="text-slate-700 leading-relaxed text-sm font-medium">{program.intro}</p>
          )}
          {program.description && (
            <p className="text-slate-600 leading-relaxed text-sm whitespace-pre-line">{program.description}</p>
          )}
          {!!program.eligibleApplicants?.length && (
            <div>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-3">Eligible Applicants</p>
              <div className="flex flex-wrap gap-2">
                {program.eligibleApplicants.map((ea, idx) => (
                  <Badge key={idx} variant="accent">{ea}</Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      );

    case "benefits":
      return !!program.benefits?.length ? (
        <ul className="space-y-2.5">
          {program.benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-emerald-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-slate-700 text-sm leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      ) : <p className="text-slate-400 text-sm italic">No benefits listed.</p>;

    case "requirements":
      return !!program.requirements?.length ? (
        <ul className="space-y-2.5">
          {program.requirements.map((r, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                {i + 1}
              </span>
              <span className="text-slate-700 text-sm leading-relaxed">{r}</span>
            </li>
          ))}
        </ul>
      ) : <p className="text-slate-400 text-sm italic">No requirements listed.</p>;

    case "steps":
      return !!program.steps?.length ? (
        <ol className="space-y-4">
          {program.steps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                {i < program.steps.length - 1 && (
                  <div className="w-px flex-1 bg-blue-100 mt-1.5" />
                )}
              </div>
              <div className="pb-4">
                <p className="text-sm font-semibold text-slate-800 mb-0.5">{step.title}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      ) : <p className="text-slate-400 text-sm italic">No steps listed.</p>;

    case "services":
      return !!program.services?.length ? (
        <ul className="space-y-2.5">
          {program.services.map((serv, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-violet-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-violet-600" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </span>
              <span className="text-slate-700 text-sm leading-relaxed">{serv}</span>
            </li>
          ))}
        </ul>
      ) : <p className="text-slate-400 text-sm italic">No services listed.</p>;

    case "qualifyingInvestments":
      return !!program.qualifyingInvestments?.length ? (
        <div className="space-y-3">
          {program.qualifyingInvestments.map((qi, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl p-4">
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-800">{qi.type}</p>
                {qi.description && (
                  <p className="text-xs text-slate-500 mt-0.5">{qi.description}</p>
                )}
              </div>
              {qi.minAmount && (
                <Badge variant="accent">
                  {formatInvestment(qi.minAmount, qi.currency || program.currency)} min
                </Badge>
              )}
            </div>
          ))}
        </div>
      ) : <p className="text-slate-400 text-sm italic">No investments listed.</p>;

    case "timeline":
      return program.timeline ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.entries(program.timeline).map(([k, v]) => (
            <div key={k} className="bg-slate-50 border border-slate-100 rounded-xl p-3.5">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">
                {k.replace(/([A-Z])/g, " $1").replace(/^./, t => t.toUpperCase())}
              </p>
              <p className="text-sm font-semibold text-slate-800">{v}</p>
            </div>
          ))}
        </div>
      ) : <p className="text-slate-400 text-sm italic">No timeline available.</p>;

    case "family":
      return typeof program.familyEligible !== "undefined" ? (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className={`text-sm font-bold ${program.familyEligible ? "text-emerald-600" : "text-slate-400"}`}>
              Family inclusion is {program.familyEligible ? "available" : "not available"}
            </span>
          </div>
          {program.dependents && (
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Eligible Dependents</p>
              <p className="text-sm text-slate-700">{program.dependents}</p>
            </div>
          )}
        </div>
      ) : <p className="text-slate-400 text-sm italic">No family data available.</p>;

    default:
      return null;
  }
};

const AccordionItem = ({ section, program, isOpen, onToggle }) => {
  const iconPath = section.icon;

  const hasContent = () => {
    if (section.key === "benefits" && !program.benefits?.length) return false;
    if (section.key === "requirements" && !program.requirements?.length) return false;
    if (section.key === "steps" && !program.steps?.length) return false;
    if (section.key === "services" && !program.services?.length) return false;
    if (section.key === "qualifyingInvestments" && !program.qualifyingInvestments?.length) return false;
    if (section.key === "timeline" && !program.timeline) return false;
    if (section.key === "family" && typeof program.familyEligible === "undefined") return false;
    return true;
  };

  if (!hasContent()) return null;

  return (
    <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
      isOpen
        ? "border-blue-200 bg-white shadow-sm shadow-blue-50"
        : "border-slate-200 bg-white hover:border-slate-300"
    }`}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-3 px-5 py-4 text-left group transition-colors duration-150"
      >
        <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-150 ${
          isOpen ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
        }`}>
          <SvgIcon path={iconPath} className="w-4 h-4" />
        </span>
        <span className={`flex-1 text-sm font-semibold tracking-tight ${
          isOpen ? "text-blue-700" : "text-slate-700"
        }`}>
          {section.label}
        </span>
        <span className={`flex-shrink-0 w-5 h-5 text-slate-400 transition-transform duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}>
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "1200px" : "0px" }}
      >
        {isOpen && (
          <div className="px-5 pb-5 pt-1 border-t border-slate-100">
            <SectionContent section={section} program={program} />
          </div>
        )}
      </div>
    </div>
  );
};

const ProgramCard = ({ program, index }) => {
  const progId = program.id ?? program.name ?? String(index);
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (key) => {
    setOpenSection(prev => prev === key ? null : key);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Program Header */}
      <div className="px-7 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-xl shadow-sm shadow-blue-200">
            {program.emoji ?? "✦"}
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight leading-tight">
              {program.name}
            </h2>
            {program.tagline && (
              <p className="text-sm text-slate-500 mt-1">{program.tagline}</p>
            )}
            <div className="flex flex-wrap gap-2 mt-3">
              {program.investmentRequired && (
                <Badge variant="accent">Investment Required</Badge>
              )}
              {program.familyEligible && (
                <Badge variant="success">Family Eligible</Badge>
              )}
              {program.minInvestment && (
                <Badge variant="default">
                  From {formatInvestment(program.minInvestment, program.currency)}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="p-5 space-y-2.5">
        {SECTION_CONFIG.map((section) => (
          <AccordionItem
            key={section.key}
            section={section}
            program={program}
            isOpen={openSection === section.key}
            onToggle={() => handleToggle(section.key)}
          />
        ))}
      </div>
    </div>
  );
};

const CountryWiseData = () => {
  const { country: countryParam } = useParams();
  const [data, setData] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    import("../countryWiseData.json")
      .then((json) => {
        setData(json.countries);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!data) return;
    const normalizedParam = (countryParam || "").toLowerCase().replace(/ +/g, "-");
    const found = data.find(
      (c) =>
        (c.slug && c.slug.toLowerCase() === normalizedParam) ||
        c.name.toLowerCase().replace(/ +/g, "-") === normalizedParam
    );
    setCountryData(found || null);
  }, [data, countryParam]);

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-50">
      <div className="w-10 h-10 rounded-full border-2 border-blue-600 border-t-transparent animate-spin" />
      <p className="text-slate-500 font-medium text-sm">Loading country data…</p>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <div className="bg-white rounded-2xl border border-red-100 p-10 text-center max-w-sm shadow-sm">
        <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
        <p className="text-slate-800 font-bold text-base">{error}</p>
      </div>
    </div>
  );

  if (!countryData) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
      <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center max-w-sm shadow-sm">
        <div className="text-4xl mb-4">🔍</div>
        <h2 className="text-lg font-bold text-slate-900 mb-2">Country Not Found</h2>
        <p className="text-sm text-slate-500">
          No data available for <span className="font-semibold text-slate-700">"{countryParam}"</span>
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10">
          <div className="flex items-center gap-5">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-slate-100 border border-slate-200 flex items-center justify-center text-3xl shadow-sm">
              {countryData.emoji ?? "🌍"}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Country Profile</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {countryData.name}
              </h1>
              <p className="text-slate-500 text-sm mt-1.5">
                {countryData.programs?.length ?? 0} immigration &amp; investment program{countryData.programs?.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10">
        {!countryData.programs?.length ? (
          <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-16 text-center">
            <div className="text-4xl mb-4">🛬</div>
            <p className="text-slate-500 text-sm font-medium">No programs available for this country.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Programs count bar */}
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                All Programs
              </h2>
              <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-100">
                {countryData.programs.length} total
              </span>
            </div>

            {countryData.programs.map((program, pi) => (
              <ProgramCard
                key={program.id ?? program.name ?? pi}
                program={program}
                index={pi}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryWiseData;