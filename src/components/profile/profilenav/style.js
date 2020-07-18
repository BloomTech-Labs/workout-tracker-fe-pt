import styled from "styled-components";

// Upper Navigation

export const Navigation = styled.nav`
  display: none;
  @media (min-width: 768px) {
    background: #277fe5;
    display: flex;
    padding: 2rem;
    justify-content: space-between;
  }
`;

export const Logo = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #1d2026;
`;

export const LogoText = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #f6f6f6;
  margin-left: 0.5rem;
`;

export const RightSide = styled.div`
  display: flex;
`;

// Sub Navigation

export const SubNav = styled.nav`
  border-bottom: 2px solid #dddddd;
  margin-top: 8rem;
`;

export const Links = styled.a`
  margin-left: 3rem;
  line-height: 50px;
  font-size: 18px;
  font-weight: 500;
`;

// Profile Info Section

export const ProfileAside = styled.aside`
  border-right: 2px solid #dddddd;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const AsideTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-top: 3.5rem;
  margin-bottom: 2.5rem;
`;

export const ChangePhotoButton = styled.button`
  width: 316px;
  height: 56px;
  left: 49px;
  top: 668px;
  background: #277fe5;
  border-radius: 15px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: white;
  font-family: Montserrat;
  margin-top: 10rem;
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 1rem;
`;

export const Bio = styled.p`
  font-size: 14px;
`;

