import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

const inistialState = {
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set-cart": {
      return {
        cart: [...action.cart],
      };
    }
    case "add-to-cart": {
      const found = state.cart.find((val) => {
        return (
          val.product.id === action.cart.product.id &&
          val.selectedOption.option === action.cart.selectedOption.option
        );
      });
      if (found) {
        state.cart.forEach((val) => {
          if (val.product.id === action.cart.product.id) {
            if (
              val.selectedOption.option === action.cart.selectedOption.option
            ) {
              val.quantity = Number(val.quantity) + 1;
            }
          }
        });
        return {
          ...state,
          cart: [...state.cart],
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.cart],
        };
      }
    }
    case "remove-from-cart": {
      const newCart = state.cart.filter((val) => {
        if (val.product.id !== action.product.id) {
          if (val.selectedOption.option !== action.selectedOption.option) {
            return val;
          }
        } else {
          if (val.selectedOption.option !== action.selectedOption.option) {
            return val;
          } else {
            if (Number(val.quantity) > 1) {
              val.quantity = Number(val.quantity) - 1;
              return val;
            }
          }
        }
      });
      return {
        cart: newCart,
      };
    }
    case "clear-cart": {
      return {
        cart: [],
      };
    }
    default:
      throw new Error(`unrecognized action ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, inistialState);

  const receiveNewCartItem = (data) => {
    dispatch({
      type: "add-to-cart",
      ...data,
    });
  };

  const deleteCartItem = (data) => {
    dispatch({
      type: "remove-from-cart",
      ...data,
    });
  };

  const clearCart = (data) => {
    dispatch({
      type: "clear-cart",
      ...data,
    });
  };

  const editCartItem = (data) => {
    dispatch({
      type: "edit-cart-item",
      ...data,
    });
  };

  const setCart = (data) => {
    dispatch({
      type: "set-cart",
      ...data,
    });
  };

  useEffect(() => {
    if (state) {
      if (state.cart) {
        if (state.cart[0]) {
          window.localStorage.setItem("cart", JSON.stringify(state.cart));
          // const storedCart = JSON.parse(window.localStorage.getItem("cart"));
        } else {
          // window.localStorage.removeItem("cart");
        }
      }
    }
  }, [state]);

  useEffect(() => {
    const storedCart = JSON.parse(window.localStorage.getItem("cart"));
    if (storedCart) {
      setCart({ cart: storedCart });
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        state,
        action: { receiveNewCartItem, deleteCartItem, clearCart, editCartItem },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
