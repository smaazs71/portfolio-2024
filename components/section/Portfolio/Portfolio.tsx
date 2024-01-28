"use client";

import { ProjectCard, ShowMore } from "@/components";
import { projects } from "@/constants";
import { filterProjects, updateSearchParams } from "@/utils";
import { useState } from "react";

const Portfolio = () => {
  const data = projects;

  const projectsPerPage = 4;
  const [filter, setFilter] = useState({
    searchText: "",
    category: "all",
    stack: "",
    year: "",
  });
  const [limit, setLimit] = useState(projectsPerPage);

  const filteredProjects = filterProjects(data, filter);

  const isDataEmpty =
    !Array.isArray(filteredProjects) ||
    filteredProjects.length < 1 ||
    !filteredProjects;

  const categories = ["all", "freelancing", "job", "college", "assignment"];

  return (
    <section
      id="portfolio"
      className="even-section-bg padding-x min-h-screen flex items-center justify-center p-nav-scroll pb-section"
    >
      <div className="w-full">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="max-w-xl mb-12 mx-auto text-center">
              <span className="title-adj">Creative Portfolios</span>
              <h2 className="title">Recent Works</h2>
              <p className="sub-title">
                A Closer Look at Our Recent Works and Innovative Solutions.
              </p>
            </div>
          </div>
          <div className="px-4 w-full">
            <div className="text-black/30 flex justify-center text-center flex-wrap gap-1 sm:gap-4 mb-12">
              {categories.map((category) => (
                <button
                  onClick={() =>
                    setFilter((filterData) => ({
                      ...filterData,
                      category: category,
                    }))
                  }
                  className={`capitalize hover:bg-primary-light hover:text-white sm:font-semibold cursor-pointer mb-2 block rounded-full px-5 py-2 text-sm md:text-base active ${
                    filter.category === category
                      ? "bg-primary-light text-white"
                      : ""
                  }`}
                  data-filter="*"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center -mx-4">
          <div className="px-4 xl:min-w-[83.33%]">
            {!isDataEmpty ? (
              <section>
                <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-8 max-w-[83.33%] mx-auto transition-all">
                  {filteredProjects?.map((project, i) => {
                    return (limit || projectsPerPage) > i ? (
                      <ProjectCard project={project} key={project.id} />
                    ) : (
                      ""
                    );
                  })}
                </div>
                <ShowMore
                  pageNumber={(limit || projectsPerPage) / projectsPerPage}
                  isNext={(limit || projectsPerPage) < filteredProjects.length}
                  setLimit={setLimit}
                  projectsPerPage={projectsPerPage}
                />
              </section>
            ) : (
              <div className="home__error-container">
                <h2 className="text-black text-x1 font-bold">
                  Oops, no results
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
