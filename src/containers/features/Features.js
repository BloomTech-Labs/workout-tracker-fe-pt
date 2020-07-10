import React from "react";
import { Link } from "react-router-dom";
import {
  ImageContainer,
  ImageContainer2,
  FeatureTextContainer,
  MainImage,
  SubText,
  ExitText,
  TextDesktop,
  TextSubDesktop,
  ButtonMobileContainer,
  ButtonMobileIntro,
  ButtonDesktopContainer,
  ButtonDesktopIntro,
  CtaSection,
} from "./style";

import AOS from "aos";
import "aos/dist/aos.css";

import WomanExercise from "../../assets/landingpage/womanexercise.svg";
import Schedule from "../../assets/landingpage/schedule.svg";
import GuyCooking from "../../assets/landingpage/guycooking.svg";
import CloudSync from "../../assets/landingpage/cloudsync.svg";

const Features = () => {
  AOS.init();
  return (
    <>
      <section>
        <ImageContainer>
          <MainImage src={WomanExercise} alt="woman excersise" />
          <FeatureTextContainer>
            <SubText>
              Find the exercises you need to make your own workout plans
            </SubText>
            <TextDesktop>Create your own workout plans</TextDesktop>
            <TextSubDesktop>
              Choose from a variety of exercises, edit the intensity level and
              set goals to track your progress{" "}
            </TextSubDesktop>
          </FeatureTextContainer>
        </ImageContainer>
        <ImageContainer2>
          <div data-aos="fade-up">
            <MainImage src={Schedule} alt="Schedule" />
          </div>
          <FeatureTextContainer>
            <SubText>
              Find the exercises you need to make your own workout plans
            </SubText>
            <TextDesktop>Schedule your workouts</TextDesktop>
            <TextSubDesktop>
              Set up a schedule to be consistent and workout at the best time
              for you
            </TextSubDesktop>
          </FeatureTextContainer>
        </ImageContainer2>
        <ImageContainer>
          <div data-aos="fade-up">
            <MainImage src={GuyCooking} alt="Cooking" />
          </div>
          <FeatureTextContainer>
            <SubText>
              Find the exercises you need to make your own workout plans
            </SubText>
            <TextDesktop>Set a meal plan</TextDesktop>
            <TextSubDesktop>
              Keep track of your calories and make a meal plan that helps
              achieve your health goals
            </TextSubDesktop>
          </FeatureTextContainer>
        </ImageContainer>
        <ImageContainer2>
          <div data-aos="fade-up">
            <MainImage src={CloudSync} alt="Share" />
          </div>
          <FeatureTextContainer>
            <SubText>
              Find the exercises you need to make your own workout plans
            </SubText>
            <TextDesktop>Share your workout plans</TextDesktop>
            <TextSubDesktop>
              Once you create a plan you can share it, making it available for
              other user to take advantage of it and help each other achieve
              goals.
            </TextSubDesktop>
          </FeatureTextContainer>
        </ImageContainer2>
      </section>
      <CtaSection>
        <ExitText>Ready to start your fitness journey?</ExitText>
        <ButtonMobileContainer>
          <Link to="/register">
            <ButtonMobileIntro>Let's Start</ButtonMobileIntro>
          </Link>
        </ButtonMobileContainer>
        <ButtonDesktopContainer>
          <Link to="/register">
            <ButtonDesktopIntro>Let's Start</ButtonDesktopIntro>
          </Link>
        </ButtonDesktopContainer>
      </CtaSection>
    </>
  );
};

export default Features;
