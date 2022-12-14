import React from "react";
import HomeDetails from "../components/HomeDetails";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = styled.div`
  height: auto;
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
  background-color: #000;
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
      <Main className="container my-auto">
        <Heading className="heading-font mt-5 ">Power of Beauty</Heading>
        <Hr className="row" />
        <Text className="para-font col-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
          <br style={{ marginBottom: "10px" }} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </Text>
        <Text className="para-font col-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </Text>
        <Text className="para-font col-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Text>
        <Button className="mb-5" to="/products">
          SHOP NOW!
        </Button>
      </Main>
      <Newsletter className="container" />
    </div>
  );
}

export default Home;
