import { container, element } from '..';

export function dev(error: Error): HTMLElement {
  return container('dev', [
    element('h2', {
      innerText: error.message,
    }),
    element('code', {
      innerText: error.stack,
    }),
  ]);
}
