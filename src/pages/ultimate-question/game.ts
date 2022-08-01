import { button, element } from '../../components';
import { UltimateQuestionGame, UltimateQuestionGameParams } from './game.d';

export default function ultimateQuestion({
  buttonText = 'Start',
  greeting = '',
  laps = 0,
  onLap,
  onStop,
  setRules,
}: UltimateQuestionGameParams): UltimateQuestionGame {
  const game: UltimateQuestionGame = {
    isPlaying: false,
    start,
    stop,
    laps: laps,
    button: button(buttonText, {
      title: 'Tip: Use the space bar!',
      onclick: () => start(),
    }),
    display: element('h1', { innerText: greeting }),
    counter: element('code'),
  };

  setRules && setRules(game);

  return game;

  function start(reset?: boolean): UltimateQuestionGame {
    stop();
    game.isPlaying = true;
    if (reset) {
      game.laps = 0;
    }
    game.button.onclick = onFirstClick;
    game.button.innerText = 'Ask question';
    return game;
  }

  function onFirstClick() {
    game.display.innerText = 'How are you today?';
    game.button.innerText = 'Ask another question';
    game.button.onclick = onSecondClick;
  }

  function onSecondClick() {
    game.display.innerText =
      'What is the answer to life, the universe, and everything?';
    game.button.innerText = 'Tell me';
    game.button.onclick = onThirdClick;
  }

  function onThirdClick() {
    game.display.innerText = '42';
    game.button.innerText = 'Repeat';
    game.button.onclick = onFirstClick;
    game.laps = game.laps + 1;
    game.counter.innerText = `You've played ${game.laps} rounds`;
    onLap && onLap(game);
  }

  function stop(): UltimateQuestionGame {
    if (game.isPlaying) {
      game.isPlaying = false;
      onStop && onStop(game);
    }
    return game;
  }
}
