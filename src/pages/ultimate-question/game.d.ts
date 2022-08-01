export type UltimateQuestionGameParams = {
  isPlaying?: boolean;
  buttonText?: string;
  greeting?: string;
  laps?: number;
  onLap?: Callback;
  onStop?: Callback;
  setRules?: Callback;
};

export type UltimateQuestionGame = {
  isPlaying: boolean;
  start: Start;
  stop: Stop;
  laps: number;
  display: HTMLElement;
  button: HTMLButtonElement;
  counter: HTMLElement;
};

type Start = (reset?: boolean) => UltimateQuestionGame;
type Stop = () => UltimateQuestionGame;
type Callback = (game: UltimateQuestionGame) => void;

export type Score = { player: string; laps: number };
