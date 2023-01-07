import { activate, activateOne, button, container, Page } from '..';

export function navBar(
  activePage: Page,
  pages: Page[],
  onNavigate: (page: Page) => void
): HTMLElement {
  return container('nav', navItems(pages, activePage, onNavigate), {
    className: 'nav-bar',
  });

  function navItems(
    pages: Page[],
    activePage: Page,
    onNavigate: (page: Page) => void
  ) {
    const items: HTMLButtonElement[] = [];
    items.push(
      ...pages.map((page) => navItem(page, activePage, items, onNavigate))
    );
    return items;
  }

  function navItem(
    page: Page,
    activePage: Page,
    items: HTMLButtonElement[],
    onNavigate: (page: Page) => void
  ) {
    const item = button(page.name, {
      onclick: () => {
        onNavigate(page);
      },
    });

    if (page === activePage) {
      activate(item);
    }

    window.addEventListener('popstate', () => {
      if (page.path.toLowerCase() === window.location.pathname.toLowerCase()) {
        activateOne(item, items);
      }
    });

    return item;
  }
}
