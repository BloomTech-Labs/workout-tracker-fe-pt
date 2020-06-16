import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../authentication/axiosWithAuth';
import LandingNav from '../../../containers/landingnav/landingnav';
import { InfoSection, TextContainer, Text, Image } from './style';

const Header = () => {
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = () => {
    axiosWithAuth()
      .get('https://frozen-hamlet-18508.herokuapp.com/api/users/4')
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

  return (
    <>
      <LandingNav />
      <InfoSection>
        <TextContainer>
          <Image src="https://images.pexels.com/photos/4355345/pexels-photo-4355345.jpeg?cs=srgb&dl=portrait-of-a-fashion-model-4355345.jpg&fm=jpg"></Image>
          <Text> {userInfo.username} </Text>
          <Text> {userInfo.email}</Text>
          <Text>XP: {userInfo.xp}</Text>
        </TextContainer>
      </InfoSection>
    </>
  );
};

export default Header;
