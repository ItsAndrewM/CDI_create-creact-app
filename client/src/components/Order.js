import { useLocation } from "react-router-dom";
import styled from "styled-components";
import useFetchGetOrder from "../hooks/useFetchGetOrder";
import { useEffect, useState } from "react";

const Order = () => {
  const [confirmed, setConfirmed] = useState();
  const [sub, setSub] = useState(0);
  const location = useLocation();

  const order = useFetchGetOrder(location.state.orderData.id);
  useEffect(() => {
    if (order) {
      setConfirmed(order);
      const date = new Date(order.date_created).toDateString();
      let subTotal = 0;
      order.line_items.forEach((product) => {
        subTotal += Number(product.subtotal);
      });
      setSub(subTotal.toFixed(2));
    }
  }, [order]);
  return (
    <Wrapper>
      <Container>
        {order && (
          <>
            <H1>Your Order:</H1>
            <p>
              Order <strong>#{order.id}</strong> was placed on{" "}
              <strong>
                {new Date(order.date_created).toDateString().replace(" ", ", ")}
              </strong>{" "}
              and it's currently <strong>{order.status}</strong>
            </p>
            <SmallContainer>
              <H2>Order Details:</H2>
              <DetailsContainer>
                <Row style={{ borderBottom: "1px solid black" }}>
                  <ProductP>Product</ProductP>
                  <TotalP>Total</TotalP>
                </Row>
                {order.line_items.map((product, index) => {
                  return (
                    <Row key={index}>
                      <ProductP style={{ color: "black" }}>
                        {product.name}
                      </ProductP>
                      <TotalP style={{ color: "black" }}>
                        ${product.subtotal}
                      </TotalP>
                    </Row>
                  );
                })}
                <Row style={{ borderTop: "1px solid black" }}>
                  <ProductP>Subtotal:</ProductP>
                  {sub && <TotalP>${sub}</TotalP>}
                </Row>
                <Row style={{ borderTop: "1px solid black" }}>
                  <ProductP>Shipping:</ProductP>
                  <TotalP>${order.shipping_lines[0].total}</TotalP>
                </Row>
                <Row style={{ borderTop: "1px solid black" }}>
                  <ProductP>Tax:</ProductP>
                  <TotalP>${order.total_tax}</TotalP>
                </Row>
                <Row style={{ borderTop: "1px solid black" }}>
                  <ProductP>Total:</ProductP>
                  <TotalP>${order.total}</TotalP>
                </Row>
              </DetailsContainer>
            </SmallContainer>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

const ProductP = styled.p`
  width: 70%;
`;

const TotalP = styled.p`
  width: 30%;
`;

const H1 = styled.h1`
  width: 100%;
  text-align: center;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0px;
`;

const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid black;
  padding: 20px;
  flex-wrap: wrap;
  gap: 10px;
`;

const SmallContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const H2 = styled.h2`
  width: 100%;
  text-align: center;
`;

const Container = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  min-height: 100vh;
`;
export default Order;
