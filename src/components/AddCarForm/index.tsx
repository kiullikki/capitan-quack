import React, { useCallback } from "react";
import { Formik } from "formik";
import { ERRORS } from "../../constants";
import * as Yup from "yup";
import "./style.scss";
import { CustomInput } from "../CustomInput";
import { CustomRadioInput } from "../CustomRadioInput";
import { CustomSelect } from "../CustomSelect";
import { CAR_COLOR, ICar } from "../../interfaces";
import {
  INITIAL_VALUES,
  DICTIONARY,
  FIELD_TYPE,
  STATUS_OPTIONS,
  RADIO_COLORS,
  MIN_YEAR_CAR,
} from "./constants";
import { createYearOptions } from "./utils";

const { SHOULD_BE_FILLED, SHOULD_BE_SELECTED } = ERRORS;

const schema = Yup.object().shape({
  [FIELD_TYPE.TITLE]: Yup.string().required(SHOULD_BE_FILLED),
  [FIELD_TYPE.YEAR]: Yup.string().required(SHOULD_BE_FILLED),
  [FIELD_TYPE.DESCRIPTION]: Yup.string().required(SHOULD_BE_FILLED),
  [FIELD_TYPE.PRICE]: Yup.string().required(SHOULD_BE_FILLED),
  [FIELD_TYPE.STATUS]: Yup.string().required(SHOULD_BE_SELECTED),
});

interface IProps {
  className?: string;
  addCar?: (car: ICar) => void;
}

export const AddCarForm = (props: IProps) => {
  const { className = "", addCar = () => {} } = props;

  const onSubmit = useCallback((vlues) => addCar(vlues), [addCar]);

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        onSubmit(values);
      }}
      render={({
        errors,
        handleSubmit,
        touched,
        handleChange,
        values,
        setFieldValue,
        isValid,
      }) => (
        <form onSubmit={handleSubmit} className={`${className} form`}>
          <CustomInput
            className="form__name"
            onChange={handleChange}
            name={FIELD_TYPE.TITLE}
            label={DICTIONARY[FIELD_TYPE.TITLE]}
            value={values[FIELD_TYPE.TITLE]}
            isTouched={touched[FIELD_TYPE.TITLE]}
            error={errors[FIELD_TYPE.TITLE]}
            isValid={!errors[FIELD_TYPE.TITLE]}
          />
          <CustomSelect
            className="form__year"
            options={createYearOptions(MIN_YEAR_CAR)}
            name={FIELD_TYPE.YEAR}
            label={DICTIONARY[FIELD_TYPE.YEAR]}
            value={values[FIELD_TYPE.YEAR]}
            setFieldValue={setFieldValue}
            isTouched={touched[FIELD_TYPE.YEAR]}
            error={errors[FIELD_TYPE.YEAR]}
            isValid={!errors[FIELD_TYPE.YEAR]}
          />
          <CustomInput
            className="form__price"
            onChange={handleChange}
            name={FIELD_TYPE.PRICE}
            label={DICTIONARY[FIELD_TYPE.PRICE]}
            value={values[FIELD_TYPE.PRICE]}
            isTouched={touched[FIELD_TYPE.PRICE]}
            error={errors[FIELD_TYPE.PRICE]}
            isValid={!errors[FIELD_TYPE.PRICE]}
            type="number"
          />
          <div className="form__description">
            <CustomInput
              onChange={handleChange}
              name={FIELD_TYPE.DESCRIPTION}
              label={DICTIONARY[FIELD_TYPE.DESCRIPTION]}
              value={values[FIELD_TYPE.DESCRIPTION]}
              isTouched={touched[FIELD_TYPE.DESCRIPTION]}
              error={errors[FIELD_TYPE.DESCRIPTION]}
              isValid={!errors[FIELD_TYPE.DESCRIPTION]}
            />
          </div>
          <div className="form__color">
            <span className="form__label">{DICTIONARY[FIELD_TYPE.COLOR]}</span>
            {RADIO_COLORS.map((color: CAR_COLOR) => (
              <CustomRadioInput
                className="form__radio"
                name={FIELD_TYPE.COLOR}
                key={color}
                value={color}
                onChange={handleChange}
                isChecked={color === values[FIELD_TYPE.COLOR]}
              />
            ))}
          </div>
          <CustomSelect
            className="form__status"
            options={STATUS_OPTIONS}
            name={FIELD_TYPE.STATUS}
            label={DICTIONARY[FIELD_TYPE.STATUS]}
            value={values[FIELD_TYPE.STATUS]}
            setFieldValue={setFieldValue}
            isTouched={touched[FIELD_TYPE.STATUS]}
            error={errors[FIELD_TYPE.STATUS]}
            isValid={!errors[FIELD_TYPE.STATUS]}
          />

          <button
            className="form__submit btn"
            type="submit"
            disabled={!isValid}
          >
            <span className="form__btn-text">{DICTIONARY.SUBMIT}</span>
          </button>
        </form>
      )}
    />
  );
};
