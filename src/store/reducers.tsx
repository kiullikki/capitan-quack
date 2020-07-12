import { combineReducers } from "redux";
import { TAppAction, IAppStore } from "./types";
import { ACTIONS_TYPES } from "./actions";

const INITIAL_STATE: IAppStore = {
  cars: [],
  isLoadingCars: false,
  isErrorCars: false,
};

export const appReducer = (
  state = INITIAL_STATE,
  action: TAppAction
): IAppStore => {
  const { type } = action;
  switch (type) {
    case ACTIONS_TYPES.ADD_CAR: {
      const { payload } = action;
      return {
        ...state,
        cars: [...state.cars, payload],
      };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  app: appReducer,
});
