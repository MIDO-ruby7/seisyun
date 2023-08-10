import { Choice } from "./Choice";

type DialogIvent = {
  type: "dialog";
  text: string;
  actorName?: string;
};

type SetBackgroundIvent = {
  type: "setBackground";
  x: number;
  y: number;
  key: string;
};

type AddForegroundEvent = {
  type: 'addForeground',
  x: number,
  y: number,
  key: string
};

type ClearForegroundEvent = {
  type: 'clearForeground'
};

type TimelineTransitionEvent = {
  type: 'timelineTransition',
  timelineID: string
};

type SceneTransitionEvent = {
  type: 'sceneTransition',
  key: string,
  data?: object
};

type ChoiceEvent = {
  type: 'choice',
  choices: Choice[]
};

export type Timeline = (DialogIvent | SetBackgroundIvent | AddForegroundEvent | ClearForegroundEvent | TimelineTransitionEvent | SceneTransitionEvent | ChoiceEvent)[];