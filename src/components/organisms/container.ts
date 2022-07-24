import { element } from "..";

export function container<T extends HTMLDivElement = HTMLDivElement>(
  children: HTMLElement[] | HTMLElement,
  attributes?: HTMLDivElement | object
): T {
  const container = element<T>("div", attributes);
  if (Array.isArray(children)) {
    container.append(...children);
  } else {
    container.append(children);
  }
  return container;
}
