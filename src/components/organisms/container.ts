import { element } from "..";
import { Attributes } from "../../interfaces";

export function container(
  children: HTMLElement[] | HTMLElement,
  attributes?: Attributes | object
): HTMLDivElement {
  const container = element("div", attributes) as HTMLDivElement;
  if (Array.isArray(children)) {
    container.append(...children);
  } else {
    container.append(children);
  }
  return container;
}
