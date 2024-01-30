import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const BreadCrumb = ({ val, index, length }) => {
  const [p, setP] = useState();
  const [url, setUrl] = useState();
  const location = useLocation();

  useEffect(() => {
    if (index > 1 && index < location.pathname.split("/").length - 1) {
      const found = location.pathname.split("/").findIndex((ele) => {
        return ele === val;
      });
      const arr = location.pathname.split("/").slice(1, found + 1);
      if (arr.find((ele) => ele === "product-category")) {
      } else {
        arr.splice(1, 0, "product-category");
      }
      const newStr = "/" + arr.join("/");
      setUrl(newStr);
    }
    if (index === 1) {
      setUrl("/" + val);
    }
    if (val) {
      if (val.includes("-")) {
        val = val.replaceAll("-", " ");
      }
    }
    setP(val + " ");
  }, [val]);

  return index === length - 1 || index === 0 ? (
    <LightP>{p}</LightP>
  ) : (
    <NavItem to={url}>
      <P>{p}/</P>
    </NavItem>
  );
};

const NavItem = styled(NavLink)`
  text-decoration: none;
`;

const LightP = styled.p`
  color: var(--accent-secondary-color);
  text-transform: uppercase;
`;
const P = styled.p`
  text-transform: capitalize;
  width: 100%;
`;
export default BreadCrumb;
