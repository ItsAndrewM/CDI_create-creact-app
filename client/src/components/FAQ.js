import styled from "styled-components";
import Accordian from "./Accordian";
import { faqData } from "../data/faqData";

const FAQ = () => {
  return (
    <Wrapper>
      <SectionWrapper>
        <HeaderContainer>
          <H1>FAQ</H1>
        </HeaderContainer>
        <Container>
          <Container style={{ width: "40%" }}></Container>
          <Accordian accordianData={faqData} />
        </Container>
      </SectionWrapper>
      <SectionWrapper id="shipping&delivery">
        <HeaderContainer>
          <H1>shipping & delivery</H1>
        </HeaderContainer>
        <Container style={{ flexWrap: "wrap", gap: "30px" }}>
          <Container id="shipping">
            <Container style={{ width: "40%" }}>
              <P>SHIPPING</P>
            </Container>
            <Container>
              <P>
                Shipping rates are estimated and timelines are approximate.
                Please make sure to time the delivery of your CDI track with
                installation as you must open your coiled track within one week
                of receiving it.
              </P>
            </Container>
          </Container>
          <Container id="delivery">
            <Container style={{ width: "40%" }}>
              <P>DELIVERY</P>
            </Container>
            <Container>
              <P>
                Our CDI furlers and tracks are shipped directly to your door for
                a no-hassel pick up.<br></br>
                <br></br> Delivery typically takes place up to 5 to 7 weeks
                after order confirmation. We work hard to ensure you get your
                CDI track within the stated time frame as indicated on your
                invoice. Speak with a sale consultant if you have questions
                about our current turn-around times or if you need your hardware
                in a rush.
              </P>
            </Container>
          </Container>
        </Container>
      </SectionWrapper>
      <SectionWrapper id="returns" style={{ borderBottom: "none" }}>
        <HeaderContainer>
          <H1>Returns</H1>
        </HeaderContainer>
        <Container>
          <Container>
            <Container style={{ width: "40%" }}>
              <P>RETURNS</P>
            </Container>
            <Container>
              <P>
                All CDI furler purchases once shipped are final. No returns or
                exchanges allowed. Please refer to the information available on
                the website regarding size, installation, features to determine
                the correct furler prior to purchasing.
              </P>
            </Container>
          </Container>
        </Container>
      </SectionWrapper>
    </Wrapper>
  );
};

const HeaderContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const P = styled.p`
  text-align: left;
  width: 100%;
  line-height: 1.5em;
`;

const SectionWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  padding-bottom: 25px;
  padding-top: 25px;
  border-bottom: 1px solid black;
  gap: 15px;
`;

const H1 = styled.h1`
  text-transform: capitalize;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-top: 1px solid black;
  margin-top: 10px;
  gap: 20px;
  padding: 10px;
`;

export default FAQ;
