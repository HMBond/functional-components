export type UltimateQuestionGameParams = {
  isPlaying?: boolean;
  buttonText?: string;
  displayValue?: string;
  count?: number;
  onLap?: Callback;
  onStop?: Callback;
};

export type UltimateQuestionGame = {
  isPlaying: boolean;
  start: Start;
  stop: Stop;
  count: number;
  display: HTMLElement;
  button: HTMLButtonElement;
  counter: HTMLElement;
};

type Start = (reset?: boolean) => UltimateQuestionGame;
type Stop = () => UltimateQuestionGame;
type Callback = (count: number) => void;

export type Score = { player: string; count: number };
