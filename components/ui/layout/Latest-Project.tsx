import React from "react";
import GetCard from "./Get-Card";
import { Code2, Component, Database, ShieldCheck } from "lucide-react";

const LatestProject = () => {
  return (
    <div
      id="projects"
      className="container mx-auto px-4 md:px-6 py-12 scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Cards */}
        <div>
          <h2 className="text-5xl font-bold tracking-tighter mb-8">
            LATEST PROJECT
          </h2>
          <div className="flex flex-wrap gap-6">
            <GetCard />
          </div>
        </div>

        {/* Right Column - Description */}
        <div className="grid gap-6 max-w-lg md:mt-8">
          {/* Next.js & Node.js */}
          <div className="flex items-start gap-4">
            <div className="bg-black text-white p-2 rounded-lg">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-black">
                Next.js & Node.js
              </h4>
              <p className="text-sm text-gray-600">
                Building fast, scalable full-stack applications with modern
                routing, SSR, and API routes.
              </p>
            </div>
          </div>

          {/* Supabase & PostgreSQL */}
          <div className="flex items-start gap-4">
            <div className="bg-black text-white p-2 rounded-lg">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-black">
                Supabase & PostgreSQL
              </h4>
              <p className="text-sm text-gray-600">
                Real-time database, authentication, and scalable backend with a
                powerful SQL foundation.
              </p>
            </div>
          </div>

          {/* Sanity CMS */}
          <div className="flex items-start gap-4">
            <div className="bg-black text-white p-2 rounded-lg">
              <Component className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-black">Sanity CMS</h4>
              <p className="text-sm text-gray-600">
                Flexible headless CMS for structured content, live preview, and
                collaborative editing.
              </p>
            </div>
          </div>

          {/* Auth.js */}
          <div className="flex items-start gap-4">
            <div className="bg-black text-white p-2 rounded-lg">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-black">Auth.js</h4>
              <p className="text-sm text-gray-600">
                Secure, modern authentication with OAuth, credentials, and
                seamless session handling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProject;
