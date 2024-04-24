/* eslint-disable no-unused-vars */
// LoadingCircle.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';


const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingCircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; 
`;

const LoadingCircleSpinner = styled.div`
  border: 8px solid #f3f3f3; 
  border-top: 8px solid #3498db; 
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spinAnimation} 1s linear infinite; `
;

const LoadingCircle = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
   
    const loadingTimeout = setTimeout(() => {
      
      setIsLoading(false);
    
      setShowContent(true);
    }, 4000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []);

  return isLoading ? (
    <LoadingCircleContainer>
      <LoadingCircleSpinner />
    </LoadingCircleContainer>
  ) : (
    showContent && (
      
      <div>

      </div>
    )
  );
};

export default LoadingCircle;   