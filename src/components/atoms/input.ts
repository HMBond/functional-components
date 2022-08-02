import { element } from '..';

export function input(
  attributes: Partial<HTMLInputElement> = {}
): HTMLInputElement {
  return element<HTMLInputElement>('input', attributes);
}
