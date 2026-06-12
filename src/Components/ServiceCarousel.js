// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa";

// const SERVICES_CONTENT = {
//   DUBAI: {
//     heading: "Comprehensive Business Solutions in Dubai",
//     description:
//       "Explore our complete suite of professional services designed to make your business journey in Dubai effortless and compliant.",
//     services: [
//       {
//         title: "Complete Business Setup",
//         subtitle: "Your Foundation for Success in Dubai",
//         description:
//           "Mainland, Free Zones, and Offshore: Whether you're eyeing the vibrant mainland, the dynamic free zones, or the strategic offshore locales, we guide you through every step. From choosing the right jurisdiction to handling all legal and administrative procedures, Immigration Options 4 U ensures a smooth path to establishing your presence in Dubai.",
//         image: "/consult1.webp",
//       },
//       {
//         title: "Visa and Immigration Services",
//         subtitle: "Simplifying Your Move",
//         description:
//           "For Entrepreneurs and Their Teams: Navigating visa applications can be complex. We simplify this process for entrepreneurs, their employees, and families, ensuring a smooth transition to Dubai's dynamic business environment.",
//         image: "/consult2.webp",
//       },
//       {
//         title: "Corporate Compliance and Taxation",
//         subtitle: "Navigating the Legal Landscape",
//         description:
//           "Stay Ahead of Regulations: With our expertise in corporate taxation, VAT registration, and adherence to Economic Substance Regulations (ESR), we keep your business compliant and informed, allowing you to focus on growth.",
//         image: "/consult3.webp",
//       },
//       {
//         title: "Auditing and Accounting Expertise",
//         subtitle: "Keeping Your Finances in Check",
//         description:
//           "Accuracy and Transparency: Our team offers comprehensive internal and external auditing, along with meticulous accounting and bookkeeping services, ensuring your financials are accurate, transparent, and regulation compliant.",
//         image: "/consult4.webp",
//       },
//       {
//         title: "Legal Advisory and Documentation",
//         subtitle: "Legal Excellence at Your Service",
//         description:
//           "Ensuring Legal Accuracy: From drafting and submitting legal documents like Memorandums of Association to managing trade licenses, our legal experts provide invaluable advice and support, keeping your business legally sound.",
//         image: "/consult5.webp",
//       },
//       {
//         title: "PRO and Document Clearing",
//         subtitle: "Streamlining Your Operations",
//         description:
//           "Efficient and Effective: Our Public Relations Officer (PRO) services manage all aspects of document clearing and processing, ensuring your business operations run without any bureaucratic hurdles.",
//         image: "/consult6.webp",
//       },
//     ],
//   },
//   HUNGARY: {
//     heading: "Comprehensive Golden Visa Solutions in Hungary",
//     description:
//       "Explore our complete suite of expert services designed to make your Hungarian residency journey seamless and successful.",
//     services: [
//       {
//         title: "Investment Consultation & Strategy",
//         subtitle: "Personalized Investment Guidance",
//         description:
//           "Expert guidance tailored to your financial situation and business goals. We help you choose from flexible investment options starting at €250,000, ensuring your investment aligns with your European residency aspirations and tax optimization strategy.",
//         image: "/consult1.webp",
//       },
//       {
//         title: "Documentation & Preparation",
//         subtitle: "Seamless Document Assembly",
//         description:
//           "Comprehensive support in gathering and preparing all required documentation. Our dedicated case advisors ensure every document is correctly prepared and submitted, streamlining the application process with precision and efficiency.",
//         image: "/consult2.webp",
//       },
//       {
//         title: "Due Diligence & Screening",
//         subtitle: "Thorough Background Verification",
//         description:
//           "Comprehensive background checks and due diligence procedures to safeguard your investment and ensure eligibility. Our thorough screening process protects both you and your investment while guaranteeing compliance with all regulatory requirements.",
//         image: "/consult3.webp",
//       },
//       {
//         title: "Application Management",
//         subtitle: "Expert Submission & Monitoring",
//         description:
//           "Professional handling of your entire application process with close monitoring throughout. From submission to approval, we manage communications with Hungarian authorities and keep you updated every step of the way with typical 6-8 week processing.",
//         image: "/consult4.webp",
//       },
//       {
//         title: "Residency & ID Processing",
//         subtitle: "Biometrics to ID Issuance",
//         description:
//           "Complete coordination of your biometrics appointment and Hungarian ID card issuance for you and your dependents. We ensure seamless processing of your official residency documentation and activation of your 10-year renewable permit.",
//         image: "/consult5.webp",
//       },
//       {
//         title: "Ongoing Support & Integration",
//         subtitle: "Post-Approval Assistance",
//         description:
//           "Dedicated support following your approval to help with integration into Hungarian and European life. We provide guidance on establishing your life in Hungary while ensuring you maximize the benefits of your new residency status.",
//         image: "/consult6.webp",
//       },
//     ],
//   },
//   UK: {
//     heading: "Comprehensive UK Immigration Solutions",
//     description:
//       "Explore our complete suite of expert immigration services designed to make your UK journey effortless and successful.",
//     services: [
//       {
//         title: "Business Immigration Pathways",
//         subtitle: "For Entrepreneurs & Professionals",
//         description:
//           "Comprehensive support for international business professionals seeking to establish or expand operations in the UK. We guide you through multiple pathways including Executive Personnel, Graduate Trainee, Business Establishment, and Corporate Secondment routes.",
//         image: "/consult1.webp",
//       },
//       {
//         title: "Talent & Skills Visas",
//         subtitle: "Premier Talent & Skilled Workers",
//         description:
//           "Expert guidance for attracting and placing top international talent in the UK. From Premier Talent Visa endorsements to Skilled Worker visa support, we ensure your organization accesses the best global expertise while maintaining full regulatory compliance.",
//         image: "/consult2.webp",
//       },
//       {
//         title: "Entrepreneurship Support",
//         subtitle: "New Venture to Scale-Up",
//         description:
//           "Complete support for entrepreneurs at every stage—from launching innovative startups with the New Venture Visa to scaling established businesses with the Advanced Innovator Visa. We guide you through endorsement, planning, and settlement pathways.",
//         image: "/consult3.webp",
//       },
//       {
//         title: "Employer Sponsorship & Compliance",
//         subtitle: "Licensing & Regulatory Solutions",
//         description:
//           "Full support in obtaining and managing your Employer Sponsorship Licence. We handle license applications, Certificate of Sponsorship assignments, and ongoing compliance management to ensure your business can legally recruit international talent.",
//         image: "/consult4.webp",
//       },
//       {
//         title: "Family & Partner Visas",
//         subtitle: "Reuniting You with Loved Ones",
//         description:
//           "Expert assistance for spousal visas, fiancé visas, and family reunification. We provide financial planning support, application preparation, and guidance on achieving permanent residency and citizenship for your family members.",
//         image: "/consult5.webp",
//       },
//       {
//         title: "Asylum & Human Rights",
//         subtitle: "Protection & Legal Advocacy",
//         description:
//           "Compassionate support for those seeking refuge and protection in the UK. From initial asylum claims to fresh claims, human rights applications, and appeals, we provide expert legal advocacy to maximize your chances of securing safety and rights.",
//         image: "/consult6.webp",
//       },
//     ],
//   },
// };

