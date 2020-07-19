import React, { useContext } from "react";
import { Links, Logo, LogoText, Navigation, RightSide, SubNav } from "./style";
import ProfileContext from "../../../contexts/ProfileContext";
import DefaultAvatar from "../../../assets/profilepage/defaultavatar.svg";
const ProfileNav = () => {
  const { userInfo } = useContext(ProfileContext);

  return (
    <>
      <Navigation>
        <Logo>
          Welcome! <LogoText>{userInfo.username}</LogoText>
        </Logo>
        <RightSide>
          <input type="text" placeholder="Type something..."></input>
          <img src={DefaultAvatar} />
        </RightSide>
      </Navigation>
      <SubNav>
        <Links> Edit Profile </Links>
        <Links> Account Information </Links>
        <Links> Security </Links>
        <Links> Payment Information </Links>
      </SubNav>
    </>
  );
};

export default ProfileNav;
