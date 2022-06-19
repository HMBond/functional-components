import { element } from "../quarks/element";

type List<T> = {
  items: T[];
  children: HTMLElement[];
  element: HTMLElement;
  update: (items: T[]) => List<T>;
};

export function list<T>(
  items: T[],
  renderer: (item: T) => HTMLElement,
  attributes?: HTMLUListElement | object
): List<T> {
  const state: List<T> = {
    items: [],
    children: [],
    element: element("ul", attributes),
    update,
  };

  update(items);

  return state;

  function update(items: T[]) {
    for (let [index, item] of items.entries()) {
      if (!isEqualObjects(state.items[index], item)) {
        const itemNode: HTMLElement = renderer(item);
        state.element.children[index]
          ? state.element.children[index].replaceWith(itemNode)
          : state.element.append(itemNode);
        state.items[index] = item;
      }
    }
    return state;
  }

  function isEqualObjects(a: any, b: any) {
    if (!a || !b) return false;
    // if the number of keys is different, they are different
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }

    for (const key in a) {
      const a_value = a[key];
      const b_value = b[key];
      // If the value is an object, check if they're different objects
      // If it isn't, uses !== to check
      if (
        (a_value instanceof Object && !isEqualObjects(a_value, b_value)) ||
        (!(a_value instanceof Object) && a_value !== b_value)
      ) {
        return false;
      }
    }
    return true;
  }
}
