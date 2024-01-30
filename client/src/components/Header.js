import Navbar from "./Navbar";
import styled from "styled-components";
import Breadcrumbs from "./Breadcrumbs";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      {location.pathname === "/" && <Logo />}
      <Navbar />
      {location.pathname !== "/" && <Breadcrumbs />}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
`;

export default Header;
