function AboutMe() {
  const technologies = [
    { left: "Python", right: "Java" },
    { left: "C#", right: "Unity Game Dev Engine" },
    { left: "Heroku", right: "Ren'Py Game Dev Engine" },
  ];

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
              When I'm not busy building software, I develop games and
              open-source projects. My open-source chess and rhythm game
              templates are rated 5 stars on{" "}
              <span className="text-[#7aa2f7]">itch.io</span>. My most recent
              passion project is{" "}
              <span className="text-[#7aa2f7]">a Discord AI chatbot</span> with
              the personality of my favorite video game character, running live
              on a 1000+ user Discord server. I also enjoy creating technical
              tutorials for <span className="text-[#7aa2f7]">freeCodeCamp</span>{" "}
              and on <span className="text-[#7aa2f7]">my YouTube channel</span>.
              To explore my passion for teaching, I've recently started as{" "}
              <span className="text-[#7aa2f7]">an Udemy instructor</span>.
            </p>

            <p>
              Here are my favorite technologies for building awesome software
              and games:
            </p>
          </div>

          {/* Technologies List */}
          <div className="mt-6 sm:mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="grid grid-cols-1 gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[#7aa2f7] text-sm">◆</span>
                    <span className="text-[#9aa5ce] text-sm sm:text-base">
                      {tech.left}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#7aa2f7] text-sm">◆</span>
                    <span className="text-[#9aa5ce] text-sm sm:text-base">
                      {tech.right}
                    </span>
                  </div>
                </div>
              ))}
            </div>
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
