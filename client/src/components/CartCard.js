import styled from "styled-components";
import CartItem from "./CartItem";
import CartCardHeaders from "./CartCardHeaders";

const CartCard = ({ cartState }) => {
  return (
    <Wrapper>
      <CartCardHeaders />
      <Container>
        {cartState.cart.length &&
          cartState.cart.map((val, index) => {
            return <CartItem key={index} cartItem={val} i={index} />;
          })}
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  border: 1px solid grey;
  padding: 10px;
`;

export default CartCard;
