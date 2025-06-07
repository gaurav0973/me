import React, { useState } from "react";
import { Github, ExternalLink, Folder } from "lucide-react";

function Projects() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const featuredProject = {
    title: "LeetQuest: Leetcode inspired Platform",
    description:
      "A LeetCode-inspired platform for practicing coding problems, built with React, Node.js, and MongoDB. It features user authentication, problem-solving capabilities, and a sleek UI.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    image: "/api/placeholder/600/400", // You'll need to add the actual image
    github: "https://github.com/gaurav0973/LeetQuest",
    demo: "#",
    featured: true,
  };

  const otherProjects = [
  {
    title: "LeetQuest",
    description:
      "A LeetCode-inspired platform for solving coding challenges with features like custom problem editor, streak tracking, and leaderboard.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
    github: "https://github.com/gaurav0973/LeetQuest",
    demo: "#",
  },
  {
    title: "me",
    description:
      "Personal portfolio website showcasing my background, skills, and projects. Built to reflect my personality and professional journey.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/gaurav0973/me",
    demo: "#",
  },
  {
    title: "cyberRange",
    description:
      "Forked cyber lab project designed for learning and practicing cybersecurity scenarios.",
    technologies: ["Python", "Networking"],
    github: "https://github.com/gaurav0973/cyberRange",
    demo: "#",
  },
  {
    title: "Blog Page",
    description:
      "A full-featured blog web app with pages for viewing, editing, and creating posts. Implements routing and blog-style layouts.",
    technologies: ["React", "CSS", "JavaScript"],
    github: "https://github.com/gaurav0973/blogPage",
    demo: "#",
  },
  {
    title: "ThunderTab – Kanban Extension",
    description:
      "A Chrome new-tab extension featuring a simple and responsive Kanban-style task manager with drag-and-drop and local storage.",
    technologies: ["JavaScript", "HTML", "CSS", "Chrome Extension API"],
    github: "https://github.com/gaurav0973/ThunderTab_kanban_extension",
    demo: "https://gaurav0973.github.io/ThunderTab_kanban_extension/",
  },
];


  const visibleProjects = showMoreProjects
    ? otherProjects
    : otherProjects.slice(0, 3);

  return (
    <section
      id="projects"
      className="bg-[#1a1b26] text-[#c0caf5] p-4 sm:p-8 max-w-6xl mx-auto"
    >
      {/* Featured Project Section */}
      <div className="mb-16 sm:mb-20">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            <span className="text-[#7aa2f7]">03.</span> My Passion Projects
          </h1>
          <div className="h-1 w-32 sm:w-48 bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] mb-6"></div>
        </div>

        {/* Featured Project Card */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Project Image */}
          <div className="relative bg-[#24283b] rounded-lg overflow-hidden border border-[#414868] hover:border-[#7aa2f7] transition-colors order-2 lg:order-1">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="w-full h-48 sm:h-64 lg:h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1b26] to-transparent p-3 sm:p-4">
              <p className="text-[#c0caf5] text-xs sm:text-sm">
                A Visual Novel Game by freeCodeCamp.org
              </p>
            </div>
          </div>

          {/* Project Details */}
          <div className="order-1 lg:order-2">
            <div className="mb-4">
              <p className="text-[#7aa2f7] text-xs sm:text-sm font-medium mb-2">
                Featured Project
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#c0caf5] mb-4">
                {featuredProject.title}
              </h3>
            </div>

            <div className="bg-[#24283b] p-4 sm:p-6 rounded-lg border border-[#414868] mb-4 sm:mb-6">
              <p className="text-[#9aa5ce] leading-relaxed text-sm sm:text-base">
                {featuredProject.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
              {featuredProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-[#9aa5ce] text-xs sm:text-sm font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={featuredProject.github}
                className="text-[#9aa5ce] hover:text-[#7aa2f7] transition-colors p-2"
                aria-label="GitHub Repository"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href={featuredProject.demo}
                className="text-[#9aa5ce] hover:text-[#7aa2f7] transition-colors p-2"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Other Noteworthy Projects Section */}
      <div>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#9aa5ce] mb-4">
            Other Noteworthy Projects
          </h2>
          <button
            className="text-[#7aa2f7] hover:underline text-sm"
            onClick={() => setShowMoreProjects(!showMoreProjects)}
          >
            view the archive
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#24283b] border border-[#414868] rounded-lg p-4 sm:p-6 hover:border-[#7aa2f7] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Header with folder icon and links */}
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <Folder className="w-8 h-8 sm:w-10 sm:h-10 text-[#7aa2f7]" />
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href={project.github}
                    className="text-[#9aa5ce] hover:text-[#7aa2f7] transition-colors p-1"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href={project.demo}
                    className="text-[#9aa5ce] hover:text-[#7aa2f7] transition-colors p-1"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-[#c0caf5] mb-2 sm:mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[#9aa5ce] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-[#9aa5ce] text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center">
          <button
            onClick={() => setShowMoreProjects(!showMoreProjects)}
            className="px-6 sm:px-8 py-2 sm:py-3 border border-[#7aa2f7] text-[#7aa2f7] rounded hover:bg-[#7aa2f7]/10 transition-colors text-sm sm:text-base"
          >
            {showMoreProjects ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
