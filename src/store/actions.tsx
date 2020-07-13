import { ICar } from "../interfaces";

export enum ACTIONS_TYPES {
  INITIAL = "INITIAL",
  ADD_CAR = "ADD_CAR",
  DELETE_CAR = "DELETE_CAR",
}

export interface IAddCarAction {
  type: ACTIONS_TYPES.ADD_CAR;
  payload: ICar;
}

export interface IDeleteCarAction {
  type: ACTIONS_TYPES.DELETE_CAR;
  payload: number;
}

export const addCarAction = (payload: ICar): IAddCarAction => ({
  type: ACTIONS_TYPES.ADD_CAR,
  payload,
});

export const deleteCarAction = (payload: number): IDeleteCarAction => ({
  type: ACTIONS_TYPES.DELETE_CAR,
  payload,
});
