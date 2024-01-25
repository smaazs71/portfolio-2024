import { ProjectDataProps, ProjectsFilterProps } from "@/types";

export const filterProjects = (
  data: ProjectDataProps[],
  filters?: ProjectsFilterProps
) => {
  if (filters) {
    Object.entries(filters).map(([key, value]) => {
      if (!value && value !== false) return;

      if (value !== "" && value !== "all" && value !== null) {
        data = data.filter((project) => {
          if (
            project.hasOwnProperty(key) &&
            `${project[key as keyof ProjectDataProps]}`
              .toLowerCase()
              .includes(`${value}`.toLowerCase())
          ) {
            /test/i.test(value);
            return project;
          }
          return false;
        });
      }
    });
  }
  return data;
};
