import { button, element } from "../components";
import {
  UltimateQuestionGame,
  UltimateQuestionGameParams,
} from "./the-ultimate-question.d";

export default function getGame({
  buttonText = "Start",
  displayValue = "",
  count = 0,
  onLap,
  onStop,
}: UltimateQuestionGameParams): UltimateQuestionGame {
  const game: UltimateQuestionGame = {
    isPlaying: false,
    start,
    stop,
    count,
    button: button(buttonText, {
      title: "Tip: Use the space bar!",
      onclick: () => start(),
    }),
    display: element("h1", { innerText: displayValue }),
    counter: element("code"),
  };

  return game;

  function start(reset?: boolean): UltimateQuestionGame {
    stop();
    game.isPlaying = true;
    if (reset) {
      game.count = 0;
    }
    game.button.onclick = onFirstClick;
    game.button.innerText = "Ask question";
    return game;
  }

  function onFirstClick() {
    game.display.innerText = "How are you today?";
    game.button.innerText = "Ask another question";
    game.button.onclick = onSecondClick;
  }

  function onSecondClick() {
    game.display.innerText =
      "What is the answer to life, the universe, and everything?";
    game.button.innerText = "Tell me";
    game.button.onclick = onThirdClick;
  }

  function onThirdClick() {
    game.display.innerText = "42";
    game.button.innerText = "Repeat";
    game.button.onclick = onFirstClick;
    game.count = game.count + 1;
    game.counter.innerText = `You've played ${game.count} rounds`;
    onLap && onLap(game.count);
  }

  function stop(): UltimateQuestionGame {
    if (game.isPlaying) {
      game.isPlaying = false;
      onStop && onStop(game.count);
    }
    return game;
  }
}
