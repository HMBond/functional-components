import { navBar, Page } from './components';

type RouterProps = {
  pages: Page[];
  pageNotFound: (path: string) => Page;
};

export function router(app: HTMLElement, { pages, pageNotFound }: RouterProps) {
  let activePage = getPageFromPath(pages);
  app.append(navBar(activePage, pages, goto));
  app.appendChild(activePage.element);

  function goto(page: Page) {
    if (page.name !== activePage.name) {
      activePage.element.remove();
      app.append(page.element);
      window.history.pushState(null, '', page.path);
      activePage = page;
    }
  }

  function getPageFromPath(pages: Page[]) {
    const path = window.location.pathname;
    let activePage = pages.find(
      (page) => page.path.toLowerCase() === path.toLowerCase()
    );
    if (!activePage) {
      activePage = pageNotFound(path);
    }
    console.log(activePage.name);
    return activePage;
  }
}
