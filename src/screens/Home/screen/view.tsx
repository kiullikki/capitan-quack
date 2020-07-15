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

        <section className="home__table table">
          <div className="table__header">
            <div className="table__row">
              <div className="table__title table__name">{DICTIONARY.NAME}</div>
              <div className="table__title table__year">{DICTIONARY.YEAR}</div>
              <div className="table__title table__color">
                {DICTIONARY.COLOR}
              </div>
              <div className="table__title table__status">
                {DICTIONARY.STATUS}
              </div>
              <div className="table__title table__price">
                {DICTIONARY.PRICE}
              </div>
              <div className="table__control"></div>
            </div>
          </div>
          <ul className="table__list list">
            {cars.map((car) => (
              <TableRow car={car} deleteCar={deleteCar} key={`row-${car.id}`} />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};
