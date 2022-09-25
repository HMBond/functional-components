import { container } from '..';

export type PageProps = {
  name: string;
  path: string;
};

export type Page = {
  element: HTMLElement;
} & PageProps;

export function page(props: PageProps, ...children: HTMLElement[]): Page {
  return { element: container<HTMLElement>('main', children), ...props };
}
