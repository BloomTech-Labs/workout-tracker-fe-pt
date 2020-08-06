import React from "react";
import ProfileNav from "../profile/profilenav/ProfileNav";
import {ButtonSection, InfoButtons} from "./style";
import RightArrow from "../../assets/profilepage/rightarrow.svg"
import NavigationBar from "../navigationbar/navigationbar";

const AccountInformation = () => {
  return (
    <>
        <NavigationBar/>
        <ProfileNav/>
      <ButtonSection>
          <InfoButtons> Personal Information <a href="/verify"><img src={RightArrow} alt="Right Arrow"/></a></InfoButtons>
          <InfoButtons> Workouts You've Liked <a href="/verify"><img src={RightArrow} alt="Right Arrow"/></a></InfoButtons>
          <InfoButtons> Language <a href="/verify"><img src={RightArrow} alt="Right Arrow"/></a></InfoButtons>
      </ButtonSection>
    </>
  );
};

export default AccountInformation;
