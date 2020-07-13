import React, { useMemo } from "react";
import "./styles.scss";

export const Header = () => {
  const imgUrl = useMemo(() => require("../../assets/images/logo.png"), []);

  return (
    <header className="header">
      <img className="header__logo" src={imgUrl} alt={"capitan-quack"} />
    </header>
  );
};
