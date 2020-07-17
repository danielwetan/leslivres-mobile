/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';

import Main from '../components/Register';
const Register = () => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <Main />
      </SafeAreaView>
    </>
  );
};

export default Register;
