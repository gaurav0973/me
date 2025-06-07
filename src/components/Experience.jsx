import React, { useState } from "react";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(2);

  const experiences = [
    {
      company: "Salesforce",
      title: "Full-Stack Software Engineer",
      period: "August 2021 — Present",
      description: [
        "Work on Financial Service Cloud products and Slack integration",
        "Developed scalable microservices using Java and Spring Boot",
        "Built responsive web applications using React and Lightning Web Components",
      ],
      technologies:
        "Java, React, Spring Boot, Lightning Web Components, Salesforce API, AWS",
    },
    {
      company: "Salesforce",
      title: "Software Engineer Intern",
      period: "June 2021 — August 2021",
      description: [
        "Contributed to Financial Service Cloud development initiatives",
        "Implemented new features for customer relationship management",
        "Collaborated with senior engineers on code reviews and best practices",
      ],
      technologies: "Java, Salesforce API, Lightning Web Components, Git",
    },
    {
      company: "J. Salavon Studio",
      title: "iOS Development Intern",
      period: "November 2019 — March 2020",
      description: [
        "Created DeepStyle, an iOS app that applies real-time AI style filters to videos. The app is downloaded 1000+ times and rated 4.7 stars on the App store",
        "Implemented a dashboard for the studio dev team to visualize collected user statistics like device types and session lengths",
        "Technologies: Swift, Xcode, Python, PHP",
      ],
      technologies: "Swift, Xcode, Python, PHP",
    },
    {
      company: "VIA Technologies",
      title: "Software Engineering Intern",
      period: "June 2019 — August 2019",
      description: [
        "Developed embedded software solutions for hardware products",
        "Optimized system performance and resource utilization",
        "Implemented device drivers and firmware updates",
      ],
      technologies: "C, C++, Embedded Systems, Linux",
    },
    {
      company: "Nomad Credit",
      title: "Software Development Intern",
      period: "January 2019 — May 2019",
      description: [
        "Built web applications for financial services platform",
        "Implemented user authentication and security features",
        "Developed RESTful APIs for mobile and web clients",
      ],
      technologies: "React, Node.js, MongoDB, Express.js",
    },
    {
      company: "UChicago CANON",
      title: "Research Assistant",
      period: "September 2018 — December 2018",
      description: [
        "Conducted research in computational linguistics",
        "Developed natural language processing tools",
        "Analyzed large datasets using statistical methods",
      ],
      technologies: "Python, NLTK, TensorFlow, Pandas",
    },
    {
      company: "UChicago TechTeam",
      title: "Web Developer",
      period: "February 2018 — August 2018",
      description: [
        "Maintained university department websites",
        "Implemented accessibility standards and best practices",
        "Created responsive designs for mobile and desktop",
      ],
      technologies: "HTML, CSS, JavaScript, WordPress",
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
          {/* Mobile: Horizontal scroll, Desktop: Vertical list */}
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
