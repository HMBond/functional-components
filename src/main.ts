import { dev } from './components';
import { about } from './pages/about';
import { contact } from './pages/contact';
import { pageNotFound } from './pages/pageNotFound';
import { vanilla } from './pages/vanilla';
import { router } from './router';
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
  const pages = [about(), contact(), vanilla()];
  router(app, { pages, pageNotFound });
}
