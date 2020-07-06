import styled from "styled-components";

export const MainContainer = styled.div`
  width: 92%;
  margin: 0 auto;
`;

export const HeaderSection = styled.section`
  height: 100px;
  background: #3871d1;
`;

export const AvatarContainer = styled.div`
  display: flex;
`;

export const AvatarImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid white;
  position: relative;
  bottom: 10px;
  left: 10px;
  margin-right: 2rem;
`;

export const Name = styled.p`
  margin-top: 1.5rem;
  font-size: 20px;
  font-weight: 600;
`;

export const Verify = styled.img`
  width: 13px;
  height: 13px;
  margin-left: 5px;
  filter: grayscale(100%);
`;

export const MainInfo = styled.div`
  display: flex;
  align-items: baseline;
`;

export const SubInfo = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Bio = styled.p``;

export const EditButton = styled.button`
  background: #00000057;
  border: none;
  color: white;
  padding: 5px;
  border-radius: 2px;
`;

export const ButtonContainer = styled.div``;
