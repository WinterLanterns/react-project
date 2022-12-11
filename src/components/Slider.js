import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { sliderItems } from "../data";
import { Link } from "react-router-dom";

const Container = styled.div`
  weight: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 3px -3px gray;
`;

//transform makes it so the header slides when being arrow is clicked
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

// background-color is grabbed from data
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  position: relative;
`;

const Image = styled.img`
  height: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 3;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  text-align: center;
`;
const Bder = styled.img`
  display: block;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 3px;
  text-align: center;
`;
const Button = styled(Link)`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  width: 180px;
  text-align: center;
  text-decoration: none;
  color: black;
  &:hover {
    color: #4ebcbb;
  }
`;

const Arrow = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  margin: auto;
  opacity: 0.5;
  z-index: 2;
`;

const Slider = () => {
  //code to make slides move
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button to="/products">SHOW NOW</Button>
              <Bder src={item.bder}></Bder>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
