import { hide, navBar, show } from "../";
import { Page } from "../../types";

export function nav(pages: Page[]): HTMLElement[] {
  const firstPage = pages[0];
  goto(firstPage);

  return [navBar(firstPage, pages, goto), ...pages];

  function goto(page: Page) {
    hide(...pages);
    show(page);
  }
}
