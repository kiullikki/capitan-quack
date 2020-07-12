import React from "react";
import { DICTIONARY } from "./constants";
import { AddCarForm } from "../../../components";
import { ICar } from "../../../interfaces";
import "./style.scss";

interface IProps {
  cars?: ICar[];
  addCar: (car: ICar) => void;
}

export const HomePageView = (props: IProps) => {
  const { cars = [], addCar = () => {} } = props;

  return (
    <main className="home">
      <div className="container">
        <h1 className="home__name title title--main">{DICTIONARY.CARAMBA}</h1>
        <AddCarForm className="home__form" addCar={addCar} />
        <h2 className="home__title title">{DICTIONARY.CARS_AVAILABLE}</h2>
        <section className="home__table table">
          <div className="table__header table__row">
            <span className="table__title table__name">{DICTIONARY.NAME}</span>
            <span className="table__title table__year">{DICTIONARY.YEAR}</span>
            <span className="table__title table__color">
              {DICTIONARY.COLOR}
            </span>
            <span className="table__title table__status">
              {DICTIONARY.STATUS}
            </span>
            <span className="table__title table__price">
              {DICTIONARY.PRICE}
            </span>
            <span className="table__control" />
          </div>
          {cars.map((car) => null)}
        </section>
      </div>
    </main>
  );
};
