import React from "react";
import "./styles.scss";

const DICTIONARY = {
  copyrating: "© 2015 CAPTAIN QUACK",
  motto: "Десница тысячелетия и моллюск!",
};

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">{DICTIONARY.copyrating}</p>
      <p className="footer__text">{DICTIONARY.motto}</p>
    </footer>
  );
};
