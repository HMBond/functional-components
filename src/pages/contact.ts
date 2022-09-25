import { container, input, page, Page } from '../components';

export type Contact = {
  name: string;
  email: string;
  message: string;
  subscribe: boolean;
};

export function contact(): Page {
  return page(
    { name: 'Contact', path: '/contact' },
    container(
      'form',
      [
        container('label', ['name', input()]),
        container('label', [input(), 'email']),
      ],
      {
        onsubmit: (e) => handleSubmit(e),
      }
    )
  );
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  console.log(e.target as HTMLFormElement);
}
