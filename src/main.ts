import { devError, nav } from "./components";
import { about } from "./pages/about";
import { UltimateQuestion } from "./pages/play";
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
