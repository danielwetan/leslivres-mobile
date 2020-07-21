/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {Input, Button} from 'react-native-elements';
import TopMenu from '../components/Public/Menu/Top';
import Main from '../components/Profile';
const Profile = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <TopMenu nav={navigation} />
        <Main nav={navigation} />
      </SafeAreaView>
    </>
  );
};

export default Profile;
