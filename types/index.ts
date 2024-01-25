import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface ProjectDataProps {
  id: string;
  name: string;
  description: string;
  category: string;
  stack: string;
  year: string;
  key_words: string;
  images_path: string[];
}

export interface ProjectsFilterProps {
  searchText: string;
  category: string;
  stack: string;
  year: string;
  // limit: number;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (newLimit: number) => void;
  projectsPerPage: number;
}
