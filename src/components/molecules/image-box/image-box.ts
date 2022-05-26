import { Attributes } from "../../../interfaces";
import image from "../../atoms/image";
import element from "../../quarks/element";
import "./image-box.css";

export default function imageBox(
  src: string,
  attributes: Attributes | object,
  caption = ""
): HTMLElement {
  const imageElement = image(src, attributes);
  const captionElement = element("figcaption", { innerText: caption });
  const box = element("figure");
  box.append(imageElement, captionElement);
  box.classList.add("image-box");
  return box;
}
