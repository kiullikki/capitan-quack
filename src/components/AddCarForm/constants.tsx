import { ISelectOption } from "../CustomSelect";
import { STATUS_CAR_TYPE, CAR_COLOR } from "../../interfaces";

export const MIN_YEAR_CAR = "1970";

export enum FIELD_TYPE {
  TITLE = "title",
  YEAR = "year",
  COLOR = "color",
  STATUS = "status",
  PRICE = "price",
  DESCRIPTION = "description",
}

export const DICTIONARY = {
  [FIELD_TYPE.TITLE]: "Название",
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
  [FIELD_TYPE.TITLE]: "",
  [FIELD_TYPE.YEAR]: "",
  [FIELD_TYPE.COLOR]: CAR_COLOR.GRAY,
  [FIELD_TYPE.STATUS]: "",
  [FIELD_TYPE.PRICE]: "",
  [FIELD_TYPE.DESCRIPTION]: "",
};

export const RADIO_COLORS = [
  CAR_COLOR.WHITE,
  CAR_COLOR.BLACK,
  CAR_COLOR.GRAY,
  CAR_COLOR.RED,
  CAR_COLOR.GREEN,
];

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
