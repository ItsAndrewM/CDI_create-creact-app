import { State } from "country-state-city";

const StateDropdown = ({ countryVal, val, name, register }) => {
  return (
    val &&
    name && (
      <select {...register(name, { required: true })} required={true}>
        <option defaultValue="" value="">
          Select a province/state
        </option>
        {countryVal &&
          State.getStatesOfCountry(countryVal.country).map((state, index) => {
            return (
              <option key={index} name={state.name} value={state.isoCode}>
                {state.name}
              </option>
            );
          })}
        <option></option>
      </select>
    )
  );
};

export default StateDropdown;