// export default function Services() {
//   const [preferredCountry, setPreferredCountry] = useState("DUBAI");

//   useEffect(() => {
//     const item = localStorage.getItem("preferred_country") || "DUBAI";
//     setPreferredCountry(item);
//   }, []);

//   const content = SERVICES_CONTENT[preferredCountry] || SERVICES_CONTENT.DUBAI;
//   const services = content.services;

//   return (
//     <section className="py-16 bg-[#f5f9ff]">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* <p className="text-[#1777fa] font-semibold tracking-wide">
//           // OUR SERVICES
//         </p> */}
//         <h2 className="font-extrabold text-3xl md:text-5xl text-[#101828] mt-2 mb-4 font-serif">
//           {content.heading}
//         </h2>
//         <p className="text-[#4b5563] max-w-3xl mx-auto mb-14">
//           {content.description}
//         </p>

//         {/* Grid */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.4 }}
//               viewport={{ once: true }}
//               className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="h-52 w-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//               </div>

//               <div className="p-6 text-left">
//                 <h3 className="text-xl font-bold text-[#101828] mb-1 group-hover:text-[#1777fa] transition-colors">
//                   {service.title}
//                 </h3>
//                 <p className="text-[#1777fa] text-sm font-medium mb-2">
//                   {service.subtitle}
//                 </p>
//                 <p className="text-[#4b5563] text-sm mb-4 line-clamp-3">
//                   {service.description}
//                 </p>
//               </div>

