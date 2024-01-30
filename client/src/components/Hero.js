import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const Hero = ({ img, header, text, buttonText, buttonUrl }) => {
  return (
    <Wrapper style={{ backgroundImage: `url(${img})` }}>
      <Container>
        <H1>{header}</H1>
      </Container>
      <Container>
        <P>{text}</P>
      </Container>
      <Container>
        <Button buttonUrl={buttonUrl} buttonText={buttonText} />
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 10px;
  @media screen and (max-width: 1024px) {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const P = styled.p`
  color: white;
  text-transform: capitalize;
`;

const H1 = styled.h1`
  color: white;
  text-transform: capitalize;
  font-weight: bold;
`;

const Wrapper = styled.div`
  width: 100%;
  background-size: cover;
  min-height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  margin-bottom: 5px;
  padding-bottom: 100px;
  @media screen and (max-width: 1024px) {
    min-height: 50vh;
  }
`;

export default Hero;
