import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header/Header';
import { HeaderSection } from './style';

const initialUserInfo = {
  name: '',
  location: '',
  bio: '',
};

export default function Profile() {
  const [userInfo, setUserInfo] = useState(initialUserInfo);

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
  );
}
