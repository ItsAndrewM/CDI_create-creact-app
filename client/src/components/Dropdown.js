import styled from "styled-components";
import NavbarItems from "./NavbarItems";

const Dropdown = ({ depthLevel, dropdown, submenus }) => {
  depthLevel = depthLevel + 1;
  return (
    <>
      {depthLevel > 1 ? (
        <UlButRed style={{ display: dropdown ? null : "none" }}>
          {submenus.map((submenu, index) => {
            return (
              <NavbarItems
                depthLevel={depthLevel}
                items={submenu}
                key={index}
              />
            );
          })}
        </UlButRed>
      ) : (
        <Ul style={{ display: dropdown ? null : "none" }}>
          {submenus.map((submenu, index) => {
            return (
              <NavbarItems
                depthLevel={depthLevel}
                items={submenu}
                key={index}
              />
            );
          })}
        </Ul>
      )}
    </>
  );
};

const UlButRed = styled.ul`
  position: absolute;
  margin-left: 115px;
  min-width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  overflow: visible;
  z-index: 999;
  flex-wrap: nowrap;
  max-height: 30px;
  @media screen and (max-width: 1024px) {
    max-height: 100%;
    position: relative;
    overflow: none;
    margin: 0px;
    margin-left: 40px;
    gap: 10px;
  }
`;

const Ul = styled.ul`
  top: 100%;
  position: absolute;
  padding: 0px 50px 0px 0px;
  margin: 0px;
  /* max-width: 550px; */
  /* width: 255px; */
  min-width: 98px;
  @media screen and (max-width: 1024px) {
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0px;
    top: 0%;
    gap: 10px;
    margin-left: 20px;
  }
`;

export default Dropdown;
