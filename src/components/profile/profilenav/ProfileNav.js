import React, { useContext } from "react";
import {
    AsideTitle, Bio,
    ChangePhotoButton,
    Links,
    Logo,
    LogoText,
    Navigation,
    ProfileAside,
    RightSide,
    SubNav, UserName
} from "./style";
import ProfileContext from "../../../contexts/ProfileContext";
import DefaultAvatar from "../../../assets/profilepage/defaultavatar.svg"
import ProfilePic from "../../../assets/profilepage/profilepic.svg";
const ProfileNav = () => {
  const { userInfo } = useContext(ProfileContext);

  return (
      <>
    <Navigation>
        <Logo>Welcome! <LogoText>{userInfo.username}</LogoText></Logo>
        <RightSide>
            <input type="text" placeholder="Type something..."></input>
            <img src={DefaultAvatar}/>
        </RightSide>
    </Navigation>
      <SubNav>
          <Links> Edit Profile </Links>
          <Links> Account Information </Links>
          <Links> Security </Links>
          <Links> Payment Information </Links>
      </SubNav>
          <ProfileAside>
              <AsideTitle> Profile </AsideTitle>
              <img src={ProfilePic}/>
              <UserName>{userInfo.username}</UserName>
              <Bio>{userInfo.bio}</Bio>
              <ChangePhotoButton> Change Photo </ChangePhotoButton>
          </ProfileAside>
          </>
  );
};

export default ProfileNav;
