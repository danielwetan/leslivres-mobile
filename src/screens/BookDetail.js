/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {Input, Button} from 'react-native-elements';
import TopMenu from '../components/Public/Menu/Top';
import Main from '../components/BookDetail';
const Profile = ({navigation}) => {
  return (
    <>
      <TopMenu nav={navigation} />
      <Main />
    </>
  );
};

export default Profile;
