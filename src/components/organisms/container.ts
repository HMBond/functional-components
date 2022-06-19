import { element } from "..";

export function container(
  children: HTMLElement[] | HTMLElement,
  attributes?: HTMLDivElement | object
): HTMLDivElement {
  const container = element("div", attributes) as HTMLDivElement;
  if (Array.isArray(children)) {
    container.append(...children);
  } else {
    container.append(children);
  }
  return container;
}
