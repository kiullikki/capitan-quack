import React, { useCallback, useEffect } from "react";
import { HomePageView } from "./view";
import { useSelector, useDispatch } from "react-redux";
import { selectCars } from "../../../store/selectors";
import {
  addCarAction,
  deleteCarAction,
  getAllCarsAction,
} from "../../../store";
import { ICar } from "../../../interfaces";

export const HomePageController = () => {
  const cars = useSelector(selectCars);

  const dispatch = useDispatch();

  const addCar = useCallback((car: ICar) => dispatch(addCarAction(car)), [
    dispatch,
  ]);

  const deleteCar = useCallback((id: number) => dispatch(deleteCarAction(id)), [
    dispatch,
  ]);

  useEffect(() => {
    dispatch(getAllCarsAction());
  }, [dispatch]);

  return <HomePageView cars={cars} addCar={addCar} deleteCar={deleteCar} />;
};
