import React from "react";
import NavigationBar from "../navigationbar/navigationbar";
import ProfileNav from "./profilenav/ProfileNav";
import ProfileSidebar from "./profilesidebar/ProfileSidebar";

const Profile = () => {
  return (
      <>
      <NavigationBar />
      <ProfileNav />
      <ProfileSidebar />
      </>
  );
};

export default Profile;
