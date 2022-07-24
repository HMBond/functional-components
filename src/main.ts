import { devError, nav } from "./components";
import { about } from "./pages/about";
import { play } from "./pages/play";
import "./theme/style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

try {
  renderApp();
} catch (error) {
  if (import.meta.env.DEV) {
    console.error(error);
    app.append(...devError(error));
  }
  /* production error handling */
}

function renderApp() {
  const pages = [about(), play()];
  app.append(...nav(pages));
}
