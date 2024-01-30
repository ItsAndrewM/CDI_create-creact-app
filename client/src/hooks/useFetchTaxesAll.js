import { useEffect, useState } from "react";

const useFetchTaxesAll = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/taxes/all`)
      .then((data) => data.json())
      .then((data) => setData(data.data));
  }, []);
  return data;
};

export default useFetchTaxesAll;
