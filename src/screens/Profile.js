/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {Input, Button} from 'react-native-elements';
import TopMenu from '../components/Public/Menu/Top';
import Main from '../components/Profile';
const Profile = ({navigation}) => {
  return (
    <>
      <TopMenu nav={navigation}/>
      <Main />
    </>
  );
};

export default Profile;
