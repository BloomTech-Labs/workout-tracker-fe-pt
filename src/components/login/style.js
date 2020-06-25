import styled from "styled-components";
import { Link } from "react-router-dom";

//Logo

export const LogoContainer = styled.section`
  text-align: center;
  margin: 2rem 0 7.5rem 0;
`;
export const Logo = styled.h2`
  font-size: 48px;
  font-weight: 800;
  @media (min-width: 768px) {
    font-weight: 800;
    font-size: 48px;
  }
`;

export const LogoText = styled.span`
  color: #277fe5;
`;

// Form

export const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin: 15rem 0 2rem 0;
`;

export const FormContainer = styled.section`
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;

export const Input = styled.input`
  margin-bottom: 3rem;
  border: 0;
  width: 100%;
  padding: 0.3rem;
  border-bottom: 1px solid black;
  background: none;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #8b8b8b;
`;

//Background

export const Circles = styled.img`
  position: absolute;
  left: -21px;
  top: -39px;
`;

export const Circles2 = styled.img`
  position: absolute;
  top: -1px;
  right: 0px;
`;

export const SignInButton = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;
export const SignInButtonText = styled.button`
  border: none;
  background: #277fe5;
  color: white;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: bold;
  border-radius: 100px;
  width: 307px;
  height: 63px;
`;

export const ErrorMessages = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const RegisterText = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: 1rem;
`;

export const Span = styled.span`
  color: #277fe5;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 0.2rem;
`;
