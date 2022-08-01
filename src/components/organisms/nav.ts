import { hide, navBar, Page, show } from '..';

export function nav(pages: Page[]): HTMLElement[] {
  const activePage = pages[0];
  goto(activePage);

  return [navBar(activePage, pages, goto), ...pages];

  function goto(page: Page) {
    hide(...pages);
    show(page);
  }
}
