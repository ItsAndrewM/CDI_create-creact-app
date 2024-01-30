import styled from "styled-components";
import Logo from "./Logo";
import InfoBanner from "./InfoBanner";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <P>
          At CDI, we pride ourselves on building well made, easy to use furling
          systems. For over 40 years sailors worldwide have trusted us to help
          them furler their sails. Order yours today and let us help you find
          the right furler for your sailboat.
        </P>
        <InfoBanner
          column1={"Mon-Fri: 8:00am to 4:00pm PST"}
          column2={"1-(888)-880-6813"}
          column3={"info@cdifurlers.com"}
        />
      </Container>
      <Container>
        <ContactForm />
      </Container>
    </Wrapper>
  );
};

const P = styled.p`
  max-width: 600px;
  text-align: center;
  line-height: 1.5em;
  margin-bottom: 50px;
`;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export default Contact;
