import React, { useState, useEffect } from "react";
import {
  Github,
  Youtube,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  FileText,
  MessageSquare,
  ExternalLink,
  Zap,
  Coffee,
  Heart,
  Sparkles,
  Circle,
} from "lucide-react";

const Sidebar = ({ isOpen }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <aside
      className={`fixed left-0 top-0 w-24 lg:w-24 h-screen bg-gradient-to-br from-[#24283b]/95 via-[#24283b]/90 to-[#1a1b26]/95 backdrop-blur-2xl border-r border-[#414868]/30 text-[#c0caf5] overflow-hidden z-40 transform transition-all duration-700 ease-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 shadow-2xl shadow-[#1a1b26]/50`}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7aa2f7]/3 via-transparent via-50% to-[#bb9af7]/3 pointer-events-none"></div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 left-8 w-2 h-2 bg-[#7aa2f7]/20 rounded-full animate-pulse"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-32 left-4 w-1 h-1 bg-[#bb9af7]/30 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-56 left-10 w-1.5 h-1.5 bg-[#7aa2f7]/15 rounded-full animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-80 left-6 w-1 h-1 bg-[#bb9af7]/25 rounded-full animate-ping"
          style={{ animationDelay: "6s" }}
        ></div>
      </div>

      {/* Side Accent Lines */}
      <div className="absolute left-0 top-20 bottom-20 w-px bg-gradient-to-b from-transparent via-[#7aa2f7]/30 to-transparent"></div>
      <div className="absolute right-0 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-[#bb9af7]/20 to-transparent"></div>

      {/* Logo/Brand Section */}
      <div className="relative p-5 border-b border-[#414868]/20 flex flex-col items-center">
        <a
          href="/"
          className="relative w-14 h-14 bg-gradient-to-br from-[#7aa2f7] via-[#7aa2f7] to-[#bb9af7] text-[#1a1b26] rounded-3xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-500 shadow-xl hover:shadow-[#7aa2f7]/40 hover:shadow-2xl group overflow-hidden"
          title="Gaurav Maurya"
          onMouseEnter={() => setHoveredIcon("logo")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          {/* Multiple Shine Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-transparent translate-x-[200%] group-hover:translate-x-[-200%] transition-transform duration-1200"></div>

          {/* Pulsing Ring */}
          <div className="absolute inset-0 rounded-3xl border-2 border-white/20 scale-100 group-hover:scale-125 opacity-100 group-hover:opacity-0 transition-all duration-500"></div>

          <Zap className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
        </a>

        {/* Time Display */}
        <div className="mt-3 text-xs text-[#9aa5ce]/70 font-mono tracking-wider">
          {timeString}
        </div>
      </div>

      {/* Social Links Grid */}
      <div className="relative py-6 flex flex-col items-center space-y-2">
        <SocialLink
          icon={<Github className="w-5 h-5" />}
          href="https://github.com/yourusername"
          title="GitHub"
          color="hover:bg-[#333] hover:text-white"
          onHover={() => setHoveredIcon("github")}
          isHovered={hoveredIcon === "github"}
        />

        <SocialLink
          icon={<Youtube className="w-5 h-5" />}
          href="https://youtube.com/@yourchannel"
          title="YouTube"
          color="hover:bg-[#ff0000] hover:text-white"
          onHover={() => setHoveredIcon("youtube")}
          isHovered={hoveredIcon === "youtube"}
        />

        <SocialLink
          icon={<Linkedin className="w-5 h-5" />}
          href="https://linkedin.com/in/yourhandle"
          title="LinkedIn"
          color="hover:bg-[#0077b5] hover:text-white"
          onHover={() => setHoveredIcon("linkedin")}
          isHovered={hoveredIcon === "linkedin"}
        />

        <SocialLink
          icon={<Twitter className="w-5 h-5" />}
          href="https://twitter.com/yourusername"
          title="Twitter"
          color="hover:bg-[#1da1f2] hover:text-white"
          onHover={() => setHoveredIcon("twitter")}
          isHovered={hoveredIcon === "twitter"}
        />

        <SocialLink
          icon={<Instagram className="w-5 h-5" />}
          href="https://instagram.com/yourusername"
          title="Instagram"
          color="hover:bg-gradient-to-br hover:from-[#405de6] hover:via-[#5851db] hover:to-[#e1306c] hover:text-white"
          onHover={() => setHoveredIcon("instagram")}
          isHovered={hoveredIcon === "instagram"}
        />

        <SocialLink
          icon={<MessageSquare className="w-5 h-5" />}
          href="https://discord.gg/yourserver"
          title="Discord"
          color="hover:bg-[#5865f2] hover:text-white"
          onHover={() => setHoveredIcon("discord")}
          isHovered={hoveredIcon === "discord"}
        />

        {/* Animated Divider */}
        <div className="relative w-10 h-8 flex items-center justify-center my-2">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#414868] to-transparent"></div>
          <div className="absolute w-2 h-2 bg-[#7aa2f7] rounded-full opacity-60 animate-pulse"></div>
          <Sparkles
            className="absolute w-3 h-3 text-[#bb9af7]/40 animate-spin"
            style={{ animationDuration: "8s" }}
          />
        </div>

        <SocialLink
          icon={<Mail className="w-5 h-5" />}
          href="mailto:gaurav@example.com"
          title="Email"
          color="hover:bg-[#ea4335] hover:text-white"
          onHover={() => setHoveredIcon("mail")}
          isHovered={hoveredIcon === "mail"}
        />

        <SocialLink
          icon={<FileText className="w-5 h-5" />}
          href="https://docs.google.com/document/d/1PiiI_J-xkRaBM2mt1MLoDkSBgNJFEtLB2r27Y7nsfAE/edit?usp=sharing"
          title="Resume"
          color="hover:bg-[#7aa2f7] hover:text-[#1a1b26]"
          onHover={() => setHoveredIcon("resume")}
          isHovered={hoveredIcon === "resume"}
        />

        <SocialLink
          icon={<ExternalLink className="w-5 h-5" />}
          href="https://yourwebsite.com"
          title="Portfolio"
          color="hover:bg-[#bb9af7] hover:text-[#1a1b26]"
          onHover={() => setHoveredIcon("portfolio")}
          isHovered={hoveredIcon === "portfolio"}
        />
      </div>

      {/* Status & Info Section */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4">
        {/* Availability Status with Animation */}
        <div className="relative group cursor-pointer">
          <div className="relative w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50">
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute inset-0.5 bg-green-300 rounded-full"></div>
          </div>

          {/* Enhanced Tooltip */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
            <div className="bg-[#1a1b26]/90 backdrop-blur-sm text-[#c0caf5] text-xs px-3 py-2 rounded-lg whitespace-nowrap border border-[#414868]/50 shadow-xl">
              <div className="flex items-center gap-2">
                <Circle className="w-2 h-2 text-green-400 fill-current" />
                Available for work
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#1a1b26] rotate-45 border-r border-b border-[#414868]/50"></div>
            </div>
          </div>
        </div>

        {/* Fun Elements */}
        <div className="flex items-center space-x-2">
          <Coffee
            className="w-4 h-4 text-[#9aa5ce]/60 hover:text-[#7aa2f7] transition-all duration-300 hover:scale-110 cursor-pointer"
            title="Fueled by coffee"
          />
          <Heart
            className="w-3 h-3 text-[#bb9af7]/40 hover:text-[#bb9af7] transition-all duration-300 hover:scale-125 cursor-pointer animate-pulse"
            title="Made with love"
          />
        </div>

        {/* Signature */}
        <div className="text-[10px] text-[#9aa5ce]/40 font-mono tracking-wider transform rotate-90 origin-center">
          GM
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Mesh */}
        <div className="absolute top-1/4 left-1/2 w-16 h-16 bg-[#7aa2f7]/5 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-12 h-12 bg-[#bb9af7]/5 rounded-full blur-lg animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Moving Particles */}
        <div
          className="absolute top-20 left-2 w-0.5 h-0.5 bg-[#7aa2f7]/60 rounded-full animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-40 right-2 w-0.5 h-0.5 bg-[#bb9af7]/50 rounded-full animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        ></div>
      </div>
    </aside>
  );
};

const SocialLink = ({ icon, href, title, color, onHover, isHovered }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : "_self"}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className={`relative w-12 h-12 bg-[#414868]/20 backdrop-blur-sm hover:backdrop-blur-md text-[#9aa5ce] rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-125 hover:-translate-y-2 hover:rotate-3 group overflow-hidden border border-[#414868]/10 hover:border-transparent ${color} shadow-lg hover:shadow-2xl`}
    title={title}
    onMouseEnter={onHover}
    onMouseLeave={() => {}}
  >
    {/* Enhanced Ripple Effect */}
    <div className="absolute inset-0 bg-white/5 rounded-2xl scale-0 group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>

    {/* Glow Effect */}
    <div className="absolute inset-0 rounded-2xl shadow-inner opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    {/* Icon with Enhanced Animation */}
    <span className="transition-all duration-500 group-hover:scale-125 relative z-10 group-hover:drop-shadow-lg">
      {icon}
    </span>

    {/* Floating Indicator */}
    {isHovered && (
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#7aa2f7] rounded-full animate-ping"></div>
    )}
  </a>
);

export default Sidebar;
