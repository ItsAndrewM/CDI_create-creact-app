import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Button = ({
  buttonUrl,
  buttonText,
  buttonSlug,
  currentRate,
  id,
  product,
  notInStock,
}) => {
  return currentRate ? (
    <NavItem
      to={buttonUrl}
      state={{
        id: `${id}`,
        slug: `${buttonSlug}`,
        currencyCode: `${currentRate.currencyCode}`,
        currentRate: `${currentRate.rate}`,
        product: `${JSON.stringify(product)}`,
      }}
      onClick={(e) => {
        localStorage.setItem(`${buttonSlug}`, JSON.stringify(product));
      }}
      onMouseDown={(e) => {
        localStorage.setItem(`${buttonSlug}`, JSON.stringify(product));
      }}
    >
      <Div>
        <StyledButton disabled={notInStock}>{buttonText}</StyledButton>
      </Div>
    </NavItem>
  ) : (
    <NavItem
      to={buttonUrl}
      state={{
        id: `${id}`,
        slug: `${buttonSlug}`,
      }}
    >
      <Div>
        <StyledButton disabled={notInStock}>{buttonText}</StyledButton>
      </Div>
    </NavItem>
  );
};

const NavItem = styled(NavLink)`
  text-decoration: none;
`;

const Div = styled.div`
  width: 100%;
`;

const StyledButton = styled.button`
  &:disabled {
    background-color: var(--accent-secondary-color);
    cursor: not-allowed;
    color: white;
  }
`;
export default Button;
