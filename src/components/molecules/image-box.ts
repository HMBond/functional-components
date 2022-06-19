import { element, image } from "../";
import "./image-box.css";

export function imageBox(
  src: string,
  attributes: HTMLImageElement | object,
  caption = ""
): HTMLElement {
  const imageElement = image(src, attributes);
  const captionElement = element("figcaption", { innerText: caption });
  const box = element("figure");
  box.append(imageElement, captionElement);
  box.classList.add("image-box");
  return box;
}
