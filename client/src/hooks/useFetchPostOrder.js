import { useEffect, useState } from "react";

const useFetchProductVar = (orderData, id) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/order/create/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((data) => data.json())
      .then((data) => setData(data.data));
  }, [orderData, id]);
  return data;
};

export default useFetchProductVar;
