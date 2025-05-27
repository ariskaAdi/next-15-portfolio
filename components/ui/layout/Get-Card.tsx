// app/projects/page.tsx
import { prisma } from "@/lib/prisma";
import CardProject from "./Card-Project";

export default async function GetCard() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex flex-wrap gap-6">
      {projects.map((project) => (
        <CardProject key={project.id} id={project.id} />
      ))}
    </div>
  );
}
