import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Complete Business Setup",
    subtitle: "Your Foundation for Success in Dubai",
    description:
      "Mainland, Free Zones, and Offshore: Whether you’re eyeing the vibrant mainland, the dynamic free zones, or the strategic offshore locales, we guide you through every step. From choosing the right jurisdiction to handling all legal and administrative procedures, Immigration Options 4 U ensures a smooth path to establishing your presence in Dubai.",
    image: "/consult1.webp",
  },
  {
    title: "Visa and Immigration Services",
    subtitle: "Simplifying Your Move",
    description:
      "For Entrepreneurs and Their Teams: Navigating visa applications can be complex. We simplify this process for entrepreneurs, their employees, and families, ensuring a smooth transition to Dubai’s dynamic business environment.",
    image: "/consult2.webp",
  },
  {
    title: "Corporate Compliance and Taxation",
    subtitle: "Navigating the Legal Landscape",
    description:
      "Stay Ahead of Regulations: With our expertise in corporate taxation, VAT registration, and adherence to Economic Substance Regulations (ESR), we keep your business compliant and informed, allowing you to focus on growth.",
    image: "/consult3.webp",
  },
  {
    title: "Auditing and Accounting Expertise",
    subtitle: "Keeping Your Finances in Check",
    description:
      "Accuracy and Transparency: Our team offers comprehensive internal and external auditing, along with meticulous accounting and bookkeeping services, ensuring your financials are accurate, transparent, and regulation compliant.",
    image: "/consult4.webp",
  },
  {
    title: "Legal Advisory and Documentation",
    subtitle: "Legal Excellence at Your Service",
    description:
      "Ensuring Legal Accuracy: From drafting and submitting legal documents like Memorandums of Association to managing trade licenses, our legal experts provide invaluable advice and support, keeping your business legally sound.",
    image: "/consult5.webp",
  },
  {
    title: "PRO and Document Clearing",
    subtitle: "Streamlining Your Operations",
    description:
      "Efficient and Effective: Our Public Relations Officer (PRO) services manage all aspects of document clearing and processing, ensuring your business operations run without any bureaucratic hurdles.",
    image: "/consult6.webp",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-[#f5f9ff]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[#1777fa] font-semibold tracking-wide">// OUR SERVICES</p>
        <h2 className="font-extrabold text-3xl md:text-4xl text-[#101828] mt-2 mb-4">
          Comprehensive Business Solutions in Dubai
        </h2>
        <p className="text-[#4b5563] max-w-3xl mx-auto mb-14">
          Explore our complete suite of professional services designed to make your business journey in Dubai effortless and compliant.
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
