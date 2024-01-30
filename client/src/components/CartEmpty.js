import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CartEmpty = () => {
  return (
    <Wrapper>
      <Container>
        <P>Your Cart is currently empty.</P>
      </Container>
      <ButtonWrapper>
        <NavItem to="/products">
          <button>Return to shop</button>
        </NavItem>
      </ButtonWrapper>
    </Wrapper>
  );
};

const NavItem = styled(NavLink)``;

const ButtonWrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid var(--accent-primary-color);
  height: 70px;
  padding-left: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`;

const P = styled.p`
  width: 100%;
  text-align: left;
`;

export default CartEmpty;
