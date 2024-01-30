import { useEffect, useState } from "react";
import CatChildMenu from "./CatChildMenu";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { removeCharsFromName } from "../lib/helpers";

const CatParentMenu = ({ val, productCats }) => {
  const [children, setChildren] = useState([]);
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const holderArr = [];
    productCats.forEach((element) => {
      if (element.parent === val.id) {
        holderArr.push(element);
      }
    });
    if (location.pathname === `/products/product-category/${val.slug}`) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    setChildren([...new Set(holderArr)]);
  }, [val, productCats, location.pathname]);

  return (
    !val.name.match("Uncategorized") && (
      <Li>
        <NavItem
          to={`/products/product-category/${val.slug}`}
          state={{ id: val.id, slug: val.slug }}
          style={{ fontWeight: isActive ? "bold" : "" }}
        >
          {removeCharsFromName(val.name)}
        </NavItem>
        {children.length ? (
          <Ul>
            {children.map((ele, index) => {
              return <CatChildMenu key={index} ele={ele} parent={val} />;
            })}
          </Ul>
        ) : (
          <></>
        )}
      </Li>
    )
  );
};

const Li = styled.li`
  margin-bottom: 5px;
`;

const Ul = styled.ul`
  margin-bottom: 5px;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  &:hover {
    color: var(--accent-secondary-color);
  }
`;

export default CatParentMenu;
