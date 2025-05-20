import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
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

      {/* Quote Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="flex flex-col justify-center">
          <div className="text-4xl font-serif italic">
            <span className="text-5xl">`</span>
            <p className="my-4">
              Our work does make sense only if it is a faithful witness of his
              time.
            </p>
            <div className="text-right">
              <span className="text-5xl">`</span>
            </div>
          </div>
          <p className="text-sm mt-2">Jean-Philippe Nuel, Director</p>
        </div>
        <div>
          <Image
            src=""
            alt="Person looking at wall with papers"
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-8">
          <Image
            src=""
            alt="Team member 1"
            width={300}
            height={300}
            className="w-full max-w-xs"
          />
        </div>
        <div>
          <h2 className="text-5xl font-bold tracking-tighter mb-8">
            THE TEAM.
          </h2>
          <div className="space-y-6 max-w-lg">
            <p className="text-sm text-gray-600">
              All art is quite useless, one can never consent to creep when one
              feels an impulse to soar: words do not express thoughts very well;
              they always become a little different immediately after they are
              expressed, a little distorted, a little foolish.
            </p>
            <p className="text-sm text-gray-600">
              He had a word, too, love, he called it, but I had been used to
              words for a long time. I knew that that word was like the others:
              just a shape to fill a lack; that when the right time came, you
              wouldnt need a word for that any more than for pride or fear.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-4 gap-4 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold">600</div>
              <div className="text-xs text-gray-500">
                Happy clients and customers work
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">700</div>
              <div className="text-xs text-gray-500">
                Projects done for all client emails
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">1.2</div>
              <div className="text-xs text-gray-500">
                Million USD in contest projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">110</div>
              <div className="text-xs text-gray-500">Uncompleted projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
