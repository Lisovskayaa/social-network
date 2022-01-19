import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'



const ButtonS = styled.button`
background-color: #146356 ;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 20px;
  cursor: pointer;
  font-size:0.8rem;
   padding: 0.6rem;

`


const Toggle = ({theme, toggleTheme }) => {

    return (
    
    <ButtonS onClick={toggleTheme} >
    Switch Theme
    </ButtonS>
    
    );
    
    };
    
    Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
    
    }
    
    export default Toggle;
