// ProjectCards.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card"; // adjust import path as needed

const projects = [
  {
    title: "Empowering Local Journalism with Modern Web Technology",
    description:
      "A look at how modern frameworks like Next.js, Supabase, Sanity, and Auth.js are redefining how we publish local news faster, securely, and more beautifully",
    imageUrl: "/blog.png",
    demoUrl: "https://kepanjenkita.vercel.app/",
    repoUrl: "",
  },
  {
    title: "Secure Token Airdrop Platform with PostgreSQL",
    description:
      "This airdrop token platform securely manages and distributes tokens using PostgreSQL on Vercel to store participant data. It generates unique codes tied to wallet addresses, ensuring accurate and tamper-proof participation. By combining blockchain technology with a reliable database backend, the platform enables seamless, transparent token distribution with high performance and scalability, offering an efficient solution for token airdrops.",
    imageUrl: "/gromp.png",
    demoUrl: "https://gromp-airdrop.vercel.app/",
    repoUrl: "",
  },
];

export default function ProjectCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="border-2 border-black bg-white p-6 w-full sm:w-[300px] md:w-[320px]">
          {/* Header */}
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-xl font-bold tracking-tight text-black line-clamp-2">
              {project.title}
            </h1>
            {(project.demoUrl || project.repoUrl) && (
              <Link
                href={project.demoUrl || project.repoUrl}
                target="_blank"
                rel="noopener noreferrer">
                <ArrowUpRight className="w-8 h-8 text-black" strokeWidth={2} />
              </Link>
            )}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-300 mb-2" />

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="aspect-square">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-xs font-medium text-black leading-relaxed line-clamp-6">
                {project.description}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
