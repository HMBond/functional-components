import { element, image } from "..";
import "./figure.css";

export function figure(
  src: string,
  attributes: HTMLImageElement | object,
  caption = ""
): HTMLElement {
  const imageElement = image(src, attributes);
  const captionElement = element("figcaption", { innerText: caption });
  const figure = element("figure");
  figure.append(imageElement, captionElement);
  figure.classList.add("figure");
  return figure;
}
