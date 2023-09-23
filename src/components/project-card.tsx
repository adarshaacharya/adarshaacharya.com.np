import { GitHubIcon } from "@/components/icons";
import { SocialLink } from "@/components/social-link";
import { PROJECTS } from "@/data";
import Image from "next/image";

type Props = {
  project: (typeof PROJECTS)[number];
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <div
      className="flex cursor-pointer flex-col rounded-xl transition hover:bg-zinc-50 hover:dark:bg-zinc-800/50"
      key={project.title}
    >
      <div className="bg-cover bg-no-repeat">
        <Image
          src={project.imgSrc}
          alt={`Logo of ${project.title}`}
          className="h-50 w-full rounded-t-lg object-cover"
          width={0}
          height={0}
          unoptimized
        />
      </div>
      <div className="p-4">
        <a
          className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
          href={project.link.href}
        >
          {project.title}
        </a>
        <div className=" z-10 mt-2 text-sm">{project.description}</div>
        <p className="z-10 mb-6 mt-6 flex flex-wrap gap-1 ">
          {project.tags.map((techStackItem) => (
            <p
              className="hover:text-primary dark:hover:text-primary inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs leading-4 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
              key={techStackItem}
            >
              {techStackItem}
            </p>
          ))}
        </p>
        <p className="flex items-center">
          <SocialLink
            icon={GitHubIcon}
            href={project.link.href}
            className="h-6 w-6 flex-none"
          />
        </p>
      </div>
    </div>
  );
};