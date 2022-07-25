import { element } from '../';
import './input.css';

export function input(
  id: string,
  attributes: Partial<HTMLInputElement> = {}
): HTMLElement {
  const input = element('input', attributes) as HTMLInputElement;
  input.id = id;
  return input;
}
