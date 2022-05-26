import { Page } from "../../interfaces";
import navBar from "../molecules/nav-bar/nav-bar";
import { hideAll, show } from "../quarks/modifiers";

export default function nav(pages: Page[]): HTMLElement[] {
  hideAll(pages);
  show(pages[0]);

  return [navBar(pages), ...pages];
}
