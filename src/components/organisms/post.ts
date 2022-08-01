import { container, element } from '..';

export function post(title: string, children: (string | HTMLElement)[]) {
  return container('article', [
    element('h1', { innerText: title }),
    ...children.map((child) => {
      return typeof child === 'string'
        ? element('p', { innerText: child })
        : child;
    }),
  ]);
}
