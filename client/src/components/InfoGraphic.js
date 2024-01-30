import styled from "styled-components";

const InfoGraphic = ({ ctaHeader, ctaP, ctaP2, ctaIcon }) => {
  return (
    <Wrapper>
      <TextContainer>
        <H1>{ctaHeader}</H1>
        <P style={{ textAlign: "left", fontSize: "22px" }}>{ctaP}</P>
        <P style={{ textAlign: "left", fontSize: "22px" }}>{ctaP2}</P>
      </TextContainer>
      <CTAContainer>
        {ctaIcon.map((icon, index) => {
          return (
            <IconContainer key={index}>
              <Icon>
                <icon.icon sx={{ fontSize: 150, color: "white" }} />
              </Icon>
              <H2>{icon.header}</H2>
              <P>{icon.text}</P>
            </IconContainer>
          );
        })}
      </CTAContainer>
    </Wrapper>
  );
};

const CTAContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-right: 50px;
  height: 70%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-right: 0;
    height: 100%;
  }
`;

const IconContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
`;

const Icon = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.h2`
  color: var(--accent-text-color);
  width: 100%;
  text-align: center;
`;

const P = styled.p`
  color: var(--accent-text-color);
  text-align: center;
  line-height: 1.5em;
  width: 100%;
`;

const H1 = styled.h1`
  width: 100%;
  text-transform: capitalize;
  /* font-weight: 1100; */
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 50px;
  align-items: flex-start;
  margin-left: 50px;
  @media screen and (max-width: 1024px) {
    justify-content: center;
    margin: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--accent-secondary-color);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  flex-wrap: nowrap;
  gap: 100px;
  min-height: 1000px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    max-width: 100vw;
    padding: 10px 20px;
  }
`;

export default InfoGraphic;
