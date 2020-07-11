import { IStore, ICar } from "./types";

export const selectCars = (store: IStore): ICar[] => store.app.cars;
