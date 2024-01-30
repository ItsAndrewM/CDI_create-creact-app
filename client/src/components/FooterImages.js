import styled from "styled-components";
import logo from "../imgs/2-e1678736904449.png";
import poweredLogo from "../imgs/CDI-Animated-Logo2-e1677785367714.png";
import { NavLink } from "react-router-dom";

const FooterImages = () => {
  return (
    <Wrapper>
      <ImgContainer>
        <NavItem to={"/"}>
          <Img src={logo} />
        </NavItem>
      </ImgContainer>
      <ImgContainer>
        <NavItem to={"/"}>
          <Img src={poweredLogo} />
        </NavItem>
      </ImgContainer>
    </Wrapper>
  );
};

const NavItem = styled(NavLink)`
  text-decoration: none;
  &:hover {
    opacity: 0.6;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const ImgContainer = styled.div`
  max-width: 300px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 10px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export default FooterImages;
