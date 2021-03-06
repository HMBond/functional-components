import { activate, button, container, deactivate } from "../";
import { Page } from "../../types";
import "./nav-bar.css";

export function navBar(
  activePage: Page,
  pages: Page[],
  goto: (page: Page) => void
): HTMLElement {
  const buttons = pages.map((page) => {
    const navButton = button(page.name, {
      onclick: () => {
        setActiveButton(navButton, buttons);
        goto(page);
      },
    });
    if (page === activePage) {
      activate(navButton);
    }
    return navButton;
  });

  return container(buttons, { className: "nav-bar" });

  function setActiveButton(button: HTMLElement, buttons: HTMLElement[]) {
    deactivate(...buttons);
    activate(button);
  }
}
