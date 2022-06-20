import { Dispatch } from "react";

export interface IToggleButtons {
  curPart: number;
  setCurPart: Dispatch<number>;
}

export interface IPartList {
  id: number;
  name: string;
}
