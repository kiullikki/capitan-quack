import React, { useCallback } from "react";
import { HomePageView } from "./view";
import { useSelector, useDispatch } from "react-redux";
import { selectCars } from "../../../store/selectors";
import { addCarAction } from "../../../store";
import { ICar } from "../../../interfaces";

export const HomePageController = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  const addCar = useCallback((car: ICar) => dispatch(addCarAction(car)), [
    dispatch,
  ]);

  return <HomePageView cars={cars} addCar={addCar} />;
};
