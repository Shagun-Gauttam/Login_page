import styled from "styled-components";

function Button({content}){
    const StyledButton = styled.button`
    background: linear-gradient(to right, blue 0%, #03217b 79%);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: 50%;
    height: 2rem;
    border: none;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
    ${'' /* margin:0px 10px 0px 0px; */}

  `;

    return(
     <StyledButton>{content}</StyledButton>
    );
}

export default Button;