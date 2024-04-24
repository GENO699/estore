/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

function RegistrationButton() {

  const Button = styled.button`
  width: 200px;
  height: 40px;
  font-size: 22px;
  border: none;
  margin-top: 20px;
  background-color: orange;
  cursor: pointer;
  transition: 0.4s;
  font-weight: 600;

  &:hover{
    background-color: black;
    color: white;

  }
  `;


  return (
    <div>
      <Button>Sign Up</Button>

    </div>
  )
}

export default RegistrationButton;