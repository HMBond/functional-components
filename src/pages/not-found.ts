import { element, Page, page } from '../components';

export function notFound(path: string): Page {
  window.history.pushState(null, '', '/not-found');
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
