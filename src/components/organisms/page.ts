import { Page } from "../../types";
import { container } from "./container";

export function page(
  name: string,
  children: HTMLElement[] | HTMLElement
): Page {
  const page = container(children);
  (page as Page).name = name;
  return page as Page;
}
