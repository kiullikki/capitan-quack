import { ICar } from "../interfaces";

export enum ACTIONS_TYPES {
  FETCH_CARS = "FETCH_CARS",
  FETCH_CARS_START = "FETCH_CARS_START",
  FETCH_CARS_SUCCESS = "FETCH_CARS_SUCCESS",
  FETCH_CARS_ERROR = "FETCH_CARS_ERROR",
  ADD_CAR = "ADD_CAR",
  DELETE_CAR = "DELETE_CAR",
}

function literalType<T extends ACTIONS_TYPES>(actionName: T): T {
  return actionName;
}

export const getAllCarsAction = () => ({
  type: literalType(ACTIONS_TYPES.FETCH_CARS),
});

export const addCarAction = (payload: ICar) => ({
  type: literalType(ACTIONS_TYPES.ADD_CAR),
  payload,
});

export const deleteCarAction = (payload: number) => ({
  type: literalType(ACTIONS_TYPES.DELETE_CAR),
  payload,
});

export const fetchCarsSuccessAction = (payload: ICar[]) => ({
  type: literalType(ACTIONS_TYPES.FETCH_CARS_SUCCESS),
  payload,
});

export const fetchCarsErrorAction = () => ({
  type: literalType(ACTIONS_TYPES.FETCH_CARS_ERROR),
});

export const fetchCarsStartAction = () => ({
  type: literalType(ACTIONS_TYPES.FETCH_CARS_START),
});

export const actionCreators = {
  getAllCarsAction,
  addCarAction,
  deleteCarAction,
  fetchCarsSuccessAction,
  fetchCarsErrorAction,
  fetchCarsStartAction,
};
