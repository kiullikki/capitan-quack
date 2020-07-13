import React from "react";
import { DICTIONARY } from "./constants";
import { AddCarForm } from "../../../components";
import { ICar } from "../../../interfaces";
import "./style.scss";
import { TableRow } from "./tableRow";

interface IProps {
  cars?: ICar[];
  addCar: (car: ICar) => void;
  deleteCar: (id: number) => void;
}

export const HomePageView = (props: IProps) => {
  const { cars = [], addCar = () => {}, deleteCar = () => {} } = props;

  return (
    <main className="home">
      <div className="container">
        <h1 className="home__name title title--main">{DICTIONARY.CARAMBA}</h1>
        <AddCarForm className="home__form" addCar={addCar} />
        <h2 className="home__title title">{DICTIONARY.CARS_AVAILABLE}</h2>
        <table className="home__table table">
          <thead className="table__header">
            <tr className="table__row">
              <th className="table__title table__name">{DICTIONARY.NAME}</th>
              <th className="table__title table__year">{DICTIONARY.YEAR}</th>
              <th className="table__title table__color">{DICTIONARY.COLOR}</th>
              <th className="table__title table__status">
                {DICTIONARY.STATUS}
              </th>
              <th className="table__title table__price">{DICTIONARY.PRICE}</th>
              <th className="table__control" />
            </tr>
          </thead>
          <tbody className="table__list">
            {cars.map((car) => (
              <TableRow car={car} deleteCar={deleteCar} key={`row-${car.id}`} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
