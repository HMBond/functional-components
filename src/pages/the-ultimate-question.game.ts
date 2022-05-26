export default function game(
  components: {
    display: HTMLElement;
    button: HTMLButtonElement;
  },
  finishCallback?: (roundCount: number) => void
): { start: () => void } {
  const { display, button } = components;
  let roundCount = 0;

  function start() {
    button.onclick = onButtonClick;
  }

  function onButtonClick() {
    display.innerText = "How are you today?";
    button.innerText = "Ask another question";
    button.onclick = onSecondButtonClick;
  }

  function onSecondButtonClick() {
    display.innerText =
      "What is the answer to life, the universe, and everything?";
    button.innerText = "Tell me";
    button.onclick = onThirdButtonClick;
  }

  function onThirdButtonClick() {
    display.innerText = "42";
    button.innerText = "Repeat";
    roundCount++;
    finishCallback && finishCallback(roundCount);
    start();
  }

  return {
    start,
  };
}
