import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation= keyframes`
  0% { margin-bottom: 0 }
  50% { margin-bottom: 10px }
  100% { margin-bottom: 0 }
`;

const SDot = styled.div`
  background-color: #236f82;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;

  animation: ${animation} 0.6s ease-in infinite;
  animation-delay: ${props => props.delay};
`;

const SLoader= styled.div`
  display: flex;
  align-items: flex-end;
`;


const Loader= props => {
    return (
        <SLoader>
            <SDot delay= "0s" />
            <SDot delay= "0.2s" />
            <SDot delay= "0.4s" />
        </SLoader>
    );
}

export default Loader;