/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import ScrollPicture from "../images/Rectangle 25.svg";
import ScrollPictureTwo from "../images/Rectangle 27.svg";
import ScrollPictureThree from "../images/Rectangle 29.svg";
import ScrollPictureFour from "../images/Rectangle 31.svg";
import ScrollPictureFive from "../images/Rectangle 33.svg";
import ScrollPictureSix from "../images/Rectangle 35.svg";
import ScrollPictureSeven from "../images/Rectangle 37.svg";
import ScrollPictureEight from "../images/Rectangle 39.svg";

export default function ScrollCards() {
  const HeaderDiv = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 40px;

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 18px;
      color: #bab5b5;
      margin-top: 10px;
    }

    .ScrollText {
      color: black;
    }
  `;

  const ScrollDivsContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1100px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      /* flex-direction: column; */
    }
  `;

  const TextDiv = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const ScrollCard = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 10px;
    background-color: #ffffff;
    margin-top: 10px;
    cursor: pointer;

    @media (max-width: 1100px) {
      width: 180px;
    }
    

    img {
      width: 100%;
      height: auto;
    }
  `;

  return (
    <HeaderDiv>
      <h1>Find things you will love, Support independent sellers</h1>
      <p>Only on polka</p>

      <ScrollDivsContainer>
        <ScrollCard>
          <img src={ScrollPicture} alt="photo" />
          <TextDiv>
            <p className="ScrollText">Craft Kits</p>
          </TextDiv>
        </ScrollCard>

        <ScrollCard>
          <img src={ScrollPictureTwo} alt="photo" />
          <TextDiv>
            <p className="ScrollText">Throw Pillows</p>
          </TextDiv>
        </ScrollCard>

        <ScrollCard>
          <img src={ScrollPictureThree} alt="photo" />
          <TextDiv>
            <p className="ScrollText">Natural Glass</p>
          </TextDiv>
        </ScrollCard>

        <ScrollCard>
          <img src={ScrollPictureFour} alt="photo" />
          <TextDiv>
            <p className="ScrollText">Self-care</p>
          </TextDiv>
        </ScrollCard>

        <ScrollCard>
          <img src={ScrollPictureFive} alt="photo" />
          <TextDiv>
            <p className="ScrollText">Gift Ideas</p>
          </TextDiv>
        </ScrollCard>

        <ScrollCard>
          <img src={ScrollPictureSix} alt="photo" />
          <TextDiv>
            <p className="ScrollText">Wall Decor</p>
          </TextDiv>
        </ScrollCard>

        <ScrollCard>
          <img src={ScrollPictureSeven} alt="photo" />
          <TextDiv>
            <p className="ScrollText">Wedding</p>
          </TextDiv>
        </ScrollCard>

        <ScrollCard>
          <img src={ScrollPictureEight} alt="photo" />
          <TextDiv>
            <p className="ScrollText">Life Style</p>
          </TextDiv>
        </ScrollCard>
      </ScrollDivsContainer>
    </HeaderDiv>
  );
}
