import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../core/button";
import { ProjectCard } from "../core/project-card";
import Link from "next/link";

export const ProjectsSection = () => {
  return (
    <section
      className="my-20 flex max-w-screen-2xl flex-col items-center justify-center gap-10"
      id="projects"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="font-heading text-secondary-color">Projects</h3>
        <h2 className="font-body text-2xl font-medium text-text-primary">
          Take a look at my highlighted projects
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      <Link href="/projects">
        <Button variant="secondary">
          See all
          <ArrowRight />
        </Button>
      </Link>
    </section>
  );
};
