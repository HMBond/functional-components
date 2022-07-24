import { element } from "../";
import "./button.css";

export function button(
  children: HTMLElement | HTMLElement[] | Text | string,
  attributes: Partial<HTMLButtonElement> = {}
): HTMLButtonElement {
  const button = element("button", attributes) as HTMLButtonElement;
  if (Array.isArray(children)) {
    button.append(...children);
  } else {
    button.append(children);
  }
  return button;
}
