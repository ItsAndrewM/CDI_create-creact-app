import { useContext, useEffect, useRef, useState } from "react";
import Billing from "./Billing";
import styled from "styled-components";
import CheckoutSailQuote from "./CheckoutSailQuote";
import OrderDetails from "./OrderDetails";
import OrderCoupon from "./OrderCoupon";
import { useLocation } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { CartContext } from "./CartContext";
import PayPalButtonWrapper from "./PayPalButtonWrapper";
import { ExchangeRateContext } from "./ExchangeRateContext";
import CheckoutAgree from "./CheckoutAgree";
import CheckoutFurlerCheck from "./CheckoutFurlerCheck";
import CheckoutFF2 from "./CheckoutFF2";

const Checkout = () => {
  const [orderForm, setOrderForm] = useState();
  const [diffShipping, setDiffShipping] = useState(false);
  const [coupons, setCoupons] = useState();
  const [data, setData] = useState();
  const location = useLocation();
  const { state } = useContext(CartContext);
  const exchangeRate = useContext(ExchangeRateContext);
  const [total, setTotal] = useState();
  const ref = useRef();
  const shippingRef = useRef();
  const [agreed, setAgreed] = useState(false);
  const [correctFF, setCorrectFF] = useState(false);
  const [shippingLines, setShippingLines] = useState();
  const [validated, setValidated] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (location) {
      setData(location.state);
    }
  }, [location.state]);

  useEffect(() => {
    if (agreed && checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [agreed]);

  return (
    <Float>
      <Wrapper>
        <Container>
          <Billing
            orderKey={"billing"}
            headerText={"Billing Details"}
            orderForm={orderForm}
            setOrderForm={setOrderForm}
            setData={setData}
            data={data}
            formRef={ref}
            setValidated={setValidated}
            currency={exchangeRate.state.currencyCode}
            amount={total}
            setDiffShipping={setDiffShipping}
            diffShipping={diffShipping}
          />
          <SmallContainer>
            <input
              type="checkbox"
              onClick={(e) => {
                if (e.target.checked) {
                  setDiffShipping(!diffShipping);
                } else {
                  setDiffShipping(false);
                }
              }}
            />
            <label>Ship to a different address?</label>
          </SmallContainer>
          {diffShipping && (
            <Billing
              orderKey={"shipping"}
              headerText={"Shipping Details"}
              orderForm={orderForm}
              setOrderForm={setOrderForm}
              setData={setData}
              data={data}
              formRef={shippingRef}
              setValidated={setValidated}
              currency={exchangeRate.state.currencyCode}
              amount={total}
              setDiffShipping={setDiffShipping}
              diffShipping={diffShipping}
            />
          )}
          <CheckoutSailQuote setData={setData} data={data} />
        </Container>
        <Container>
          <OrderDetails
            setData={setData}
            data={data}
            setTotal={setTotal}
            total={total}
            setShippingLines={setShippingLines}
          />

          {/* <OrderCoupon coupons={coupons} setCoupons={setCoupons} /> */}

          <p style={{ color: "#333" }}>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our <a href="/privacy-policy">privacy policy</a>.
          </p>

          <CheckoutAgree setAgreed={setAgreed} />
          <CheckoutFurlerCheck setCorrectFF={setCorrectFF} cart={state} />
          {/* <CheckoutFF2 cart={state} /> */}
          <Container
            style={{
              alignItems: "center",
              width: "100%",
            }}
          >
            {!validated && (
              <Button type="submit" form="billing" disabled={!checked}>
                {" "}
                Continue to payment
              </Button>
            )}
          </Container>
        </Container>
      </Wrapper>
    </Float>
  );
};

const Button = styled.button`
  &:disabled {
    background-color: var(--accent-secondary-color);
    color: white;
    cursor: not-allowed;
  }
  background-color: var(--accent-primary-color);
`;

const SmallContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  gap: 20px;
  height: 100%;
`;

const Float = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  margin: 20px 0px;
  gap: 20px;
  height: 100%;
`;

export default Checkout;
