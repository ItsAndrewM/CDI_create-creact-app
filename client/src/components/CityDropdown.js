import { City } from "country-state-city";
import { useEffect } from "react";

const CityDropdown = ({ countryVal, stateVal, handleCityChange }) => {
  return (
    <select>
      <option defaultValue="">Select a City</option>
      {countryVal &&
        stateVal &&
        City.getCitiesOfState(countryVal, stateVal).map((city) => {
          return (
            <option name={city.name} value={city.name}>
              {city.name}
            </option>
          );
        })}
      <option></option>
    </select>
  );
};

export default CityDropdown;
