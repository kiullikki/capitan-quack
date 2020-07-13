import React, { useMemo, useCallback } from "react";
import { ICar, CAR_COLOR, STATUS_CAR_TYPE } from "../../../interfaces";
import { DICTIONARY } from "./constants";

interface IProps {
  car: ICar;
  deleteCar: (id: number) => void;
}
export const TableRow = (props: IProps) => {
  const {
    car: {
      title = "",
      year = 1970,
      color = CAR_COLOR.GRAY,
      status = STATUS_CAR_TYPE.IN_STOCK,
      price = 0,
      description = "",
      id = 0,
    },
    deleteCar = () => {},
  } = props;

  const colorClasses = useMemo(
    () => `table__color table__marker table__marker--${color}`,
    [color]
  );
  const deleteClickHandler = useCallback(() => deleteCar(id), [deleteCar, id]);
  return (
    <li className="table__row table__item list__item">
      <div className="table__name">
        <p className="table__text">{title}</p>
        <p className="table__text table__text--light">{description}</p>
      </div>
      <p className="table__text table__year">{year}</p>
      <span className={colorClasses} />
      <p className="table__text table__status">{DICTIONARY[status]}</p>
      <p className="table__text table__price">{price}</p>
      <button
        className="table__control btn btn--transparent"
        type="button"
        onClick={deleteClickHandler}
      >
        {DICTIONARY.DELETE}
      </button>
    </li>
  );
};
