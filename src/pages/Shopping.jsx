/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../App";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash
} from "@fortawesome/free-solid-svg-icons";

import Footer from "./Footer";

const MainDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

 

  
`;

const CartDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 25px;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
`;

const TextDiv = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 15px;

  h3 {
    font-size: 22px;
    margin-bottom: 5px;
  }

  h4 {
    font-size: 16px;
    color: #777;
    margin-bottom: 10px;

    @media (max-width: 1000px) {
      display: none;
  }
  }
`;

const PriceDiv = styled.div`
  width: 20%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  .GreenPrice {
    color: #13d913;
    font-size: 18px;
  }
`;

const QuantityDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  margin-bottom: 10px;


`;

const QuantityButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  font-size: 18px;
  cursor: pointer;
  background-color: #10e710;
  border: none;
  color: white;
`;

const DeleteDropdown = styled.select`
  margin-left: 10px;
  background-color: black;
  color: white;
  width: 100px;
  text-align: center;
  height: 40px;
  border-radius: 8px;
  font-size: 17px;

  button{
    background-color: black;
  }

  .Icon{
    color: white;
    font-size: 15px;
  }

  .option{
    color: red;
  }
`;




export default function Shopping() {
  const { products, setProducts } = useContext(ProductsContext);
  const myData = { key: 'value' };
  localStorage.setItem('mykey', JSON.stringify(myData));
  const storedData = JSON.parse(localStorage.getItem('myKey'));

  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('myItems')) || [];
    setItems(storedItems);
  }, []);

  const handleQuantityChange = (productId, amount) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, quantity: (product.quantity || 0) + amount }
        : product
    );

    setProducts(updatedProducts);
    updateLocalStorage(updatedProducts);
  };

  const handleDelete = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    updateLocalStorage(updatedProducts);
  };

  const updateLocalStorage = (updatedProducts) => {
    const updatedItems = updatedProducts.map((product) => ({
      id: product.id,
      quantity: product.quantity || 0,
    }));

    setItems(updatedItems);
    localStorage.setItem('myItems', JSON.stringify(updatedItems));
  };

  const deleteItemFromLocalStorage = (productId) => {
    const updatedItems = items.filter((item) => item.id !== productId);
    setItems(updatedItems);
    localStorage.setItem('myItems', JSON.stringify(updatedItems));
  };

  return (
    <MainDiv>
      {products.map((product, index) => (
        <CartDiv key={`${product.id}-${index}`}>
          <ProductImage src={product.image} alt={product.title} />
          <TextDiv>
            <h3>{product.title}</h3>
            <h4>{product.description}</h4>
          </TextDiv>
          <PriceDiv>
            <h3 className="GreenPrice">Price: ${product.price}</h3>
            <QuantityDiv>
              <QuantityButton onClick={() => handleQuantityChange(product.id, -1)}>-</QuantityButton>
              <span key={`${product.id}-quantity`}>{product.quantity || 0}</span>
              <QuantityButton onClick={() => handleQuantityChange(product.id, 1)}>+</QuantityButton>
            </QuantityDiv>
            <button onClick={() => handleDelete(product.id)} key={`${product.id}-delete`}>
              Delete
            </button>
          </PriceDiv>
        </CartDiv>
      ))}
      <Footer />
    </MainDiv>
  );
}


