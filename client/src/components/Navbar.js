import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext, useEffect, useState } from "react";
import { menuItems } from "../data/menuItems";
import NavbarItems from "./NavbarItems";
import { CartContext } from "./CartContext";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [quantity, setQuantityTotal] = useState(0);
  const { state, action } = useContext(CartContext);
  const [isMobile, setIsMobile] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let quantity = 0;
    if (state) {
      if (state.cart) {
        state.cart.forEach((element) => {
          quantity += Number(element.quantity);
        });
      }
    }
    setQuantityTotal(quantity);
  }, [state]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (location.pathname === "/") {
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    } else {
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  };

  const handleResize = () => {
    if (window.innerWidth < 1025) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Div
      style={{
        position: scrolled ? "fixed" : "",
        top: scrolled ? "0" : "",
      }}
    >
      {isMobile ? (
        <>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setShow(!show);
            }}
          >
            <StyledMenuIcon sx={{ color: "var(--accent-primary-color)" }} />
          </Button>
          {show && (
            <Ul onMouseLeave={() => setShow(false)}>
              {menuItems.map((menu, index) => {
                const depthLevel = 0;

                return (
                  <NavbarItems
                    items={menu}
                    key={index}
                    depthLevel={depthLevel}
                  />
                );
              })}
              <Li></Li>
              <Li>
                <Navitem to={"/cart"}>
                  <ShoppingCartIcon sx={{ fontSize: 40 }} />
                  {!quantity ? <></> : <P>{quantity}</P>}
                </Navitem>
              </Li>
            </Ul>
          )}
        </>
      ) : (
        <Ul>
          {menuItems.map((menu, index) => {
            const depthLevel = 0;

            return (
              <NavbarItems items={menu} key={index} depthLevel={depthLevel} />
            );
          })}
          <Li></Li>
          <Li>
            <Navitem to={"/cart"}>
              <ShoppingCartIcon sx={{ fontSize: 40 }} />
              {!quantity ? <></> : <P>{quantity}</P>}
            </Navitem>
          </Li>
        </Ul>
      )}
    </Div>
  );
};

const StyledMenuIcon = styled(MenuIcon)`
  color: var(--accent-primary-color);
  transition: 0.3s;

  &:hover {
    color: var(--accent-secondary-color);
  }
`;

const Button = styled.button`
  padding: 0;
  background-color: inherit;
  &:hover {
    background-color: inherit;
  }
`;

const P = styled.p`
  width: 100%;
`;

const Div = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  background-color: white;
  z-index: 9999;
  flex-wrap: nowrap;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Ul = styled.ul`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  position: relative;
  background-color: white;
  @media screen and (max-width: 1024px) {
    font-size: 16px !important;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
`;

const Li = styled.li`
  text-transform: uppercase;
  color: var(--accent-primary-color);
  display: flex;

  &:hover {
    color: var(--accent-secondary-color);
    border-bottom: 1px solid var(--accent-secondary-color);
  }
  &:active {
    color: var(--accent-secondary-color);
    border-bottom: 1px solid var(--accent-secondary-color);
  }
  @media screen and (max-width: 1024px) {
    font-size: 16px !important;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
  }
`;

const Navitem = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  &:active {
    color: var(--accent-secondary-color);
    border-bottom: 1px solid var(--accent-secondary-color);
  }
  &:visited {
    text-decoration: none;
    color: inherit;
  }
  @media screen and (max-width: 1024px) {
    font-size: 16px !important;
    flex-direction: row;
  }
`;
export default Navbar;
