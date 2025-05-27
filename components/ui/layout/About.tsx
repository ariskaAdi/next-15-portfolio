import React from "react";

const About = () => {
  return (
    <div id="about" className="container mx-auto px-4 md:px-6 scroll-mt-24">
      {/* About Us Header */}
      <div className="text-center mb-12 mt-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
          ABOUT ME.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1">
          <nav className="space-y-4 text-sm">
            <div className="font-medium text-gray-800">About me.</div>
            <div className="font-medium text-gray-800">Latest works.</div>
            <div className="font-medium text-gray-800">Contact.</div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="max-w-3xl">
            <p className="text-md mb-6">
              I&apos;m a passionate full-stack developer who started learning
              independently in 2023. Driven by curiosity and the desire to build
              real, working products, I spent countless hours exploring web
              technologies and developing personal projects from scratch.
              Through this process, I gained practical experience in both
              frontend and backend development, and discovered how much I enjoy
              creating clean, functional, and user-focused applications.
            </p>
            <p className="text-md mb-6">
              In 2025, I took a major step forward by joining the Full-Stack
              Developer Bootcamp at{" "}
              <strong>Purwadhika Digital Technology School</strong>. The
              experience gave me a deeper understanding of software development
              best practices and exposed me to real-world project collaboration.
              Now, I continue to sharpen my skills, expand my knowledge, and
              focus on building meaningful and scalable digital solutions that
              can make a real impact.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
    </div>
  );
};

export default About;
