"use client";

import { ProjectDataProps } from "@/types";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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
    src_code_url,
    view_demo_url,
    images_path,
    gif_path,
  } = project;

  const [imageSrc, setImageSrc] = useState(images_path[0]);

  return (
    <div className="flex flex-col justify-start gap-2 items-start transition ease-in-out delay-150">
      {/* <div className="max-h-[16.5rem]"></div> */}
      <Image
        src={imageSrc}
        // src={"/portfolio/test.png"}
        alt="product model"
        height={1000}
        width={1000}
        onMouseOver={() => setImageSrc(gif_path)}
        onMouseOut={() => setImageSrc(images_path[0])}
        priority
        className="w-full rounded-md h-[16.5rem] shadow-xl " // object-contain object-center
      />

      <div className="text-xl my-3 font-semibold capitalize hover:text-primary-light">
        {name}
      </div>
      <p className="text-base font-medium text-black/40">{description}</p>

      <div className="text-sm font-medium">
        <p className="mx-2 my-3 text-primary-light/70 hover:text-primary-light">
          {src_code_url && src_code_url !== "" ? (
            <Link href={src_code_url as Url}>Source Code</Link>
          ) : (
            ""
          )}
        </p>
        <p className="mx-2 my-3 text-primary-light/70 hover:text-primary-light">
          {view_demo_url && view_demo_url !== "" ? (
            <Link href={view_demo_url as Url}>View Demo</Link>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
