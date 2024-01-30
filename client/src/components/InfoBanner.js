import styled from "styled-components";

const InfoBanner = ({ column1, column2, column3 }) => {
  return (
    <Wrapper>
      <SmallWrapper>
        <Container>
          <P>{column1}</P>
        </Container>
        <Container>
          <a href="tel:1-888-880-6813" className="hover:text-[#B1D4E0]">
            <MiddleP>{column2}</MiddleP>
          </a>
        </Container>
        <Container>
          <a href="mailto:info@cdifurlers.com" className="hover:text-[#B1D4E0]">
            <P>{column3}</P>
          </a>
        </Container>
      </SmallWrapper>
    </Wrapper>
  );
};

const SmallWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  @media screen and (max-width: 1024px) {
    justify-content: space-between;
    width: 100%;
  }
`;

const P = styled.p`
  color: var(--accent-text-color);
  @media screen and (max-width: 1024px) {
    text-align: center;
    width: 100%;
    padding: 0px 10px;
  }
`;

const MiddleP = styled.p`
  border-left: 1px solid black;
  border-right: 1px solid black;
  padding: 0px 100px 0px 100px;
  color: var(--accent-text-color);
  @media screen and (max-width: 1024px) {
    padding: 0px 20px;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 100px;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export default InfoBanner;
