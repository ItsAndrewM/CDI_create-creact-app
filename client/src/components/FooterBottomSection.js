import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FooterBottomSection = () => {
  return (
    <BottomSection>
      <Container>
        <FooterTextContainer style={{ justifyContent: "flex-start" }}>
          <P>© 2023 CDIFurlers.com. All Rights Reserved.</P>
        </FooterTextContainer>
        <OtherFooterContainer>
          <SmallWrapper>
            <NavButton to={"/privacy-policy"}>
              <StyledButton>Privacy Policy</StyledButton>
            </NavButton>
            <NavButton to={"/terms-conditions"}>
              <StyledButton>Terms & conditions</StyledButton>
            </NavButton>
          </SmallWrapper>
        </OtherFooterContainer>
      </Container>
    </BottomSection>
  );
};

const SmallWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
`;

const NavButton = styled(NavLink)`
  color: white;
  max-width: 200px;
  width: 100%;
  text-decoration: none;
  height: 100%;
  margin: 0 10px 0 10px;

  &:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 1024px) {
    margin: 0;
  }
`;

const StyledButton = styled.button`
  padding: 0 !important;
  width: 100%;
  background-color: inherit;
  color: white;
  &:hover {
    background-color: inherit;
    color: var(--accent-secondary-color);
  }
  height: 100% !important;
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
`;

const P = styled.p`
  color: white;
  margin-left: 10px;
`;

const OtherFooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
  }
`;

const FooterTextContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: flex-end;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    justify-content: flex-start !important;
  }
`;

const Container = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

const BottomSection = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  @media screen and (max-width: 1024px) {
    padding-bottom: 15px;
  }
`;
export default FooterBottomSection;
