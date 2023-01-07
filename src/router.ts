import { navBar, Page } from './components';

type RouterProps = {
  pages: Page[];
  notFound: (path: string) => Page;
};

export function withRouter(app: HTMLElement, { pages, notFound }: RouterProps) {
  let activePage = pageFromPath();
  const nav = navBar(activePage, pages, onNavigate);
  app.append(nav);
  app.append(activePage.element);
  window.addEventListener('popstate', onLocationChanged);

  function onLocationChanged() {
    show(pageFromPath());
  }

  function onNavigate(page: Page) {
    window.history.pushState(null, '', page.path);
    window.dispatchEvent(new Event('popstate'));
  }

  function show(page: Page) {
    if (page.name !== activePage.name) {
      activePage.element.remove();
      app.append(page.element);
      activePage = page;
    }
  }

  function pageFromPath(): Page {
    const path = window.location.pathname;
    return (
      pages.find((page) => page.path.toLowerCase() === path.toLowerCase()) ??
      notFound(path)
    );
  }
}
