import { useEffect, useState } from "react";

const useFetchGetOrder = (id) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/order/${id}`)
      .then((data) => data.json())
      .then((data) => setData(data.data));
  }, [id]);
  return data;
};

export default useFetchGetOrder;
