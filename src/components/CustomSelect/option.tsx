import React from "react";

interface IProps {
  selectHandler: () => void;
  label: string;
}

export const OptionItem = (props: IProps) => {
  const { label = "", selectHandler = () => {} } = props;
  return (
    <li className="select__option list__item">
      <button
        className="select__option-btn btn btn--transparent"
        onClick={selectHandler}
      >
        {label}
      </button>
    </li>
  );
};
