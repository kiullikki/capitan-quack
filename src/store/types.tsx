import { actionCreators } from "./actions";
import { ICar } from "../interfaces";

export interface IAppStore {
  cars: ICar[];
  isLoadingCars: boolean;
  isErrorCars: boolean;
}

export interface IStore {
  app: IAppStore;
}

type InferTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type TAppAction = ReturnType<InferTypes<typeof actionCreators>>;
