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
  src_code_url?: string;
  view_demo_url?: string;
  images_path: string[];
  gif_path: string;
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
