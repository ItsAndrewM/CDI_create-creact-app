import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const ArrPagination = ({ setIncomingPagination, arr, pageSize }) => {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    if (arr.length > pageSize) {
      setPagination({ ...pagination, count: Number(arr.length) });
      setIncomingPagination(arr.slice(pagination.from, pagination.to));
    } else {
      setPagination({ ...pagination, count: Number(arr.length) });
      setIncomingPagination(arr);
    }
  }, [arr, pagination.from, pagination.to]);

  const handleChange = (e, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <Wrapper>
      <Pagination
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
