import { element, image } from "..";
import "./figure.css";

export function figure(
  src: string,
  attributes: Partial<HTMLImageElement>,
  caption = ""
): HTMLElement {
  const figure = element("figure");
  figure.append(
    image(src, attributes),
    element("figcaption", { innerText: caption })
  );
  return figure;
}
