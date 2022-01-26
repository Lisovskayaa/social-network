import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'

let green = '#146356';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0; 
   box-sizing: border-box;
   font-family: 'Arial';
    }
  body {
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
      transition: all 0.50s linear;

}

`

export const AppWrapper = styled.div`
 min-heigth: 100vh; 
 width: 100%; 
 padding: 0; 
 backround-colot: '#F3C892'
  
 `

export const Button = styled.button`
padding: 5px 10px;
height: 50px;
width: auto;
margin: 10px;

border-radius: 5px;
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;

background-color: ${green};
border: 1px solid #0a2924;
color:  #FFF1BD;

&:hover {
    background-color:  #FFF1BD;
    border: 1px solid #0a2924;
    color: #146356;
`



export const ButtonMinor = styled.button`
padding: 2px;
height: 20px;
width: auto;
max-width: 300px;
margin: 10px 0;
text-decoration: none;


border-radius: 5px;
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;

background-color: burlywood;
border: 1px solid #0a2924;
color:  #32302c;

font-size: 10px;


&:hover {
    background-color:  #146356;
    border: 1px solid #0a2924;
    color:  #FFF1BD;

`


export const Input = styled.input`
  width: 500px;
  height: 50px;
  
  border-radius: 5px;
  margin: 0 10px;
  outline: none;
  padding: 10px;

  background-color: #f7eece;
  border: 1px #146356 solid;
  font-style:normal;
  margin: 10px;

  &:hover{
    border-color: #393b3d;
    border: 1px  solid #146356;
    box-shadow: 0 0 10px #146356;
    outline: none;
  }
`

export const SpanErrors = styled.span`
  width: auto; 
  padding: 5px 10px;
  margin: 10px; 
  border: 1px red solid; 
  color: gray; 
  background-color: inherit;
  
  heigth: 60px;
  font-size: 15px;
  

`


export const FormStyled = styled.form`
display: flex;`


export const Wrapper = styled.div`
    margin: 0 auto;
    background-color: inherit;
    color: inherit;
    padding: 5px 100px;
    display: flex;
    width: 100%;
    max-width: 1000px;
    justify-content: center;
    heigth: auto;
    

    flex-wrap: wrap;
`

export const HeaderStyled = styled.div`
  width: auto;
  
  background-color: #146356;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 25px;
  
  display: flex;
  justify-content: space-between;
  padding: 20px 100px;


  a {
    text-decoration: none;
    color: #FFF1BD;
    
}
 a:hover {
   color:#F3C892;
}



img {
  width: 30px;
  height: 30px;
}


}  `


