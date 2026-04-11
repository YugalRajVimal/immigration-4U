import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ABOUT_CONTENT = {
  DUBAI: {
    heroTitle: "Immigration Options 4 U",
    heroSubtitle: "Your Gateway to Seamless Business Setup in Dubai",
    introTitle: "Empowering Entrepreneurs in the Heart of the Middle East",
    introDescription:
      "At Immigration Options 4 U, we help visionaries, entrepreneurs, and global investors bring their business ambitions to life in Dubai. With expertise in company formation, compliance, and strategic business setup, we simplify complexities — so you can focus on building your success.",
    leftSectionTitle: "Why Dubai?",
    leftSectionDescription:
      "Dubai is a global business powerhouse offering world-class infrastructure, tax-friendly laws, and unmatched opportunities for growth.",
    leftPoints: [
      "Strategic global location",
      "Investor-friendly regulations",
      "Thriving business ecosystem",
      "Zero income tax & competitive benefits",
    ],
    rightSectionTitle: "What We Do",
    rightSectionDescription:
      "We guide you from idea to execution with end-to-end business setup services.",
    rightPoints: [
      "Business formation (Mainland, Free Zone, Offshore)",
      "Visa & immigration assistance",
      "Corporate compliance & taxation",
      "Accounting & auditing support",
      "Legal documentation & PRO services",
    ],
    whyChooseTitle: "Why Choose Immigration Options 4 U?",
    whyChooseFeatures: [
      "Commitment to Excellence",
      "Customer-Centric Approach",
      "Proven Track Record",
      "Innovative Business Solutions",
      "Transparent & Ethical Processes",
      "Specialized Industry Expertise",
    ],
    commitmentTitle: "Your Success, Our Commitment",
    commitmentDescription:
      "At Immigration Options 4 U, your business aspirations are at the heart of our operations. We pride ourselves on our ability to offer personalized solutions, ensuring that each client receives the attention and expertise necessary to flourish in Dubai's thriving business landscape.",
    joinTitle: "Join the Immigration Options 4 U Family",
    joinDescription:
      "Embark on your business journey with Immigration Options 4 U and experience the ease, efficiency, and excellence that come with our partnership. Connect with us today to learn more about how we can assist in making your business ambitions a reality in Dubai.",
    ctaTitle: "Ready to Start Your Business Journey in Dubai?",
    ctaDescription: "Our experts are here to guide you every step of the way.",
  },
  HUNGARY: {
    heroTitle: "Immigration Options 4 U",
    heroSubtitle: "Your Gateway to European Residency in Hungary",
    introTitle: "Empowering Investors and Global Citizens Seeking European Residency",
    introDescription:
      "At Immigration Options 4 U, we help ambitious investors and global citizens achieve their European dreams through Hungary's Golden Visa program. With expertise in investment guidance, residency application, and EU integration, we simplify the pathway to secure, long-term European residency — so you can focus on building your future.",
    leftSectionTitle: "Why Hungary?",
    leftSectionDescription:
      "Hungary offers a premier pathway to European residency with the EU's lowest corporate tax rate, strategic central location, and stable business environment.",
    leftPoints: [
      "EU's lowest 9% corporate tax rate",
      "Strategic location at Europe's crossroads",
      "Welcoming business climate and governance",
      "Cost-effective living relative to Western Europe",
    ],
    rightSectionTitle: "What We Do",
    rightSectionDescription:
      "We guide you from consultation to residency activation with comprehensive Golden Visa services.",
    rightPoints: [
      "Investment consultation & selection guidance",
      "Documentation compilation & preparation",
      "Comprehensive due diligence & screening",
      "Application submission & approval monitoring",
      "Biometrics coordination & ID issuance",
      "Ongoing integration & support services",
    ],
    whyChooseTitle: "Why Choose Immigration Options 4 U?",
    whyChooseFeatures: [
      "European Investment Expertise",
      "Client-Focused Service Approach",
      "Proven Success Record",
      "Innovative Residency Solutions",
      "Transparent & Compliant Processes",
      "Specialized EU Immigration Knowledge",
    ],
    commitmentTitle: "Your European Dream, Our Commitment",
    commitmentDescription:
      "At Immigration Options 4 U, your European residency goals are at the heart of our operations. We pride ourselves on our ability to offer personalized guidance, ensuring that each client receives the expertise and support necessary to successfully secure their Hungarian Golden Visa and flourish in European life.",
    joinTitle: "Join the Immigration Options 4 U Family",
    joinDescription:
      "Embark on your European residency journey with Immigration Options 4 U and experience the professionalism, expertise, and excellence that come with our partnership. Connect with us today to learn more about how we can assist in securing your family's European future.",
    ctaTitle: "Ready to Secure Your European Residency?",
    ctaDescription: "Our experts are here to guide you to your European dream.",
  },
  UK: {
    heroTitle: "Immigration Options 4 U",
    heroSubtitle: "Your Gateway to UK Success and Residency",
    introTitle: "Empowering Professionals, Entrepreneurs, and Families in the United Kingdom",
    introDescription:
      "At Immigration Options 4 U, we help ambitious professionals, entrepreneurs, and families achieve their UK dreams. With expertise in business immigration, skilled worker visas, family reunification, and investment pathways, we simplify the complexity — so you can focus on building your future in the UK.",
    leftSectionTitle: "Why the United Kingdom?",
    leftSectionDescription:
      "The UK offers a world-leading destination for business, innovation, and quality of life with strong legal frameworks and global opportunities.",
    leftPoints: [
      "World's 5th largest economy",
      "World-class legal and governance framework",
      "Gateway to global markets and partnerships",
      "World-class education and innovation hubs",
    ],
    rightSectionTitle: "What We Do",
    rightSectionDescription:
      "We guide you from initial consultation to settlement with comprehensive UK immigration services.",
    rightPoints: [
      "Business immigration & entrepreneurship pathways",
      "Skilled worker visa & talent recruitment support",
      "Family & partner visa assistance",
      "Sponsor license & corporate compliance",
      "Investment visa & high-net-worth solutions",
      "Asylum, appeals & human rights applications",
    ],
    whyChooseTitle: "Why Choose Immigration Options 4 U?",
    whyChooseFeatures: [
      "UK Immigration Law Expertise",
      "Client-Focused Service Approach",
      "Proven Success Track Record",
      "Innovative Immigration Solutions",
      "Transparent & Ethical Practices",
      "Specialized Home Office Knowledge",
    ],
    commitmentTitle: "Your UK Success, Our Commitment",
    commitmentDescription:
      "At Immigration Options 4 U, your UK immigration aspirations are at the heart of our operations. We pride ourselves on our ability to offer personalized solutions, ensuring that each client receives the expertise and attention necessary to successfully navigate UK immigration and build their future.",
    joinTitle: "Join the Immigration Options 4 U Family",
    joinDescription:
      "Embark on your UK immigration journey with Immigration Options 4 U and experience the professionalism, expertise, and excellence that come with our partnership. Connect with us today to learn how we can help you achieve your UK goals.",
    ctaTitle: "Ready to Start Your UK Immigration Journey?",
    ctaDescription: "Our experts are here to guide you every step of the way.",
  },
};

