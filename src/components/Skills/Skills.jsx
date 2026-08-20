import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { FaCode, FaServer, FaTerminal, FaTools, FaBookOpen } from "react-icons/fa";

const getCategoryIcon = (title) => {
  if (title.includes("Frontend")) return <FaCode className="text-amber-600" />;
  if (title.includes("Backend")) return <FaServer className="text-orange-600" />;
  if (title.includes("Languages")) return <FaTerminal className="text-amber-700" />;
  if (title.includes("Tools")) return <FaTools className="text-stone-700" />;
  return <FaBookOpen className="text-amber-600" />;
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto relative"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-warm-200 text-stone-700 text-xs font-bold uppercase tracking-wider mb-3">
          <span>Technical Expertise</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
          Skills & Technologies
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-amber-600 to-orange-500 rounded-full mx-auto mt-4"></div>
        <p className="text-stone-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          A comprehensive overview of my technical toolset, modern frameworks, backend systems, and computer science foundations.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {SkillsInfo.map((category, idx) => (
          <div
            key={category.title}
            className="bg-white/95 rounded-2xl p-6 sm:p-7 border border-warm-300 shadow-warm-md hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-warm-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-warm-100 border border-warm-200">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                    {category.title}
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-warm-100 text-stone-500 border border-warm-200">
                  {category.skills.length}
                </span>
              </div>

              {/* Skill Badges */}
              <div className="grid grid-cols-2 gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-2.5 bg-warm-50 hover:bg-amber-50/80 border border-warm-200 hover:border-amber-300/80 rounded-xl p-2.5 transition-all duration-200 group"
                  >
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} icon`}
                        className="w-full h-full object-contain filter group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-stone-700 group-hover:text-stone-900 truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-5 pt-3 flex items-center justify-between text-xs text-stone-400 font-medium">
              <span>Production Ready</span>
              <span className="text-amber-600 font-bold">•</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
