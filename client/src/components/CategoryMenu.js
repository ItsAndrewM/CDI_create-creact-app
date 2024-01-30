import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ProductsContext } from "./ProductsContext";
import CatParentMenu from "./CatParentMenu";
import CurrencyDropDown from "./CurrencyDropdown";
import Logo from "./Logo";
import CircularProgress from "@mui/material/CircularProgress";

const CategoryMenu = () => {
  const { productCats } = useContext(ProductsContext);
  const [parentCat, setParentCat] = useState([]);

  useEffect(() => {
    if (productCats) {
      const holderArr = [];
      productCats.forEach((element) => {
        if (element.parent === 0) {
          holderArr.push(element);
        }
      });
      setParentCat([...new Set(holderArr)]);
    }
  }, [productCats]);

  return (
    <Wrapper>
      <Logo />
      <H4>Product Categories</H4>
      <Container>
        <Ul>
          {productCats ? (
            parentCat.map((val, index) => {
              return (
                <CatParentMenu
                  key={index}
                  val={val}
                  productCats={productCats}
                />
              );
            })
          ) : (
            <Container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: "none",
                minHeight: "280px",
                paddingBottom: "none",
                flexDirection: "column",
              }}
            >
              <CircularProgress />
            </Container>
          )}
        </Ul>
      </Container>
      <H4>Select Your Currency</H4>
      <Container>
        <CurrencyDropDown />
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  padding-bottom: 15px;
`;

const H4 = styled.h4`
  width: 100%;
  border-bottom: 1px solid black;
`;

const Ul = styled.ul`
  list-style-type: circle;
  margin-left: 15px;
  min-height: 152px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 15%;
  min-height: 100vh;
  margin-left: 15px;
  gap: 15px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0;
    padding: 0px 10px;
    min-height: fit-content;
  }
`;
export default CategoryMenu;
