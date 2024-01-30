import styled from "styled-components";
import useFetchShipping from "../hooks/useFetchShipping";
import { useContext, useEffect, useState } from "react";
import { ExchangeRateContext } from "./ExchangeRateContext";
import { CartContext } from "./CartContext";
import OrderCartItem from "./OrderCartItem";
import useFetchTaxesAll from "../hooks/useFetchTaxesAll";
import Tax from "./Tax";

const OrderDetails = ({ setData, data, setTotal, total }) => {
  const shipping = useFetchShipping();
  const { state } = useContext(ExchangeRateContext);
  const [shippingMethod, setShippingMethod] = useState();
  const [subTotal, setSubTotal] = useState(0);
  const cart = useContext(CartContext);
  const [stateTaxes, setStateTaxes] = useState();
  const [totalTax, setTotalTax] = useState(0);

  const taxes = useFetchTaxesAll();

  useEffect(() => {
    if (shippingMethod && cart.state.cart && state) {
      const arr = [];
      cart.state.cart.forEach((cartItem) => {
        let var_id = cartItem.product.id;
        if (cartItem.selectedOption.variation_id) {
          var_id = cartItem.selectedOption.variation_id;
        }

        arr.push({
          product_id: cartItem.product.id,
          quantity: cartItem.quantity,
          variation_id: var_id,
        });
      });
      setData({
        ...data,
        line_items: arr,
        total_tax: totalTax.toFixed(2),
        currency: state.currencyCode,
        shipping_lines: [
          {
            method_id: shippingMethod.method_id,
            total: shippingMethod.settings.cost.value,
          },
        ],
      });
    }
  }, [shippingMethod, total, totalTax, state]);

  useEffect(() => {
    if (taxes) {
      if (taxes && data) {
        if (data.billing) {
          if (data.billing.country) {
            if (data.billing.country === "CA") {
              if (data.billing.state) {
                const found = taxes.filter(
                  (tax) => tax.state === data.billing.state
                );
                setStateTaxes(found);
              }
            }
          }
        }
      }
    }
  }, [taxes, data]);

  useEffect(() => {
    let sub = 0;
    if (cart.state) {
      cart.state.cart
        .map((cartItem) => {
          if (cartItem.selectedOption) {
            const totalOfItem = (
              Number(cartItem.selectedOption.price) * Number(cartItem.quantity)
            ).toFixed(2);
            return totalOfItem;
          } else {
            return Number(cartItem.product.price);
          }
        })
        .forEach((val) => {
          sub += Number(val);
        });
      let furlerVal = false;
      const isFurler = cart.state.cart.map((cartItem) => {
        if (cartItem.product.shipping_class.toLowerCase().includes("furler")) {
          return (furlerVal = true);
        } else {
          return (furlerVal = false);
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
  }, [shipping, state, cart.state.cart, data]);

  useEffect(() => {
    if (shippingMethod && state) {
      let tote = 0;
      tote =
        Number(state.rate) * Number(subTotal) +
        Number(state.rate) * Number(shippingMethod.settings.cost.value);
      if (stateTaxes) {
        let taxAmount = 0;

        stateTaxes.forEach((tax) => {
          taxAmount +=
            (Number(state.rate) * Number(subTotal) +
              Number(state.rate) * Number(shippingMethod.settings.cost.value)) *
            (Number(tax.rate) / 100);
          tote =
            tote +
            (Number(state.rate) * Number(subTotal) +
              Number(state.rate) * Number(shippingMethod.settings.cost.value)) *
              (Number(tax.rate) / 100);
        });
        setTotalTax(taxAmount);
      }
      setTotal(tote.toFixed(2));
    }
  }, [subTotal, state, cart.state.cart, data, shippingMethod, stateTaxes]);

  return (
    <Wrapper>
      <Container>
        <H2>Your Order</H2>
      </Container>
      <Container>
        <P>Product</P>
        <P>Subtotal</P>
      </Container>
      {cart.state.cart &&
        state &&
        cart.state.cart.map((cartItem, index) => {
          return (
            <OrderCartItem key={index} cartItem={cartItem} state={state} />
          );
        })}
      <Container>
        <P>Subtotal</P>
        {subTotal && state && (
          <P>
            {state.currencyCode} $
            {(Number(state.rate) * Number(subTotal)).toFixed(2)}
          </P>
        )}
      </Container>
      <Container>
        <P>Shipping</P>
        {state && shippingMethod && (
          <P>
            {shippingMethod.method_title}: {state.currencyCode} $
            {(
              Number(state.rate) * Number(shippingMethod.settings.cost.value)
            ).toFixed(2)}
          </P>
        )}
      </Container>
      {state && subTotal && shippingMethod && data && stateTaxes && (
        <Tax
          currency={state.rate}
          subTotal={subTotal}
          currencyCode={state.currencyCode}
          shipping={shippingMethod.settings.cost.value}
          stateTaxes={stateTaxes}
          align={"left"}
        />
      )}
      <Container>
        <P>Total</P>
        {subTotal && shippingMethod && state && (
          <P>
            {state.currencyCode} ${total}
          </P>
        )}
      </Container>
      <Container></Container>
    </Wrapper>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
`;

const H2 = styled.h2`
  width: 100%;
  text-align: left;
`;

const P = styled.p`
  text-align: left;
  width: 100%;
  font-weight: bold;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export default OrderDetails;
