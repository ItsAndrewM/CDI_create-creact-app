import { useEffect, useState } from "react";

const useFetchCoupons = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/coupons`)
      .then((data) => data.json())
      .then((data) => setData(data.data));
  }, []);
  return data;
};

export default useFetchCoupons;
