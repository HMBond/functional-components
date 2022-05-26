import button from "../components/atoms/button";
import input from "../components/atoms/input";
import container from "../components/molecules/container";
import element from "../components/quarks/element";
import { Page } from "../interfaces";
import game from "./the-ultimate-question.game";

export default function theUltimateQuestion(): HTMLElement {
  const nameInput = input("name", {
    placeholder: "Your name",
    oninput: onNameInput,
  });
  const display = element("h1", { innerText: "Hello" });
  const talkButton = button("Ask question");
  const roundCounter = element("code");

  game({ display, button: talkButton }, onFinished).start();

  const page = container([
    nameInput,
    display,
    container(talkButton),
    roundCounter,
  ]) as Page;
  page.displayName = "The Ultimate Question";

  return page;

  function onNameInput(e: Event) {
    display.innerText = "Hello " + (e.target as HTMLInputElement).value;
  }

  function onFinished(roundCount: number) {
    roundCounter.innerText = `You've played ${roundCount.toString()} rounds`;
  }
}
