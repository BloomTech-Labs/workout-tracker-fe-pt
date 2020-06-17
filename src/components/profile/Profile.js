import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header/Header';
import ProfileContext from '../../contexts/ProfileContext';
import { axiosWithAuth } from '../authentication/axiosWithAuth';
import { HeaderSection } from './style';
import { decode } from 'jsonwebtoken';

const initialUserInfo = {
  name: '',
  location: '',
  bio: '',
};

export default function Profile() {
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const getUserInfo = () => {
    //provides the info for the specific user that is logged in.
    const { subject } = decode(localStorage.getItem('token'));
    axiosWithAuth()
      .get(`https://frozen-hamlet-18508.herokuapp.com/api/users/${subject}`)
      .then((res) => {
        setUserInfo(res.data);
        console.log('res.data', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const postUserInfo = (user) => {
    axios
      .post('', user)
      .then((res) => {
        setUserInfo(res.data, ...userInfo);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setUserInfo(initialUserInfo);
      });
  };

  const handleChanges = (evt) => {
    const { name } = evt.target;
    const { value } = evt.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const user = {
      image: userInfo.image.trim(),
      location: userInfo.location.trim(),
      bio: userInfo.bio.trim(),
    };
    postUserInfo(user);
  };

  return (
    <ProfileContext.Provider value={{ userInfo }}>
      <HeaderSection>
        <Header />
        {/* <form className="form-container" onSubmit={onSubmit}>
        <label>Name</label>
        <input
        type="text"
        name="image"
        onChange={handleChanges}
        value={userInfo.image}
        />
        <label>Location</label>
        <input
        type="text"
        name="location"
        onChange={handleChanges}
        value={userInfo.affiliate}
        />
        <label>Bio</label>
        <input
        type="text"
        name="bio"
        onChange={handleChanges}
        value={userInfo.bio}
        />
        <button>Post</button>
      </form> */}
      </HeaderSection>
    </ProfileContext.Provider>
  );
}
