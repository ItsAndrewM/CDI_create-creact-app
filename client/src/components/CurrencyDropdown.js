import styled from "styled-components";
import CurrencyOption from "./CurrencyOption";
import { useContext, useEffect, useState } from "react";
import { ExchangeRateContext } from "./ExchangeRateContext";

const CurrencyDropDown = () => {
  const { exchangeRate, action, state } = useContext(ExchangeRateContext);
  const handleChange = (e) => {
    const currencyObj = {
      currencyCode:
        e.target.options[e.target.options.selectedIndex].textContent.split(
          " - "
        )[1],
      name: e.target.options[e.target.options.selectedIndex].textContent.split(
        " - "
      )[0],
      rate: Number(e.target.value),
    };
    action.receieveRateSet(currencyObj);
  };
  return (
    <Form>
      <Select onChange={handleChange} defaultValue={state.rate}>
        {exchangeRate &&
          exchangeRate.map((cur, index) => {
            return <CurrencyOption key={index} cur={cur} />;
          })}
      </Select>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
`;

const Select = styled.select`
  width: 100%;
`;

export default CurrencyDropDown;
