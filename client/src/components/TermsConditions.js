import styled from "styled-components";
import { termsConditions } from "../data/termsConditions";

const TermsConditions = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <h1 style={{ width: "100%", color: "black", textAlign: "center" }}>
            Terms and Conditions
          </h1>
        </Row>
        <Row>
          <P>
            <strong>
              The following information refers to the USE of our website and the
              USE of our products but is not intended to circumvent or change
              our regular sail warranty.
            </strong>
          </P>
          <P>
            Please read the following terms and conditions of use carefully
            before using this website. All users of this site agree that access
            to and use of this site are subject to the following terms and
            conditions and other applicable law. By submitting a request for a
            quote you consent to be contacted by CDI Furlers for the purposes of
            quoting and marketing. Your information will be kept private and
            will not be shared with any third parties. If you do not agree to
            these terms and conditions, please do not use this site.
          </P>
        </Row>
        {termsConditions &&
          termsConditions.map((terms) => {
            return (
              <>
                <Row>
                  <H2>{terms.header}</H2>
                  <P>{terms.text}</P>
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
export default TermsConditions;
