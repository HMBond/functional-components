import { element } from "../";
import { Attributes } from "../../interfaces";
import "./button.css";

export function button(
  children: HTMLElement | HTMLElement[] | Text | string,
  attributes?: Attributes | object
): HTMLButtonElement {
  const button = element("button", attributes) as HTMLButtonElement;
  if (Array.isArray(children)) {
    button.append(...children);
  } else {
    button.append(children);
  }
  return button;
}
