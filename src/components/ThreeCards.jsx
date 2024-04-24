/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import CardImage from "../images/unsplash_bU8TeXhsPcY.svg";
import CardImageTwo from "../images/unsplash_esRJtEsvJhU.svg";
import CardImageThree from "../images/unsplash_m_7p45jfXQo.svg";

export default function ThreeCards() {
  const Div = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
    }
  `;

  const Card = styled.div`
    width: 32%;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    border-radius: 8px;
    background: #e4e6e8;
    cursor: pointer;

    @media (max-width: 1000px) {
      display: flex;
      width: 100%;
      height: auto;
      padding: 5px;
    }
  `;

  const TextDiv = styled.div`
    width: 45%;
    height: auto;
    background: none;

    h1 {
      font-size: 28px;
      background: none;
    }

    p {
      background: none;
      font-size: 15px;
      margin-top: 20px;
    }
  `;

  const PictureDiv = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    background: none;
  `;

  const PictureDivInner = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    border: 1px solid;
    background-image: url(${CardImage});
    background-repeat: no-repeat;
    background-size: cover;
  `;
  return (
    <Div>
      <Card>
        <TextDiv>
          <h1>A community doing good</h1>
          <p>Commerce is a global online marketplace, where people.</p>
        </TextDiv>
        <PictureDiv>
          <PictureDivInner></PictureDivInner>
        </PictureDiv>
      </Card>

      <Card>
        <TextDiv>
          <h1>Support independent creators</h1>
          <p>Just millions of people selling the things they love.</p>
        </TextDiv>
        <PictureDiv>
          <PictureDivInner
            style={{ backgroundImage: `url(${CardImageTwo})` }}
          ></PictureDivInner>
        </PictureDiv>
      </Card>

      <Card>
        <TextDiv>
          <h1>Peace of mind</h1>
          <p>Privacy is the highest priority of our dedicated team.</p>
        </TextDiv>
        <PictureDiv>
          <PictureDivInner
            style={{ backgroundImage: `url(${CardImageThree})` }}
          ></PictureDivInner>
        </PictureDiv>
      </Card>
    </Div>
  );
}
