import styled from "styled-components";
import PayPalButtonWrapper from "./PayPalButtonWrapper";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { NavLink, useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();

  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.REACT_APP_CLIENT_ID }}
    >
      <Wrapper>
        <h1>Order Review</h1>
        <ButtonWrapper style={{ paddingBottom: "10px" }}>
          <NavLink to={"/checkout"}>
            <Button>Return to Checkout</Button>
          </NavLink>
        </ButtonWrapper>
        <Container>
          <BillingWrapper>
            {!location.state.orderData.shipping ? (
              <H>Billing and Shipping</H>
            ) : (
              <H>Billing</H>
            )}
            <TextContainer>
              {location.state.billing &&
                Object.keys(location.state.billing).map((key, index) => {
                  return (
                    <Box key={index}>
                      {location.state.billing[key] && (
                        <P>{key.replace("_", " ")}:</P>
                      )}
                    </Box>
                  );
                })}
            </TextContainer>
            <DataWrapper>
              {location.state.orderData &&
                Object.keys(location.state.billing).map((key, index) => {
                  return (
                    <Box key={index}>
                      <P>{location.state.billing[key]}</P>
                    </Box>
                  );
                })}
            </DataWrapper>
          </BillingWrapper>
          {location.state.orderData.shipping && (
            <BillingWrapper>
              {location.state.orderData.shipping && <H>Shipping</H>}
              <TextContainer>
                {location.state.orderData.shipping &&
                  Object.keys(location.state.orderData.shipping).map(
                    (key, index) => {
                      if (key !== "email") {
                        return (
                          <Box key={index}>
                            {location.state.orderData.shipping[key] && (
                              <P>{key.replace("_", " ")}:</P>
                            )}
                          </Box>
                        );
                      }
                    }
                  )}
              </TextContainer>
              <DataWrapper>
                {location.state.orderData.shipping &&
                  Object.keys(location.state.orderData.shipping).map(
                    (key, index) => {
                      if (key !== "email") {
                        return (
                          <Box key={index}>
                            <P>{location.state.orderData.shipping[key]}</P>
                          </Box>
                        );
                      }
                    }
                  )}
              </DataWrapper>
            </BillingWrapper>
          )}
          {location.state.orderData.meta_data && (
            <TotalWrapper>
              <H>Sail Quote Details</H>
              <TextContainer>
                <Box>
                  <P>Boat Model:</P>
                </Box>
                <Box>
                  <P>Sailing Type:</P>
                </Box>
                <Box>
                  <P>Time Frame:</P>
                </Box>
              </TextContainer>
              <DataWrapper>
                {location.state.orderData.meta_data.map((keyVal, index) => {
                  return (
                    <Box key={index}>
                      <P>{keyVal.value}</P>
                    </Box>
                  );
                })}
              </DataWrapper>
            </TotalWrapper>
          )}
          {location.state.orderData.shipping_lines[0] && (
            <TotalWrapper>
              <H>Shipping Details</H>
              <TextContainer>
                <Box>
                  <P>Shipping Method:</P>
                </Box>
                <Box>
                  <P>Shipping Total:</P>
                </Box>
              </TextContainer>
              <DataWrapper>
                <Box>
                  <P>
                    {location.state.orderData.shipping_lines[0].method_id.replace(
                      "_",
                      " "
                    )}
                  </P>
                </Box>
                <Box>
                  <P>
                    {location.state.currency} $
                    {Number(
                      location.state.orderData.shipping_lines[0].total
                    ).toFixed(2)}
                  </P>
                </Box>
              </DataWrapper>
            </TotalWrapper>
          )}
          {location.state.orderData.total_tax && location.state.currency && (
            <TotalWrapper>
              <H>Total Cost:</H>
              <TextContainer>
                <Box>
                  <P>Total Tax:</P>
                </Box>
              </TextContainer>
              <DataWrapper>
                <Box>
                  <P>
                    {location.state.currency} $
                    {location.state.orderData.total_tax}
                  </P>
                </Box>
              </DataWrapper>
            </TotalWrapper>
          )}
          {location.state.amount && location.state.currency && (
            <TotalWrapper>
              <TextContainer>
                <Box>
                  <P>Total:</P>
                </Box>
              </TextContainer>
              <DataWrapper>
                <Box>
                  <P>
                    {location.state.currency} ${location.state.amount}
                  </P>
                </Box>
              </DataWrapper>
            </TotalWrapper>
          )}
          <ButtonWrapper>
            <PayPalButtonWrapper
              currency={location.state.currency}
              amount={location.state.amount}
              orderData={location.state.orderData}
              billing={location.state.billing}
            />
          </ButtonWrapper>
        </Container>
      </Wrapper>
    </PayPalScriptProvider>
  );
};

const Button = styled.button`
  padding: 5px 10px;
`;
const TotalWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 1px solid #eee;
  flex-wrap: wrap;
  padding: 5px;
`;
const H = styled.h3`
  width: 100%;
  border-bottom: 1px solid #eee;
  line-height: 1.5em;
  margin-bottom: 10px;
`;

const BillingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 1px solid #eee;
  flex-wrap: wrap;
  padding: 5px;
`;

const DataWrapper = styled.div`
  width: 80%;
  gap: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px 0px 0px;
`;

const P = styled.div`
  text-transform: capitalize;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  gap: 5px;
  width: 20%;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
`;

const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 1px solid black;
  padding: 10px;
  flex-wrap: wrap;
  @media screen and (max-width: 1024px) {
    width: 70%;
  }
`;
const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export default Payment;
