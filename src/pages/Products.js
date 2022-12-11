import React, { useState, useEffect, useContext } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import { CartContext } from "../components/CartContext";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Main = styled.main`
  max-width: 100vw;
  min-height: 100vh;
`;

const Heading = styled.h1`
  text-align: center;
  margin: 50px;
  display: block;
  letter-spacing: 0.5rem;
  font-weight: 300;
  font-size: 60px;
`;

const Form = styled.div`
  margin-left: 90px;
  display: flex;
  justify-content: flex-end;
`;

const DropDown = styled.div`
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  padding: 8px;
  margin: 10px;
  font-size: 12px;
  font-weight: 300;
`;

const Products = styled.div`
  margin: 30px;

  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  width: 250px;
`;

const Icon = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

// styling ends

export default function ProductList(props) {
  const [fetchResult, setFetchResult] = useState([]);
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState([]);
  const [type, setType] = useState([]);
  const [sidebarSearch, setSidebarSearch] = useState("");
  const cart = useContext(CartContext);

  const loadProducts = async () => {
    const response = await fetch(`https://my-art-api.herokuapp.com/artapi`);
    const data = await response.json();
    setFetchResult(data);
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(sidebarSearch.toLowerCase());
  });

  const typeFiltered = products.filter((product) => {
    return product.category === type;
  });

  useEffect(() => {
    if (sort === "pricelth") {
      const lthSort = fetchResult.slice().sort(function (a, b) {
        return a.price - b.price;
      });
      setProducts(lthSort);
    } else if (sort === "pricehtl") {
      const htlSort = fetchResult.slice().sort(function (a, b) {
        return b.price - a.price;
      });
      setProducts(htlSort);
    } else {
      const idSort = fetchResult.slice().sort(function (a, b) {
        return a.id - b.id;
      });
      setProducts(idSort);
    }
  }, [sort]);

  useEffect(() => {
    if (type !== "all") {
      setProducts(typeFiltered);
    } else {
      setProducts(fetchResult);
    }
  }, [type]);

  function handleSelectChange(e) {
    setProducts(fetchResult);
    setType(e.target.value);
  }

  function handleSortChange(e) {
    setSort(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  let cartTotal = [];

  cart.cart?.map((cartItem) => {
    return (cartTotal = [
      ...cartTotal,
      cartItem.product.price * cartItem.quantity,
    ]);
  });

  const productList = (
    <>
      <Heading>Categories</Heading>
      <Main>
        <Form>
          <form onSubmit={handleSubmit}>
            <DropDown>
              <Select defaultValue={"all"} onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="shirts">Shirts</option>
                <option value="hoodie">Hoodies</option>
                <option value="jewelry">Jewelry</option>
                <option value="accessories">Accessories</option>
              </Select>
              <Select defaultValue={"id"} onChange={handleSortChange}>
                <option value="id">ID</option>
                <option value="pricelth">Price (Low to High)</option>
                <option value="pricehtl">Price (High to Low)</option>
              </Select>
            </DropDown>
          </form>
        </Form>
        <hr />

        {/* Product page  */}

        <Products>
          {!filteredProducts
            ? products?.map((product) => (
                <Container>
                  <Circle />
                  <Image
                    key={nanoid()}
                    id={product.id}
                    className="productImage"
                    src={product.image}
                    alt={product.title}
                  />
                  <Info>
                    <Icon to={{ pathname: `/products/:${product.id}` }}>
                      <VisibilityIcon />
                    </Icon>
                  </Info>
                </Container>
              ))
            : filteredProducts?.map((product) => (
                <Container>
                  <Circle />
                  <Image
                    key={nanoid()}
                    id={product.id}
                    className="productImage"
                    src={product.image}
                    alt={product.title}
                  />
                  <Info>
                    <Icon to={{ pathname: `/products/:${product.id}` }}>
                      <VisibilityIcon />
                    </Icon>
                  </Info>
                </Container>
              ))}
        </Products>

        <Newsletter />
      </Main>
    </>
  );
  return productList;
}
