import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = () => {
    axios
      .get('https://frozen-hamlet-18508.herokuapp.com/api/users/org')
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
      <section>
        <div>
          <h2> {userInfo.message} </h2>
          <p>California</p>
          <p>Loves to hike!</p>
        </div>
      </section>
    </>
  );
};

export default Header;
