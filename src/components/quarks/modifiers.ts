export function hide(...elements: HTMLElement[]) {
  for (let element of elements) {
    element.classList.add('hidden');
  }
}

export function show(...elements: HTMLElement[]) {
  for (let element of elements) {
    element.classList.remove('hidden');
  }
}

export function activate(...elements: HTMLElement[]) {
  for (let element of elements) {
    element.classList.add('active');
  }
}

export function activateOne(element: HTMLElement, elements: HTMLElement[]) {
  deactivate(...elements);
  activate(element);
}

export function deactivate(...elements: HTMLElement[]) {
  for (let element of elements) {
    element.classList.remove('active');
  }
}
