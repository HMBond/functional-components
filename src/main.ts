import { nav } from "./components";
import about from "./pages/about";
import theUltimateQuestion from "./pages/the-ultimate-question";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.append(...nav([about(), theUltimateQuestion()]));
