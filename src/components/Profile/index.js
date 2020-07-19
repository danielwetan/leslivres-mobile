/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import styles from './syles';

import ProfileInfo from './ProfileInfo';
import HistoryList from './HistoryList';
import Axios from 'axios';

const Profile = () => {
  const [userInfo, setUserInfo] = useState([]);

  const getUserData = () => {
    Axios({
      method: 'GET',
      url: 'http://192.168.43.186:3000/user/1',
    })
      .then((res) => {
        setUserInfo(res.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <View style={[styles.container, styles.profile]}>
        {userInfo.map((data) => {
          return (
            <ProfileInfo
              key={data.id}
              id={data.id}
              username={data.username}
              fullName={data.full_name}
              email={data.email}
            />
          );
        })}

        {/* <Text style={styles.history}>Borrow History</Text> */}
        <HistoryList />
      </View>
    </>
  );
};

export default Profile;
