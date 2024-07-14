import { ProjectCard } from "../components/core/project-card";

export default function ProjectsPage() {
  return (
    <main className="m-auto flex min-h-screen max-w-[1400px] px-10 py-10">
      <div className="flex flex-wrap content-start items-start justify-center gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </main>
  );
}
