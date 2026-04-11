import React, { useState, useEffect } from "react";
import { Users, Briefcase, TrendingUp, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const TEAM_CONTENT = {
  DUBAI: {
    subtitle: "// OUR EXPERT TEAM",
    heading: "Meet Your Guides to Business Success",
    description: "Navigating Dubai's Business Terrain with Expertise",
    closingMessage:
      "With Immigration Options 4 U's expert team at your helm, you can confidently navigate the path to establishing a successful business in Dubai.",
    features: [
      {
        icon: <Users className="w-8 h-8 text-blue-600" />,
        title: "A Team of Pioneers",
        description:
          "At Immigration Options 4 U, our team is our greatest asset. Comprising seasoned professionals with extensive knowledge and experience, our experts are well-versed in the nuances of Dubai's business environment.",
      },
      {
        icon: <Briefcase className="w-8 h-8 text-blue-600" />,
        title: "Diverse Expertise for Comprehensive Support",
        description:
          "From legal mavens and financial wizards to strategic consultants and compliance specialists, our team brings a diverse range of expertise—ensuring every aspect of your business setup is meticulously managed.",
      },
      {
        icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
        title: "Dedicated Advisors at Your Service",
        description:
          "Each team member is committed to providing personalized guidance, ensuring that your business setup journey is smooth, efficient, and tailored to your specific needs.",
      },
      {
        icon: <BookOpen className="w-8 h-8 text-blue-600" />,
        title: "Staying Ahead with Continuous Learning",
        description:
          "Our team stays updated with the latest trends and regulations in Dubai's business landscape, ensuring that our clients always receive the most current and effective advice.",
      },
    ],
  },
  HUNGARY: {
    subtitle: "// OUR EXPERT TEAM",
    heading: "Meet Your Gateway to European Residency",
    description: "Navigating Hungarian Golden Visa with Expertise",
    closingMessage:
      "With Immigration Options 4 U's expert team guiding you, you can confidently secure your Hungarian Golden Visa and achieve European residency with ease.",
    features: [
      {
        icon: <Users className="w-8 h-8 text-blue-600" />,
        title: "Expert Investment Consultants",
        description:
          "Our team comprises seasoned investment professionals with deep expertise in European residency programs and Hungarian Golden Visa pathways. We bring extensive knowledge of investment strategies tailored to your business and personal goals.",
      },
      {
        icon: <Briefcase className="w-8 h-8 text-blue-600" />,
        title: "EU & Hungarian Immigration Specialists",
        description:
          "From EU regulatory experts and Hungarian immigration specialists to financial advisors and compliance officers, our team brings comprehensive expertise—ensuring every aspect of your residency application is expertly handled.",
      },
      {
        icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
        title: "Dedicated Case Managers",
        description:
          "Each team member is committed to providing personalized case management, ensuring your Golden Visa application journey is smooth, efficient, and tailored to your unique investment profile and family needs.",
      },
      {
        icon: <BookOpen className="w-8 h-8 text-blue-600" />,
        title: "Current EU & Hungarian Expertise",
        description:
          "Our team stays updated with the latest EU regulations and Hungarian Golden Visa program changes, ensuring that our clients receive the most current and effective investment and immigration advice.",
      },
    ],
  },
  UK: {
    subtitle: "// OUR EXPERT TEAM",
    heading: "Meet Your UK Immigration Experts",
    description: "Navigating UK Immigration Law with Expertise",
    closingMessage:
      "With Immigration Options 4 U's expert team at your side, you can confidently navigate the path to achieving your UK immigration goals and building your future in the United Kingdom.",
    features: [
      {
        icon: <Users className="w-8 h-8 text-blue-600" />,
        title: "Immigration Law Specialists",
        description:
          "At Immigration Options 4 U, our team includes certified immigration law specialists with extensive experience in UK immigration regulations. Our experts are well-versed in all aspects of UK immigration pathways and Home Office procedures.",
      },
      {
        icon: <Briefcase className="w-8 h-8 text-blue-600" />,
        title: "Multi-Sector Expertise",
        description:
          "From business immigration lawyers and family visa experts to asylum advocates and employment specialists, our team brings diverse expertise—ensuring comprehensive support across all immigration categories and visa routes.",
      },
      {
        icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
        title: "Dedicated Immigration Advisors",
        description:
          "Each team member is dedicated to providing personalized legal guidance, ensuring your UK immigration journey is smooth, efficient, and tailored to your specific circumstances and aspirations.",
      },
      {
        icon: <BookOpen className="w-8 h-8 text-blue-600" />,
        title: "Current Home Office Expertise",
        description:
          "Our team continuously monitors changes in UK immigration law and Home Office requirements, ensuring our clients always receive the most up-to-date advice and strategic guidance for successful applications.",
      },
    ],
  },
};

export default function TeamSection() {
  const [preferredCountry, setPreferredCountry] = useState("DUBAI");

  useEffect(() => {
    const item = localStorage.getItem("preferred_country") || "DUBAI";
    setPreferredCountry(item);
  }, []);

  const content = TEAM_CONTENT[preferredCountry] || TEAM_CONTENT.DUBAI;
  const features = content.features;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 text-center">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-blue-600 font-semibold tracking-wide mb-3 font-serif"
        >
          {content.subtitle}
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-[#0a0e27] mb-5 font-serif"
        >
          {content.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 text-lg md:text-xl mb-14"
        >
          {content.description}
        </motion.p>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0a0e27] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-16 bg-blue-600 text-white p-8 rounded-2xl shadow-md"
        >
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            With{" "}
            <span className="font-semibold">Immigration Options 4 U's</span>{" "}
            expert team at your helm, {content.closingMessage.split("expert team at your helm, ")[1]}
          </p>
        </motion.div>
      </div>
    </section>
  );
}