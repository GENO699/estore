/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styled from 'styled-components'

function Footer() {

  const FooterMain = styled.div`
  width: 100%;
  height: 35vh;
  background-color: #2450f1;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  `;

  const FooterInner = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input{
    width: 39%;
    height: 55px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border: none;
    padding-left: 10px;
  }

  h3{
    color: white;
    font-size: 20px;
    
  }

  `;

  const Button = styled.div`
  width: 140px;
  height: 55px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  cursor: pointer;
  color: white;
  font-size: 19px;
  display: flex;
  background-color: orange;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: 1s;

  &:hover{
    margin-left: 22px;
    width: 11%;
    height: 57px;
    border-radius: 50px;
    transform: rotate(360deg);
    transform-style:  360deg
    
  }

 
  `;

// const [userInput, setUserInput] = useState('');
const [showThankYou, setShowThankYou] = useState(false);

// const handleInputChange = (event) => {
//   setUserInput(event.target.value);
// };

const handleSendClick = () => {

  setShowThankYou(true);
};


  return (
    <FooterMain>
      <FooterInner>

        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque distinctio  quam atque voluptate.</h3>
        <div style={{
          width: "100%",
          display: "flex",
          justifyContent: " center",
          alignItems: "center"
        }}>
        <input type='text'  placeholder='Enter Your Opinion About This Site :)' /> <Button onClick={handleSendClick}>Send</Button>
        </div>

        <div >

        {showThankYou && <p style={{color: "green"}}>Thank you for your feedback :)</p>}


        </div>
        


      </FooterInner>

    </FooterMain>
   
  )
}

export default Footer