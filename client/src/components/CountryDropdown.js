import { Country } from "country-state-city";

const CountryDropdown = ({ val, name, register }) => {
  return (
    val &&
    name && (
      <select {...register(name, { required: true })} required={true}>
        <option defaultValue="" value="">
          Select a Country
        </option>
        {Country.getAllCountries().map((country, index) => {
          return (
            <option key={index} value={country.isoCode} name={country.name}>
              {country.name}
            </option>
          );
        })}
      </select>
    )
  );
};

export default CountryDropdown;
