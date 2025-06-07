function AboutMe() {
  

  return (
    <section
      id="about"
      className="bg-[#1a1b26] text-[#c0caf5] p-4 sm:p-8 max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          <span className="text-[#7aa2f7]">01.</span> About Me
        </h1>
        <div className="h-1 w-32 sm:w-48 bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] mb-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        {/* Text Content */}
        <div className="lg:col-span-2">
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-[#9aa5ce] leading-relaxed">
            <p>Hello! My name is Gaurav.</p>

            <p>
      I’m Gaurav Kumar Maurya, a CSE student at{" "}
      <span className="text-[#7aa2f7]">JUIT</span> with a strong interest in
      full-stack development. I’ve built projects like a{" "}
      <span className="text-[#7aa2f7]">Kanban Chrome extension</span> and a{" "}
      <span className="text-[#7aa2f7]">LeetCode-inspired platform</span>, and
      interned at <span className="text-[#7aa2f7]">Astraea Solutions</span>,
      working on LMS integrations. Skilled in{" "}
      <span className="text-[#7aa2f7]">JavaScript</span>,{" "}
      <span className="text-[#7aa2f7]">Node.js</span>,{" "}
      <span className="text-[#7aa2f7]">MongoDB</span>, and authentication
      systems, I also actively contribute to community service through the{" "}
      <span className="text-[#7aa2f7]">Rotaract Club</span>.
    </p>

          </div>

          
        </div>

        {/* Profile Image */}
        <div className="lg:col-span-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="w-full max-w-sm">
            <div className="relative">
              <img
                src="https://avatars.githubusercontent.com/u/151557489?s=400&u=c5e2c5aa9bf7ecdf12fb4194ec8a4afc1b8e7393&v=4"
                alt="Profile"
                className="w-full h-auto rounded-lg shadow-lg border-4 border-[#7aa2f7]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
