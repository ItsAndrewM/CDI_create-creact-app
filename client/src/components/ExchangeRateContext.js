import { createContext, useEffect, useReducer, useState } from "react";

export const ExchangeRateContext = createContext();

const inistialState = {
  currencyCode: "CAD",
  rate: 1,
  name: "Canadian",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "rate-set": {
      return {
        ...state,
        currencyCode: action.currencyCode,
        rate: action.rate,
        name: action.name,
      };
    }
    default:
      throw new Error(`unrecognized action ${state.type}`);
  }
};

export const ExchangeRateProvider = ({ children }) => {
  const [exchangeRate, setExchangeRate] = useState();
  const [state, dispatch] = useReducer(reducer, inistialState);

  const receieveRateSet = (data) => {
    dispatch({
      type: "rate-set",
      ...data,
    });
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/exchange-rate/cad`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status === 200) {
          const curCode = Object.keys(data.data.conversion_rates);
          const rates = Object.values(data.data.conversion_rates);
          const usdIndex = curCode.findIndex((val) => val === "USD");
          const gbpIndex = curCode.findIndex((val) => val === "GBP");

          const arr = [
            {
              currencyCode: "CAD",
              rate: 1,
              name: "Canadian",
            },
            { currencyCode: "USD", rate: rates[usdIndex], name: "American" },
            {
              currencyCode: "GBP",
              rate: rates[gbpIndex],
              name: "United Kingdom",
            },
          ];
          setExchangeRate(arr);
        } else {
          throw new Error();
        }
      })
      .catch((error) => {
        return error;
      });
  }, []);

  return (
    <ExchangeRateContext.Provider
      value={{ exchangeRate, state, action: { receieveRateSet } }}
    >
      {children}
    </ExchangeRateContext.Provider>
  );
};
