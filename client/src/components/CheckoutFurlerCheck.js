import { useEffect, useState } from "react";
import styled from "styled-components";

const CheckoutFurlerCheck = ({ setCorrectFF, cart }) => {
  const [furler, setFurler] = useState("");
  const handleChange = (e) => {
    setCorrectFF(e.target.checked);
  };

  useEffect(() => {
    if (cart.cart.length) {
      cart.cart.forEach((cartItem) => {
        if (cartItem.product.shipping_class.toLowerCase().includes("furler")) {
          setFurler(cartItem.product.name);
        } else {
          setCorrectFF(true);
        }
      });
    }
  }, [cart]);
  return (
    furler && (
      <Container>
        <input type="checkbox" required onClick={handleChange} />
        <label>
          It looks like you have an <strong>{furler}</strong> Furler or part in
          your cart, please confirm that your Sailboat length and mast are the
          correct length.
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
export default CheckoutFurlerCheck;
