import styled from "styled-components";
import FooterImages from "./FooterImages";
import { footerMenuItems } from "../data/footerMenuItems";
import { NavLink } from "react-router-dom";

const FooterTopSection = () => {
  return (
    <TopSection>
      <FooterImages />
      <MenuContainer>
        {footerMenuItems.map((menuItem, index) => {
          return (
            <ColumnDiv key={index}>
              <Ul>
                <Li>
                  <H1Container>
                    <H1>
                      <NavItem to={menuItem.url} style={{ fontSize: "20px" }}>
                        {menuItem.header}
                      </NavItem>
                    </H1>
                  </H1Container>
                  {menuItem.subHeader ? (
                    <Ul>
                      {menuItem.subHeader.map((sub, index) => {
                        return (
                          <Li key={index}>
                            <NavItem to={sub.url}>
                              {sub.icon ? <sub.icon /> : <></>}
                              {sub.header}
                            </NavItem>
                          </Li>
                        );
                      })}
                    </Ul>
                  ) : (
                    <></>
                  )}
                </Li>
              </Ul>
            </ColumnDiv>
          );
        })}
      </MenuContainer>
    </TopSection>
  );
};

const H1Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const H1 = styled.h1`
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  line-height: 0em;
`;

const NavItem = styled(NavLink)`
  color: white;
  width: 100%;
  text-decoration: none;
  height: 100%;
  background-color: inherit;
  color: white;
  &:hover {
    background-color: inherit;
    color: var(--accent-secondary-color);
  }
`;

const Li = styled.li`
  text-transform: capitalize;
  line-height: 2em;
  width: 100%;
  height: 100%;
`;

const ColumnDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const Ul = styled.ul``;

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  margin-top: 10px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 50px;
    padding-top: 20px;
  }
`;
export default FooterTopSection;
