import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { useState, useRef, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const NavbarItems = ({ items, depthLevel }) => {
  let ref = useRef();
  const [dropdown, setDropdown] = useState(false);

  const handler = (event) => {
    if (dropdown && ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <Li
      ref={ref}
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      {items.submenu ? (
        <>
          <Button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
          >
            {items.url.includes("#") ? (
              <NavHashItem to={items.url}>
                {items.title}
                {""}

                {depthLevel > 0 ? (
                  <Span>
                    <ArrowRightIcon />
                  </Span>
                ) : (
                  <Span>
                    <ArrowDropDownIcon />
                  </Span>
                )}
              </NavHashItem>
            ) : (
              <Navitem to={items.url}>
                {items.title}
                {""}

                {depthLevel > 0 ? (
                  <Span>
                    <ArrowRightIcon />
                  </Span>
                ) : (
                  <Span>
                    <ArrowDropDownIcon />
                  </Span>
                )}
              </Navitem>
            )}
          </Button>
          <Dropdown
            depthLevel={depthLevel}
            dropdown={dropdown}
            submenus={items.submenu}
          />
        </>
      ) : (
        <Navitem to={items.url}>{items.title}</Navitem>
      )}
    </Li>
  );
};

const NavHashItem = styled(NavHashLink)`
  text-decoration: none;
  transition-duration: 0.3s;
  padding-right: 10px;
  padding-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Span = styled.span`
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  background-color: white;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 5px 0px 5px 0px;

  @media screen and (max-width: 1024px) {
    padding: 0px;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

const Navitem = styled(NavLink)`
  text-decoration: none;
  transition-duration: 0.3s;
  padding-right: 10px;
  padding-left: 10px;

  &:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }
`;

const Button = styled.button`
  margin: 0px;
  padding: 0px;
  background-color: none;
  outline: none;
  background-color: inherit !important;
  width: 100%;
  text-align: left;
  &:hover {
    text-decoration: underline;
    background-color: inherit !important;
  }
  @media screen and (max-width: 1024px) {
    padding: 0px;
  }
`;

export default NavbarItems;
