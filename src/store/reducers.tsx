import { combineReducers } from "redux";
import { IAppStore, TAppAction } from "./types";
import { ACTIONS_TYPES } from "./actions";
import { createId } from "../utils";

const INITIAL_STATE: IAppStore = {
  cars: [],
  isLoadingCars: false,
  isErrorCars: false,
};

export const appReducer = (
  state = INITIAL_STATE,
  action: TAppAction
): IAppStore => {
  switch (action.type) {
    case ACTIONS_TYPES.FETCH_CARS_START: {
      return {
        ...state,
        isLoadingCars: true,
        isErrorCars: false,
      };
    }
    case ACTIONS_TYPES.FETCH_CARS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        isLoadingCars: false,
        isErrorCars: false,
        cars: payload,
      };
    }
    case ACTIONS_TYPES.FETCH_CARS_ERROR: {
      return {
        ...state,
        isLoadingCars: false,
        isErrorCars: true,
      };
    }
    case ACTIONS_TYPES.ADD_CAR: {
      const { payload } = action;
      return {
        ...state,
        cars: [...state.cars, { ...payload, id: createId() }],
      };
    }
    case ACTIONS_TYPES.DELETE_CAR: {
      const id = action.payload;
      const carsFiltered = state.cars.filter((item) => item.id !== id);
      return {
        ...state,
        cars: carsFiltered,
      };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  app: appReducer,
});
