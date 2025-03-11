"use client";

import { ProjectDataProps } from "@/types";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface ProjectCardProps {
  project: ProjectDataProps;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const descriptionRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsReadMore, setNeedsReadMore] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);

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

  useEffect(() => {
    if (descriptionRef.current) {
      const element = descriptionRef.current;
      const computedStyle = window.getComputedStyle(element);
      const lineHeight = parseFloat(computedStyle.lineHeight);
      const collapsedHeight = lineHeight * 4;
      if (element.scrollHeight > collapsedHeight) {
        setNeedsReadMore(true);
        setMaxHeight(collapsedHeight);
      } else {
        setMaxHeight(element.scrollHeight);
      }
    }
  }, [description]);

  useEffect(() => {
    if (descriptionRef.current) {
      const element = descriptionRef.current;
      const computedStyle = window.getComputedStyle(element);
      const lineHeight = parseFloat(computedStyle.lineHeight);
      const collapsedHeight = lineHeight * 4;
      setMaxHeight(isExpanded ? element.scrollHeight : collapsedHeight);
    }
  }, [isExpanded]);

  const [hoverImg, setHoverImg] = useState(false);

  return (
    <div
      className="flex flex-col justify-start gap-2 items-start transition ease-in-out delay-150"
      onMouseOver={() => setHoverImg(true)}
      onMouseOut={() => setHoverImg(false)}
    >
      {/* <div className="max-h-[16.5rem]"></div> */}

      {hoverImg ? (
        <Image
          src={gif_path}
          alt="product model"
          height={1000}
          width={1000}
          priority
          className="transition ease-in-out delay-150 w-full rounded-md h-[16.5rem] " // object-contain object-center
        />
      ) : (
        <Image
          src={images_path[0]}
          alt="product model"
          height={1000}
          width={1000}
          priority
          className="w-full rounded-md h-[16.5rem] transition ease-in-out delay-150 " // object-contain object-center
        />
      )}

      <div className="text-xl my-3 font-semibold capitalize hover:text-primary-light">
        {name}
      </div>
      <div>
        <div
          ref={descriptionRef}
          className="text-base font-medium text-black/80 overflow-hidden transition-all duration-500 ease-in-out"
          style={{ maxHeight: `${maxHeight}px` }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {needsReadMore && (
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="mt-2 text-blue-500 underline"
          >
            {isExpanded ? "Show less" : "Read More"}
          </button>
        )}
      </div>

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
