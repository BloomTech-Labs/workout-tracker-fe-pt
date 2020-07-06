import React, { useContext } from "react";
import ProfileContext from "../../../contexts/ProfileContext";
import {
  MainContainer,
  HeaderSection,
  AvatarContainer,
  AvatarImage,
  Name,
  Verify,
  MainInfo,
  SubInfo,
  Bio,
  EditButton,
  ButtonContainer,
} from "./style";
import VerifyBadge from "../../../assets/profile/verify.svg";

const Header = () => {
  const { userInfo } = useContext(ProfileContext);
  return (
    <>
      <HeaderSection>
        <ButtonContainer>
          <EditButton> Settings</EditButton>
        </ButtonContainer>
      </HeaderSection>
      <MainContainer>
        <AvatarContainer>
          <AvatarImage src="https://images.pexels.com/photos/3927387/pexels-photo-3927387.jpeg?cs=srgb&dl=concept-of-sports-training-3927387.jpg&fm=jpg" />
          <MainInfo>
            <Name>{userInfo.username}</Name>
            <Verify src={VerifyBadge} />
          </MainInfo>
        </AvatarContainer>
        <SubInfo>
          <Bio> {userInfo.bio}</Bio>
        </SubInfo>
      </MainContainer>
    </>
  );
};

export default Header;
