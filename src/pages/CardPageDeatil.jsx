/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ProductsContext } from "../App";

const ProductDetail = () => {
  const MainDiv = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    /* border: 1px solid; */
    margin-top: 10px;
    margin-bottom: 20px;

    p {
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h2 {
      border-bottom: 1px solid black;
    }

    .GreenPrice {
      color: #11da11;
      font-size: 24px;
    }
    img {
      width: 350px;
      height: 300px;
      /* border: 1px solid; */
      padding: 20px;
      border-radius: 5px;
      position: relative;
    }

    .Icon {
      font-size: 35px;
      color: white;
    }
  `;

  const CardInformation = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .Sale {
      color: red;
      font-size: 22px;
      margin: 20px;
    }
  `;

  // const Icon = styled.div`
  //   width: 3%;
  //   height: 45px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   border-radius: 50%;
  //   position: absolute;
  //   top: 60%;
  //   right: 37%;
  //   font-size: 30px;
  //   background-color: #18f518;
  //   cursor: pointer;
  //   transition: 0.8s;

  //   &:hover {
  //    transform: rotate(360deg);
  //    border: 1px solid red;
  //    /* color: black; */

  //   }

  // `;

  const Button = styled.button`
    width: 240px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #0aa50a;
    color: white;
    font-size: 20px;
    border: none;
    cursor: pointer;

    &:hover {
    }

    .IconCart {
      margin-left: 5px;
    }
  `;

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product data", error);
      }
    };

    fetchData();
  }, [id]);

  const addProductsToCart = (product) => {
    setProducts((currentProducts) => [...currentProducts, product]);
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    };



  return (
    <div>
      {product ? (
        <MainDiv>
          <CardInformation>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p className="Sale">HOT SALES !</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "30%",
              }}
            >
              <Button onClick={() => addProductsToCart(product)}>
                Add to Cart
                <div
                  style={{
                    width: "40px",
                    height: "auto",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    borderLeft: "1px solid white",
                  }}
                >
                  <FontAwesomeIcon className="IconCart" icon={faCartShopping} />
                </div>
              </Button>
              <p className="GreenPrice">Price: ${product.price}</p>
            </div>

            {/* <FontAwesomeIcon icon={faPlus} className="Icon" /> */}
          </CardInformation>
        </MainDiv>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
