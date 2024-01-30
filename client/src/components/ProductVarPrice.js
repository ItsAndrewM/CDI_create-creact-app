import styled from "styled-components";

const ProductVarPrice = ({ selectedOption, state }) => {
  return (
    selectedOption && (
      <P>
        {state.currencyCode} $
        {(Number(selectedOption.price) * Number(state.rate)).toFixed(2)}
      </P>
    )
  );
};

const P = styled.p``;

export default ProductVarPrice;
