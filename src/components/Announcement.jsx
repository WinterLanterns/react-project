import React from "react";
import styled from "styled-components";
import "./fonts.css";

const Container = styled.div`
  height: 30px;
  background-color: #4ebcbb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container className="font-style">
      Free Shipping on Orders Over $10000...Maybe
    </Container>
  );
};

export default Announcement;
