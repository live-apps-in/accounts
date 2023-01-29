import { Country, State, City } from "country-state-city";

export const getCountries = () =>
  Country.getAllCountries().map((el) => ({
    name: el.name,
    countryId: el.isoCode,
  }));

export const getCountriesAsString = () =>
  Country.getAllCountries().map((el) => el.name);

export const getStates = (code) => {
  try {
    if (code)
      return State.getStatesOfCountry(code).map((el) => ({
        name: el.name,
        stateId: el.isoCode,
      }));
    return [];
  } catch {
    return [];
  }
};

export const getCities = (countryCode, stateCode) => {
  try {
    if (countryCode && stateCode)
      return City.getCitiesOfState(countryCode, stateCode).map((el) => ({
        name: el.name,
        countryCode: el.countryCode,
        stateCode: el.stateCode,
      }));
    return [];
  } catch {
    return [];
  }
};

export const getCitiesAsString = (countryCode, stateCode) => {
  try {
    if (countryCode && stateCode)
      return City.getCitiesOfState(countryCode, stateCode).map((el) => el.name);
    return [];
  } catch {
    return [];
  }
};
