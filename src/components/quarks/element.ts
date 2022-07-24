export function element<T extends HTMLElement = HTMLElement>(
  tag: string,
  attributes: Partial<HTMLElement> = {}
): T {
  const element = document.createElement(tag);
  const entries = Object.entries(attributes);
  for (let [key, value] of entries) {
    (element as any)[key] = value;
  }

  return element as T;
}
