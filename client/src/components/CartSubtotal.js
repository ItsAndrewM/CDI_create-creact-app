import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AddressForm from "./AddressForm";
import { useNavigate } from "react-router-dom";
import useFetchShipping from "../hooks/useFetchShipping";
import { ExchangeRateContext } from "./ExchangeRateContext";
import Tax from "./Tax";
import DisplayShortAddress from "./DisplayShortAddress";
import CartShipping from "./CartShipping";
import CartTotal from "./CartTotal";
import useFetchTaxesAll from "../hooks/useFetchTaxesAll";

const CartSubtotal = ({ cart }) => {
  const [change, setChange] = useState(false);
  const [address, setAddress] = useState();
  const [displayAddress, setDisplayAddress] = useState();
  const [subTotal, setSubTotal] = useState();
  const [shippingMethod, setShippingMethod] = useState();
  const { state } = useContext(ExchangeRateContext);
  const [stateTaxes, setStateTaxes] = useState();
  const navigate = useNavigate();

  const shipping = useFetchShipping();
  const taxes = useFetchTaxesAll();

  useEffect(() => {
    if (taxes && displayAddress) {
      if (displayAddress.country && displayAddress.state) {
        if (displayAddress.country === "CA") {
          const found = taxes.filter(
            (tax) => tax.state === displayAddress.state
          );
          setStateTaxes(found);
        }
      }
    }
  }, [taxes, displayAddress]);

  useEffect(() => {
    let sub = 0;
    if (cart) {
      cart
        .map((cartItem) => {
          if (cartItem.product) {
            if (cartItem.selectedOption) {
              const totalOfItem = (
                Number(cartItem.selectedOption.price) *
                Number(cartItem.quantity)
              ).toFixed(2);
              return totalOfItem;
            } else {
              return Number(cartItem.product.price);
            }
          }
        })
        .forEach((val) => {
          sub += Number(val);
        });
      let furlerVal = false;
      const isFurler = cart.map((cartItem) => {
        if (cartItem.product) {
          if (
            cartItem.product.shipping_class.toLowerCase().includes("furler")
          ) {
            return (furlerVal = true);
          } else {
            return (furlerVal = false);
          }
        }
      });

      if (shipping) {
        if (isFurler.includes(true)) {
          setShippingMethod(shipping.furlers);
        } else {
          setShippingMethod(shipping.hardware);
        }
      }
    }
    setSubTotal(sub.toFixed(2));
  }, [cart, shipping, state]);

  return (
    <Wrapper>
      <Container>
        <P>Subtotal</P>
        {subTotal && state && (
          <RightP>${(state.rate * subTotal).toFixed(2)}</RightP>
        )}
      </Container>
      <Container>
        <P>Shipping</P>
      </Container>
      <Container>
        {shippingMethod && state && (
          <CartShipping
            currency={state}
            shipping={shippingMethod.settings.cost.value}
          />
        )}
      </Container>
      <Container>
        {displayAddress && (
          <DisplayShortAddress displayAddress={displayAddress} />
        )}
      </Container>
      <Container>
        <AddressButton onClick={() => setChange(!change)}>
          {address ? <>Change address</> : <>Set address</>}
        </AddressButton>
      </Container>
      <Container>
        <AddressForm
          change={change}
          setAddress={setAddress}
          address={address}
          setChange={setChange}
          setDisplayAddress={setDisplayAddress}
        />
      </Container>
      {address && state && subTotal && shippingMethod && stateTaxes && (
        <>
          {address.country === "CA" && (
            <>
              <Tax
                currency={state.rate}
                subTotal={subTotal}
                currencyCode={state.currencyCode}
                shipping={shippingMethod.settings.cost.value}
                stateTaxes={stateTaxes}
                align={"right"}
              />
            </>
          )}
        </>
      )}
      <Container>
        {subTotal && state && shippingMethod && (
          <CartTotal
            address={displayAddress}
            subTotal={subTotal}
            currency={state}
            shipping={shippingMethod.settings.cost.value}
          />
        )}
      </Container>
      {displayAddress ? (
        <ProceedToCheckout
          onClick={() =>
            navigate("/checkout", { state: { billing: displayAddress } })
          }
        >
          Proceed to Checkout
        </ProceedToCheckout>
      ) : (
        <ProceedToCheckout onClick={() => navigate("/checkout")}>
          Proceed to Checkout
        </ProceedToCheckout>
      )}
    </Wrapper>
  );
};

const ProceedToCheckout = styled.button`
  margin: 0px 20px;
`;

const AddressButton = styled.button`
  background-color: inherit !important;
  color: var(--accent-secondary-color) !important;
  padding: 0 !important;
`;

const Wrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
  padding: 20px 0px;
  border: 1px solid grey;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5px 0px 5px;
`;

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

export default CartSubtotal;
