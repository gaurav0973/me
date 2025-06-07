import React, { useState, useEffect } from "react";
import {
  Home,
  User,
  Briefcase,
  Code,
  Mail,
  FileText,
  Menu,
  X,
} from "lucide-react";

const Navigationbar = ({ onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSectionChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionChange);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 lg:left-24 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#24283b]/80 backdrop-blur-2xl border-b border-[#414868]/30 shadow-2xl shadow-[#1a1b26]/20"
          : "bg-[#24283b]/60 backdrop-blur-xl border-b border-[#414868]/20"
      }`}
    >
      {/* Gradient Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7aa2f7]/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between lg:justify-center">
          {/* Mobile menu button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden relative w-10 h-10 text-[#9aa5ce] hover:text-[#7aa2f7] rounded-xl hover:bg-[#414868]/30 transition-all duration-300 flex items-center justify-center group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#7aa2f7]/10 to-[#bb9af7]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Menu className="w-5 h-5 relative z-10" />
          </button>

          {/* Navigation links */}
          <div className="flex items-center gap-2">
            <NavLink
              icon={<Home className="w-4 h-4" />}
              text="Home"
              href="#home"
              isActive={activeSection === "home"}
            />
            <NavLink
              icon={<User className="w-4 h-4" />}
              text="About"
              href="#about"
              isActive={activeSection === "about"}
            />
            <NavLink
              icon={<Briefcase className="w-4 h-4" />}
              text="Experience"
              href="#experience"
              isActive={activeSection === "experience"}
            />
            <NavLink
              icon={<Code className="w-4 h-4" />}
              text="Projects"
              href="#projects"
              isActive={activeSection === "projects"}
            />
            <NavLink
              icon={<Mail className="w-4 h-4" />}
              text="Contact"
              href="#contact"
              isActive={activeSection === "contact"}
            />

            {/* Resume Button - Special Style */}
            <a
              href="https://docs.google.com/document/d/1PiiI_J-xkRaBM2mt1MLoDkSBgNJFEtLB2r27Y7nsfAE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 text-[#9aa5ce] hover:text-[#1a1b26] px-4 py-2 rounded-xl bg-gradient-to-r from-[#7aa2f7]/10 to-[#bb9af7]/10 hover:from-[#7aa2f7] hover:to-[#bb9af7] border border-[#7aa2f7]/30 hover:border-transparent transition-all duration-300 group overflow-hidden ml-2"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

              <FileText className="w-4 h-4 relative z-10" />
              <span className="hidden sm:inline relative z-10 font-medium">
                Resume
              </span>
            </a>
          </div>

          {/* Spacer for mobile */}
          <div className="lg:hidden w-10"></div>
        </div>
      </div>

      {/* Floating indicator */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] transform scale-x-0 origin-left transition-transform duration-300"></div>
    </nav>
  );
};

const NavLink = ({ icon, text, href, isActive }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 group overflow-hidden ${
        isActive
          ? "text-[#7aa2f7] bg-[#7aa2f7]/10 border border-[#7aa2f7]/30"
          : "text-[#9aa5ce] hover:text-[#7aa2f7] hover:bg-[#414868]/30 border border-transparent hover:border-[#414868]/50"
      }`}
    >
      {/* Active indicator */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#7aa2f7]/5 to-[#bb9af7]/5 rounded-xl"></div>
      )}

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7aa2f7]/10 to-[#bb9af7]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <span className="relative z-10 transition-transform duration-200 group-hover:scale-110">
        {icon}
      </span>
      <span className="hidden sm:inline relative z-10 font-medium text-sm">
        {text}
      </span>

      {/* Active dot indicator */}
      {isActive && (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#7aa2f7] rounded-full"></div>
      )}
    </a>
  );
};

export default Navigationbar;
