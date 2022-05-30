import { hide, navBar, show } from "../";
import { Page } from "../../interfaces";

export function nav(pages: Page[]): HTMLElement[] {
  const activePage = pages[0];
  setActivePage(activePage);

  return [navBar(activePage, pages, setActivePage), ...pages];

  function setActivePage(page: Page) {
    hide(...pages);
    show(page);
  }
}
