import { useEffect, useState } from "react";

const useFetchShipping = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/shipping/method/zone`)
      .then((data) => data.json())
      .then((data) => setData(data.data));
  }, []);
  return data;
};

export default useFetchShipping;
