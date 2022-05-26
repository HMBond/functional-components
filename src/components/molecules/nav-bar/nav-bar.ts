import { Page } from "../../../interfaces";
import button from "../../atoms/button";
import { hideAll, show } from "../../quarks/modifiers";
import container from "../container";
import "./nav-bar.css";

export default function navBar(pages: Page[]): HTMLElement {
  const navButtons = pages.map((page) => {
    const navButton = button(page.displayName || "?");
    navButton.onclick = () =>
      onNavButtonClick(navButton, navButtons, page, pages);
    return navButton;
  });
  return container(navButtons, { className: "nav-bar" });
}

function onNavButtonClick(
  button: HTMLElement,
  buttons: HTMLElement[],
  page: Page,
  pages: Page[]
) {
  for (let button of buttons) {
    button.classList.remove("active");
  }
  hideAll(pages);
  show(page);
  button.classList.add("active");
}
