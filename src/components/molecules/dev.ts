import { container } from '../organisms/container';
import { element } from '../quarks/element';
import './dev.css';

export function devError(error: any): HTMLElement[] {
  return [
    container(
      'div',
      [
        element('h2', {
          innerText: error.message,
        }),
        element('code', {
          innerText: error.stack,
        }),
      ],
      {
        className: 'dev-error',
      }
    ),
  ];
}
