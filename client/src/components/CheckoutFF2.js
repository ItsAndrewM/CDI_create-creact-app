import { useEffect, useState } from "react";
import styled from "styled-components";

const CheckoutFF2 = ({ cart }) => {
  const [containsFf2, setContainsFf2] = useState(false);
  const [correctFF, setCorrectFF] = useState(false);

  const handleChange = (e) => {
    setCorrectFF(e.target.checked);
  };

  useEffect(() => {
    if (cart.cart) {
      const found = cart.cart.find((val) => {
        return val.product.name === "CDI FF2";
      });
      if (found) {
        setContainsFf2(true);
      } else {
        setContainsFf2(false);
      }
    }
  }, [cart.cart]);

  return (
    containsFf2 && (
      <Container>
        <input type="checkbox" required onClick={handleChange} />
        <label>
          <strong>
            FF2 Furlers are currently out of stock! Confirm that you acknowledge
            you will receive an FF4 instead.
          </strong>
        </label>
      </Container>
    )
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export default CheckoutFF2;
