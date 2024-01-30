import styled from "styled-components";
import { privacyPolicy } from "../data/privacyPolicy";

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <h1 style={{ width: "100%", color: "black", textAlign: "center" }}>
            Privacy Policy
          </h1>
        </Row>
        <Row>
          <H2>Privacy Policy</H2>
          <P>
            We use your Personal Information only for providing and improving
            the Site. By using the Site, you agree to the collection and use of
            information in accordance with this policy.
          </P>
        </Row>
        {privacyPolicy &&
          privacyPolicy.map((policy) => {
            return (
              <>
                <Row>
                  <H2>{policy.header}</H2>
                  <P>{policy.text}</P>
                </Row>
              </>
            );
          })}
      </Container>
    </Wrapper>
  );
};

const P = styled.p`
  width: 100%;
  color: black;
  line-height: 1.5em;
`;

const H2 = styled.h2`
  width: 100%;
  color: black;
`;

const Container = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 50px 0px;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default PrivacyPolicy;
