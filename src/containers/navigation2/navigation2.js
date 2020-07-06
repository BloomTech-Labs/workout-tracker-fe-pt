import React from "react";
import { Logo, LogoText, NavSection, SignIn } from "../landingnav/style";
import { Link } from "react-router-dom";

const LandingNav = () => {
  const logout = (props) => {
    localStorage.clear();
    props.history.push("/");
  };

  return (
    <>
      <NavSection>
        <Logo>
          Fit<LogoText>Tracker</LogoText>
        </Logo>
        <Link to="/login">
          <SignIn onClick={logout}>Sign Out</SignIn>
        </Link>
      </NavSection>
    </>
  );
};

export default LandingNav;
