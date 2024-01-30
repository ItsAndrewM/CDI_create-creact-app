import styled from "styled-components";
import OnSubmitModal from "./OnSubmitModal";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useEffect } from "react";

const AddToCart = ({
  isDisabled,
  value,
  setValue,
  product,
  amount,
  option,
  prodVar,
  productVars,
  exchangeState,
}) => {
  const [open, setOpen] = useState(false);
  const { state, action } = useContext(CartContext);
  const [canClick, setCanClick] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(true);
    action.receiveNewCartItem({
      cart: {
        product: product,
        quantity: value,
        selectedOption: option,
      },
    });
  };

  useEffect(() => {
    if (productVars) {
      if (productVars.variations.length > 0) {
        if (prodVar.option !== "0") {
          setCanClick(true);
        } else {
          setCanClick(false);
        }
      } else {
        setCanClick(true);
      }
    }
  }, [isDisabled, prodVar]);

  const handleClose = (e) => {
    setOpen(false);
    setValue("");
    amount.current.value = "";
  };
  return (
    <Div>
      <StyledButton disabled={!canClick} onClick={handleClick}>
        Add to cart
      </StyledButton>
      {option && (
        <OnSubmitModal
          open={open}
          handleClose={handleClose}
          text={`${value}x of ${product.name} successfully added to cart: $${(
            Number(exchangeState.rate) *
            (Number(value) * option.price)
          ).toFixed(2)}`}
        />
      )}
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
`;

const StyledButton = styled.button`
  text-transform: capitalize;
  color: white;
  border-radius: 5px;
  padding: 18px 40px 18px 40px;
  background-color: var(--accent-primary-color);
  &:hover {
    background-color: var(--accent-secondary-color);
    color: var(--accent-text-color);
    cursor: pointer;
  }
  &:disabled {
    background-color: var(--accent-secondary-color);
    color: var(--accent-text-color);
    cursor: not-allowed;
  }
`;
export default AddToCart;
