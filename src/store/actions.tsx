import { ICar } from "../interfaces";

export enum ACTIONS_TYPES {
  INITIAL = "INITIAL",
  ADD_CAR = "ADD_CAR",
}

export interface IAddCarAction {
  type: ACTIONS_TYPES.ADD_CAR;
  payload: ICar;
}

export const addCarAction = (payload: ICar): IAddCarAction => ({
  type: ACTIONS_TYPES.ADD_CAR,
  payload,
});
