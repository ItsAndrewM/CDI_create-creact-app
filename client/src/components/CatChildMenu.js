import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { removeCharsFromName } from "../lib/helpers";

const CatChildMenu = ({ ele, parent }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (
      location.pathname ===
      `/products/product-category/${parent.slug}/${ele.slug}`
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [ele, parent, location]);
  return (
    <Li>
      <NavItem
        to={`/products/product-category/${parent.slug}/${ele.slug}`}
        state={{ id: ele.id, slug: ele.slug }}
        style={{ fontWeight: isActive ? "bold" : "" }}
      >
        {removeCharsFromName(ele.name)}
      </NavItem>
    </Li>
  );
};

const Li = styled.li`
  list-style-type: circle;
  list-style: inside;
  margin-bottom: 5px;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  &:hover {
    color: var(--accent-secondary-color);
  }
`;

export default CatChildMenu;
