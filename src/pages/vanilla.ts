import { container, element, page, Page } from '../components';

export function vanilla(): Page {
  return page(
    { name: 'Vanilla Components', path: '/' },
    container('div', [element('h1', { innerText: 'Vanilla Components' })])
  );
}
