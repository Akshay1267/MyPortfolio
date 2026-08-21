import React, { useState } from "react";
import { techEvents } from "../../constants";
import { 
  FiCalendar, 
  FiMapPin, 
  FiExternalLink, 
  FiCheckCircle, 
  FiUsers, 
  FiAward, 
  FiBookmark,
  FiActivity
} from "react-icons/fi";
import { FaTrophy, FaLaptopCode, FaMicrophoneAlt, FaChalkboardTeacher, FaRocket } from "react-icons/fa";

const getCategoryIcon = (category) => {
  switch (category) {
    case "Hackathons":
      return <FaTrophy className="text-amber-600" />;
    case "Conferences":
      return <FaMicrophoneAlt className="text-blue-600" />;
    case "Workshops":
      return <FaChalkboardTeacher className="text-emerald-600" />;
    case "Bootcamps":
      return <FaRocket className="text-purple-600" />;
    default:
      return <FaLaptopCode className="text-stone-700" />;
  }
};

const getCategoryBadgeClass = (category) => {
  switch (category) {
    case "Hackathons":
      return "bg-amber-50 text-amber-900 border-amber-200";
    case "Conferences":
      return "bg-blue-50 text-blue-900 border-blue-200";
    case "Workshops":
      return "bg-emerald-50 text-emerald-900 border-emerald-200";
    case "Bootcamps":
      return "bg-purple-50 text-purple-900 border-purple-200";
    default:
      return "bg-warm-100 text-stone-700 border-warm-200";
  }
};

const Events = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(techEvents.map((item) => item.category)))];

  const filteredEvents = techEvents.filter((item) => {
    if (filter === "All") return true;
    return item.category === filter;
  });

  return (
    <section
      id="events"
      className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto relative"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
          <FiActivity className="text-amber-600" />
          <span>Community & Participation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
          Tech Events & Hackathons
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-amber-600 to-orange-500 rounded-full mx-auto mt-4"></div>
        <p className="text-stone-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          A showcase of hackathons, developer conferences, tech summits, and hands-on workshops I have attended to collaborate, network, and master modern technologies.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const count = cat === "All" 
            ? techEvents.length 
            : techEvents.filter((e) => e.category === cat).length;

          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center space-x-2 ${
                filter === cat
                  ? "bg-stone-900 text-white shadow-warm-md"
                  : "bg-white text-stone-600 hover:bg-warm-100 hover:text-stone-900 border border-warm-300 shadow-warm-sm"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                  filter === cat
                    ? "bg-stone-700 text-stone-100"
                    : "bg-warm-200 text-stone-600"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl p-6 sm:p-7 border border-warm-300 shadow-warm-md hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              {/* Card Top: Category Badge & Status */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center space-x-2">
                  <span
                    className={`inline-flex items-center space-x-1.5 text-xs font-bold px-3 py-1 rounded-full border ${getCategoryBadgeClass(
                      event.category
                    )}`}
                  >
                    {getCategoryIcon(event.category)}
                    <span>{event.category}</span>
                  </span>
                  <span className="text-xs font-medium text-stone-500 bg-warm-100 px-2.5 py-1 rounded-full border border-warm-200">
                    {event.role}
                  </span>
                </div>

                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {event.status}
                </span>
              </div>

              {/* Title & Organizer */}
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-1 leading-snug">
                {event.title}
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-3 flex items-center space-x-1.5">
                <FiUsers className="text-amber-600" />
                <span>Organized by {event.organizer}</span>
              </p>

              {/* Meta info: Date & Location */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 mb-4 pb-3 border-b border-warm-200">
                <div className="flex items-center space-x-1.5">
                  <FiCalendar className="text-amber-600" />
                  <span>{event.date}</span>
                </div>
                <span className="text-stone-300">•</span>
                <div className="flex items-center space-x-1.5">
                  <FiMapPin className="text-amber-600" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                {event.description}
              </p>

              {/* Highlights / Key Takeaways */}
              {event.highlights && event.highlights.length > 0 && (
                <div className="mb-5 bg-warm-50/80 rounded-xl p-3.5 border border-warm-200/80">
                  <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                    <FiBookmark className="text-amber-600" />
                    <span>Key Takeaways & Experience</span>
                  </p>
                  <ul className="space-y-1.5">
                    {event.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 text-xs text-stone-700 leading-snug"
                      >
                        <FiCheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Bottom: Tags & Action Link */}
            <div className="pt-4 border-t border-warm-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {event.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium bg-white text-stone-700 border border-warm-300 px-2.5 py-1 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {event.link && (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100/80 border border-amber-200/80 px-3.5 py-1.5 rounded-lg transition-colors flex-shrink-0"
                >
                  <span>{event.linkText || "View Details"}</span>
                  <FiExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Community Engagement Banner */}
      <div className="mt-12 bg-gradient-to-r from-warm-100 via-amber-50/60 to-orange-50/50 rounded-2xl p-6 sm:p-8 border border-warm-300 shadow-warm-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center flex-shrink-0 shadow-warm-sm">
            <FiAward size={24} />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-stone-900">
              Passionate About Tech Communities & Lifelong Learning
            </h4>
            <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
              Always enthusiastic to attend upcoming developer fests, hackathons, and collaborate on cutting-edge software solutions.
            </p>
          </div>
        </div>
        <a
          href="#contact"
          className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-stone-900 hover:bg-stone-800 transition-all flex-shrink-0 shadow-warm-sm"
        >
          Invite to Event / Connect
        </a>
      </div>
    </section>
  );
};

export default Events;
