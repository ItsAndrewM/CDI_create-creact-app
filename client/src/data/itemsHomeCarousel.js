import styled from "styled-components";
import img1 from "../imgs/CDI-Flexible-Furler-Truck-Running-Over-it-Durability-Proof.jpg";
import img2 from "../imgs/CDI-Flexible-Furler-Parts.jpg";
import img3 from "../imgs/CDI-FF2-Flexible-furler.jpg";
import img4 from "../imgs/CDI-FlexibleFurler-FF2-installed-on-boat.jpg";

export const handleDragStart = (e) => e.preventDefault();

export const SmallDiv = styled.div`
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  margin-right: 5px;
  margin-left: 5px;
`;

export const items = [
  <SmallDiv
    style={{ backgroundImage: `url(${img1})` }}
    onDragStart={handleDragStart}
    data-value="1"
  ></SmallDiv>,
  <SmallDiv
    style={{ backgroundImage: `url(${img2})` }}
    onDragStart={handleDragStart}
    data-value="2"
  ></SmallDiv>,
  <SmallDiv
    style={{ backgroundImage: `url(${img3})` }}
    onDragStart={handleDragStart}
    data-value="3"
  ></SmallDiv>,
  <SmallDiv
    style={{ backgroundImage: `url(${img4})` }}
    onDragStart={handleDragStart}
    data-value="4"
  ></SmallDiv>,
  <SmallDiv
    style={{ backgroundImage: `url(${img1})` }}
    onDragStart={handleDragStart}
    data-value="5"
  ></SmallDiv>,
];
