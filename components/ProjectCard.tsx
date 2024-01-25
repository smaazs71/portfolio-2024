import { ProjectDataProps } from "@/types";
import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  project: ProjectDataProps;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const {
    id,
    name,
    description,
    category,
    stack,
    year,
    key_words,
    images_path,
  } = project;

  return (
    <div className="flex flex-col justify-start gap-2 items-start transition ease-in-out delay-150">
      {/* <div className="max-h-[16.5rem]"></div> */}
      <Image
        src={images_path[0]}
        // src={"/portfolio/test.png"}
        alt="product model"
        height={1000}
        width={1000}
        priority
        className="w-full rounded-md h-[16.5rem] shadow-xl " // object-contain object-center
      />

      <div className="text-xl my-3 font-semibold capitalize hover:text-primary-light">
        {name}
      </div>
      <p className="text-base font-medium text-black/40">{description}</p>
    </div>
  );
};

export default ProjectCard;
