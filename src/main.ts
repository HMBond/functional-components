import { nav } from "./components";
import { about } from "./pages/about";
import { UltimateQuestion } from "./pages/ultimate-question";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

const pages = [about(), UltimateQuestion()];
app.append(...nav(pages));
