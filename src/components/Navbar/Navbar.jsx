import { useState, useEffect } from "react";
import { FiMenu, FiX, FiExternalLink } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { PersonalDetails } from "../../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["about", "skills", "projects", "education", "certifications", "events", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

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

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "events", label: "Events" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 lg:px-16 ${
        isScrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-warm-300/80 shadow-warm-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => handleMenuItemClick("about")}
          className="text-xl font-bold tracking-tight cursor-pointer flex items-center group"
        >
          <span className="text-amber-600 font-mono text-xl mr-0.5 group-hover:-translate-x-0.5 transition-transform">&lt;</span>
          <span className="text-stone-900 font-extrabold">Akshay</span>
          <span className="text-amber-500 mx-0.5">/</span>
          <span className="text-stone-700 font-bold">Jain</span>
          <span className="text-amber-600 font-mono text-xl ml-0.5 group-hover:translate-x-0.5 transition-transform">&gt;</span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-warm-200/60 p-1.5 rounded-full border border-warm-300/70 shadow-sm">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-white text-amber-700 shadow-warm-sm font-semibold"
                    : "text-stone-600 hover:text-stone-900 hover:bg-white/60"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons & CV CTA */}
        <div className="hidden sm:flex items-center space-x-3">
          <div className="flex items-center space-x-2 border-r border-warm-300 pr-3">
            <a
              href={PersonalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="p-2 rounded-xl text-stone-600 hover:text-amber-700 hover:bg-amber-50 transition-colors border border-transparent hover:border-amber-200"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={PersonalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="p-2 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors border border-transparent hover:border-stone-200"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={PersonalDetails.x || PersonalDetails.twitter}
              target="_blank"
              rel="noopener noreferrer"
              title="X (Twitter) Profile"
              className="p-2 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors border border-transparent hover:border-stone-200"
            >
              <FaXTwitter size={19} />
            </a>
            <a
              href={PersonalDetails.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode Profile"
              className="p-2 rounded-xl text-stone-600 hover:text-amber-600 hover:bg-amber-50 transition-colors border border-transparent hover:border-amber-200"
            >
              <SiLeetcode size={19} />
            </a>
          </div>

          <a
            href={PersonalDetails.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 shadow-warm-sm hover:shadow-warm-amber transition-all transform hover:-translate-y-0.5"
          >
            <span>Resume</span>
            <FiExternalLink size={14} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-2">
          <a
            href={PersonalDetails.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-500 shadow-warm-sm"
          >
            Resume
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-warm-200/80 text-stone-800 hover:bg-warm-300 transition-colors focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden mt-3 max-w-7xl mx-auto bg-white/95 backdrop-blur-xl border border-warm-300 rounded-2xl shadow-warm-xl p-5 animate-in fade-in slide-in-from-top duration-200">
          <ul className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-amber-50 text-amber-800 font-bold border-l-4 border-amber-600"
                      : "text-stone-700 hover:bg-warm-100"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t border-warm-200 flex items-center justify-between">
            <div className="flex space-x-2">
              <a
                href={PersonalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="p-2 rounded-lg bg-warm-100 text-stone-700 hover:text-amber-700"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={PersonalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="p-2 rounded-lg bg-warm-100 text-stone-700 hover:text-stone-900"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={PersonalDetails.x || PersonalDetails.twitter}
                target="_blank"
                rel="noopener noreferrer"
                title="X Profile"
                className="p-2 rounded-lg bg-warm-100 text-stone-700 hover:text-stone-900"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href={PersonalDetails.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode Profile"
                className="p-2 rounded-lg bg-warm-100 text-stone-700 hover:text-amber-600"
              >
                <SiLeetcode size={18} />
              </a>
            </div>

            <a
              href={PersonalDetails.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-500 shadow-warm-sm"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
