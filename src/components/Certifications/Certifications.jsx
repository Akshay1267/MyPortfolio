import React from "react";
import { certifications } from "../../constants";
import { FaAward, FaCheckCircle, FaTrophy, FaCode } from "react-icons/fa";
import { SiAmazonwebservices, SiOracle } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const getCertIcon = (iconName) => {
  switch (iconName) {
    case "aws":
      return <SiAmazonwebservices className="text-amber-600 text-3xl" />;
    case "oracle":
      return <SiOracle className="text-red-600 text-3xl" />;
    case "hackathon":
      return <FaTrophy className="text-amber-500 text-2xl" />;
    case "dsa":
      return <FaCode className="text-stone-700 text-2xl" />;
    default:
      return <FaAward className="text-amber-600 text-2xl" />;
  }
};

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto relative"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
          <FaAward className="text-amber-600" />
          <span>Accreditations & Honors</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
          Certifications & Achievements
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-amber-600 to-orange-500 rounded-full mx-auto mt-4"></div>
        <p className="text-stone-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Industry-recognized certifications and competitive technical milestones demonstrating proficiency across Cloud, AI, and Algorithms.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-white rounded-2xl p-6 sm:p-7 border border-warm-300 shadow-warm-md hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-xl bg-warm-50 border border-warm-200 flex items-center justify-center flex-shrink-0 shadow-warm-sm">
                    {getCertIcon(cert.icon)}
                  </div>
                  <div>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-warm-100 text-stone-600 border border-warm-200">
                      {cert.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-1 leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Issuer & Link */}
              <div className="flex items-center justify-between flex-wrap gap-2 text-sm font-semibold text-amber-700 mb-3">
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-amber-600" />
                  <span>Issued by {cert.issuer}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-stone-600 text-sm leading-relaxed mb-5">
                {cert.description}
              </p>
            </div>

            {/* Skills & Credential Link */}
            <div className="pt-4 border-t border-warm-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                  Core Competencies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-amber-50/70 text-amber-900 border border-amber-200/60 px-2.5 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start sm:self-end flex-shrink-0 inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 shadow-warm-sm transition-all transform hover:-translate-y-0.5"
                >
                  <span>View Certificate</span>
                  <FiExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
