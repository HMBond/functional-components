export function hideAll(elements: HTMLElement[]) {
  for (let element of elements) {
    element.classList.add("hidden");
  }
}

export function show(element: HTMLElement) {
  element.classList.remove("hidden");
}
