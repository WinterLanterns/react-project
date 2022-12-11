import styled from "styled-components";
import { nanoid } from "nanoid";
import { CartContext } from "../components/CartContext";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100vw;
  padding: 40px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;
const TopButton = styled(Link)`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  font-size: 20px;
  background-color: transparent;
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

const Empty = styled.img`
  width: 75%;
  display: flex;
  justify-content: center;
`;

const Info = styled.div`
  flex: 2;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  margin: 20px auto;
  border-bottom: 1px solid #eee;
  padding: 10px;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  width: 500px;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterQty = styled.option``;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

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

const Update = styled.button`
  padding: 9px;
  font-size: 15px;
  background-color: #4ebcbb;
  color: white;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 1px double black;
  width: 80px;
  text-align: center;
  text-decoration: none;
  &:hover {
    color: black;
  }
`;

const Delete = styled.button`
  padding: 5px;
  font-size: 15px;
  background-color: #d32f2f;
  color: white;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 1px double black;
  width: 100px;
  margin-bottom: 30px;
  text-align: center;
  text-decoration: none;
  &:hover {
    color: black;
  }
`;

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const cart = useContext(CartContext);

  let cartTotal = cart.cart?.map(
    (cartItem) => cartItem.product.price * cartItem.quantity
  );

  const calculateSum = (sum) =>
    sum.reduce(
      (total, current) => Math.round(total * 100 + current * 100) / 100,
      0
    );

  function handleSelectChange(e) {
    setQuantity(e.target.value);
  }

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton to="/products">CONTINUE SHOPPING</TopButton>
        </Top>

        <InfoContainer>
          <Info>
            {cart.cart.length === 0 ? (
              <Empty
                src="https://i.ibb.co/b2fns3P/Untitled-Artwork-14.png"
                alt="teddyrex"
              ></Empty>
            ) : (
              cart.cart?.map((product) => {
                return (
                  <Product key={nanoid()}>
                    <ProductDetail>
                      <Image src={product.product.image} />
                      <Details>
                        <ProductName>
                          <b>Product:</b>
                          {product.product.title}
                        </ProductName>
                        <ProductId>
                          <b>Rating:</b>
                          {product.product.rating.rate}/5
                        </ProductId>
                        <FilterTitle>
                          <b>Qty:</b> {product.quantity}
                        </FilterTitle>

                        <ProductSize>
                          <b>Category:</b>
                          {product.product.category}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <ProductAmount>
                          <FilterSize
                            defaultValue={quantity}
                            onChange={handleSelectChange}
                          >
                            <FilterQty value="1">1</FilterQty>
                            <FilterQty value="2">2</FilterQty>
                            <FilterQty value="3">3</FilterQty>
                            <FilterQty value="4">4</FilterQty>
                            <FilterQty value="5">5</FilterQty>
                          </FilterSize>
                        </ProductAmount>
                        <Update
                          onClick={() =>
                            cart.updateQuantity(product.product.id, quantity)
                          }
                        >
                          Update
                        </Update>
                      </ProductAmountContainer>
                      <Delete
                        onClick={() => cart.removeFromCart(product.product.id)}
                      >
                        Remove!
                      </Delete>
                      <ProductPrice>${product.product.price}</ProductPrice>
                    </PriceDetail>
                  </Product>
                );
              })
            )}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{calculateSum(cartTotal)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${calculateSum(cartTotal)}</SummaryItemPrice>
            </SummaryItem>
            <Button to="/checkout">CHECKOUT NOW</Button>
          </Summary>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Cart;
