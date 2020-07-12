import { ISelectOption } from "../CustomSelect";
import { STATUS_CAR_TYPE } from "../../interfaces";

export enum FIELD_TYPE {
  NAME = "name",
  YEAR = "year",
  COLOR = "color",
  STATUS = "status",
  PRICE = "price",
  DESCRIPTION = "description",
}

export enum CAR_COLOR {
  WHITE = "white",
  BLACK = "black",
  GRAY = "gray",
  RED = "red",
  GREEN = "green",
}

export const DICTIONARY = {
  [FIELD_TYPE.NAME]: "Название",
  [FIELD_TYPE.YEAR]: "Год",
  [FIELD_TYPE.COLOR]: "Цвет",
  [FIELD_TYPE.STATUS]: "Статус",
  [FIELD_TYPE.PRICE]: "Цена",
  [FIELD_TYPE.DESCRIPTION]: "Описание",
  [STATUS_CAR_TYPE.PEDNDING]: "Ожидается",
  [STATUS_CAR_TYPE.IN_STOCK]: "В наличие",
  [STATUS_CAR_TYPE.OUT_IN_STOCK]: "Нет в наличии",
  SUBMIT: "Отправить",
};

export const INITIAL_VALUES = {
  [FIELD_TYPE.NAME]: "",
  [FIELD_TYPE.YEAR]: "",
  [FIELD_TYPE.COLOR]: CAR_COLOR.GRAY,
  [FIELD_TYPE.STATUS]: "",
  [FIELD_TYPE.PRICE]: "",
  [FIELD_TYPE.DESCRIPTION]: "",
};

export const STATUS_OPTIONS: ISelectOption[] = [
  {
    value: STATUS_CAR_TYPE.PEDNDING,
    label: DICTIONARY[STATUS_CAR_TYPE.PEDNDING],
  },
  {
    value: STATUS_CAR_TYPE.IN_STOCK,
    label: DICTIONARY[STATUS_CAR_TYPE.IN_STOCK],
  },
  {
    value: STATUS_CAR_TYPE.OUT_IN_STOCK,
    label: DICTIONARY[STATUS_CAR_TYPE.OUT_IN_STOCK],
  },
];
