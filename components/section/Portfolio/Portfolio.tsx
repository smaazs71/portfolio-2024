import { ProjectCard, ShowMore } from "@/components";
import { projects } from "@/constants";
import { filterProjects } from "@/utils";

const Portfolio = ({ searchParams }: any) => {
  const data = projects;

  const filteredProjects = filterProjects(data, {
    category: searchParams.category || "",
    stack: searchParams.stack || "",
    year: searchParams.year || "",
  });

  const isDataEmpty =
    !Array.isArray(filteredProjects) ||
    filteredProjects.length < 1 ||
    !filteredProjects;

  return (
    <section
      id="portfolio"
      className="bg-white padding-x min-h-screen p-nav-scroll flex items-center justify-center"
    >
      <div className="w-full">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="max-w-xl mb-12 mx-auto text-center">
              <span className="text-primary-light font-semibold text-lg block mb-2">
                Creative Portfolios
              </span>
              <h2 className="mb-5 font-bold text-4xl text-primary-dark">
                Recent Works
              </h2>
              <p className="text-black/40 font-medium text-lg">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
          <div className="px-4 w-full">
            <div className="text-black/30 flex justify-center text-center flex-wrap mb-12">
              <button
                className="hover:bg-primary-light hover:text-white sm:font-semibold cursor-pointer mb-2 block rounded-full px-5 py-2 text-sm md:text-base mx-2 active"
                data-filter="*"
              >
                All
              </button>
              <button
                className="hover:bg-primary-light hover:text-white sm:font-semibold cursor-pointer mb-2 block rounded-full px-5 py-2 text-sm md:text-base mx-2"
                data-filter=".web"
              >
                Freelancing
              </button>
              <button
                className="hover:bg-primary-light hover:text-white sm:font-semibold cursor-pointer mb-2 block rounded-full py-2 px-5 text-sm md:text-base mx-2"
                data-filter=".graphics"
              >
                Job
              </button>
              <button
                className="hover:bg-primary-light hover:text-white sm:font-semibold cursor-pointer mb-2 block rounded-full py-2 px-5 text-sm md:text-base mx-2"
                data-filter=".app"
              >
                College
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center -mx-4">
          <div className="px-4 xl:min-w-[83.33%]">
            {!isDataEmpty ? (
              <section>
                <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-8 max-w-[83.33%] mx-auto">
                  {filteredProjects?.map((project, i) => {
                    return (searchParams.limit || 10) > i ? (
                      <ProjectCard project={project} />
                    ) : (
                      ""
                    );
                  })}
                </div>
                <ShowMore
                  pageNumber={(searchParams.limit || 4) / 4}
                  isNext={(searchParams.limit || 4) < filterProjects.length}
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
