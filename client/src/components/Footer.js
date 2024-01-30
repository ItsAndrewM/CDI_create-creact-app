import styled from "styled-components";
import FooterTopSection from "./FooterTopSection";
import FooterBottomSection from "./FooterBottomSection";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterTopSection />
      <FooterBottomSection />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  max-height: 400px;
  width: 100%;
  position: relative;
  bottom: 0%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--accent-primary-color);
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    max-height: fit-content;
    padding-left: 20px;
  }
`;
export default Footer;
