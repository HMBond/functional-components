import { element } from "../";
import "./image.css";

export function image(
  src: string,
  attributes: HTMLImageElement | object
): HTMLElement {
  const image = element("img", attributes) as HTMLImageElement;
  image.src = src;
  return image;
}
