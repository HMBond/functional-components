import { Attributes } from "../../interfaces";
import element from "../quarks/element";

export default function container(
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
