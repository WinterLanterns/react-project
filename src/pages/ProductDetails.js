import styled from "styled-components";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../components/CartContext";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid black;
  padding: 15%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  display: flex;
  justify-content: center;
`;

const Info = styled.div`
  width: 75%;
`;

const Title = styled.h1`
  font-weight: 200;
  margin-bottom: 40px;
  letter-spacing: 0.5rem;
`;

const Desc = styled.p`
  margin: 40px auto 20px 0;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.8rem;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
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

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

export default function ProductDetails(props) {
  const cart = useContext(CartContext);

  const [product, setProduct] = useState();

  let { id } = useParams();

  const loadProduct = async () => {
    const response = await fetch(
      `https://my-art-api.herokuapp.com/artapi/${id.substring(1)}`
    );
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    loadProduct();
    setQuantity("1");
  }, []);

  const [quantity, setQuantity] = useState(0);

  function handleSelectChange(e) {
    setQuantity(e.target.value);
  }

  if (product) {
    return (
      <Container>
        <Wrapper>
          <ImgContainer>
            <Image src={product.image} alt={product.title} />
          </ImgContainer>
          <InfoContainer>
            <Info>
              <Title>{product.title}</Title>
              <hr />
              <Desc>{product.description}</Desc>
              <Price>${product.price}</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Qty</FilterTitle>
                  <FilterSize defaultValue={"1"} onChange={handleSelectChange}>
                    <FilterQty value="1">1</FilterQty>
                    <FilterQty value="2">2</FilterQty>
                    <FilterQty value="3">3</FilterQty>
                    <FilterQty value="4">4</FilterQty>
                    <FilterQty value="5">5</FilterQty>
                  </FilterSize>
                </Filter>
              </FilterContainer>
              <AddContainer>
                <Button
                  type="submit"
                  onClick={() => {
                    cart.addToCart(quantity, product);
                  }}
                >
                  ADD TO CART
                </Button>
              </AddContainer>
            </Info>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
      </Container>
    );
  }
}
