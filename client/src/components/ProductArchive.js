import { useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { ArrPagination } from "./ArrPagination";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const ProductArchive = ({ currentRate, products, productCats }) => {
  const location = useLocation();
  const [paginated, setPaginate] = useState([]);
  const [category, setCategory] = useState();

  useEffect(() => {
    if (productCats) {
      const filtered = productCats.find((val) => {
        const pathName =
          location.pathname.split("/")[location.pathname.split("/").length - 1];
        if (pathName === val.slug) {
          return val;
        }
      });
      setCategory(filtered);
    }
  }, [location.pathname, productCats]);

  return products ? (
    <Wrapper>
      {location.search && (
        <TextContainer>
          <H>
            Search results for: <Span>{location.search.split("=")[1]}</Span>
          </H>
        </TextContainer>
      )}
      {category && category.description && (
        <TextContainer>
          <P>{category.description}</P>
        </TextContainer>
      )}{" "}
      {products && (
        <>
          {paginated.map((val, index) => {
            return (
              <ProductCard val={val} key={index} currentRate={currentRate} />
            );
          })}
          <ArrPagination
            setIncomingPagination={setPaginate}
            arr={products}
            pageSize={16}
          />
        </>
      )}
    </Wrapper>
  ) : (
    <Wrapper style={{ alignItems: "center" }}>
      <CircularProgress />
    </Wrapper>
  );
};

const H = styled.h2`
  width: 100%;
  text-transform: capitalize;
`;

const Span = styled.span`
  text-transform: lowercase;
`;

const TextContainer = styled.div`
  width: 100%;
  padding: 30px 50px 0px 50px;
`;

const P = styled.p`
  line-height: 1.5em;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 70%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export default ProductArchive;
