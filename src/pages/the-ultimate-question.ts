import { container, element, input } from "../components";
import { list } from "../components/organisms/list";
import { Page } from "../interfaces";
import "./the-ultimate-question.css";
import { Score } from "./the-ultimate-question.d";
import getGame from "./the-ultimate-question.game";

export default function theUltimateQuestion(): HTMLElement {
  const highscores: Score[] = [
    {
      player: "one",
      count: 1,
    },
    {
      player: "two",
      count: 2,
    },
    {
      player: "three",
      count: 3,
    },
  ];
  const greeting = "Hello";
  let player = "";

  const nameInput = input("name", {
    placeholder: "Your name",
    oninput: onNameInput,
  });
  const scoreList = list(getSorted(highscores), (item) => scoreItem(item), {
    className: "high-scores",
  });
  const game = getGame({
    onLap,
    onStop,
    displayValue: greeting,
    buttonText: "Go",
  });
  // little game hack
  game.button.onblur = () => game.stop();

  const page = container([
    nameInput,
    game.display,
    container(game.button),
    game.counter,
    scoreList.element,
  ]) as Page;

  page.name = "The Ultimate Question";

  return page;

  function onNameInput(e: Event) {
    game.stop();
    player = (e.target as HTMLInputElement).value;
    game.display.innerText = `${greeting} ${player}`;
  }

  function onStop(count: number) {
    const record: Score = {
      player: player === "" ? "Anonymous" : player,
      count,
    };
    if (count > 0) saveHighscore(record);
    game.button.innerText = "Play again";
    game.display.innerText = getCongrats(record);
    game.button.onclick = () => {
      game.display.innerText = `${greeting} ${player}`;
      game.start(true);
    };
    game.counter.innerText = "";
  }

  function onLap(count: number) {
    // toast(`Wow, you did already ${count} laps!`);
  }

  function getCongrats(score: Score): string {
    const isHighscore = highscores[0].count <= score.count;
    return isHighscore
      ? "Highscore!"
      : `${score.player} scored: ${score.count} rounds`;
  }

  function getSorted(highscores: Score[]): Score[] {
    return [
      ...highscores.sort((a: Score, b: Score) => {
        return a.count > b.count ? -1 : a.count < b.count ? 1 : 0;
      }),
    ];
  }

  function saveHighscore(record: Score) {
    highscores.push(record);
    scoreList.update(getSorted(highscores));
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
