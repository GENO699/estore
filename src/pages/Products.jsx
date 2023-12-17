/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import LoadingCircle from "../components/Circlewaiting";
import CategoriesFilter from "../components/Categories";

const Div = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const CardLink = styled(Link)`
  width: 25%; /* Adjust the width based on your design */
  height: auto;
  border-radius: 14px;
  background-color: #fff;
  text-decoration: none;
  color: #ff1b1b;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  margin: 0;
  padding: 0;
  text-decoration: none;


  

  img {
    width: 180px;
    height: 150px;

    @media (max-width: 1000px) {
      width: 230px;
      height: 200px;
    }
  }


  @media (max-width: 1000px) {
   height: auto;
   width: 100%;
   display: flex;
  }
`;

const ProductCard = styled.div`
  width: 100%;
  /* Adjust the width based on your design */
  height: 42vh;
  display: flex;
  flex-direction: column;
  padding: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 14px;
  background-color: #fff;
  color: black;
  margin: 10px;
  align-items: center;

  @media (max-width: 1280px) {
   height: auto;
   width: 80%;
   display: flex;
  }
`;

const TextDiv = styled.div`
  width: 100%;
  height: auto;
  /* flex-grow: 1; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-size: 15px;

  .GreenPrice {
    color: #1acd1a;
    font-size: 17px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 35px;
  background-color: #0c700c;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  color: white;
  transition: 0.1s;
  &:hover {
    background-color: red;
  }

  @media (max-width: 1000px) {
   height: 35px;
   width: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
  
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  input {
    background-color: red;
  }
`;






export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setIsLoading(false); 
      } catch (error) {
        console.error("Error fetching products data", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {/* Conditionally render the LoadingCircle component while loading */}
      {isLoading ? (
        <LoadingCircle />
      ) : (
        <>
          <h2 style={{ fontSize: "22px", marginTop: "20px" }}>Product Page</h2>
          <p style={{ marginBottom: "20px" }}>This is the product page.</p>

          <Div>
            <CategoriesFilter />
            {products.map((product) => (
              <CardLink
                key={product.id}
                to={`/products/${product.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ProductCard>
                  <img src={product.image} alt={product.title} />
                  <TextDiv>
                    <h3>{product.title}</h3>
                    <p className="GreenPrice">Price: ${product.price}</p>
                  </TextDiv>
                  <ButtonDiv>
                    <Button>Purchase</Button>
                  </ButtonDiv>
                </ProductCard>
              </CardLink>
            ))}
            <Footer />
          </Div>
        </>
      )}
    </div>
  );
}
