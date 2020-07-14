import React, { SyntheticEvent, useMemo } from "react";

export enum TYPE_TAG {
  BUTTON = "BUTTON",
  INPUT = "INPUT",
}

interface IProps {
  name: string;
  label: string;
  className?: string;
  value: string | number;
  isValid: boolean;
  type?: string;
  onChange?: (e: SyntheticEvent) => void;
  onClick?: (e: SyntheticEvent) => void;
  isTouched?: boolean;
  error?: string;
  mode?: TYPE_TAG;
}

export const CustomInput = (props: IProps) => {
  const {
    label,
    name,
    className = "",
    type = "string",
    onChange = () => {},
    value,
    error,
    isValid,
    isTouched,
    mode = TYPE_TAG.INPUT,
    onClick = () => {},
  } = props;

  const isInvalid = useMemo(() => !isValid && isTouched, [isValid, isTouched]);
  const inputClasses = useMemo(
    () => `input__field ${isInvalid && "input__field--error"}`,
    [isInvalid]
  );
  const labelClasses = useMemo(
    () =>
      `input__label ${isInvalid && "input__label--error"} ${
        !!value && "input__label--top"
      }`,
    [isInvalid, value]
  );

  return (
    <div className={`${className} input`}>
      {mode === TYPE_TAG.INPUT ? (
        <input
          id={`input-${name}`}
          className={inputClasses}
          type={type}
          onChange={onChange}
          name={name}
          value={value}
        />
      ) : (
        <button
          id={`input-${name}`}
          className={inputClasses}
          type="button"
          onChange={onChange}
          name={name}
          value={value}
          onClick={onClick}
        />
      )}

      <label className={labelClasses} htmlFor={`input-${name}`}>
        {label}
      </label>
      {isInvalid && <div className="input__error">{error}</div>}
    </div>
  );
};
