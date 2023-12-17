/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../images/Logo.svg";
import Shopping from "../pages/Shopping";
// import CategoriesFilter from "../pages/Categories";
import RegistrationForm from "../pages/RegistrationForm";

export default function Header() {
  const Div = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  `;

  const AboveHeader = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    img {
      cursor: pointer;


      @media (max-width: 1200px) {
        width: 100%;
        margin-left: 45px;
      }
    }

    div {
      position: relative;
      width: auto;
      height: auto;
    }

    input {
      width: 530px;
      height: 50px;
      border-radius: 30px;
      border: 1px solid lightgray;
      font-size: 19px;
      padding-left: 10px;
      position: relative;

      @media (max-width: 550px) {
        width: 380px;

      }
    }

    .search-icon {
      position: absolute;
      right: 10px;
      top: 14px;
      left: 93%;
      font-size: 18px;
      cursor: pointer;
    }
  `;

  const UnderHeader = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const UnderHeaderInner = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    a {
      text-decoration: none;
      color: black;
      font-size: 18px;
    }
  `;

  const Ul = styled.ul`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      list-style: none;
      font-size: 17px;
    }

    .links {
      text-decoration: none;
      color: black;
    }
  `;

  const Button = styled.button`
    width: 90px;
    height: 45px;
    border-radius: 50px;
    background: #f87421;
    border: none;
    cursor: pointer;
    color: #fff;
  `;

  const ButtonAccount = styled.button`
    width: 120px;
    height: 40px;
    border: none;
    cursor: pointer;
    font-size: 17px;
    background: none;
    .User-icon {
      margin-right: 9px;
      font-size: 20px;
      
      
    }

    
  `;

  const ButtonShoppingCart = styled.button`
    width: 130px;
    height: 40px;
    border: none;
    cursor: pointer;
    font-size: 17px;
    background: none;

    .Shopping-icon {
      margin-right: 8px;
      font-size: 20px;
    }
  `;

  // Move ApiCategory inside the Header component

  return (
    <Div>
      <AboveHeader>
        <Link to={"/"}>
          <img src={logo} alt="logo" width={300} />
        </Link>
        <div>
          <input type="text" placeholder="Search anything" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>
        <Button>Help</Button>
        <Link to={"/registration"}>
          <ButtonAccount>
            <FontAwesomeIcon icon={faUser} className="User-icon" />
            Account
          </ButtonAccount>
        </Link>

        <Link to={"/shopping"}>
          <ButtonShoppingCart>
            <FontAwesomeIcon icon={faBagShopping} className="Shopping-icon" />
            Shopping
          </ButtonShoppingCart>
        </Link>
      </AboveHeader>
      <UnderHeader>
        <UnderHeaderInner>{/* <CategoriesFilter /> */}</UnderHeaderInner>
      </UnderHeader>
    </Div>
  );
}
