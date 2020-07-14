import Moment from "moment";
import { ISelectOption } from "../CustomSelect";

const FORMATE_YEAR = "YYYY";

const currentYear = Moment(new Date(Date.now())).format(FORMATE_YEAR);

const createAddOption = (date: string): ISelectOption => {
  const nextYear = Moment(date, FORMATE_YEAR)
    .add(1, "year")
    .format(FORMATE_YEAR);
  return { value: nextYear, label: nextYear };
};

const createYearsOptions = (years: ISelectOption[]): ISelectOption[] => {
  const lastYear = years[years.length - 1].value;
  if (Number(lastYear) < Number(currentYear)) {
    const newYears = [...years, createAddOption(lastYear)];
    return createYearsOptions(newYears);
  } else {
    return years;
  }
};

export const createYearOptions = (minYear: string): ISelectOption[] => {
  const initialOption = { value: minYear, label: minYear };
  const options = createYearsOptions([initialOption]);
  return options;
};
