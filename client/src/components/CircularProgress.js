import styled from "styled-components";
import faviconIcon from "../imgs/CDI-Animated-Logo4.png";

const CircularProgress = () => {
  return (
    <Wrapper>
      <Img src={faviconIcon} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--accent-primary-color);
  border-radius: 50%;
`;

const Img = styled.img`
  width: 200px;
  animation: Img-Rotate infinite 3s linear;

  @keyframes Img-Rotate {
    from {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-75deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(75deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;
export default CircularProgress;
