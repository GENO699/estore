/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import CardImage from "../images/Rectangle 19.svg";
import CardImageTwo from "../images/Rectangle 19 (1).svg";
import CardImageThree from "../images/Rectangle 19 (2).svg";
import CardImageFour from "../images/Rectangle 19 (3).svg";

const cards = [
  {
    image: CardImage,
    background: "#d3fbd9",
    title: "Vonna Neva Walnut Sandalye Chair",
    price: "195,13$",
    colors: [
      "#0dd30d",
      "skyblue",
      "#046404",
      "#0d14d3",
      "#d30d0d",
      "#ab0dd3",
      "#d3a10d",
    ],
  },
  {
    image: CardImageTwo,
    background: "#ffe4bd",
    title: "Wood lamp, Floor Lamp, Lambader, Decorative",
    price: "458,43$",
    colors: ["#0dd30d", "skyblue", "#046404", "#0d14d3", "#d30d0d"],
  },
  {
    image: CardImageThree,
    background: "#d9abfd",
    title: "NOCKEBY 3-Seat Sofa Cover Slipcover Hand Made With Multiple",
    price: "789,67$",
    colors: ["#0dd30d", "skyblue", "#046404"],
  },
  {
    image: CardImageFour,
    background: "#fdf0ab",
    title:
      "Lace Punch Needle Pillow Covers with invisible zipper, 16*16 inches",
    price: "43,23$",
    colors: ["#0dd30d", "skyblue", "#046404", "#ab0dd3", "#d3a10d"],
  },
];

const Div = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
  



  @media (max-width: 1250px) {
    width: 100%;
    height: auto;
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
`;

const HeartDivMain = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ background }) => background};
  margin-top: 20px;

  /* @media (max-width: 1250px) (
    width: 100%;
    height: auto;
    display: flex;
    position: absolute;
  ) */
`;

const HeartDiv = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: #fff;

  @media (max-width: 1250px) {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    

  }
`;

const Card = styled.div`
  width: 23%;
  height: 53vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 30px;
  border-radius: 8px;
  background-color: ${({ background }) => background};
  cursor: pointer;
  padding: 10px;
  margin-left: 20px;

  @media (max-width: 1250px) {
    width: 22%;
    height: auto;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    margin-top: 10px;

  }

  @media (max-width: 1024px) {
    height: 72vh;
    width: 30%;
  }

  @media (max-width: 768px) {
    width: 38%;
    height: auto;
  }

  img {
    margin: 0 auto;
    background-color: ${({ background }) => background};
    
    @media (max-width: 1024px) {
      width: 100px;
      height: auto;

    }
  }

  p {
    background: none;
    width: 100%;
    font-size: 17px;
  }

  .card-description {
    margin-top: 20px;
  }

  .price {
    font-size: 18px;
    margin-top: 20px;
  }
`;

const ColorsDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  margin-top: 12px;

  div {
    width: 20px;
    height: 20px;
    border-radius: 50px;
  }
`;

export default function SecondCards() {
  return (
    <Div>
      {cards.map((card, index) => (
        <Card key={index} background={card.background}>
          <HeartDivMain background={card.background}>
            <HeartDiv>
              <FontAwesomeIcon icon={faHeart} />
            </HeartDiv>
          </HeartDivMain>
          <img src={card.image} alt="picture" />
          <p>Colors</p>
          <ColorsDiv>
            {card.colors.map((color, i) => (
              <div key={i} style={{ backgroundColor: color }}></div>
            ))}
          </ColorsDiv>
          <p className="card-description">{card.title}</p>
          <p className="price">{card.price}</p>
        </Card>
      ))}
    </Div>
  );
}
