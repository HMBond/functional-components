interface extendableHTMLElement extends HTMLElement {
  [key: string]: any;
}

export function element(
  tag: string,
  attributes: HTMLElement | object = {}
): HTMLElement {
  const element = document.createElement(tag);
  for (let [key, value] of Object.entries(attributes)) {
    (element as extendableHTMLElement)[key] = value;
  }

  return element;
}
