import styled from "styled-components";
import { Country, State, City } from "country-state-city";
import CountryDropdown from "./CountryDropdown";
import StateDropdown from "./StateDropdown";

const AddressForm = ({
  change,
  address,
  setAddress,
  setChange,
  setDisplayAddress,
}) => {
  let form = {};

  const handleChange = (e) => {
    e.preventDefault();
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setDisplayAddress(address);
    setTimeout(() => setChange(false), 2 * 1000);
  };

  return (
    change && (
      <Form onChange={handleChange}>
        <CountryDropdown val={{ required: change }} name={"country"} />
        <StateDropdown
          countryVal={address}
          val={{ required: change }}
          name={"state"}
        />
        <Input placeholder="City" type="text" name="city" />
        <Input
          placeholder="House number and street name"
          type="text"
          name="address_1"
        />
        <Input
          placeholder="Apartment, Suite, Unit, etc."
          type="text"
          name="address_2"
        />
        <Input
          placeholder="Postcode/ZIP"
          type="text"
          pattern="\d{5}(?:-\d{4})?|[a-zA-Z]\d[a-zA-Z] ?\d[a-zA-Z]\d"
          name="postcode"
        />
        <button onClick={handleClick}>Update</button>
      </Form>
    )
  );
};

const Input = styled.input`
  width: 100%;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin: 10px 0px 10px 0px;
`;
export default AddressForm;
