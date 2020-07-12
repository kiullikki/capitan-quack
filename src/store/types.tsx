import { IInitialAction } from "./actions";
import { ICar } from "../interfaces";

export interface IAppStore {
  cars: ICar[];
  isLoadingCars: boolean;
  isErrorCars: boolean;
}

export interface IStore {
  app: IAppStore;
}

export type TAppAction = IInitialAction;
