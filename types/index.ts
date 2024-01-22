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

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface SearchBoxProps {
  value: string;
  setValue: (value: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  model: string;
  limit: number;
  // page: number,
}

export interface ProductProps {
  id: string;
  model: string;
  price: number;
  category: string;
  type: string;
  color: string;
  variant: string;
  dimension: {
    min: string;
    max: string;
  };
  specialization: string;
  description: string;
  adjustable: boolean;
  images_path: string[];
  key_words: string;
}

export interface ProductFilterProps {
  // "price": 1234,
  model: string;
  category: string;
  type: string;
  color: string;
  variant: string;
  specialization: string;
  adjustable: boolean;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
