import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profilePic.png';
import { PersonalDetails } from '../../constants';
import { FiDownload, FiArrowRight, FiMapPin, FiMail, FiCheckCircle } from 'react-icons/fi';
import { FaGraduationCap, FaCode, FaAward, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="about"
      className="relative pt-24 pb-16 md:py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Side Info */}
        <div className="w-full lg:w-3/5 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-semibold mb-6 shadow-warm-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <span>MCA Student at MIET • Open for Opportunities</span>
          </div>

          {/* Greeting & Name */}
          <h1 className="text-stone-600 text-lg sm:text-xl font-medium tracking-wide mb-1">
            Hello, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight mb-4">
            {PersonalDetails.name}
          </h2>

          {/* Typing Effect Subtitle */}
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-stone-700 flex flex-wrap items-center gap-2">
            <span>Passionate</span>
            <span className="text-amber-700 bg-amber-100/70 px-3 py-1 rounded-lg border border-amber-200">
              <ReactTypingEffect
                text={[
                  'Full Stack MERN Developer',
                  'MCA Scholar @ MIET Meerut',
                  'Web & API Specialist',
                  'UI/UX Problem Solver'
                ]}
                speed={80}
                eraseSpeed={45}
                typingDelay={400}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-amber-700 font-bold">{cursor}</span>
                )}
              />
            </span>
          </div>

          {/* Bio Description */}
          <p className="text-base sm:text-lg text-stone-600 mb-8 leading-relaxed max-w-2xl font-normal">
            {PersonalDetails.aboutBio}
          </p>

          {/* Quick Info Chips */}
          <div className="flex flex-wrap gap-3 mb-8 text-sm text-stone-600">
            <div className="flex items-center space-x-1.5 bg-white px-3.5 py-1.5 rounded-lg border border-warm-300 shadow-warm-sm">
              <FiMapPin className="text-amber-600" />
              <span>{PersonalDetails.location}</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-white px-3.5 py-1.5 rounded-lg border border-warm-300 shadow-warm-sm">
              <FiMail className="text-amber-600" />
              <span>{PersonalDetails.email}</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-white px-3.5 py-1.5 rounded-lg border border-warm-300 shadow-warm-sm">
              <FaGraduationCap className="text-amber-600" />
              <span>MCA (2025–2027)</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PersonalDetails.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 hover:from-amber-700 hover:to-orange-600 shadow-warm-amber hover:shadow-warm-xl transition-all transform hover:-translate-y-0.5 text-base"
            >
              <FiDownload className="text-lg" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => handleScrollTo("projects")}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-stone-800 bg-white hover:bg-warm-100 border border-warm-300 shadow-warm-sm hover:shadow-warm-md transition-all transform hover:-translate-y-0.5 text-base"
            >
              <span>Explore Projects</span>
              <FiArrowRight className="text-stone-500" />
            </button>

            <button
              onClick={() => handleScrollTo("contact")}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100/80 border border-amber-200/80 shadow-warm-sm transition-all text-base"
            >
              <span>Let's Talk</span>
            </button>
          </div>
        </div>

        {/* Right Side: Profile Card / Photo */}
        <div className="w-full lg:w-2/5 flex flex-col items-center justify-center">
          <div className="relative">
            {/* Ambient Warm Glow Rings */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-400/30 to-orange-400/20 rounded-full blur-2xl -z-10 animate-pulse"></div>

            <Tilt
              className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-b from-amber-300 via-warm-200 to-warm-400 shadow-warm-xl border-4 border-white"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.03}
              transitionSpeed={800}
              gyroscope={true}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-warm-200 shadow-inner">
                <img
                  src={profileImage}
                  alt={PersonalDetails.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </Tilt>

            {/* Float Badge 1 */}
            <div className="absolute -bottom-2 -left-4 sm:left-0 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-warm-300 shadow-warm-lg flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-amber-100 text-amber-800">
                <FaLaptopCode size={18} />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-medium">Specialization</p>
                <p className="text-sm font-bold text-stone-900">MERN Stack</p>
              </div>
            </div>

            {/* Float Badge 2 */}
            <div className="absolute -top-2 -right-4 sm:right-0 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-warm-300 shadow-warm-lg flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-orange-100 text-orange-800">
                <FaGraduationCap size={18} />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-medium">Master's Degree</p>
                <p className="text-sm font-bold text-stone-900">MCA @ MIET</p>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-10">
            {PersonalDetails.stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/85 backdrop-blur-sm p-3.5 rounded-xl border border-warm-300 text-center shadow-warm-sm hover:shadow-warm-md transition-shadow"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-amber-700">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-stone-500 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
