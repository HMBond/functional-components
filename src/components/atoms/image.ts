import { element } from "../";
import { Attributes } from "../../interfaces";
import "./image.css";

export function image(
  src: string,
  attributes: Attributes | object
): HTMLElement {
  const image = element("img", attributes) as HTMLImageElement;
  image.src = src;
  return image;
}
