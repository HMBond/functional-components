import { container, element, page, Page } from '../components';

export function vanilla(): Page {
  return page(
    { name: 'Vanilla', path: '/vanilla' },
    container('div', [element('h1', { innerText: 'Vanilla Components' })])
  );
}
