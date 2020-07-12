export enum COLOR_TYPE {
  RED = "red",
}

export enum STATUS_CAR_TYPE {
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
  status: STATUS_CAR_TYPE;
  price: number;
}
