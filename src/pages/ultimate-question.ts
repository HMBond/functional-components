import { container, element, input, page } from "../components";
import { list } from "../components/organisms/list";
import { Page } from "../types";
import "./ultimate-question.css";
import { Score, UltimateQuestionGame } from "./ultimate-question.d";
import getGame from "./ultimate-question.game";

export function UltimateQuestion(): Page {
  const greeting = "Hello";
  let player = "";

  const nameInput = input("name", {
    placeholder: "Your name",
    oninput: onNameInput,
    className: "name-input",
  });
  const game = getGame({
    onLap,
    onStop,
    greeting: `${greeting} ...`,
    buttonText: "Go",
    setRules: (game: UltimateQuestionGame) => {
      game.button.onblur = () => {
        game.stop();
      };
    },
  });

  const highscores: Score[] = [];
  const scoreList = list(sort(highscores), (item) => scoreItem(item), {
    className: "high-scores",
  });

  return page("The Ultimate Question", [
    game.display,
    nameInput,
    container([game.button]),
    game.counter,
    scoreList.element,
  ]);

  function onNameInput(e: Event) {
    game.stop();
    player = (e.target as HTMLInputElement).value;
    game.display.innerText = `${greeting} ${player}`;
  }

  function onStop(game: UltimateQuestionGame) {
    const { count } = game;
    const score: Score = {
      player: player === "" ? "Anonymous" : player,
      count,
    };
    if (count > 0) saveHighscore(score);
    game.button.innerText = "Play again";
    game.display.innerText = finishMessage(score);
    game.button.onclick = () => {
      game.display.innerText = `${greeting} ${player}`;
      game.start(true);
    };
    game.counter.innerText = "";
  }

  function onLap(game: UltimateQuestionGame) {
    console.info("lap", game.count);
  }

  function finishMessage(score: Score): string {
    const unit = score.count === 1 ? "lab" : "labs";
    const message = `${score.player} scored: ${score.count} ${unit}`;
    const isHighscore =
      highscores.every((highScore) => highScore.count <= score.count) &&
      score.count !== 0;
    return isHighscore ? "Highscore!" : message;
  }

  function sort(highscores: Score[]): Score[] {
    return [
      ...highscores.sort((a: Score, b: Score) => {
        return a.count > b.count ? -1 : a.count < b.count ? 1 : 0;
      }),
    ];
  }

  function saveHighscore(score: Score) {
    highscores.push(score);
    scoreList.update(sort(highscores));
  }

  function scoreItem({ player, count }: Score): HTMLElement {
    const scoreItem = element("li", { className: "high-score" });
    scoreItem.append(
      element("span", { innerText: player }),
      element("span", {
        innerText: `${count} rounds`,
      })
    );
    return scoreItem;
  }
}
