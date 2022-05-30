import { Attributes } from "../../interfaces";
import { element } from "../quarks/element";

type List<T> = {
  data: T[];
  children: HTMLElement[];
  element: HTMLElement;
  update: (data: T[]) => List<T>;
};

export function list<T>(
  data: T[],
  renderer: (item: T) => HTMLElement,
  attributes?: Attributes | object
): List<T> {
  const state: List<T> = {
    data: [],
    children: [],
    element: element("ul", attributes),
    update,
  };

  update(data);

  return state;

  function update(data: T[]) {
    for (let [index, item] of data.entries()) {
      if (!isEqualObjects(state.data[index], item)) {
        const itemNode: HTMLElement = renderer(item);
        state.element.children[index]
          ? state.element.children[index].replaceWith(itemNode)
          : state.element.append(itemNode);
        state.data[index] = item;
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
