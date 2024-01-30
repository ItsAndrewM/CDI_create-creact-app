import styled from "styled-components";
import SearchForm from "./SearchForm";
import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";

const ProductSearch = ({ setFiltered }) => {
  const { products } = useContext(ProductsContext);

  return (
    <Wrapper>
      <Spacer></Spacer>
      {products && <SearchForm products={products} setFiltered={setFiltered} />}
      <Spacer></Spacer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 50px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;
const Spacer = styled.div`
  width: 20%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export default ProductSearch;
