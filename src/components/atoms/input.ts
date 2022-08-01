import { element } from '../';
import './input.css';

export function input(
  id: string,
  attributes: Partial<HTMLInputElement> = {}
): HTMLInputElement {
  const input = element<HTMLInputElement>('input', attributes);
  input.id = id;
  return input;
}
