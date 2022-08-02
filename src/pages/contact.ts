import { container, input, page, Page } from '../components';

export function contact(): Page {
  return page('Contact', [
    container(
      'form',
      [
        container('label', [input(), 'name']),
        container('label', [input(), 'email']),
      ],
      {
        onsubmit: (e) => handleSubmit(e),
      }
    ),
  ]);
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  console.log(e.target as HTMLFormElement);
}

export type Contact = {
  name: string;
  email: string;
  message: string;
  subscribe: boolean;
};
