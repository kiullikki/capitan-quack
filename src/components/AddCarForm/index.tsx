import React, { useCallback } from "react";
import { Formik } from "formik";
import { ERRORS } from "../../constants";
import * as Yup from "yup";
import "./style.scss";
import { CustomInput } from "../CustomInput";
import { CustomRadioInput } from "../CustomRadioInput";
import { CustomSelect } from "../CustomSelect";
import {
  INITIAL_VALUES,
  DICTIONARY,
  FIELD_TYPE,
  STATUS_OPTIONS,
} from "./constants";

const { SHOULD_BE_FILLED, SHOULD_BE_SELECTED } = ERRORS;

const schema = Yup.object().shape({
  [FIELD_TYPE.NAME]: Yup.string().required(SHOULD_BE_FILLED),
  [FIELD_TYPE.YEAR]: Yup.string().required(SHOULD_BE_FILLED),
  [FIELD_TYPE.DESCRIPTION]: Yup.string().required(SHOULD_BE_FILLED),
  [FIELD_TYPE.PRICE]: Yup.string().required(SHOULD_BE_FILLED),
  [FIELD_TYPE.STATUS]: Yup.string().required(SHOULD_BE_SELECTED),
});

interface IProps {
  className?: string;
}

export const AddCarForm = (props: IProps) => {
  const { className = "" } = props;

  const onSubmit = useCallback((vlues) => console.log("submit", vlues), []);

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
      }) => (
        <form onSubmit={handleSubmit} className={`${className} form`}>
          <div className="form__row">
            <CustomInput
              className="form__input"
              onChange={handleChange}
              name={FIELD_TYPE.NAME}
              label={DICTIONARY[FIELD_TYPE.NAME]}
              value={values[FIELD_TYPE.NAME]}
              isTouched={touched[FIELD_TYPE.NAME]}
              error={errors[FIELD_TYPE.NAME]}
              isValid={!errors[FIELD_TYPE.NAME]}
            />
            <CustomInput
              className="form__input"
              onChange={handleChange}
              name={FIELD_TYPE.YEAR}
              label={DICTIONARY[FIELD_TYPE.YEAR]}
              value={values[FIELD_TYPE.YEAR]}
              isTouched={touched[FIELD_TYPE.YEAR]}
              error={errors[FIELD_TYPE.YEAR]}
              isValid={!errors[FIELD_TYPE.YEAR]}
            />
            <CustomInput
              className="form__input"
              onChange={handleChange}
              name={FIELD_TYPE.PRICE}
              label={DICTIONARY[FIELD_TYPE.PRICE]}
              value={values[FIELD_TYPE.PRICE]}
              isTouched={touched[FIELD_TYPE.PRICE]}
              error={errors[FIELD_TYPE.PRICE]}
              isValid={!errors[FIELD_TYPE.PRICE]}
            />
          </div>
          <div className="form__row">
            <CustomInput
              className="form__input"
              onChange={handleChange}
              name={FIELD_TYPE.DESCRIPTION}
              label={DICTIONARY[FIELD_TYPE.DESCRIPTION]}
              value={values[FIELD_TYPE.DESCRIPTION]}
              isTouched={touched[FIELD_TYPE.DESCRIPTION]}
              error={errors[FIELD_TYPE.DESCRIPTION]}
              isValid={!errors[FIELD_TYPE.DESCRIPTION]}
            />
          </div>
          <div className="form__row">
            <CustomSelect
              className={"form__input"}
              options={STATUS_OPTIONS}
              name={FIELD_TYPE.STATUS}
              label={DICTIONARY[FIELD_TYPE.STATUS]}
              value={values[FIELD_TYPE.STATUS]}
              setFieldValue={setFieldValue}
              isTouched={touched[FIELD_TYPE.STATUS]}
              error={errors[FIELD_TYPE.STATUS]}
              isValid={!errors[FIELD_TYPE.STATUS]}
            />

            <button className="form__submit btn" type="submit">
              {DICTIONARY.SUBMIT}
            </button>
          </div>
        </form>
      )}
    />
  );
};
