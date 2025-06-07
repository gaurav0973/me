import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#1a1b26] text-[#c0caf5] min-h-screen flex items-center justify-center relative px-4 sm:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Hero Content */}
        <div className="space-y-4 sm:space-y-6">
          {/* Small Introduction */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#9aa5ce]">
            Hey! I'm <span className="text-[#7aa2f7]">Gaurav Maurya</span>
          </p>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#c0caf5] leading-tight px-2">
            I'm A <span className="text-[#7aa2f7]">Full Stack</span> Web
            Developer
          </h1>

          {/* Description */}
          <div className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl text-[#9aa5ce] max-w-3xl mx-auto px-4">
            <p>
              I can build user interface for web sites and applications with{" "}
              <span className="text-[#7aa2f7]">React JS</span> and{" "}
              <span className="text-[#7aa2f7]">Node.js</span>
            </p>
            <p>I love the full stack development.</p>
          </div>

          {/* CTA Button */}
          <div className="pt-6 sm:pt-8">
            <a
              href="#contact"
              className="inline-block bg-[#7aa2f7] hover:bg-[#bb9af7] text-[#1a1b26] font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* Background Animation - Tokyo Night Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-[#7aa2f7] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-[#bb9af7] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-20 sm:top-40 left-1/2 transform -translate-x-1/2 w-40 sm:w-80 h-40 sm:h-80 bg-[#7aa2f7] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};

export default Hero;
