import styled from "styled-components";
import Hero from "./Hero";
import img from "../imgs/CDI-FF2-Flexible-furler.jpg";
import InfoBanner from "./InfoBanner";
import MediaCarousel from "./MediaCarousel";
import Accordian from "./Accordian";
import accordianImg from "../imgs/CDI-Flexible-Furler-Parts.jpg";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import furlerImg from "../imgs/CDI-Flexible-Furler-FF2-Closeup-768x512.jpg";
import InfoGraphic from "./InfoGraphic";
import { accordianData } from "../data/accordianData";
import { ctaIcon } from "../data/ctaIcon";
import { items } from "../data/itemsHomeCarousel";

const Home = () => {
  return (
    <Wrapper>
      <Hero
        img={img}
        header={"CDI Furlers"}
        text={"Trusted by sailors for over 40 years"}
        buttonText={"shop now"}
        buttonUrl={"/products"}
      />
      <InfoBanner
        column1={"Mon-Fri: 8:00am to 4:00pm PST"}
        column2={"1-(888)-880-6813"}
        column3={"info@cdifurlers.com"}
      />
      <Container>
        <MediaCarousel items={items} />
      </Container>
      <SmallContainer>
        <H1>Designed For Sailors: CDI's Furling System</H1>
      </SmallContainer>
      <SpecialContainer>
        <PicContainer>
          <Img src={accordianImg} />
        </PicContainer>
        <AccordianContainer>
          <Accordian accordianData={accordianData} />
          <SmallContainer>
            <Button
              buttonUrl={"/products"}
              buttonText={"Find your furler here"}
            />
          </SmallContainer>
        </AccordianContainer>
      </SpecialContainer>
      <SpecialContainer>
        <PicContainer>
          <Img src={furlerImg} />
        </PicContainer>
        <TextContainer>
          <H1>Get Your Furl On And Let's Set Sail</H1>
          <P>
            CDI furlers are a <Span>Must-Have</Span> for a smooth sailing
            experience. Treat your sailboat (and yourself) to the luxury it
            deserves.
          </P>
          <Button buttonUrl={"/products"} buttonText={"Learn More"} />
        </TextContainer>
      </SpecialContainer>
      <SpecialContainer
        style={{
          minheight: "1000px",
        }}
      >
        <InfoGraphic
          ctaHeader={"sailing with ease and confidence"}
          ctaP={
            "For over 40 years sailors around the world have trusted CDI with their sailboat furling systems."
          }
          ctaP2={
            "With CDI’s patented Flexible Furler technology sailing has advanced. CDI’s Furlers are safer, easier, and more reliable systems that allow sailors to do what they do best – sail the open water."
          }
          ctaIcon={ctaIcon}
        />
      </SpecialContainer>
    </Wrapper>
  );
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 50px;
  align-items: center;
  width: 40%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Span = styled.span`
  text-decoration: underline;
  font-weight: bold;
`;

const P = styled.p`
  font-size: 22px;
  text-align: center;
  line-height: 1.5;
`;

const NavItem = styled(NavLink)`
  width: 100%;
`;

const SpecialContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: nowrap;
  min-height: 650px;
  @media screen and (max-width: 1024px) {
    min-height: 50vh;
    flex-direction: column;
  }
`;

const SmallContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: nowrap;
  margin: 10px 0px 10px 0px;
  height: 100%;
`;

const AccordianContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

const PicContainer = styled.div`
  /* width: 100%; */
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: nowrap;
  min-height: 650px;
  @media screen and (max-width: 1024px) {
    min-height: 50vh;
  }
`;

const H1 = styled.h1`
  text-align: center;
  width: 100%;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  height: auto;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export default Home;
