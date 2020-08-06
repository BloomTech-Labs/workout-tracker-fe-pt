import React from "react";
import ProfileNav from "../profile/profilenav/ProfileNav";
import {ButtonSection, InfoButtons} from "./style";
import RightArrow from "../../assets/profilepage/rightarrow.svg"

const AccountInformation = () => {
  return (
    <>
        <ProfileNav/>
      <ButtonSection>
          <InfoButtons> Personal Information <img src={RightArrow} alt="Right Arrow"/></InfoButtons>
          <InfoButtons> Workouts You've Liked <img src={RightArrow} alt="Right Arrow"/> </InfoButtons>
          <InfoButtons> Language <img src={RightArrow} alt="Right Arrow"/> </InfoButtons>
      </ButtonSection>
    </>
  );
};

export default AccountInformation;
