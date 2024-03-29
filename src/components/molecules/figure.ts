import { element, image } from '..';

export function figure(
  src: string,
  attributes: Partial<HTMLImageElement>,
  caption = ''
): HTMLElement {
  const figure = element('figure', attributes);

  figure.append(
    image(src, { alt: attributes.alt ?? caption }),
    element('figcaption', { innerText: caption })
  );

  return figure;
}
