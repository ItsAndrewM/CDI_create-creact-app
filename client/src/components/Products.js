import styled from "styled-components";
import ProductArchive from "./ProductArchive";
import CategoryMenu from "./CategoryMenu";
import { useContext, useEffect, useState } from "react";
import ProductSearch from "./ProductSearch";
import { ProductsContext } from "./ProductsContext";
import { useLocation } from "react-router-dom";
import { ExchangeRateContext } from "./ExchangeRateContext";

const Products = () => {
  const { products, productCats } = useContext(ProductsContext);
  const { state } = useContext(ExchangeRateContext);
  const [filtered, setFiltered] = useState();
  const location = useLocation();
  const value =
    location.pathname.split("/")[location.pathname.split("/").length - 1];

  useEffect(() => {
    if (location.pathname.split("/").length > 2) {
      let matchProducts = [];
      if (products) {
        if (!location.search) {
          products.forEach((val) => {
            val.categories.forEach((ele) => {
              if (ele.slug.match(value)) {
                matchProducts.push(val);
              }
            });
            return matchProducts;
          });
          matchProducts = [...new Set(matchProducts)];
          setFiltered(matchProducts);
        }
      }
    }
    if (
      location.pathname === "/products" ||
      location.pathname === "/products/product-category"
    ) {
      if (location.search && products) {
        const searchTerm = location.search
          .split("=")
          [location.search.split("=").length - 1].toLowerCase();
        const searchProd = products.filter((val) => {
          val.name.includes(searchTerm);
          const found = val.tags.find((tag) => {
            return tag.name.toLowerCase().includes(searchTerm);
          });
          if (found || val.name.toLowerCase().includes(searchTerm)) {
            return val;
          }
        });
        setFiltered(searchProd);
      } else {
        setFiltered(products);
      }
    }
  }, [products, location, productCats]);

  useEffect(() => {
    if (products) {
      if (location.search) {
        const searchTerm = location.search
          .split("=")
          [location.search.split("=").length - 1].toLowerCase();
        const f = products.filter((val) => {
          const found = val.attributes.find((ele) => {
            return ele.name.toLowerCase().match(searchTerm.toLowerCase());
          });
          return (
            val.name.toLowerCase().match(searchTerm.toLowerCase()) || found
          );
        });
        setFiltered(f);
      }
    }
  }, [location]);

  return (
    <Wrapper>
      <ProductSearch setFiltered={setFiltered} />
      <CategoryMenu />
      {!filtered ? (
        <ProductArchive
          currentRate={state}
          products={products}
          productCats={productCats}
        />
      ) : (
        <ProductArchive
          currentRate={state}
          products={filtered}
          productCats={productCats}
        />
      )}
      <EmptyDiv></EmptyDiv>
    </Wrapper>
  );
};

const EmptyDiv = styled.div`
  width: 15%;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  height: auto;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export default Products;
