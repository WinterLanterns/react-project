import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "./CartContext";

const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: end;
  padding-right: 20px;
`;

const MenuItems = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: 300;
  &:hover {
    color: #4ebcbb;
  }
`;

function Navbar() {
  const cart = useContext(CartContext);

  return (
    <Nav>
      <MenuItems to="/">HOME</MenuItems>
      <MenuItems to="/products">PRODUCTS</MenuItems>
      <MenuItems to="/cart">
        <Badge badgeContent={cart.cart.length} color="error">
          <ShoppingCartOutlined />
        </Badge>
      </MenuItems>
    </Nav>
  );
}

export default Navbar;
