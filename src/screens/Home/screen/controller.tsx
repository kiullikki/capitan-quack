import React from "react";
import { HomePageView } from "./view";
import { useSelector } from "react-redux";
import { selectCars } from "../../../store/selectors";

export const HomePageController = () => {
  const cars = useSelector(selectCars);

  return <HomePageView cars={cars} />;
};
