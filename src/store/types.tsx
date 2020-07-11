import { IInitialAction } from "./actions";

export enum COLOR_TYPE {
  RED = "red",
}

export enum STATUS_TYPE {
  PEDNDING = "pednding",
  OUT_IN_STOCK = "out_of_stock",
  IN_STOCK = "in_stock",
}

export interface ICar {
  id: string;
  title: string;
  description: string;
  year: number;
  color: COLOR_TYPE;
  status: STATUS_TYPE;
  price: number;
}

export interface IAppStore {
  cars: ICar[];
  isLoadingCars: boolean;
  isErrorCars: boolean;
}

export interface IStore {
  app: IAppStore;
}

export type TAppAction = IInitialAction;
