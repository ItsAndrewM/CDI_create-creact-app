import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import CurrencyDropDown from "./CurrencyDropdown";
import CartCard from "./CartCard";
import CartSubtotal from "./CartSubtotal";
import Coupons from "./Coupons";
import CartEmpty from "./CartEmpty";

const Cart = () => {
  const { state } = useContext(CartContext);
  const [coupons, setCoupons] = useState(false);
  const [discount, setDiscount] = useState();
  const [containsFf2, setContainsFf2] = useState(false);
  useEffect(() => {
    if (state.cart) {
      const found = state.cart.find((val) => {
        return val.product.name === "CDI FF2";
      });
      if (found) {
        setContainsFf2(true);
      } else {
        setContainsFf2(false);
      }
    }
  }, [state.cart]);

  return (
    <Wrapper>
      <Container>
        <Spacer></Spacer>
        <PContainer>
          <P>
            <strong>
              Taxes are based on your current location and will adjust during
              checkout when a shipping address is entered.
            </strong>
          </P>
        </PContainer>
        <Spacer></Spacer>
      </Container>
      <Container>
        <Spacer></Spacer>
        <CurrencyDropDown />
        <Spacer></Spacer>
      </Container>
      {/* {containsFf2 && (
        <Container>
          <Spacer></Spacer>
          <PContainer style={{ backgroundColor: "#FFD662FF" }}>
            <P style={{ color: "#00539CFF" }}>
              <strong>
                FF2 Furlers are currently out of stock! Please note that you
                will receive an FF4 instead.
              </strong>
            </P>
          </PContainer>
          <Spacer></Spacer>
        </Container>
      )} */}
      {state.cart.length ? (
        <Container>
          <Spacer></Spacer>
          <Container
            style={{
              minHeight: "400px",
              height: "auto",
            }}
          >
            <CartCardContainer>
              <CartCard cartState={state} />
              <Coupons setCoupons={setCoupons} setDiscount={setDiscount} />
            </CartCardContainer>
            <CartSubtotal
              cart={state.cart}
              discount={discount}
              coupons={coupons}
            />
          </Container>
          <Spacer></Spacer>
        </Container>
      ) : (
        <>
          <Container>
            <Spacer></Spacer>
            <CartEmpty />
            <Spacer></Spacer>
          </Container>
        </>
      )}
    </Wrapper>
  );
};

const PContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: var(--accent-secondary-color);
  width: 100%;
`;

const P = styled.p`
  width: 100%;
  text-align: center;
  color: white;
`;

const CartCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  gap: 15px;
  padding: 10px;
`;

const Spacer = styled.div`
  width: 25%;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  @media screen and (max-width: 1024px) {
    margin: 10px;
  }
`;
export default Cart;
