import { container, element, input, list, page } from '../components';
import { Page } from '../components/organisms/page';
import ultimateQuestion from './ultimate-question/game';
import './ultimate-question/game.css';
import { Score, UltimateQuestionGame } from './ultimate-question/game.d';

export function play(): Page {
  const highscores: Score[] = [];
  const greeting = 'Hello';
  let player = '';

  const nameInput = input('name', {
    placeholder: 'Your name',
    oninput: onNameInput,
    className: 'name-input',
  });

  const game = ultimateQuestion({
    onLap,
    onStop,
    greeting: `${greeting} ...`,
    buttonText: 'Go',
    setRules: (game: UltimateQuestionGame) => {
      game.button.onblur = () => {
        game.stop();
      };
    },
  });

  const scoreList = list(sort(highscores), (item) => scoreItem(item), {
    className: 'high-scores',
  });

  return page('Play', [
    game.display,
    nameInput,
    container('div', [game.button]),
    game.counter,
    scoreList.element,
  ]);

  function onNameInput() {
    game.stop();
    player = nameInput.value;
    game.display.innerText = `${greeting} ${player}`;
  }

  function onStop(game: UltimateQuestionGame) {
    const { laps } = game;
    const score: Score = {
      player: player === '' ? 'Anonymous' : player,
      laps: laps,
    };
    if (laps > 0) saveHighscore(score);
    game.button.innerText = 'Play again';
    game.display.innerText = finishMessage(score);
    game.button.onclick = () => {
      game.display.innerText = `${greeting} ${player}`;
      game.start(true);
    };
    game.counter.innerText = '';
  }

  function onLap(game: UltimateQuestionGame) {
    console.info('lap', game.laps);
  }

  function finishMessage(score: Score): string {
    const unit = score.laps === 1 ? 'lab' : 'labs';
    const message = `${score.player} scored: ${score.laps} ${unit}`;
    const isHighscore =
      highscores.every((highScore) => highScore.laps <= score.laps) &&
      score.laps !== 0;
    return isHighscore ? 'Highscore!' : message;
  }

  function sort(highscores: Score[]): Score[] {
    return [
      ...highscores.sort((a: Score, b: Score) => {
        return a.laps > b.laps ? -1 : a.laps < b.laps ? 1 : 0;
      }),
    ];
  }

  function saveHighscore(score: Score) {
    highscores.push(score);
    scoreList.update(sort(highscores));
  }

  function scoreItem({ player, laps }: Score): HTMLLIElement {
    const scoreItem = element<HTMLLIElement>('li', { className: 'high-score' });
    scoreItem.append(
      element('span', { innerText: player }),
      element('span', {
        innerText: `${laps} rounds`,
      })
    );
    return scoreItem;
  }
}
