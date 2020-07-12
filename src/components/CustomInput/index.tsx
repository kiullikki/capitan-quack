import React, { SyntheticEvent, useMemo } from "react";

interface IProps {
  name: string;
  label: string;
  className: string;
  value: string | number;
  isValid: boolean;
  type?: string;
  onChange: (e: SyntheticEvent) => void;
  isTouched?: boolean;
  error?: string;
}

export const CustomInput = (props: IProps) => {
  const {
    label,
    name,
    className,
    type = "string",
    onChange,
    value,
    error,
    isValid,
    isTouched,
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
      <input
        id={`input-${name}`}
        className={inputClasses}
        type={type}
        onChange={onChange}
        name={name}
        value={value}
      />
      <label className={labelClasses} htmlFor={`input-${name}`}>
        {label}
      </label>
      {isInvalid && <div className="input__error">{error}</div>}
    </div>
  );
};
