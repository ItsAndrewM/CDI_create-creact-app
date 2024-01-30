import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";

const MediaCarousel = ({ items }) => {
  const responsive = {
    0: { items: 1, itemsFit: "contain" },
    568: { items: 1, itemsFit: "contain" },
    1024: { items: 3, itemsFit: "contain" },
  };
  return (
    <Wrapper>
      <Container>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="default"
        />
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  display: flex;
  width: 85%;
  justify-content: center;
  align-items: center;
`;

const SmallDiv = styled.div`
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  margin-right: 5px;
  margin-left: 5px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export default MediaCarousel;
