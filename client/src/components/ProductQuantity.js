import styled from "styled-components";
import AddToCart from "./AddToCart";
import { useContext, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";
import { useState } from "react";
import { ExchangeRateContext } from "./ExchangeRateContext";

const ProductQuantity = ({
  handleChange,
  amount,
  value,
  setValue,
  product,
  selectedOption,
  setSelectedOption,
  prodVar,
  productVars,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const { state } = useContext(ExchangeRateContext);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 1025) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (!selectedOption) {
      setSelectedOption({
        option: "0",
        price: product.price,
        variation_id: product.id,
      });
    }
  }, [selectedOption]);

  return (
    <>
      <SmallWrapper>
        <Input
          type="number"
          min="1"
          max="1000"
          onChange={handleChange}
          ref={amount}
          defaultValue={1}
        />
        {isMobile && (
          <ButtonWrapper>
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                if (amount.current.value !== "1000") {
                  amount.current.value = Number(amount.current.value) + 1;
                }
              }}
            >
              <AddIcon />
            </IconButton>
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                if (amount.current.value !== "1") {
                  amount.current.value = Number(amount.current.value) - 1;
                }
              }}
            >
              <RemoveIcon />
            </IconButton>
          </ButtonWrapper>
        )}
      </SmallWrapper>

      <AddToCart
        isDisabled={value}
        value={value}
        setValue={setValue}
        product={product}
        amount={amount}
        option={selectedOption}
        prodVar={selectedOption}
        productVars={productVars}
        exchangeState={state}
      />
    </>
  );
};

const IconButton = styled.button`
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 0;
  align-items: center;
  width: 50%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

const Input = styled.input`
  outline: auto !important;
  width: 150px !important;
  padding-right: 10px !important;
  padding-left: 10px !important;
  text-align: center;
  @media screen and (max-width: 1024px) {
    width: 100% !important;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    -moz-appearance: textfield;
  }
`;

const SmallWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 1024px) {
    align-items: center;
    gap: 20px;
  }
`;

export default ProductQuantity;
