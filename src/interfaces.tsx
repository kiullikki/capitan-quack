export enum CAR_COLOR {
  WHITE = "white",
  BLACK = "black",
  GRAY = "gray",
  RED = "red",
  GREEN = "green",
}

export enum STATUS_CAR_TYPE {
  PEDNDING = "pednding",
  OUT_IN_STOCK = "out_of_stock",
  IN_STOCK = "in_stock",
}

export interface ICar {
  id: number;
  title: string;
  description: string;
  year: number;
  color: CAR_COLOR;
  status: STATUS_CAR_TYPE;
  price: number;
}
