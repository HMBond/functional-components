import { activate, activateOne, button, container, Page } from '..';

export function navBar(
  activePage: Page,
  pages: Page[],
  goto: (page: Page) => void
): HTMLElement {
  return container('nav', navItems(pages, activePage, goto), {
    className: 'nav-bar',
  });

  function navItems(
    pages: Page[],
    activePage: Page,
    goto: (page: Page) => void
  ) {
    const items: HTMLButtonElement[] = [];

    items.push(
      ...pages.map((page) => {
        return navItem(page, activePage, items, goto);
      })
    );

    return items;
  }

  function navItem(
    page: Page,
    activePage: Page,
    items: HTMLButtonElement[],
    goto: (page: Page) => void
  ) {
    const item = button(page.name, {
      onclick: () => {
        activateOne(item, items);
        goto(page);
      },
    });

    if (page === activePage) {
      activate(item);
    }

    return item;
  }
}
