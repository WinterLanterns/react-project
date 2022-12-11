import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  if (location.pathname === "/not-found") {
    return (
      <div>
        <img src="/cute-not-found-image.png" alt="Not found" />
        <h1>Sorry, this page was not found.</h1>
      </div>
    );
  } else {
    return null;
  }
};

export default NotFound;