//               {/* Blue Accent Overlay */}
//               <div className="absolute inset-0 bg-[#1777fa]/0 group-hover:bg-[#1777fa]/5 transition-all duration-500"></div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";

// Unified services content (for all countries)
const SERVICES_CONTENT = {
  heading: "Comprehensive Global Services",
  description:
    "Explore our suite of expert professional, immigration, and investment services tailored to make your international business or residency journey effortless and successful.",
  services: [
    {
      title: "Business Setup & Investment Guidance",
      subtitle: "Start, Invest, or Expand Globally",
      description:
        "Whether launching a new venture, expanding, or making a qualifying investment, we streamline the legal and regulatory process for company formation and investment across major international locations.",
      image: "/WhatWeOffer/businesssetupandinvestmentguidence.jpg",
    },
    {
      title: "Visa & Immigration Services",
      subtitle: "Your Global Mobility Partner",
      description:
        "Comprehensive visa and residency services for entrepreneurs, professionals, and families—let our experts handle every step from eligibility to approval, ensuring a smooth relocation experience worldwide.",
      image: "/WhatWeOffer/visaimmigrationservices.jpg",
    },
    {
      title: "Compliance, Tax, & Legal Support",
      subtitle: "Regulation, Reporting, and Risk Management",
      description:
        "Stay compliant with international and local business regulations, tax rules, and economic substance requirements. We provide end-to-end support for auditing, accounting, tax structuring, and ongoing corporate compliance.",
      image: "/WhatWeOffer/ComplianceAndLegalSupport.jpg",
    },
    {
      title: "Document Preparation & PRO Services",
      subtitle: "Seamless Paperwork, Every Time",
      description:
        "Efficient documentation, translation, and government liaison services (PRO), including due diligence and document clearing for all business or residency needs.",
      image: "/WhatWeOffer/documentpreparation.jpg",
    },
    {
      title: "Family, Partner, & Dependent Visas",
      subtitle: "Bringing Loved Ones Together",
      description:
        "Dedicated assistance with spousal, partner, child, and dependent visa services. We help reunify families and support pathways to permanent residency or citizenship in your destination country.",
      image: "/WhatWeOffer/dependentvisas.jpg",
    },
    {
      title: "Settlement & Post-Approval Support",
      subtitle: "From Arrival to Integration",
      description:
        "Ongoing support after approval—activate IDs, finalize residency, fulfill local requirements, and integrate into your new home or business ecosystem with confidence.",
      image: "/WhatWeOffer/Support.jpg",
    },
  ],
};

export default function ServiceCarousel() {
  const content = SERVICES_CONTENT;
  const services = content.services;

  return (
    <section className="py-16 bg-[#f5f9ff]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* <p className="text-[#1777fa] font-semibold tracking-wide">
          // OUR SERVICES
        </p> */}
        <h2 className="font-extrabold text-3xl md:text-5xl text-[#101828] mt-2 mb-4 font-serif">
          {content.heading}
        </h2>
        <p className="text-[#4b5563] max-w-3xl mx-auto mb-14">
          {content.description}
        </p>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-52 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-[#101828] mb-1 group-hover:text-[#1777fa] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#1777fa] text-sm font-medium mb-2">
                  {service.subtitle}
                </p>
                <p className="text-[#4b5563] text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
              </div>
              {/* Blue Accent Overlay */}
              <div className="absolute inset-0 bg-[#1777fa]/0 group-hover:bg-[#1777fa]/5 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}