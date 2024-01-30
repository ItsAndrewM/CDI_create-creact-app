import { createContext, useEffect, useState } from "react";
import { getWithExpiry, setWithExpiry } from "../lib/helpers";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const [productCats, setProductCats] = useState();

  useEffect(() => {
    const productDataFetch = async () => {
      const promiseData = await Promise.all([
        fetch(`${process.env.REACT_APP_URL}/products`),
        fetch(`${process.env.REACT_APP_URL}/products/category`),
      ]);
      const results = await promiseData.map((data) => {
        return data.json();
      });
      const [productResult, productCatResult] = await Promise.all(results);
      setWithExpiry("products", productResult.data, 172800);
      setWithExpiry("productCats", productCatResult.data, 172800);
      // localStorage.setItem("products", JSON.stringify({values: productResult.data, expiry: now.getTime()}));
      // localStorage.setItem(
      //   "productCats",
      //   JSON.stringify(productCatResult.data)
      // );

      setProducts(productResult.data);
      setProductCats(productCatResult.data);
    };
    if (
      !getWithExpiry("products") &&
      !getWithExpiry("productCats")
      // !localStorage.getItem("products") &&
      // !localStorage.getItem("productCats")
    ) {
      productDataFetch();
    } else {
      // setProducts(JSON.parse(localStorage.getItem("products")));
      // setProductCats(JSON.parse(localStorage.getItem("productCats")));
      setProducts(getWithExpiry("products"));
      setProductCats(getWithExpiry("productCats"));
      productDataFetch();
    }
  }, []);

  return (
    <ProductsContext.Provider value={{ products, productCats }}>
      {children}
    </ProductsContext.Provider>
  );
};
