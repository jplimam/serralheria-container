import { RefObject } from "react";

export interface IPropsLinks {
  home: RefObject<HTMLDivElement | null>;
  about: RefObject<HTMLDivElement | null>;
  projects: RefObject<HTMLDivElement | null>;
  contact: RefObject<HTMLDivElement | null>;
  partners: RefObject<HTMLDivElement | null>;
}
