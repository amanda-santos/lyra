import Image from "next/image";

export const ProjectCard = () => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-surface-primary p-6">
      <Image
        src="/project-placeholder.png"
        alt="Project Image"
        className="rounded-t-2xl"
        width={336}
        height={160}
      />

      <div className="flex items-center justify-between">
        <span className="font-body text-sm text-text-secondary">
          Jul - Dec 2024
        </span>
        <span className="flex gap-4 text-2xl text-primary-color-400">
          <i className="devicon-javascript-plain" />
          <i className="devicon-react-original" />
          <i className="devicon-tailwindcss-original" />
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-body text-xl font-medium text-text-primary">
          DevLinks
        </h2>
        <p className="font-body text-base text-text-primary">
          A link aggregator for social media.
        </p>
      </div>
    </div>
  );
};
