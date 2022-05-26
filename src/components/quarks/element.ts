import { Attributes } from "../../interfaces";

export default function element(
  tag: string,
  attributes: Attributes | object = {}
): HTMLElement {
  const element = document.createElement(tag);
  for (let [key, value] of Object.entries(attributes)) {
    (element as any)[key] = value;
  }

  return element;
}
