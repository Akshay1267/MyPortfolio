import React from "react";
import { education } from "../../constants";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaAward } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto relative"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-warm-200 text-stone-700 text-xs font-bold uppercase tracking-wider mb-3">
          <FaGraduationCap className="text-amber-600" />
          <span>Academic Background</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
          Education & Qualifications
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-amber-600 to-orange-500 rounded-full mx-auto mt-4"></div>
        <p className="text-stone-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          My academic foundation has shaped my problem-solving abilities, computer science principles, and continuous curiosity for software innovation.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center Line for desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-amber-500 via-warm-300 to-warm-200"></div>

        <div className="space-y-10 md:space-y-12">
          {education.map((edu, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={edu.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot for desktop */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-amber-600 shadow-warm-md items-center justify-center z-10">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                </div>

                {/* Card Container */}
                <div className="w-full md:w-1/2 md:px-8">
                  <div className="bg-white rounded-2xl p-6 sm:p-7 border border-warm-300 shadow-warm-md hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1">
                    {/* Header with Logo and Institution */}
                    <div className="flex items-start space-x-4 mb-4">
                      {edu.img && (
                        <div className="w-14 h-14 rounded-xl border border-warm-200 p-1 bg-white shadow-warm-sm flex-shrink-0 flex items-center justify-center overflow-hidden">
                          <img
                            src={edu.img}
                            alt={edu.school}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold mb-1">
                          {edu.date}
                        </span>
                        <h3 className="text-lg font-bold text-stone-900 leading-snug">
                          {edu.degree}
                        </h3>
                        <h4 className="text-sm font-semibold text-stone-600 mt-0.5">
                          {edu.school}
                        </h4>
                      </div>
                    </div>

                    {/* Location & Grade Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
                      {edu.location && (
                        <span className="inline-flex items-center text-stone-500 bg-warm-50 px-2.5 py-1 rounded-md border border-warm-200">
                          <FaMapMarkerAlt className="mr-1.5 text-amber-600" />
                          {edu.location}
                        </span>
                      )}
                      {edu.grade && (
                        <span className="inline-flex items-center font-bold text-stone-800 bg-warm-100 px-2.5 py-1 rounded-md border border-warm-200">
                          <FaAward className="mr-1.5 text-amber-700" />
                          Grade: {edu.grade}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {edu.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
