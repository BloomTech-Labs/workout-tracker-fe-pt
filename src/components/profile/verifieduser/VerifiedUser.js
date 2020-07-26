import React, { useContext } from "react";
import ProfileContext from "../../../contexts/ProfileContext";
import Verified from "../../../assets/profilepage/checkmark.svg";
import { VerifiedBadge } from "./style";

const VerifiedUser = () => {
  const { userInfo } = useContext(ProfileContext);

  const CheckVerification = () => {
    if (userInfo.verified === true) {
      return <VerifiedBadge src={Verified} alt="Verified Badge Enabled" />;
    } else {
      return <VerifiedBadge src={Verified} alt="Verified Badge Disabled" />;
    }
  };
  return (
    <>
      <p> {CheckVerification()}</p>
    </>
  );
};

export default VerifiedUser;
