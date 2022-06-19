export type UltimateQuestionGameParams = {
  isPlaying?: boolean;
  buttonText?: string;
  greeting?: string;
  count?: number;
  onLap?: Callback;
  onStop?: Callback;
  setRules?: Callback;
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
type Callback = (game: UltimateQuestionGame) => void;

export type Score = { player: string; count: number };
