import { createContext, useEffect, useState } from "react";

export const ProductVariationContent = createContext();

export const ProductVariationProvider = ({ children }) => {
  const [productVariations, setProductVariations] = useState();

  useEffect(() => {
    const productDataFetch = async () => {
      fetch(`${process.env.REACT_APP_URL}/products/variations`)
        .then((data) => data.json())
        .then((data) => {
          setProductVariations(data.data);
          localStorage.setItem("productVariations", JSON.stringify(data.data));
        });
    };
    if (!localStorage.getItem("productVariations")) {
      productDataFetch();
    } else {
      setProductVariations(
        JSON.parse(localStorage.getItem("productVariations"))
      );
      productDataFetch();
    }
  }, []);

  return (
    <ProductVariationContent.Provider value={{ productVariations }}>
      {children}
    </ProductVariationContent.Provider>
  );
};
