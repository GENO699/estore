/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import LoginButton from "../components/LoginButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      console.log("Attempting login...");
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: email,
        password: password,
      });
  
      console.log("Server Response:", response.data);
  
      const token = response.data.token;
  
      if (token) {
        console.log("Received Token:", token);
  
        // Save the token to local storage
        localStorage.setItem("token", token);
  
        console.log("Login Successful:", response.data);
      } else {
        console.error("Token not found in server response:", response.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Authentication Failed: Invalid credentials");
        // Provide feedback to the user about invalid credentials
      } else {
        console.error("Login Failed:", error.message);
      }
    }
  };
  
  

  return (
    <div className="w-[100%] pb-0.5 h-[100vh] flex flex-col justify-center items-center">
      {/* <LoadingCircle/> */}
      <div className="w-[50%] h-[60vh] rounded-xl shadow-xl  flex justify-center flex-col text-center ">
        <div className=" w-[100%] flex justify-center items-center flex-col">
          <h1 className="text-3xl mb-5">Log In</h1>
          <label className="text-left w-[60%] mt-5" for="name">Name:</label>{" "}
          <input
            className="w-[60%] h-[45px]  outline-offset-0 border-b-4 border-sky-500"
            id="name"
            type="text"
            placeholder="Enter Name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-left w-[60%] mt-5 mb-0" for="password">Password</label>{" "}
          <input
            className="w-[60%] h-[45px] border-b-4 border-sky-500"
            id="password"
            type="password"
            placeholder="Enter Last Name"
            value={password}
            onChange={(e) => setPassword(e.target.valus)}
          />
          <div
            style={{
              width: "100%",
              height: " auto",
              display: "flex",
              justifyContent: " center ",
              alignItems: "center",
              marginTop: "10px",
              padding: "10px",
            }}
          >
            <input className="checkbox" type="checkbox" />{" "}
          
            <span>Remember My Information</span>
          </div>
          <Link to={"/registration"}>
            <p
              style={{
                padding: "10px",
                marginRight: "10px",
              }}
            >
              If you have not got an account

              <span className="text-orange-400"> Registration</span>
            </p>
          </Link>
          <LoginButton onClick={handleLogin}/>

        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
