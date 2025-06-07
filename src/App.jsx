import React, { useState } from "react";
import Navigationbar from "./components/Navigationbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1a1b26] text-[#c0caf5]">
      {/* Fixed Sidebar - Hidden on mobile */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Fixed Navigation Bar */}
      <Navigationbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Content Area */}
      <main className="lg:ml-24 pt-16 sm:pt-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <AboutMe />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-[#1a1b26] bg-opacity-75 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
