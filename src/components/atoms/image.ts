import { element } from '..';

export function image(
  src: string,
  attributes: Partial<HTMLImageElement> = {}
): HTMLElement {
  const image = element('img', attributes) as HTMLImageElement;
  image.src = src;
  return image;
}
