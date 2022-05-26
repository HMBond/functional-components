import { Attributes } from "../../interfaces";
import element from "../quarks/element";

export default function image(
  src: string,
  attributes: Attributes | object
): HTMLElement {
  const image = element("img", attributes) as HTMLImageElement;
  image.src = src;
  return image;
}
