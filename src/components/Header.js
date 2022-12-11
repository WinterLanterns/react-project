import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #eee;
`;

const Image = styled.img`
  padding: 10px 20px;
  align-items: center;
  display: flex;
  justify-content: start;
  width: 70px;
`;

const LogoTitle = styled(Link)`
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
  color: black;
  letter-spacing: 0.2rem;
  &:hover {
    color: #4ebcbb;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default function Header(props) {
  return (
    <Container>
      <Image src="https://i.ibb.co/6tw8N0Y/sun.png"></Image>
      <LogoTitle to="/">CHOCOMIL</LogoTitle>
      <Right>
        <Navbar />
      </Right>
    </Container>
  );
}
