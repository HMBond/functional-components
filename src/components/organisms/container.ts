import { element } from '..';

export function container<T extends HTMLElement = HTMLElement>(
  tag: string,
  children: (HTMLElement | string)[] | HTMLElement,
  attributes: Partial<T> = {}
): T {
  const container = element<T>(tag, attributes);
  if (Array.isArray(children)) {
    container.append(...children);
  } else {
    container.append(children);
  }
  return container;
}
