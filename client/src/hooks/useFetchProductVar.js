import { useEffect, useState } from "react";

const useFetchProductVar = (id) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/products/variations/${id}`)
      .then((data) => data.json())
      .then((data) => setData(data.data));
  }, [id]);
  return data;
};

export default useFetchProductVar;
