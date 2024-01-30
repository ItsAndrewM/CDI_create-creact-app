import styled from "styled-components";
import logo from "../imgs/cdi_logo.png";

const Logo = () => {
  return (
    <Div>
      <a href="/">
        <Img src={`${logo}`} />
      </a>
    </Div>
  );
};

const Img = styled.img`
  height: 175px;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export default Logo;
