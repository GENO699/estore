/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import RegistrationButton from "../components/Registration";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingCircle from "../components/Circlewaiting";

function RegistrationForm() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        setIsLoading(false); 
      } catch (error) {
        
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const MainDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
   

    @media (max-width: 1000px) {
      width: 100%;
      height: 100vh;
    }
  `;

  const RegistrationFormDiv = styled.div`
    width: 45%;
    height: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 20px;
    border-radius: 20px;

    @media ( max-width: 1000px) {
      width: 80%;
      height: auto;
      display: flex;
      flex-direction: column;
    
     
      
    }
  `;

  const InputDiv = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: left;

    .checkbox {
      width: 20px;
      height: 20px;
    }

    input {
      width: 340px;
      height: 40px;
      margin-top: 5px;
      padding-left: 10px;
      outline: 0;
  border-width: 0 0 2px;
  border-color: black
    }

    .h1 {
      font-size: 45px;
      color: orange;
    }

    span {
      color: orange;
      margin-left: 10px;
    }

    /* span{
    align-items: center;
    text-align: center;
  
  } */

    a {
      color: black;
    }

    label {
      width: 60%;
      margin-top: 20px;
      color: orange;
      font-weight: 600;

      @media (max-width: 500px) {
        width: 95%;
      }
    }
  `;
  return (
    <MainDiv>
      {isLoading ? (
        <LoadingCircle />
      ) : ( 
      <RegistrationFormDiv>
        <InputDiv>
          <h1 className="h1">Registration</h1>
          <label for="name">Name:</label>{" "}
          <input id="name" type="text" placeholder="Enter Name" />
          <label for="lastName">Last Name:</label>{" "}
          <input id="lastName" type="text" placeholder="Enter Last Name" />
          <label for="email">Email:</label>{" "}
          <input id="email" type="text" placeholder="Enter Email" />
          <label for="name">Full Name:</label>{" "}
          <input id="name" type="text" placeholder="Enter Full Name" />
          <label for="password">Password:</label>{" "}
          <input
            id="password"
            type="password"
            placeholder="Enter New Paswword"
          />
          <div
            style={{
              width: "100%",
              height: " auto",
              display: "flex",
              justifyContent: " center ",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <input className="checkbox" type="checkbox" />{" "}
            <span>Remember My Information</span>
          </div>
          <Link to={"/login"}>
            <p>
              If you have an account
              <span>Log in</span>
            </p>
          </Link>
          <RegistrationButton />
        </InputDiv>
      </RegistrationFormDiv>
      )}
    </MainDiv>
  );
}

export default RegistrationForm;
