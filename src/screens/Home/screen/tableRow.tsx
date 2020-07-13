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

  const colorClasses = useMemo(() => `table__marker table__marker--${color}`, [
    color,
  ]);
  const deleteClickHandler = useCallback(() => deleteCar(id), [deleteCar, id]);
  return (
    <tr className="table__row table__item list__item">
      <td className="table__name">
        <p className="table__text">{title}</p>
        <p className="table__text table__text--light">{description}</p>
      </td>
      <td className="table__text table__year">{year}</td>
      <td className="table__color">
        <div className={colorClasses} />
      </td>
      <td className="table__text table__status">{DICTIONARY[status]}</td>
      <td className="table__text table__price">{`${price} ${DICTIONARY.RUB}`}</td>
      <td className="table__control">
        <button
          className="table__btn btn btn--transparent btn--table"
          type="button"
          onClick={deleteClickHandler}
        >
          {DICTIONARY.DELETE}
        </button>
      </td>
    </tr>
  );
};
