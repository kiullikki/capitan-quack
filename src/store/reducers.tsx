import { combineReducers } from "redux";
import { IAppStore } from "./types";
import { ACTIONS_TYPES } from "./actions";
import { createId } from "../utils";
import { CAR_COLOR, STATUS_CAR_TYPE } from "../interfaces";

const INITIAL_STATE: IAppStore = {
  cars: [
    {
      id: 1,
      title:
        "1.6 MT Ambiente 85 л.с. МКПП 1.6 MT Ambiente 85 л.с. МКПП 1.6 MT Ambiente 85 л.с. МКПП",
      description:
        "+ доп. опция Радио-навигационная система Amundasen 2DIN, CD, MP3",
      year: 2012,
      color: CAR_COLOR.RED,
      status: STATUS_CAR_TYPE.PEDNDING,
      price: 1689000,
    },
  ],
  isLoadingCars: false,
  isErrorCars: false,
};

export const appReducer = (state = INITIAL_STATE, action: any): IAppStore => {
  const { type } = action;
  switch (type) {
    case ACTIONS_TYPES.ADD_CAR: {
      const car = action.payload;
      return {
        ...state,
        cars: [...state.cars, { ...car, id: createId() }],
      };
    }
    case ACTIONS_TYPES.DELETE_CAR: {
      console.log("payload", action.payload);
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
