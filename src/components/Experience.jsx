import React, { useState } from "react";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  const experiences = [
    {
      company: "Astraea Solutions Private Limited",
      title: "Software Developer Intern",
      period: "June 2024 — July 2024",
      description: [
        "Worked on Learning Management Systems (LMS) such as Moodle and Open edX.",
        "Integrated various components including PDFs, Google Colab notebooks, and video meetings.",
        "Enhanced overall LMS functionality by contributing to frontend and backend features.",
      ],
      technologies:
        "JavaScript, HTML, CSS, Node.js, Express.js, MongoDB, LMS Platforms (Moodle, Open edX)",
    },
    {
      company: "Rotaract Club of Waknaghat (JUIT)",
      title: "Active Member",
      period: "June 2023 — Present",
      description: [
        "Participated in community outreach and social service activities to support local communities.",
        "Organized events and led initiatives in collaboration with club members.",
        "Improved leadership and teamwork skills through continuous involvement.",
      ],
      technologies: "Event Planning, Community Engagement, Team Collaboration",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#1a1b26] text-[#c0caf5] p-4 sm:p-8 max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          <span className="text-[#7aa2f7]">02.</span> My Professional
          Experiences
        </h1>
        <div className="h-1 w-32 sm:w-48 bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] mb-6"></div>
      </div>

      {/* Experience Layout */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Left Side - Company List */}
        <div className="lg:w-1/3">
          <div className="lg:space-y-1">
            <div className="flex lg:flex-col gap-2 lg:gap-0 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedExperience(index)}
                  className={`cursor-pointer p-3 lg:p-4 border-l-4 lg:border-l-4 border-b-4 lg:border-b-0 transition-all duration-300 flex-shrink-0 lg:flex-shrink min-w-[140px] lg:min-w-0 ${
                    selectedExperience === index
                      ? "border-l-[#7aa2f7] lg:border-l-[#7aa2f7] border-b-[#7aa2f7] lg:border-b-transparent bg-[#24283b]/50"
                      : "border-l-transparent lg:border-l-transparent border-b-transparent lg:border-b-transparent hover:border-l-[#7aa2f7]/50 lg:hover:border-l-[#7aa2f7]/50 hover:border-b-[#7aa2f7]/50 lg:hover:border-b-transparent hover:bg-[#24283b]/30"
                  }`}
                >
                  <div
                    className={`text-sm lg:text-base text-center lg:text-left ${
                      selectedExperience === index
                        ? "text-[#c0caf5] font-medium"
                        : "text-[#9aa5ce]"
                    }`}
                  >
                    {exp.company}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Experience Details */}
        <div className="lg:w-2/3">
          <div className="mb-4 lg:mb-6">
            <h3 className="text-xl lg:text-2xl font-bold text-[#c0caf5] mb-2">
              {experiences[selectedExperience].title}{" "}
              <span className="text-[#7aa2f7]">
                @ {experiences[selectedExperience].company}
              </span>
            </h3>
            <p className="text-[#9aa5ce] text-base lg:text-lg">
              {experiences[selectedExperience].period}
            </p>
          </div>

          {/* Description */}
          <div className="mb-4 lg:mb-6">
            <ul className="space-y-3 lg:space-y-4">
              {experiences[selectedExperience].description.map(
                (item, index) => (
                  <li
                    key={index}
                    className="text-[#9aa5ce] flex items-start gap-3 text-sm lg:text-base"
                  >
                    <span className="text-[#7aa2f7] mt-1 text-sm">◆</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <p className="text-[#9aa5ce] text-sm lg:text-base">
              <span className="text-[#7aa2f7]">◆</span> Technologies:{" "}
              {experiences[selectedExperience].technologies}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
