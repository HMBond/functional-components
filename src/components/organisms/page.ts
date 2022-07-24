import { container } from "./container";

export function page(
  name: string,
  children: HTMLElement[] | HTMLElement
): Page {
  const page = container<Page>(children);
  page.name = name;
  return page;
}

export type Page = HTMLDivElement & {
  name: string;
};
