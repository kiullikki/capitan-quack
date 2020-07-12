import { IStore } from "./types";
import { ICar } from "../interfaces";

export const selectCars = (store: IStore): ICar[] => store.app.cars;
