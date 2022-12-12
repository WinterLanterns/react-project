import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import { CartContext } from "./components/CartContext";
import Announcement from "./components/Announcement";

const Container = styled.div`
  overflow-x: hidden;
`;

const Main = styled.main`
  position: relative;
  margin: 0 auto;
  max-width: 100%;
  min-height: 90vh;
`;

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Container>
      <CartContext.Provider
        value={{
          cart,
          addToCart: (quantity, product) => {
            const parsedQuantity = parseInt(quantity);
            const newProduct = { product: product, quantity: parsedQuantity };
            setCart([...cart, newProduct]);
            console.log(cart);
          },
          updateCart: (newData) => {
            setCart([...cart, newData]);
          },
          updateQuantity: (productID, newQuantity) => {
            const updatedQuantity = cart?.map((cartItem) => {
              const parsedQuantity = parseInt(newQuantity);
              if (cartItem.product.id === productID) {
                cartItem.quantity = parsedQuantity;
              }
              return cartItem;
            });
            setCart([...updatedQuantity]);
          },
          removeFromCart: (productID) => {
            const filteredCart = cart?.filter((cartItem) => {
              return cartItem.product.id !== productID;
            });
            setCart(filteredCart);
          },
          emptyCart: () => {
            setCart([]);
          },
        }}
      >
        <Announcement />
        <Header />

        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/products/:id"
              exact
              strict
              element={<ProductDetails />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>

        <Footer />
      </CartContext.Provider>
    </Container>
  );
}

export default App;
