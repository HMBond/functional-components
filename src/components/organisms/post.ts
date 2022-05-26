import container from "../molecules/container";
import element from "../quarks/element";

export default function post(
  title: string,
  children: (string | HTMLElement)[]
) {
  return container([
    element("h1", { innerText: title }),
    ...children.map((child) => {
      return typeof child === "string"
        ? element("p", { innerText: child })
        : child;
    }),
  ]);
}
