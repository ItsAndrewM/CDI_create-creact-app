import { useEffect, useState } from "react";
import styled from "styled-components";

const CartTotal = ({ address, subTotal, currency, shipping }) => {
  const [total, setTotal] = useState();

  useEffect(() => {
    let tote = 0;
    if (address) {
      if (address.country) {
        if (address.country === "CA") {
          tote = (
            (Number(subTotal) + Number(shipping)) *
              0.07 *
              Number(currency.rate) +
            (Number(subTotal) + Number(shipping)) *
              0.05 *
              Number(currency.rate) +
            (Number(subTotal) + Number(shipping)) * Number(currency.rate)
          ).toFixed(2);
        }
      }
    } else {
      tote = (
        (Number(subTotal) + Number(shipping)) *
        Number(currency.rate)
      ).toFixed(2);
    }
    setTotal(tote);
  }, [address, subTotal, currency, shipping]);
  return (
    <>
      <P>Total</P>
      {total && (
        <>
          <RightP>
            {currency.currencyCode} ${total}
          </RightP>
        </>
      )}
    </>
  );
};

const P = styled.p`
  font-weight: bold;
  width: 100%;
  text-align: left;
`;

const RightP = styled.p`
  width: 100%;
  text-align: right;
  font-weight: bold;
`;
export default CartTotal;
