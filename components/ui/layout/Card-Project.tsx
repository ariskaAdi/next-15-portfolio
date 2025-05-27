// app/components/CardProject.tsx
import { ArrowUpRight } from "lucide-react";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { Card } from "../card";
import Link from "next/link";

type CardProjectProps = {
  id: string;
};

export default async function CardProject({ id }: CardProjectProps) {
  const project = await prisma.project.findUnique({
    where: { id },
  });

  if (!project) return null;

  return (
    <Card className="border-2 border-black bg-white p-6 w-full sm:w-[300px] md:w-[320px]">
      {/* Header Section */}
      <div className="flex items-start justify-between mb-4">
        <h1 className="text-xl font-bold tracking-tight text-black line-clamp-2">
          {project.title}
        </h1>
        {(project.demoUrl || project.repoUrl) && (
          <Link
            href={project.demoUrl ?? project.repoUrl!}
            target="_blank"
            rel="noopener noreferrer">
            <ArrowUpRight className="w-8 h-8 text-black" strokeWidth={2} />
          </Link>
        )}
      </div>

      {/* Divider Line */}
      <div className="w-full h-px bg-gray-300 mb-4"></div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Image Section */}
        <div className="aspect-square">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-sm"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <p className="text-xs font-medium text-black leading-relaxed line-clamp-6">
            {project.description}
          </p>
        </div>
      </div>
    </Card>
  );
}
