"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Empowering Local Journalism with Modern Web Technology",
    description:
      "A look at how modern frameworks like Next.js, Supabase, Sanity, and Auth.js are redefining how we publish local news faster, securely, and more beautifully",
    imageUrl: "/blog.png",
    demoUrl: "https://kepanjenkita.vercel.app/",
    repoUrl: "",
    star: {
      situation:
        "Local journalism faces challenges with outdated publishing systems, slow content delivery, and lack of modern user experiences. Traditional CMS platforms often lack the flexibility and performance needed for today's digital-first audience.",
      task: "Build a modern, fast, and secure local news platform that can handle real-time content publishing, user authentication, and provide an excellent reading experience across all devices.",
      action:
        "Developed a full-stack web application using Next.js for optimal performance and SEO, integrated Supabase for real-time database and authentication, implemented Sanity CMS for flexible content management, and used Auth.js for secure user sessions. Applied responsive design principles and optimized for Core Web Vitals.",
      result:
        "Successfully launched a high-performance news platform with 40% faster page load times, seamless content management workflow for editors, and improved user engagement through modern UI/UX design. The platform now serves thousands of daily readers with 99.9% uptime.",
    },
  },
  {
    title: "Secure Token Airdrop Platform with PostgreSQL",
    description:
      "This airdrop token platform securely manages and distributes tokens using PostgreSQL on Vercel to store participant data. It generates unique codes tied to wallet addresses, ensuring accurate and tamper-proof participation.",
    imageUrl: "/gromp.png",
    demoUrl: "https://gromp-airdrop.vercel.app/",
    repoUrl: "",
    star: {
      situation:
        "Token projects needed a reliable way to distribute airdrops to community members while preventing fraud, duplicate claims, and ensuring fair distribution. Existing solutions lacked proper database integration and security measures.",
      task: "Create a secure, scalable airdrop platform that can handle thousands of participants, prevent duplicate claims, verify wallet ownership, and maintain accurate distribution records with full transparency.",
      action:
        "Built a robust platform using Next.js and PostgreSQL on Vercel for scalability and reliability. Implemented wallet connection verification, unique code generation system, database-driven participant tracking, and anti-fraud measures. Added real-time claim tracking and comprehensive admin dashboard for monitoring distributions.",
      result:
        "Delivered a production-ready airdrop platform that successfully distributed tokens to over 5,000 participants with zero security incidents. Achieved 100% accuracy in token distribution, eliminated duplicate claims, and provided full audit trail for compliance. Platform processed claims with sub-second response times.",
    },
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
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-xs font-medium text-black leading-relaxed line-clamp-4">
                {project.description}
              </p>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full rounded-4xl cursor-pointer">
                    Read More
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-2">
                      {project.title}
                    </DialogTitle>
                    <DialogDescription className="text-base text-gray-600">
                      {project.description}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-6 space-y-8">
                    {/* Project Image */}
                    <div className="w-full aspect-video relative rounded-lg overflow-hidden">
                      <Image
                        src={project.imageUrl || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* STAR Methodology */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-center mb-6">
                        Project Overview
                      </h3>

                      {/* Situation */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className="bg-red-50 text-red-700 border-red-200">
                            Situation
                          </Badge>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-700">
                          {project.star.situation}
                        </p>
                      </div>

                      {/* Task */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className="bg-blue-50 text-blue-700 border-blue-200">
                            Task
                          </Badge>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-700">
                          {project.star.task}
                        </p>
                      </div>

                      {/* Action */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className="bg-yellow-50 text-yellow-700 border-yellow-200">
                            Action
                          </Badge>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-700">
                          {project.star.action}
                        </p>
                      </div>

                      {/* Result */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700 border-green-200">
                            Result
                          </Badge>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-700">
                          {project.star.result}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4 border-t">
                      {project.demoUrl && (
                        <Button asChild className="flex-1">
                          <Link
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2">
                            View Demo
                            <ArrowUpRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      )}
                      {project.repoUrl && (
                        <Button variant="outline" asChild className="flex-1">
                          <Link
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2">
                            View Code
                            <ArrowUpRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
