/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import axios from "axios";

const StyledLoginButton = styled.button`
  width: 50%;
  height: 40px;
  margin-top: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LoginButton = ({ onClick }) => {
  // const handleLogin = async () => {
  //   // Your login logic here
  //   // For example, replace the following with your actual login API call
  //   try {
  //     const response = await axios.post("https://fakestoreapi.com/auth/login", {
  //       username: "yourUsername",
  //       password: "yourPassword",
  //     });

  //     const token = response.data.token;
      
  //     if (token) {
  //       localStorage.setItem("token", token);
  //       console.log("Login Successful:", response.data);
  //     } else {
  //       console.error("Token not found in server response:", response.data);
  //     }
  //   } catch (error) {
  //     console.error("Login Failed:", error.message);
  //   }
  // };

  return (
    <StyledLoginButton onClick={onClick}>
      Log In
    </StyledLoginButton>
  );
};

export default LoginButton;
