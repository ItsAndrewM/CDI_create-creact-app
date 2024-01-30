import { useLocation } from "react-router-dom";
import styled from "styled-components";
import CategoryMenu from "./CategoryMenu";
import { useContext, useEffect, useRef, useState } from "react";
import ProductDetails from "./ProductDetails";
import { ExchangeRateContext } from "./ExchangeRateContext";
import useFetchProductVar from "../hooks/useFetchProductVar";
import ProductVarSelect from "./ProductVarSelect";
import ProductVarPrice from "./ProductVarPrice";
import ProductQuantity from "./ProductQuantity";
import ProductDescr from "./ProductDescr";
import { ProductsContext } from "./ProductsContext";
import { ProductVariationContent } from "./ProductVariationContext";

const Product = () => {
  const [info, setInfo] = useState();
  const { state } = useContext(ExchangeRateContext);
  const location = useLocation();
  const [product, setProduct] = useState();
  const [productVar, setProductVar] = useState();
  const [value, setValue] = useState(1);
  const amount = useRef();
  const [descr, setDescr] = useState();
  const [max, setMax] = useState();
  const [min, setMin] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const [shortDescription, setShortDescription] = useState();
  const { products } = useContext(ProductsContext);
  const { productVariations } = useContext(ProductVariationContent);
  const [contextProdVars, setContextProdVars] = useState();
  const ref = useRef();

  let locationState = "";

  const productSlug =
    location.pathname.split("/")[location.pathname.split("/").length - 1];
  if (localStorage.getItem(`${productSlug}`)) {
    locationState = JSON.parse(localStorage.getItem(`${productSlug}`));
  } else if (location.state && location.state.product) {
    locationState = JSON.parse(location.state.product);
  }
  useEffect(() => {
    if (products && !locationState) {
      const find = products.find((product) => {
        if (
          location.pathname.split("/")[
            location.pathname.split("/").length - 1
          ] === product.slug
        ) {
          return product;
        }
      });
      locationState = find;
    }
  }, [location.pathname, products]);

  useEffect(() => {
    if (productVariations && locationState) {
      const find = productVariations.find((prod) => {
        return prod.id === locationState.id;
      });
      setContextProdVars(find);
    }
  }, [productVariations, locationState]);

  const productVars = useFetchProductVar(locationState.id);

  useEffect(() => {
    if (contextProdVars) {
      if (contextProdVars.variations) {
        const priceArr = contextProdVars.variations.map((ele) => {
          return ele.price;
        });
        if (priceArr.length) {
          setMax(Math.max(...priceArr));
          setMin(Math.min(...priceArr));
        }
      }
      setProductVar(contextProdVars.variations);
    }
    if (!contextProdVars && productVars) {
      if (productVars.variations) {
        const priceArr = productVars.variations.map((ele) => {
          return ele.price;
        });
        if (priceArr.length) {
          setMax(Math.max(...priceArr));
          setMin(Math.min(...priceArr));
        }
      }
      setProductVar(productVars.variations);
    }
  }, [contextProdVars, productVars]);

  useEffect(() => {
    const arr = [];

    setProduct(locationState);

    if (locationState) {
      const regexForStripHTML = /(<([^>]+)>)/gi;
      let text = locationState.short_description;
      if (text) {
        const stripContent = text
          .replaceAll(regexForStripHTML, "")
          .split(/\r?\n|\r|\n/g);
        const short_description = stripContent.filter((ele) => {
          if (ele === "") {
            return false;
          }
          return true;
        });
        setShortDescription(short_description);
      } else {
        text = locationState.description;
        const stripContent = text
          .replaceAll(regexForStripHTML, "")
          .split(/\r?\n|\r|\n/g);
        const short_description = stripContent.filter((ele) => {
          if (ele === "") {
            return false;
          }
          return true;
        });
        setShortDescription(short_description);
      }

      if (locationState.description) {
        let text = locationState.description;
        const stripContent = text
          .replaceAll(regexForStripHTML, " ")
          .split(/\r?\n|\r|\n/g);
        const description = stripContent.filter((ele) => {
          if (ele === " ") {
            return false;
          }
          return true;
        });
        arr.push({
          name: "description",
          content: [description],
        });
      }
      if (locationState.short_description) {
        text = locationState.short_description;
        const stripContent = text
          .replaceAll(regexForStripHTML, " ")
          .split(/\r?\n|\r|\n/g);
        const short_description = stripContent.filter((ele) => {
          if (ele === " ") {
            return false;
          }
          return true;
        });
        arr.push({
          name: "short description",
          content: [short_description],
        });
      }
      if (locationState.attributes) {
        if (locationState.attributes.length > 1) {
          arr.push({
            name: "additional information",
            content: [locationState.attributes],
          });
        } else {
          arr.push({
            name: "additional information",
            content: [locationState.attributes[0]],
          });
        }
      }
      setInfo(arr);
    }
  }, [location, value, productVars]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = (e) => {
    const find = productVar.find((ele) => {
      return ele.price === e.target.value;
    });
    // const find =
    setSelectedOption({
      option: ref.current[ref.current.options.selectedIndex].textContent,
      price: e.target.value,
      variation_id: find.id,
    });
  };

  return (
    <Wrapper>
      <CategoryMenu />
      {product && (
        <>
          <LargeContainer>
            <Container>
              <Img src={product.images[0].src} />
            </Container>
            <Container>
              <H1>{product.name}</H1>
              {shortDescription && (
                <ProductDescr shortDescription={shortDescription} />
              )}
              {max && min && product.type !== "simple" && (
                <H4>
                  {state.currencyCode} $
                  {(Number(min) * Number(state.rate)).toFixed(2)} -{" "}
                  {state.currencyCode} $
                  {(Number(max) * Number(state.rate)).toFixed(2)}
                </H4>
              )}
              <Form>
                <>
                  <ProductVarSelect
                    product={product}
                    productVar={productVar}
                    handleSelect={handleSelect}
                    VarRef={ref}
                  />
                  <Container>
                    <ProductVarPrice
                      selectedOption={selectedOption}
                      state={state}
                    />
                  </Container>
                </>
                <Container
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <ProductQuantity
                    handleChange={handleChange}
                    amount={amount}
                    value={value}
                    setValue={setValue}
                    product={product}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    prodVar={productVar}
                    productVars={productVars}
                  />
                </Container>
              </Form>
            </Container>
          </LargeContainer>
          <Container>
            <ProductDetails arr={info} />
          </Container>
        </>
      )}
    </Wrapper>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const H4 = styled.h4`
  width: 100%;
  text-align: center;
`;

const H1 = styled.h1`
  width: 100%;
  text-align: center;
`;

const Img = styled.img`
  min-width: 500px;
  max-width: 500px;
  border-radius: 5px;
`;

const LargeContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    padding: 10px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  gap: 30px;
`;

const Wrapper = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 50px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export default Product;
