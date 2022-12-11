import React from "react";
import HomeDetails from "../components/HomeDetails";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = styled.div`
  height: 100vh;
  text-align: center;
  margin-top: 150px;
`;

const Heading = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 300;
`;

const Text = styled.div`
  width: 50%;
  text-align: center;
  font-weight: 300px;
  letter-spacing: 0.2rem;
  margin: auto;
  line-height: 1.5rem;
  font-size: 13px;
  margin-bottom: 20px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  width: 75%;
  margin: 50px auto;
`;

const Button = styled(Link)`
  padding: 10px;
  font-size: 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 1px double black;
  width: 180px;
  text-align: center;
  text-decoration: none;
  &:hover {
    color: #4ebcbb;
  }
`;

function Home() {
  return (
    <div>
      <Slider></Slider>
      <HomeDetails />
      <Main>
        <Heading>Power of Beauty</Heading>
        <Hr />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
          <br style={{ marginBottom: "10px" }} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Text>
        <Button to="/products">SHOP NOW!</Button>
      </Main>
      <Newsletter />
    </div>
  );
}

export default Home;
