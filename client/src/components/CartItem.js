import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ExchangeRateContext } from "./ExchangeRateContext";
import ClearIcon from "@mui/icons-material/Clear";
import { CartContext } from "./CartContext";

const CartItem = ({ cartItem, i }) => {
  const [itemPrice, setItemPrice] = useState();
  const { state } = useContext(ExchangeRateContext);
  const cartState = useContext(CartContext);

  const handleClick = (e) => {
    e.preventDefault();
    cartState.action.deleteCartItem(cartItem);
  };

  useEffect(() => {
    if (cartItem.selectedOption) {
      setItemPrice(cartItem.selectedOption.price);
    } else {
      if (cartItem.product) {
        setItemPrice(cartItem.product.price);
      }
    }
  }, [cartItem]);

  return (
    cartItem && (
      <Wrapper>
        <ButtonWrapper style={{ width: "10%" }}>
          <Button onClick={handleClick}>
            <ClearIcon />
          </Button>
        </ButtonWrapper>
        <ImgContainer>
          {cartItem.product && <Img src={cartItem.product.images[0].src} />}
        </ImgContainer>
        {cartItem.selectedOption && (
          <Container>
            {cartItem.selectedOption.option === "0" ? (
              <P>{cartItem.product.name}</P>
            ) : cartItem.product.name.includes("FF") ? (
              <P>
                {cartItem.product.name + " - " + cartItem.selectedOption.option}{" "}
                x {cartItem.quantity}
              </P>
            ) : (
              <P>
                {cartItem.product.name +
                  " - " +
                  cartItem.product.attributes[0].name +
                  " - " +
                  cartItem.selectedOption.option}
              </P>
            )}
          </Container>
        )}
        <Container>
          {itemPrice && state && (
            <P>
              {state.currencyCode} $
              {(Number(itemPrice) * Number(state.rate)).toFixed(2)}
            </P>
          )}
        </Container>
        <Container>{cartItem.quantity && <P>{cartItem.quantity}</P>}</Container>
        <Container>
          {itemPrice && state && (
            <P>
              {state.currencyCode} $
              {(
                Number(itemPrice) *
                Number(cartItem.quantity) *
                state.rate
              ).toFixed(2)}
            </P>
          )}
        </Container>
      </Wrapper>
    )
  );
};

const Button = styled.button`
  padding: 0px;
  border-radius: 50%;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const Img = styled.img`
  object-fit: cover;
  width: 55px;
  height: 55px;
`;

const P = styled.p`
  text-align: center;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--accent-secondary-color);
`;
export default CartItem;
