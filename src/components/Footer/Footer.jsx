import React from "react";
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { PersonalDetails } from "../../constants";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Certifications", id: "certifications" },
    { name: "Events", id: "events" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={18} />, link: PersonalDetails.linkedin, label: "LinkedIn" },
    { icon: <FaGithub size={18} />, link: PersonalDetails.github, label: "GitHub" },
    { icon: <FaXTwitter size={17} />, link: PersonalDetails.x || PersonalDetails.twitter, label: "X (Twitter)" },
    { icon: <SiLeetcode size={18} />, link: PersonalDetails.leetcode, label: "LeetCode" },
    { icon: <FaYoutube size={18} />, link: PersonalDetails.youtube, label: "YouTube" },
    { icon: <FaInstagram size={18} />, link: PersonalDetails.instagram, label: "Instagram" },
  ];

  return (
    <footer className="bg-white border-t border-warm-300 py-12 px-4 sm:px-8 lg:px-16 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Brand */}
        <div
          onClick={() => handleScroll("about")}
          className="text-2xl font-bold tracking-tight cursor-pointer flex items-center mb-3 group"
        >
          <span className="text-amber-600 font-mono text-2xl mr-0.5">&lt;</span>
          <span className="text-stone-900 font-extrabold">Akshay</span>
          <span className="text-amber-500 mx-0.5">/</span>
          <span className="text-stone-700 font-bold">Jain</span>
          <span className="text-amber-600 font-mono text-2xl ml-0.5">&gt;</span>
        </div>

        <p className="text-stone-500 text-sm max-w-md mb-6">
          Full Stack MERN Developer & MCA Student at MIET Meerut. Building scalable software with intuitive user experiences.
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-sm font-semibold text-stone-600 hover:text-amber-700 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="p-3 rounded-full bg-warm-100 text-stone-700 hover:text-white hover:bg-amber-600 transition-all duration-200 shadow-warm-sm hover:scale-105"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-3xl border-t border-warm-200 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-2">
          <p>© {new Date().getFullYear()} Akshay Jain. Built with React & Tailwind CSS.</p>
          <p>Meerut, Uttar Pradesh, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
