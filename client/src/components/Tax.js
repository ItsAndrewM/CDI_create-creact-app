import styled from "styled-components";

const Tax = ({
  currency,
  subTotal,
  currencyCode,
  shipping,
  stateTaxes,
  align,
}) => {
  return (
    currency &&
    subTotal &&
    currencyCode &&
    stateTaxes &&
    stateTaxes.map((taxes, index) => {
      return (
        <Container key={index}>
          <P>{taxes.name}</P>
          <RightP style={{ textAlign: `${align}` }}>
            {currencyCode} $
            {(
              (Number(shipping) + Number(subTotal)) *
              Number(currency) *
              (Number(taxes.rate) / 100)
            ).toFixed(2)}
          </RightP>
        </Container>
      );
    })
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5px 0px 5px;
`;

const P = styled.p`
  font-weight: bold;
  width: 100%;
  text-align: left;
`;

const RightP = styled.p`
  width: 100%;
  font-weight: bold;
`;
export default Tax;
