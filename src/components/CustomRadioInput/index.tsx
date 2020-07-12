import React from "react";
import "./style.scss";

interface IProps {
  className?: string;
  name: string;
  onChange?: any;
  isChecked?: boolean;
  value: string;
}

export const CustomRadioInput = (props: IProps) => {
  const { className, name, onChange, isChecked, value } = props;
  return (
    <div className={`${className} radio`}>
      <div className={"radio__wrapper"}>
        <div className={"radio__control"}>
          <label htmlFor={name}>
            <input
              name={name}
              className={"radio__input"}
              type="radio"
              id={name}
              value={value}
              onChange={onChange}
              checked={isChecked}
            />
            <span className={"radio__custom"} />
            <span className={"radio__label"} />
          </label>
        </div>
      </div>
    </div>
  );
};
