import element from "../quarks/element";

export default function input(
  id: string,
  attributes: {
    placeholder?: string;
    onchange?: (_: Event) => void;
    oninput?: (_: Event) => void;
  }
): HTMLElement {
  const input = element("input", attributes) as HTMLInputElement;
  input.id = id;
  return input;
}
