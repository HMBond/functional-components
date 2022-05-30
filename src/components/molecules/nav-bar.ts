import { activate, button, container, deactivate } from "../";
import { Page } from "../../interfaces";
import "./nav-bar.css";

export function navBar(
  activePage: Page,
  pages: Page[],
  setActivePage: (page: Page) => void
): HTMLElement {
  const buttons = pages.map((page) => {
    const navButton = button(page.name || "?");
    if (page === activePage) {
      activate(navButton);
    }
    navButton.onclick = () => {
      setActiveButton(navButton, buttons);
      setActivePage(page);
    };
    return navButton;
  });
  return container(buttons, { className: "nav-bar" });
}

function setActiveButton(button: HTMLElement, buttons: HTMLElement[]) {
  deactivate(...buttons);
  activate(button);
}
