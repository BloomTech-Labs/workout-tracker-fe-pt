import React, { useContext } from 'react';
import ProfileContext from '../../../contexts/ProfileContext';
import LandingNav from '../../../containers/landingnav/landingnav';
import { InfoSection, TextContainer, Text, Image } from './style';

const Header = () => {
  const { userInfo } = useContext(ProfileContext);
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
