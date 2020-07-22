import React, { useContext, useState } from "react";
import { axiosWithAuth } from "../../authentication/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
    ButtonMobileContainer,
    ButtonMobileIntro,
    Form,
    Input,
    Label,
    PageTitle,
} from "./style";
import { decode } from "jsonwebtoken";
import ProfileContext from "../../../contexts/ProfileContext";
const ProfileForm = () => {
    const { register, errors, handleSubmit } = useForm();
    const [editProfile, setEditProfile] = useState({
        // username: "",
        // email: "",
        // bio: "",
    });
    const { userInfo, setUserInfo } = useContext(ProfileContext);
    const getUserInfo = () => {
        //provides the info for the specific user that is logged in.
        const { subject } = decode(localStorage.getItem("token"));
        axiosWithAuth()
            .get(`https://frozen-hamlet-18508.herokuapp.com/api/users/${subject}`)
            .then((res) => {
                setUserInfo(res.data);
                console.log("res.data", res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    let history = useHistory();
    const editProfileInfo = () => {
        //provides the info for the specific user that is logged in.
        axiosWithAuth()
            .put(`https://frozen-hamlet-18508.herokuapp.com/api/users/`, editProfile)
            .then((res) => {
                console.log("response", res.data);
                getUserInfo();
                setEditProfile({
                    username: "",
                    email: "",
                    bio: "",
                });
            })
            .catch((err) => {
                console.log("Profile error", err);
            });
    };
    const handleChange = (e) => {
        e.preventDefault();
        setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        editProfileInfo();
    };
    return (
        <>
            <PageTitle> Edit Profile </PageTitle>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="email">Bio</Label>
                <Input
                    type="text"
                    value={editProfile.bio}
                    id="bio"
                    label="bio"
                    name="bio"
                    htmlFor="bio"
                    placeholder="Update Bio"
                    onChange={handleChange}
                    ref={register({
                        minLength: {
                            value: 3,
                            message: "Bio is too short",
                        },
                    })}
                />
                {/* NOTE: Responsible for displaying the errors */}
                {errors.bio && errors.bio.message}
                <Label htmlFor="email">Username</Label>
                <Input
                    type="text"
                    value={editProfile.username}
                    id="username"
                    label="username"
                    name="username"
                    htmlFor="username"
                    placeholder="Update Username"
                    onChange={handleChange}
                    ref={register({
                        minLength: {
                            value: 3,
                            message: "Username is too short",
                        },
                    })}
                />
                {/* NOTE: Responsible for displaying the errors */}
                {errors.username && errors.username.message}
                <Label htmlFor="email">Email</Label>
                <Input
                    type="text"
                    value={editProfile.email}
                    id="email"
                    label="email"
                    name="email"
                    htmlFor="email"
                    placeholder="Update Email"
                    onChange={handleChange}
                    ref={register({
                        minLength: {
                            value: 3,
                            message: "Email is too short",
                        },
                    })}
                />
                {/* NOTE: Responsible for displaying the errors */}
                {errors.email && errors.email.message}
                <ButtonMobileContainer>
                    <ButtonMobileIntro type="submit">Save</ButtonMobileIntro>
                </ButtonMobileContainer>
            </Form>
        </>
    );
};
export default ProfileForm;