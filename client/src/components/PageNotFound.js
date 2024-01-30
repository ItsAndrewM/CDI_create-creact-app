import { NavLink } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "../imgs/404Image.jpg";

const PageNotFound = () => {
  return (
    <Wrapper style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container>
        <H1>Lost?</H1>
      </Container>
      <Container>
        <P>
          All part of the journey. Head back home to checkout other options to
          explore!
        </P>
      </Container>
      <Container>
        <NavLink to={"/"}>
          <Button>Back to Home</Button>
        </NavLink>
      </Container>
      <Container>
        <P>Error code: 404</P>
      </Container>
    </Wrapper>
  );
};

const Button = styled.button`
  background-color: white;
  color: var(--accent-text-color);
`;

const P = styled.p`
  color: white;
  width: 100%;
  line-height: 1.5em;
  text-align: center;
`;

const H1 = styled.h1`
  width: 100%;
  color: white;
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  gap: 20px;
`;
export default PageNotFound;
