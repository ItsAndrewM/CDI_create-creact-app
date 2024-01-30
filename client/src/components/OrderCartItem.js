import styled from "styled-components";

const OrderCartItem = ({ cartItem, state }) => {
  return cartItem.selectedOption.option === "0" ? (
    <Container>
      <CartP>
        {cartItem.product.name} x {cartItem.quantity}
      </CartP>
      <CartP>
        {state.currencyCode} $
        {(
          Number(cartItem.quantity) *
          Number(cartItem.selectedOption.price) *
          Number(state.rate)
        ).toFixed(2)}
      </CartP>
    </Container>
  ) : (
    <Container>
      {cartItem.product.name.includes("FF") ? (
        <CartP>
          {cartItem.product.name + " - " + cartItem.selectedOption.option} x{" "}
          {cartItem.quantity}
        </CartP>
      ) : (
        <CartP>
          {cartItem.product.name +
            " - " +
            cartItem.product.attributes[0].name +
            " - " +
            cartItem.selectedOption.option}{" "}
          x {cartItem.quantity}
        </CartP>
      )}
      <CartP>
        {state.currencyCode} $
        {(
          Number(cartItem.quantity) *
          Number(cartItem.selectedOption.price) *
          Number(state.rate)
        ).toFixed(2)}
      </CartP>
    </Container>
  );
};

const CartP = styled.p`
  text-align: left;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
`;

export default OrderCartItem;
