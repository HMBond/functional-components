import { element, page } from '../components';

export function pageNotFound(path: string) {
  return page(
    { name: 'Page not found', path: '/not-found' },
    element('h1', {
      innerText: `Sorry, the requested URL was not found.`,
    }),
    element('h3', {
      innerText: path,
    })
  );
}
