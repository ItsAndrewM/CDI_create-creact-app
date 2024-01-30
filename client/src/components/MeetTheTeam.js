import { NavLink } from "react-router-dom";
import styled from "styled-components";
import cdiLogo from "../imgs/cdi_logo.png";
import cdiAnimatedLogo from "../imgs/CDI-Animated-logo.png";
import { meetTheTeam } from "../data/meetTheTeam";
import darryl from "../imgs/darryl-cdi.jpg";
import laura from "../imgs/Laura-cdi.jpg";
import andreas from "../imgs/Andreas-cdi.jpg";
import ron from "../imgs/Ron-cdi.jpg";
import trevor from "../imgs/Trevor-cdi.jpg";

const MeetTheTeam = () => {
  return (
    <Wrapper>
      <Container>
        <P>
          Welcome to{" "}
          <strong>
            <NavLink to={"/"} style={{ fontSize: "24px" }}>
              CDIfurlers.com
            </NavLink>
          </strong>
          , where our mission is to provide reliable and innovative sailing
          solutions to our customers. We are proud to introduce you to our
          dedicated team of experts who are passionate about sailing and
          committed to delivering high-quality products and exceptional service.
        </P>
        <ImgContainer>
          <NavLink to={"/"}>
            <Img src={cdiLogo} />
          </NavLink>
          <NavLink to={"/"}>
            <Img src={cdiAnimatedLogo} />
          </NavLink>
        </ImgContainer>
        <TeamContainer>
          {meetTheTeam &&
            meetTheTeam.map((teamMember, index) => {
              return (
                <Box key={index}>
                  <H>{teamMember.name}</H>
                  <BottomWrapper>
                    <ImgContainer>
                      <ProfileImg src={teamMember.img} />
                    </ImgContainer>
                    <TextContainer>
                      <SmallP>{teamMember.text}</SmallP>
                      {teamMember.email && (
                        <ButtonWrapper>
                          <button
                            onClick={() =>
                              (window.location = `mailto:${teamMember.email}`)
                            }
                          >
                            Contact {teamMember.name.split(" ")[0]}
                          </button>
                        </ButtonWrapper>
                      )}
                    </TextContainer>
                  </BottomWrapper>
                </Box>
              );
            })}
        </TeamContainer>
      </Container>
    </Wrapper>
  );
};

const BottomWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`;

const ButtonWrapper = styled.div``;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

const ProfileImg = styled.img`
  height: 600px;
  width: 100%;
  object-fit: cover;
`;

const SmallP = styled.p`
  line-height: 1.5em;
  color: var(--accent-text-color);
`;

const H = styled.h2`
  width: 100%;
  color: var(--accent-text-color);
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const TeamContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  flex-direction: column;
`;

const Img = styled.img`
  width: 300px;
  height: auto;
`;

const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const P = styled.p`
  width: 100%;
  color: var(--accent-text-color);
  line-height: 1.5em;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  width: 80%;
  padding: 20px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default MeetTheTeam;
