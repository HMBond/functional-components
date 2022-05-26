import element from "../quarks/element";

export default function button(
  children: HTMLElement | HTMLElement[] | Text | string
): HTMLButtonElement {
  const button = element("button") as HTMLButtonElement;
  if (Array.isArray(children)) {
    button.append(...children);
  } else {
    button.append(children);
  }
  return button;
}
