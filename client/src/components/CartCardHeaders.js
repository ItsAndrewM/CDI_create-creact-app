import styled from "styled-components";

const CartCardHeaders = () => {
  return (
    <Container>
      <P style={{ width: "10%" }}></P>
      <P style={{ width: "40%" }}></P>
      <P>Product</P>
      <P>Price</P>
      <P>Quantity</P>
      <P>Subtotal</P>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid var(--accent-secondary-color);
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const P = styled.p`
  text-align: center;
  width: 100%;
`;

export default CartCardHeaders;
