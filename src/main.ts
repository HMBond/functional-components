import { dev } from './components';
import { about } from './pages/about';
import { contact } from './pages/contact';
import { notFound } from './pages/not-found';
import { vanilla } from './pages/vanilla';
import { withRouter } from './router';
import './style/index.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

withErrorHandling(app);
renderApp();

function withErrorHandling(app: HTMLDivElement) {
  const onError = window.onerror;
  window.onerror = (message, url, line, col, error) => {
    if (import.meta.env.DEV && error instanceof Error) {
      app.append(dev(error));
      onError && onError(message, url, line, col, error);
    } else {
      /* production error handling */
    }
  };
}

function renderApp() {
  const pages = [vanilla(), about(), contact()];
  withRouter(app, { pages, notFound });
}
