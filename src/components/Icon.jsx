import styled from "styled-components";

function Icon({color,children}){

    const StyledIcon = styled.div`
    height: 2.5rem;
    width: 2.5rem;
    background: ${(props) => props.background};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    color: white;
    cursor: pointer;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  `;
    return(
        <StyledIcon background={color}>{children}</StyledIcon>
    )
}

export default Icon ;