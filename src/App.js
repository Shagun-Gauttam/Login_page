import styled from "styled-components"
import {FaFacebook,FaInstagram,FaTwitter} from "react-icons/fa"
import Input from "./components/Input";
import Button from "./components/Button";
import Icon from "./components/Icon";

function App() {

  const FacebookBackground =
  "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
const InstagramBackground =
  "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
const TwitterBackground =
  "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

  const Maincontainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction:column;
  height: 80vh;
  width: 30vw; 
  background: rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
 backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.4rem;

  @media only screen and (max-width: 500px) {
    width: 80vw;
    height: 70vh;
    hr {
      margin-bottom: 0.2rem;
    }
    h6 {
      font-size: small;
    }
    
  }

  @media only screen and (min-width: 500px) {
    width: 80vw;
    height: 70vh;
    
  }
  @media only screen and (min-width: 800px) {
    width: 30vw;
    height: 80vh;
    
  }

  `;



  const Text = styled.h3`
  margin: 3rem 0 2rem 0;
  `;
   
  const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-item: center;
  height: 20%;
  width: 100%
  `;

const ButtonContainer = styled.div`
margin: 1rem 0 2rem 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center;

`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.2rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0 2rem 0;
  width: 60%;
`;

const ForgotPassword = styled.h6`
  cursor: pointer;
`;

  return (
    <Maincontainer>
      <Text>Welcome</Text>
      <InputContainer>
        <Input type = 'text' placeholder= "Email" />
        <Input type = "password" placeholder= "Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Sign Up" />
      </ButtonContainer>
      <LoginWith>OR LOGIN WITH</LoginWith>
      <HorizontalRule />
      <IconsContainer>
      <Icon color={FacebookBackground}>
          <FaFacebook />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
      </IconsContainer>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </Maincontainer>
    
  );

 
}

export default App;
