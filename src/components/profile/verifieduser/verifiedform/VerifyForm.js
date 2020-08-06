import React from "react";
import ProfileNav from "../../profilenav/ProfileNav";
import NavigationBar from "../../../navigationbar/navigationbar";
import {FormSection, IntroSection} from "./style";
import LeftArrow from "../../../../assets/profilepage/leftarrow.svg";
import CheckMark from "../../../../assets/profilepage/checkmark.svg";
import WorkoutTrainer from "../../../../assets/profilepage/workouttrainer.svg";

const VerifyForm = () => {
  return (
    <>
      <NavigationBar />
      <ProfileNav />
        <img src={LeftArrow} alt="Left Arrow" />
      <IntroSection>

        <div>
          <h2>
            Apply to become Verified <img src={CheckMark} />
          </h2>
          <p>
            When you become verified a blue checkmark will appear next to the
            profile picture. This indicates that the account is owned by a
            Reputable source in the fitness community. We will also verify the
            number of followers, likes and profile rating the account has to
            confirm that the account has an authentic social media presence.
          </p>
          <p>
            Submitting a request for verification does not guarantee that the
            account will be verified.
          </p>
        </div>
        <div>
          <img src={WorkoutTrainer} />
        </div>
      </IntroSection>
      <FormSection>
        <form>
        </form>
      </FormSection>
    </>
  );
};

export default VerifyForm;
