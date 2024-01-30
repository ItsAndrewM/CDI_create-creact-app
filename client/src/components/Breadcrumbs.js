import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BreadCrumb from "./BreadCrumb";

const Breadcrumbs = () => {
  const location = useLocation();
  return (
    <Wrapper>
      {location.pathname.split("/").map((val, index) => {
        return (
          <BreadCrumb
            val={val}
            key={index}
            index={index}
            length={location.pathname.split("/").length}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: fit-content;
  padding: 10px 0px 10px 15px;
`;
export default Breadcrumbs;
