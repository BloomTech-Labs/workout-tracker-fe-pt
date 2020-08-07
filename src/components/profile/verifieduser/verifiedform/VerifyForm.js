import React from "react";
import ProfileNav from "../../profilenav/ProfileNav";
import NavigationBar from "../../../navigationbar/navigationbar";
import { useForm } from "react-hook-form";
import {
  Badge,
  ImageContainer,
  InformationContent,
  InfoText,
  InfoTitle,
  IntroSection,
  LeftArrowNavigate,
} from "./style";
import LeftArrow from "../../../../assets/profilepage/leftarrow.svg";
import CheckMark from "../../../../assets/profilepage/checkmark.svg";
import WorkoutTrainer from "../../../../assets/profilepage/workouttrainer.svg";
import {
  ButtonMobileIntro,
  Form,
  FormContainer,
  FormHeader,
  InnerForm,
  Input,
  Label,
  PageTitle,
} from "./style";

const VerifyForm = () => {
  const { register, errors, handleSubmit } = useForm();
  return (
    <>
      <NavigationBar />
      <ProfileNav />
      <a href="/accountinformation">
        <LeftArrowNavigate src={LeftArrow} alt="Left Arrow" />
      </a>
      <IntroSection>
        <InformationContent>
          <InfoTitle>
            Apply to become Verified <Badge src={CheckMark} />
          </InfoTitle>
          <InfoText>
            When you become verified a blue checkmark will appear next to the
            profile picture. This indicates that the account is owned by a
            Reputable source in the fitness community. We will also verify the
            number of followers, likes and profile rating the account has to
            confirm that the account has an authentic social media presence.
          </InfoText>
          <InfoText>
            Submitting a request for verification does not guarantee that the
            account will be verified.
          </InfoText>
        </InformationContent>
        <ImageContainer>
          <img src={WorkoutTrainer} alt="workout trainer" />
        </ImageContainer>
      </IntroSection>
      <FormContainer>
        <Form>
          <FormHeader>
            <PageTitle> Verified Account Application </PageTitle>
          </FormHeader>
          <FormContainer>
            <InnerForm>
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                // value={ADD your state + backend data here.}
                id="email"
                label="email"
                name="email"
                htmlFor="email"
                placeholder="Email"
                // onChange={handleChange}
                ref={register({})}
              />

              {/* NOTE: Responsible for displaying the errors */}
              {errors.email && errors.email.message}
            </InnerForm>

            <InnerForm>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                // value={ADD your state + backend data here.}
                id="username"
                label="username"
                name="username"
                htmlFor="username"
                placeholder="Username"
                // onChange={handleChange}
                ref={register({
                  minLength: {
                    value: 3,
                    message: "Username is too short",
                  },
                })}
              />

              {/* NOTE: Responsible for displaying the errors */}
              {errors.username && errors.username.message}
            </InnerForm>
          </FormContainer>

          <FormContainer>
            <InnerForm>
              <Label htmlFor="firstname">First Name</Label>
              <Input
                type="text"
                // value={ADD your state + backend data here.}
                id="firstname"
                label="firstname"
                name="firstname"
                htmlFor="firstname"
                placeholder="First Name"
                // onChange={handleChange}
                ref={register({
                  minLength: {
                    value: 2,
                    message: "First name is too short",
                  },
                })}
              />

              {/* NOTE: Responsible for displaying the errors */}
              {errors.firstname && errors.firstname.message}
            </InnerForm>

            <InnerForm>
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                type="text"
                // value={ADD your state + backend data here.}
                id="lastname"
                label="lastname"
                name="lastname"
                htmlFor="lastname"
                placeholder="Last Name"
                // onChange={handleChange}
                ref={register({
                  minLength: {
                    value: 3,
                    message: "Last name is too short",
                  },
                })}
              />

              {/* NOTE: Responsible for displaying the errors */}
              {errors.lastname && errors.lastname.message}
            </InnerForm>
          </FormContainer>

          <Label htmlFor="explain">
            Tell us why this account should be verified.
          </Label>
          <Input
            type="text"
            // value={ADD your state + backend data here.}
            id="explain"
            label="explain"
            name="explain"
            htmlFor="explain"
            placeholder="Brief explanation on why you should be verified."
            // onChange={handleChange}
            ref={register({
              minLength: {
                value: 3,
                message: "Explain is too short",
              },
            })}
          />

          {/* NOTE: Responsible for displaying the errors */}
          {errors.email && errors.email.message}
        </Form>
      </FormContainer>
      <ButtonMobileIntro type="submit">Send</ButtonMobileIntro>
    </>
  );
};

export default VerifyForm;
