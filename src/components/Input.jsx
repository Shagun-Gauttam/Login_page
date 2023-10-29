import styled from "styled-components"

function Input({type,placeholder}){
    
   const StyledInput = styled.input`
    background: rgba(255,255,255,0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius:2rem;
    width: 70%;
    height: 2rem;
    padding: 1rem;
    margin: 5px 1px 1px 50px;
    border: none;
    outline: none;
    color: #3c354e;
    font-size: 1rem;
    font-weight: bold;

    &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.1rem white;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: white;
    font-weight: 100;
    font-size: 1rem;
  }
    `;

    return (
        <StyledInput type= {type} placeholder= {placeholder} />
    );
}

export default Input;