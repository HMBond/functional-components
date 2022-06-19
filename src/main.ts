import { nav } from "./components";
import { devError } from "./components/quarks/dev-error";
import { about } from "./pages/about";
import { UltimateQuestion } from "./pages/ultimate-question";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

if (import.meta.env.DEV) {
  try {
    renderApp();
  } catch (error) {
    console.error(error);
    app.append(...devError(error));
  }
} else {
  renderApp();
}

function renderApp() {
  const pages = [about(), UltimateQuestion()];
  app.append(...nav(pages));
}
