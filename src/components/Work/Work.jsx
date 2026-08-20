import React, { useState } from "react";
import { projects } from "../../constants";
import { FiExternalLink, FiGithub, FiX, FiCheck, FiLayers, FiStar } from "react-icons/fi";
import { FaLaptopCode, FaRegCheckCircle } from "react-icons/fa";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Featured", "Full Stack", "AI & Tools", "Frontend"];

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Featured") return project.featured;
    return project.category === filter;
  });

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto relative"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
          <FiStar className="text-amber-600" />
          <span>Portfolio Showcase</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
          Featured Projects
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-amber-600 to-orange-500 rounded-full mx-auto mt-4"></div>
        <p className="text-stone-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          A collection of full-stack web applications, AI tools, and frontend systems designed with a focus on usability, reliability, and modern engineering standards.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              filter === cat
                ? "bg-stone-900 text-white shadow-warm-md"
                : "bg-white text-stone-600 hover:bg-warm-100 hover:text-stone-900 border border-warm-300 shadow-warm-sm"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-warm-md hover:shadow-warm-lg hover:-translate-y-1.5 ${
              project.featured ? "border-amber-300 ring-1 ring-amber-300/60" : "border-warm-300"
            }`}
          >
            <div className="p-6 sm:p-7">
              {/* Card Header & Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-warm-100 text-stone-700 border border-warm-200">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="inline-flex items-center space-x-1 text-xs font-extrabold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                    <FiStar size={11} className="fill-amber-500 text-amber-500" />
                    <span>Featured</span>
                  </span>
                )}
                {project.year && (
                  <span className="text-xs text-stone-400 font-medium ml-auto">
                    {project.year}
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-stone-900 mb-1 group-hover:text-amber-700">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-xs font-semibold text-amber-700 mb-3">
                  {project.subtitle}
                </p>
              )}

              {/* Description */}
              <p className="text-stone-600 text-sm leading-relaxed mb-5 line-clamp-3">
                {project.description}
              </p>

              {/* Highlights Bullet Points */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.slice(0, 2).map((item, index) => (
                    <li key={index} className="flex items-start text-xs text-stone-600">
                      <FaRegCheckCircle className="text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-2">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-warm-100">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-warm-50 text-stone-600 text-xs font-medium rounded-md px-2.5 py-0.5 border border-warm-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-4 sm:px-7 sm:pb-6 pt-0 bg-white flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedProject(project)}
                className="text-xs font-bold text-stone-600 hover:text-stone-900 underline underline-offset-4"
              >
                View Details
              </button>

              <div className="flex items-center space-x-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Source Code on GitHub"
                    className="p-2 rounded-xl text-stone-700 bg-warm-100 hover:bg-stone-900 hover:text-white border border-warm-200 transition-colors"
                  >
                    <FiGithub size={16} />
                  </a>
                )}
                {project.webapp && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open Live Application"
                    className="inline-flex items-center space-x-1 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 shadow-warm-sm transition-all"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl shadow-warm-xl w-full max-w-2xl overflow-hidden relative border border-warm-300 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 pb-4 border-b border-warm-200 bg-warm-50">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-warm-200 text-stone-800">
                    {selectedProject.category}
                  </span>
                  {selectedProject.year && (
                    <span className="text-xs text-stone-500 font-medium">
                      {selectedProject.year}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-extrabold text-stone-900">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-warm-200 transition-colors"
              >
                <FiX size={22} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5">
              {selectedProject.subtitle && (
                <p className="text-sm font-semibold text-amber-700">
                  {selectedProject.subtitle}
                </p>
              )}

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                  About Project
                </h4>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.highlights && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                    Key Highlights & Architecture
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((point, index) => (
                      <li key={index} className="flex items-start text-sm text-stone-700">
                        <FaRegCheckCircle className="text-amber-600 mr-2.5 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-warm-100 text-stone-800 text-xs font-semibold rounded-lg px-3 py-1 border border-warm-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 pt-4 border-t border-warm-200 bg-warm-50/50 flex flex-wrap gap-3 justify-end">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-bold text-stone-700 bg-white hover:bg-stone-100 border border-warm-300 shadow-warm-sm transition-colors"
                >
                  <FiGithub size={17} />
                  <span>GitHub Repository</span>
                </a>
              )}
              {selectedProject.webapp && (
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 shadow-warm-sm transition-all"
                >
                  <span>Launch Live App</span>
                  <FiExternalLink size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
