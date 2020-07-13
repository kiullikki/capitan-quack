import React, { SyntheticEvent } from "react";
import "./style.scss";

interface IProps {
  className?: string;
  name: string;
  onChange: (e: SyntheticEvent) => void;
  isChecked?: boolean;
  value: string;
}

export const CustomRadioInput = (props: IProps) => {
  const { className, name, onChange, isChecked, value } = props;
  const customClass = `radio__custom radio__custom--${value}`;

  return (
    <div className={`${className} radio`}>
      <label htmlFor={value} className={"radio__label"}>
        <input
          name={name}
          className={"radio__input"}
          type="radio"
          id={value}
          value={value}
          onChange={onChange}
          checked={isChecked}
        />
        <span className={customClass} />
      </label>
    </div>
  );
};