const AboutUs = () => {
  const [preferredCountry, setPreferredCountry] = useState("DUBAI");

  useEffect(() => {
    const item = localStorage.getItem("preferred_country") || "DUBAI";
    setPreferredCountry(item);
  }, []);

  const content = ABOUT_CONTENT[preferredCountry] || ABOUT_CONTENT.DUBAI;

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-28 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
            {content.heroTitle}
          </h1>
          <p className="text-xl opacity-90">{content.heroSubtitle}</p>
        </motion.div>

        {/* Decorative Circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700 rounded-full blur-3xl opacity-30"></div>
      </section>

      

      {/* Introduction */}
      <section className="py-20 px-6 bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
            {content.introTitle}
          </h2>
          <p className="text-gray-700 leading-relaxed">{content.introDescription}</p>
        </motion.div>
      </section>

      {/* Why + What We Do */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Left Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-serif">
              {content.leftSectionTitle}
            </h3>
            <p className="text-gray-700 mb-4">{content.leftSectionDescription}</p>
            <ul className="space-y-3 text-gray-700">
              {content.leftPoints.map((point, idx) => (
                <li key={idx}>• {point}</li>
              ))}
            </ul>
          </motion.div>

          {/* Right Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-serif">
              {content.rightSectionTitle}
            </h3>
            <p className="text-gray-700 mb-4">{content.rightSectionDescription}</p>
            <ul className="space-y-3 text-gray-700">
              {content.rightPoints.map((point, idx) => (
                <li key={idx}>• {point}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-8 font-serif"
          >
            {content.whyChooseTitle}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {content.whyChooseFeatures.map((title, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-lg shadow-sm border"
              >
                <h4 className="font-semibold text-lg mb-2 font-serif">{title}</h4>
                <p className="text-gray-600 text-sm">
                  Excellence, reliability, and modern strategies to make your journey smooth
                  and successful.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-6 bg-blue-50">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-blue-900">
            {content.commitmentTitle}
          </h2>
          <p className="text-lg text-blue-900 mb-4">{content.commitmentDescription}</p>
          <h3 className="text-2xl md:text-3xl font-semibold font-serif text-blue-800 mt-8 mb-2">
            {content.joinTitle}
          </h3>
          <p className="text-blue-900">{content.joinDescription}</p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 font-serif">{content.ctaTitle}</h2>
          <p className="opacity-90 mb-8">{content.ctaDescription}</p>
          <a href="#contact">
            <button className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
              Contact Us Today
            </button>
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;