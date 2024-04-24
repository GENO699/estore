/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import CardImage from "../images/wp9038858.jpg";
import CardImageTwo from "../images/Stylish-Small-Office.jpg";
import CardImageThree from "../images/126569-artwork-minimalism-digital_art.jpg";
import { Link } from "react-router-dom";
// import { useState } from 'react'

export default function Card() {
  // const [showProducts, setShowProducts] = useState(false);
  const DivCards = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-between;
    align-items: center;
  `;
  const CardsDiv = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;

    @media (max-width: 1024px) {
      display: flex;
      width: 100%;
      height: auto;
      flex-direction: column;
    }
  `;

  const CardLink = styled(Link)`
    width: 32%;
    height: 25vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    border-radius: 8px;
    border-radius: 5px;
    background: url(${CardImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    text-decoration: none;

    @media (max-width: 1024px) {
      width: 90%;
      height: auto;
      margin-top: 20px;
    }

    h2 {
      margin-top: 150px;
      margin-left: 25px;
      background: none;
      color: white;
      font-size: 22px;
      text-decoration: none;
    }
  `;

  const CardOne = styled(CardLink)``;

  const CardTwo = styled(CardLink)``;

  const CardThree = styled(CardLink)``;

  // const handleProductsClick = () => {
  //   setShowProducts(true);
  // }

  return (
    <DivCards>
      <CardsDiv>
        <CardLink
          to="/"
          style={{
            background: `url(${CardImageTwo})`,
            backgroundSize: "cover",
            
          }}
          className="Second"
        >
          <h2>Home & Living</h2>
        </CardLink>

        <CardLink to="/products" className="First">
          {/* {!showProducts && ( 
          <div onClick={handleProductsClick}>
            
          </div>
        )} */}
          <h2>Clothing & Shoes</h2>
        </CardLink>

        <CardLink
          className="Three"
          style={{
            background: `url(${CardImageThree})`,
            backgroundSize: "cover",
          }}
        >
          <h2>Art & Collectibles</h2>
        </CardLink>
      </CardsDiv>
    </DivCards>
  );
}
